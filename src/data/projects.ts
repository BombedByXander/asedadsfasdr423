export type Language = {
  name: string;
  percentage: number;
  color: string;
};

export type Project = {
  id: string;
  name: string;
  version: string;
  bio: string;
  stars: string;
  issues: number;
  languages: Language[];
  link?: string;
};

export const projects: Project[] = [
  {
    id: "xanders-arcade",
    name: "Xanders Arcade",
    version: "v9.1.1",
    bio: "Search the web and play games fully un-blocked.",
    stars: "100+",
    issues: 0,
    languages: [
      { name: "JavaScript", percentage: 64.7, color: "#f1e05a" },
      { name: "CSS", percentage: 35.2, color: "#563d7c" },
      { name: "Dockerfile", percentage: 0.1, color: "#384d54" },
    ],
    link: "https://github.com",
  },
  {
    id: "second-project",
    name: "Second Project",
    version: "v1.0.0",
    bio: "Your project description here.",
    stars: "50+",
    issues: 3,
    languages: [
      { name: "TypeScript", percentage: 75.0, color: "#3178c6" },
      { name: "CSS", percentage: 25.0, color: "#563d7c" },
    ],
    link: "https://github.com",
  },
];
