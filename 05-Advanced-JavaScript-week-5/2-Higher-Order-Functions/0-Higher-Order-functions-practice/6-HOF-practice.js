// .reduce()

// 1.   Write a HOF to reduce an array of numbers to all the numbers added up
const nums = [1,2,3,4,5]

let numsOutput = (nums.reduce((acc, curr) => acc + curr))
console.log(numsOutput)

// 2.   Write a HOF to reduce all numbers in an array to all numbers multiplied together
let numsMult = (nums.reduce((acc, curr) => acc * curr))
console.log(numsMult)

// 3.   Write a HOF to reduce all numbers in an array to the largest number 
const nums1 = [2,8,12,98,167,3]

const arrMax = (nums1.reduce((acc, curr) => Math.max(acc, curr)))
console.log(arrMax)

// 4.   Write a HOF to find the oldest person in a group
const partyPeople = [{name: 'John', age: 25}, {name: 'Jordan', age: 18}, {name: 'Frank', age: 50}, {name: 'Anna', age: 12}]

const eldest = partyPeople.reduce(function (acc, curr) {

    if (curr.age > acc.age) {
        acc = curr
    }
    return acc
})

console.log(eldest) 