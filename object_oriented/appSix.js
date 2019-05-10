class Person {
    constructor(firsName, lastName, dob){
        this.firsName = firsName;
        this.lastName = lastName;
        this.birthday = new Date(dob)
    }

    greeting(){
        return `Hello there ${this.firsName} ${this.lastName}`
    }

    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }

    getsMarried(newLastName){
        this.lastName = newLastName
    }

    static addNumbers(x, y){
        return x + y;
    }
}

const mary = new Person ('Mary', 'williams', '11-13-1994');

mary.getsMarried('jeff')

console.log(mary);
console.log(mary.calculateAge())

console.log(Person.addNumbers(1,4))

