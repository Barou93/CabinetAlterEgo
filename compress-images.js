/** @format */

import sharp from "sharp";
import path from "path";
import fs from "fs";

const inputPath = "src/style/assets/img";
const outputPath = "src/compressed-images";

const files = fs.readdirSync(inputPath);

for (const file of files) {
  const filePath = path.join(inputPath, file);
  const fileName = path.basename(file);
  const outputFilePath = path.join(outputPath, fileName);

  sharp(filePath)
    .resize({ width: 1200 }) // Modifier la taille de l'image selon vos besoins
    .toFile(outputFilePath)
    .then(() => {
      console.log(`Compressed ${fileName} and saved to ${outputFilePath}`);
    })
    .catch((error) => {
      console.error(`Error compressing ${fileName}:`, error);
    });
}

console.log("Image compression completed!");
