import Link from "next/link";
import { BookOpenCheck, RotateCcw, Trophy } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { PrimaryLink } from "@/components/PrimaryLink";
import { SaveQuizResult } from "@/components/SaveQuizResult";
import {
  examTopic,
  getResultMessage,
  getTopicById,
  normalizeQuestionTypeFilter,
  questionTypeFilterOptions,
  wrongAnswersTopic,
} from "@/lib/quiz";

type SearchParams = Record<string, string | string[] | undefined>;

type ResultPageProps = {
  searchParams: Promise<SearchParams>;
};

function readNumber(value: string | string[] | undefined): number {
  const rawValue = Array.isArray(value) ? value[0] : value;
  const parsed = Number(rawValue);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

function readText(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function ResultPage({ searchParams }: ResultPageProps) {
  const params = await searchParams;
  const total = readNumber(params.total);
  const score = total > 0 ? Math.min(readNumber(params.score), total) : readNumber(params.score);
  const topicId = readText(params.topic);
  const attemptId = readText(params.attempt);
  const typeFilter = normalizeQuestionTypeFilter(readText(params.type));
  const topic =
    topicId === wrongAnswersTopic.id
      ? wrongAnswersTopic
      : topicId === examTopic.id
        ? examTopic
        : topicId
          ? getTopicById(topicId)
          : undefined;
  const resultMessage = getResultMessage(score, total);
  const retryHref = topic
    ? topic.id === wrongAnswersTopic.id
      ? "/feltraning"
      : topic.id === examTopic.id
        ? "/prov"
        : `/quiz/${topic.id}${typeFilter === "all" ? "" : `?type=${typeFilter}`}`
    : "/amnen";
  const filterLabel = questionTypeFilterOptions.find((option) => option.value === typeFilter)?.label;
  const resultMode = [topic?.title ?? "Okänt ämne", filterLabel].filter(Boolean).join(" · ");

  return (
    <PageShell>
      <section className="mx-auto w-full max-w-2xl rounded-lg border border-ink/10 bg-white p-6 text-center shadow-soft sm:p-8">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-wheat/40 text-moss">
          <Trophy aria-hidden="true" className="h-8 w-8" />
        </div>
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-moss">
          {topic ? topic.title : "Resultat"}
        </p>
        {filterLabel ? <p className="mt-2 text-sm font-semibold text-ink/55">{filterLabel}</p> : null}
        <h1 className="mt-3 text-4xl font-black text-ink sm:text-5xl">
          {score} av {total} rätt
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-ink/70">{resultMessage}</p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          {topic ? (
            <Link
              href={retryHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-mist focus:outline-none focus:ring-4 focus:ring-leaf/20"
            >
              <RotateCcw aria-hidden="true" className="h-4 w-4" />
              Öva igen
            </Link>
          ) : null}
          <PrimaryLink href="/amnen">Välj nytt ämne</PrimaryLink>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-2xl items-start gap-3 rounded-lg border border-ink/10 bg-white/75 p-4 text-left text-sm leading-6 text-ink/70">
        <BookOpenCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-moss" />
        <div className="grid flex-1 gap-3">
          <p>Frågorna ligger lokalt i projektet och resultatet sparas i Supabase när du är inloggad.</p>
          <SaveQuizResult attemptId={attemptId} score={score} total={total} mode={resultMode} />
        </div>
      </section>
    </PageShell>
  );
}
