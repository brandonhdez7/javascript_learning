//loops

// for loops takes 3 params
//i++ equals i = i + 1 means add 1 everytime

for(let i = 0; i < 10; i++){
    console.log(i)
}



// skip an irriration
for(let i = 0; i < 10; i++){
    if(i === 2){
        console.log('2 is my favorite number');
        continue;
    }
    console.log(i)
}


// break the loop
for(let i = 0; i < 10; i++){
    if(i === 2){
        console.log('2 is my favorite number');
        continue;
    }

    if(i === 5){
        console.log('stop the loop')
        break;
    }
    console.log(i)
}




// while loop
let i = 0;

while(i < 10){
    console.log(+ i)
    i ++;
}


//do while loop
let x = 0;
do {
    console.log(x)
    x++;
}
while(i < 10);



//loop through array
const cars = ['ford', 'chevy', 'honda', 'toyota'];

for(let i = 0; i < cars.length; i ++){
    console.log(cars[i])
}


//forEach
cars.forEach(function(car){
    console.log(car)
})


//Map
const users = [
    {id: 1, name: 'john'},
    {id: 2, name: 'sarah'},
    {id: 3, name: 'karen'}
];

const ids = users.map(function(user){
    return user.id;
})

console.log(ids)


//for in loops

const user = {
    firstName: 'john',
    lastName: 'doe',
    age: 40
}

for(let y in user){
    console.log(`${y} : ${user[y]}`)
}