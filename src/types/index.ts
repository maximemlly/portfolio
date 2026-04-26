export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  githubRepo: string;
  liveUrl?: string;
  thumbnail?: string;
}
