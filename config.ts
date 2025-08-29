import { ConfigType } from './src/types';

export const config: ConfigType = {
  name: 'Evgeny',
  surname: 'Malinin',
  tg_nickname: 'zamelane',

  /* */
  github_url: 'https://github.com/zamelane',
  contacts: [
    {
      title: 'contacts',
      items: [
        { icon: 'ri-mail-fill', href:'mailto:zamelane@vk.com', text: 'zamelane@vk.com' },
        { icon: 'ri-phone-fill', href: 'tel:+79539287724', text: '+79539287724' }
      ]
    },
    {
      title: 'find-me-also-in',
      items: [
        { text: 'Discord', href: 'https://discordapp.com/users/719112705184759849' }
      ]
    }
  ],
  social: [
    { icon: 'ri-vk-fill', url: 'https://vk.com/zamelane' },
    { icon: 'ri-telegram-fill', url: 'https://t.me/zamelane' },
  ],

  /* */
  _home_h1_title_custom_class: ""
}