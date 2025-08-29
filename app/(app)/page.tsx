"use client"

import { config } from "@/config";
import { HomeCode } from "@/src/components/blocks/homeCode";
import { BlueBlur, GreenBlur } from "@/src/components/blurs";
import { CodeConst, CodeLine, CodeStringValue, CodeVarName, Comment } from "@/src/components/code";
import { cn } from "@/src/lib/utils";

export default function Home() {
  return (
    <div className="overflow-hidden h-full flex flex-row gap-[146px] justify-center items-center relative not-2xl:gap-0 not-2xl:px-6">

      <section>
        <div>
          <p className="text-lg">Hi all. I am</p>
          <h1 className={cn(
            "text-6xl leading-16 text-heading-foreground not-lg:wrap-anywhere",
            config._home_h1_title_custom_class
          )}>
            {config.name} {config.surname}
          </h1>
          <h2 className="text-indigo-500 text-3xl leading-10">{"> Fullstack developer"}</h2>
        </div>
        <div className="mt-[75px] flex flex-col gap-2">
          <Comment>complete the game to continue</Comment>
          <Comment>find my profile on GitHub:</Comment>
          <CodeLine>
            <CodeConst />
            <CodeVarName>githubLink</CodeVarName>
            =
            <CodeStringValue isLink className="not-lg:wrap-anywhere">https://github.com/zamelane</CodeStringValue>
          </CodeLine>
        </div>
      </section>

      <div className="min-w-[676px] h-full not-2xl:min-w-0">
        <GreenBlur className="absolute pointer-events-none top-0 left-2/4 size-[70vh] not-2xl:left-0" />
        <BlueBlur className="absolute pointer-events-none top-1/4 left-2/3 size-[70vh] not-2xl:left-0" />
        <div className="absolute top-1/2 -translate-y-1/2 not-2xl:hidden">
          <div className="flex flex-col gap-4">
            {
              ['opacity-10', 'opacity-40', 'opacity-100', 'opacity-40', 'opacity-10'].map((e, i) => (
                <HomeCode key={i} className={cn('min-w-max', e)} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}