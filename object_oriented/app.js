const brian = {
    name: 'brian',
    age: 30
}
console.log(brian)

//person contructor
function Person(name, dob){
    this.name = name,6
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const AgeDate = new Date(diff);
        return Math.abs(AgeDate.getUTCFullYear() - 1970);
    }
}

const brad = new Person('brad', 36);
console.log(brad)

const John = new Person('John',40)
console.log(John.age)


const brandon = new Person('brandon', '4-28-1994')
console.log(brandon.calculateAge())