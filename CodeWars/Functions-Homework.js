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


console.log(solution.findSmallestInt(args))




