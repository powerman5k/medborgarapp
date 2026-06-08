"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Circle, XCircle } from "lucide-react";
import type { Question, Topic } from "@/data/questions";

type QuizClientProps = {
  topic: Topic;
  questions: Question[];
};

export function QuizClient({ topic, questions }: QuizClientProps) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];
  const hasAnswered = selectedAnswer !== null;
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  const progress = useMemo(
    () => Math.round(((currentIndex + 1) / questions.length) * 100),
    [currentIndex, questions.length],
  );

  function selectAnswer(answer: string) {
    if (hasAnswered) {
      return;
    }

    setSelectedAnswer(answer);
    if (answer === currentQuestion.correctAnswer) {
      setScore((value) => value + 1);
    }
  }

  function goNext() {
    const nextIndex = currentIndex + 1;

    if (nextIndex >= questions.length) {
      router.push(`/resultat?score=${score}&total=${questions.length}&topic=${topic.id}`);
      return;
    }

    setCurrentIndex(nextIndex);
    setSelectedAnswer(null);
  }

  return (
    <section className="mx-auto w-full max-w-3xl rounded-lg border border-ink/10 bg-white p-4 shadow-soft sm:p-6">
      <div className="mb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
          <span className="rounded-full bg-mist px-3 py-1 font-semibold text-moss">{topic.title}</span>
          <span className="font-medium text-ink/60">
            Fråga {currentIndex + 1} av {questions.length}
          </span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-mist">
          <div className="h-full rounded-full bg-leaf transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <h1 className="text-2xl font-bold leading-tight text-ink sm:text-3xl">{currentQuestion.question}</h1>

      <div className="mt-6 grid gap-3">
        {currentQuestion.options.map((option) => {
          const optionIsCorrect = option === currentQuestion.correctAnswer;
          const optionIsSelected = option === selectedAnswer;
          const showCorrect = hasAnswered && optionIsCorrect;
          const showWrong = hasAnswered && optionIsSelected && !optionIsCorrect;

          return (
            <button
              key={option}
              type="button"
              onClick={() => selectAnswer(option)}
              className={[
                "flex min-h-14 w-full items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm font-semibold transition focus:outline-none focus:ring-4 sm:text-base",
                showCorrect
                  ? "border-leaf bg-leaf/10 text-ink focus:ring-leaf/20"
                  : showWrong
                    ? "border-red-400 bg-red-50 text-ink focus:ring-red-200"
                    : "border-ink/10 bg-white text-ink hover:border-leaf/50 hover:bg-mist focus:ring-leaf/20",
              ].join(" ")}
              disabled={hasAnswered}
            >
              {showCorrect ? (
                <CheckCircle2 aria-hidden="true" className="h-5 w-5 shrink-0 text-leaf" />
              ) : showWrong ? (
                <XCircle aria-hidden="true" className="h-5 w-5 shrink-0 text-red-500" />
              ) : (
                <Circle aria-hidden="true" className="h-5 w-5 shrink-0 text-ink/30" />
              )}
              <span>{option}</span>
            </button>
          );
        })}
      </div>

      {hasAnswered ? (
        <div className="mt-6 rounded-lg border border-ink/10 bg-mist p-4">
          <p className="flex items-center gap-2 text-sm font-bold text-ink">
            {isCorrect ? (
              <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-leaf" />
            ) : (
              <XCircle aria-hidden="true" className="h-5 w-5 text-red-500" />
            )}
            {isCorrect ? "Rätt svar" : "Fel svar"}
          </p>
          <p className="mt-2 text-sm leading-6 text-ink/75">{currentQuestion.explanation}</p>
          <button
            type="button"
            onClick={goNext}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-moss px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink focus:outline-none focus:ring-4 focus:ring-leaf/25"
          >
            {currentIndex === questions.length - 1 ? "Visa resultat" : "Nästa fråga"}
          </button>
        </div>
      ) : null}
    </section>
  );
}
