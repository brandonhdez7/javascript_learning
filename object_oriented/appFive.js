//using object.create

const personPrototypes = {
    greeting: function(){
        return `Hello there ${this.firstName} ${this.lastName}`
    },
    getsMarried: function(newLastName){
        this.lastName = newLastName
    }
}

const mary = Object.create(personPrototypes)
mary.firstName = 'mary';
mary.lastName = 'williams'
mary.age = 30;

mary.getsMarried('thompsom')

console.log(mary.greeting())


//other way

const brad = Object.create(personPrototypes,{
    firstName: {value: 'brad'},
    lastName: {value: 'Traversy'},
    age: {age: 36}
});

console.log(brad);

console.log(brad.greeting())
