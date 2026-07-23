const fs = require("fs");

const path = require("path");

const filePath = path.join(__dirname, "example.txt");

// console.log(fs.readFileSync(filePath,"utf8"));

const data = fs.readFileSync(filePath, "utf8");

function letterCount() {
  console.log("The number of letters are :", data.length);
}

function wordCount() {
  console.log("The number of words in the file are:", data.split(" ").length);
}

function lineCount() {
  console.log("The number of lines in the file are:", data.split("\n").length);
}

// lineCount();
// wordCount();
// letterCount();

if(process.argv[2] === "letter"){
    letterCount();
}
if(process.argv[2] === "word"){
    wordCount();
}
if(process.argv[2] === "line"){
    lineCount   ();
}
