"use server";

import { getErrorMessage } from "@/lib/auth/forms";
import { createClient } from "@/lib/supabase/server";

export type SaveQuizResultResponse = {
  status: "saved" | "skipped" | "error";
  message: string;
};

type SaveQuizResultInput = {
  score: number;
  total: number;
  mode: string;
};

function isValidResult(score: number, total: number) {
  return Number.isInteger(score) && Number.isInteger(total) && total > 0 && score >= 0 && score <= total;
}

export async function saveQuizResult(input: SaveQuizResultInput): Promise<SaveQuizResultResponse> {
  const score = Number(input.score);
  const total = Number(input.total);
  const mode = input.mode.trim().slice(0, 120);

  if (!isValidResult(score, total) || !mode) {
    return {
      status: "error",
      message: "Resultatet kunde inte sparas eftersom det saknar giltiga värden.",
    };
  }

  const supabase = await createClient();

  try {
    const { data, error } = await supabase.auth.getUser();

    if (error || !data.user) {
      return {
        status: "skipped",
        message: "Logga in för att spara dina resultat på dashboarden.",
      };
    }

    const { error: insertError } = await supabase.from("quiz_results").insert({
      user_id: data.user.id,
      score,
      total,
      mode,
    });

    if (insertError) {
      return {
        status: "error",
        message: `Resultatet kunde inte sparas: ${insertError.message}`,
      };
    }
  } catch (error) {
    return {
      status: "error",
      message: `Resultatet kunde inte sparas: ${getErrorMessage(error)}`,
    };
  }

  return {
    status: "saved",
    message: "Resultatet har sparats på din dashboard.",
  };
}
