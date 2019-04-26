let val;
val = document;
val = document.all;
val = document.all[2];
val = document.all.lenght;
val = document.head;
val = document.url
val = document.domain;
val = document.charaterType;
console.log(val)


val = document.forms;
val = document.forms[0]; 
val = document.forms[0].id; //task-form
val = document.forms[0].method; //get
val = document.forms[0].action; //link
console.log(val);


val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].clasList;

console.log(val)


val = document.images;
console.log(val);

val = document.scripts;
val = document.scripts[2].getAttribute('src')

console.log(val)




let scripts = document.scripts;

// scripts.forEach(function(script){  //not a function
//   console.log(script)
// })


let scriptsArr = Array.from(scripts);
scriptsArr.forEach(function(script){
  console.log(script)
})


