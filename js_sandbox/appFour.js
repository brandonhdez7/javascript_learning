const firstName = 'william';
const lastName = "johnson";
const age = 36;
const str = "hello there my name is brad"
const tags = "web development, web design, web programming"

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

// change case

val = firstName.toUpperCase(); //WILLIAM
console.log(val)

val = firstName.toLowerCase(); //william
console.log(val)


// indexof() //get the index of the value

val = firstName.indexOf('l') // l
val = firstName.lastIndexOf('l') //3
console.log(val)



//charAt() //get the value of the index
val = firstName.charAt('3') //l
console.log(val) 

// get the last charachter with with charAt
val = firstName.charAt(firstName.length - 1)
console.log(val)


//substring()
val  = firstName.substring(0, 4) //will
console.log(val)



// slice()
val = firstName.slice(0,4) //will
console.log(val)
// or
val = firstName.slice(-3) //iam //it will start from the back
console.log(val)


// slit()
val = str.split(" ");
console.log(val)

val = tags.split(',')
console.log(val)



// replace
val = str.replace('brad', 'jack') //hello there my name is jack
console.log(val)


// includes()
val = str.includes('hello'); //true
console.log(val)

