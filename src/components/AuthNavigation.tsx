"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { useAuthSession } from "@/lib/supabase/use-auth-session";

const linkClass =
  "rounded-full px-3 py-2 hover:bg-white hover:text-ink focus:outline-none focus:ring-4 focus:ring-leaf/20";

const protectedPaths = ["/dashboard", "/prov", "/feltraning"];

export function AuthNavigation() {
  const pathname = usePathname();
  const router = useRouter();
  const { isLoading, supabase, user } = useAuthSession();
  const email = user?.email;

  async function handleLogout() {
    await supabase.auth.signOut();
    router.refresh();

    if (protectedPaths.some((path) => pathname.startsWith(path))) {
      router.push("/login");
    }
  }

  return (
    <nav className="flex flex-wrap items-center justify-end gap-2 text-sm font-medium text-ink/70">
      <Link className={linkClass} href="/">
        Hem
      </Link>
      <Link className={linkClass} href="/amnen">
        Öva
      </Link>
      <Link className={linkClass} href="/prov">
        Provläge
      </Link>
      <Link className={linkClass} href="/feltraning">
        Felträning
      </Link>
      <Link className={linkClass} href="/dashboard">
        Dashboard
      </Link>

      {!isLoading && !user ? (
        <Link className={linkClass} href="/login">
          Logga in
        </Link>
      ) : null}

      {user ? (
        <>
          <span
            className="max-w-[220px] truncate rounded-full bg-white px-3 py-2 font-semibold text-moss"
            title={email ? `Inloggad som ${email}` : "Inloggad"}
          >
            Inloggad{email ? ` · ${email}` : ""}
          </span>
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-ink/70 hover:bg-white hover:text-ink focus:outline-none focus:ring-4 focus:ring-leaf/20"
          >
            <LogOut aria-hidden="true" className="h-4 w-4" />
            Logga ut
          </button>
        </>
      ) : null}
    </nav>
  );
}
