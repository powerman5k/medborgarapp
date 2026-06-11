"use server";

import { createClient } from "@/lib/supabase/server";

export async function saveWrongAnswer(questionId: number) {
  if (!Number.isInteger(questionId) || questionId <= 0) {
    return;
  }

  const supabase = await createClient();

  try {
    const { data, error } = await supabase.auth.getUser();

    if (error || !data.user) {
      return;
    }

    const { error: insertError } = await supabase.from("wrong_answers").insert({
      user_id: data.user.id,
      question_id: questionId,
    });

    if (insertError && insertError.code !== "23505") {
      console.error("Supabase wrong answer save failed", insertError);
    }
  } catch (error) {
    console.error("Supabase wrong answer save failed", error);
  }
}
