import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft, ClipboardCheck } from "lucide-react";
import { ExamClient } from "@/components/ExamClient";
import { PageShell } from "@/components/PageShell";
import { getAllQuestions } from "@/lib/question-bank";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function ExamPage() {
  const supabase = await createClient();
  let isAuthenticated = false;

  try {
    const { data, error } = await supabase.auth.getUser();
    isAuthenticated = Boolean(!error && data.user);
  } catch (error) {
    console.error("Supabase exam session lookup failed", error);
  }

  if (!isAuthenticated) {
    redirect("/login?message=Logga in för att starta provläget och spara resultatet.");
  }

  const questions = await getAllQuestions();

  return (
    <PageShell>
      <div>
        <Link
          href="/amnen"
          className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-moss hover:bg-white focus:outline-none focus:ring-4 focus:ring-leaf/20"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Till ämnen
        </Link>
      </div>

      <section className="mx-auto w-full max-w-3xl rounded-lg border border-ink/10 bg-white p-5 shadow-soft sm:p-6">
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-mist text-moss">
            <ClipboardCheck aria-hidden="true" className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-moss">Provläge</p>
            <h1 className="mt-2 text-3xl font-black text-ink">10 minuter, 20 frågor</h1>
            <p className="mt-3 text-sm leading-6 text-ink/70">
              Du får inget facit under provet. När tiden tar slut eller du lämnar in visas resultatet och sparas på din
              dashboard.
            </p>
          </div>
        </div>
      </section>

      <ExamClient questions={questions} />
    </PageShell>
  );
}
