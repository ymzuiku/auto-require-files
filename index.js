#!/usr/bin/env node

/* eslint-disable */
const fs = require('fs-extra');
const path = require('path');
const argv = process.argv.splice(2);

if (argv.length < 1) {
  console.log('please input app');
  return;
}

let imagesPath = path.resolve(process.cwd(), argv[0]);
if (imagesPath.charAt(imagesPath.length - 1) === '/') {
  imagesPath = imagesPath.substring(0, imagesPath.length - 1);
}

if (!fs.existsSync(imagesPath)) {
  console.log('[Error]: The require path is error');
  return;
}
const imagesPathStat = fs.statSync(imagesPath);
if (imagesPathStat && imagesPathStat.isDirectory() === false) {
  console.log("[Error]: The path isn't a dir");
  return;
}

const pix = ['.png', '.jpg', '.jpge', '.gif', '.svg', '.js', '.jsx'];
let iconsRequireText = '';
function autoWriteFile(dirPath, prefix = './') {
  const icons = fs.readdirSync(dirPath, { encoding: 'utf8' });
  for (let i = 0; i < icons.length; i++) {
    let fileName = icons[i];
    if (
      prefix === './' &&
      (fileName === 'index.js' || fileName === 'index.jsx')
    ) {
      continue;
    }
    let relPath;
    relPath = dirPath + '/' + fileName;

    const subStat = fs.statSync(relPath);
    if (subStat && subStat.isDirectory()) {
      autoWriteFile(relPath, prefix + fileName + '/');
    } else {
      for (let i = 0; i < pix.length; i++) {
        if (fileName.indexOf(pix[i]) > -1) {
          fileName = fileName.replace(pix[i], '');
          let prefixName = prefix;
          if (prefixName.indexOf('./') === 0) {
            prefixName = prefixName.replace(/\.\//g, '');
          }
          prefixName = prefixName.replace(/-|\s|\.|\.\//g, '');
          prefixName = prefixName.replace(/\//g, '_');
          let paramName = prefixName + fileName.replace(/-|\s|\.|\\/g, '_');
          iconsRequireText += `  ${paramName}: require('${prefix}${fileName}${
            pix[i]
          }'),\n`;
          break;
        }
      }
    }
  }
}

autoWriteFile(imagesPath);

const iconsFileText = `/* eslint-disable global-require */
export default {
--iconsRequireText--};
/* eslint-enable global-require */
`.replace('--iconsRequireText--', iconsRequireText);
fs.writeFileSync(imagesPath + '/index.js', iconsFileText, {
  encoding: 'utf8',
});

console.log(` `);
console.log(`Auto create files:`);
console.log(imagesPath + '/index.js');
console.log(` `);
console.log(`Done!`);
