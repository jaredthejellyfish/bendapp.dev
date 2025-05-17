import { createFileRoute } from "@tanstack/react-router";
import Introduction from "../components/About/Introduction";
import MissionStatement from "../components/About/MissionStatement";
import CompanyValues from "../components/About/CompanyValues";
import TeamMembers from "../components/About/TeamMembers";
import HistoryTimeline from "../components/About/HistoryTimeline";
import AchievementStats from "../components/About/AchievementStats";
import ContactCTA from "../components/About/ContactCTA";

export const Route = createFileRoute("/about")({
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
