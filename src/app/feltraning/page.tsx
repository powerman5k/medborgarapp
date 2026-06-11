import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft, Target } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { PrimaryLink } from "@/components/PrimaryLink";
import { QuizClient } from "@/components/QuizClient";
import { getQuestionsByIds, wrongAnswersTopic } from "@/lib/quiz";
import { createClient } from "@/lib/supabase/server";

type WrongAnswerRow = {
  question_id: number;
};

export default async function WrongAnswerTrainingPage() {
  const supabase = await createClient();
  let userId: string | null = null;
  let questionIds: number[] = [];
  let errorMessage: string | null = null;

  try {
    const { data, error } = await supabase.auth.getUser();

    if (!error && data.user) {
      userId = data.user.id;
    }
  } catch (error) {
    console.error("Supabase user lookup failed", error);
  }

  if (!userId) {
    redirect("/login?message=Logga in för att öva på dina tidigare fel.");
  }

  try {
    const { data, error } = await supabase
      .from("wrong_answers")
      .select("question_id")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) {
      errorMessage = error.message;
    } else {
      const seenQuestionIds = new Set<number>();

      questionIds = ((data ?? []) as WrongAnswerRow[])
        .map((row) => row.question_id)
        .filter((questionId) => {
          if (seenQuestionIds.has(questionId)) {
            return false;
          }

          seenQuestionIds.add(questionId);
          return true;
        });
    }
  } catch (error) {
    console.error("Supabase wrong answers lookup failed", error);
    errorMessage = "Frågorna kunde inte hämtas just nu.";
  }

  const questions = getQuestionsByIds(questionIds);

  return (
    <PageShell>
      <div>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-moss hover:bg-white focus:outline-none focus:ring-4 focus:ring-leaf/20"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Till dashboard
        </Link>
      </div>

      {errorMessage ? (
        <section className="mx-auto w-full max-w-2xl rounded-lg border border-red-200 bg-red-50 p-5 text-sm font-medium text-ink shadow-soft sm:p-6">
          {errorMessage}
        </section>
      ) : questions.length > 0 ? (
        <>
          <section className="mx-auto w-full max-w-3xl rounded-lg border border-ink/10 bg-white p-5 shadow-soft sm:p-6">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-mist text-moss">
                <Target aria-hidden="true" className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-moss">Felträning</p>
                <h1 className="mt-2 text-3xl font-black text-ink">Öva på tidigare fel</h1>
                <p className="mt-3 text-sm leading-6 text-ink/70">
                  Här får du bara frågor som du tidigare har svarat fel på.
                </p>
              </div>
            </div>
          </section>

          <QuizClient topic={wrongAnswersTopic} questions={questions} />
        </>
      ) : (
        <section className="mx-auto w-full max-w-2xl rounded-lg border border-ink/10 bg-white p-6 text-center shadow-soft sm:p-8">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-mist text-moss">
            <Target aria-hidden="true" className="h-7 w-7" />
          </div>
          <h1 className="mt-5 text-3xl font-black text-ink">Inga fel att träna på</h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-ink/70">
            När du svarar fel på en fråga sparas den här, så att du kan repetera den senare.
          </p>
          <div className="mt-6">
            <PrimaryLink href="/amnen">Gör ett quiz</PrimaryLink>
          </div>
        </section>
      )}
    </PageShell>
  );
}
