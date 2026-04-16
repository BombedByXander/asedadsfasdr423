import { Cpu, MonitorCog, Headphones, Keyboard } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SetupRow = { part: string; brand: string; product: string };

export type SetupSection = {
  id: string;
  title: string;
  icon: LucideIcon;
  rows: SetupRow[];
};

export const setupSections: SetupSection[] = [
  {
    id: "computer",
    title: "Computer",
    icon: MonitorCog,
    rows: [
      { part: "CPU", brand: "AMD", product: "Ryzen 5 5500" },
      { part: "GPU", brand: "Nvidia", product: "GeForce GTX 1060 Gaming X 6GB" },
      { part: "RAM", brand: "Corsair", product: "32GB DDR4" },
      { part: "Motherboard", brand: "Gigabyte", product: "B550 EAGLE WIFI6" },
      { part: "Internet", brand: "GoNetSpeed", product: "↓ 900 Mbps  ↑ 870 Mbps" },
    ],
  },
  {
    id: "audio",
    title: "Audio",
    icon: Headphones,
    rows: [
      { part: "Microphone", brand: "Razer", product: "Seiren V3 Mini" },
      { part: "Headphones", brand: "Apple", product: "Beats Solo 4" },
    ],
  },
  {
    id: "peripherals",
    title: "Peripherals",
    icon: Keyboard,
    rows: [{ part: "Keyboard", brand: "Aula", product: "F75 Pro" }],
  },
];

export const SetupRowIcon = Cpu;
