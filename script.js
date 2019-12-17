const addTodoListButton = document.querySelector("#add-btn");
const todoOl = document.querySelectorAll(".todo-list")[0];
const todoLi = document.getElementsByClassName("todo-li");
const filterActiveTodoBtn = document.getElementById('filterActiveTodoBtn');
const filterComplitedTodoBtn = document.getElementById('filterComplitedTodoBtn');
const filterAllTodosBtn = document.getElementById('allTodos');
const liColection = [];
// clears html before new render
const clearTodoHtml = () => {
  todoOl.innerHTML = "";
};
// is creating li for each todo element
const createTodoList = todoList => {
  todoList.forEach(todo => {
    const li = document.createElement("li");
    li.innerText = todo;
    li.classList.add("todo-li",'active');
    liColection.push(li)
    todoOl.appendChild(li);
  });
};
// renders Html
const renderList = todoList => {
  // clearTodoHtml()
  createTodoList(todoList);
};
// Event on add button it takes input and gives to list
// then clears html and renders new array items
addTodoListButton.addEventListener("click", () => {
  const todoList = [];
  const todoInput = document.querySelector("#input");
  if (todoInput.value == false) {
    return "";
  }
  todoList.push(todoInput.value);
  renderList(todoList);
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

filterActiveTodoBtn.addEventListener( 'click' , ()=>{
  clearTodoHtml();
   const complitedTodos = liColection.filter( item =>{
     return item.classList[1] === 'active'
   })
   console.log(complitedTodos)
   const complited = complitedTodos.map( item => item.innerText)
   complited.forEach(todo => {
    const li = document.createElement("li");
    li.innerText = todo;
    li.classList.add("todo-li",'active');
    todoOl.appendChild(li);
  })
})

filterComplitedTodoBtn.addEventListener( 'click' , ()=>{
  clearTodoHtml();
   const complitedTodos = liColection.filter( item =>{
     return item.classList[1] === 'complited'
   })
   console.log(complitedTodos)
   const complited = complitedTodos.map( item => item.innerText)
   complited.forEach(todo => {
    const li = document.createElement("li");
    li.innerText = todo;
    li.classList.add("todo-li",'complited');
    console.log(liColection)
    todoOl.appendChild(li);
  })
})

filterAllTodosBtn.addEventListener('click' , () =>{
  clearTodoHtml()
  console.log(liColection)
  liColection.forEach( item => {
    const li = document.createElement("li");
    li.innerText = item.innerText;
    li.classList.add(item.classList[0]);
    li.classList.add(item.classList[1]);
    todoOl.appendChild(li);
    console.log(liColection)
  })
})
