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

  if (!file.match(/\.(jpg|jpeg|png)$/i)) return;

  const image = sharp(filePath);
  const metadata = await image.metadata();

  const width = metadata.width;
  const height = metadata.height;

  const name = path.parse(file).name;

  // ORIGINAL (@2x)
  await image.toFile(
    path.join(outputDir, `${name}@2x${path.extname(file)}`)
  );

  // RESIZED (@1x)
  await image
    .resize(Math.round(width / 2), Math.round(height / 2))
    .toFile(
      path.join(outputDir, `${name}@1x${path.extname(file)}`)
    );

  // WEBP @2x
  await image
    .webp({ quality: 80 })
    .toFile(
      path.join(outputDir, `${name}@2x.webp`)
    );

  // WEBP @1x
  await image
    .resize(Math.round(width / 2), Math.round(height / 2))
    .webp({ quality: 80 })
    .toFile(
      path.join(outputDir, `${name}@1x.webp`)
    );

  console.log(`✔ обработано: ${file}`);
});
