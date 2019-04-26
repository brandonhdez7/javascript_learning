// document.querySelector('.clear-tasks').addEventListener('click',
// function(e){
//     console.log('hello world')
//     e.preventDefault();
// })

document.querySelector('.clear-tasks').addEventListener('click', onclick);

function onclick(e){
    // console.log('clicked')
    
    let val;

    val = e;

    //event target element
    val = e.target;
    val = e.target.className;
    val = e.target.innerText = 'hello'

    //event type
    val = e.type; 
    console.log(val)
    
    //timestamp
    val = e.timeStamp
    console.log(val)

    //cordinates
    val = e.clientY
    console.log(val)

    //cordinates event relative to the element
    val = e.offsetY
    console.log(val)
}