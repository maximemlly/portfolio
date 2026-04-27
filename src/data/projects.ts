import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "hutchinson-connect",
    title: "Hutchinson Connect",
    description:
      "Annuaire intranet intelligent développé pour le site Hutchinson de Fleury-les-Aubrais.",
    longDescription:
      "Hutchinson Connect est une application web intranet développée pour le site Hutchinson de Fleury-les-Aubrais. Elle permet aux employés de rechercher, filtrer et consulter les profils de leurs collègues. Le projet a été réalisé en binôme dans le cadre de notre formation à Coda School, avec une cliente réelle : Virginie Farneault.",
    stack: ["Node.js", "Express", "MySQL", "Vanilla JS"],
    thumbnail: "/projects/thumbnails/hutchinson_connect.png",
    highlights: [
      "Import en masse des employés via fichier Excel (xlsx)",
      "Système de recherche et de filtres dynamiques",
      "Middleware d'authentification adapté au réseau interne Hutchinson",
      "Architecture REST avec Node.js et Express",
    ],
    status: "Terminé",
  },
  {
    id: "pokemon-sd-javafx",
    title: "Pokemon Showdown! JavaFX Remake",
    description: "Recréation du jeu Pokémon Shodown! en JavaFX.",
    longDescription:
      "Pokémon Showdow est un simulateur de combat de Pokémon, complet et entièrement jouable en ligne. Notre objectif était de récréer l'entièreté des mécanique du jeu en utilisant uniquement Java et JavaFX comme stack.",
    stack: ["Java", "JavaFX"],
    githubRepo: "maximemlly/pokemon-sd-javafx",
    thumbnail: "/projects/thumbnails/pokemon_sd_javafx.png",
    highlights: [
      "Recrée les mecaniques de team, de combat, d'attaques le plus fidèlement possible au jeu",
      "Java et JavaFX only",
      "Projet réalisé en 1 semaine",
    ],
    status: "Terminé",
  },
  {
    id: "pablos-journey",
    title: "Pablo's Journey",
    description:
      "Pablo's Journey est un RPG indépendant développé à l'occasion de la Game Jam Cod'Bar 2026",
    longDescription:
      "À l'occasion d'une game jam organisée par le BDE Cod'Bar, nous avons eu deux semaines pour créer un jeu dont le thème était RPG. Nous avons créé Pablo's Journey, un jeu dans lequel on incarne Pablo, un jeu garçon qui tente de récuperer ses souvenirs, en nous inspirant grandement du jeu Undertale",
    stack: ["Gamemaker Language (GML)"],
    liveUrl: "https://maximemlly.itch.io/le-voyage-de-pablo",
    thumbnail: "/projects/thumbnails/pablos_journey.png",
    screenshots: [
      "/projects/screenshots/pablos-journey/pic1.png",
      "/projects/screenshots/pablos-journey/pic2.png",
      "/projects/screenshots/pablos-journey/pic3.png",
      "/projects/screenshots/pablos-journey/pic4.png",
    ],
    highlights: [
      "Jeu RPG indépendant",
      "Aventure, frisson et retournement de situation",
      "Une histoire des plus palpitantes",
    ],
    status: "Archivé",
  },
  {
    id: "codblast",
    title: "Cod'Blast",
    description: "Recréation du jeu Block Blast! en JavaScript en ligne.",
    longDescription:
      "Cod'Blast est inspiré du très célèbre jeu Block Blast. Il s'agit d'un jeu de réflexion où l'on dispose des pièces sur une grille pour effacer des lignes et des colonnes. L'objectif est d'optimiser l'espace stratégiquement pour enchaîner les combos et obtenir le plus haut score.",
    stack: ["JavaScript", "Vite"],
    githubRepo: "maximemlly/codblast",
    liveUrl: "https://codblast.maxime-maillary.fr",
    thumbnail: "/projects/thumbnails/codblast.png",
    screenshots: [
      "/projects/screenshots/codblast/pic1.png",
      "/projects/screenshots/codblast/pic2.png",
      "/projects/screenshots/codblast/pic3.png",
    ],
    highlights: [
      "Architecture MVC",
      "Dépoilement avec Vite",
      "Jouable sur PC et sur mobile",
    ],
    status: "Terminé",
  },
  {
    id: "emotion",
    title: "Emotion",
    description:
      "Emotion est un jeu d'aventure type plateformer créé à l'occasion de la Game Jam CODA de décembre 2025.",
    longDescription:
      "Emotion est un jeu d'aventure type plateformer créé à l'occasion de la Game Jam CODA de décembre 2025. Akuma est un jeune japonais de 20 ans qui a une vie plutôt banale. Son père l’a abandonné et il a perdu sa mère à l’age de 5 ans. Elle était la maire du petit village de Kanashimi (tristesse) dans le district de Minamitsuru. Elle a disparu mystèrieusement, des legendes racontent qu’elle a été aspirée par la fontaine centrale du village.",
    stack: ["Construct3", "JavaScript"],
    githubRepo: "maximemlly/emotion",
    liveUrl: "https://narutom.itch.io/emotion",
    thumbnail: "/projects/thumbnails/emotion.png",
    screenshots: [
      "/projects/screenshots/emotion/pic1.png",
      "/projects/screenshots/emotion/pic2.png",
      "/projects/screenshots/emotion/pic3.png",
      "/projects/screenshots/emotion/pic4.png",
    ],
    highlights: [
      "Créé entièrement à l'aide de Construct 3",
      "Periode de développement de la peremiière version de deux jours",
      "Projet réalisé en groupe de 5",
    ],
    status: "Archivé",
  },
];

/* TEMPLATE
    {
    id: "",
    title: "",
    description: "",
    longDescription: "",
    stack: ["", ""],
    githubRepo: "",
    liveUrl: "",
    thumbnail: "/projects/thumbnails/...",
    screenshots: ["", "", ""],
    highlights: [
        "",
        "",
        "",
    ],
    status: "",
  },
*/
