// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-submit");
const todoList = document.querySelector(".todo-list");


// event listeners
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);


//functions
function addTodo(event){
    // preventing the refresh after we press submit button
    event.preventDefault();
    // new div tag with class todo 
    const newDiv = document.createElement("DIV");
    newDiv.classList.add("todo");
    // creating a list and appending to the new div we created
    const newLi = document.createElement("LI");
    newLi.classList.add("todo-item");
    // ading the text we entered in input feild to list
    newLi.innerText = todoInput.value;
    newDiv.appendChild(newLi);
    // creating 2 buttons and appending it to the div we created
    // complete button
    const completeButton = document.createElement("BUTTON");
    completeButton.classList.add("complete-button");
    completeButton.innerHTML='<i class="fas fa-clipboard-check"></i>'; // instead of text we apply this image available in font awesome  
    newDiv.appendChild(completeButton);
    // delete button
    const deleteButton = document.createElement("BUTTON");
    deleteButton.classList.add("delete-button");
    deleteButton.innerHTML='<i class="fas fa-trash-alt"></i>';
    newDiv.appendChild(deleteButton);
    // appending the div the ul list
    todoList.appendChild(newDiv);
    // to clear the input field after append
    todoInput.value ="";
    
}

function deleteCheck(e){
    // reading the event and stroing it
    const event = e.target;
    // if the stored event's class matches the class of deletebutton
    if(event.classList[0] === "delete-button"){
        const todo = event.parentElement;
        todo.remove();
        // console.log.apply(todo);
    }
    // if the stored event's class matches the class of completebutton
    if(event.classList[0] === "complete-button"){
        const todo = event.parentElement;
        todo.classList.toggle("completed");
        // add - permently add the class to the element
        // remove - delete the class from the element permenently
        // toggle - once we click it add if we click again it remove and it continues

    }

}
