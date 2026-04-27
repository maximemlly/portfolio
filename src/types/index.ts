export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  githubRepo?: string;
  liveUrl?: string;
  thumbnail?: string;
  screenshots?: string[];
  highlights?: string[];
  status: "En cours" | "Terminé" | "Archivé";
}
