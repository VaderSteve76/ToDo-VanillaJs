// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// Functions
function addTodo(event) {
  todoInput.value.length !== 0 ? event.preventDefault() : todoInput.value;
  // create li
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  // complete
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);
  // trash
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);
  // append to list
  todoList.appendChild(todoDiv);
  // clear todoInput value
  todoInput.value = '';
}

function deleteCheck(event) {
  const item = event.target;
  // delete
  if(item.classList[0] === 'trash-btn') {
    item.parentElement.classList.add('fall');
    // item.parentElement.remove();
    item.parentElement.addEventListener('transitionend', function() {
      item.parentElement.remove();
    });
  }
  // completed
  if(item.classList[0] === 'complete-btn') {
    item.parentElement.classList.toggle('completed');
  }
}