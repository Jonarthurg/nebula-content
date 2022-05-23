![Nebula Academy](https://nebulaacademy.com/static/media/NebulaAcademyLogoNextToTitle.7d951a1b.png)

# Higher Order Functions
A “higher-order function” is a function that accepts functions as parameters and/or returns a function.
(MEMORIZE THIS SENTENCE YOU WILL BE ASKED IT ON INTERVIEWS)

## Before we begin:
An overview of the power of functions:

ABSTRACTION

When communicating with one another, we might easily take for granted the amount assumptions we make. For instance, if you live in a household with a dishwasher, and someone asks you to "clean the dishes", you comprehend right away that that means putting the dirty dishes in the dishwasher and running it. Then there is the process of letting them dry and putting them away etc. 
        
When programming, you have to be A LOT more explicit and begin by defining the innerworkings of that dishwasher to begin with, for example. The concept of "abstracting" away details in order to communicate concepts, is a part of writing code. 

We can achieve abstraction with functions, and reuse those functions throughout our program.
            

## VOCABULARY:
>   - Callback Function
>   - Arrow syntax
>   - Abstraction
>   - Composability
>   - Iterator methods


Creating a higher order function that takes a function as a parameter:
```js
const calculateThis = (num1, num2, func) => {
    const calculation = func(num1, num2);
    return calculation;
}
```

Once I've defined my higher order function I can use it with other functions I've created...

```js
function multiplyTwoNumbers(num1, num2){
    return num1 * num2;
}

const divideTwoNumbers = (num1, num2) => {
    return num1 / num2;
}

console.log(calculateThis(5, 10, multiplyTwoNumbers));
```

We can also create a higher order function that returns a function
```js
const returnFunction = (func) => {
    return func;
}
```

Here we're storing divideTwoNumbers into the variable holdfunc VIA returnFunction()
```js
const holdfunc = returnFunction(divideTwoNumbers);

console.log(holdfunc(10, 2), "<-- holding...");
```

## Let's Practice! 

>Complete 1-HOF-practice


An example of ABSTRACTION / ABSTRACTING REPETITIVE CODE / COMPOSABILITY

```js
const anArray = [5, 3, 4, 2, 10, 11];
```

```js
const multiplyBy5 = (num) => {
    return num * 5;
}
```
    
We can create functions that take in another function and applies the second to each element in an array and then returns a new function.

For example:
```js
const mapOver = (arr, func) => {
    const newArray = [];
    for(let i = 0; i < arr.length; i++){
        let currentValue = arr[i]
        newArray.push(func(currentValue));
    }
    return newArray;
}

function multiplyBy5(num){
    return num * 5
}

console.log(mapOver(anArray, multiplyBy5));
```
multipyBy5 becomes a callback function as soon as I pass it into mapOver

## Let's Practice!
> complete 2-HOF-practice.js

## Common Higher Order Functions
- Now that we know how to create our own higher order functions, lets take a look at some that are included with JavaScript

These are called `Iterator methods`
## `Array.map()` 
- The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.
- You must know, ***"the `.map()` higher order function returns a new array"***

### The following example multiplies an array of numbers by two:
```js
const myArray = [5, 3, 4, 2, 10, 11];

const storeArray = myArray.map(cur => cur * 2);

console.log(storeArray);
```
Notice that we are storing the output in a new variable. This is because the original array was never manipulated, we just created a new array by utilizing the .map method. 

### Another example of map - passing in a function can work too

```js        
const nums = [5, 3, 4, 2, 10, 11];
const multiplyBy2 = cur => cur * 2;
    
const storeArray2 = nums.map(multiplyBy2);

console.log(storeArray2);
```

## Let's practice!
> complete 3-HOF-practice.js

## `Array.forEach()`
- The `forEach()` method executes a provided function once for each array element.
- This array doesnt return anything it 'does something' for each element
- We often see students confuse this Higher Order Function with `.map()`
    - Think, "Do I need an output array or am I doing something else?"
    - If the answer is, "Yes, I need an output array" => `.map()`
    - Otherwise it could be `.forEach()`

For example: 
```js
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));
```

## Let's practice!
> complete 4-HOF-practice.js

## `Array.filter()`
- The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.
- Returns a new array, of equal or lesser length. 
- Ex: "Given an array of positives and negatives, give me a new array of only positive numbers"

For example: 
```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const longWords = words.filter(word => word.length > 6);

console.log(longWords);
```

## Let's practice!
> complete 5-HOF-practice.js

## `Array.reduce()`
- The `reduce()` method executes a callback function on each element of the array, in order, passing in the returned value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
- Ex: "Given an array of numbers, return one sigle number of them all added up"
> [1,2,3,4,5] => 15
- An initial value may be used. Otherwise array element 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).   
- Using the previous example as an example, our accumulator starts with the first value, 1 and adds all subsiquent values to it.
- We could however have a pre-existing number and add all numbers in the array to it. 

For example: 
```js
const array1 = [1, 2, 3, 4];

// 1 + 2 + 3 + 4
let output1 = (array1.reduce((accumulator, current) => accumulator + current));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
let output2 = (array1.reduce((accumulator, current) => accumulator + current, 5));
// expected output: 15

console.log(output1, output2)

```

> `.map`, `.forEach`, `.filter`, & `.reduce` are the most popular and widely used higher order functions. However there are many more. A couple other popular ones are `.find` and `.sort`, 

## Let's practice!
> complete 6-HOF-practice.js



## `Array.find()`
- The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

For example: 
```js
const array1 = [5, 12, 8, 130, 44];

const doubleDigit = array1.find(element => element > 9);
console.log(doubleDigit);
```

## Let's practice!
> complete 7-HOF-practice.js

## `Array.sort()`
- The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

- The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

For example: 
```js
const nums = [1, 30, 4, 21, 100000];
nums.sort();
console.log(nums);
// expected output: [1, 100000, 21, 30, 4]
```

Our standard .sort() doesn't take in any directions but we can be more explicate if we like

```js
const nums = [1, 30, 4, 21, 100000];
nums.sort((a,b) => a > b ? 1 : -1);
console.log(nums);
// expected output: [ 1, 4, 21, 30, 100000 ]
```

## Let's practice!
> complete 8-HOF-practice.js