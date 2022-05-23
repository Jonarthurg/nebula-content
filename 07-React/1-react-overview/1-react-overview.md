![Nebula Academy](https://nebulaacademy.com/static/media/NebulaAcademyLogoNextToTitle.7d951a1b.png)

# What is React?
- React is a JavaScript library that developers use to build user interfaces (UI) with. Libraries abstract code (details) away from the developer, giving us more concise methods / objects etc. to work with.
- User Interfaces are a part of what make up the "front-end" within web applications.
- React allows developers to create large web applications that can change data, without reloading the page. 
- A main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application. 
  - A poorly written React-App is still going to be slow, so you need to me mindful of what is being updated to ensure that you're utilizing react to it's fullest capacity
- Take a couple minutes to read about it [here](https://www.c-sharpcorner.com/article/what-and-why-reactjs/#:~:text=React%20allows%20developers%20to%20create,view%20in%20the%20MVC%20template) - no need to complete the tutorial, just read it and try to understand what is being completed in each step of the tutorial

# History
  - Created by Jordan Walke
  - 2011: First used by Facebook.
  - 2012: Then used by Instagram.
  - 2013: React became open source -> https://github.com/facebook/react
  - 2015: Netflix picks up React...

# SPA (Single Page Application)
What is a Single Page Application?
- A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server (or user generated data / actions), instead of the default method of a web browser loading entire new pages.
- We will be building single page applications with React.
# Components 
## From a high-level, what are components?
- Components are independent and reusable bits of code
- Notice thier description is VERY similar to a JavaScript function (a reusable block of code). Components serve the same purpose as JavaScript functions - code that works in isolation.

## What does a React component look like?
This is an example of a class component:
```js
    class Car extends React.Component {
      render() {
        return <h2>Hi, I am a Car!</h2>;
      }
    }
```

## 3 Tenets of components:
  1. Nesting - A component can be shown inside of another.
  2. Reusability - We want to make components that can be easily reused throughout an app.
  3. Configurable - We should be able to configure a component when it is created.

## Components: Things to keep in mind
F.I.R.S.T
- Keep it `F`ocused.
- Keep it `I`ndependent.
- Keep it `R`eusable.
- Keep it `S`mall.
- Keep it `T`estable.
>Source: https://addyosmani.com/first/

# JSX
What is JSX?
- This is essentially React syntax - it's a syntax extension to JavaScript
  - Compared to it's competitors (Vue, Angular, etc..) JSX is VERY simple and one of the reasons React is well-liked
- It compiles down to JavaScript and for the most part tells the browser what kind of HTML to render.
- JSX is HTML and JS combined in one place
  - If you are going to return multi-line JSX, you need to wrap that JSX in parentheses 

# Create React App
What is it?
- It "bootstraps" a React environment for us...
- From the React documentation:
  - Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.
- In order to create a new CRA (create react app) Navigate to a directory you want to create a new project in (via the terminal), then use this command:
- `npx create-react-app <folderName>`
- Replace `<folderName>` with what you want your project to be called.

Practice (1 min):
- ***Execute the above command now, it may take a few minutes***
- As we proceed through this learning content we will continue working within the same React-app

## The files in CRA
- `App.js` - this is CRA's default component that's being displayed 
- `index.html` - this is kind of like any other index.html file and acts as our entry point for the browser
- `index.js` - this is where we first encounter the ReactDOM...

Practice (5 min):
- Within the root of your React Directory run `npm start`
  - This will launch a browser tab with your react app running on port 3000
- Take a few minutes to clean up your React-App - following the instructor remove any extraneous files and information
- Your App.js should now just render a single `<h1>SOME TEXT HERE</h1>`
- As we proceed through this learning content we will continue working within the same React-app

# ReactDOM
- Another library or "package" that works in tandem with React - it provides us DOM specific methods - methods that affect the `real` or `HTML DOM` (the DOM we've previously discussed)

## Virtual DOM
> In React, for every DOM object, there is a corresponding "virtual DOM object."
>- A virtual DOM object is a representation of a DOM object, like a lightweight copy. 
>- A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing’s power to directly change what’s on the screen. 
> 
>Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen. 
>- Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house."

Read more [here](https://www.codecademy.com/articles/react-virtual-dom) and [here](https://www.youtube.com/watch?v=-DX3vJiqxm4) 

Practice (5 min):
- Take a second to install the [React-Developer-Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related?hl=en)
- You can now use the inspector to view the HTML DOM
- Take a minute to do so
- Now head to the React Developer Tools settings
  - Be careful there are two settings wheels in the inspector now - we want the one that creates a popup that has tabs for `General`, `Debugging`, `Componentes` & `Profiler`
  - In general check "Highlight updates when components render"
- Head to FaceBook and start slowly hovering over some items - notice how much highlighting is happening. Because React is able to isolate what SHOULD be updated it can update a small portion of the website to ensure a good user experience. However it will RARELY update the whole website to prevent a slow or poor user experience.  

# Component Props:
What are they?
  - Properties
  - Every component has a .props object
  - Can be passed down from parent to child - this is called "prop drilling"
  - props are immutable

## Functional vs Class Components:
As any widely-used technology that has exised for years, React has gone through some phases. It used to be oriented around classes, now it is primarily written in a functional manner. As always, you'll need to know both the legacy & the modern styles  

### (Old) React Was Primarily Class Components:
- Mutable components would be written with Class syntax
- Can use Lifecyle Methods
- Can receive `props`
- Can use the `state` to update UI (User Inteface)
- The code looks (syntax wise) and acts like a traditional class
```js
import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    // Gives us access to `this`
    super(props);
    // Setting our initial state
    this.state = { count: 0 };

    // `this` isn't immediately referenceable from all functions
    // We're binding it to that function manually
    this.counter = this.counter.bind(this);
  }

  counter() {
    // We can't set state with a previous state so you'd have to temporarily store the previous state
    const currentCount = this.state.count;
    // Set state with the previous state, plus 1
    this.setState({ count: currentCount + 1 });
    // Note that we couldn't say this.state.count = this.state.count+1
    // That would cause all sorts of issues
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.counter}>Click me</button>
      </div>
    );
  }
}

```

### (Old) Functional Components:
- The code looks (syntax wise) and acts like a traditional function
- Produces JSX to show content to the user
- We cannot manipulate state and therefore can't do the count example
- This component is simple but immutable and wouldnt be often-manipulated as the whole component would have to re-render
```js
import React from 'react';

export default function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### (New) Hooks: 
- These are Functional Components
  - Looks (syntax wise) and acts like a traditional function
  - Produces JSX to show content to the user
  - Can use Hooks to run code at specific points in time, like Lifecycle Methods
  - Can use Hooks to access the state system to update UI
  - Can still recieve props
  - The following example is IDENTITAL to the `class` example but MUCH simpler. This is one of the reasons that `Hooks` are now more common
```js
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
    
## So which one should we use / learn?
- Companies with established projects have Class-based components (older)
- Companies with newer projects are likely heavily utilizing Hooks/ Function-based components
- YOU NEED TO KNOW BOTH. Ideally you want to learn Class Components first, THEN functional components with the hooks system and become a pro on Hooks. 
- Think `var` vs `let` and `const`. You can use `var` but you're not a pro on it. However you know `let` and `const` inside out!

***Practice (30 min):***
- Take a few minutes to create 3 new components
- One functional component that displays your name - to be displayed on a child component on the page (hint: use props)
- One class component that has the user input their favorite color
- One Hooks component that displays the users favorite season through an input field
- The instructor should help with creating the barebones of the component and it's syntax to get something showing in the App.js
- HINT: if you don't know how to use an input field in React, head to Google!

# State
What is it?
- Data that is stored in a component and that can change over time
- State is similar to props, but is meant to be changed within the component itself
- Setting up and modifying state is not as straightforward as it is with props. It requires multiple methods (lifecycle methods, or hooks) that are explicitly mutating the data and then defining methods to define how to update our state.
- Note: Whenever you invoke this.setState() you are telling React to re-render that component.

# Lifecycle methods
What are they? (A classic interview question!)
- Lifecycle methods are custom functionality that gets executed during the different phases of a component. There are methods available when the component gets created and inserted into the DOM (mounting), when the component updates, and when the component gets unmounted or removed from the DOM.

> There are 3 main phases to a components lifecycle, and each phase gives us the opportunity to run code using
  the 'Lifecycle Methods' that run at certain points during those phases.

- What are the 3 main phases?
  - MOUNTING
    - constructor()
      - This where you can define your initial state object
    - render()
    - componentDidMount()
      - This is where you usually want to make any initial network requests 
  - UPDATING
    - render() 
      - this runs after an update - ie. when you use setState()
      - componentDidUpdate()
  - UNMOUNTING
    - componentWillUnmount()
      - this is where you want clean up network requests.

<img alt='Link to lifecycle methods diagram:' src='https://miro.medium.com/max/1400/1*hSO--5BPT1K_YK6VqRy4vg.png' />

Read more [here](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
  

Modern Hook React Components utilize `useEffect`, we first need to discuss Hooks and then circle back to `useEffect`

# Hooks
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

We had our example hook component above:
```js
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## Why do hooks exist?
- We've grabbed some highlights from the [React Documentation Hooks Intro](https://reactjs.org/docs/hooks-intro.html)
>Hooks solve a wide variety of seemingly unconnected problems in React. Whether you’re learning React, use it daily, or are just getting started Hooks should reduce future problems.
### It’s hard to reuse stateful logic between components
- Previously to do this you'd end up in a "wrapper hell" of components surrounded by layers of providers, consumers, higher-order components, render props, and other abstractions.
  - Yes it is as annoying and complex as it sounds
### Hooks let you split one component into smaller functions based on what pieces are related
- You're no longer tied to the lifecycle methods and are instead able to tie related information together
### Classes confuse both people and machines
-  You have to understand how `this` works in JavaScript, which can be confusing. 

## State management
- State is often many items, so what does it look like to have multiple items in state
- The array destructuring syntax lets us give different names to the state variables we declared by calling useState.
```js
function ExampleWithManyStates() {
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
}
```
- Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes.
- React provides a few built-in Hooks like useState. You can also create your own Hooks to reuse stateful behavior between different components. We’ll just look at the built-in Hooks.

## UseEffect
The Effect Hook, useEffect, adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.
- The following example updates uses the previous example to update the document when the count changes
```js
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
> When you call useEffect, you’re telling React to run your “effect” function after flushing changes to the DOM. Effects are declared inside the component so they have access to its props and state. 
### Hook rules:
Hooks are JavaScript functions, but they impose two additional rules:
- Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions. (This will throw an error)
- Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions.

***Let's Practice***
- Re-write the prior example to allow for increasing or decreasing a <strike>count</strike> score


# Funny Note & Tangent:
Dan Abramov
- An employee on the React team at Facebook and the guy who likely wrote the [Hooks content](https://reactjs.org/docs/hooks-intro.html) and wrote a widely used package for global state management ([Redux](https://www.npmjs.com/package/redux))
- [Couldn't properly center a div in a live coding interview](https://www.youtube.com/watch?v=XEt09iK8IXs&t=660s)
- Take aways from this can be a couple things:
  - [Coding interviews are broken](https://www.youtube.com/watch?v=bx3--22D4E4), you'll need to do several to: 
    1. Do well
    2. Ensure the hiring team (all steps) are having good days
    3. Be a match with the company 
  - If you can [Google it](https://www.w3schools.com/css/css_align.asp) it shouldn't be an interview question. This isn't in your control and you shouldn't comment on it but the best companies don't have interview questions you can Google the answer to. 
  - There is SO much information that nobody could possibly remember it all
  - You need to show your 'future potential' based on what you have done. Having a strong portfolio does this. 