import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PrimaryLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function PrimaryLink({ href, children }: PrimaryLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-moss px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ink focus:outline-none focus:ring-4 focus:ring-leaf/25"
    >
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
