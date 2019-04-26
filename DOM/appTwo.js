//selectors

// document.getElementById
console.log(document.getElementById('task-title'))


//get things from the element
console.log(document.getElementById('task-title').id)


//change styling
document.getElementById('task-title').style.background = '#3333'
document.getElementById('task-title').style.color = '#fff'
document.getElementById('task-title').style.padding = '5px';

//change the content
document.getElementById('task-title').textContent = 'Task List'
document.getElementById('task-title').innerText = 'My Tasks'
document.getElementById('task-title').innerHTML = '<span style="color:red"> Task List</span>'


const taskTitle = document.getElementById('task-title');
taskTitle.innerText = 'My Tasks'




//document.querySelector

console.log(document.querySelector('#task-title'))
console.log(document.querySelector('.card-title'))
console.log(document.querySelector('h5'))

//if theres more than one class it will target the first one only
document.querySelector('li').style.color = 'red'
document.querySelector('ul li').style.color = 'blue'

//select a especific class

document.querySelector('li:last-child').style.color = 'red'
document.querySelector('li:nth-child(3)').style.color = 'yellow'
document.querySelector('li:nth-child(even)').style.background = '#ccc'