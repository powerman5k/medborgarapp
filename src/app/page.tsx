import Image from "next/image";
import { BookOpen, CheckCircle2, Sparkles } from "lucide-react";
import { HomeActions } from "@/components/HomeActions";
import { PageShell } from "@/components/PageShell";
import { getQuizStats } from "@/lib/question-bank";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { totalQuestions, totalTopics } = await getQuizStats();

  return (
    <PageShell>
      <section className="relative isolate min-h-[28rem] overflow-hidden border-y border-white/10 py-10 lg:min-h-[34rem]">
        <Image
          src="/sverige-focus-hero.png"
          alt="Illustration av studier inför medborgarskapsprov"
          width={900}
          height={680}
          priority
          className="pointer-events-none absolute bottom-0 right-0 -z-10 h-full w-full object-cover object-center opacity-25 mix-blend-luminosity lg:w-[58%] lg:opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,13,20,0.96)_0%,rgba(10,13,20,0.82)_45%,rgba(10,13,20,0.42)_100%)]" />

        <div className="flex min-h-[24rem] max-w-3xl flex-col justify-center lg:min-h-[30rem]">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-moss/20 bg-moss/10 px-3 py-2 text-sm font-semibold text-moss shadow-sm">
            <Sparkles aria-hidden="true" className="h-4 w-4" />
            Byggt på Sverige i fokus
          </div>
          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-normal text-ink sm:text-6xl lg:text-7xl">
            Träna inför medborgarskapsprovet
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ink/72 sm:text-lg">
            Öva ämne för ämne med tydliga flervalsfrågor, direkt återkoppling och korta förklaringar efter varje svar.
          </p>

          <HomeActions statsText={`${totalTopics} ämnen · ${totalQuestions} frågor`} />
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-white/10 bg-white/[0.08] p-5 shadow-soft backdrop-blur-2xl">
          <BookOpen aria-hidden="true" className="h-5 w-5 text-moss" />
          <p className="mt-4 text-3xl font-black text-ink">{totalTopics}</p>
          <p className="text-sm text-ink/60">ämnen att öva på</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.08] p-5 shadow-soft backdrop-blur-2xl">
          <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-leaf" />
          <p className="mt-4 text-3xl font-black text-ink">{totalQuestions}</p>
          <p className="text-sm text-ink/60">frågor totalt</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.08] p-5 shadow-soft backdrop-blur-2xl">
          <Sparkles aria-hidden="true" className="h-5 w-5 text-wheat" />
          <p className="mt-4 text-3xl font-black text-ink">Direkt</p>
          <p className="text-sm text-ink/60">rätt/fel och förklaring</p>
        </div>
      </section>
    </PageShell>
  );
}
