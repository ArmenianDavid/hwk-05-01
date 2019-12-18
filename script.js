const addTodoListButton = document.querySelector("#add-btn");
const todoOl = document.querySelectorAll(".todo-list")[0];
const todoLi = document.getElementsByClassName("todo-li");
const filterActiveTodoBtn = document.getElementById("filterActiveTodoBtn");
const filterComplitedTodoBtn = document.getElementById("filterComplitedTodoBtn");
const filterAllTodosBtn = document.getElementById("allTodos");
const liColection = [];
let array = [];
localStorage.setItem('liColection', JSON.stringify(liColection))
// clears html before new render
const clearTodoHtml = () => {
  todoOl.innerHTML = "";
};
// is creating li for each todo element
const createTodoList = input => {
  const li = document.createElement("li");
  li.innerText = input;
  li.classList.add("todo-li", "active");
  liColection.push(li);
  todoOl.appendChild(li);
  array.push(`${input}`);
  localStorage.setItem('liColection', JSON.stringify([array]))
  console.log(JSON.parse(localStorage.getItem('liColection')))
};
// renders Html
const renderList = input => {
  // clearTodoHtml()
  createTodoList(input);
};
// Event on add button it takes input and gives to list
// then clears html and renders new array items
addTodoListButton.addEventListener("click", () => {
  const todoInput = document.querySelector("#input");
  if (todoInput.value == false) {
    return "";
  }
  renderList(todoInput.value);
});

todoOl.addEventListener("click", event => {
  // if empty string dont do anything
  if (event.target.classList.contains("todo-list")) {
    return "";
  }

  if (event.target.classList.contains("complited")) {
    event.target.classList.remove("complited");
    event.target.classList.add("active");
  } else {
    event.target.classList.remove("active");
    event.target.classList.add("complited");
  }
});

filterActiveTodoBtn.addEventListener("click", () => {
  clearTodoHtml();
  const activeTodos = liColection.filter(item => {
    return item.classList[1] === "active";
  });
  console.log(activeTodos);
  activeTodos.forEach(todo => {
    todoOl.appendChild(todo);
  });
});

filterComplitedTodoBtn.addEventListener("click", () => {
  clearTodoHtml();
  const complitedTodos = liColection.filter(item => {
    return item.classList[1] === "complited";
  });
  complitedTodos.forEach(todo => {
    todoOl.appendChild(todo);
  });
});

filterAllTodosBtn.addEventListener("click", () => {
  clearTodoHtml();
  liColection.forEach(item => {
    todoOl.appendChild(item);
    console.log(localStorage)
  });
});
