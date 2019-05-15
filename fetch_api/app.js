document.getElementById('button').addEventListener('click',loadData)


function loadData(){
    //create an XHR object
    const xhr = new XMLHttpRequest();

    //open
    xhr.open('GET', 'data.txt', true);

    xhr.onload = function(){

    }


    // http statuses
    // 200: 'ok'
    // 403: 'forbidden'
    // 404: 'not found'
}