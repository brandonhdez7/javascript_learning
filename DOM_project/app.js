//define ui variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task')

// load event listeners
loadEventListeners();

//load all event listeners
function loadEventListeners(){
    //add task event
    form.addEventListener('submit', addTask);
}

//dd task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task')
    }

    //create li element
    const li = document.createElement('li')
    //add class
    li.className = 'collection-item'
    //create textnode and append to the li
    li.appendChild(document.createTextNode(taskInput.value))
    //create delete link element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content'
    //add icon html
    link.innerHTML = '<i class="fas fa-trash"></i>'
    //append link to li
    li.appendChild(link)
    //append the li to the ul
    taskList.appendChild(li)
    //clear input
    taskInput.value = '';


    // console.log(li)


    e.preventDefault();
}