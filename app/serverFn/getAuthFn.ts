import { auth } from "~/lib/auth";
import { getWebRequest } from "@tanstack/react-start/server";
import { createServerFn } from "@tanstack/react-start";

export const getAuthFn = createServerFn({ method: "GET" }).handler(async () => {
  const headers = getWebRequest()?.headers;

  if (!headers) return { session: null, user: null };

  const session = await auth.api.getSession({
    headers,
  });
  if (!session) return { session: null, user: null };

  return {
    session: session.session,
    user: session.user,
  };
});
