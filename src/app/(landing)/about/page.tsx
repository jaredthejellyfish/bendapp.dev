// Import the components from the components directory
import Introduction from "@/components/About/Introduction";
import MissionStatement from "@/components/About/MissionStatement";
import TeamMembers from "@/components/About/TeamMembers";
import HistoryTimeline from "@/components/About/HistoryTimeline";
import CompanyValues from "@/components/About/CompanyValues";
import AchievementStats from "@/components/About/AchievementStats";
import ContactCTA from "@/components/About/ContactCTA";

export const metadata = {
  title: "Bend | About",
  description:
    "About Bend, the personal assistant that helps you get things done.",
};

export default function About() {
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
