import { PageShell } from "@/components/PageShell";
import { SubjectCard } from "@/components/SubjectCard";
import { getTopicsWithCounts } from "@/lib/question-bank";

export const dynamic = "force-dynamic";

export default async function SubjectsPage() {
  const topics = await getTopicsWithCounts();

  return (
    <PageShell>
      <section className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-moss">Välj ämne</p>
        <h1 className="mt-3 text-4xl font-black text-ink sm:text-5xl">Vad vill du öva på?</h1>
        <p className="mt-4 text-base leading-7 text-ink/65">
          Bli varm i ett område i taget. Varje quiz ger snabb återkoppling och en kort förklaring som hjälper dig minnas.
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
