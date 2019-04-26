//get elements by class name

const items = document.getElementsByClassName('collection-item');
console.log(items)
console.log(items[0])
items[0].style.color = 'red';
items[3].textContent = 'hello'


const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems)


//document by tagname
let lis = document.getElementsByTagName('li');
console.log(lis)
console.log(lis[0])
lis[0].style.color = 'red';
lis[3].textContent = 'hello'


//convert html collection into array
lis = Array.from(lis)

lis.reverse()


lis.forEach(function(li, index){
    console.log(li.className)
    li.textContent = `${index}: hello`
})
console.log(lis)


//querysSelectorall


const itemss = document.querySelectorAll('ul.collection li.collection-item')

console.log(itemss)

itemss.forEach(function(item, index){
    item.textContent = `${index}: hello`
})
console.log(itemss)

const liOdd = document.querySelectorAll('li:nth-child(odd');
const liEven = document.querySelectorAll('li:nth-child(even');

liOdd.forEach(function(li){
    li.style.background = '#ccc'
})

for(let i = 0; i < liEven.lenght; i++){
    liEven[i].style.background = '#f4f4f4'
}