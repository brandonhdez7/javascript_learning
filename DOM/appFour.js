let val;

const list = document.querySelector('ul.collection');
const lisItem = document.querySelector('li.collection-item:first-child');

val = lisItem;
val = list


//get child nodes
val = list.childNodes;
val = list.childNodes[3].nodeType;
console.log(val)

//1 - element
//2 - attribute(deprecated)
//3 - text node
//8 - comment
//9 - document itself
//10 - doctype

//get children element nodes
val = list.children
val = list.children[1]
val = list.children[1].textContent = 'hello'
console.log(val)

val = list.children[3].children;
console.log(val)


//first child
val = list.firstChild;
console.log(val)

val = list.firstElementChild
console.log(val)


//last child
val = list.lastChild;
console.log(val)

val = list.lastElementChild
console.log(val)

//count child element
val = list.childElementCount;
console.log(val)


//get parent node
val = lisItem.parentNode;
val = lisItem.parentElement;
console.log(val)

//parent of the parent
val = lisItem.parentElement.parentElement;
console.log(val)

//get next sibling
val = lisItem.nextSibling;
console.log(val)


val = lisItem.nextElementSibling;
console.log(val)

//sibling of the sibling
val = lisItem.nextElementSibling.nextElementSibling;
console.log(val)

//previous sibling of the sibling
val = lisItem.previousElementSibling;
console.log(val)