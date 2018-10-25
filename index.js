#!/usr/bin/env node

/* eslint-disable */
const fs = require('fs-extra');
const path = require('path');
const argv = process.argv.splice(2);

if (argv.length < 1) {
  console.log('please input app');
  return;
}

const imagesPath = path.resolve(process.cwd(), argv[0]);
const pix = ['.png', '.jpg', '.jpge', '.gif', '.svg', '.js', '.jsx'];
function autoWriteFile(dirPath) {
  let file;
  if (argv.length > 1) {
    file = argv[1];
  } else {
    file = dirPath + '/index.js';
  }

  if (!fs.existsSync(dirPath)) {
    console.log('error images file');
    return;
  }
  const icons = fs.readdirSync(dirPath, { encoding: 'utf8' });
  let iconsRequireText = ``;
  for (let i = 0; i < icons.length; i++) {
    let fileName = icons[i];
    if (fileName === 'index.js' || fileName === 'index.jsx') {
      continue;
    }
    for (let i = 0; i < pix.length; i++) {
      if (fileName.indexOf(pix[i]) > -1) {
        fileName = fileName.replace(pix[i], '');
        let paramName = fileName.replace(/-|\s/g, '_');
        iconsRequireText += `  ${paramName}: require('./${fileName}${
          pix[i]
        }'),\n`;
        break;
      }
    }
  }
  const iconsFileText = `/* eslint-disable global-require */
export default {
--iconsRequireText--};
/* eslint-enable global-require */
`.replace('--iconsRequireText--', iconsRequireText);
  fs.writeFileSync(file, iconsFileText, { encoding: 'utf8' });
}

autoWriteFile(imagesPath);

console.log(`auto create files:`);
console.log(imagesPath + '/index.js');
console.log(`done!`);
