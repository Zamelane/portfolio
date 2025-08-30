import { BlockType, BoldTextType, ButtonsBlockType, ItalicTextType, LinkType, TextType, TitleType, UnderlineTextType } from "@/src/types";
import { JSX } from "react";
import { ParagraphType } from '../../types';
import Link from "next/link";
import { Button } from "../button";
import { cn } from "@/src/lib/utils";

export function RenderProjectContent({ content }: { content: BlockType }) {
  return (
    <section className="flex flex-col gap-2.5">
      {content.map((block, i) => {
        if (block.type === 'title') {
          return RenderTitle(block, i.toString())
        }

        if (block.type === 'paragraph') {
          return RenderParagraph(block, i.toString())
        }

        if (block.type === 'buttons-block') {
          return RenderButtonsBlock(block, i.toString())
        }

        return undefined
      })}
    </section>
  )
}

function RenderTitle(block: TitleType, key: string|undefined = undefined) {
  const classNames = {
    h1: 'text-4xl',
    h2: 'text-3xl',
    h3: 'text-2xl',
  }

  const RenderBlock = block.size as keyof JSX.IntrinsicElements || 'h1'
  
  return (
    <RenderBlock className={cn(
      classNames[block.size],
      'text-white'
    )} key={key + '_title'}>
      { block.value }
    </RenderBlock>
  )
}

function RenderParagraph(block: ParagraphType, key: string|undefined = undefined) {
  return (
    <p key={key} className="text-justify">
      {
        ...RenderText(block.value, key)
      }
    </p>
  )
}

function RenderButtonsBlock(block: ButtonsBlockType, key: string|undefined = undefined) {
  return (
    <div key={key + '_buttons-block'} className={cn(
      'flex flex-row items-center gap-5',
      block.position === 'left' && 'justify-center',
      block.position === 'right' && 'justify-end'
    )}>
      {
        block.items.map((button, i) => {
          return (
            <Link key={i} href={button.href}>
              <Button key={i} disabled={button.disabled}>
                { button.icon }
                { button.text }
              </Button>
            </Link>
          )
        })
      }
    </div>
  )
}

function RenderText(blocks: TextType, key: string|undefined = undefined): React.ReactNode[] {
  const content: React.ReactNode[] = []
  const beingTested = Array.isArray(blocks) ? blocks : [blocks]

  for (const block of beingTested) {
    if (typeof block === 'string') {
      content.push(block)
    } else {
      switch (block.type) {
        case 'bold-text':
          content.push(RenderBoldText(block, key + `_${beingTested.indexOf(block)}`))
          break
        case 'italic-text':
          content.push(RenderItalicText(block, key + `_${beingTested.indexOf(block)}`))
          break
        case 'underline-text':
          content.push(RenderUnderlineText(block, key + `_${beingTested.indexOf(block)}`))
          break
        case 'link':
          content.push(RenderLink(block, key + `_${beingTested.indexOf(block)}`))
          break
      }
    }
  }

  return content
}

function RenderLink(block: LinkType, key: string|undefined = undefined) {
  return (
    <Link key={key + '_link'} href={block.href}>
      {
        ...RenderText(block.text, key)
      }
    </Link>
  )
}

function RenderBoldText(block: BoldTextType, key: string|undefined = undefined) {
  return (
    <strong className="text-white">
      { ...RenderText(block.value, key + '_bold_text') }
    </strong>
  )
}

function RenderItalicText(block: ItalicTextType, key: string|undefined = undefined) {
  return (
    <em className="text-white">
      { ...RenderText(block.value, key + '_italic_text') }
    </em>
  )
}

function RenderUnderlineText(block: UnderlineTextType, key: string|undefined = undefined) {
  return (
    <u className="text-white">
      { ...RenderText(block.value, key + '_underline_text') }
    </u>
  )
}