const form = document.getElementById("create-task-form");
const taskList = document.getElementById("tasks");
const formInput = document.getElementById("new-task-description");

function buildToDo(task) {
  const li = document.createElement("li");
  li.textContent = task;
  taskList.appendChild(li);
}

form.addEventListener("submit", (event) => {    
  event.preventDefault();

  const task = formInput.value;
  buildToDo(task);
     
}); 
