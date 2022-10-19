// hello admin
let helloAdmin = ['pc1', 'admin', 'pc2', 'pc3'];
for(const i of helloAdmin){
    if(i === 'admin'){
        console.log(`hello ${i}, would you like to see syntax report`)
    }else
    console.log(`hello ${i}, thanks for loggin in`)
}