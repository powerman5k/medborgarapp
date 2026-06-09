"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function getFormValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function redirectWithMessage(path: string, message: string): never {
  redirect(`${path}?message=${encodeURIComponent(message)}`);
}

export async function login(formData: FormData) {
  const email = getFormValue(formData, "email");
  const password = getFormValue(formData, "password");

  if (!email || !password) {
    redirectWithMessage("/login", "Fyll i både e-post och lösenord.");
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    redirectWithMessage("/login", "Inloggningen misslyckades. Kontrollera e-post och lösenord.");
  }

  redirect("/dashboard");
}

export async function signup(formData: FormData) {
  const email = getFormValue(formData, "email");
  const password = getFormValue(formData, "password");

  if (!email || !password) {
    redirectWithMessage("/login", "Fyll i både e-post och lösenord.");
  }

  if (password.length < 6) {
    redirectWithMessage("/login", "Lösenordet behöver vara minst 6 tecken.");
  }

  const origin = (await headers()).get("origin") ?? "";
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/confirm`,
    },
  });

  if (error) {
    redirectWithMessage("/login", "Kontot kunde inte skapas. Prova igen.");
  }

  if (data.session) {
    redirect("/dashboard");
  }

  redirectWithMessage("/login", "Kontot är skapat. Kontrollera din e-post för att bekräfta kontot.");
}
