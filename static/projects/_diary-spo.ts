import { ProjectContentType } from '../../src/types';

export const _diarySpo: ProjectContentType = {
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
}