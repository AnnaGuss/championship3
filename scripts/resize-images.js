import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './src/images';
const outputDir = './src/images/optimized';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir);

files.forEach(async (file) => {
  const filePath = path.join(inputDir, file);

  if (!file.match(/\.(jpg|jpeg|png)$/)) {return;}

  const image = sharp(filePath);
  const metadata = await image.metadata();

  const width = metadata.width;
  const height = metadata.height;

  // @2x (оригинал)
  await image
    .toFile(path.join(outputDir, file.replace('.', '@2x.')));

  // @1x (в 2 раза меньше)
  await image
    .resize(Math.round(width / 2), Math.round(height / 2))
    .toFile(path.join(outputDir, file.replace('.', '@1x.')));

  console.log(`✔ обработано: ${file}`);
});
