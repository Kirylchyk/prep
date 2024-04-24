import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataFilePath = path.join(__dirname, '..', 'node_modules', 'openmoji', 'data', 'openmoji.json');
const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));

// Filter emojis with the tag 'triton'
const tritonEmojis = data.filter(emoji => emoji. subgroups && emoji. subgroups.includes('brand'));

if (tritonEmojis.length > 0) {
    console.log('Found emojis with tag "triton":');
    tritonEmojis.forEach(emoji => {
        console.log(`Character: ${emoji.character} - Description: ${emoji.annotation}`);
        // Construct the path to the SVG file
        const svgPath = path.join(__dirname, '..', 'node_modules', 'openmoji', 'color', 'svg', `${emoji.hexcode}.svg`);
        console.log('SVG Path:', svgPath);
    });
} else {
    console.log('No emojis found".');
}
