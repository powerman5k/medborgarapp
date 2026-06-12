"use server";

import { revalidatePath } from "next/cache";
import { getErrorMessage, getFormValue, redirectWithMessage } from "@/lib/auth/forms";
import { getAdminAccess } from "@/lib/admin";
import { topics, type QuestionDifficulty, type QuestionType } from "@/data/questions";

const validDifficulties: QuestionDifficulty[] = ["easy", "medium", "hard"];
const validTypes: QuestionType[] = ["fact", "scenario", "truefalse"];

type ParsedQuestion =
  | {
      ok: true;
      value: {
        topic_id: string;
        topic: string;
        difficulty: QuestionDifficulty;
        type: QuestionType;
        question: string;
        options: string[];
        correct_answer: number;
        explanation: string;
      };
    }
  | {
      ok: false;
      message: string;
    };

function isQuestionDifficulty(value: string): value is QuestionDifficulty {
  return validDifficulties.includes(value as QuestionDifficulty);
}

function isQuestionType(value: string): value is QuestionType {
  return validTypes.includes(value as QuestionType);
}

function readOptions(formData: FormData) {
  return formData
    .getAll("options")
    .map((value) => (typeof value === "string" ? value.trim() : ""))
    .slice(0, 4);
}

function parseQuestionForm(formData: FormData): ParsedQuestion {
  const topicId = getFormValue(formData, "topicId");
  const topic = topics.find((item) => item.id === topicId);
  const difficulty = getFormValue(formData, "difficulty");
  const type = getFormValue(formData, "type");
  const question = getFormValue(formData, "question");
  const explanation = getFormValue(formData, "explanation");
  const selectedAnswerIndex = Number(getFormValue(formData, "correctAnswer"));
  const rawOptions = readOptions(formData);
  const options: string[] = [];
  let correctAnswer = -1;

  rawOptions.forEach((option, index) => {
    if (!option) {
      return;
    }

    if (index === selectedAnswerIndex) {
      correctAnswer = options.length;
    }

    options.push(option);
  });

  if (!topic) {
    return { ok: false, message: "Välj ett giltigt ämne." };
  }

  if (!isQuestionDifficulty(difficulty)) {
    return { ok: false, message: "Välj en giltig svårighetsgrad." };
  }

  if (!isQuestionType(type)) {
    return { ok: false, message: "Välj en giltig frågetyp." };
  }

  if (!question) {
    return { ok: false, message: "Skriv en fråga." };
  }

  if (options.length < 2) {
    return { ok: false, message: "Skriv minst två svarsalternativ." };
  }

  if (type === "truefalse" && options.length !== 2) {
    return { ok: false, message: "Sant/falskt-frågor ska ha exakt två svarsalternativ." };
  }

  if (correctAnswer < 0) {
    return { ok: false, message: "Markera vilket svar som är rätt." };
  }

  if (!explanation) {
    return { ok: false, message: "Skriv en kort förklaring." };
  }

  return {
    ok: true,
    value: {
      topic_id: topic.id,
      topic: topic.title,
      difficulty,
      type,
      question,
      options,
      correct_answer: correctAnswer,
      explanation,
    },
  };
}

async function requireAdmin() {
  const access = await getAdminAccess();

  if (!access.user) {
    redirectWithMessage("/login", "Logga in för att öppna adminpanelen.");
  }

  if (access.errorMessage) {
    redirectWithMessage("/admin", `Adminrollen kunde inte kontrolleras: ${access.errorMessage}`);
  }

  if (!access.isAdmin) {
    redirectWithMessage("/dashboard", "Du har inte behörighet till adminpanelen.");
  }

  return {
    supabase: access.supabase,
    user: access.user,
  };
}

export async function saveAdminQuestion(formData: FormData) {
  const { supabase, user } = await requireAdmin();
  const parsed = parseQuestionForm(formData);

  if (!parsed.ok) {
    redirectWithMessage("/admin", parsed.message);
  }

  const id = Number(getFormValue(formData, "id"));
  const isEditing = Number.isInteger(id) && id > 0;
  const payload = parsed.value;
  let saveError: string | null = null;

  try {
    const { error } = isEditing
      ? await supabase.from("admin_questions").update(payload).eq("id", id)
      : await supabase.from("admin_questions").insert({
          ...payload,
          created_by: user.id,
        });

    if (error) {
      saveError = error.message;
    }
  } catch (error) {
    saveError = getErrorMessage(error);
  }

  if (saveError) {
    redirectWithMessage("/admin", `Frågan kunde inte sparas: ${saveError}`);
  }

  revalidatePath("/");
  revalidatePath("/amnen");
  revalidatePath("/admin");
  revalidatePath("/prov");

  redirectWithMessage("/admin", isEditing ? "Frågan har uppdaterats." : "Frågan har lagts till.");
}

export async function deleteAdminQuestion(formData: FormData) {
  const { supabase } = await requireAdmin();
  const id = Number(getFormValue(formData, "id"));
  let deleteError: string | null = null;

  if (!Number.isInteger(id) || id <= 0) {
    redirectWithMessage("/admin", "Frågan kunde inte tas bort eftersom id saknas.");
  }

  try {
    const { error } = await supabase.from("admin_questions").delete().eq("id", id);

    if (error) {
      deleteError = error.message;
    }
  } catch (error) {
    deleteError = getErrorMessage(error);
  }

  if (deleteError) {
    redirectWithMessage("/admin", `Frågan kunde inte tas bort: ${deleteError}`);
  }

  revalidatePath("/");
  revalidatePath("/amnen");
  revalidatePath("/admin");
  revalidatePath("/prov");

  redirectWithMessage("/admin", "Frågan har tagits bort.");
}
