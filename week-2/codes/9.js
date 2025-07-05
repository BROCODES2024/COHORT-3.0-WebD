const fs = require("fs");

function cleanFile(filePath) {
    return new Promise((resolve) => {
        fs.readFile(filePath, "utf-8", (err, data) => {
            data = data.trim();
            fs.writeFile(filePath, data, () => {
                resolve(data); // return the cleaned data
            });
        });
    });
}

async function main() {
    const data = await cleanFile("a.txt");
    console.log("Done cleaning file");
    console.log(data);
}

main();
