//cities
function describe_city(city, country = 'turkey'){
    if(country==undefined)
{
    console.log(`${city} is in pakistan` )
}else{

    
  console.log(`${city} is in ${country}`)
}
}
describe_city('lodon', 'england');
describe_city('istambol');
describe_city('lahore');
// yea