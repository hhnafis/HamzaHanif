// Sandwiches;
function mySandwich(...sandwich){
    for(const i of sandwich){
        console.log(`Adding ${i} to your sandwich`)
    }
    console.log(`Your sandwich is ready!`)
}
mySandwich("chicken", "butter", "bread")


