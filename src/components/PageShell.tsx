import Link from "next/link";
import { BookOpenCheck } from "lucide-react";

type PageShellProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="min-h-screen px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 rounded-full focus:outline-none focus:ring-4 focus:ring-leaf/20">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-moss shadow-sm">
              <BookOpenCheck aria-hidden="true" className="h-5 w-5" />
            </span>
            <span className="hidden text-sm font-bold text-ink sm:inline">Medborgarskapsövning</span>
          </Link>
          <nav className="flex items-center gap-2 text-sm font-medium text-ink/70">
            <Link className="rounded-full px-3 py-2 hover:bg-white hover:text-ink focus:outline-none focus:ring-4 focus:ring-leaf/20" href="/amnen">
              Ämnen
            </Link>
          </nav>
        </header>
        {children}
      </div>
    </main>
  );
}
