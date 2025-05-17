import { createFileRoute } from "@tanstack/react-router";
import SignUpForm from "~/components/SignUp/SignUpForm";
import SignUpHero from "~/components/SignUp/SignUpHero";
import AlternativeOptions from "~/components/SignUp/AlternativeOptions";

export const Route = createFileRoute("/(auth)/sign-up/")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "Bend | Sign Up",
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <main className="flex flex-col justify-center h-full items-center min-h-screen">
      <section>
        <SignUpHero />
      </section>

      <section className="mb-12">
        <div className="max-w-md mx-auto">
          <SignUpForm />
          <AlternativeOptions />
        </div>
      </section>
    </main>
  );
}
