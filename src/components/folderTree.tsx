'use client'

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from "react";
import { cn } from '../lib/utils';
import { getColorFromHash } from '../lib/getColorFromHash';
import { usePathname, useRouter } from 'next/navigation';

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
    <div className='inline-flex flex-col gap-1'>
      {
        treeData.map((node, key) => (
          <TreeItem key={key} node={node} />
        ))
      }
    </div>
  )
}

type TreeItemProps = {
  node: TreeData
}
export function TreeItem({ node }: TreeItemProps) {
  const router = useRouter()
  const pathname = usePathname()

  const nodePath = new URL(node.path, "http://localhost").pathname

  const isFolder = node.type === 'directory'
  const isSelected = isFolder
    ? pathname.replace('/about', '').startsWith(nodePath)
    : pathname.endsWith(nodePath)

  const [isOpen, setIsOpen] = useState(isSelected)

  function onClick() {
    if (isFolder) {
      setIsOpen((v) => !v)
      return
    }

    router.push('/about/' + node.path)
  }

  return (
    <div className="flex flex-col">
      <motion.div
        className={cn(
          "inline-flex gap-3 cursor-pointer select-none",
          isSelected && "text-slate-50"
        )}
        onClick={onClick}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div className='size-4'>
          {
            isFolder && (
              <motion.div
                className="ri-arrow-right-s-line"
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              />
            )
          }
        </motion.div>
        <div>
          {
            isFolder ? (
              <i
                className={cn(
                  'ri-folder-3-fill',
                  getColorFromHash(node.name, [
                    'text-rose-400',
                    'text-teal-400',
                    'text-indigo-500',
                    'text-amber-500',
                    'text-blue-500',
                    'text-cyan-500',
                    'text-emerald-500'
                  ])
                )}
              />
            ) : (
              <i className='ri-markdown-fill' />
            )
          }
        </div>
        <p>{node.name.replace('.md', '')}</p>
      </motion.div>

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
            className='ml-7 mt-1'
          >
            {
              node.children && <FolderTree treeData={node.children} />
            }
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// export function TreeItem({ node }: TreeItemProps) {
//   const [isOpen, setIsOpen] = useState(false)

//   if (node.type === 'file') {
//     return (
//       <div>
//         { node.name }
//       </div>
//     )
//   }

//   return (
//     <div className="flex flex-col">
//       <motion.p
//         className="inline-flex gap-3 px-6 py-3 max-h-12 text-slate-50 cursor-pointer select-none"
//         onClick={() => setIsOpen((v) => !v)}
//         whileTap={{ scale: 0.98 }}
//       >
//         <motion.i
//           className="ri-arrow-right-s-line"
//           animate={{ rotate: isOpen ? 90 : 0 }}
//           transition={{ duration: 0.2 }}
//         />
//         <span>{node.name}</span>
//       </motion.p>

//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{
//               height: "auto",
//               opacity: 1,
//               transition: {
//                 height: { duration: 0.3 },
//                 opacity: { duration: 0.2, delay: 0.1 },
//               },
//             }}
//             exit={{
//               height: 0,
//               opacity: 0,
//               transition: {
//                 height: { duration: 0.3 },
//                 opacity: { duration: 0.1 },
//               },
//             }}
//             className="p-3 flex flex-col gap-2 overflow-hidden"
//           >
//             {
//               node.children?.map((child, key) => (
//                 <TreeItem key={key} node={child} />
//               ))
//             }
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }