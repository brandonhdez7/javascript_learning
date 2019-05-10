//prototypal inherence
//person constructor

function Person(firstName, lastName){
    this.firstName = firstName,
    this.lastName = lastName;
}

Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`
}

const person1 = new Person('john', 'doe');

// console.log(person1.greeting())

//customer constructor

function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName,lastName)

    this.phone = phone
    this.membership = membership
}

//inherit the person prototype methods
Customer.prototype = Object.create(Person.prototype)

//make customer.prototype return customer()
Customer.prototype.constructor = Customer

//create customer

const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'standard');

console.log(customer1);


//customer greeting
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`
}

console.log(customer1.greeting())