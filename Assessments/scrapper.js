//Write a simple scraper which will get all image urls from https://www.gettyimages.com/ for a given search.
// Please note that we do not require you to download images, we just want to save urls.

const https = require('https');

function getHTML(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            let data = '';
            response.on('data', (chunk) => data += chunk);
            response.on('end', () => resolve(data));
        }).on('error', (err) => reject(err));
    });
}

async function scrapeLinks(url) {
    try {
        const html = await getHTML(url);
        // This regex finds href attributes in a tags
        const linkRegex = /<a[^>]+href="([^">]+)"/g;
        let match;
        const links = [];

        while (match = linkRegex.exec(html)) {
            links.push(match[1]);
        }

        console.log(links);
    } catch (error) {
        console.error('Error fetching page:', error);
    }
}

scrapeLinks('https://www.gettyimages.com/');