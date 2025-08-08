import { TreeData } from "@/src/components/folderTree";
import { getFolderData, getMardownContent } from "@/src/lib/personalInfo";
import matter from "gray-matter";
import path from "path";
import { use } from "react";

type SlugType = {
  slug: string[]
}
export function generateStaticParams() {
  const folderStructure = getFolderData()
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
  console.log(JSON.stringify(slugConstructor(folderStructure)))
  return slugConstructor(folderStructure)
}

type PersonalInfoPageProps = {
  params: Promise<{
    slug: string[];
  }>
}
export default function PersonalInfoPage({ params }: PersonalInfoPageProps) {
  const { slug } = use(params)
  const fileContent = getMardownContent(['personal-info', ...slug])
  const { data: frontMatter, content } = matter(fileContent)

  return (
    <div>
      <p>{frontMatter.title || 'Untitled'}</p>
      <div>
        {content}
      </div>
    </div>
  )
}