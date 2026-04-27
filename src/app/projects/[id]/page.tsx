import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ScreenshotGallery from "@/components/ui/ScreenshotGallery";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  return (
    <section className="flex flex-col gap-10 py-6">
      {/* Retour */}
      <Link
        href="/projects"
        className="flex items-center gap-2 text-text-muted hover:text-text-secondary text-sm transition-colors w-fit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        Retour aux projets
      </Link>

      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold text-text-primary tracking-tight">
              {project.title}
            </h1>
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full w-fit border ${
                project.status === "Terminé"
                  ? "bg-green-500/10 text-green-400 border-green-500/20"
                  : project.status === "En cours"
                    ? "bg-accent/10 text-accent-soft border-accent/20"
                    : "bg-white/5 text-text-muted border-white/10"
              }`}
            >
              {project.status}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent-light text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Voir la démo ↗
              </a>
            )}
            {project.githubRepo && (
              <a
                href={`https://github.com/${project.githubRepo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/10 hover:border-white/20 text-text-secondary hover:text-text-primary text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Thumbnail */}
      {project.thumbnail && (
        <div className="relative w-full h-72 rounded-2xl overflow-hidden border border-white/7">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Contenu principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-text-primary font-semibold text-lg">
              À propos du projet
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div className="flex flex-col gap-4">
              <h2 className="text-text-primary font-semibold text-lg">
                Points clés
              </h2>
              <ul className="flex flex-col gap-3">
                {project.highlights.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-text-secondary text-sm"
                  >
                    <span className="text-accent mt-0.5">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.screenshots && project.screenshots.length > 0 && (
            <ScreenshotGallery
              screenshots={project.screenshots}
              title={project.title}
            />
          )}
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-text-primary font-semibold text-lg">Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="bg-accent/10 text-accent-soft border border-accent/20 rounded-full px-3 py-1 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
