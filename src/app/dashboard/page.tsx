import Link from "next/link";
import { redirect } from "next/navigation";
import { BarChart3, CalendarDays, LogOut, ShieldCheck, Target } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { createClient } from "@/lib/supabase/server";
import { logout } from "./actions";

type QuizResultRow = {
  id: string;
  score: number;
  total: number;
  mode: string;
  created_at: string | null;
};

function formatDate(value: string | null) {
  if (!value) {
    return "Okänt datum";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Okänt datum";
  }

  return new Intl.DateTimeFormat("sv-SE", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function getPercentage(score: number, total: number) {
  return total > 0 ? Math.round((score / total) * 100) : 0;
}

export default async function DashboardPage() {
  const supabase = await createClient();
  let isAuthenticated = false;
  let email = "Okänd e-post";
  let userId: string | null = null;
  let quizResults: QuizResultRow[] = [];
  let quizResultsError: string | null = null;

  try {
    const { data, error } = await supabase.auth.getUser();

    if (!error && data.user) {
      isAuthenticated = true;
      email = data.user.email ?? email;
      userId = data.user.id;
    }
  } catch (error) {
    console.error("Supabase user lookup failed", error);
  }

  if (!isAuthenticated) {
    redirect("/login?message=Logga in igen för att fortsätta.");
  }

  if (userId) {
    try {
      const { data, error } = await supabase
        .from("quiz_results")
        .select("id, score, total, mode, created_at")
        .eq("user_id", userId)
        .order("created_at", { ascending: false })
        .limit(10);

      if (error) {
        quizResultsError = error.message;
      } else {
        quizResults = (data ?? []) as QuizResultRow[];
      }
    } catch (error) {
      console.error("Supabase quiz results lookup failed", error);
      quizResultsError = "Resultaten kunde inte hämtas just nu.";
    }
  }

  return (
    <PageShell>
      <section className="mx-auto w-full max-w-3xl rounded-lg border border-ink/10 bg-white p-5 shadow-soft sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-mist text-moss">
              <ShieldCheck aria-hidden="true" className="h-6 w-6" />
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-moss">Dashboard</p>
            <h1 className="mt-3 text-3xl font-black text-ink sm:text-4xl">Välkommen</h1>
            <p className="mt-3 text-base leading-7 text-ink/70">Du är inloggad som:</p>
            <p className="mt-2 break-all rounded-lg border border-ink/10 bg-mist px-4 py-3 text-sm font-bold text-ink">
              {email}
            </p>
          </div>

          <form action={logout}>
            <button
              type="submit"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-mist focus:outline-none focus:ring-4 focus:ring-leaf/20"
            >
              <LogOut aria-hidden="true" className="h-4 w-4" />
              Logga ut
            </button>
          </form>
        </div>

        <div className="mt-8 border-t border-ink/10 pt-5">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/amnen"
              className="inline-flex items-center justify-center rounded-full bg-moss px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink focus:outline-none focus:ring-4 focus:ring-leaf/25"
            >
              Fortsätt öva
            </Link>
            <Link
              href="/feltraning"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-mist focus:outline-none focus:ring-4 focus:ring-leaf/20"
            >
              <Target aria-hidden="true" className="h-4 w-4" />
              Felträning
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl rounded-lg border border-ink/10 bg-white p-5 shadow-soft sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-mist text-moss">
              <BarChart3 aria-hidden="true" className="h-6 w-6" />
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-moss">Historik</p>
            <h2 className="mt-3 text-2xl font-black text-ink sm:text-3xl">Tidigare resultat</h2>
          </div>
          <p className="text-sm font-medium text-ink/60">Senaste 10</p>
        </div>

        {quizResultsError ? (
          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-ink">
            {quizResultsError}
          </div>
        ) : quizResults.length > 0 ? (
          <div className="mt-6 overflow-hidden rounded-lg border border-ink/10">
            <ul className="divide-y divide-ink/10">
              {quizResults.map((result) => {
                const percentage = getPercentage(result.score, result.total);

                return (
                  <li key={result.id} className="grid gap-3 bg-white p-4 sm:grid-cols-[1fr_auto] sm:items-center">
                    <div>
                      <p className="text-base font-bold text-ink">{result.mode}</p>
                      <p className="mt-1 flex items-center gap-2 text-sm font-medium text-ink/60">
                        <CalendarDays aria-hidden="true" className="h-4 w-4 text-moss" />
                        {formatDate(result.created_at)}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 sm:justify-end">
                      <span className="rounded-full bg-mist px-3 py-1 text-sm font-bold text-moss">
                        {percentage}%
                      </span>
                      <span className="text-sm font-bold text-ink">
                        {result.score}/{result.total}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div className="mt-6 rounded-lg border border-dashed border-ink/20 bg-mist p-5 text-sm leading-6 text-ink/70">
            Inga sparade resultat ännu. Gör ett quiz när du är inloggad så visas resultatet här.
          </div>
        )}
      </section>
    </PageShell>
  );
}
