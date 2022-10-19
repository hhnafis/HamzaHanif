//Changing Guest List

//importing guestList from task15/task15.mjs
import {guestList} from '../task15/task15.mjs';
console.log(`I've just found that more slots are avialble at the table. So, i should invite more friends.`)

//adding more guest to my array list
guestList.unshift('moiz');
//logging modifies guestList
console.log(guestList)

//adding one more guest in middle of array
guestList.splice(2,0,'kashif');
//logging modifies list
console.log(guestList);


//we can use .push() to append and  element at the end of list
guestList.push('zeeshan')
//logging modified list
console.log(guestList)

for(const i of guestList){
    console.log(`Hi dear ${i}! Your are invited for the dinner at my home.`)
}