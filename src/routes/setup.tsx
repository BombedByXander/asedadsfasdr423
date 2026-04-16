import { createFileRoute } from "@tanstack/react-router";
import { setupSections } from "../data/setup";
import { SetupTable } from "../components/SetupTable";

export const Route = createFileRoute("/setup")({
  head: () => ({
    meta: [
      { title: "My Setup — ProdByXander!" },
      { name: "description", content: "The full PC, audio and peripherals setup ProdByXander! uses to game and create." },
      { property: "og:title", content: "My Setup — ProdByXander!" },
      { property: "og:description", content: "Full PC specs, audio gear and peripherals." },
    ],
  }),
  component: SetupPage,
});

function SetupPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-8">
      {setupSections.map((section) => (
        <SetupTable key={section.id} section={section} />
      ))}
    </main>
  );
}
