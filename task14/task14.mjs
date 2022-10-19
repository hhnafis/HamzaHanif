// creating guest list
export let guestList = ['ali', 'nafees', 'saeed'];
function myFunction(parameter){
    for(const type of parameter){
        console.log(`Hi dear ${type}, 'Today, You're invited on dinner at my home.`)
}
}
myFunction(guestList)
console.log(guestList)

