// 1.   Write a higher-order function which takes in two numbers and performs a calculation with them
//      Write the callback functions seperately 
//          Ex: calculate(multiply, 2,4) => 8
//          Ex: calculate(subtract, 2,4) => -2
//          Ex: calculate(exponent, 2,4) => 16

// const higherOF = (num1,num2,funk) => {


  
// const funcResults = funk(num1,num2)


// return funcResults

// }


// function multiply(num1,num2){

// return num1 * num2


// }


// function subtract(num1,num2){


// return num1 - num2

// }

// function exponent(num1,num2){

// return Math.pow(num1,num2)


// }

// console.log(higherOF(10,2,exponent))

// console.log(higherOF(10,2,multiply))
// console.log(higherOF(10,2,subtract))




// 2.   Write a function that takes in any number of numbers and performs calculations on them
//      Write the callback functions seperately 
//      console.log(arguments) inside of a function to visualize your arguments
//          Ex: calculateAll(multiply, 1,4,1,231,5) => 4620
//          Ex: calculateAll(subtract, 2,4,5,7) => -14


// const higherOF = (funk, ...args) => {


  
    // const funcResults = funk(num1,num2)
    
    
    // return funcResults
    
    // }
    
    
    // function multiply(num1,num2){
    
    // return num1 * num2
    
    
    // }
    
    
    // function subtract(num1,num2){
    
    
    // return num1 - num2
    
    // }
    
    // function exponent(num1,num2){
    
    // return Math.pow(num1,num2)
    
    
    // }
    
    // console.log(higherOF(10,2,exponent))
    
    // console.log(higherOF(10,2,multiply))
    // console.log(higherOF(10,2,subtract))

// 3.   Write a function that takes in a string and performs some form of manipulation on it
//          Ex: modify(yeller, 'I need a nap') => I NEED A NAP!!!
//          Ex: modify(sarcastic, 'I really like running') => I ReAlLy lIkE RuNnIng
//          Ex: modify(code, 'There is no cake') => Th-r- -s n- c-k-



    //     function code(random){

    //    returnRandom = random
    //    for(let i = 0; i < random.length; i++){ 

       
    //    if(randomStr[i] === "a" || randomStr[i] === "A" ){

       
    //    randomStr[i] == "-"
    //    }

    //    else if (randomStr[i] === "e" || randomStr[i] === "E" ){
    //     randomStr[i] == "-"
    //    }
    //    else if (randomStr[i] === "i" || randomStr[i] === "I" ){
    //     randomStr[i] == "-"
    //    }
    //    else if (randomStr[i] === "o" || randomStr[i] === "O" ){
    //     randomStr[i] == "-"
    //    }
    //     else if (randomStr[i] === "u" || randomStr[i] === "U" ){
    //         randomStr[i] == "-"

    // }

    //      }

    //      return returnRandom
    //     } 

    //         let str = "jonathan"

    //         console.log(code(str))


// 4.   Write a function that takes in an array filled with different data types and returns each data type
//          Ex: oneType(strings, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => ['I love coding, 'goosfraba']
//          Ex: oneType(arrays, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => ['Nested Array!']
//          Ex: oneType(nums, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => [10, Infinity]


let abstractArray =["red",5,"undefined",null]

// console.log(abstractArray)

function oneType(arr){

returnArr = []
for(let i = 0; i < arr.length; i++){

console.log(typeof(arr[i]))

}
}

oneType(abstractArray)
// }
// // return returnArr
// }

