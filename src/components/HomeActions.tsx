"use client";

import Link from "next/link";
import { ArrowRight, ClipboardCheck, LogIn } from "lucide-react";
import { useAuthSession } from "@/lib/supabase/use-auth-session";

type HomeActionsProps = {
  statsText: string;
};

export function HomeActions({ statsText }: HomeActionsProps) {
  const { isLoading, user } = useAuthSession();

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
      <Link
        href="/amnen"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#67e8f9_0%,#34d399_54%,#f7c35f_115%)] px-6 py-3 text-sm font-black text-[#071015] shadow-soft transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-moss/25"
      >
        Börja öva
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </Link>
      <Link
        href="/prov"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-6 py-3 text-sm font-semibold text-ink shadow-sm backdrop-blur-2xl transition hover:-translate-y-0.5 hover:bg-white/[0.12] focus:outline-none focus:ring-4 focus:ring-moss/20"
      >
        <ClipboardCheck aria-hidden="true" className="h-4 w-4 text-moss" />
        Starta prov
      </Link>
      {!isLoading && !user ? (
        <Link
          href="/login"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-6 py-3 text-sm font-semibold text-ink shadow-sm backdrop-blur-2xl transition hover:-translate-y-0.5 hover:bg-white/[0.12] focus:outline-none focus:ring-4 focus:ring-moss/20"
        >
          <LogIn aria-hidden="true" className="h-4 w-4 text-moss" />
          Logga in
        </Link>
      ) : null}
      <div className="text-sm font-semibold text-ink/58">{statsText}</div>
    </div>
  );
}
