import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-8">Projets</h1>
      <ul className="flex flex-col gap-6">
        {projects.map((project) => (
          <li
            key={project.id}
            className="border border-gray-800 rounded-xl p-6"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <div className="flex gap-2 mt-4 flex-wrap">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-800 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
