// object literals

const person= {
    firstName: 'Steve',
    lastName: 'miller',
    age: 30,
    email: 'smith@gmail.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'miami',
        state: 'fl'
    },
    getBirthYear: function(){
        return 2019 - this.age;
    }
}

let val;

val = person;
console.log(val)

// get an especific value
val = person.firstName; //smith
console.log(val)

val = person['firstName']; //smith
console.log(val)

val = person.hobbies; // music, sports
console.log(val)

val = person.address.state; //fl
console.log(val) 

val = person.getBirthYear(); //1987
console.log(val)

const people = [
    {name: 'john', age: 29},
    {name: 'mark', age: 28},
    {name: 'nancy', age: 30}
]

for(let i = 0; i < people.length; i++){
    console.log(people[i].name)
}