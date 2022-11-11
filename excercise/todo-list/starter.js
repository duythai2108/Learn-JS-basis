window.addEventListener("load", function () {
  // var declare
  const form = document.querySelector(".todo-form");
  const todoList = document.querySelector(".todo-list");
  let todos =
    localStorage.length > 0 ? JSON.parse(localStorage.getItem("todoList")) : [];
  if (Array.isArray(todos) && todos.length > 0) {
    [...todos].forEach((item) => createTodoItem(item));
  }
  //   console.log(todos);
  function createTodoItem(title) {
    const template = `<div class="todo-item">
          <span class="todo-text">${title}</span>
          <i class="fa fa-trash todo-remove" data-value="Learning english"></i>
        </div>`;
    todoList.insertAdjacentHTML("beforeend", template);
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const todoVal = this.elements["todo"].value;
    // Main code
    createTodoItem(todoVal);
    todos.push(todoVal);
    localStorage.length > 0 &&
      localStorage.setItem("todoList", JSON.stringify(todos));
    // save to localStorage
    this.elements["todo"].value = "";
  });

  //   Handle remove todo
  todoList.addEventListener("click", function (e) {
    if (e.target.matches(".todo-remove")) {
      // Remove todo in DOM
      const todo = e.target.parentNode;
      todo.parentNode.removeChild(todo);
      // Remove todo in localStorage
      const todoText = e.target.previousElementSibling.textContent;
      //   console.log(todoText);
      const newTodo = todos.filter((item) => item !== todoText);
      localStorage.setItem("todoList", JSON.stringify(newTodo));
    }
  });
});
