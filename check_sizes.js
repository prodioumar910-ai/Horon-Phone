import fs from 'fs';
const files = fs.readdirSync('./src/assets/images');
files.forEach(file => {
  const stats = fs.statSync(`./src/assets/images/${file}`);
  console.log(`${file}: ${stats.size} bytes`);
});
