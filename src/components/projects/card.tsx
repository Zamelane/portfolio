'use client'

import { ProjectContentType } from "@/src/types"
import Image from "next/image"
import { Button } from "../button"
import { projects } from "@/static/projects/content"
import { cn } from "@/src/lib/utils"

export type ProjectCardType = {
  data: ProjectContentType
  className?: string
}
export function ProjectCard({ data, className }: ProjectCardType) {
  const imgSrc = data.image.startsWith('http')
    ? data.image
    : `/static/${data.slug}/${data.image}`
  return (
    <div className={cn("flex flex-col gap-4 w-full", className)}>

      <p className="whitespace-pre pl-4">
        <span className="text-indigo-500 font-bold">Project {projects.indexOf(data) + 1}</span>
        <span>{" // " + data.slug}</span>
      </p>

      <div className="min-h-80 bg-slate-950 border border-slate-800 rounded-2xl overflow-clip">
        <div className="min-h-56 max-h-56 overflow-hidden relative">
          <Image src={imgSrc} alt="" fill className="object-cover" />
          <i></i>
        </div>

        <div className="border-t border-t-slate-800 p-8 flex flex-col gap-5">
          <p>{ data.title }</p>
          <Button className="bg-slate-600 text-white max-w-fit">view-project</Button>
        </div>
      </div>

    </div>
  )
}