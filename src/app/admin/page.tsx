import Link from "next/link";
import { ShieldAlert } from "lucide-react";
import { redirect } from "next/navigation";
import { AdminQuestionManager } from "@/components/AdminQuestionManager";
import { PageShell } from "@/components/PageShell";
import { topics } from "@/data/questions";
import { getAdminAccess } from "@/lib/admin";
import { getAdminQuestions } from "@/lib/question-bank";

export const dynamic = "force-dynamic";

type AdminPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function readText(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function AdminPage({ searchParams }: AdminPageProps) {
  const query = await searchParams;
  const message = readText(query.message);
  const access = await getAdminAccess();

  if (!access.user) {
    redirect("/login?message=Logga in för att öppna adminpanelen.");
  }

  if (access.errorMessage || !access.isAdmin) {
    return (
      <PageShell>
        <section className="mx-auto w-full max-w-2xl rounded-lg border border-ink/10 bg-white p-6 text-center shadow-soft sm:p-8">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-red-50 text-red-600">
            <ShieldAlert aria-hidden="true" className="h-7 w-7" />
          </div>
          <h1 className="mt-5 text-3xl font-black text-ink">Ingen åtkomst</h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-ink/70">
            Bara admin-användare kan öppna adminpanelen.
          </p>
          {access.errorMessage ? (
            <p className="mx-auto mt-3 max-w-md rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {access.errorMessage}
            </p>
          ) : null}
          <div className="mt-6">
            <Link
              href="/dashboard"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-moss px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink focus:outline-none focus:ring-4 focus:ring-leaf/25"
            >
              Till dashboard
            </Link>
          </div>
        </section>
      </PageShell>
    );
  }

  const adminQuestions = await getAdminQuestions();

  return (
    <PageShell>
      <AdminQuestionManager topics={topics} questions={adminQuestions} message={message} />
    </PageShell>
  );
}
