"use server";

import { getErrorMessage, getFormValue, redirectWithMessage } from "@/lib/auth/forms";
import { getRequestOrigin } from "@/lib/auth/request";
import { createClient } from "@/lib/supabase/server";

export async function requestPasswordReset(formData: FormData) {
  const email = getFormValue(formData, "email");

  if (!email) {
    redirectWithMessage("/forgot-password", "Fyll i din e-postadress.");
  }

  const origin = await getRequestOrigin();
  const supabase = await createClient();
  let authError: unknown = null;

  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${origin}/auth/confirm?next=/reset-password`,
    });

    authError = error;
  } catch (error) {
    authError = error;
  }

  if (authError) {
    redirectWithMessage("/forgot-password", `Återställningslänken kunde inte skickas: ${getErrorMessage(authError)}`);
  }

  redirectWithMessage(
    "/forgot-password",
    "Om e-postadressen finns hos oss har vi skickat en länk för att återställa lösenordet.",
  );
}
