"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Circle, Filter, XCircle } from "lucide-react";
import type { Question, Topic } from "@/data/questions";
import { questionTypeFilterOptions, type QuestionTypeFilter } from "@/lib/quiz";

type QuizClientProps = {
  topic: Topic;
  questions: Question[];
  initialFilter?: QuestionTypeFilter;
};

const difficultyLabels: Record<Question["difficulty"], string> = {
  easy: "Lätt",
  medium: "Medel",
  hard: "Svår",
};

function createAttemptId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function QuizClient({ topic, questions, initialFilter = "all" }: QuizClientProps) {
  const router = useRouter();
  const [typeFilter, setTypeFilter] = useState<QuestionTypeFilter>(initialFilter);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const filteredQuestions = useMemo(
    () => questions.filter((question) => typeFilter === "all" || question.type === typeFilter),
    [questions, typeFilter],
  );
  const currentQuestion = filteredQuestions[currentIndex];
  const hasAnswered = selectedAnswer !== null;
  const isCorrect = currentQuestion ? selectedAnswer === currentQuestion.correctAnswer : false;
  const progress = useMemo(
    () => (filteredQuestions.length > 0 ? Math.round(((currentIndex + 1) / filteredQuestions.length) * 100) : 0),
    [currentIndex, filteredQuestions.length],
  );

  function changeFilter(nextFilter: QuestionTypeFilter) {
    setTypeFilter(nextFilter);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
  }

  function selectAnswer(answerIndex: number) {
    if (hasAnswered || !currentQuestion) {
      return;
    }

    setSelectedAnswer(answerIndex);
    if (answerIndex === currentQuestion.correctAnswer) {
      setScore((value) => value + 1);
    }
  }

  function goNext() {
    const nextIndex = currentIndex + 1;

    if (nextIndex >= filteredQuestions.length) {
      const params = new URLSearchParams({
        score: String(score),
        total: String(filteredQuestions.length),
        topic: topic.id,
        type: typeFilter,
        attempt: createAttemptId(),
      });

      router.push(`/resultat?${params.toString()}`);
      return;
    }

    setCurrentIndex(nextIndex);
    setSelectedAnswer(null);
  }

  return (
    <section className="mx-auto w-full max-w-3xl rounded-lg border border-ink/10 bg-white p-4 shadow-soft sm:p-6">
      <div className="mb-6">
        <div className="mb-3 flex items-center gap-2 text-sm font-bold text-ink">
          <Filter aria-hidden="true" className="h-4 w-4 text-moss" />
          Välj frågetyp
        </div>
        <div className="grid gap-2 sm:grid-cols-4">
          {questionTypeFilterOptions.map((option) => {
            const isActive = option.value === typeFilter;

            return (
              <button
                key={option.value}
                type="button"
                aria-pressed={isActive}
                onClick={() => changeFilter(option.value)}
                className={[
                  "min-h-11 rounded-full border px-3 py-2 text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-leaf/20",
                  isActive
                    ? "border-moss bg-moss text-white"
                    : "border-ink/10 bg-white text-ink hover:border-leaf/50 hover:bg-mist",
                ].join(" ")}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      {!currentQuestion ? (
        <div className="rounded-lg border border-dashed border-ink/20 bg-mist p-6 text-center">
          <h1 className="text-xl font-bold text-ink">Inga frågor matchar filtret</h1>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-ink/70">
            Välj en annan frågetyp eller visa alla frågor för att fortsätta öva på {topic.title.toLowerCase()}.
          </p>
          <button
            type="button"
            onClick={() => changeFilter("all")}
            className="mt-5 inline-flex items-center justify-center rounded-full bg-moss px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink focus:outline-none focus:ring-4 focus:ring-leaf/25"
          >
            Visa alla frågor
          </button>
        </div>
      ) : (
        <>
          <div className="mb-6 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-mist px-3 py-1 font-semibold text-moss">{topic.title}</span>
                <span className="rounded-full bg-skysoft/60 px-3 py-1 font-semibold text-ink">
                  {difficultyLabels[currentQuestion.difficulty]}
                </span>
              </div>
              <span className="font-medium text-ink/60">
                Fråga {currentIndex + 1} av {filteredQuestions.length}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-mist">
              <div className="h-full rounded-full bg-leaf transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <h1 className="text-2xl font-bold leading-tight text-ink sm:text-3xl">{currentQuestion.question}</h1>

          <div className="mt-6 grid gap-3">
            {currentQuestion.options.map((option, optionIndex) => {
              const optionIsCorrect = optionIndex === currentQuestion.correctAnswer;
              const optionIsSelected = optionIndex === selectedAnswer;
              const showCorrect = hasAnswered && optionIsCorrect;
              const showWrong = hasAnswered && optionIsSelected && !optionIsCorrect;

              return (
                <button
                  key={`${option}-${optionIndex}`}
                  type="button"
                  onClick={() => selectAnswer(optionIndex)}
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
                {currentIndex === filteredQuestions.length - 1 ? "Visa resultat" : "Nästa fråga"}
              </button>
            </div>
          ) : null}
        </>
      )}
    </section>
  );
}
