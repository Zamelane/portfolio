import { technologyIcon } from "@/src/components/technologyIcon";
import { ProjectContentType, ProjectTechnologiesType } from "@/src/types";

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
  {
    image: '1.jpg',
    slug: '_diary-spo',
    title: 'SPO Diary — a wrapper over the Network City diary for the SPO of the Tomsk region',
    meta: {
      technologies: ['Vite', 'React', 'TypeScript', 'PostgreSQL', 'PWA', 'Android'],
    },
    content: [
      {
        type: 'title',
        size: 'h1',
        value: 'A diary for a network city'
      },
      {
        type: 'paragraph',
        value: [
          'At first it was just my hobby project, and then it became a college coursework. ',
          'That\'s because the old diary was terribly inconvenient — the web interface was so-so, and it was always annoying to enter the password.'
        ]
      },
      {
        type: 'paragraph',
        value: [
          'So we decided to mix up our diary — ',
          { type: 'bold-text', value: 'DIARY-SPO' },
          '. ',
          'It turned out to be as simple as possible: you don\'t have to log in every time, the cookies update themselves, and you can use them both in the browser, through the Android app, or even as a mini-VK application.'
        ]
      },
      {
        type: 'paragraph',
        value: [
          'By the way, the old diary often crashed, so we messed up our web server. ',
          'This has dramatically improved the accessibility of information about couples and grades for students.'
        ]
      },
      {
        type: 'paragraph',
        value: [
          'We also tried to make notifications via Telegram and were thrilled with their coolness.'
        ]
      },
      {
        type: 'paragraph',
        value: [
          'This is not to mention the super convenient VK bot, which had interactive switchable messages and action notifications! ',
          'Our diary was as versatile as possible.'
        ]
      },
      {
        type: 'paragraph',
        value: [
          'We graduated from college a couple of months ago. But even after that, our project remained convenient for everyone who uses it.'
        ]
      },
      {
        type: 'media-carousel',
        items: [
          {
            type: 'image',
            alt: '',
            href: 'https://avatars.mds.yandex.net/i?id=e13998091fefe4c2976252bed409a3f767e98c37-16405973-images-thumbs&n=13'
          }
        ]
      }
    ]
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
      technologies: ['C#', 'WPF', 'Windows'],
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
      technologies: ['Vite', 'React', 'TypeScript', 'PostgreSQL', 'PWA', 'Express'],
    },
    content: []
  },
  {
    image: '1.png',
    slug: '_checkers-game-app',
    title: 'A game of checkers',
    meta: {
      technologies: ['C#', 'WPF', 'Windows'],
    },
    content: [
      {
        type: 'media-carousel',
        items: [
          {
            type: 'video',
            alt: 'test',
            href: 'youtube/K8cVQ1UQuac',
            poster_href: '/static/_checkers-game-app/1.png'
          }
        ]
      }
    ]
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