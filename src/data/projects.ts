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
    name: "spellingbee.lol",
    version: "v26.3",
    bio: "A web version of Roblox Spelling Bee with much more customization.",
    stars: "50",
    issues: 0,
    languages: [
      { name: "TypeScript", percentage: 90.3, color: "#3178c6" },
      { name: "PLpgSQL", percentage: 5.2, color: "#336790" },
      { name: "CSS", percentage: 4.3, color: "#563d7c" },
      { name: "Other", percentage: 0.2, color: "#8b949e" },
    ],
    link: "https://spellingbee.lol",
  },
];
