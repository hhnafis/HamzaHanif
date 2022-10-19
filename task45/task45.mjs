//cars

function propertiesOfCar(manufacturer,model,...orbitraryNumber){//function will take parameters
    let cars = {// here constructed an object 
        "Manufacturer":manufacturer,
        "Model":model,
        "more option":orbitraryNumber
    }
    return cars;// return stored value
}
console.log(propertiesOfCar("Honda", "2022", "assembled in pakistan", "white"))//calling function