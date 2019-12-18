const addTodoListButton = document.querySelector("#add-btn");
const todoOl = document.querySelectorAll(".todo-list")[0];
const todoLi = document.getElementsByClassName("todo-li");
const filterActiveTodoBtn = document.getElementById("filterActiveTodoBtn");
const filterComplitedTodoBtn = document.getElementById("filterComplitedTodoBtn");
const filterAllTodosBtn = document.getElementById("allTodos");
const clearAll = document.getElementById('clearAll');

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray))
let data = JSON.parse(localStorage.getItem('items'));
let liColection = [];
// clears html before new render
const clearTodoHtml = () => {
  todoOl.innerHTML = "";
};


// is creating li for each todo element
const createTodoList = input => {
  itemsArray.push(input)
  console.log(itemsArray)
  localStorage.setItem('items', JSON.stringify(itemsArray));
  console.log(localStorage.items) 
  data = JSON.parse(localStorage.getItem('items'))
  console.log(data)
  todoOl.innerHTML = "";
  liColection = [];
  data.forEach( dataInputed =>{
     const li = document.createElement("li");
     li.innerText = dataInputed;
     li.classList.add("todo-li", "active");
     liColection.push(li);
     todoOl.appendChild(li);
     console.log(liColection)
  })
};



// renders Html
const renderList = input => {
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

const render = (data) => {
  data.forEach( dataInputed =>{
   const li = document.createElement("li");
   li.innerText = dataInputed;
   li.classList.add("todo-li", "active");
   liColection.push(li);
   todoOl.appendChild(li);
   console.log(liColection)
} )
}
render(data);

// Clear all todos and localStorage

clearAll.addEventListener('click' , () =>{
   localStorage.clear();
   clearTodoHtml();
   liColection = []
   itemsArray = [];
})