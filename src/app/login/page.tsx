import Link from "next/link";
import { KeyRound, LockKeyhole, LogIn, UserPlus } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { login, signup } from "./actions";

type LoginPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function readText(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const message = readText(params.message);

  return (
    <PageShell>
      <section className="mx-auto w-full max-w-2xl rounded-lg border border-ink/10 bg-white p-5 shadow-soft sm:p-8">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-mist text-moss">
          <LockKeyhole aria-hidden="true" className="h-7 w-7" />
        </div>
        <div className="mt-5 text-center">
          <h1 className="text-3xl font-black text-ink">Logga in eller skapa konto</h1>
          <p className="mt-3 text-sm leading-6 text-ink/70">
            Använd e-post och lösenord för att komma åt din dashboard.
          </p>
        </div>

        {message ? (
          <div className="mt-6 rounded-lg border border-wheat/60 bg-wheat/20 px-4 py-3 text-sm font-medium text-ink">
            {message}
          </div>
        ) : null}

        <form className="mt-6 grid gap-4" action={login}>
          <label className="grid gap-2 text-sm font-semibold text-ink">
            E-post
            <input
              required
              name="email"
              type="email"
              autoComplete="email"
              className="min-h-12 rounded-lg border border-ink/10 bg-white px-4 text-base font-medium text-ink outline-none transition focus:border-moss focus:ring-4 focus:ring-leaf/20"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Lösenord
            <input
              required
              name="password"
              type="password"
              autoComplete="current-password"
              minLength={6}
              className="min-h-12 rounded-lg border border-ink/10 bg-white px-4 text-base font-medium text-ink outline-none transition focus:border-moss focus:ring-4 focus:ring-leaf/20"
            />
          </label>

          <div className="grid gap-3 sm:grid-cols-2">
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-moss px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink focus:outline-none focus:ring-4 focus:ring-leaf/25"
            >
              <LogIn aria-hidden="true" className="h-4 w-4" />
              Logga in
            </button>
            <button
              type="submit"
              formAction={signup}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-mist focus:outline-none focus:ring-4 focus:ring-leaf/20"
            >
              <UserPlus aria-hidden="true" className="h-4 w-4" />
              Skapa konto
            </button>
          </div>
        </form>

        <div className="mt-6 flex flex-col items-center justify-center gap-2 text-sm font-medium text-ink/65 sm:flex-row">
          <Link
            href="/forgot-password"
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-moss hover:bg-mist focus:outline-none focus:ring-4 focus:ring-leaf/20"
          >
            <KeyRound aria-hidden="true" className="h-4 w-4" />
            Glömt lösenord?
          </Link>
          <Link href="/" className="rounded-full px-3 py-2 text-moss hover:bg-mist focus:outline-none focus:ring-4 focus:ring-leaf/20">
            Till startsidan
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
