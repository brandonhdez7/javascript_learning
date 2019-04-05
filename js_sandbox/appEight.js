// dates and times

let val;

const today = new Date();

val = today;

console.log(val);
console.log(typeof val)


let birthday = new Date('9-10-1981')
val = birthday;
console.log(val)

birthday = new Date('September 10 1981')
val = birthday;
console.log(val)

birthday = new Date('9/10/1981')
val = birthday;
console.log(val)

val = today.getMonth() //will give you 3 because it starts counting at 0 //we're in april
console.log(val)

val = today.getDate() //5 //today is the 5th of aprill
console.log(val)

val = today.getDay() //it starts on sunday //today is friday so it will give you 5
console.log(val)

val = today.getFullYear() // 2019
console.log(val)

val = today.getHours() // 3
console.log(val)

val = today.getMinutes() // 48
console.log(val)

val = today.getSeconds() // 24
console.log(val)

val = today.getTime() // time stamp from january first
console.log(val)



// setting up manually date

birthday.setMonth(3);
birthday.setFullYear(1994);
birthday.setDate(28);
console.log(birthday)
