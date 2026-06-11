"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function logout() {
  const supabase = await createClient();

  try {
    await supabase.auth.signOut();
  } catch (error) {
    console.error("Supabase logout failed", error);
  }

  redirect("/login");
}
