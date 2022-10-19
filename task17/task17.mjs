// Shrinking Guest List


let guestList = ['ali', 'nafees', 'saeed'];
console.log(`Unfortunatly, ${guestList[0]} will not come on dinner.`);
// now modifying the list by using splice() method
guestList.splice(0,1,'zai');
console.log(guestList);
for(const i of guestList){
    console.log(`Hi dear ${i}! You are invited on dinner at my home.`)
}
console.log(`I've just found that more slots are avialble at the table. So, i should invite more friends `)
//adding more guest to my array list

guestList.unshift('moiz');
console.log(guestList)
guestList.splice(2,0,'kashif');
console.log(guestList);
//using .append to add element at the end of array
// 
//guestList.append('zeeshan');
console.log(guestList);// did not getting it
//we can use .push() to add element at the end of list
guestList.push('zeeshan')
console.log(guestList)

for(const j of guestList){
    console.log(`Hi dear ${j}! Your're invited for the dinner at my home.`)
}


// shrinking the guest list
console.log(`Oh unfortunately i've space for only two guests `);

// using pop() method of remove elements
/*
for(k=5;k>guestList.length;k--){
    console.log("Sorry dear " +guestList[k].pop())
}
ahh this could not work
*/

// using pop()
console.log(`You're sorry ${guestList.pop()}. You cannot be invited to dinner.`);
console.log(`You're sorry ${guestList.pop()}. You cannot be invited to dinner.`);
console.log(`You're sorry ${guestList.pop()}. You cannot be invited to dinner.`);
console.log(`You're sorry ${guestList.pop()}. You cannot be invited to dinner.`);

console.log(guestList)
console.log(`${guestList[0]} You're still invited.`)
console.log(`${guestList[1]} You're still invited.`)

guestList.pop()
guestList.pop()
console.log(guestList)
console.log(`At the end of my programe. I've an empty list`)