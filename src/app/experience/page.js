import SectionHeader from "@/components/SectionHeader";
import Timeline from "@/components/Timeline";
import { getExperience } from "@/lib/content";

export default function ExperiencePage() {
  const experience = getExperience(); // already newest -> oldest in your JSON

  return (
    <main className="section">
      <div className="container">
        <SectionHeader title="Experience" subtitle="" />
        <div className="mt-8">
          <Timeline items={experience} />
        </div>
      </div>
    </main>
  );
}
