/*
    What is recursion?
        - Recursion happens when a function calls itself.
        - In JavaScript, a function executing in the Call Stack,
            will add another version of itself ontop of itself in the stack, and will wait until
            that newly created version resolves itself before continuing.
        - A lot of recursive code solutions can be solved with a loop / while loop.
        - Writing a recursive solution / function usually ends up being easier to read / being seen
            as a more "elegant" way to write.
        - In JavaScript, recursion tends to be more costly on your machine than just using loops 
            in part because recursion uses the entire the Call Stack instead of just one frame on the Call Stack like a loop.
*/


function power(base, exponent){
    if(exponent === 0){
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

console.log(power(2, 3));
// -> 8

function findSolution(target){
    function find(current, history){
        if(current === target){
            return history;
        } else if (current > target){
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                   find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}


/* 
We've seen that % (the remainder operator) can be used to test whether a number
is even or odd by using % 2 to see whether it's divisible by two. Here's another
way to define whether a positive whole number is even or odd:
    - Zero is even
    - One is odd
    - For any other number N, it's evenness is the same as N - 2.
Define a recursive function isEven() corresponding to this description. The function
should accept a single parameter (a positive, whole number) and return a Boolean.
Test it on 50 and 76. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

function isEven(num){
    return num === 0 ? true : num <= 1 ? false : isEven(num - 2); 
}

console.log(isEven(8));

/* 
Write a recursive function that calculates the factorial of a number
Remember:
"In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all
positive integers less than or equal to n."
*/

function factorial(num){
    // You have a base case in most recursive functions that are built to solve a particular problem...
    if(num === 0) return 1;
    console.log("testing....");
    return num * factorial(num-1);
}

console.log(factorial(5), "<--- factorial");


