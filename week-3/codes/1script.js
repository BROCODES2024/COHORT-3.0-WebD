const title = document.querySelector("h1");
console.log("Title:", title.innerHTML);

const firstTodo = document.querySelector("h4");
console.log("First TODO:", firstTodo.innerHTML);

const secondTodo = document.querySelectorAll("h4")[1];
console.log("Second TODO:", secondTodo.innerHTML);

firstTodo.innerHTML = "Don't take class";

function deleteTodo(index) {
  const element = document.getElementById("todo-" + index);
  if (element) element.parentNode.removeChild(element);
}

function deleteRandomTodo() {
  const element = document.querySelector("h2");
  if (element) element.parentNode.removeChild(element);
}

let todoCount = 1;

function addTodo() {
  const inputEl = document.getElementById("inp");
  const todosContainer = document.getElementById("todos");

  if (inputEl.value.trim() === "") return;

  todoCount++;

  const newDiv = document.createElement("div");
  newDiv.id = "todo-" + todoCount;

  const h4 = document.createElement("h4");
  h4.innerHTML = `${todoCount}. ${inputEl.value}`;

  const btn = document.createElement("button");
  btn.innerText = "delete";
  btn.onclick = () => deleteTodo(todoCount);

  newDiv.appendChild(h4);
  newDiv.appendChild(btn);
  todosContainer.appendChild(newDiv);

  inputEl.value = "";
}
