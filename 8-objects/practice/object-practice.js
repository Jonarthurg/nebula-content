// 1.   Create an object for a celebrity and save it to a variable

const car = {
    color: 'Green',
    engine: 'V8',
    exhaust: 'Dual Rear Exit'
};

const celebs = {
firstName: 'jordan',
lastName: 'peterson',
profession: 'author'
}

console.log(celebs)

// 2.   Using dot-notation add 3 key-value pairs to the celebrity

celebs.firstName = "Alicia";
celebs.lastName = "Keys";
celebs.profession = "singer";


celebs['status'] = 'A List'

console.log(celebs)

// 3.   Using bracket-notation add 3 key-value pairs to the celebrity


// 4.   Write a function that allows us to add or update 3 properties

function updateObj(object,propertyName,value){

object.propertyName = value
return object

}
// 5.   Using a loop - log all the celebrities properties to the console

for(let key in car)
console.log(`${key}: ${car[key]}`);






const fam = {

mom: 'jane doe',
dad: 'john doe',
sister: 'jamey doe',
brother: 'jordan doe',
dog: 'jax doe'
}

let newNeighbors = fam;

console.log(updateObj(car,'color','Yellow'));


