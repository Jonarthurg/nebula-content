![Nebula Academy](https://nebulaacademy.com/static/media/NebulaAcademyLogoNextToTitle.7d951a1b.png)

You should be able to:
1. Define the DOM & it's role
2. Talk about HTML elements as being parents, children, and siblings
3. Use common DOM manipulation patterns, including:
    - Querying for an element.
    - Editing an element.
    - Ading an element.
    - Removing an element.
    - Use DOM commands to interact with a page.

## What is the DOM?
- It stands for the Document Object Model. 
- It's known as a programming interface for HTML and XML documents
- It represents the collection of HTML elements from a webpage as nodes and objects. This allows for programming languages, like JavaScript, to connect to the page.
- A Web page is a document, so index.html is the classic document name you'll see. When you open that document in the browser, the HTML elements are rendered into nodes & objects.

How can we look at the DOM?
- After your HTML page is loaded into the browser, use your Developer Tools (right click inspect) to check it out! You'll see it in the same structure as your HTML.

If you're wondering what what a node is:
A node is the generic name for any type of object in the DOM hierarchy. It could be one of the built-in DOM elements such as document or document.body, it could be an HTML tag specified in the HTML such as `<input>` or `<p>` or it could be a text node that is created by the system to hold a block of text inside another element. So, in a nutshell, a node is any DOM object.
Read more on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
) or [StackOverflow](https://stackoverflow.com/questions/9979172/difference-between-node-object-and-element-object)

## Querying the DOM:
How can we search through the document in order to find an element.
- methods!
- `.querySelector()`

We can "traverse" the DOM, find an element, and store a reference to that element in a variable.
```javascript
const holdH1 = document.querySelector('h1');
```

We can also use CSS syntax to target certain elements in our HTML:
```javascript
const holdIdElement = document.querySelector("#some-id");
```
- Here we are using a CSS selector in our querySelector function
- That CSS selector needs to be passed in as a string
- We can use any CSS selectors in here, as long as we are targetting ONE element - because that's specifically how `.querySelector()` works

- If we want to target multiple elements we can use this method: `querySelectorAll()`

Lets see it in action:
```js
const holdAllDivs = document.querySelectorAll('div');
```
- This is going to store an array of all our div tags on the document.
    
We can also use:
- `.getElementById('someId')`
- We don't have to use a '#' within the parentheses because we are already targeting an `id`

We can also use:
- Element.getElementsByClassname("className")
- Like .querySelectorAll(".className") -> except we can omit the period

We can also use:
- Element.getElementsByName("name")
- This returns a list of elements that have the specified HTML attribute.

Element Creation:
- Document.createElement("elementName");
- Used with the name of the element you are trying to create.

DOM Editing:
- Note: This is not Node.js - the runtime envrionment we've been using
- A node is a generic name for an object - ie an Element like `<p>`, `<h1>`, etc.. is a type of node

>``` NOTE: there are certain methods / properties that only exist on the "Node" and "Element" interface...) ```

- `Node.appendChild()`
- `Node.removeChild()`
- `Node.innerText`
- `Node.setAttribute()`
- `Node.id`
- `Node.classList`
- and more...

DOM Traversal:
- `Node.childNodes`
- `Node.children`
- `Node.firstChild`
- and more...

## EXAMPLES:
Changing CSS with JavaScript:
```js
// target the elements to be changed & store them in a variable
const holdDiv = document.querySelector("div");
// modify that element's propery via the variable
holdDiv.style.backgroundColor = "red";

// OR do it without a variable
document.querySelector("div").style.backgroundColor = "red";
```
Breaking this down:
- We stored a reference to our div and then used the style property from our element to assign the background-color CSS property a value of "red"
- Note: we used camel casing for the CSS property name -> whenever you have a dash in the name of a CSS property, you instead want to use camel casing when using DOM manipulation.
```js
// OR do it with another method  `setAttribute`
const bodyElement = document.querySelector('body');

bodyElement.setAttribute('style', 'background-color:pink');
```
Breaking this down:
- We stored a reference to our body element, then used the the attribute method from our element (node) to assign the background-color CSS property a value of "pink" 
- Note: This is adding inline CSS

By default, a reference to the body element is already added to document as a property:
```js
document.body.style.backgroundColor = "white";
```
Something that is common is altering the text of a document:
```js
let name = input.value;
document.body.innerText = `Welcome + ${name}`;
```
## TIPS:
- It is helpful to target an element directly - if you target a parent's child's child there is a chance the DOM will be manipulated and that script no longer has access to the grandchild and therefore creates an error. If possible add class names and ids to target elements. 

## COMPLETE CLASS PRACTICE
- dom-query-exercise
