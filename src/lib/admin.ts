import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";

export type AdminAccess = {
  supabase: Awaited<ReturnType<typeof createClient>>;
  user: User | null;
  isAdmin: boolean;
  errorMessage: string | null;
};

export async function getAdminAccess(): Promise<AdminAccess> {
  const supabase = await createClient();
  let user: User | null = null;

  try {
    const { data, error } = await supabase.auth.getUser();

    if (!error && data.user) {
      user = data.user;
    }
  } catch (error) {
    console.error("Supabase admin user lookup failed", error);
  }

  if (!user) {
    return {
      supabase,
      user: null,
      isAdmin: false,
      errorMessage: null,
    };
  }

  try {
    const { data, error } = await supabase.rpc("is_admin");

    if (error) {
      return {
        supabase,
        user,
        isAdmin: false,
        errorMessage: error.message,
      };
    }

    return {
      supabase,
      user,
      isAdmin: Boolean(data),
      errorMessage: null,
    };
  } catch (error) {
    console.error("Supabase admin role lookup failed", error);

    return {
      supabase,
      user,
      isAdmin: false,
      errorMessage: "Adminrollen kunde inte kontrolleras just nu.",
    };
  }
}
