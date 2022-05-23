# FLEXBOX

## learning objectives:
- What `flexbox` is and why it's important
- Understand how to utilize `flexbox` & it's major features
### What is flexbox?
> The Flexbox Layout (Flexible Box) module (a W3C Candidate Recommendation as of October 2017) aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word “flex”).

### Why flexbox?
> Shortly after HTML was created as a document-oriented language, CSS naturally followed in order to add flair / style / more defined visual features for HTML. One of the ideas behind CSS was to not allow it to clutter the semantic value of HTML. CSS attempted goal was to normalize styling across browsers - that didn't work out 100% unfortunately and still remains probably one of the more frustrating parts of web development.

<b>Items will be laid out following either the main axis (from main-start to main-end) or the cross axis (from cross-start to cross-end).</b>
- main axis – The main axis of a flex container is the primary axis along which flex items are laid out. Beware, it is not necessarily horizontal; it depends on the flex-direction property (see below).
- main-start | main-end – The flex items are placed within the container starting from main-start and going to main-end.
- main size – A flex item’s width or height, whichever is in the main dimension, is the item’s main size. The flex item’s main size property is either the ‘width’ or ‘height’ property, whichever is in the main dimension.
- cross axis – The axis perpendicular to the main axis is called the cross axis. Its direction depends on the main axis direction.
- cross-start | cross-end – Flex lines are filled with items and placed into the container starting on the cross-start side of the flex container and going toward the cross-end side.
- cross size – The width or height of a flex item, whichever is in the cross dimension, is the item’s cross size. The cross size property is whichever of ‘width’ or ‘height’ that is in the cross dimension.
    
Use this website to check browser compatability: https://caniuse.com

Flexbox came into existence to help with some of the shortcomings of CSS allowing for a easier and more versatile way of creating a website layout.

## Container properties:

## display
> This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.
```css
.container {
  display: flex; /* or inline-flex */
}
```

## flex-direction
> This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.
```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```
- row (default): left to right in ltr; right to left in rtl
- row-reverse: right to left in ltr; left to right in rtl
- column: same as row but top to bottom
- column-reverse: same as row-reverse but bottom to top
## flex-wrap
> By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.
```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```
- nowrap (default): all flex items will be on one line
- wrap: flex items will wrap onto multiple lines, from top to bottom.
- wrap-reverse: flex items will wrap onto multiple lines from bottom to top.
## flex-flow
> This is a shorthand for the flex-direction and flex-wrap properties, which together define the flex container’s main and cross axes. The default value is row nowrap.
```css
.container {
  flex-flow: column wrap;
}
```

## justify-content:
> This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.
```css
.container {
    justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right | safe | unsafe;
}
```
- flex-start (default): items are packed toward the start of the flex-direction.
- flex-end: items are packed toward the end of the flex-direction.
- start: items are packed toward the start of the writing-mode direction.
- end: items are packed toward the end of the writing-mode direction.
- left: items are packed toward left edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like start.
- right: items are packed toward right edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like end.
- center: items are centered along the line
- space-between: items are evenly distributed in the line; first item is on the start line, last item on the end line
- space-around: items are evenly distributed in the line with equal space around them. Note that visually the spaces aren’t equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.
- space-evenly: items are distributed so that the spacing between any two items (and the space to the edges) is equal.
## align-items
```css
.container {
  align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
}
```
- stretch (default): stretch to fill the container (still respect min-width/max-width)
- flex-start / start / self-start: items are placed at the start of the cross axis. The difference between these is subtle, and is about respecting the flex-direction rules or the writing-mode rules.
- flex-end / end / self-end: items are placed at the end of the cross axis. The difference again is subtle and is about respecting flex-direction rules vs. writing-mode rules.
- center: items are centered in the cross-axis
- baseline: items are aligned such as their baselines align
## align-content
> ```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;
}
```
- normal (default): items are packed in their default position as if no value was set.
- flex-start / start: items packed to the start of the container. The (more supported) flex-start honors the flex-direction while start honors the writing-mode direction.
- flex-end / end: items packed to the end of the container. The (more support) flex-end honors the flex-direction while end honors the writing-mode direction.
- center: items centered in the container
- space-between: items evenly distributed; the first line is at the start of the container while the last one is at the end
- space-around: items evenly distributed with equal space around each line
- space-evenly: items are evenly distributed with equal space around them
- stretch: lines stretch to take up the remaining space
## Child Properties:
```css
.container {
  display: flex; /* or inline-flex */
}
```
## order
> By default, flex items are laid out in the source order. However, the order property controls the order in which they appear in the flex container.


```css
.container {
  display: flex; /* or inline-flex */
}
```
## flex-grow
> This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.

>If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, the remaining space would take up twice as much space as the others (or it will try to, at least).
```css
.container {
  display: flex; /* or inline-flex */
}
```
## flex-shrink
```css
This defines the ability for a flex item to shrink if necessary.
.container {
  display: flex; /* or inline-flex */
}
```
## flex-basis
> This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means “look at my width or height property” (which was temporarily done by the main-size keyword until deprecated). The content keyword means “size it based on the item’s content” – this keyword isn’t well supported yet, so it’s hard to test and harder to know what its brethren max-content, min-content, and fit-content do.
```css
.container {
  display: flex; /* or inline-flex */
}
```
## flex
> This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. The default is 0 1 auto, but if you set it with a single number value, it’s like 1 0.
```css
.container {
  display: flex; /* or inline-flex */
}
```
## align-self
> This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.

```css
.container {
  display: flex; /* or inline-flex */
}
```



Vertical alignment
Hmmm... how do we align an element vertically & horizontally? (This is a very common problem).


Other things solved with flexbox:
    https://philipwalton.github.io/solved-by-flexbox/
