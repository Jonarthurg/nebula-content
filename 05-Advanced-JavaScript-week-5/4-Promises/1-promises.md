# Promises
Required Knowledge:
>- JavaScript is a synchronous, blocking, single-threaded language. That just means that only one operation can be in progress at a time.
>- To put it simply, JavaScript is a synchronous programming language 
>- Callback functions help make it operate in an asynchronous programming language
<hr/>

## What is a promise?
According to MDN:

>- The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value
>- AKA if you use a promise, you expect to eventually receive completion or failure of an async operation

Very similar to real-life promises: 
>- I promise to clean the dishes tonight
>- At the time of the promise you don't know FOR SURE that you will 100% do the dishes
>- You may have to run out for an emergency, you may win $1,000,000 and have to go celebrate with friends, etc..
<hr/>

## How does it work?
>There are 3 phases to a promise
>- Pending: You don't 100% know you will do the dishes
>- Fulfilled: You cleaned the dishes
>- Rejected: You didn't do the dishes

## What is the syntax?
```js
let promise = new Promise(function(resolve, reject){
     //do something
});
```

## Example:
The following code will initially return a Promise in a pending state,

After 5 seconds it will return a fulfilled promise of "I cleaned the dishes"

- Run this in the browser console and wait a few seconds 
- Node wont show us the promise itself, the browser will

```js
let dishPromise = true;
let cleanedDishes = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (dishPromise) {
            resolve('I cleaned the dishes');
        } else {
            reject('I did not clean the dishes');
        }
    }, 5 * 1000);
});

console.log(cleanedDishes);
setTimeout(() => {console.log(cleanedDishes)}, 5001)
```

## Promise Object Methods
- `Promise.then(onFulfilled, onRejected)`
- `Promise.catch(onRejected)`
- `Promise.finally(onFinally)`

<hr/>

## `.then()`
- Promises can be chained together, so what should happen after a promise is fulfilled? Usually another promise.
- The `then()` the method is used to schedule a callback to be executed when the promise is successfully resolved

## `.catch()`
- If you want to schedule a callback to be executed when the promise is rejected

## `.finally()`
- Is used to execute the same piece of code no matter if the promise is fulfilled or rejected

```js
function makePromise(dishPromise) {
    return new Promise(function (resolve, reject) {
       setTimeout(() => {
           if (dishPromise) {
               resolve('I cleaned the dishes');
           } else {
               reject('I did not clean the dishes');
           }
       }, 5 * 1000);
   });
}
let dishPromise = makePromise(true);
dishPromise
    .then(success => console.log(success))
    .catch(reason => console.log(reason))
    .finally(() => console.log("I've already told you if I washed the dishes!"));
```
<hr/>

## Visualizing promises: 
<img src='promises.png' />

## `.then()` example
`.then()` can be chained together infinitely, the nice thing about this is that it is perfectly synchronous - you will never execute the third promise without doing the first, then the second then the third
```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});

myPromise
  .then(handleResolvedA, handleRejectedA)
  .then(handleResolvedB, handleRejectedB)
  .then(handleResolvedC, handleRejectedC);
```
## `.catch()`
Generally Speaking we would rather end this example with a `.catch()` instead of a `.then()`
```js
myPromise
.then(handleResolvedA)
.then(handleResolvedB)
.then(handleResolvedC)
.catch(handleRejectedAny);
```

## Promises with arrow functions
- Promises and arrow functions look GREAT together
- They also allow you to make changes outside the promise

The following example updates our state from within a promise

```js
let state = [];

function makePromise() { return new Promise(res => res())};

console.log(makePromise()
    .then(res => {state = [...state, 'new data from promise 1']})
    .then(res => {state = [...state, 'new data from promise 2']})
    .then(res => {state = [...state, 'new data from promise 3']})
    .then(res => {state = [...state, 'new data from promise 4']})
    .then(res => { console.log(state)})
    .catch(err => { console.log(err) })
)
```

> This example could be lots of different HTTP requests and compiling the useful data

Important note: think of these .then lines as:
- notice the semi-colons
```js
    promise.then(DO SOMETHING).then(DO SOMETHING).then(DO SOMETHING).then(DO SOMETHING);
```
```js
promise;
    .then(DO SOMETHING);
    .then(DO SOMETHING);
    .then(DO SOMETHING);
```

## Using Promises (synchonous) with asynchronous code
```js
const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
    resolutionFunc(777);
});
// At this point, "promiseA" is already settled.
promiseA.then( (val) => console.log("asynchronous logging has val:", val));
console.log("immediate logging");

// produces output in this order:
// immediate logging
// asynchronous logging has val: 777
```

## COMMON INTERVIEW QUESTION: 
What is the order of output?
```js
console.log("a");
setTimeout(() => {
    console.log('d');
}, 1);

new Promise( (res,rej) => {res('b')}).then((val) => console.log('c', val));

setTimeout(() => {
  console.log('e');
}, 0);
console.log('f');
```

## NOTE:
- Know your audience... Internet explorer doesn't support promises, all other browsers do. 
