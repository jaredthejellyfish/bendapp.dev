import { isRedirect, redirect } from "@tanstack/react-router";
import { auth } from "../lib/auth";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const signInFn = createServerFn({
  method: "POST", // HTTP method to use
  response: "data", // Response handling mode
})
  .validator((data: FormData) => {
    return z
      .object({
        email: z.string().email(),
        // Password must be 8-32 characters and include at least:
        // - one lowercase letter (a-z)
        // - one uppercase letter (A-Z)
        // - one digit (0-9)
        // - one special character (@$!%*?&)
        password: z
          .string()
          .min(8)
          .max(32)
          .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          ),
      })
      .safeParse({
        email: data.get("email"),
        password: data.get("password"),
      });
  })
  .handler(async ({ data: parsedData }) => {
    try {
      if (!parsedData.success) throw new Error("Invalid data");
      const data = parsedData.data;

      const user = await auth.api.signInEmail({
        body: {
          email: data.email,
          password: data.password,
        },
      });

      if (!user) throw new Error("Invalid credentials");

      if (user.redirect) throw redirect({ to: user.url });

      throw redirect({
        to: "/",
      });
    } catch (error) {
      if (isRedirect(error)) throw error;
      console.error(error);
      throw redirect({
        to: "/sign-in",
        params: {
          error: "Failed to sign in",
          errorMessage:
            error instanceof Error ? error.message : "Unknown error",
        },
      });
    }
  });
