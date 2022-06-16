![Nebula Academy](https://nebulaacademy.com/static/media/NebulaAcademyLogoNextToTitle.7d951a1b.png)

You should be able to:
- Understand the concept of a "callback" (think higher-order functions)
- Explain the importance of callbacks in asynchronous programming 
- You're going to know the idea behind what asynchronous programming is
- Write event handlers 
- Know what 'this' represents within an event listener
- Use the event object to track events 


<!-- Clicking on an element to modify something about the document: (EVENT HANDLING)
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <h1 class='dynamicH1'>Dynamic Header Text</h1>
        <script src="script.js" charset="utf-8"></script>
    </body>
</html>
```
```js
let dynamicH1 = document.querySelector('.dynamicH1');
let clicked = true;

document.addEventListener("click", (e) => {
    if(e.target === dynamicH1 && clicked){
        dynamicH1.style.backgroundColor = "purple";       
        dynamicH1.style.color = "teal";   
        clicked = false;    
    } else if(e.target === dynamicH1 && !clicked){
        dynamicH1.style.backgroundColor = "teal";       
        dynamicH1.style.color = "purple";
        clicked = true;       
    }
})
```
```css
*{
    padding: 0px;
    margin: 0px;
    transition-duration: 1.2s;
    
    width: 100%;
    text-align: center;
}
``` -->

## HTML, CSS & JavaScript
Again, if HTML is the bones of an animal, the CSS the skin, eyes, hair, etc.., then JavaScript is the brain. 

In order to create interactive and responsive sites, we need to use JavaScript to update the DOM based on a user's actions.

Examples of user actions are:
- clicking
- scrolling
- typing
- mouse movement
- dragging content
- dropping content
- loading content
- inputing text
    
Examples of responses to user actions:
- If a user clicks on a sites nav menu icon, we want the menu to slide out revealing the ability to navigate
- When a users computer is finished loading an html page, we want a "welcome to my site" message to slide into view
- Maybe we want to give a user the option to click through a slideshow of images
- Maybe we want to build a quiz on our page because we have educational content that we want our users to memorize

When we a user action occurs we have that event:
```js
document.addEventListener("click", (event) => {
    console.log(event)
}
```
When dealing with clicks we OFTEN want to take a look at the `event.target` to understand what element was clicked. 
For example:
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <h1>This is the first header</h1>
        <h2>This is the second header</h2>
        <h3>This is the third header</h3>
        <h4>This is the fourth header</h4>
        <h5>This is the fifth header</h5>
        <script src="script.js" charset="utf-8"></script>
    </body>
</html>
```
```js
document.addEventListener("click", (e) => {
console.log(e.target)
}
```

### Here's an example where a user can click on an element to modify something about the document:
HTML
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <h1 class='dynamicH1'>Dynamic Header Text</h1>
        <script src="script.js" charset="utf-8"></script>
    </body>
</html>
```
JavaScript
```js
let dynamicH1 = document.querySelector('.dynamicH1');
let clicked = true;

document.addEventListener("click", (e) => {
    if(e.target === dynamicH1 && clicked){
        dynamicH1.style.backgroundColor = "purple";       
        dynamicH1.style.color = "teal";   
        clicked = false;    
    } else if(e.target === dynamicH1 && !clicked){
        dynamicH1.style.backgroundColor = "teal";       
        dynamicH1.style.color = "purple";
        clicked = true;       
    }
})
```
CSS
```css
*{
    padding: 0px;
    margin: 0px;
    transition-duration: 1.2s;
    
    width: 100%;
    text-align: center;
}
```
Let's practice!
> Create a folder with an index.html, styles.css & script.js
    > - Hook up the files together - how do we test they are working?
    > - Create a square that when you click on it the website background color changes


What is Asynchronicity?
- One of the special things about JavaScript compared to most other programming languages is that it is designed to run in the browser, and the browser supports user events!
- The browser has it's own runtime for JavaScript, which includes a space to hold things like event listeners. What this means is that there is code that we can write for our websites that doesn't have to adhere strictly to the top to bottom order of executing.
- For example: what if we want to wait for a user to click before we run a piece of code? We can do that by having code waiting around for that happen.
- That code that's waiting around and being executed on it's own time is code that is being executed asynchronously. It's code that won't hold up our synchronous code from running (the code that's running one line at a time, from top to bottom). Remember, code that is written below other code in a synchronous execution, needs to wait for the code above to run before it itself runs.

Event-driven programming
- A programming paradigm where the flow of the program is driven by events.
- To recap: this means that the program will wait or "listen" for events to occur, which is an example of asynchronous code.

We can write what are called "event handlers" for the browser in JavaScript
- The syntax template looks like:
``` js
element.addEventListener('nameOfEvent', functionToRun);
```
Example:
```js
const ourH1 = document.querySelector("h1");

ourH1.addEventListener('click', (e) => {
    e.target.color = "red"
})
```

Breaking that down
1. Element: This is a DOM node which we tying an event to.
2. .addEventListener(): This is a method that can be used on an element Dom node to listen for a user generated event.
3. 'click': The type of event we are listening for.
4. (e) => { e.target.color = "red"}: This is an anonymous function that will execute on the element the user is performing the action on. 

## Adding elements to the DOM

When Adding elements to the DOM we need to break it down into parts. 
1. Create a new element
```JS
let newEle = document.createElement('p');
```
2. Modify that element
```JS
newEle.innerText = 'This is so cool!';
```
3. Add that element to the body
```JS
document.body.appendChild(newEle);
```
A working example with HTML and JS below:
- Notice that there is no text in the HTML, yet we have text rendering from the JS
```html
<!DOCTYPE html>
<html lang="en">
<body>
    <script src="script.js"></script>
</body>
</html>
```
```js
let newEle = document.createElement('p');
newEle.innerText = 'This is so cool!';
document.body.appendChild(newEle);
```
We can do the same thing with a loop!
```html
<!DOCTYPE html>
<html lang="en">
<body>
    <script src="script.js"></script>
</body>
</html>
```
```js
for(let i = 0; i < 10; i++){
    let newEle = document.createElement('p');
    newEle.innerText = `This is STILL so cool! Even after ${i} times!!`;
    document.body.appendChild(newEle);
}
```

Let's practice!
> Create a folder with an index.html, styles.css & script.js
> - Hook up the files together - how do we test they are working?
> - Now everything is set up
> - Create an input that accepts text
> - Add a button to the page that when you click it it creates a new row of text aquired from the input field

> ## The goal is to have someone to fill in their 'ID card info'
> ### Create a folder with an index.html, styles.css & script.js
> - Hook up the files together - how do we test they are working?
> ### A user must be able to input thier Name, id number, address & a fun fact about themselves
> - After clicking an update button thier id card will update
>   - Style a div to look like an ID card - curved corners, an image (start witha  placeholder image)
>   - ex:

<img src="https://freesvg.org/img/id-card.png" height=200px/>

