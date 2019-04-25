//window methods / objects / properties

// console.log(123)

//alert
// window.alert('hellow world')

//prompt
// const input = prompt();
// alert(input);

//confirm 
// if(confirm('are you sure')){
//     console.log('yes')
// }else{
//     console.log('no')
// }


let val;

//outter height and width
val = window.outerHeight;
// val= window.outerWidth;
console.log(val)


//inner height and width
val = window.innerHeight;
// val= window.innerWidth;
console.log(val)


//scroll points
val = window.scrollY
val = window.scrollX

console.log(val)



//location object

val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;
console.log(val)

//redirect
// window.location.href = 'http://google.com';

//reload
// window.location.reload();

//history object

window.history.go(-1);
val = window.history.length
console.log(val)


//navigator object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val)