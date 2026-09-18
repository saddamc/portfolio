const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\Rimu-Shimu\\.gemini\\antigravity\\brain';

function searchInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('timeline-section.tsx') || content.includes('projects-section.tsx')) {
      console.log('Match found in:', filePath);
      // Print some context or tool calls
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        if (line.includes('timeline-section.tsx') || line.includes('projects-section.tsx')) {
          console.log(`  Line ${idx + 1}: ${line.substring(0, 300)}...`);
        }
      });
    }
  } catch (e) {
    // Ignore errors
  }
}

function walk(dir) {
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
      walk(fullPath);
    } else if (file === 'overview.txt') {
      searchInFile(fullPath);
    }
  }
}

console.log('Searching all logs...');
walk(brainDir);
console.log('Search complete.');
