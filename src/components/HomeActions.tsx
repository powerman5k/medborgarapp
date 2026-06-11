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
        className="inline-flex items-center justify-center gap-2 rounded-full bg-moss px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ink focus:outline-none focus:ring-4 focus:ring-leaf/25"
      >
        Börja öva
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </Link>
      <Link
        href="/prov"
        className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:bg-mist focus:outline-none focus:ring-4 focus:ring-leaf/20"
      >
        <ClipboardCheck aria-hidden="true" className="h-4 w-4" />
        Starta prov
      </Link>
      {!isLoading && !user ? (
        <Link
          href="/login"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:bg-mist focus:outline-none focus:ring-4 focus:ring-leaf/20"
        >
          <LogIn aria-hidden="true" className="h-4 w-4" />
          Logga in
        </Link>
      ) : null}
      <div className="text-sm font-medium text-ink/65">{statsText}</div>
    </div>
  );
}
