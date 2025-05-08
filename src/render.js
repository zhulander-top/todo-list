export function renderTodos(project) {
    const listContainer = document.querySelector(".list");
    listContainer.innerHTML = "";
  
    project.getTodos().forEach((todo, index) => {
      const todoItem = document.createElement("div");
      todoItem.classList.add("todo-item");
  
      todoItem.innerHTML = `
        <h3>${todo.title}</h3>
        <p>${todo.description}</p>
        <p>Due: ${todo.dueDate}</p>
        <p>Priority: ${todo.priority}</p>
        <p>Status: <span class="emoji">${todo.completed ? "✅" : "❌"}</span> ${todo.completed ? "Completed" : "Not Completed"}</p>
        <button data-index="${index}" class="toggle-complete">Toggle Complete</button>
    `;

  
      listContainer.appendChild(todoItem);
    });
  
    document.querySelectorAll(".toggle-complete").forEach(button => {
      button.addEventListener("click", (e) => {
        const index = e.target.getAttribute("data-index");
        project.todos[index].toggleComplete();
        renderTodos(project);
      });
    });
  }