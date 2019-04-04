const num1 = 100;
const num2 = 50;
let val;

// simple math with numbers
val = num1 + num2; //150
val = num1 * num2; //50000
val = num1 / num2; //2
val = num1 - num2; //50

console.log(val)



// Math object
val = Math.PI;
val = Math.round(2.8) //3
val = Math.ceil(2.4) //3 //ceil is to round up
val = Math.floor(2.6) //2 //floor is to round down
val = Math.sqrt(64) //8 //get the square root
val = Math.abs(-3) //3 get the absolute number
val = Math.pow(8, 2) //64 //8 to the 2nd power
val = Math.min(22, 33, 44 ,55 ,66) //22 //get the min number
val = Math.max(33,44, 55,56, 66) //66 //get the max number
val = Math.random() //give us a random decimal

val = Math.random() * 20 + 1 //random decimal number 1 - 20
val = Math.floor(Math.random() * 20 + 1) //round a number to a whole from 1 - 20


console.log(val)

