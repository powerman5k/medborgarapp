import { headers } from "next/headers";

export async function getRequestOrigin() {
  const origin = (await headers()).get("origin");
  return origin ?? process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}
