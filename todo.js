// Declare variables
const taskForm = document.querySelector('#task-form');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('#clear-task');
const taskInput = document.querySelector('#task')
const item = document.getElementsByTagName('li');

// Load all event listners
loadEventListeners();

function loadEventListeners() {
  // Add Task Event
  taskForm.addEventListener('submit', addTask);

  // DOM load Event
  document.addEventListener('DOMContentLoaded', getTasks)

  // Remove Tasks
  taskList.addEventListener('click', removeTask);

  // Clear Tasks
  clearBtn.addEventListener('click', clearTask);

  // Filter Task
  filter.addEventListener('keyup', filterTask)

  // Crossout Task
// item.addEventListener('click', crossoutTask)
}

// Get tasks from LS
function getTasks(){
  let tasks;
  if (localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    // Create li element
const li = document.createElement('li');
// Add class
li.className = 'collection-item';
// Add classliist
// li.classList.toggle('done')
// Create text node and append to li
li.appendChild(document.createTextNode(task));
// Create new link element
const dBtn = document.createElement('button')
// Add class
dBtn.className = 'delete-item'
// Add icon html
dBtn.appendChild(document.createTextNode('X'))
// Append the link to li
li.appendChild(dBtn)

// Append li to ul
taskList.appendChild(li);
  })
}

// Add Task Function
function addTask(e){

if(taskInput.value === ''){
  alert('Enter a task')
}

// Create li element
const li = document.createElement('li');
// Add class
li.className = 'collection-item';
// Add classliist
// li.classList.toggle('done')
// Create text node and append to li
li.appendChild(document.createTextNode(taskInput.value));
// Create new link element
const dBtn = document.createElement('button')
// Add class
dBtn.className = 'delete-item'
// Add icon html
dBtn.appendChild(document.createTextNode('X'))
// Append the link to li
li.appendChild(dBtn)

// Append li to ul
taskList.appendChild(li);

//  Store in Local storage
storeTaskInLocalStorage(taskInput.value);

// Clear task input field
taskInput.value = ''

e.preventDefault();
}

// Store Task
function storeTaskInLocalStorage(task){
  let tasks;
  if (localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

 tasks.push(task);

 localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task Function
function removeTask(e){
  if(e.target.parentElement.classList.contains('collection-item')){
    if(confirm('Are you sure?')){
    e.target.parentElement.remove();

    // Remove from LS
    removeTaskFromLocalStorage(e.target.parentElement)
    }
  }
  // console.log(e.target);
}

// Remove from LS
function removeTaskFromLocalStorage(taskItem){
  let tasks;
  if (localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));

  // console.log(taskItem)
}

// Clear Task Function
function clearTask(){
  while (taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }

  // Clear Task from LS
  clearTaskFromLocalStorage();
}

function clearTaskFromLocalStorage(){
  localStorage.clear();
}

function filterTask(e){
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;

    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else{
      task.style.display = 'none'
    }

  })

}




// Cross out Task Function
function crossoutTask(){
  li.classList.toggle('one');
}