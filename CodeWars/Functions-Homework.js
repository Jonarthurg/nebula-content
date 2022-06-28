//Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'



// const randomStr = "lot"


// function solution(str){

//     let newStr = ""
    
//     for(let i = 0; i < str.length; i++){
      
//         newStr += str[str.length - 1 - i]
     
      
//     }
//     return newStr
//   }

//   console.log(solution(randomStr))











//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"


// function repeatStr (n, s) {
//     let newStr = '';
//       for(let i = 0; i < n; i++){
//         newStr += s;
//       }
//       return newStr;
//   }





//   Given an array of integers your solution should find the smallest integer.

//   For example:
  
//   Given [34, 15, 88, 2] your solution will return 2
//   Given [34, -345, -1, 100] your solution will return -345
//   You can assume, for the purpose of this kata, that the supplied array will not be empty.
  
let args =[34, 15, 88, 2]

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

  
const solution = new SmallestIntegerFinder()


// console.log(solution.findSmallestInt(args))













// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


function arrayPlusArray(arr1, arr2) {
  let total = 0
  for(let i = 0; i < arr1.length; i++){
    total += arr1[i]
    
  }
  
  for(let j = 0; j < arr2.length; j++){
    total += arr2[j]
    
  }
  return total
  
  
  
}

const randomArray = [1,2,3]

const secondRandomArray = [4,5,6]


console.log(arrayPlusArray(randomArray,secondRandomArray))






// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.


const stringToNumber = function(str){
  // put your code here
  return str * 1;
}