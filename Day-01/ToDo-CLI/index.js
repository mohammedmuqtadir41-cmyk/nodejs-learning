const fs = require("fs");
const path = require("path");
const { program } = require("commander");

const filePath = path.join(__dirname, "example.json");

const data = fs.readFileSync(filePath, "utf8");

const todoArr = JSON.parse(data);
// console.log(todoArr);

const printTodo = () => {
  console.log(todoArr);
};

const addTodo = (new_todo) => {
  todoArr.push(new_todo);

  fs.writeFileSync(filePath, JSON.stringify(todoArr), "utf8");
  console.log("Todo Added Succesfully", new_todo);
};

// const updateTodo = (update_todo){
    
// }

program
  .command("add")
  .description("Add a new todo to the todo List")
  .argument("<file_path>", "Argument to receive a new todo from the user")
  .action((file_path) => {
    addTodo(file_path);
  });

program
  .command("print")
  .description("To print the todo list")
  .argument("<file_path>", "Argument to print the todo list")
  .action((file_path) => {
    printTodo(file_path);
  });

program.parse();
