# ToDo App
A portfolio is paramount to success in the interview loop. A portfolio is utilized to showcase your skills all in one place.
> In this tutorial we will put together a basic portfolio. You can customize or update and utilize it as your own or use it as a lesson for building your own completely different portfolio. 

>Throughout this exercise there will be instructions and then an example of what to do. Try and follow the instructions before looking at the example, this will ensure you truly understand what is being done. 

# 0. Create React App
run: `npx create-react-app portfolio`

cd: `portfolio`

Once completed, run: `npm start`

# 1 Lay the foundation by cleaning up and creating files:
> ## 1.0 In `src` Delete:
- setupTests
- logo
- app.test.js
- index.css 

> ## 1.1 Clean up App.js
  - Delete the logo import
  - Delete the header and all it's contents and replace it with a `<h1>Portfolio</h1>`
  
  Our `App.js` should now look like this
  ```js
    import './App.css';

    function App() {
      return (
        <div className="App">
          <h1>Portfolio</h1>
        </div>
      );
    }

    export default App;
  ```
> ## 1.2 Clean up index.js
- Delete the index.css import
> ## 1.3 Clean up App.css
- Delete everything within this file

> ## 1.4 Create components
1. Right Click `src`
2. Create a folder called `components`
2. Create a folder called `Assets`
4. Right click `components`
  - Create the following folder structure:
  - components
    - About
      - About.js
      - About.css
    - Contact
      - Contact.js
      - Contact.css
    - LandingPage
      - LandingPage.js
      - LandingPage.css
    - NavBar
      - NavBar.js
      - NavBar.css
    - PriorExperience
      - PriorExperience.js
      - PriorExperience.css
    - Projects
      - Projects.js
      - Projects.css

> ## 1.5 Update App.js
In `App.js` import the prior js files

```js
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import Portfolio from './components/Portfolio/Portfolio';
import About from  './components/About/About';
import PriorExpereince from  './components/PriorExpereince/PriorExpereince';
import Contact from  './components/Contact/Contact';

function App(){
  return(
    <div className='App'>
      <NavBar />
      <div className='container'>
        <LandingPage />
        <About />
        <Portfolio/>
        <PriorExpereince/>
        <Contact/>
      </div>
    </div>
  )
}

export default App;
```

Our app should currently be broken as we are importing from files that dont export anything. 

Lets fix this.

> ## 1.6 Update Each individual component
In each file create a generic component that exports itself with a `h1` describing itself. Each item will need to have some similar styling - I want mine to each take up a full page. Therefore we'll assign them all the same classNames

Ex:
  About:
  ```js
  import React from 'react';

  export default function About(){
    return <div className='page'>About</div>
  }
  ```
  Contact:
  ```js
  import React from 'react';

  export default function Contact(){
    return <div className='page'>Contact</div>
  }
  ```
  LandingPage:
  ```js
  import React from 'react';

  export default function LandingPage(){
    return <div className='page'>LandingPage</div>
  }
  ```
  NavBar:
  ```js
  import React from 'react';

  export default function NavBar(){
    return <div className='page'>NavBar</div>
  }
  ```
  Portfolio:
  ```js
  import React from 'react';

  export default function Portfolio(){
    return <div className='page'>Portfolio</div>
  }
  ```
  PriorExperience:
  ```js
  import React from 'react';

  export default function PriorExperience(){
    return <div className='page'>PriorExperience</div>
  }
  ```

  Our websites should now be showing some text displaying 
  ## NavBar
  ## LandingPage
  ## About
  ## Portfolio
  ## PriorExperience
  ## Contact

  > ## 1.7 Minor Styling 
  Before creating our NavBar let's add a little styling to `page` and `container` so that we can visually see each component a little better
  Let's create our NavBars

  In `app.css` add the following:
  ```css
  * {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif
  }

  body{
    background-color: #222222;
    color: white;
    font-family: helvetica;
  }

  .container{
    border: 3px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
  }
  .page{
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid purple;
    width: 100%;
  }
```
This will outline the container and each component (scroll to see each one). We also center the pages 

# 2 Navbar
  > ## 2.0 Desktop view
  Let's update our NavBar to include a logo and some nav-text
  ```js
  import React from 'react';

  export default function NavBar(){
    return (
      <nav className='navBar'>
        <div className='navLogo'>Logo</div>
        <div className='navBarText'>
          <ul>
            <li>
              Landing Page
            </li>
            <li>
              About
            </li>
            <li>
              Portfolio
            </li>
            <li>
              Prior Experience
            </li>
            <li>
              Contact
            </li>
          </ul>

        </div>
      </nav>
    )
  }
  ```
  - Let's head back to the `App.css` and give our NavBar some styling to align the text and logo across the navbar. Also let's make our NavBar stick to the top of the screen.
  ```css

  .navBar{
    position: fixed;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    box-shadow: 0 5px 20px -15px black;
    backdrop-filter: blur(10px); 
    margin-bottom: 20px;
    height: 90px;
  }

  .navBar ul{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    list-style-type: none;
    margin-right: 20px;
  }

  .navBarLi{
    margin: 5px 20px;
    cursor: pointer;
  }

  .navLogo{
    margin-left: 40px;
  }
  ```

# 3 Scrolling:
Next let's put together some scrolling functionality. We're going to utilize `react-scroll` here. 

> run `npm i react-scroll`

Let's now import this module into our navbar

After importing let's update the `li` items each to be a `Link`. This is the way that `react-scroll` works in combination with `to` and `smooth` (smooth is preferential)
Each `li` should now look like this:
```js
<Link className='navBarLi' to='landingPage' smooth={true}>
  Landing Page
</Link>
```
Let's be sure to update the CSS in `App.css` so that the `li` styling works, convert our `li` targeter to the following `.navBarLi` element target:
```css
.navBarLi{
  margin-right: 40px;
  cursor: pointer;
}
```

In `NavBar.js` we should now have the following: 
```js
import React from 'react';
import { Link } from "react-scroll";

export default function NavBar(){
  return (
    <nav className='navBar'>
      <Link className='navLogo navBarLi' to='landingPage' smooth={true}>Logo</Link>
      <div className='navBarText'>
        <ul>
          <Link className='navBarLi' to='landingPage' smooth={true}>
            Landing Page
          </Link>
          <Link className='navBarLi' to='about' smooth={true}>
            About
          </Link>
          <Link className='navBarLi' to='portfolio' smooth={true}>
            Portfolio
          </Link>
          <Link className='navBarLi' to='priorExperience' smooth={true}> 
            Prior Experience
          </Link>
          <Link className='navBarLi' to='contact' smooth={true}>
            Contact
          </Link>
          <Link className='navBarLi'>
            Resume
          </Link>
        </ul>

      </div>
    </nav>
  )
}
```
Notice that we also did logo. People often expect to click the logo and return back to the home page. 

Each item that needs to be scrolled to also needs to have an `id` to be properly identified. 

Head to their respective components & add an id. They should now look like the following with their respective names: 
```js
export default function About(){
  return <div className='page' id='about'>About</div>
}
```

Let's now update our resume to link towards a google doc (for now I have the resume template here)

Lastly let's remove our `border styling` which outlines our body & container. 

```js
<a className='navBarLi resume' target='_blank' href='https://docs.google.com/document/d/1k7qVUuoE1_k2VHOObTzjq3KAvE3w9DsoCyovAu-NLd8/edit?usp=sharing'>
  Resume
</a>
```

Default links look awful. Let's give this some styling:
```css
.resume{
  color: inherit;
  text-decoration: none;
}

.resume:hover{
  text-decoration: underline;
}
```

Lastly let's update our logo:

In `NavBar.js` let's update our logo. You'll need to design or pick your own logo. You also could just leave it as text (maybe your name?), but for now click the following link and download the [logo](https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) to use as a placeholder.

Add that to your Assets folder 

In `App.css` let's add the following styles:
```css
.logo{
  max-width: 75px;
}
```

You now have the functionality setup for your website! There are some updates you may want to implement but this is a very minimalist style that has shown good results for prior students

# 4 Mobile View
  If you were to shrink your portfolio App you'll quickly see that the navbar doesn't act as desired.
  
  We need to make it responsive:
  - Flexbox already handles the compression pixel by pixel, but what happens once there isnt enough room for the logo & text? We need to swap to a hamburger icon
  ## 4.0 Icons 
  Let's import react-icons to utilize a hamburger icon
  - run: `npm i react-icons --save`
  - We don't want to heavily influence your design ideas so we're going to click to copy the code for something basic like `AiOutlineMenu` from [react-icons](https://react-icons.github.io/react-icons/search?q=menu)
  - Now to implement this - we're just following the instructions associated with the Ai icons on react-icons, [Ant Design AKA Ai](https://react-icons.github.io/react-icons/icons?name=ai)
  
  Head to the NavBar component, comment out everything that is to the right of the NavBar: we dont need that on mobile. Duplicate it and delete what was commented out in the duplicate (see below). We're only commenting it out for now so we can manually (with code) swap between desktop and mobile views. 

  Steps inside NavBar.js:
  - Import the icon: 
  ```js
  import { AiOutlineMenu } from "react-icons/ai";
  ```
  - Comment out and duplicate the right side NavBar
  - We should now see something like this:
  ```js
  export default function NavBar(){
    return (
      <nav className='navBar'>
        <Link className='navLogo navBarLi' to='landingPage' smooth={true}>
          <img className='logo' src={logo}></img>
        </Link>
        {/* <div className='navBarText'>
          <ul>
            <Link className='navBarLi' to='landingPage' smooth={true}>
              Landing Page
            </Link>
            <Link className='navBarLi' to='about' smooth={true}>
              About
            </Link>
            <Link className='navBarLi' to='portfolio' smooth={true}>
              Portfolio
            </Link>
            <Link className='navBarLi' to='priorExperience' smooth={true}> 
              Prior Experience
            </Link>
            <Link className='navBarLi' to='contact' smooth={true}>
              Contact
            </Link>
            <a className='navBarLi resume' target='_blank' href='https://docs.google.com/document/d/1k7qVUuoE1_k2VHOObTzjq3KAvE3w9DsoCyovAu-NLd8/edit?usp=sharing'>
              Resume
            </a>
          </ul>

        </div> */}
        <div className='navHamburger'>
          <AiOutlineMenu />
        </div>
      </nav>
    )
  }
  ```

  The styling is off and we'd like some animation when the icon is hovered. Specifically it should swap to a new icon when hovered. Lets pick a new icon for when it's hovered and add those lines:
  - Import new Icon:
  ```js
  import {AiOutlineMenu, AiOutlineMenuUnfold} from "react-icons/ai";
  ```
  - Import useState
  ```js
  import React, { useState } from 'react';
  ```
  - Add a hook to respond to hover or a tap/click
  ```js
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
  ```

  On the Icon let's trigger these hooks & swap between the icons based on hovered or not using a ternary
  ```js
  <div className='navHamburger' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
    {hover ? <AiOutlineMenuUnfold/> : <AiOutlineMenu/>}
  </div>
  ```

  Looks good! Let's comment everything back in and head to our CSS to swap between mobile and non-mobile, while we're there we can make some changes to make our hamburger look a little nicer 

  ## 4.1 Swapping between desktop and mobile
  In your CSS file - (for now we're using `App.css` but I'd recommend eventually having a `css` file next to each `js` file) - add some spacing to the right of the hamburger, make the svg a little larger, create a pointer when hovering, and make a media query for when we should swap to the hamburger
  ```css
  .navHamburger{
    margin-right: 40px;
    cursor: pointer;
    font-size: 35px;
  }

  @media (max-width: 850px){
    .navBarText{
      display: none;
    }

    .navHamburger{
      display: flex;
    }

    .hamburgerText{
      display: flex;
    }
  }
  ```
  > ## 4.2 Data under dropdown
  The hamburger is looking good! Let's make sure it's functional, resize the screen and make sure it swaps properly. It should be working well. Now let's ensure we can click it and show the required information
  
  Head back to `NavBar.js` and copy the unordered list, this should render under the hamburger if click is true:

  Using a ternary we can do this quite simply:
  ```js
  <div 
        className='navHamburger' 
        onMouseEnter={() => setHover(true)} 
        onMouseLeave={() => setHover(false)} 
        className='navHamburger' onClick={() => setClick(!click)}>
        {!hover && !click ? <AiOutlineMenu /> : <AiOutlineMenuUnfold />}
      </div>
    </nav>
    {click ? <ul className='hamburgerText'>
      <Link className='navBarLi' onClick={() => setClick(!click)} to='landingPage' smooth={true}>
        Landing Page
      </Link>
      <Link className='navBarLi' onClick={() => setClick(!click)} to='about' smooth={true}>
        About
      </Link>
      <Link className='navBarLi' onClick={() => setClick(!click)} to='portfolio' smooth={true}>
        Portfolio
      </Link>
      <Link className='navBarLi' onClick={() => setClick(!click)} to='priorExperience' smooth={true}> 
        Prior Experience
      </Link>
      <Link className='navBarLi' onClick={() => setClick(!click)} to='contact' smooth={true}>
        Contact
      </Link>
      <a className='navBarLi resume' target='_blank' href='https://docs.google.com/document/d/1k7qVUuoE1_k2VHOObTzjq3KAvE3w9DsoCyovAu-NLd8/edit?usp=sharing'>
        Resume
      </a>
    </ul> : null}
  ```
  Two items to note:
    1. Ensure you've added the `hamburgerText` className to your `ul`. Without it we will run into cascade issues with CSS
    2. Our ul falls outside the encapsulating NavBar. This is because we want this element to be `fixed` relative to the app. Therefore you'll get an error such as: `Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?`
      - Therefore we wrap everything inside the return() in an opening tag `<>` and closing tag `</>`.

  It's working but showing up in the navbar, let's head back to our CSS to style it

  I want it to cover the whole page in a black faded out box with the unordered list showing down the page
  ```css
  .hamburgerText{
    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    font-size: 35px;
    position: fixed;
    top: 0;
    left: 0;
    
    background-color: rgba(34, 34, 34, .9);
    width: 100vw;
    height: 100vh;
  }
  ```

  If we click an option it should scroll but also remove the navbar. Update your hamburger links to trigger the click function.
  ```js
   <Link className='navBarLi' onClick={() => setClick(!click)} to='portfolio' smooth={true}>
      Portfolio
  </Link>
  ```
  Great, lastly we'd like our icon and logo to show even if this hamburger menu has been triggered:
  ```css
  .navHamburger svg, .navLogo{
    z-index: 100;
  }
  ```

  Note: whenever we hover the open dropdown the logo swaps to the second logo, this is not a desired behaviour. This can be fixed by adding a little additional logic to our ternary; if our logo is not hovered and not clicked then render the usual, otherwise swap to the dropdown icon. 
  ```js
  {!hover && !click ? <AiOutlineMenu /> : <AiOutlineMenuUnfold />}
  ```

  One last pass lets me see that it's not too obvious which item we are going to select, so let's add some hover logic to each list item
  
  You can add the bullet for a hovered item or maybe a text color or maybe something else. Try to keep it simple but enjoyable for the UX
  ```css
  .navBar .navBarLi:hover{
    color: #cccccc;
  }
  ```
  
  
  > ## 4.3 Improved Transition
  Lastly we want to address some transitions, some of the best websites have small, elegant animations. Let's do one with the `NavBar`

  There are several changes we'll need to implement for this to work. There are many ways of completing this but the way we're about to do is to have the `navHamburger` slide out to the right (off screen) when the screen is large and slide in when we're on a mobile screen. We do the inverse for the `navBarText`. 

  When we do this the NavBar will act up if we don't taylor it. Firstly we need to say that anything overflowing off the natural component shouldn't show:
  ```css
    .navBar{
      position: fixed;
      z-index: 100;
      width: 100%;
      overflow: hidden;
      ...
  ```

  Our `NavBar` is going to be a different width than the screen, meaning `flex-box` wont cut it for us for these two elements (navHamburger & navBarText). We'll fix that later on by manually placing the elements where they need to be. 
  
  For now on desktop `navBarText` will need to slide in and the reverse for `navHamburger`. Let's attach these animations and also create their animation timings:
  ```css
  .navBarText{
    animation: slide-in .5s forwards;
    -webkit-animation: slide-in .5s forwards;
  }

  .navHamburger{
    margin-right: 40px;
    cursor: pointer;
    font-size: 35px;
    animation: slide-out .5s forwards;
    -webkit-animation: slide-out .5s forwards;
  }
  ```

  Which leads us to the two animations, `slide-in` and `slide-out`:
  ```css
  @keyframes slide-in {
    0% { transform: translateX(300%); }
    50% { transform: translateX(300%); }
    100% { transform: translateX(0%); }
  }

  @-webkit-keyframes slide-in {
    0% { -webkit-transform: translateX(300%); }
    50% { -webkit-transform: translateX(300%); }
    100% { -webkit-transform: translateX(0%); }
  }


  @keyframes slide-out {
    0% { transform: translateX(0%); }
    100% { transform: translateX(300%); }
  }

  @-webkit-keyframes slide-out {
    0% { -webkit-transform: translateX(0%); }
    100% { -webkit-transform: translateX(300%); }
  }
  ```

  Note: webkit vs non-webkit vs moz & more:
  - There are many conformations on the internet to ensure we don't have to write 'this is for Chrome, this is for Mozilla, this is for Safari, Edge, Brave, Internet Explorer, etc...'. [Keyframes is not one of those things](https://stackoverflow.com/questions/23718399/what-is-the-difference-between-webkit-and-moz)

  If you want this to work on all browsers you need to test it on all browsers and ensure the animation is good-to-go. 
  
  Let's create the reverse of our prior slide-in and slide-out situation within our media query. Also since `flex-box` wont accomdate our needs we're going to have to add some manual styling to `.navHamburger` within the media query and the same to `.navBarText` outside the media query. 
  ```css
  @media (max-width: 850px){
    .navBarText{
      animation: slide-out 0.5s forwards;
      -webkit-animation: slide-out 0.5s forwards;
    }

    .navHamburger{
      display: flex;
      position: absolute; /* since flexbox wont work anymore */
      right: 0px; /* since flexbox wont work anymore */
      animation: slide-in 0.5s forwards;
      -webkit-animation: slide-in 0.5s forwards;
    }  
  }
  ```

  ```css
  .navBarText{
    animation: slide-in .5s forwards;
    -webkit-animation: slide-in .5s forwards;
    position: absolute;   /* since flexbox wont work anymore */
    right: 0px;   /* since flexbox wont work anymore */
  }
  ```

  Note: 
  - We've removed all `display: none;` from within our css as this makes the element IMMEDIATELY dissapear and therefore we cannot create animations. We could have had the text fade out and fade in but we went in a different stylistic direction. 

  Congratulations! You should now have the bare-bones for a portfolio website and can start creating custom cards, uploading your project links, resume and more! 

  If you'd like to read more about animations take a look [here](https://css-tricks.com/almanac/properties/a/animation/),
  If you'd like to read more about animations take a look [here](https://www.w3schools.com/css/css3_animations.asp) and
  If you'd like to read more about animations take a look [here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)