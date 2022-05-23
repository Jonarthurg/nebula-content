![Nebula Academy](https://nebulaacademy.com/static/media/NebulaAcademyLogoNextToTitle.7d951a1b.png)

# What Is HTML?

- It stands for Hypertext Markup Language.
- It is the standard markup language for creating web pages (it's a computer language...).
    - We use it to define the initial structure of a web page - the organization and format.
    - Think of it like the skeletal structure of an animal - (CSS would be the skin, JavaScript would be the brain).
- The "Hypertext" refers to the fact that it can link to other documents on the web.
- The "Markup" refers to the method by which text, images, video and other content is annotated to then be 
    displayed.

> So HTML is a markup language... How is it different from a scripting / programming language? [Read here](https://www.geeksforgeeks.org/difference-between-programming-scripting-and-markup-languages/)
- Markup languages define the structure of the data - it's presentational and can't really include any logic.

History of the Internet:

- The early history of the World Wide Web is a bit cloudy, but it goes something like this:
    The year is 1990. The place is a particle physics facility in a suburb of Geneva, Switzerland.
    A physicist, Tim Berners-Lee, is feeling disgruntled. He’s tired of logging on to so many different 
    computers to get the information he needs.

- There has to be a better way!

- “What if I came up with a computer language that would allow people to alter text so that it could be sent over a network? Then any computer connected to that network could interpret the text and make it readable for the user. Now that would be something!”

- Berners-Lee came up with a brief set of text tags that computers could interpret, send over a network, and render into readable form... and HTML, or Hypertext Markup Language, was born.

- The language is so easy to learn and use that it flourished. More people got involved; more tags were created and added. HTML was here to stay.

- But HTML's capabilities were limited, and people wanted this new World Wide Web to be sexy and cool. As a result, other languages were created and paired with HTML; languages that enabled styling and automation, animation, and interactivity.

- The web and its primary authoring tool, HTML, will continue to evolve and improve. And despite these ongoing changes, HTML is still a simple, text-based computer language that, with a little practice, anyone can learn.



HTML Structure
You generally want to start writing an web page using an HTML boilerplate:
``` html
<!doctype html>
<html>                                                      
    <head>                                              
        <title>A Very Cool Website</title>
    </head>

    <body>
        
    </body>
</html>
```
Big note: Look at the hiearchy! You want to think parent element, sibling element, child element.

Line by line breakdown

The `Doctype` tag:
```html 
    <!doctype html>
```

- You always begin an HTML5 doctype tag.
- You don't need a closing tag.
- This tag lets your web browser known that the document it's dealing with is HTML

The `html` tag:
```html
<html>
    ...
</html>
``` 

- This tells the brower "everything within this tag (opening tag: `<html>`    closing tag: `</html>`) will be part of my HTML document". The `<html>` tag is known as the root element - all other elements must be descendants.

The `head` tag:
```html
<head>
    ...
</head>
```
- This contains metadata and most other "under-the-hood" things that helps to identify the webpage - allowing it to show up in search results. You'll notice that these are indented inside the <html> tag - we want to make we adhere to a hierarchy of indentation, much like when writing JavaScript. This will really REALLY help with readability. Please remember this!
- Metadata for styles and scripts can be defined / linked here. Style sheets are more often than linked from here.

The `body` tag:
```html
<body>
    ...
</body>
```
- This is where most, if not all of your visible content will live. It defines the document's body. Anything in between should be ready to be seen in the main browser window.



Breaking down an element
```html
    <p>some text</p>
```

- Opening tag = `<p>`
- Content = what will show on the page
- Closing tag = `</p>`

- The above is a `paragraph tag`. The `p` in the middle of the angle brackets help indicate the name.
    - You have an opening and closing angle bracket that surrounds the p.
- A closing tag has a slash `/` right before the name of the tag -> `</p>`
- Tags act like containers - they tell you something about the information between their opening / closing.

- Note: In order to make code easier to read, web page authors often add extra spaces as needed

## Most Common Tags:
- `<!doctype html>`
- `<html></html>`
- `<head></head>`
- `<body></body>`
- `<p></p>`


## ***Anchor tag***
>`<a></a>`<br>
These are used for hyperlinks. VERY big deal. These make up the the Web in the World Wide Web. This is how we can navigate around the web, link to other pages etc.<br>
Anchor tag example: `<a href="https://www.w3schools.com/html/html5_semantic_elements.asp">Click Here</a>` <br>
Which renders to: <a href="https://www.w3schools.com/html/html5_semantic_elements.asp">Click Here</a><br>

## ***Iframe Tag***
> `<iframe></iframe>` <br>
An HTML iframe is used to display a web page within a web page. <br>
Iframe tag example:
```html
<iframe src="https://www.w3schools.com/html/html_iframe.asp" height="200" width="300" title="Iframe Example"></iframe>
```
> Which renders to: <iframe src="https://www.w3schools.com/html/html_iframe.asp" height="200" width="300" title="Iframe Example"></iframe>
> * This doesnt work because we are rendering the iframe within markdown - not within HTML right now. By default Markdown accepts almost all HTML - but not iframes because of potential security threats.
<hr/>

## ***Break Tag***
> `<br></br>` or `<br/>` <br>
A `br` tag inserts a single line break in a text <br>
`br` tag example:
```html
<p>This is some text</p>
<br/>
<p>This is some secondary text</p>
```
>Which renders to: <p>This is some text</p><br/><p>This is some secondary text</p>
<hr/>

## ***Header Tags h1 -> h6***
> `<h1></h1>` <br>
An header tag is used to display a heading <br>
header tag example:
```html
<h1>This is a header</h1>
<h2>This is a subheader</h2>
<p>The line between the header and subheader is generated by Markdown, and would not appear in HTML</p>
```
    
>Which renders to: 
><h1>This is a header</h1>
><h2>This is a subheader</h2>
><p>The line between the header and subheader is generated by Markdown, and would not appear in HTML</p>
<hr/>


## ***ul Tags & li Tags***
> `<ul><li></li></ul>` <br>
A `ul` tag is used to make an unordered list  <br>
A `li` tag is used to make a list item  <br>
ul/li tag example:
```html
<ul>
    <li>This is a list item</li>
    <li>This is another list item</li>
<ul>
```
> Which renders to: 
> <h1>This is a header</h1>
<hr/>

## ***img*** Tags
> `<img src=''/>` <br/>
> An `img` tag is utilized to show an image to the the webpage <br/>
```html
<img src='https://m.media-amazon.com/images/I/61irQrNjgnL._AC_SY741_.jpg' height="300px"/>
```
> Renders to: <br/> 
> <img src='https://m.media-amazon.com/images/I/61irQrNjgnL._AC_SY741_.jpg' height="300px"/>

<hr/>

## ***div*** Tags
> `<div></div>` <br/>
> A `div` tag is utilized to divide up your html code. Think of it as a container. <br/>
> A `div` by itself won't show up until it contains some content - here we will style a div to show it's border
```html
<div style='border:1px solid aqua'>Some div</div>
```
> Renders to: <div style='border:1px solid aqua'>Some div</div>

<hr/>

## ***title*** Tags
> `<title></title>`<br/>
> A `title` tag is utilized to give your tab (think browser tab) a title. <br/>
> Nothing to render: There isn't a browser tab to modify <br/>
```html
<title>1-html-overview.md</title>
```
<hr/>

## ***link*** Tags
> `<link />`
```html
<link rel="stylesheet" type="text/css" href="style.css"/>
```
> Nothing to render: It links an external file with the html file
<hr/>

# Attributes
What are HTML attributes?
- They are keywords used inside an opening tag to control the elements behavior / abilities.
- Some HTML attributes are only available for certain tags.

## Using Attributes
How do we add attributes to a tag?
- An example using the anchor tag (a):
```html
<a href="https://www.w3schools.com/html/html5_semantic_elements.asp">Click Here</a>
```
- The format is:
```html
<openingTag attribute="value" attribute2="value2"> content </closingTag>
```
-->

## The href attribute
- Can be used with `<a>`, `<area>`, `<base>` & `<link>` tags.
- Lets just say we use the href attritube on either `<a>` or `<link>` tags.
- The attribute "specifies the URL of the page the link goes to".


## The target attribute
- By default, when you use href and link to a page, that new page will open up in the current window the user is in (after a user clicks on an `<a>` element).
- You give the target attribute a different values to change where to open the linked page (document):
    - _self -> Default. Opens the document in the same window/tab as it was clicked.
    - _blank -> Opens the document in a new window or tab.
    - _parent -> Opens the document in the parent frame.
    - _top -> Opens the document in the full body of the window.


## Common Attributes
List of common attributes seen out in the wild
- class -> can be used on ANY tag - adds a class (used for multiple elements / styling)
- id -> can be used on ANY tag - adds an id (unique / styling)
- alt -> used with an img tag - try to always
- style -> used to add inline CSS to an element.
- rel -> used with the link tag - specifies the relationship betwen current document and linked.
- src -> specifies the URL of the media file.
- href -> species the URL of the page the link goes to.
- name -> specifies the name of the element - used on particular elements
- data-* -> Used to store custom data / private to the page or app
