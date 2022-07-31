import { readdirSync, readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const partnerDir = './partners';

export async function getAllPartnerIds() {
  const fileNames = readdirSync(partnerDir);

  return fileNames.map(fileName => ({
    params: {
      id: fileName.replace(/\.md$/, '')
    }
  }));
}

export interface PartnerData {
  id: string;
  name: string;
  description: string;
  url: string;
  contentHtml: string;
}

export async function getPartnerData(id: string): Promise<PartnerData> {
  const fullPath = path.join(partnerDir, `${id}.md`);
  const fileContents = readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content.split('\n').join('\n\n'));
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as { name: string; description: string; url: string })
  };
}

export function getAllPartnersData(): Array<Omit<PartnerData, 'contentHtml'>> {
  const partners = readdirSync(partnerDir);
  const metadata: Array<Omit<PartnerData, 'contentHtml'>> = [];

  for (const partner of partners) {
    const fullPath = path.join(partnerDir, `${partner}`);
    const fileContents = readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    metadata.push({
      id: partner,
      ...(matterResult.data as Omit<PartnerData, 'contentHtml' | 'id'>)
    });
  }

  return metadata;
}
