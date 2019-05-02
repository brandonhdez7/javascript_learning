const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5')

//clear input
taskInput.value = '';

form.addEventListener('submit', runEvent);

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`)

    //get input value
    console.log(taskInput.value)

    e.preventDefault();
}

// keydown
taskInput.addEventListener('keydown', runEvent)

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`) 

    console.log(e.target.value)

    heading.innerText = e.target.value;

}

//focus
taskInput.addEventListener('focus', runEvent)

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`) 

}

//blur
taskInput.addEventListener('blur', runEvent)

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`) 

}


