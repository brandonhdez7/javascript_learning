// if else statements

// if(something){
//     do something
// } else{
//     do something else
// }

//= //means assinging to it

//== //means comparing to it

//!= //means doesnt not equal to

const id = 100;

// equal to
if(id == 101){
    console.log('Correct') //incorrect, it doesnt not equal to id
}else{
    console.log('incorrect')
}

//not equal to
if(id != 101){
    console.log('Correct') 
}else{
    console.log('incorrect')  //correct, it doesnt not equal to id
}

// equal to value and type
if(id === '100'){ 
    console.log('Correct') //incorrect, it doesnt not equal to  the id type
}else{
    console.log('incorrect')
}


// defiend a value
if(id){
    console.log(`the id is ${id}`)
}else{
    console.log('no id found')
}


// greater than or less than
if(id < 200){
    console.log('Correct') //correct
}else{
    console.log('incorrect')
}

if(id > 200){
    console.log('Correct') //incorrect
}else{
    console.log('incorrect')
}

if(id >= 100){
    console.log('Correct') //correct
}else{
    console.log('incorrect')
}


//if else

const color = 'blue';

if(color === 'red'){
    console.log('color is red')
}else if(color === 'blue'){
    console.log('color is blue')
}else{
    console.log('color is undefined')
}

// logical operators 
const name = 'steve';
const age = 30

// and && //true
if (age > 0 && age < 12){
    console.log(`${name} is a child`);
}else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager`);
}else{
    console.log(`${name} is an adult`)
}

//or || //false
if(age < 16 || age > 65){
    console.log(`${name} can not run in race`);
}else{
    console.log(`${name} is able to run in race`)
}



//ternary operators  //shorter way of writting if else statements
console.log(id === 100 ? 'correct' : 'incorrect')


