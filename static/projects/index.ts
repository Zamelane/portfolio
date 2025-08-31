import { technologyIcon } from "@/src/components/technologyIcon";
import { ProjectContentType, ProjectTechnologiesType } from "@/src/types";
import { _diarySpo } from "./_diary-spo";
import { _lophius } from "./_lophius";
import { _modbus } from "./_modbus";
import { _changeScoreExtension } from "./_change-score-extension";
import { _effectiveMobileTestTask } from "./_effective-mobile-test-task";
import { _checkersGameApp } from "./_checkers-game-app";
import { _onlineTimer } from "./_online-timer";

export const projectTechnologies: ProjectTechnologiesType = [
  {
    chapter: "Frameworks",
    technologies: [
      { icon: 'vuejs', name: "Vue" },
      { icon: technologyIcon('next_js.png'), name: "Next" },
      { icon: 'laravel', name: "Laravel" },
      { icon: technologyIcon('vite.png', 'vite-gr.png'), name: "Vite" },
      { icon: technologyIcon('express.png'), name: "Express" },
      // { icon: 'elysiajs', name: "Elysia" },
      { icon: 'android', name: "Maui" },
      { icon: 'net', name: "WPF" },
    ],
    defaultOpen: true
  },
  {
    chapter: "Libraries",
    technologies: [
      { icon: 'react', name: "React" },
      { icon: 'shadcnui', name: "Shadcn/ui" },
      { icon: 'bootstrap5', name: "Bootstrap" },
    ]
  },
  {
    chapter: "Databases",
    technologies: [
      { icon: 'mysql', name: "MySQL" },
      { icon: 'postgresql', name: "PostgreSQL" },
    ]
  },
  {
    chapter: 'Languages',
    technologies: [
      { icon: 'typescript', name: "TypeScript" },
      { icon: 'js', name: "JavaScript" },
      { icon: 'php', name: "PHP" },
      { icon: 'csharp', name: "C#" },
    ]
  },
  {
    chapter: 'Platforms',
    technologies: [
      { icon: 'pwa', name: "PWA" },
      { icon: 'android', name: "Android" },
      { icon: technologyIcon('windows.png', 'windows-gr.png'), name: "Windows" },
    ]
  }
]

export const projects: ProjectContentType[] = [
  _diarySpo,
  _lophius,
  _modbus,
  _changeScoreExtension,
  _effectiveMobileTestTask,
  _checkersGameApp,
  _onlineTimer
]