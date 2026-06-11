import Image from "next/image";
import Link from "next/link";
import { BookOpen, CheckCircle2, ClipboardCheck, LogIn, Sparkles } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { PrimaryLink } from "@/components/PrimaryLink";
import { getQuizStats } from "@/lib/quiz";

export default function Home() {
  const { totalQuestions, totalTopics } = getQuizStats();

  return (
    <PageShell>
      <section className="grid items-center gap-8 pb-8 pt-4 lg:grid-cols-[1.05fr_0.95fr] lg:pb-14">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-3 py-2 text-sm font-semibold text-moss shadow-sm">
            <Sparkles aria-hidden="true" className="h-4 w-4" />
            Byggt på Sverige i fokus
          </div>
          <h1 className="text-4xl font-black leading-tight tracking-normal text-ink sm:text-5xl lg:text-6xl">
            Träna inför medborgarskapsprovet
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-ink/72 sm:text-lg">
            Öva ämne för ämne med tydliga flervalsfrågor, direkt återkoppling och korta förklaringar efter varje svar.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryLink href="/amnen">Börja öva</PrimaryLink>
            <Link
              href="/prov"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:bg-mist focus:outline-none focus:ring-4 focus:ring-leaf/20"
            >
              <ClipboardCheck aria-hidden="true" className="h-4 w-4" />
              Starta prov
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:bg-mist focus:outline-none focus:ring-4 focus:ring-leaf/20"
            >
              <LogIn aria-hidden="true" className="h-4 w-4" />
              Logga in
            </Link>
            <div className="text-sm font-medium text-ink/65">
              {totalTopics} ämnen · {totalQuestions} lokala frågor
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-4 -z-10 rounded-lg bg-wheat/40 blur-3xl" />
          <Image
            src="/sverige-focus-hero.png"
            alt="Illustration av studier inför medborgarskapsprov"
            width={900}
            height={680}
            priority
            className="w-full rounded-lg border border-white/70 bg-white shadow-soft"
          />
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-ink/10 bg-white/80 p-4">
          <BookOpen aria-hidden="true" className="h-5 w-5 text-moss" />
          <p className="mt-3 text-2xl font-black text-ink">{totalTopics}</p>
          <p className="text-sm text-ink/65">ämnen att öva på</p>
        </div>
        <div className="rounded-lg border border-ink/10 bg-white/80 p-4">
          <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-leaf" />
          <p className="mt-3 text-2xl font-black text-ink">{totalQuestions}</p>
          <p className="text-sm text-ink/65">frågor i lokal datafil</p>
        </div>
        <div className="rounded-lg border border-ink/10 bg-white/80 p-4">
          <Sparkles aria-hidden="true" className="h-5 w-5 text-wheat" />
          <p className="mt-3 text-2xl font-black text-ink">Direkt</p>
          <p className="text-sm text-ink/65">rätt/fel och förklaring</p>
        </div>
      </section>
    </PageShell>
  );
}
