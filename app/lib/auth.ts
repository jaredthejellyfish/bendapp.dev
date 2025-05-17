import { betterAuth } from "better-auth";
import Database from "better-sqlite3";
import { reactStartCookies } from "better-auth/react-start";

export const auth = betterAuth({
  database: new Database("./sqlite.db"),
  user: {
    additionalFields: {
      firstName: {
        type: "string",
        required: true,
      },
      lastName: {
        type: "string",
        required: true,
      },
      termsAccepted: {
        type: "boolean",
        required: true,
        defaultValue: false,
      },
      privacyAccepted: {
        type: "boolean",
        required: true,
        defaultValue: false,
      },
      role: {
        type: "string",
        required: false,
        defaultValue: "user",
        input: false, // don't allow user to set role
      },
      lang: {
        type: "string",
        required: false,
        defaultValue: "en",
      },
    },
  },
  emailAndPassword: {
    enabled: true,
    callbackUrl: "/sign-up/success",
  },
  plugins: [reactStartCookies()],
});
