'use client'

import { TabLayout } from "@/src/components/blocks/tab";
import { ContactItem } from "@/src/components/contactItem";
import { Spoiler } from "@/src/components/spoiler";
import { ChildrenProps } from "@/src/types";

export default function Layout({ children }: ChildrenProps) {
  //const treeData = personalInfoData

  return (
    <div className="flex h-full w-full overflow-hidden">

      <div className="min-w-[244px] max-w-min border-r border-r-theme-stroke">
        <Spoiler title="personal-info">
          {/* <FolderTree treeData={treeData} /> */}
        </Spoiler>

        <Spoiler
          title="contacts"
        >
          <ContactItem icon="ri-mail-fill">zamelane@vk.com</ContactItem>
          <ContactItem icon="ri-phone-fill">+79539266829</ContactItem>
        </Spoiler>
      </div>

      <div className="h-full w-full flex flex-col">
        <TabLayout />
        <div className="h-full">
          {children}
        </div>
      </div>

    </div>
  )
}