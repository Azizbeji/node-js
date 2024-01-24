const fs = require("fs");

const fileContent = fs.readFileSync("welcome.txt", "utf8");
console.log(fileContent);
