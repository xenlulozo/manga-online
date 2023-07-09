import fs from 'fs';
import path from 'path';

const getPublicDirectorie = (): string[] => {
  const publicDirPath = path.join(process.cwd(), 'public');
  const files = fs.readdirSync(publicDirPath);

  const directories = files.filter((file) => {
    const filePath = path.join(publicDirPath, file);
    const stats = fs.statSync(filePath);
    return stats.isDirectory();
  });

  return directories;
};

export default getPublicDirectorie;
