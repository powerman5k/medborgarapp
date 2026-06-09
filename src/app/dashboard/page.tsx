import Link from "next/link";
import { redirect } from "next/navigation";
import { LogOut, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { createClient } from "@/lib/supabase/server";
import { logout } from "./actions";

type ClaimsWithEmail = {
  email?: string;
};

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { claims },
  } = await supabase.auth.getClaims();

  if (!claims) {
    redirect("/login");
  }

  const email = (claims as ClaimsWithEmail).email ?? "Okänd e-post";

  return (
    <PageShell>
      <section className="mx-auto w-full max-w-3xl rounded-lg border border-ink/10 bg-white p-5 shadow-soft sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-mist text-moss">
              <ShieldCheck aria-hidden="true" className="h-6 w-6" />
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-moss">Dashboard</p>
            <h1 className="mt-3 text-3xl font-black text-ink sm:text-4xl">Välkommen</h1>
            <p className="mt-3 text-base leading-7 text-ink/70">Du är inloggad som:</p>
            <p className="mt-2 break-all rounded-lg border border-ink/10 bg-mist px-4 py-3 text-sm font-bold text-ink">
              {email}
            </p>
          </div>

          <form action={logout}>
            <button
              type="submit"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-mist focus:outline-none focus:ring-4 focus:ring-leaf/20"
            >
              <LogOut aria-hidden="true" className="h-4 w-4" />
              Logga ut
            </button>
          </form>
        </div>

        <div className="mt-8 border-t border-ink/10 pt-5">
          <Link
            href="/amnen"
            className="inline-flex items-center justify-center rounded-full bg-moss px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink focus:outline-none focus:ring-4 focus:ring-leaf/25"
          >
            Fortsätt öva
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
