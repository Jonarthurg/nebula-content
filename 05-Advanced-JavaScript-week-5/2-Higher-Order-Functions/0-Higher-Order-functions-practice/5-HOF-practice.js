// .filter()

const nums = [1,2,3,4,5,6,7,8,9,10]
// 1.   Write a function to filter an array for all the numbers greater than 5



// 2.   Write a function to filter an array for all the even numbers

// let newOddNums = nums.filter(num => num % 2 == 1)
// console.log(newOddNums) 

// 3.   Write a function to filter an array for all the non number items

// const arr3 = ["hi", 23, 56, 7, true, 0, [], "boo"]

// let returnArray = arr3.filter(num => typeof num != "number")

// console.log(returnArray)

// 4.   Write a function to filter an array of objects for people over the age of 21 (inclusive)
const partyPeople = [{name: 'John', age: 25}, {name: 'Jordan', age: 18}, {name: 'Frank', age: 50}, {name: 'Anna', age: 12}]


let aList = partyPeople.filter(peeps => peeps.age >= 21)

console.log(aList)
// 5.   Write a function to filter out all letters from a string 
//      Hint: filter doesn't work on strings..

