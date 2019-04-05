// array and array methods

// creating an array
const numbers = [22,33,44,36,23,54];
const numbers2 = new Array(35,64,26,65,76);
const fruits = ['apple', 'banana', 'pear', 'orange'];
const mixed = [22, 'hello', true, undefined, null, {a: 1, b: 2}, new Date()];
console.log(mixed)

let val;

console.log(numbers)

// check the length of an array
val = numbers.length //6
console.log(val)

// check if is an array
val = Array.isArray(numbers) //true
console.log(val)

// get single value
val = numbers[3] //36
console.log(val)

// insert into array 
numbers[2] = 100;
console.log(numbers)

// find the index of a value
val = numbers.indexOf(100) //2
console.log(val)

// muttating arrays

// add on to end of array
numbers.push(250);
console.log(numbers)

// add on to the front of array
numbers.unshift(120);
console.log(numbers)

// take off from end
numbers.pop();
console.log(numbers)

// take off from the front
numbers.shift();
console.log(numbers)

// splice values
numbers.splice(1,1);
console.log(numbers)

// reverse the array
numbers.reverse();
console.log(numbers)

// concat
val = numbers.concat(numbers2);
console.log(val)


// sorting

// sorting in alphabetical order
val = fruits.sort();
console.log(val) 

// sorting numbers
val = numbers.sort(); //this will only the first index of a number
console.log(val)

// sort from lowest to highest
val = numbers.sort(function(x, y){
    return x -y;
})
console.log(val)

// sort from highest to lowest
val = numbers.sort(function(x, y){
    return y - x;
})
console.log(val)

// find a number
function under40(num){
    return num < 40;
}

val = numbers.find(under40); //finds the first numbers thats under 40 in the array
console.log(val)