const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\Rimu-Shimu\\.gemini\\antigravity\\brain\\737ece29-f28c-4cce-a72e-14bf1ad2bfe4\\.system_generated\\logs\\overview.txt';
const outputPath = 'f:\\LEVEL 2\\Saddam-Protfolio\\Saddam-Protfolio\\components\\sections\\timeline-section-original.tsx';

try {
  const content = fs.readFileSync(logPath, 'utf8');
  const lines = content.split('\n');
  
  for (const line of lines) {
    if (!line.trim()) continue;
    try {
      const parsed = JSON.parse(line);
      if (parsed.tool_calls) {
        for (const tc of parsed.tool_calls) {
          if (tc.name === 'replace_file_content' && tc.args.TargetFile.includes('timeline-section.tsx')) {
            console.log('Found replace_file_content tool call in step:', parsed.step_index);
            if (tc.args.TargetContent) {
              fs.writeFileSync(outputPath, tc.args.TargetContent, 'utf8');
              console.log('Successfully wrote original content to:', outputPath);
              process.exit(0);
            }
          }
        }
      }
    } catch (e) {
      // Ignore JSON parse errors for non-JSON lines or partial lines
    }
  }
  console.log('Could not find matching tool call.');
} catch (error) {
  console.error('Error reading or writing file:', error);
}
