import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { QuizClient } from "@/components/QuizClient";
import { getQuestionsByTopic, getTopicById } from "@/lib/quiz";
import { topics } from "@/data/questions";

type QuizPageProps = {
  params: Promise<{
    topicId: string;
  }>;
};

export function generateStaticParams() {
  return topics.map((topic) => ({
    topicId: topic.id,
  }));
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { topicId } = await params;
  const topic = getTopicById(topicId);

  if (!topic) {
    notFound();
  }

  const questions = getQuestionsByTopic(topic.id);

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
      <QuizClient topic={topic} questions={questions} />
    </PageShell>
  );
}
