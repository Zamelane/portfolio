"use client"

import { notFound, useRouter } from "next/navigation";
import personalInfoFolderData from '@/static/personal-info.json';
import { TreeData } from "@/src/components/folderTree";
import { useEffect, useMemo } from "react";

export default function RedirectPage() {
  const router = useRouter();

  const first = useMemo(() => {
    function findFirst(treeData: TreeData[]): TreeData | null {
      treeData.reverse();
      
      for (const item of treeData) {
        if (item.type === 'file') {
          return item;
        }
        
        if (item.type === 'directory' && item.children) {
          const nestedResult = findFirst(item.children);
          if (nestedResult) {
            return nestedResult;
          }
        }
      }
      return null;
    }

    return findFirst(personalInfoFolderData as TreeData[]);
  }, []);

  useEffect(() => {
    if (first) {
      router.push('/about/' + first.path);
    } else {
      notFound();
    }
  }, [first, router]);

  return null;
}