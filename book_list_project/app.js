///book constructor
function Book(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn
}


//ui construc{tor
function UI(){}

//add to book list
UI.prototype.addBookToList = function(book){
    // console.log(book)

    const list = document.getElementById('book-list');

    //create tr Element
    const row = document.createElement('tr')
    //isntert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</td>
    `;

    list.appendChild(row)
}

//show alert
UI.prototype.showAlert = function(message, className){
    //create div
    const div = document.createElement('div');
    //add classes
    div.className = `alert ${className}`;
    //add text
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.querySelector('.container');
    //get form
    const form = document.querySelector('#book-form');
    //instert alert
    container.insertBefore(div,form)

    // time out after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').remove()
    },3000)
}

//delete book
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove()
    }
}


//clear fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('isbn').value = "";
}




//event listeners
document.getElementById('book-form').addEventListener('submit',
function(e){

    //get form values
    const title = document.getElementById('title').value,
     author = document.getElementById('author').value,
     isbn = document.getElementById('isbn').value 
    // console.log(title,author,isbn)


    //instantiate book
    const book = new Book(title, author, isbn);

    //instantiate ui
    const ui = new UI();

    //validate
    if(title === '' || author === '' || isbn === ''){
        // alert('Failed')
        ui.showAlert('Please fill in all fields' , 'error')
    } else{
        //add book to list
        ui.addBookToList(book)
        
        //show sucess
        ui.showAlert('Book Added!', 'success')

        //clear fields
        ui.clearFields()
    }


    // console.log(book)

    // console.log('test')
    e.preventDefault();
})

//event listerner for delete
document.getElementById('book-list').addEventListener('click',
 function(e){

    //instantiate UI
    const ui = new UI()

    ui.deleteBook(e.target);

    //show alert
    ui.showAlert('Book Removed!', 'success')

    e.preventDefault()
})