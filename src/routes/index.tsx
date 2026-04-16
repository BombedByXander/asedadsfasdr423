import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import { FaYoutube, FaTiktok, FaDiscord, FaGithub } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { setupSections } from "../data/setup";
import { projects } from "../data/projects";
import { SetupTable } from "../components/SetupTable";
import { ProjectCard } from "../components/ProjectCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ProdByXander — Home" },
      { name: "description", content: "About ProdByXander, portfolio projects, gaming setup, and social links." },
      { property: "og:title", content: "ProdByXander — Home" },
      { property: "og:description", content: "About ProdByXander, portfolio projects, gaming setup, and social links." },
    ],
  }),
  component: Home,
});

const links: Array<{ name: string; href: string; icon: IconType }> = [
  { name: "YouTube", href: "https://youtube.com", icon: FaYoutube },
  { name: "TikTok", href: "https://tiktok.com", icon: FaTiktok },
  { name: "Discord", href: "https://discord.com", icon: FaDiscord },
  { name: "GitHub", href: "https://github.com", icon: FaGithub },
];

function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-8">
      <section className="section-card">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h1>
        <p className="text-muted-foreground leading-relaxed">
          Hey! I'm ProdByXander, or Xander — I love coding, gaming, and designing TONS of things, like
          this site here.
        </p>
      </section>

      <section className="section-card">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Links</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-button flex-col py-6"
              >
                <Icon className="h-8 w-8 brand-accent" aria-hidden />
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>
      </section>

      {/* Projects hero */}
      <section className="section-card">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Projects</h2>
        <div className="grid gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Setup hero — anchor for scroll-to + click-through to full page */}
      <section id="setup" className="section-card scroll-mt-24">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">My Setup</h2>
            <p className="text-muted-foreground mt-1 text-sm">
              The gear I use to game and create. Click through for the full breakdown.
            </p>
          </div>
          <Link to="/setup" className="link-button !w-auto px-4" style={{ width: "auto" }}>
            <span>View full setup</span>
            <ArrowDown className="h-4 w-4 brand-accent -rotate-90" />
          </Link>
        </div>

        <div className="space-y-6">
          {setupSections.map((section) => (
            <SetupTable key={section.id} section={section} />
          ))}
        </div>
      </section>
    </main>
  );
}
