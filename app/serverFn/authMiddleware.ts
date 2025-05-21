import { createMiddleware } from "@tanstack/react-start";
import { getWebRequest } from "@tanstack/react-start/server";
import type { User, Session } from "better-auth";
import { auth } from "~/lib/auth";

// Type to represent the auth session
type AuthContext = {
  user: User | null;
  session: Session | null;
};

export const authMiddleware = createMiddleware().server(async ({ next }) => {
  const headers = getWebRequest()?.headers;

  if (!headers)
    return next({
      context: {
        user: null,
        session: null,
      } as AuthContext,
    });

  const session = await auth.api.getSession({
    headers,
  });

  if (!session)
    return next({
      context: {
        user: null,
        session: null,
      } as AuthContext,
    });

  return next({
    context: {
      user: session.user,
      session: session.session,
    } as AuthContext,
  });
});
