// alert("Linked");
const addBtn = document.getElementById('add-button');
const todoInput=document.getElementById('todo-input');
const todoList= document.getElementById('todo-list');

addBtn.addEventListener('click',()=>{
    const value = todoInput.value;
    // console.log("user entered",value);

    const li = document.createElement('li');
    li.innerText = value;
    const delbutton = document.createElement('button');
    delbutton.innerText = "X";
    delbutton.addEventListener('click', function(){
        li.remove();
    })
    li.appendChild(delbutton);
    todoList.appendChild(li);
    todoInput.value= "";
})