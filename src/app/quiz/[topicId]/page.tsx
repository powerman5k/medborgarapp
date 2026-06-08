import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { QuizClient } from "@/components/QuizClient";
import { getQuestionsByTopic, getTopicById, normalizeQuestionTypeFilter } from "@/lib/quiz";
import { topics } from "@/data/questions";

type SearchParams = Record<string, string | string[] | undefined>;

type QuizPageProps = {
  params: Promise<{
    topicId: string;
  }>;
  searchParams: Promise<SearchParams>;
};

export function generateStaticParams() {
  return topics.map((topic) => ({
    topicId: topic.id,
  }));
}

function readText(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function QuizPage({ params, searchParams }: QuizPageProps) {
  const { topicId } = await params;
  const query = await searchParams;
  const topic = getTopicById(topicId);

  if (!topic) {
    notFound();
  }

  const questions = getQuestionsByTopic(topic.id);
  const initialFilter = normalizeQuestionTypeFilter(readText(query.type));

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
      <QuizClient topic={topic} questions={questions} initialFilter={initialFilter} />
    </PageShell>
  );
}
