const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');


//click
clearBtn.addEventListener('click', runEvent);

// //double click
clearBtn.addEventListener('dblclick', runEvent);

// //mousedown
clearBtn.addEventListener('mousedown', runEvent);

// //mouseup
clearBtn.addEventListener('mouseup', runEvent);

// //mouse enter
clearBtn.addEventListener('mouseenter', runEvent);

// //mouseleave
clearBtn.addEventListener('mouseleave', runEvent);

// //mouse over
clearBtn.addEventListener('mouseover', runEvent);

// //mouse out
clearBtn.addEventListener('mouseout', runEvent);

//movemouse
card.addEventListener('mousemove', runEvent);


//event handler
function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`)

    heading.innerHTML = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, 40 )`
}