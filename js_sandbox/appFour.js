const firstName = 'william';
const lastName = "johnson";
const age = 36;

let val;

val = firstName + lastName;
console.log(val)

// concat
val = firstName + ' ' + lastName
console.log(val)

//append

val = "brad "
val += "travesery"
console.log(val)

val = "hello my name is " + firstName + " " + lastName + ' and i am ' + age
console.log(val)

// escaping

val = 'that\'s awesome, I can\'t wait'
console.log(val)

//length
val = firstName.length
console.log(val)
//counts the number of chracters in the string

//concat
val = firstName.concat(' ', lastName)
console.log(val) //same as val = firstName + ' ' + lastName