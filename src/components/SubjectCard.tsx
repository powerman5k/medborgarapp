import Link from "next/link";
import { ArrowRight, Globe2, HeartPulse, Landmark, Map, Vote } from "lucide-react";
import type { TopicWithCount } from "@/lib/quiz";

const iconMap = {
  map: Map,
  landmark: Landmark,
  vote: Vote,
  heart: HeartPulse,
  globe: Globe2,
};

type SubjectCardProps = {
  topic: TopicWithCount;
};

export function SubjectCard({ topic }: SubjectCardProps) {
  const Icon = iconMap[topic.icon];

  return (
    <Link
      href={`/quiz/${topic.id}`}
      className="group flex h-full flex-col justify-between overflow-hidden rounded-lg border border-white/10 bg-white/[0.08] p-5 shadow-sm backdrop-blur-2xl transition hover:-translate-y-1 hover:border-moss/35 hover:bg-white/[0.12] hover:shadow-soft focus:outline-none focus:ring-4 focus:ring-moss/20"
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <span className="grid h-11 w-11 place-items-center rounded-lg border border-moss/20 bg-moss/10 text-moss">
            <Icon aria-hidden="true" className="h-5 w-5" />
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-xs font-semibold text-ink/78">
            {topic.questionCount} frågor
          </span>
        </div>
        <div>
          <h2 className="text-xl font-black text-ink">{topic.title}</h2>
          <p className="mt-2 text-sm leading-6 text-ink/62">{topic.description}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm font-bold text-moss">
        Starta quiz
        <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
