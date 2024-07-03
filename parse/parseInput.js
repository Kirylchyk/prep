class Node {
    constructor(name) {
        this.name = name;
        this.attributes = {};
        this.children = [];
    }

    addAttribute(key, value) {
        this.attributes[key] = value.replace(/\\"/g, '"');
    }

    addChild(node) {
        this.children.push(node);
    }
}

function parseJSX(input) {
    const rootNode = new Node('root');
    const nodeStack = [rootNode];
    let position = 0;

    while (position < input.length) {
        let openTag = input.indexOf('<', position);
        let closeTag = input.indexOf('>', openTag);
        if (openTag === -1 || closeTag === -1) {
            break;
        }

        let tagContent = input.substring(openTag + 1, closeTag);
        if (tagContent[0] !== '/') {
            // Opening tag
            let spaceIndex = tagContent.indexOf(' ');
            let tagName = spaceIndex === -1 ? tagContent : tagContent.substring(0, spaceIndex);
            let node = new Node(tagName);

            // Extract attributes
            if (spaceIndex !== -1) {
                let attributesString = tagContent.substring(spaceIndex + 1);
                attributesString.match(/(\w+)="([^"]+)"/g)?.forEach(attr => {
                    let [key, value] = attr.split('=');
                    node.addAttribute(key, value.slice(1, -1));
                });
            }

            nodeStack[nodeStack.length - 1].addChild(node);
            nodeStack.push(node);
        } else {
            // Closing tag
            nodeStack.pop();
        }

        position = closeTag + 1;
    }

    return rootNode.children[0];
}

const input = JSON.parse('"<View style=\\"{\\n  \\"flex\\": 1,\\n  \\"backgroundColor\\": \\"#fff\\",\\n  \\"alignItems\\": \\"center\\",\\n  \\"justifyContent\\": \\"center\\n\\"}\\" accessibilityActions=\\"[\\n  {\\n    \\"name\\": \\"cut\\",\\n    \\"label\\": \\"cut\\n  }\\n]\\" testparty-id=\\"b0c8264b-cce2-4379-b194-5f02d6b0f9f5\\"><Text testparty-id=\\"c2f33be7-f720-4939-b08c-bc35943f3322\\">Open up App.tsx to start working on your app!</Text><Image source=\\"{\\n  \\"uri\\": \\"https://reactjs.org/logo-og.png\\n\\"}\\" style=\\"{\\n  \\"width\\": 400,\\n  \\"height\\": 400\\n}\\" accessible=\\"true\\" testparty-id=\\"2b3fbd94-3072-47df-bf49-820adff38335\\"></Image><Image source=\\"{\\n  \\"uri\\": \\"https://reactjs.org/logo-og.png\\n\\"}\\" style=\\"{\\n  \\"width\\": 400,\\n  \\"height\\": 400\\n}\\" accessible=\\"true\\" testparty-id=\\"855bb15a-9b5f-4e2d-92d1-4fd286073c71\\"></Image><ExpoStatusBar style=\\"auto\\" testparty-id=\\"3f053115-ea55-450a-9d3b-2b2ccc3f8591\\"></ExpoStatusBar></View>"');
const input2 = JSON.parse('"<View><ExpoStatusBar style=\\"auto\\"></ExpoStatusBar></View>"');

const parsedStructure1 = parseJSX(input);
const parsedStructure2 = parseJSX(input2);

console.log("Parsed Structure 1:");
console.log(JSON.stringify(parsedStructure1, null, 2));
console.log("Parsed Structure 2:");
console.log(JSON.stringify(parsedStructure2, null, 2));