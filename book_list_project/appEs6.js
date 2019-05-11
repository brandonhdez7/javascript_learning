class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn
    }

}


class UI {


    addBookToList(book){
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


    showAlert(message, className){
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


    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove()
        }
    }


    clearFields(){
        document.getElementById('title').value = "";
        document.getElementById('author').value = "";
        document.getElementById('isbn').value = "";
    }
}


//local Storage class
class Store {
    static getBooks(){
        let books;
        if (localStorage.getItem('books') === null){
            books = []
        }else{
            books = JSON.parse(localStorage.getItem('books'))
        }
        return books
    }


    static displayBooks(){
        const books = Store.getBooks();

        books.forEach(function(book){
            const ui = new UI

            //add book to ui
            ui.addBookToList(book)
        })
    }


    static addBook(book){
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books))
    }


    static removeBook(isbn){
        // console.log(isbn)
        const books = Store.getBooks();

        books.forEach(function(book,index){
            if(book.isbn === isbn){
                books.splice(index, 1)
            }
        })
        localStorage.setItem('books', JSON.stringify(books))
    }
}

//DOM load event
document.addEventListener('DOMContentLoaded', Store.displayBooks)

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

        //add to localstorage
        Store.addBook(book)
        
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

    //delete book
    ui.deleteBook(e.target);

    //remove from ls
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    //show alert
    ui.showAlert('Book Removed!', 'success')

    e.preventDefault()
})