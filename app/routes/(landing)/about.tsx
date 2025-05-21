import { createFileRoute } from "@tanstack/react-router";
import Introduction from "~/components/Landing/About/Introduction";
import MissionStatement from "~/components/Landing/About/MissionStatement";
import CompanyValues from "~/components/Landing/About/CompanyValues";
import TeamMembers from "~/components/Landing/About/TeamMembers";
import HistoryTimeline from "~/components/Landing/About/HistoryTimeline";
import AchievementStats from "~/components/Landing/About/AchievementStats";
import ContactCTA from "~/components/Landing/About/ContactCTA";

// The path here was updated in the previous turn. If you reverted it,
// it should be: "/_landingLayout/(landing)/about"
export const Route = createFileRoute("/(landing)/about")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "Bend | About",
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <main>
      <Introduction />

      <MissionStatement />

      <CompanyValues />

      <TeamMembers />

      <HistoryTimeline />

      <AchievementStats />

      <ContactCTA />
    </main>
  );
}
