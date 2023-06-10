// Store tasks in an array
let tasks = [];

// Function to add a task
function addTask() {
  const taskInput = document.getElementById('task-input');
  const task = taskInput.value;

  if (task.trim() !== '') {
    tasks.push(task);
    displayTasks();
    taskInput.value = '';
  }
}

// Function to display tasks
function displayTasks() {
  const taskList = document.getElementById('task-ul');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    li.innerHTML += `<button class="delete-btn" onclick="deleteTask(${index})">Delete</button>`;
    taskList.appendChild(li);
  });
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

// Function to filter tasks
function filterTasks() {
  const taskList = document.getElementById('task-ul');
  const filterInput = document.getElementById('filter-input');
  const filter = filterInput.value.toLowerCase();

  const filteredTasks = tasks
