import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft, KeyRound, Save } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { createClient } from "@/lib/supabase/server";
import { updatePassword } from "./actions";

type ResetPasswordPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function readText(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function ResetPasswordPage({ searchParams }: ResetPasswordPageProps) {
  const params = await searchParams;
  const message = readText(params.message);
  const supabase = await createClient();
  let canUpdatePassword = false;

  try {
    const { data, error } = await supabase.auth.getUser();
    canUpdatePassword = Boolean(!error && data.user);
  } catch (error) {
    console.error("Supabase password reset session lookup failed", error);
  }

  if (!canUpdatePassword) {
    redirect("/forgot-password?message=Öppna återställningslänken i din e-post för att välja ett nytt lösenord.");
  }

  return (
    <PageShell>
      <section className="mx-auto w-full max-w-2xl rounded-lg border border-ink/10 bg-white p-5 shadow-soft sm:p-8">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-mist text-moss">
          <KeyRound aria-hidden="true" className="h-7 w-7" />
        </div>
        <div className="mt-5 text-center">
          <h1 className="text-3xl font-black text-ink">Välj nytt lösenord</h1>
          <p className="mt-3 text-sm leading-6 text-ink/70">
            Ange ett nytt lösenord för ditt konto.
          </p>
        </div>

        {message ? (
          <div className="mt-6 rounded-lg border border-wheat/60 bg-wheat/20 px-4 py-3 text-sm font-medium text-ink">
            {message}
          </div>
        ) : null}

        <form className="mt-6 grid gap-4" action={updatePassword}>
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Nytt lösenord
            <input
              required
              name="password"
              type="password"
              autoComplete="new-password"
              minLength={6}
              className="min-h-12 rounded-lg border border-ink/10 bg-white px-4 text-base font-medium text-ink outline-none transition focus:border-moss focus:ring-4 focus:ring-leaf/20"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Bekräfta lösenord
            <input
              required
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              minLength={6}
              className="min-h-12 rounded-lg border border-ink/10 bg-white px-4 text-base font-medium text-ink outline-none transition focus:border-moss focus:ring-4 focus:ring-leaf/20"
            />
          </label>

          <button
            type="submit"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-moss px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink focus:outline-none focus:ring-4 focus:ring-leaf/25"
          >
            <Save aria-hidden="true" className="h-4 w-4" />
            Spara lösenord
          </button>
        </form>

        <div className="mt-6 text-center text-sm font-medium text-ink/65">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-moss hover:bg-mist focus:outline-none focus:ring-4 focus:ring-leaf/20"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Till inloggning
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
