import { isRedirect, redirect } from "@tanstack/react-router";
import { auth } from "../lib/auth";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const signUpFn = createServerFn({
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
        firstName: z.string().min(1),
        lastName: z.string().min(1),
        termsAccepted: z.preprocess((val) => val === "on", z.boolean()),
        privacyAccepted: z.preprocess((val) => val === "on", z.boolean()),
      })
      .safeParse({
        email: data.get("email"),
        password: data.get("password"),
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        termsAccepted: data.get("termsAccepted"),
        privacyAccepted: data.get("privacyAccepted"),
      });
  })
  .handler(async ({ data: parsedData }) => {
    try {
      if (!parsedData.success) throw new Error("Invalid data");
      const data = parsedData.data;

      const user = await auth.api.signUpEmail({
        body: {
          email: data.email,
          password: data.password,
          firstName: data.firstName,
          lastName: data.lastName,
          termsAccepted: data.termsAccepted,
          privacyAccepted: data.privacyAccepted,
          name: `${data.firstName} ${data.lastName}`,
        },
      });

      throw redirect({
        to: "/sign-up/success",
        search: {
          email: data.email,
          name: `${data.firstName} ${data.lastName}`,
        },
      });
    } catch (error) {
      if (isRedirect(error)) throw error;
      console.error(error);
      throw redirect({
        to: "/sign-up",
        params: {
          error: "Failed to sign up",
          errorMessage:
            error instanceof Error ? error.message : "Unknown error",
        },
      });
    }
  });
