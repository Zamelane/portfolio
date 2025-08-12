'use client'

import { Tab, TabLayout } from "@/src/components/blocks/tab";
import { ContactItem } from "@/src/components/contactItem";
import { FolderTree, TreeData } from "@/src/components/folderTree";
import { Spoiler } from "@/src/components/spoiler";
import { ChildrenProps } from "@/src/types";
import personalInfoFolderData from '@/static/personal-info.json'
import { usePathname } from "next/navigation";

export default function Layout({ children }: ChildrenProps) {
  const treeData = personalInfoFolderData as TreeData[]
  const pathname = usePathname().split('/')

  return (
    <div className="flex h-full w-full not-md:flex-col">

      <div className="flex flex-col min-w-[244px] max-w-min border-r border-r-theme-stroke not-md:max-w-full not-md:border-r-0 not-md:h-max not-md:gap-1">
        <Spoiler
          title="personal-info"
          className="not-md:bg-slate-700"
          childrenLayoutClassName="pl-6 not-md:border-0 not-md:-mb-1"
          isMobileOpenDefault
        >
          <FolderTree treeData={treeData} />
        </Spoiler>

        <Spoiler
          title="contacts"
          className="not-md:bg-slate-700"
          childrenLayoutClassName="pl-6 not-md:border-0 not-md:-mb-1"
        >
          <ContactItem icon="ri-mail-fill">zamelane@vk.com</ContactItem>
          <ContactItem icon="ri-phone-fill">+79539266829</ContactItem>
        </Spoiler>
      </div>

      <div className="h-full w-full flex flex-col">
        <TabLayout className="not-md:hidden">
          <Tab>
            {pathname[pathname.length - 1]}
          </Tab>
        </TabLayout>
        <div className="h-full w-full md:overflow-y-auto">
          {children}
        </div>
      </div>

    </div>
  )
}