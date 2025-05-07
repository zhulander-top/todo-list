import { createTodo } from './todo.js';
import { createProject } from './project.js';
import "./styles.css";
const defaultProject = createProject();

const todo1 = createTodo({
  title: "Buy groceries",
  description: "Milk, eggs, bread",
  dueDate: "2025-05-08",
  priority: "Medium"
});

defaultProject.addTodo(todo1);

console.log(defaultProject.getTodos());