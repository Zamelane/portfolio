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

/* PROJECT_CONTENT */
export type ProjectTechnologiesIconType = {
  icon: string | {
    selectedIcon: React.ReactNode
    grayscaleIcon: React.ReactNode
  }
  name: string
}
export type ProjectTechnologiesType = Array<{
  chapter: string
  technologies: Array<ProjectTechnologiesIconType>
  defaultOpen?: boolean
}>
export type ProjectContentType = {
  slug: string
  image: string
  title: string
  meta: {
    technologies: string[]
    date?: Date
  }
  content: BlockType
}

export type BlockType = Array<
  | TitleType
  | ParagraphType
  | MediaCardType
  | MediaCarouselType
  | FilesBlockType
  | ButtonsBlockType
>

export type TitleType = {
  type: 'title'
  value: string
  size: 'h1' | 'h2' | 'h3'
}

export type ParagraphType = {
  type: 'paragraph'
  value: string | Array<
    | string
    | LinkType
    | UnderlineTextType
    | ItalicTextType
    | BoldTextType
  >
}

export type BoldTextType = {
  type: 'bold-text'
  value: string | Array<
    | string
    | UnderlineTextType
    | ItalicTextType
    | LinkType
  >
}

export type ItalicTextType = {
  type: 'italic-text'
  value: string | Array<
    | string
    | UnderlineTextType
    | BoldTextType
    | LinkType
  >
}

export type UnderlineTextType = {
  type: 'underline-text'
  value: string | Array<
    | string
    | ItalicTextType
    | BoldTextType
    | LinkType
  >
}

export type LinkType = {
  type: 'link'
  text: string | Array<
    | string
    | UnderlineTextType
    | ItalicTextType
    | BoldTextType
  >
  href: string
}

export type MediaCardType = {
  type: 'media-card'
  mediaType: 'image'
  href: string
  alt: string
} & {
  mediaType: 'video'
  poster_href: string
}

export type MediaCarouselType = {
  type: 'media-carousel'
  items: Array<{
    type: 'image'
    href: string
    alt: string
  } &
  { type: 'video', poster_href: string }>
}

export type FilesBlockType = {
  type: 'files-block'
  description?: string
  items: Array<{
    href: string
    name: string
    icon?: React.ReactNode
    size?: string
  }>
}

export type ButtonsBlockType = {
  type: 'buttons-block'
  position?: 'left' | 'center' | 'right'
  items: Array<{
    href: string
    text: string
    icon?: React.ReactNode
    disabled?: boolean
  }>
}

export type TextType = string | Array<
  | string
  | LinkType
  | UnderlineTextType
  | ItalicTextType
  | BoldTextType
>