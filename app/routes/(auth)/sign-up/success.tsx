import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

type SignUpSuccess = {
  email: string | null;
  name: string | null;
};

export const Route = createFileRoute("/(auth)/sign-up/success")({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>): SignUpSuccess => {
    const data = z
      .object({
        email: z.string().email(),
        name: z.string(),
      })
      .safeParse(search);

    if (!data.success) {
      return {
        email: null,
        name: null,
      };
    }

    return data.data;
  },
});

function RouteComponent() {
  return <div>Hello "/(auth)/sign-up/success"!</div>;
}
