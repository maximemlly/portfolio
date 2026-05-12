"use client";

import { useState, useMemo } from "react";
import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  projects: Project[];
}

export default function ProjectList({ projects }: Props) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("Tous");
  const [techFilters, setTechFilters] = useState<string[]>([]);
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [techDropdownOpen, setTechDropdownOpen] = useState(false);

  const allTechs = useMemo(() => {
    const techs = projects.flatMap((p) => p.stack);
    return Array.from(new Set(techs));
  }, [projects]);

  const statuses = ["Tous", "En cours", "Terminé", "Archivé"];

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "Tous" || project.status === statusFilter;

      const matchesTech =
        techFilters.length === 0 ||
        techFilters.every((t) => project.stack.includes(t));

      return matchesSearch && matchesStatus && matchesTech;
    });
  }, [projects, search, statusFilter, techFilters]);

  const toggleTech = (tech: string) => {
    setTechFilters((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech],
    );
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Barre de recherche */}
      <div className="relative">
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
          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher un projet..."
          className="w-full bg-white/[0.03] border border-white/10 focus:border-accent/50 rounded-xl pl-11 pr-4 py-3 text-text-primary text-sm placeholder:text-text-muted outline-none transition-colors"
        />
      </div>

      {/* Filtres */}
      <div className="flex items-center gap-3 flex-wrap">
        {/* Statut */}
        <div className="relative">
          <button
            onClick={() => setStatusDropdownOpen((prev) => !prev)}
            className={`flex items-center gap-2 bg-white/[0.03] border text-sm rounded-xl px-4 py-2.5 outline-none transition-colors cursor-pointer ${
              statusFilter !== "Tous"
                ? "border-accent/50 text-accent-soft"
                : "border-white/10 hover:border-white/20 text-text-secondary"
            }`}
          >
            {statusFilter === "Tous" ? "Tous les statuts" : statusFilter}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-200 ${statusDropdownOpen ? "rotate-180" : ""}`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          {statusDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 z-20 bg-surface border border-white/10 rounded-xl p-2 min-w-48 shadow-xl flex flex-col gap-0.5">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => {
                    setStatusFilter(status);
                    setStatusDropdownOpen(false);
                  }}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-left ${
                    statusFilter === status
                      ? "bg-accent/10 text-accent-soft"
                      : "text-text-secondary hover:bg-white/[0.05] hover:text-text-primary"
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                      statusFilter === status
                        ? "bg-accent border-accent"
                        : "border-white/20"
                    }`}
                  >
                    {statusFilter === status && (
                      <span className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </span>
                  {status === "Tous" ? "Tous les statuts" : status}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Stack multi-select */}
        <div className="relative">
          <button
            onClick={() => setTechDropdownOpen((prev) => !prev)}
            className={`flex items-center gap-2 bg-white/[0.03] border text-sm rounded-xl px-4 py-2.5 outline-none transition-colors cursor-pointer ${
              techFilters.length > 0
                ? "border-accent/50 text-accent-soft"
                : "border-white/10 hover:border-white/20 text-text-secondary"
            }`}
          >
            {techFilters.length === 0
              ? "Toutes les techs"
              : `${techFilters.length} tech${techFilters.length > 1 ? "s" : ""} sélectionnée${techFilters.length > 1 ? "s" : ""}`}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-200 ${techDropdownOpen ? "rotate-180" : ""}`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          {techDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 z-20 bg-surface border border-white/10 rounded-xl p-2 min-w-48 shadow-xl flex flex-col gap-0.5">
              {allTechs.map((tech) => (
                <button
                  key={tech}
                  onClick={() => toggleTech(tech)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-left ${
                    techFilters.includes(tech)
                      ? "bg-accent/10 text-accent-soft"
                      : "text-text-secondary hover:bg-white/[0.05] hover:text-text-primary"
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                      techFilters.includes(tech)
                        ? "bg-accent border-accent"
                        : "border-white/20"
                    }`}
                  >
                    {techFilters.includes(tech) && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    )}
                  </span>
                  {tech}
                </button>
              ))}
            </div>
          )}
        </div>

        {(statusFilter !== "Tous" ||
          techFilters.length > 0 ||
          search !== "") && (
          <button
            onClick={() => {
              setSearch("");
              setStatusFilter("Tous");
              setTechFilters([]);
            }}
            className="text-text-muted hover:text-accent-soft text-sm transition-colors"
          >
            Réinitialiser ✕
          </button>
        )}
      </div>

      {/* Résultats */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 gap-3">
          <span className="text-4xl">🔍</span>
          <p className="text-text-muted text-sm">
            Aucun projet ne correspond à ta recherche.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setStatusFilter("Tous");
              setTechFilters([]);
            }}
            className="text-accent-soft text-sm hover:text-accent transition-colors"
          >
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {filtered.map((project, index) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <div className="group border border-white/7 hover:border-accent/30 bg-white/[0.02] hover:bg-accent/[0.03] rounded-2xl overflow-hidden transition-all duration-200">
                {project.thumbnail && (
                  <div className="relative w-full h-52 overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      priority={index === 0}
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                    />
                  </div>
                )}

                <div className="p-6 flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <h2 className="text-text-primary font-semibold text-lg">
                        {project.title}
                      </h2>
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
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
                    {project.githubRepo && (
                      <span className="text-text-muted">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </span>
                    )}
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex gap-2 flex-wrap">
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
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
