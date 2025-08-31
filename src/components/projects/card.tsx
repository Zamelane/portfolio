'use client'

import { motion } from 'framer-motion'
import { ProjectContentType } from "@/src/types"
import Image from "next/image"
import { Button } from "../button"
import { projects } from "@/static/projects"
import { cn } from "@/src/lib/utils"
import Link from 'next/link'

export type ProjectCardType = {
  data: ProjectContentType
  className?: string
}

export function ProjectCard({ data, className }: ProjectCardType) {
  const imgSrc = data.image.startsWith('http')
    ? data.image
    : `/static/${data.slug}/${data.image}`
    
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.15 }}
      className={cn("flex flex-col gap-4 w-full select-none", className)}
    >
      <p className="whitespace-pre pl-4">
        <span className="text-indigo-500 font-bold">Project {projects.indexOf(data) + 1}</span>
        <span>{" // " + data.slug}</span>
      </p>

      <div
        className="transition-all duration-300 delay-300 group hover:scale-[101%] hover:shadow-[0_4px_14px_0_rgba(15,23,42,0.25)] hover:outline-slate-300 min-h-80 bg-slate-950 outline outline-slate-800 rounded-2xl overflow-clip"
      >
        <motion.div 
          className="min-h-56 max-h-56 overflow-clip relative"
        >
          <Image src={imgSrc} alt="" fill className="object-cover transition-all duration-300 group-hover:scale-110" />
          <i></i>
        </motion.div>

        <div className="transition-all duration-300 delay-300 border-t border-t-slate-800 group-hover:border-t-slate-300 p-8 flex flex-col gap-5">
          <p>{ data.title }</p>
          <Link href={'projects/' + data.slug}>
            <Button className="bg-slate-600 text-white max-w-fit">view-project</Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}