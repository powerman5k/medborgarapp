"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

const defaultAuthErrorMessage = "Något gick fel med Supabase Auth. Kontrollera inställningarna och prova igen.";

function getFormValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  if (typeof error === "object" && error && "message" in error) {
    const message = (error as { message?: unknown }).message;
    if (typeof message === "string" && message) {
      return message;
    }
  }

  return defaultAuthErrorMessage;
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
  let authError: unknown = null;

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    authError = error;
  } catch (error) {
    authError = error;
  }

  if (authError) {
    redirectWithMessage("/login", `Inloggningen misslyckades: ${getErrorMessage(authError)}`);
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
  let sessionCreated = false;
  let authError: unknown = null;

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/confirm`,
      },
    });

    sessionCreated = Boolean(data.session);
    authError = error;
  } catch (error) {
    authError = error;
  }

  if (authError) {
    redirectWithMessage("/login", `Kontot kunde inte skapas: ${getErrorMessage(authError)}`);
  }

  if (sessionCreated) {
    redirect("/dashboard");
  }

  redirectWithMessage("/login", "Kontot är skapat. Kontrollera din e-post för att bekräfta kontot.");
}
