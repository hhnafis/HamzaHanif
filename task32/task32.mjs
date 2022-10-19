//checking user names
let currentUser = ['hamza', 'ali', 'hanif', 'abbas', 'haider'];
let newUser = ['asif', 'ali', 'saeed', 'haider','sohail']
for(const i of newUser){
    if(currentUser.includes(i)){
        console.log(`${i} is available already`)
    }else{
        console.log(`${i} is a valid user`)
    }
}