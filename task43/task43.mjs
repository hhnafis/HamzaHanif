// Unchange Magician
let Magicians = ['hobert', 'watson', 'rocky'];
let copyArray = [...Magicians].sort();
let newArry = []
console.log(copyArray);// copy array
console.log(Magicians)// here's my originol array didn't get changed
function greatMagicians(name){
    for(const i of Magicians)
    
    newArry.push((`The Great ${i}`))// this will another array that includes 'The great' with the names of Magicians
    
    
}
greatMagicians(Magicians)
console.log(newArry)
