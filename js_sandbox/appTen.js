//switches

const color = 'red'

switch(color){
    case 'red':
        console.log('color is red')
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default: //when you come to an end you use default
        console.log('color is not red or blue');
        break;
}

switch(new Date().getDay()){
    case 0:
        day = 'sunday';
        break;
    case 1:
        day = 'monday';
        break;  
    case 2:
        day = 'tuesday';
        break;
    case 3:
        day = 'wednsday';
        break; 
    case 4:
        day = 'thursday';
        break;
    case 5:
        day = 'friday';
        break;
    case 6:
        day = 'saturday';
        break;
}

console.log(`today is ${day}`)