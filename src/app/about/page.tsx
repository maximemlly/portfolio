import Timeline from "@/components/ui/Timeline";

const stack = [
  {
    category: "Langages",
    techs: [
      { name: "HTML", icon: "devicon-html5-plain colored" },
      { name: "CSS", icon: "devicon-css3-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "PHP", icon: "devicon-php-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "C", icon: "devicon-c-plain colored" },
    ],
  },
  {
    category: "Backend & BDD",
    techs: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express", icon: "devicon-express-original" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
    ],
  },
  {
    category: "Outils",
    techs: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Linux", icon: "devicon-linux-plain" },
      { name: "Figma", icon: "devicon-figma-plain colored" },
      { name: "WordPress", icon: "devicon-wordpress-plain colored" },
    ],
  },
  {
    category: "En apprentissage 🚀",
    techs: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
    ],
  },
];

export default function AboutPage() {
  return (
    <section className="flex flex-col gap-10 py-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-text-primary tracking-tight">
          À propos
        </h1>
        <p className="text-text-secondary">Qui je suis, ce que je fais.</p>
      </div>

      <div className="flex flex-col gap-6 max-w-2xl">
        <p className="text-text-secondary leading-relaxed">
          Je suis{" "}
          <span className="text-text-primary font-medium">Maxime Maillary</span>
          , développeur fullstack en formation à{" "}
          <span className="text-text-primary font-medium">Coda School</span>. Je
          construis des applications web orientées backend avec Node.js, Express
          et MySQL, tout en montant en compétences sur le frontend avec Next.js
          et TypeScript.
        </p>
        <p className="text-text-secondary leading-relaxed">
          Mon projet le plus récent est{" "}
          <span className="text-text-primary font-medium">
            Hutchinson Connect
          </span>
          , un annuaire intranet intelligent développé pour le site Hutchinson
          de Fleury-les-Aubrais.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <h2 className="text-text-primary font-semibold text-xl">Stack</h2>
        {stack.map(({ category, techs }) => (
          <div key={category} className="flex flex-col gap-4">
            <h3 className="text-text-muted text-xs font-semibold uppercase tracking-widest">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {techs.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 bg-white/[0.03] border border-white/7 hover:border-accent/30 hover:bg-accent/[0.03] rounded-xl px-4 py-2.5 transition-all duration-200"
                >
                  <i className={`${icon} text-xl`} />
                  <span className="text-text-secondary text-sm font-medium">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Timeline />
    </section>
  );
}
