const timelineItems = [
  {
    type: "formation",
    date: "Sept. 2025",
    title: "Bachelor Développeur Fullstack",
    subtitle: "École Coda",
    description:
      "Début de la formation en développement fullstack. Apprentissage des bases du web, Node.js, Express, MySQL et des bonnes pratiques de développement.",
  },
  {
    type: "projet",
    date: "Oct. 2025",
    title: "Sokoban en C",
    subtitle: "Projet scolaire",
    description:
      "Recréation du jeu du Sokoban en langage C, jouable entièrement dans le terminal.",
  },
  {
    type: "projet",
    date: "Déc. 2025",
    title: "Who Owes What?",
    subtitle: "Projet scolaire",
    description:
      "Projet final de cours de PHP, création d'un logiciel type Fair Count.",
  },
  {
    type: "projet",
    date: "Déc. 2025",
    title: "Emotion",
    subtitle: "Projet scolaire",
    description:
      "Emotion est un jeu d'aventure type plateformer créé à l'occasion de la Game Jam CODA de décembre 2025.",
  },
  {
    type: "projet",
    date: "Janv. 2026",
    title: "Cod'Blast",
    subtitle: "Projet scolaire",
    description: "Recréation du jeu Block Blast! en JavaScript en ligne.",
  },
  {
    type: "projet",
    date: "Janv. 2026",
    title: "Pablo's Journey",
    subtitle: "Projet de groupe",
    description:
      "Pablo's Journey est un RPG indépendant développé à l'occasion de la Game Jam Cod'Bar 2026",
  },
  {
    type: "projet",
    date: "Mars 2026",
    title: "Pokémon Showdown! JavaFX Remake",
    subtitle: "Projet scolaire",
    description: "Recréation du jeu Pokémon Showdown! en JavaFX.",
  },
  {
    type: "projet",
    date: "Mars 2026",
    title: "Hutchinson Connect",
    subtitle: "Projet entreprise",
    description:
      "Développement d'un annuaire intranet intelligent pour le site Hutchinson de Fleury-les-Aubrais. Premier projet avec une vraie cliente.",
  },
  {
    type: "projet",
    date: "Avril 2026",
    title: "Portfolio",
    subtitle: "Projet personnel",
    description:
      "Conception et développement du portfolio personnel avec Next.js, TypeScript et Tailwind CSS.",
  },
  /* TEMPLATE
  {
    type: "experience / formation / projet",
    date: "Janv. 0000",
    title: "Poste",
    subtitle: "Nom de l'entreprise",
    description: "",
  },
  */
  {
    type: "formation",
    date: "2028",
    title: "Bachelor Développeur Fullstack",
    subtitle: "École Coda — En cours",
    description: "Obtention prévue du titre de Bachelor Développeur Fullstack.",
  },
];

export default function Timeline() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-text-primary font-semibold text-xl">Parcours</h2>

      <div className="relative flex flex-col gap-0 mt-2">
        {/* Ligne verticale */}
        <div className="absolute left-[11px] top-3 bottom-3 w-px bg-white/10" />

        {timelineItems.map((item, i) => (
          <div key={i} className="relative flex gap-6 pb-8 last:pb-0">
            {/* Point */}
            <div
              className={`relative z-10 mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                item.type === "formation"
                  ? "bg-accent/20 border-accent"
                  : item.type === "experience"
                    ? "bg-green-500/20 border-green-500"
                    : "bg-white/5 border-white/20"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  item.type === "formation"
                    ? "bg-accent"
                    : item.type === "experience"
                      ? "bg-green-500"
                      : "bg-white/40"
                }`}
              />
            </div>

            {/* Contenu */}
            <div className="flex flex-col gap-1.5 pt-0.5">
              <span className="text-text-muted text-xs font-medium">
                {item.date}
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-text-primary font-semibold text-sm">
                  {item.title}
                </h3>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full border ${
                    item.type === "formation"
                      ? "bg-accent/10 text-accent-soft border-accent/20"
                      : item.type === "experience"
                        ? "bg-green-500/10 text-green-400 border-green-500/20"
                        : "bg-white/5 text-text-muted border-white/10"
                  }`}
                >
                  {item.type === "formation"
                    ? "Formation"
                    : item.type === "experience"
                      ? "Expérience"
                      : "Projet"}
                </span>
              </div>
              <span className="text-text-muted text-xs">{item.subtitle}</span>
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
