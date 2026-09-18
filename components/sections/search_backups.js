const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\Rimu-Shimu\\.gemini\\antigravity\\brain';

function searchDir(dir) {
  let files;
  try {
    files = fs.readdirSync(dir);
  } catch (e) {
    return;
  }
  for (const file of files) {
    const fullPath = path.join(dir, file);
    let stat;
    try {
      stat = fs.statSync(fullPath);
    } catch (e) {
      continue;
    }
    if (stat.isDirectory()) {
      searchDir(fullPath);
    } else {
      if (file.includes('timeline-section') || file.includes('projects-section') || file.endsWith('.tsx') || file.endsWith('.ts')) {
        console.log('Found file:', fullPath);
        // Let's also check if the file size is reasonable and if it contains original code
      }
    }
  }
}

console.log('Searching in:', brainDir);
searchDir(brainDir);
console.log('Search complete.');
