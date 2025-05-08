import { createTodo } from './todo.js';
import { createProject } from './project.js';
import { renderTodos } from './render.js';
import "./styles.css";
const defaultProject = createProject();

const todo1 = createTodo({
  title: "Buy groceries",
  description: "Milk, eggs, bread",
  dueDate: "2025-05-08",
  priority: "Medium"
});

defaultProject.addTodo(todo1);
renderTodos(defaultProject);
console.log(defaultProject.getTodos());