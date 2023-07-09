import fs from 'fs';
import path from 'path';

// interface data {
//   slug : string
//   name : string
// }
const getImageNames = (data :string): string[] => {
  const name = data[0]
  const chap = data[1]

  try {
    const imgDir = path.join(process.cwd(), `public/${name}`, chap);
    const imageNames = fs.readdirSync(imgDir);
    return imageNames;
  } catch (error) {
    console.log(error)
  }
  return []
};

export default getImageNames;
