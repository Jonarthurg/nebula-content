const myArray = [1,2,3,4,5]

function minNum(arr){

let minimum = Math.min(...arr)
console.log(minimum)

} 

minNum(myArray);


const aString = "hello7"

function repeatStr(repeatAmount,paramString){

var newString = ""

for( i = 0; i < repeatAmount; i++){

  newString += (paramString)
}

console.log(newString)
}

repeatStr(7,aString)



