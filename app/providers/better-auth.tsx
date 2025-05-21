import { AuthQueryProvider } from "@daveyplate/better-auth-tanstack";
import { AuthUIProviderTanstack } from "@daveyplate/better-auth-ui/tanstack";
import { Link, useRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

import { authClient } from "~/lib/auth-client";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
    },
  },
});

export function AuthProviders({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthQueryProvider>
        <AuthUIProviderTanstack
          authClient={authClient}
          navigate={(href) => void router.navigate({ href })}
          replace={(href) => void router.navigate({ href, replace: true })}
          Link={({ href, ...props }) => <Link to={href} {...props} />}
          onSessionChange={() => router.invalidate()}
          persistClient={false}
          signUpFields={[
            "firstName",
            "lastName",
            "termsAccepted",
            "privacyAccepted",
            "lang",
          ]}
          additionalFields={{
            firstName: {
              label: "First Name",
              placeholder: "Your first name",
              description: "Enter your first name",
              required: true,
              type: "string",
            },
            lastName: {
              label: "Last Name",
              placeholder: "Your last name",
              description: "Enter your last name",
              required: true,
              type: "string",
            },
            termsAccepted: {
              label: "Terms of Service",
              placeholder: "I accept the Terms of Service",
              description: "You must accept our Terms of Service to continue",
              required: true,
              type: "boolean",
            },
            privacyAccepted: {
              label: "Privacy Policy",
              placeholder: "I accept the Privacy Policy",
              description: "You must accept our Privacy Policy to continue",
              required: true,
              type: "boolean",
            },
            lang: {
              label: "Language",
              placeholder: "Select your preferred language",
              description: "Choose your preferred language",
              required: false,
              type: "string",
            },
          }}
          settingsFields={["firstName", "lastName", "lang"]}
          settingsURL="/settings"
        >
          {children}
        </AuthUIProviderTanstack>
      </AuthQueryProvider>
    </QueryClientProvider>
  );
}
