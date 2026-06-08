import { PageShell } from "@/components/PageShell";
import { SubjectCard } from "@/components/SubjectCard";
import { getTopicsWithCounts } from "@/lib/quiz";

export default function SubjectsPage() {
  const topics = getTopicsWithCounts();

  return (
    <PageShell>
      <section className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-moss">Välj ämne</p>
        <h1 className="mt-3 text-3xl font-black text-ink sm:text-4xl">Vad vill du öva på?</h1>
        <p className="mt-4 text-base leading-7 text-ink/70">
          Börja med ett område i taget. Varje quiz visar direkt om svaret är rätt eller fel och ger en kort förklaring.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <SubjectCard key={topic.id} topic={topic} />
        ))}
      </section>
    </PageShell>
  );
}
