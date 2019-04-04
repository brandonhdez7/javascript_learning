let val;

//number to string
val = String(55);
val = String(4+4)

// boolean to string
val = String(true)

// date to string
val = String(new Date())

// array to string
val = String([1,2,3,4])


// toString() method
val = (5).toString()
val = (true).toString();



// string to numbers
val = Number('5'); //5
val = Number(true); //1
val = Number(false); //0
val = Number('hello'); //naN

val = parseInt('100.00') //100
val = parseFloat('100.00') //100.00


// output
console.log(val)
console.log(typeof val)
// only for strings console.log(val.length) 
console.log(val.toFixed())




// string + number = string
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2; //56

console.log(sum)
console.log(typeof sum)
