import { createFileRoute } from "@tanstack/react-router";
import SignInForm from "~/components/SignIn/SignInForm";
import SignInHero from "~/components/SignIn/SignInHero";
import AlternativeOptions from "~/components/SignIn/AlternativeOptions";

export const Route = createFileRoute("/(auth)/sign-in/")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "Bend | Sign In",
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <main className="flex flex-col justify-center h-full items-center min-h-screen">
      <section>
        <SignInHero />
      </section>

      <section className="">
        <div className="w-full">
          <SignInForm />
          <AlternativeOptions />
        </div>
      </section>
    </main>
  );
}
