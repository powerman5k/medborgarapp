"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Pencil, Plus, Save, Trash2 } from "lucide-react";
import { deleteAdminQuestion, saveAdminQuestion } from "@/app/admin/actions";
import type { Topic } from "@/data/questions";
import type { AdminQuestionItem } from "@/lib/question-bank";

type AdminQuestionManagerProps = {
  topics: Topic[];
  questions: AdminQuestionItem[];
  message?: string;
};

const difficultyLabels = {
  easy: "Lätt",
  medium: "Medel",
  hard: "Svår",
};

const typeLabels = {
  fact: "Fakta",
  scenario: "Scenario",
  truefalse: "Sant/falskt",
};

function formatDate(value: string | null) {
  if (!value) {
    return "Okänt datum";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Okänt datum";
  }

  return new Intl.DateTimeFormat("sv-SE", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export function AdminQuestionManager({ topics, questions, message }: AdminQuestionManagerProps) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const editingQuestion = useMemo(
    () => questions.find((question) => question.id === editingId) ?? null,
    [editingId, questions],
  );
  const formKey = editingQuestion ? `edit-${editingQuestion.id}` : "new-question";
  const optionDefaults = [...(editingQuestion?.options ?? []), "", "", ""].slice(0, 4);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)]">
      <section className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-moss">Admin</p>
            <h1 className="mt-3 text-3xl font-black text-ink">
              {editingQuestion ? "Redigera fråga" : "Lägg till fråga"}
            </h1>
          </div>
          {editingQuestion ? (
            <button
              type="button"
              onClick={() => setEditingId(null)}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-mist focus:outline-none focus:ring-4 focus:ring-leaf/20"
            >
              <Plus aria-hidden="true" className="h-4 w-4" />
              Ny fråga
            </button>
          ) : null}
        </div>

        {message ? (
          <div className="mt-5 flex gap-2 rounded-lg border border-leaf/30 bg-leaf/10 px-4 py-3 text-sm font-semibold text-ink">
            <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-leaf" />
            <span>{message}</span>
          </div>
        ) : null}

        <form key={formKey} action={saveAdminQuestion} className="mt-6 grid gap-5">
          <input type="hidden" name="id" value={editingQuestion?.id ?? ""} />

          <div className="grid gap-4 sm:grid-cols-3">
            <label className="grid gap-2 text-sm font-bold text-ink">
              Ämne
              <select
                name="topicId"
                defaultValue={editingQuestion?.topicId ?? topics[0]?.id}
                className="min-h-11 rounded-lg border border-ink/10 bg-white px-3 py-2 text-sm font-semibold text-ink outline-none transition focus:border-moss focus:ring-4 focus:ring-leaf/20"
                required
              >
                {topics.map((topic) => (
                  <option key={topic.id} value={topic.id}>
                    {topic.title}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-bold text-ink">
              Svårighet
              <select
                name="difficulty"
                defaultValue={editingQuestion?.difficulty ?? "easy"}
                className="min-h-11 rounded-lg border border-ink/10 bg-white px-3 py-2 text-sm font-semibold text-ink outline-none transition focus:border-moss focus:ring-4 focus:ring-leaf/20"
                required
              >
                <option value="easy">Lätt</option>
                <option value="medium">Medel</option>
                <option value="hard">Svår</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-bold text-ink">
              Frågetyp
              <select
                name="type"
                defaultValue={editingQuestion?.type ?? "fact"}
                className="min-h-11 rounded-lg border border-ink/10 bg-white px-3 py-2 text-sm font-semibold text-ink outline-none transition focus:border-moss focus:ring-4 focus:ring-leaf/20"
                required
              >
                <option value="fact">Fakta</option>
                <option value="scenario">Scenario</option>
                <option value="truefalse">Sant/falskt</option>
              </select>
            </label>
          </div>

          <label className="grid gap-2 text-sm font-bold text-ink">
            Fråga
            <textarea
              name="question"
              defaultValue={editingQuestion?.question ?? ""}
              rows={3}
              className="min-h-24 rounded-lg border border-ink/10 bg-white px-3 py-2 text-base font-medium leading-7 text-ink outline-none transition focus:border-moss focus:ring-4 focus:ring-leaf/20"
              required
            />
          </label>

          <div className="grid gap-3">
            <p className="text-sm font-bold text-ink">Svarsalternativ</p>
            {optionDefaults.map((option, index) => (
              <div key={index} className="grid gap-2 rounded-lg border border-ink/10 bg-mist/60 p-3 sm:grid-cols-[auto_1fr] sm:items-center">
                <label className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
                  <input
                    type="radio"
                    name="correctAnswer"
                    value={index}
                    defaultChecked={(editingQuestion?.correctAnswer ?? 0) === index}
                    className="h-4 w-4 accent-moss"
                  />
                  Rätt
                </label>
                <input
                  name="options"
                  defaultValue={option}
                  placeholder={`Svar ${index + 1}`}
                  className="min-h-11 rounded-lg border border-ink/10 bg-white px-3 py-2 text-sm font-semibold text-ink outline-none transition focus:border-moss focus:ring-4 focus:ring-leaf/20"
                />
              </div>
            ))}
          </div>

          <label className="grid gap-2 text-sm font-bold text-ink">
            Förklaring
            <textarea
              name="explanation"
              defaultValue={editingQuestion?.explanation ?? ""}
              rows={4}
              className="min-h-28 rounded-lg border border-ink/10 bg-white px-3 py-2 text-base font-medium leading-7 text-ink outline-none transition focus:border-moss focus:ring-4 focus:ring-leaf/20"
              required
            />
          </label>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-moss px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink focus:outline-none focus:ring-4 focus:ring-leaf/25"
            >
              <Save aria-hidden="true" className="h-4 w-4" />
              {editingQuestion ? "Spara ändringar" : "Lägg till fråga"}
            </button>
          </div>
        </form>
      </section>

      <section className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft sm:p-6">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-moss">Frågebank</p>
          <h2 className="mt-3 text-2xl font-black text-ink">Adminfrågor</h2>
          <p className="mt-2 text-sm font-medium text-ink/60">{questions.length} frågor</p>
        </div>

        {questions.length > 0 ? (
          <ul className="mt-5 grid gap-3">
            {questions.map((question) => {
              const isEditing = editingQuestion?.id === question.id;

              return (
                <li
                  key={question.id}
                  className={[
                    "rounded-lg border p-4 transition",
                    isEditing ? "border-moss bg-mist" : "border-ink/10 bg-white",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold text-moss">{question.topic}</p>
                      <h3 className="mt-1 text-base font-black leading-6 text-ink">{question.question}</h3>
                      <p className="mt-2 text-xs font-semibold text-ink/55">
                        {difficultyLabels[question.difficulty]} · {typeLabels[question.type]} · {formatDate(question.updatedAt)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setEditingId(question.id)}
                      className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-mist focus:outline-none focus:ring-4 focus:ring-leaf/20"
                    >
                      <Pencil aria-hidden="true" className="h-4 w-4" />
                      Redigera
                    </button>
                    <form
                      action={deleteAdminQuestion}
                      onSubmit={(event) => {
                        if (!window.confirm("Ta bort frågan?")) {
                          event.preventDefault();
                        }
                      }}
                    >
                      <input type="hidden" name="id" value={question.id} />
                      <button
                        type="submit"
                        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100 focus:outline-none focus:ring-4 focus:ring-red-100"
                      >
                        <Trash2 aria-hidden="true" className="h-4 w-4" />
                        Ta bort
                      </button>
                    </form>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="mt-5 rounded-lg border border-dashed border-ink/20 bg-mist p-5 text-sm leading-6 text-ink/70">
            Inga adminfrågor ännu.
          </div>
        )}
      </section>
    </div>
  );
}
