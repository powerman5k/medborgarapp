"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AlarmClock, ArrowLeft, ArrowRight, CheckCircle2, Circle, Send } from "lucide-react";
import { saveWrongAnswer } from "@/app/quiz/actions";
import type { Question } from "@/data/questions";

type ExamClientProps = {
  questions: Question[];
  questionCount?: number;
  durationSeconds?: number;
};

type Answers = Record<number, number>;

const defaultQuestionCount = 20;
const defaultDurationSeconds = 10 * 60;

function shuffleQuestions(questions: Question[]) {
  return [...questions]
    .map((question) => ({ question, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ question }) => question);
}

function createAttemptId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export function ExamClient({
  questions,
  questionCount = defaultQuestionCount,
  durationSeconds = defaultDurationSeconds,
}: ExamClientProps) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [remainingSeconds, setRemainingSeconds] = useState(durationSeconds);
  const hasFinishedRef = useRef(false);
  const examQuestions = useMemo(
    () => shuffleQuestions(questions).slice(0, Math.min(questionCount, questions.length)),
    [questionCount, questions],
  );
  const currentQuestion = examQuestions[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const progress = examQuestions.length > 0 ? Math.round((answeredCount / examQuestions.length) * 100) : 0;
  const isLastQuestion = currentIndex === examQuestions.length - 1;

  function finishExam() {
    if (hasFinishedRef.current) {
      return;
    }

    hasFinishedRef.current = true;

    const score = examQuestions.reduce((totalScore, question) => {
      return answers[question.id] === question.correctAnswer ? totalScore + 1 : totalScore;
    }, 0);

    const wrongQuestionIds = examQuestions
      .filter((question) => answers[question.id] !== undefined && answers[question.id] !== question.correctAnswer)
      .map((question) => question.id);

    void Promise.all(wrongQuestionIds.map((questionId) => saveWrongAnswer(questionId)));

    const params = new URLSearchParams({
      score: String(score),
      total: String(examQuestions.length),
      topic: "prov",
      type: "all",
      attempt: createAttemptId(),
    });

    router.push(`/resultat?${params.toString()}`);
  }

  useEffect(() => {
    if (remainingSeconds <= 0) {
      finishExam();
      return;
    }

    const timer = window.setTimeout(() => {
      setRemainingSeconds((value) => Math.max(0, value - 1));
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [remainingSeconds]);

  if (!currentQuestion) {
    return (
      <section className="mx-auto w-full max-w-2xl rounded-lg border border-ink/10 bg-white p-6 text-center shadow-soft sm:p-8">
        <h1 className="text-2xl font-black text-ink">Det finns inga frågor att visa.</h1>
      </section>
    );
  }

  const selectedAnswer = answers[currentQuestion.id];
  const isLowTime = remainingSeconds <= 60;

  return (
    <section className="mx-auto w-full max-w-3xl rounded-lg border border-ink/10 bg-white p-4 shadow-soft sm:p-6">
      <div className="mb-6 grid gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-moss">Provläge</p>
            <h1 className="mt-2 text-2xl font-black text-ink sm:text-3xl">20 slumpade frågor</h1>
          </div>
          <div
            className={[
              "inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-bold",
              isLowTime ? "border-red-200 bg-red-50 text-red-700" : "border-ink/10 bg-mist text-moss",
            ].join(" ")}
          >
            <AlarmClock aria-hidden="true" className="h-4 w-4" />
            {formatTime(remainingSeconds)}
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-sm font-medium text-ink/60">
            <span>
              Fråga {currentIndex + 1} av {examQuestions.length}
            </span>
            <span>{answeredCount} besvarade</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-mist">
            <div className="h-full rounded-full bg-leaf transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold leading-tight text-ink sm:text-3xl">{currentQuestion.question}</h2>

      <div className="mt-6 grid gap-3">
        {currentQuestion.options.map((option, optionIndex) => {
          const optionIsSelected = optionIndex === selectedAnswer;

          return (
            <button
              key={`${option}-${optionIndex}`}
              type="button"
              onClick={() => setAnswers((value) => ({ ...value, [currentQuestion.id]: optionIndex }))}
              className={[
                "flex min-h-14 w-full items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm font-semibold transition focus:outline-none focus:ring-4 sm:text-base",
                optionIsSelected
                  ? "border-moss bg-mist text-ink focus:ring-leaf/20"
                  : "border-ink/10 bg-white text-ink hover:border-leaf/50 hover:bg-mist focus:ring-leaf/20",
              ].join(" ")}
            >
              {optionIsSelected ? (
                <CheckCircle2 aria-hidden="true" className="h-5 w-5 shrink-0 text-moss" />
              ) : (
                <Circle aria-hidden="true" className="h-5 w-5 shrink-0 text-ink/30" />
              )}
              <span>{option}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-3 border-t border-ink/10 pt-5 sm:grid-cols-[1fr_auto_auto] sm:items-center">
        <p className="text-sm font-medium leading-6 text-ink/60">
          Facit och poäng visas först när provet är klart.
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setCurrentIndex((value) => Math.max(0, value - 1))}
            disabled={currentIndex === 0}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-mist disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-4 focus:ring-leaf/20"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Föregående
          </button>
          <button
            type="button"
            onClick={() => setCurrentIndex((value) => Math.min(examQuestions.length - 1, value + 1))}
            disabled={currentIndex === examQuestions.length - 1}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-mist disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-4 focus:ring-leaf/20"
          >
            Nästa
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
        {isLastQuestion ? (
          <button
            type="button"
            onClick={finishExam}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-moss px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink focus:outline-none focus:ring-4 focus:ring-leaf/25"
          >
            <Send aria-hidden="true" className="h-4 w-4" />
            Lämna in
          </button>
        ) : null}
      </div>
    </section>
  );
}
