import { getFolderData } from "@/src/lib/personalInfo";
import path from "path";
import fs from 'fs';

const outputPath = path.join(process.cwd(), 'static', 'personal-info.json');

const treeData = getFolderData();
fs.writeFileSync(outputPath, JSON.stringify(treeData, null, 2));

console.log('✅ Personal info generated at:', outputPath);