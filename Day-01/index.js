const fs = require("fs");

const path = require("path");

const filePath = path.join(__dirname,"example.txt");

const data = fs.readFileSync(filePath,"utf8");

console.log(data);