import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the __dirname equivalent in ES module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Corrected path to the openmoji data file
const dataFilePath = path.join(__dirname, '..', 'node_modules', 'openmoji', 'data', 'openmoji.json');
const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));

// Search for the mermaid emoji
const mermaidEmoji = data.find(emoji => emoji.annotation.toLowerCase().includes('german'));

if (mermaidEmoji) {
    console.log('Mermaid Emoji:', mermaidEmoji);
    // You can also construct the path to the SVG file
    const svgPath = path.join(__dirname, '..', 'node_modules', 'openmoji', 'color', 'svg', `${mermaidEmoji.hexcode}.svg`);
    console.log('SVG Path:', svgPath);
} else {
    console.log('Emoji not found.');
}
