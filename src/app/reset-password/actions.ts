"use server";

import { getErrorMessage, getFormValue, redirectWithMessage } from "@/lib/auth/forms";
import { createClient } from "@/lib/supabase/server";

export async function updatePassword(formData: FormData) {
  const password = getFormValue(formData, "password");
  const confirmPassword = getFormValue(formData, "confirmPassword");

  if (!password || !confirmPassword) {
    redirectWithMessage("/reset-password", "Fyll i och bekräfta ditt nya lösenord.");
  }

  if (password.length < 6) {
    redirectWithMessage("/reset-password", "Lösenordet behöver vara minst 6 tecken.");
  }

  if (password !== confirmPassword) {
    redirectWithMessage("/reset-password", "Lösenorden matchar inte.");
  }

  const supabase = await createClient();
  let authError: unknown = null;

  try {
    const { error } = await supabase.auth.updateUser({ password });
    authError = error;
  } catch (error) {
    authError = error;
  }

  if (authError) {
    redirectWithMessage("/reset-password", `Lösenordet kunde inte uppdateras: ${getErrorMessage(authError)}`);
  }

  try {
    await supabase.auth.signOut();
  } catch (error) {
    console.error("Supabase sign out after password reset failed", error);
  }

  redirectWithMessage("/login", "Lösenordet är uppdaterat. Logga in med ditt nya lösenord.");
}
