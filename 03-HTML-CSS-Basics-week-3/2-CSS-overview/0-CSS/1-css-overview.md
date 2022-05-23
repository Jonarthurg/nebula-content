![Nebula Academy](https://nebulaacademy.com/static/media/NebulaAcademyLogoNextToTitle.7d951a1b.png)

## Learning Objectives:
- Understand what `CSS` is
- Understand the `box model`
- Understand `block` vs `inline`
- Understand how `positioning` relates to `CSS`

## What is CSS?
- It stands for Cascading Style Sheet
- A  design language for stying web pages & applications
- It describes how HTML elements are to be displayed AKA the styling
- If a web page were similar to an animal the skeletal structure would be the HTML, the brain is JavaScript AND the skin, hair, looks is CSS
- Alongside HTML and JavaScript CSS is a corenerstone of the internet
- Good CSS work of time and effort - overstyling and creating extra complexities can create headaches
- You generally want to store your CSS in an external stylesheet - not in the HTML

What does CSS code look like?
- CSS uses rules that associate with HTML elements
- What does a CSS rule looks like ?
```css
    p {
        font-family: Arial;
    }
```

- The breakdown:
    - `p`                  -> the selector
    - `font-family: Arial` -> a declaration
    - `font-family`        -> a property (like a property on an object in JavaScript)
    - `Arial`              -> a value

- CSS works by associating rules with HTML elements. These rules govern how the content of specified
    elements should be displayed. A CSS rule contains two parts: a selector and a declaration.

<!-- CSS Sizing Units
- pixels, vs EM, vs REM
- REM:
    - a way of setting font-sizes based on the font size of the root HTML element -->

## CSS Selectors
- There are A LOT of selectors to choose from
    - ie. element selector - p <--- selecting just the `<p>` tags
        - element element selector - `div` `p` <-- selecting just the `p` tags that are children of `div` tags
        - element + element selector - `div` + `p` <-- selecting the first `p` tag that is a sibling of `div` tags
        - id selector - selects ONLY the element with the corresponding id attribute
        - class selector - selects ALL the elements with the corresponding class attribute
        - https://www.w3schools.com/cssref/css_selectors.asp

Example: 
- Let's say you have a dark-colored webpage
- It has light text
- However there is an element that you want to have a light background with dark text. There can be many tags on the page that are the same as this element but if we want to manipulate just one we should use `id`. If we want to target and manipulate a smaller group we should utilize `class`.
```html
<h1 id='title'>About me</h1>
<h1 class='sectionHead'>My Favorite Beanie Babies</h1>
<h1 class='sectionHead'>My Favorite Cars</h1>
<h1 class='sectionHead'>My Least Favorite Foods</h1>
```
Take a look at the selector-example in the curriculum
```css
/* setting rules for the entire document */
body{
  background-color: #333333;
  color: #b5b5b5;
  text-align: center;
  font-family: helvetica;
}
/* setting rules for just the headers */
h1{
  background-color: white;
  border-radius: 10px;
  border: 3px solid skyblue;
}
/* setting rules for one specific id */
#title{
  height: 100px;
  line-height: 100px;
  color: purple;
}
/* setting rules for a group of elements that have a class name*/
.sectionHead{
  color: rgb(0, 127, 136);
  margin: 10px 20%
}
```

How CSS rules cascade
- Last Rule -> 
- Be aware that if you have a rule with the same level of specificity as another, the rule that is below it in your stylesheet will take precedence.

- Specificity -> specificity in CSS determines which CSS selector takes precedence.  
    - AKA, you can overwrite styles if you want... check out the starwars resource to see
which selector trumps another. Also, be aware that if you have a rule with the same level of specificity as another, the rule that is below it in your stylesheet will take precedence (Last Rule).

- !important -> this will override any level of specificity -> same rule applies, however if 
the CSS rule is below another !important selector (Last Rule). 


# THE BOX MODEL

- The CSS Box Model - This defines:

        1 -> The flow of your document
        2 -> Block vs Inline elements

- What is the CSS Box Model?
    - ALL HTML elements are boxes - webpages, at a base level, are made from boxes. 
    - Even if you see a circle on a page - it's a circle within a box.

When thinking about the makeup of an element - again, think of the CSS Box Model:
    An element will have (starting from the inside of the element and moving out):

1. Content - The content of the box, where text and images appear.
2. Padding - Clears an area around the content. The padding is transparent.
3. Border - A border that goes around the padding and content.
4. Margin - Clears an area outside the border. The margin is transparent.

5. Note: these are all mallable properties on each element that we can control

What else?
    Aside from having Content, Padding, Border & Margin - all elements have a width & height property.

Lets take a look at each part the box model:

    Margin -> The space around the element. More margin means more space between our element and the elements around it.

When Vertical Worlds Collide
- From: https://css-tricks.com/what-you-should-know-about-collapsing-margins/
- Collapsing margins happen when two vertical margins come in contact with one another. If one margin is greater than the other, then that margin overrides the other, leaving one margin. 

# Block vs Inline
Every HTML element has a default display value, depending on what type of element it is. 

There are two display values: block and inline.

Block Elements
- A block-level element always starts on a new line.
- A block-level element always takes up the full width available (stretches out to the left and right as far as it can).

Inline Elements
- An inline element does not start on a new line.
- An inline element only takes up as much width as necessary.
ALSO NOTE: Each element (AKA Tag) has default styling - there area also default block elements & default inline Elements

# POSITIONING
What is Positioning?
- Position is a property on an element
- You can adjust the value of that property to build up more complex layouts

What values can you use with the positioning property?
- `position: static` - this is the default value of every element.
- `position: relative`
- `position: absolute`
- `position: fixed`
- `position: sticky`

By Default we are unable to adjust the position using left/top/right/bottom properties
```css
    p {
        /* no position declared = position: static */
        /* the following lines have no effect */
        left: 50px;
        top: -20px;
    }
```

Lets break these down:
## Relative:
Doing the below positions the element relative to it's normal position within the flow of the document

```css
    p {
        position: relative;
    }
```
Once we set an element to `relative` (or `absolute`, or `fixed`), we have access to the `top`, `right`, `bottom` & `left` properties of that element. We can then offset the element relative to it's normal position using those properties.

```css
p {
    position: relative;
    left: 50px;
    top: -20px;
}
```

Note: The issue when with using these offsets, is that the rest of the page will treat the element as if it's still in it's original space.

## Absolute:
Note: your absolute(ly) positioned element will be REMOVED FROM THE NORMAL FLOW OF THE PAGE (you can think of it as floating around).

```css
div {
    position: absolute;
}
```
We also have access to the top, right, bottom & left properties when we use position: absolute -> these values will offset our elment relative to that ancestor it's attached itself to.
```css
div {
    position: absolute;
    right: 100px;
    top: -30px;
}
```


## Fixed:
When you do this to an element, you are positioning it relative to the viewport (the browser window). As a consequence, it'll stay in the same place even if the page is scrolled. You also have access to the top, right, bottom & left properties that will affect the positioning accordingly.
```css
div {
    position: fixed;
}
```


## Sticky:
An element with a sticky position switches between relative and fixed - depending on the scroll position. Once it reaches that position (after you define it with top, right, bottom, left) the position will switch from relative to fixed.
```css
div {
    position: sticky;
    top: 0;
}
```
Note: Internet Explorer doesn't support this position - also, with Safari, you have to use a -webkit- prefix:
```css
div.sticky {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
}
```
## Z-Index
What is the z-index of an element?
- It's another property. This property specifies the stack order of an element (like a stack of cards).
- An element that has a bigger z-index is always in front of an element with a lower stack order.

Note: it'll only work on positioned elements, and flex items (elements that are direct children of flex containers -> we'll get into flex box soon).

Lets play the [CSS Diner](https://flukeout.github.io/) game for review!

## 