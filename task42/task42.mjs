// Magicians names. adding great with namse
export let Magicians = ['robert', 'watson', 'rocky'];
function greatMagicians(name){
    for(const i of Magicians)
    console.log(`The Great ${i}`)
    
}
greatMagicians(Magicians)
export {greatMagicians};