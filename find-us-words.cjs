const fs = require('fs');
const path = require('path');

const words = ['center', 'centers', 'color', 'colors', 'labor', 'labors', 'program', 'programs', 'flavor', 'flavors', 'neighbor', 'neighbors', 'defense', 'offense', 'realize', 'realizes', 'realizing', 'recognize', 'recognizes', 'recognizing'];

function searchDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            searchDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const lines = content.split('\n');
            lines.forEach((line, i) => {
                // Skip lines that look like a tailwind class completely
                if (line.includes('className=')) {
                    // Check if the word is outside quotes
                    const regex = new RegExp(`\\b(${words.join('|')})\\b`, 'i');
                    const match = line.match(regex);
                    if (match) {
                        // Very naive check: if the word is not preceded by a dash or followed by a dash
                        if (!line.match(new RegExp(`-${match[1]}|${match[1]}-`, 'i'))) {
                            // Only print if we suspect it's real text
                            if (line.match(/>[^<]*\b[a-zA-Z]+\b[^>]*</)) {
                                console.log(`${fullPath}:${i + 1}: ${line.trim()}`);
                            }
                        }
                    }
                } else {
                    const regex = new RegExp(`\\b(${words.join('|')})\\b`, 'i');
                    const match = line.match(regex);
                    if (match && !line.match(new RegExp(`-${match[1]}|${match[1]}-`, 'i'))) {
                        // Ignore basic variable declarations, imports, etc if possible, but let's just print them all
                        // and manually filter.
                        console.log(`${fullPath}:${i + 1}: ${line.trim()}`);
                    }
                }
            });
        }
    }
}

searchDir(path.join(__dirname, 'src'));
