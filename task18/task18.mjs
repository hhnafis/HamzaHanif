// Seeing the world
let places = ['tajmahal', 'swat', 'madina', 'uae', 'ayasfia']
console.log(places);//printing array in it's orignal order


let sortedPlaces = [...places].sort();// copying that array and sorting it in alphabatical order
console.log(sortedPlaces)

//Seeing the world

console.log(places)// This will show my original array did not change


let reversePlaces = [...sortedPlaces].reverse();// Reversing order without changing the orignal list
console.log(reversePlaces);//

console.log(places)// agian this will showt that my original array did not change

console.log(places.reverse())//now this will show that order of my original list has been reversed

console.log(places.reverse())//again reversing the list to it's orginal form

console.log(places.sort());// sorting my array into alphabatical order
console.log(places.reverse());// sorting in reverse alphabatical order