const addToListButton = document.querySelector('#add-btn');
const todoOl = document.querySelectorAll('.todo-list')[0];
let todoList = [];
const clearTodoHtml = () =>{
    todoOl.innerHTML = '';
}
const renderList = () =>{
   todoList.forEach( todo => {
      const li = document.createElement('li');
      li.innerText = todo;
      li.id = todoList.indexOf(todo);
      todoOl.appendChild(li);
   })
}
addToListButton.addEventListener( 'click' , () =>{
   const todoInput = document.querySelector('#input');
   console.log(todoInput.value)
   todoList.push(todoInput.value)
   clearTodoHtml()
   renderList()
})
