<!-- Generated from docs/doc-utility-float.html. Keep this file in sync with the HTML documentation. -->

# Float

---

Float utilities control the positioning of elements by allowing them to float to the left, right, or inline start/end of their container. These classes are useful for wrapping text around images, creating magazine-style layouts, or positioning elements within their parent container. Use `float-none` to remove float behavior and return elements to normal document flow.

Responsive: ✅ Yes

lg:classname, md:classname, sm:classname,

max-lg:classname, max-md:classname, max-sm:classname

---

### What it does?

Here are representative examples of these classes:

| Class | Styles |
| --- | --- |
| float-start | float: inline-start |
| float-end | float: inline-end |
| float-right | float: right |
| float-left | float: left |
| float-none | float: none |

### Basic example

        float-left

This text wraps around the floated element on the left side. Float utilities allow elements to be positioned to the side of their container while other content flows around them naturally.

        float-right

This text wraps around the floated element on the right side. This is commonly used for images in articles or sidebar content in layouts.

        float-none

This element has no float applied, so it stays in the normal document flow and takes up the full width available.

```html
<div class="float-left bg-primary text-white p-3 mr-3">
  float-left
</div>
<p>This text wraps around the floated element...</p>

<div class="float-right bg-green text-white p-3 ml-3">
  float-right
</div>
<p>This text wraps around the floated element...</p>

<div class="float-none bg-orange p-3">
  float-none
</div>
<p>This element has no float applied...</p>
```

### Examples with responsive classes

Float utilities support responsive breakpoint prefixes, enabling you to control element positioning based on screen size. Use classes like `lg:float-right` to float elements only on large screens, or `max-sm:float-none` to remove floating on small devices. This is particularly useful for responsive layouts where images should float on desktop but stack normally on mobile devices.

        float-none md:float-left

On mobile, this element doesn't float and appears as a block. On medium screens and above, it floats to the left with text wrapping around it. Resize your browser to see the effect.

        float-right max-md:float-none

This element floats to the right on larger screens but becomes a normal block element on medium screens and below, creating a better mobile experience.

        float-left lg:float-right

This demonstrates changing float direction based on screen size. It floats left by default but switches to float right on large screens, useful for responsive design adjustments.

```html
<div class="float-none md:float-left">
  Floats left only on medium screens and above
</div>
<p>Text content wraps around...</p>

<div class="float-right max-md:float-none">
  Floats right, but not on small/medium screens
</div>
<p>Text content wraps around...</p>

<div class="float-left lg:float-right">
  Changes float direction on large screens
</div>
<p>Text content wraps around...</p>
```
