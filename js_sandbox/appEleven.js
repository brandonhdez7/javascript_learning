// functions decalrations

function greet(firstName, lastName){
    // console.log('hello')
    return "Hello " + firstName + " " + lastName;
}
console.log(greet('John', 'Smith'));

// OR

function greet(firstName = "john", lastName="Smith"){
    // console.log('hello')
    return "Hello " + firstName + " " + lastName;
}
console.log(greet());



//function expressions

const square = function(x){
    return x*x;
};
console.log(square(8))


// immidiatley inokable fucntion expressions - ifies

// (function(name){
//     console.log('Hello ' + name);
// })('Brad);




// property methods

const todo = {
    add: function(){
        console.log("Add Todo ..")
    },
    edit: function(id){
        console.log(`Edit Todo ${id}`)
    }
}

todo.delete = function(){
    console.log('Delete Todo ..')
}

todo.add();
todo.edit(22)
todo.delete()