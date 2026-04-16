import { Star, AlertCircle } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-border rounded-lg p-6 bg-card/50 hover:bg-card/80 transition-colors">
      {/* Header: Name, Version, and Stars */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xl font-bold">{project.name}</h3>
            <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
              {project.version}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{project.bio}</p>
        </div>

        {/* Stars and Issues */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground whitespace-nowrap">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 brand-accent" />
            <span>{project.stars}</span>
          </div>
          <div className="flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            <span>{project.issues}</span>
          </div>
        </div>
      </div>

      {/* Language breakdown bar */}
      <div className="space-y-2">
        <div className="flex h-2 w-full gap-0 rounded-full overflow-hidden bg-secondary">
          {project.languages.map((lang) => (
            <div
              key={lang.name}
              style={{
                width: `${lang.percentage}%`,
                backgroundColor: lang.color,
              }}
              title={`${lang.name} ${lang.percentage}%`}
              className="transition-all"
            />
          ))}
        </div>

        {/* Language legend */}
        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground pt-1">
          {project.languages.map((lang) => (
            <div key={lang.name} className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: lang.color }}
              />
              <span>
                {lang.name} {lang.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
