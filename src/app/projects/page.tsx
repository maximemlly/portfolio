import { projects } from "@/data/projects";
import ProjectList from "@/components/ui/ProjectList";

export default function ProjectsPage() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-text-primary tracking-tight">
          Projets
        </h1>
        <p className="text-text-secondary">
          Une sélection de ce que j&apos;ai construit.
        </p>
      </div>

      <ProjectList projects={projects} />
    </section>
  );
}
