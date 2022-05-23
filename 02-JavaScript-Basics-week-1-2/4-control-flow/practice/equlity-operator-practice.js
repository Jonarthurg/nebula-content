// // Create two variables, one equal to '10' and the other equal to 10
let num1 = 10
let num1String = "10"



// // Comparing the two variables, are they strictly equal?


console.log(num1 === num1String)


// // Comparing the two variables, are they loosely equal?

console.log(num1 == num1String)


// // Log both to the console

// console.log(num1)
// console.log(num1String)



// // Comparing our two prior variables, in one statement, are they both loosely equal and strictly equal?


console.log(num1 == num1String &&  num1 === num1String)


// // Comparing our two prior variables, in one statement, compare them using loose equals. In the other compare them using strictly equal.
// // What is the output for each comparison?


console.log(num1 == num1String)

console.log(num1 === num1String)
 

// Create a variable and initilize it to 10, check if it is not loosely equal to 'ten' 


const newNum = 10


console.log(newNum != 'ten'  + " loosly equal 10 statement")


// Create a variable and initilize it to true, check if it is not strictly equal to 'true' 


const bool = true


console.log(bool !== 'true'  + " bool statement")