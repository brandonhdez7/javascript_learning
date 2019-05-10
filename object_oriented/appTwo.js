//string

    //type of string
const name1 = 'Jeff';

    //type of - object
const name2 = new String('Jeff')

console.log(name1)
console.log(name2)


console.log(typeof name1);


if(name1 === 'Jeff'){
    console.log('YES')
}else{
    console.log('NO')
}

//number
const num1 = 5;
const num2 = new Number(5);

console.log(typeof num2)


//function 
const getSum1 = function(x, y){
    return x+y
} 
console.log(getSum1(1,1))

const getSum2 = new Function('x', 'y', 'return 1 + 1')
console.log(getSum2(1,1))

//objects
const john1 = {name: 'john'}
console.log(john1)

const john2 = new Object ({name: 'john'})
console.log(john2)


//arrays
const arr1 = [1,2,4,5,3]
console.log(arr1)

const arr2 = new Array(1,2,4,3,4)
console.log(arr2)

//regular expressions
const reg1 = /\w+/;
console.log(reg1)

const reg2 = new RegExp('\\w+');
console.log(reg2)


