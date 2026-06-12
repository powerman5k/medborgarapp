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
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#67e8f9_0%,#34d399_58%,#f7c35f_120%)] px-5 py-3 text-sm font-black text-[#071015] shadow-soft transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-moss/25"
    >
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
