//react project src/App.js

import React, { useState, useEffect, useRef } from 'react';

function App() {
    const [loading, setLoading] = useState(true);
    const [displayedText, setDisplayedText] = useState('');
    const intervalId = useRef(null);

    useEffect(() => {
        const fetchUrl = 'https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge';
        fetch(fetchUrl)
            .then(response => response.text())
            .then(html => {
                const extractedURL = extractURLFromHTML(html);
                setLoading(false);
                intervalId.current = animateText(extractedURL);
            })
            .catch(error => {
                console.error('Failed to fetch or parse HTML:', error);
                setLoading(false);
            });

        return () => {
            if (intervalId.current) {
                clearInterval(intervalId.current);
            }
        };
    }, []);

    function animateText(fullText) {
        let index = 0;
        let displayed = "";
        return setInterval(() => {
            if (index < fullText.length) {
                displayed += fullText.charAt(index);
                setDisplayedText(displayed);
                index++;
            } else {
                clearInterval(intervalId.current);
            }
        }, 500);
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Extracted URL</h1>
            <p>{displayedText}</p>
        </div>
    );
}

//That is the script I used to get the URL in step 2
function extractURLFromHTML(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const codeElements = doc.querySelectorAll('code[data-class^="23"]');
    let url = '';
    codeElements.forEach(code => {
        const divs = code.querySelectorAll('div[data-tag$="93"]');
        divs.forEach(div => {
            const spans = div.querySelectorAll('span[data-id*="21"]');
            spans.forEach(span => {
                const iElements = span.querySelectorAll('i.char');
                iElements.forEach(i => {
                    const value = i.getAttribute('value');
                    if (value) {
                        url += value;
                    }
                });
            });
        });
    });
    return url;
}

export default App;
