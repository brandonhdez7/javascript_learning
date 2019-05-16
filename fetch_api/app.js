document.getElementById('button').addEventListener('click',loadData)


function loadData(){
    //create an XHR object
    const xhr = new XMLHttpRequest();

    //open
    xhr.open('GET', 'data.txt', true);

    console.log('readystate', xhr.responseText)

    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText)
            document.getElementById('output').innerHTML = 
            `<h1>{this.responseText}</h1>`
        }
    }
    xhr.onreadystatechange = function(){
        console.log('readystate', xhr.responseText)
        if(this.status === 200 && this.readyState === 4){
            console.log(this.responseText)
        }
    }

    xhr.send()


    //ready state values
    //0: request not initialized
    //1: server connection established
    //2: request received
    //3: processing request
    //4:request finished and responce is ready


    // http statuses
    // 200: 'ok'
    // 403: 'forbidden'
    // 404: 'not found'
}