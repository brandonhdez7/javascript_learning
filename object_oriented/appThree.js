//object.prototype
//person.prototype

//person contructor
function Person(firstName, lastName, dob){
    this.firstName = firstName,
    this.lastName = lastName
    // this.age = age;
    this.birthday = new Date(dob);
    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const AgeDate = new Date(diff);
    //     return Math.abs(AgeDate.getUTCFullYear() - 1970);
    // }
}
//calculate age
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const AgeDate = new Date(diff);
    return Math.abs(AgeDate.getUTCFullYear() - 1970);
}

//get full name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

//gets married
Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName
}

const john = new Person('john', 'doe', '8-12-1995');
const mary = new Person('mary', 'johnson', 'march 30 1997')

mary.getsMarried('smith')
console.log(mary)

console.log(john.calculateAge())

console.log(mary.getFullName())