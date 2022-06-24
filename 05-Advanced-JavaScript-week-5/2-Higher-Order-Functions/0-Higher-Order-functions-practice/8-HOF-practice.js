// .sort()

// 1.   Write a HOF to sort an array of numbers from largest to smallest
const nums = [1,25,6,3,88,45,0]


console.log("nums array sorted: " + nums.sort((a,b) => {return a-b}))


// 3.   Write a HOF to sort peoples names by their length
const partyPeople = [{name: 'John', age: 25}, {name: 'Jordan', age: 18}, {name: 'Frank', age: 50}, {name: 'Anna', age: 12}] 

partyPeople.sort((a,b) => {return b.name.length - a.name.length})

// console.log(partyPeople)


// 4.   Write an HOF to sort an array of objects of people by their age youngest to oldest


partyPeople.sort((a,b) => {return b.age -a.age})

// console.log(partyPeople)

// 5.   Write an HOF to sort an array of strings by the last letter of the string
const strings = ['sam', 'john', 'daniel', 'vanessa']


strings.sort((a,b) => { return (a.charCodeAt(a.length-1)) - (b.charCodeAt(b.length-1))})
console.log(strings)