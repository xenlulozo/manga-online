import fs from 'fs';
import path from 'path';

const getPublicDirectories = (name: string): string[] => {
  console.log(name)
  const publicDirPath = path.join(process.cwd(), `public/${name}`);
  const files = fs.readdirSync(publicDirPath);

  const directories = files.filter((file) => {
    const filePath = path.join(publicDirPath, file);
    const stats = fs.statSync(filePath);
    return stats.isDirectory();
  });

  return directories;
};

export default getPublicDirectories;
