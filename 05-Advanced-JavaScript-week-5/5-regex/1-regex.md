# REGEX

## What are regular expressions?
- Patterns used to match character combinations in strings
- JavaScript regex are objects, which means we have methods to use

## Syntax
- The syntax of regular expressions is probably why people often hate it & want to avoid having it within a codebase
```js 
let r = /sometext/ 
```
- A regular expression pattern is comprised of characters 
- Generally speaking you don't want to commit time to memorizing regex, you just want to understand it and understand how to use it/the tools that exist to assemble expressions
- [RegExr](https://regexr.com/)
- [RegEx_101](https://regex101.com/)
- [RegEx_Tester](https://regextester.com/)
- RegExr is simple and doesn't have complexity built in, let's start by utilizing this tool and you can start to use the others in the future if you like

## Searching
- We often want to find something within a string. To do this we can search for a global match
- We can utilize .match with a regular expression to achieve this

## Match One
```js
let str = 'Lorem ipsum dolor sit amet. Er ER consectetur adipiscing elit, sed do eiusmod tempor incididunt exercitation ut labore et dolore /g magna aliqua. Uter / enim ad minim * veniamer.'
console.log(str.match(/er/))
// output is an array:
[
  'er',
  index: 92,
  input: 'Lorem ipsum dolor sit amet. Er ER consectetur adipiscing elit, sed do eiusmod tempor incididunt exercitation ut labore et dolore /g magna aliqua. Uter / enim ad minim * veniamer.',
  groups: undefined
]
```
- Notice how this array has assigned keys... therefore to grab anything other than the first indext you'll have to search it like an object
```js
console.log(str.match(/er/).index)
```

## Match All
Here we are utilizing the `g`, or global option
```js
let str = 'Lorem ipsum dolor sit amet. Er ER consectetur adipiscing elit, sed do eiusmod tempor incididunt exercitation ut labore et dolore /g magna aliqua. Uter / enim ad minim * veniamer.'
console.log(str.match(/er/g))
// output is an array:
[ 'er', 'er', 'er' ]
```

- Notice that this didn't get all versions of `er`. Just the lowercase ones
- We can fix this by asking for both capital or lowercase
```js
console.log(str.match(/er|ER/g))
// output: [ 'ER', 'er', 'er', 'er' ]
```
- This isn't a dynamic solution as it's only all lowercase or all uppercase... What about `Er`. We could chain another `or`, however what if our match is 20 letters, we can't write all combinations of upper and lower case matches
- the `i` flag will make it case-insensitive
```js
console.log(str.match(/er|ER/gi))
// output: [ 'Er', 'ER', 'er', 'er', 'er' ]
```

## Escaping
What if we need to find a special character?
- There are 12 special characters:  
    - `^`: matches the position before the first character in a string, unless inside a square bracket, where it now means not (similar to bang in JS)
    - `$`: matches the position before the first newline in the string
    - `.`: represents the wildcard character. Any character will be matched by a period
    - `|`: represents 'or'
    - `?`: zero or one instances of the preceding item (making it non-greedy)
    - `*`: attempt to match the preceding token zero or more times
    - `+`: matches one or more occurrences of the one-character regular expression
    - `(` & `)`: matches all instances of the entire contents of the parenthesis 
    - `[` & `]`: matches all instances of the entire contents
    - `{` & `}`: min/max quantifier
    - `\`: escape the functionality of a preceding character
    - `/`: Open and closing a regex epxpression

- So if we want to find the character `*` we need to escape it with a backslash `\`

```js
console.log(str.match(/\*/))
/* 
output: [
    '*',
    index: 167,
    input: 'Lorem ipsum dolor sit amet. Er ER consectetur adipiscing elit, sed do eiusmod tempor incididunt exercitation ut labore et dolore /g magna aliqua. Uter / enim ad minim * veniamer.',
    groups: undefined
]
*/
```

If you havent already imagined, this can get VERY complex, with special characters inside brackets, outside brackets, chained together etc... 
- Learning the basics is great, the global identifier, where identifiers are, and what some of the more common special characters are. But don't waste time trying to become a professional regexer... use the tools properly and you'll be nearly as fast as someone who has memorized each and every character combination and interaction

## Password Examples:
- Test the following in [regexr.com](https://regexr.com/)
    - Don't use your real passwords as tests...

```js
// Minimum eight characters, at least one letter and one number:
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
// Minimum eight characters, at least one letter, one number and one special character:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
//Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character: 
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
// Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/
```

## RegExp Object
You may, or may not have noticed that regex doesn't allow for operational JavaScript within the expression
```js
function test(str){
    let letter = 'a'
    return str.match(/letter/g) // this doesnt work as expected and will return an object indicating if 'letter' exists in the string 
}
```

What we have to utilize instead is the `RegExp` Object
- Logging what the object looks like is VERY helpful - it shows us that we've just built a regular expression utilizing a variable 
```js
function hasSubstr(str){
    let letter = 'a'
    let re = new RegExp(letter, 'g');
    console.log(re) // output: /a/g
    return str.match(re)?.length
}
```

# Lets Practice!
- Complete the exercises in 0-regex-practice.js