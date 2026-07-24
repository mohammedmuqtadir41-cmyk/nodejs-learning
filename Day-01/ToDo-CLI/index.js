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

const updateTodo = (existing_todo, new_todo) => {
  // const data = fs.readFileSync(filePath, "utf8");
  // const todoArr = JSON.parse(data);

  // const todoArr = JSON.parse(data);
  let deletedElementIndex = 0;

  const filterTodo = todoArr.filter((todo, index) => {
    if (todo.toLowerCase() == existing_todo.toLowerCase()) {
      deletedElementIndex = index;
      return false;
    } else {
      return true;
    }
  });

  filterTodo.splice(deletedElementIndex, 0, new_todo);
  fs.writeFileSync(filePath, JSON.stringify(filterTodo), "utf8");
  console.log(`Todo Successfully updated from ${existing_todo} to ${new_todo}`);
};

const deleteTodo = (todo_val) => {
  const filtertodo = todoArr.filter((todo) => {
    if (todo.toLowerCase() == todo_val.toLowerCase()) {
      return false;
    } else {
      return true;
    }
  });

  fs.writeFileSync(filePath, JSON.stringify(filtertodo), "utf8");
  console.log("The todo has been successfully deleted", todo_val);
};

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

program
  .command("update")
  .description("To update an existing todo")
  .argument("<existing_todo>", "Argument for existing todo")
  .argument("<new_todo>", "To add a new todo")
  .action((existing_todo, new_todo) => {
    updateTodo(existing_todo, new_todo);
  });

program
  .command("delete")
  .description("To delete a todo")
  .argument("<todo_val>", "Argument to delete a todo")
  .action((todo_val) => {
    deleteTodo(todo_val);
  });

program.parse();
