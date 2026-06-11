import { redirect } from "next/navigation";
import { type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

type EmailOtpType = "signup" | "invite" | "magiclink" | "recovery" | "email_change" | "email";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const tokenHash = requestUrl.searchParams.get("token_hash");
  const type = requestUrl.searchParams.get("type");
  const nextPath = requestUrl.searchParams.get("next");
  const next = nextPath?.startsWith("/") && !nextPath.startsWith("//") ? nextPath : "/dashboard";
  const supabase = await createClient();
  let isVerified = false;

  try {
    if (code) {
      const { error } = await supabase.auth.exchangeCodeForSession(code);

      if (!error) {
        isVerified = true;
      }
    }

    if (tokenHash && type) {
      const { error } = await supabase.auth.verifyOtp({
        type: type as EmailOtpType,
        token_hash: tokenHash,
      });

      if (!error) {
        isVerified = true;
      }
    }
  } catch (error) {
    console.error("Supabase email confirmation failed", error);
  }

  if (isVerified) {
    redirect(next);
  }

  redirect("/login?message=Bekräftelselänken kunde inte användas.");
}
