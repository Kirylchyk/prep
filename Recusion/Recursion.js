//Recursion is a programming technique where a function
// calls itself to solve a smaller part of the problem
// until it reaches a base condition, which stops further recursion

const directory = {
    name: "root",
    type: "directory",
    children: [
        {
            name: "dir1",
            type: "directory",
            children: [
                {
                    name: "file1.txt",
                    type: "file"
                },
                {
                    name: "file2.txt",
                    type: "file"
                }
            ]
        },
        {
            name: "file3.txt",
            type: "file"
        },
        {
            name: "dir2",
            type: "directory",
            children: [
                {
                    name: "file4.txt",
                    type: "file"
                }
            ]
        }
    ]
};

function listFiles(directory) {
    // Check if the current item is a file
    if (directory.type === "file") {
        console.log(directory.name);
    }
    // Otherwise, if it's a directory, recurse on each child
    else if (directory.type === "directory") {
        directory.children.forEach(child => {
            listFiles(child);
        });
    }
}

// Example usage
listFiles(directory);