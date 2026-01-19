import SectionHeader from "@/components/SectionHeader";
import ProjectRow from "@/components/ProjectRow";
import { getProjects } from "@/lib/content";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="sectionAlt">
      <div className="container">
        <SectionHeader
          title="Projects"
          subtitle="Selected work (case studies with problem → approach → results)."
        />

        <div className="mt-10 space-y-10">
          {projects.map((p, idx) => (
            <ProjectRow
              key={p.slug}
              project={p}
              reverse={idx % 2 === 1} // optional, if your ProjectRow supports reverse
            />
          ))}
        </div>
      </div>
    </main>
  );
}
