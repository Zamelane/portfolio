"use client"

import { Tab, TabLayout } from "@/src/components/blocks/tab";
import { ProjectCard } from "@/src/components/projects/card";
import { SelectItem } from "@/src/components/selectItem";
import { Spoiler } from "@/src/components/spoiler";
import { projects, projectTechnologies } from "@/static/projects";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Page() {
  const [selected, setSelected] = useState<string[]>([])

  function handleSelect(item: string, status: boolean) {
    if (status === false) {
      setSelected(selected.filter(i => i !== item))
    } else {
      setSelected([...selected, item])
    }
  }

  return (
    <div className="flex h-full w-full not-md:flex-col">

      <div className="flex flex-col min-w-[244px] max-w-min border-r border-r-theme-stroke not-md:max-w-full not-md:border-r-0 not-md:h-max not-md:gap-1 md:overflow-y-auto">
        {
          projectTechnologies.map((chapter, i) => (
            <Spoiler
              key={i}
              title={chapter.chapter}
              className="not-md:bg-slate-700"
              childrenLayoutClassName="pl-6 not-md:border-0 not-md:-mb-1"
              isOpenDefault={chapter.defaultOpen || false}
              isMobileOpenDefault={i === 0}
            >
              {
                chapter.technologies.map((technology, i) => (
                  <SelectItem {...technology} key={i} setSelected={(v, s) => handleSelect(v, s)} />
                ))
              }
            </Spoiler>
          ))
        }
      </div>

      <div className="h-full w-full flex flex-col">
        <TabLayout className="not-md:hidden">
          <Tab className="max-w-96">
            <p className="truncate max-w-80 mr-2">
              {
                selected.length === 0
                  ? 'All'
                  : selected.join(', ')
              }
            </p>
          </Tab>
        </TabLayout>
        <div className="h-full w-full md:overflow-y-auto grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-7 p-16 not-md:p-6">
          <AnimatePresence mode="popLayout">
            {
              projects.map((project, i) => {
                // Проверяем, что подходят ВСЕ фильтры
                const isIncluded = selected.length === 0 || !selected.some(item => !project.meta.technologies.includes(item))

                if (!isIncluded) {
                  return undefined
                }

                // TODO: Закостылил паддинг. Почеу-то не получилось его по-другому добавить
                return <ProjectCard key={i} data={project} className={i === projects.length - 1 && 'pb-10' || undefined} />
              })
            }
          </AnimatePresence>
        </div>
      </div>

    </div>
  )
}