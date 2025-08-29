import { TreeData } from "@/src/components/folderTree";
import { getMardownContent } from "@/src/lib/personalInfo";
import matter from "gray-matter";
import path from "path";
import { use } from "react";
import personalInfoFolderData from '@/static/personal-info.json'
import FormattedText from "@/src/components/formattedText";

type SlugType = {
  slug: string[]
}
export function generateStaticParams() {
  const folderStructure = personalInfoFolderData as TreeData[]
  function slugConstructor(children: TreeData[]): SlugType[] {
    return children.flatMap((c) => {
      const current = c.type === 'file' ? [{
        slug: c.path.split(path.sep)
      }] : []

      if (c.children) {
        return [...current, ...slugConstructor(c.children)];
      }

      return [...current];
    });
  }
  //console.log(JSON.stringify(slugConstructor(folderStructure)))
  return slugConstructor(folderStructure)
}

type PersonalInfoPageProps = {
  params: Promise<{
    slug: string[];
  }>
}
export default function PersonalInfoPage({ params }: PersonalInfoPageProps) {
  const { slug } = use(params)
  const fileContent = getMardownContent(['static', 'personal-info', ...slug])
  const { content } = matter(fileContent)

  return (
    <div className="h-full w-full">
      <div className="pt-3 px-7 overflow-y-auto">
        <FormattedText
          originalText={content.split('\n')}
          className="not-md:hidden"
        />
        <div className="whitespace-pre-wrap md:hidden">
          {
            content.split('\n').map((paragaph, index) => (
              <p key={index} className="leading-6 min-h-2">{paragaph}</p>
            ))
          }
        </div>
      </div>
    </div>
  )
}