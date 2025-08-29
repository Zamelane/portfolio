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
    image: '',
    slug: '_diary-spo',
    title: 'SPO Diary — a wrapper over the Network City diary for the SPO of the Tomsk region',
    meta: {
      technologies: ['Vite', 'React', 'TypeScript', 'PostgreSQL', 'PWA', 'Android'],
    },
    content: []
  },
  {
    image: '',
    slug: '_diary-spo',
    title: 'SPO Diary — a wrapper over the Network City diary for the SPO of the Tomsk region',
    meta: {
      technologies: ['Vite', 'React', 'TypeScript', 'PostgreSQL', 'PWA', 'Android'],
    },
    content: []
  },
  {
    image: '',
    slug: '_diary-spo',
    title: 'SPO Diary — a wrapper ',
    meta: {
      technologies: ['Vite', 'React', 'TypeScript', 'PostgreSQL', 'PWA', 'Android'],
    },
    content: []
  },
  {
    image: '',
    slug: '_diary-spo',
    title: 'SPO Diary — a wrapper over the Network City diary for the SPO of the Tomsk region',
    meta: {
      technologies: ['Vite', 'React', 'TypeScript', 'PostgreSQL', 'PWA', 'Android'],
    },
    content: []
  },
  {
    image: '',
    slug: '_diary-spo',
    title: 'SPO Diary — a wrapper over the Network City diary for the SPO of the Tomsk region',
    meta: {
      technologies: ['Vite', 'React', 'TypeScript', 'PostgreSQL', 'PWA', 'Android'],
    },
    content: []
  },
]