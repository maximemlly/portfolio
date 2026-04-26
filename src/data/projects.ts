import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "hutchinson-connect",
    title: "Hutchinson Connect",
    description:
      "Annuaire intranet intelligent développé pour le site Hutchinson de Fleury-les-Aubrais. Permet de rechercher, filtrer et consulter les employés de l'entreprise.",
    stack: ["Node.js", "Express", "MySQL", "Vanilla JS"],
    githubRepo: "sofianecharifi/hutchinson-connect",
    thumbnail: "/projects/hutchinson_connect.png",
  },
  {
    id: "pokemon-sd-javafx",
    title: "Pokémon Showdown! JavaFX Remake",
    description: "Recréation du jeu en lign Pokémon Showdown en JavaFX",
    stack: ["Java", "JavaFX"],
    githubRepo: "maximemlly/pokemon-sd-javafx",
    thumbnail: "/projects/pokemon_sd_javafx.png",
  },
  {
    id: "pablos-journey",
    title: "Pablo's Journey",
    description:
      "Pablo's Journey est un jeu indépendant développé à l'occasion de la Game Jam du BDE Cod'Bar",
    stack: ["Gamemaker Language (GML)"],
    githubRepo: "devilishleyney/urban-couscous",
    thumbnail: "/projects/pablos_journey.png",
  },
];
