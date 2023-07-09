import fs from 'fs';
import path from 'path';

const getImageNames = (chap :string): string[] => {
  const imgDir = path.join(process.cwd(), 'public/oh_shi_no_ko', chap);
  const imageNames = fs.readdirSync(imgDir);
  return imageNames;
};

export default getImageNames;
