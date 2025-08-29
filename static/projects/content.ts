import { ProjectContentType, ProjectTechnologiesType } from "@/src/types";

export const projectTechnologies: ProjectTechnologiesType = [
  {
    chapter: "Frameworks",
    technologies: [
      { icon: 'vuejs', name: "Vue" },
      { icon: 'nextjs', name: "Next" },
      { icon: 'laravel', name: "Laravel" },
      { icon: 'vitejs', name: "Vite" },
      { icon: 'expressjs', name: "Express" },
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
      // { icon: 'windows', name: "Desktop" },
    ]
  }
]

export const projects: ProjectContentType[] = [
  {
    image: '1.jpg',
    slug: '_diary-spo',
    title: 'SPO Diary — a wrapper over the Network City diary for the SPO of the Tomsk region',
    meta: {
      technologies: ['Vite', 'React', 'TypeScript', 'PostgreSQL', 'PWA', 'Android'],
    },
    content: []
  },
  {
    image: '1.png',
    slug: '_lophius',
    title: '🏭 A system for automating the collection, tracking, curation of media, and much more',
    meta: {
      technologies: ['NextJS', 'React', 'TypeScript', 'PostgreSQL'],
    },
    content: []
  },
  {
    image: '1.png',
    slug: '_modbus',
    title: 'An application for working with devices using the modbus protocol',
    meta: {
      technologies: ['C#', 'WPF'],
    },
    content: []
  },
  {
    image: '1.png',
    slug: '_change-score-extension',
    title: 'An extension for changing the score on the site\'s test completion screen videouroki.net',
    meta: {
      technologies: ['JavaScript'],
    },
    content: []
  },
  {
    image: '1.png',
    slug: '_effective-mobile-test-task',
    title: '💻 A test task from effective mobile',
    meta: {
      technologies: ['Vite', 'React', 'TypeScript', 'PostgreSQL', 'PWA'],
    },
    content: []
  },
  {
    image: '1.png',
    slug: '_checkers-game-app',
    title: 'A game of checkers',
    meta: {
      technologies: ['C#'],
    },
    content: []
  },
  {
    image: '1.png',
    slug: '_online-timer',
    title: 'Timer until my friend\'s return from the army',
    meta: {
      technologies: ['NextJS', 'React', 'TypeScript'],
    },
    content: []
  },
]