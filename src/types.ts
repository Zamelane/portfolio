export type ChildrenProps<T = React.ReactNode> = Readonly<{
  children: T;
}>

export type ChildrenOptionalProps<T = React.ReactNode> = Readonly<{
  children?: T;
}>

export type SocialType = {
  icon: string,
  text?: string,
  url: string
}
export type FooterConfigType = {
  social: SocialType[],
  gh: SocialType
}

/* CONFIG */

export type ConfigType = {
  name: string
  surname: string
  tg_nickname: string

  /* */
  github_url: string

  contacts: Array<{
    title: string
    items: Array<{
      icon?: string
      href?: string
      text: string
    }>
  }>

  social: SocialType[]

  /* */
  _home_h1_title_custom_class?: string
}