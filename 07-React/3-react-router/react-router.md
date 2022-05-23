![Nebula Academy](https://nebulaacademy.com/static/media/NebulaAcademyLogoNextToTitle.7d951a1b.png)

# React-Router
## What is Routing?
Routing is the logic / process that returns data given a URL path. So when you visit a URL, what your computer recieves after communicating with a server might be HTML, a JSON response in an API, an images etc...

## Server-Side routing
- Traditionally, all of this routing happened on the server - when moving from page to page on a website, your browser would be requesting a new URL with each page change and in turn would receive a new HTML document - this is referred to as "Server-Side Routing".
>Ex: When hitting a URL : www.nebulaacademy.com/ -> this is what you might call a home route and what gets rendered is the Home page.

> When hitting that same URL with a different route www.nebulaacademy.com/staff -> this would return details about the staff...

Client-Side routing
- Introducing REACT ROUTER!!! A library / package that was made for react for client side routing.
- When routing is handled in the browser, we navigate from page to page, but our browser does not send out new HTTP requests. Instead,
is we are updating the URL in our browser and rendering content depending on what that URL is.
- One major benefit of client-side routing is that you can maintain your state from page to page. AKA from one render to another with client-side rendering.

- React Router is a package that allows us to change the URL, making it look like the user is visiting different pages when in reality the browser is being told what to render - keeping track of what components should be rendered when you visit a URL with a route.

## HOW TO USE REACT ROUTER
In your project directory, run this command in the terminal: 
- `npm i react-router-dom`
- Use documentation whenever you can
  - https://reactrouter.com/web/guides/quick-start

### Componentes we'll be using
  - BrowserRouter, Route, Link

BrowserRouter:
  - This component provides React-Router functionality to all the components within it's scope (it acts as the parent)
  - You need to put this at the top of your component tree so it can communicate with other React Router components

Link:
  - This is pretty self-explanatory - we use this with react-router in order to change the URL in our browser, activating your Route components which in turn renders certain UI based on the URL.

Route:
  - From the docs: "The Route component is perhaps the most important component in React Router to understand and learn to use well. Its most basic responsibility is to render some UI when a location matches the route’s path."



***Let's Practice***
- Follow along with your instructor to create a basic portfolio website
- It will have
- a NavBar
- a Landing/Home Page
- an About Me page
- a Projects page
- a Resume page
- a Contact page