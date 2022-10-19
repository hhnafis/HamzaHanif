//importing guestList 
import {guestList} from '../task14/task14.mjs';

//console.log(guestList)

//changing my guest list
console.log(`Unfortunatly, ${guestList[0]} will not come on dinner.`);

// now modifying the list by using splice() method
guestList.splice(0,1,'zai');

//logging my new modified list
console.log(guestList);

//again greeting them for the dinner
for(const i of guestList){
    console.log(`Hi dear ${i}! You're invited on dinner at my home.`)};
    console.log(guestList)
    export{guestList}