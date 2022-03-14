const form = document.querySelector('form');
const input = document.querySelector('input');
const todoList = document.querySelector('ul');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTodo = document.createElement("li")
    newTodo.innerText = input.value;
    todoList.appendChild(newTodo);
    form.reset();
    newTodo.addEventListener('click', ()=>{
        newTodo.classList.toggle('completed')
    })
    newTodo.addEventListener('dblclick', ()=>{
        newTodo.remove()
    })
});




