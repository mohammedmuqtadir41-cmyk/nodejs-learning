import { program } from "commander";

import fs from "fs";

// const filePath = path.join(__dirname,"example.txt");

function letterCount(filePath) {
  const data = fs.readFileSync(filePath, "utf8");
  console.log(`The file contains ${data.length} letters`);
}

function wordCount(filePath) {
  const data = fs.readFileSync(filePath, "utf8");
  console.log(`The file contains ${data.split(" ").length} Words`);
}

function lineCount(filePath) {
  const data = fs.readFileSync(filePath, "utf8");
  console.log(`The file contains ${data.split("\n").length}`);
}

program
  .command("letter")
  .description("Command to count the numbers of letters in a file")
  .argument("<file_path>", "Argument to take file path as input")
  .action((file_path) => {
    letterCount(file_path);
  });

program
  .command("word")
  .description("Command to count the numbers of words in the file")
  .argument("<file_path>", "Argument to take the file path as an input")
  .action((file_path) => {
    wordCount(file_path);
  });

program
  .command("line")
  .description("Command to count the number of lines in a file")
  .argument("<file_path>", "Argument to take the file path as an input")
  .action((file_path) => {
    wordCount(file_path);
  });

program.parse();
