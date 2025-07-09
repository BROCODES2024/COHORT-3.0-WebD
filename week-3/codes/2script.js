let todoId = 1;

function addTodo() {
  const inputEl = document.getElementById("todo-input");
  const value = inputEl.value.trim();

  if (value === "") {
    alert("Please enter a todo!");
    return;
  }

  const newTodo = document.createElement("div");
  const currentId = todoId;
  newTodo.setAttribute("id", currentId);

  newTodo.innerHTML =
    "<div>" +
    value +
    '</div><button onclick="deleteTodo(' +
    currentId +
    ')">Delete</button>';

  document.getElementById("todo-list").appendChild(newTodo);

  inputEl.value = "";
  todoId++;
}

function deleteTodo(id) {
  const el = document.getElementById(id);
  if (el) {
    el.parentNode.removeChild(el);
  }
}
