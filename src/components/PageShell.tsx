import Link from "next/link";
import { BookOpenCheck } from "lucide-react";
import { AuthNavigation } from "@/components/AuthNavigation";

type PageShellProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="min-h-screen px-4 py-5 text-ink sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="sticky top-4 z-20 flex items-center justify-between gap-4 rounded-full border border-white/10 bg-white/[0.08] px-3 py-3 shadow-soft backdrop-blur-2xl sm:px-4">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-full focus:outline-none focus:ring-4 focus:ring-moss/20"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/10 text-moss shadow-sm">
              <BookOpenCheck aria-hidden="true" className="h-5 w-5" />
            </span>
            <span className="hidden text-sm font-bold text-ink sm:inline">Medborgarskapsövning</span>
          </Link>
          <AuthNavigation />
        </header>
        {children}
      </div>
    </main>
  );
}
