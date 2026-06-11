import { redirect } from "next/navigation";

export const defaultAuthErrorMessage = "Något gick fel med Supabase Auth. Kontrollera inställningarna och prova igen.";

export function getFormValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export function getErrorMessage(error: unknown) {
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

export function redirectWithMessage(path: string, message: string): never {
  redirect(`${path}?message=${encodeURIComponent(message)}`);
}
