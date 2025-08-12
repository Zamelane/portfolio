import fs from 'fs'
import path from 'path'

interface TreeNode {
  type: 'directory' | 'file'
  name: string
  path: string
  children?: TreeNode[]
}

const personalInfoDirectory = path.join(process.cwd(), 'static', 'personal-info');

export function getFolderData(
  directory: string = personalInfoDirectory,
  relativePath: string = ''
): TreeNode[] {
  try {
    const dirents = fs.readdirSync(directory, { withFileTypes: true });
    const nodes: TreeNode[] = [];

    for (const dirent of dirents) {
      const currentPath = path.join(directory, dirent.name);
      const newRelativePath = path.join(relativePath, dirent.name);

      if (dirent.isDirectory()) {
        // Рекурсивно получаем содержимое подпапки
        const children = getFolderData(currentPath, newRelativePath);
        nodes.push({
          type: 'directory',
          name: dirent.name,
          path: newRelativePath,
          children,
        });
      } else if (dirent.isFile() && dirent.name.endsWith('.md')) {
        // Добавляем только .md файлы
        nodes.push({
          type: 'file',
          name: dirent.name,
          path: newRelativePath,
        });
      }
    }

    return nodes.sort((a, b) => {
      const aIsFolder = a.type === 'directory'
      const bIsFolder = b.type === 'directory'

      return aIsFolder && !bIsFolder
        ? -1
        : (
          !aIsFolder && bIsFolder
            ? 1
            : 0
        ) 
    });
  } catch (error) {
    console.error('Error reading directory:', error);
    return [];
  }
}

export function getMardownContent(slugParts: string[]): string {
  const filePath = path.join(...slugParts);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return fileContent;
}