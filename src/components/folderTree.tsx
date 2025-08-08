'use client'

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from "react";

export type TreeData = {
  type: 'directory' | 'file'
  name: string
  path: string
  children?: TreeData[]
}

type FolderTreeProps = {
  treeData: TreeData[]
}
export function FolderTree({ treeData }: FolderTreeProps) {
  return (
    <>
      {
        treeData.map((node, key) => (
          <FolderTreeItem key={key} node={node} />
        ))
      }
    </>
  )
}

type FolderTreeItemProps = {
  node: TreeData
}
export function FolderTreeItem({ node }: FolderTreeItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  if (node.type === 'file') {
    return (
      <div>
        { node.name }
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <motion.p
        className="inline-flex gap-3 px-6 py-3 max-h-12 border-b border-b-theme-stroke text-slate-50 cursor-pointer select-none"
        onClick={() => setIsOpen((v) => !v)}
        whileTap={{ scale: 0.98 }}
      >
        <motion.i
          className="ri-arrow-down-s-fill"
          animate={{ rotate: isOpen ? 0 : -90 }}
          transition={{ duration: 0.2 }}
        />
        <span>{node.name}</span>
      </motion.p>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.1 },
              },
            }}
            className="p-3 flex flex-col gap-2 border-b border-b-theme-stroke overflow-hidden"
          >
            {
              node.children?.map((child, key) => (
                <FolderTreeItem key={key} node={child} />
              ))
            }
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}