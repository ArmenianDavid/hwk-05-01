const addTodoListButton = document.querySelector("#add-btn");
const todoOl = document.querySelectorAll(".todo-list")[0];
const todoLi = document.getElementsByClassName("todo-li");
const filterActiveTodoBtn = document.getElementById("filterActiveTodoBtn");
const filterComplitedTodoBtn = document.getElementById(
  "filterComplitedTodoBtn"
);
const filterAllTodosBtn = document.getElementById("allTodos");
const clearAll = document.getElementById("clearAll");
// it was imposible write const because of event clearAll
let arrayOfLiIngredients = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
// clears html before new render
const clearTodoHtml = () => {
  todoOl.innerHTML = "";
};
// is creating an object from input and class and pushes to array
const createTodoList = input => {
  arrayOfLiIngredients.push({
    input: input,
    class1: "todo-li",
    class2: "active"
  });
  renderLi(arrayOfLiIngredients);
};
// Event on add button it takes input and validates givs it to crate to do list
addTodoListButton.addEventListener("click", () => {
  const todoInput = document.querySelector("#input");
  if (todoInput.value == false) {
    return "";
  }
  createTodoList(todoInput.value);
  localStorage.setItem("items", JSON.stringify(arrayOfLiIngredients));
});
// event on Ordered list takes event target id and changes in my array item with that index
todoOl.addEventListener("click", event => {
  // if empty string dont do anything
  if (event.target.classList.contains("todo-list")) {
    return "";
  }
  if (arrayOfLiIngredients[event.target.id].class2 === "active") {
    arrayOfLiIngredients[event.target.id].class2 = "complited";
  } else {
    arrayOfLiIngredients[event.target.id].class2 = "active";
  }
  renderLi(arrayOfLiIngredients);
  localStorage.setItem("items", JSON.stringify(arrayOfLiIngredients));
});
// filters objects who has class active from array and calls render for them
filterActiveTodoBtn.addEventListener("click", () => {
  clearTodoHtml();
  const activeIngredients = arrayOfLiIngredients.filter(item => {
    return item.class2 === "active";
  });
  if (activeIngredients == false) {
    return (todoOl.textContent = "No active todos");
  }
  renderLi(activeIngredients);
});
// filters objects who has class Complited from array and calls render for them
filterComplitedTodoBtn.addEventListener("click", () => {
  clearTodoHtml();
  const complitedIngredients = arrayOfLiIngredients.filter(item => {
    return item.class2 === "complited";
  });
  if (complitedIngredients == false) {
    return (todoOl.textContent = "No complited todos");
  }
  renderLi(complitedIngredients);
});
// filters ALL objects  from array and calls render for them
filterAllTodosBtn.addEventListener("click", () => {
  clearTodoHtml();
  renderLi(arrayOfLiIngredients);
});
// renders given array of objects making them to <li>
renderLi = arrayOfLiIngredients => {
  todoOl.innerHTML = "";
  arrayOfLiIngredients.forEach((item, index) => {
    const li = document.createElement("li");
    li.classList.add(item.class1, item.class2);
    li.id = index;
    li.textContent = item.input;
    todoOl.appendChild(li);
  });
};
renderLi(arrayOfLiIngredients);
// Clear all todos and localStorage
clearAll.addEventListener("click", () => {
  localStorage.clear();
  clearTodoHtml();
  arrayOfLiIngredients = [];
});
