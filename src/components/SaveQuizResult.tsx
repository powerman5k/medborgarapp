"use client";

import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Info, Loader2, XCircle } from "lucide-react";
import { saveQuizResult, type SaveQuizResultResponse } from "@/app/resultat/actions";

type SaveQuizResultProps = {
  attemptId?: string;
  score: number;
  total: number;
  mode: string;
};

type SaveState =
  | SaveQuizResultResponse
  | {
      status: "pending";
      message: string;
    };

const statusStyles: Record<SaveState["status"], string> = {
  pending: "border-ink/10 bg-white/75 text-ink/70",
  saved: "border-leaf/40 bg-leaf/10 text-ink",
  skipped: "border-wheat/60 bg-wheat/20 text-ink",
  error: "border-red-200 bg-red-50 text-ink",
};

function getStorageKey(attemptId: string | undefined, score: number, total: number, mode: string) {
  return `quiz-result:${attemptId ?? `${score}:${total}:${mode}`}`;
}

function StatusIcon({ status }: { status: SaveState["status"] }) {
  if (status === "saved") {
    return <CheckCircle2 aria-hidden="true" className="h-5 w-5 shrink-0 text-leaf" />;
  }

  if (status === "error") {
    return <XCircle aria-hidden="true" className="h-5 w-5 shrink-0 text-red-500" />;
  }

  if (status === "pending") {
    return <Loader2 aria-hidden="true" className="h-5 w-5 shrink-0 animate-spin text-moss" />;
  }

  return <Info aria-hidden="true" className="h-5 w-5 shrink-0 text-moss" />;
}

export function SaveQuizResult({ attemptId, score, total, mode }: SaveQuizResultProps) {
  const [state, setState] = useState<SaveState>({
    status: "pending",
    message: "Sparar resultat...",
  });
  const storageKey = useMemo(() => getStorageKey(attemptId, score, total, mode), [attemptId, mode, score, total]);

  useEffect(() => {
    if (total <= 0) {
      setState({
        status: "skipped",
        message: "Det finns inget resultat att spara.",
      });
      return;
    }

    const currentValue = window.sessionStorage.getItem(storageKey);

    if (currentValue === "saved") {
      setState({
        status: "saved",
        message: "Resultatet har sparats på din dashboard.",
      });
      return;
    }

    if (currentValue === "saving") {
      const timer = window.setInterval(() => {
        if (window.sessionStorage.getItem(storageKey) === "saved") {
          setState({
            status: "saved",
            message: "Resultatet har sparats på din dashboard.",
          });
          window.clearInterval(timer);
        }
      }, 250);

      return () => window.clearInterval(timer);
    }

    window.sessionStorage.setItem(storageKey, "saving");

    saveQuizResult({ score, total, mode }).then((result) => {
      if (result.status === "saved") {
        window.sessionStorage.setItem(storageKey, "saved");
      } else {
        window.sessionStorage.removeItem(storageKey);
      }

      setState(result);
    });
  }, [mode, score, storageKey, total]);

  return (
    <div className={`flex items-start gap-3 rounded-lg border p-4 text-left text-sm leading-6 ${statusStyles[state.status]}`}>
      <StatusIcon status={state.status} />
      <p>{state.message}</p>
    </div>
  );
}
