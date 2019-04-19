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

(function(){
    console.log('IIFE run ..');
})