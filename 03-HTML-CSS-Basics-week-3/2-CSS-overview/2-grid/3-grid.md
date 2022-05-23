
# GRID
## What is grid?         
CSS Grid Layout is a two-dimensional grid-based layout system. CSS has always been used to layout our web pages, but it’s never done a very good job of it. First, we used tables, then floats, positioning and inline-block, but all of these methods were essentially hacks and left out a lot of important functionality. Flexbox is also a very great layout tool, but its one-directional flow has different use cases — and they actually work together quite well. Grid is the very first CSS module created specifically to solve the layout problems we’ve all been hacking our way around for as long as we’ve been making websites.

> Note: As of March 2017 most browsers begain supporting CSS Grid. Some less-maintained browsers haven't kept up with it and don't support the most modern features of CSS Grid. If you ended up working for a company that KNOWS alot of it's users are using outdated technologies you'd want to learn how to develop using older versions of CSS Grid. 

In short, to utilize grid you have to define a container element as a grid with `display: grid`, set the column and row sizes with `grid-template-columns` and `grid-template-rows`, and then place its child elements into the grid. Similarly to flexbox, the source order of the grid items doesn’t matter. Your CSS can place them in any order, which makes it super easy to rearrange your grid with media queries.

An example:
```html
<div class="container">
  <div class="item"></div>  <!-- container decendant -->
  <div class="item">        <!-- container decendant --> 
    <p class="sub-item"> </p>    <!-- item decendant -->
  </div>
  <div class="item"></div>  <!-- container decendant -->
</div>
```
## Grid Properties

- Just like flexbox we need to think about the container and the child. We have access to a set of properties for the parent and a set for the child

Container Properties: 
- ## `display`
```CSS
.container {
  display: grid | inline-grid;
}
```
- ## `grid-template-columns` && `grid-template-rows`
```CSS
.container {
    grid-template-columns: repeat(3, 20px [col-start]);
    grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
}
```
- ## `grid-template-areas`
Defines a grid template by referencing the names of the grid areas which are specified with the grid-area property. Repeating the name of a grid area causes the content to span those cells. A period signifies an empty cell. The syntax itself provides a visualization of the structure of the grid.
```CSS
.container {
  display: grid;
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}
.item-a {
  grid-area: header;
}
.item-b {
  grid-area: main;
}
.item-c {
  grid-area: sidebar;
}
.item-d {
  grid-area: footer;
}
```
- ## `grid-template`
A shorthand for setting grid-template-rows, grid-template-columns, and grid-template-areas in a single declaration.
```CSS
.container {
  grid-template-rows: [row1-start] 25px [row1-end row2-start] 25px [row2-end];
  grid-template-columns: auto 50px auto;
  grid-template-areas: 
    "header header header" 
    "footer footer footer";
}
```
- ## `column-gap` && `row-gap` && `grid-column-gap` && `grid-row-gap`
Specifies the size of the grid lines. You can think of it like setting the width of the gutters between the columns/rows.
```CSS
.container {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px; 
  column-gap: 10px;
  row-gap: 15px;
}
```

- ## `gap` && `grid-gap`
A shorthand for row-gap and column-gap
```css
.container {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px; 
  gap: 15px 10px;
}
```

- ## `justify-items`
Aligns grid items along the inline (row) axis (as opposed to align-items which aligns along the block (column) axis). This value applies to all grid items inside the container.
```css
.container {
  justify-items: start | end | center | stretch;
}
```
This behavior can also be set (and over-ridden) on individual grid items via the justify-self property.

- ## `align-items`
Aligns grid items along the block (column) axis (as opposed to justify-items which aligns along the inline (row) axis). This value applies to all grid items inside the container.

```CSS
.container {
  align-items: start | end | center | stretch;
}
```
This behavior can also be set and over-ridden on individual grid items via the align-self property.
- ## `place-items`
place-items sets both the align-items and justify-items properties in a single declaration.
```CSS
.center {
  display: grid;
  place-items: center;
  /* <align-items> / <justify-items> – The first value sets align-items, the second value justify-items. If the second value is omitted, the first value is assigned to both properties */
}
```
- ## `justify-content`
This property aligns the grid along the inline (row) axis (as opposed to align-content which aligns the grid along the block (column) axis).
```CSS
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;    
}
```
- ## `align-content`
This property aligns the grid along the block (column) axis (as opposed to justify-content which aligns the grid along the inline (row) axis).
```CSS
.container {
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;    
}
```
- ## `place-content`
place-content sets both the align-content and justify-content properties in a single declaration.
> `<align-content>` / `<justify-content>` – The first value sets align-content, the second value justify-content.
- ## `grid-auto-columns`
- ## `grid-auto-rows`
- ## `grid-auto-flow`
- ## `grid`

Item Properties:
- ## `grid-column-start`
- ## `grid-column-end`
- ## `grid-row-start`
- ## `grid-row-end`
- ## `grid-column`
- ## `grid-row`
- ## `grid-area`
- ## `justify-self`
- ## `align-self`
- ## `place-self`