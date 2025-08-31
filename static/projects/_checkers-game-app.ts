import { ProjectContentType } from '../../src/types';

export const _checkersGameApp: ProjectContentType = {
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
}