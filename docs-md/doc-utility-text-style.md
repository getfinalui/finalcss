<!-- Generated from docs/doc-utility-text-style.html. Keep this file in sync with the HTML documentation. -->

# Text styles

---

Text style utilities provide comprehensive control over typography styling including font weights, text decoration, text transformation, line height, text alignment, and text wrapping behavior. Use these classes to style text elements, create visual emphasis, control text flow, and improve readability. These utilities work on any text-containing element and can be combined with other utility classes for complete typography control.

Responsive: Only for text alignment (text-left text-right, text-center)

lg:classname, md:classname, sm:classname,

max-lg:classname, max-md:classname, max-sm:classname

---

### What it does?

Here are representative examples of these classes:

| Class | Styles |
| --- | --- |
| font-light or font-300 | font-weight: 300!important; |
| font-normal or font-400 | font-weight: 400!important; |
| font-medium or font-500 | font-weight: 500!important; |
| font-semibold or font-600 | font-weight: 600!important; |
| font-bold or font-700 | font-weight: 700!important; |
| font-bolder or font-800 | font-weight: bolder!important; |
| font-style-italic | font-style: italic; |
| font-style-normal | font-style: normal; |
| text-decoration-none | text-decoration: none!important; |
| text-underline | text-decoration: underline!important; |
| text-line-through | text-decoration: line-through!important; |
| text-lowercase | text-transform: lowercase!important; |
| text-uppercase | text-transform: uppercase!important; |
| text-capitalize | text-transform: capitalize!important; |
| text-nowrap | white-space: nowrap!important; text-wrap: nowrap!important; |
| text-truncate | text-overflow: ellipsis; white-space: nowrap; overflow: hidden; |
| text-wrap | text-wrap: wrap!important; |
| text-balance | text-wrap: balance!important; |
| text-pretty | text-wrap: pretty!important; |
| lh-1 | line-height: 1; |
| lh-sm | line-height: var(--line-height-sm, 1.25); |
| lh-base | line-height: var(--line-height-base, 1.4); |
| lh-lg | line-height: var(--line-height-lg, 1.8); |
| text-left | text-align: left; |
| text-center | text-align: center; |
| text-right | text-align: right; |
| text-shadow | text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); |

### Font weights

This text uses light font weight (300)

This text uses normal font weight (400)

This text uses medium font weight (500)

This text uses semibold font weight (600)

This text uses bold font weight (700)

This text uses bolder font weight (800)

```html
<p class="font-light">This text uses light font weight (300)</p>
<p class="font-normal">This text uses normal font weight (400)</p>
<p class="font-medium">This text uses medium font weight (500)</p>
<p class="font-semibold">This text uses semibold font weight (600)</p>
<p class="font-bold">This text uses bold font weight (700)</p>
<p class="font-bolder">This text uses bolder font weight (800)</p>
```

### Line heights

Line height 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Line height small (1.25): Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Line height base (1.4): Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Line height large (1.8): Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

```html
<p class="lh-1">Line height 1: Lorem ipsum...</p>
<p class="lh-sm">Line height small (1.25): Lorem ipsum...</p>
<p class="lh-base">Line height base (1.4): Lorem ipsum...</p>
<p class="lh-lg">Line height large (1.8): Lorem ipsum...</p>
```

### Other examples

Uppercase text transformation

LOWERCASE TEXT TRANSFORMATION

capitalize each word

This text is italic

This text has line through decoration

Center aligned text

Right aligned text

     This is a very long text that will be truncated with ellipsis when it exceeds the container width

This text will not wrap to the next line no matter how long it is

This text has a subtle shadow effect

```html
<p class="text-uppercase">Uppercase text transformation</p>
<p class="text-lowercase">LOWERCASE TEXT TRANSFORMATION</p>
<p class="text-capitalize">capitalize each word</p>
<p class="font-style-italic">This text is italic</p>
<p class="text-line-through">This text has line through</p>
<p class="text-center">Center aligned text</p>
<p class="text-right">Right aligned text</p>
<div class="text-truncate" style="max-width: 200px;">Long text truncated...</div>
<p class="text-nowrap">Text will not wrap</p>
<p class="text-shadow">Text with shadow effect</p>
```

### Text underline with hover

Hover utilities for text decoration allow you to add interactive effects to links and text elements. The hover:text-underline class adds an underline when hovering, perfect for links. The group and group-hover variant allows child elements to respond to hover on a parent container. Use hover:text-decoration-none to remove underlines on hover, useful for styled links that have underlines by default.

     Hover over this link to see underline

     This link removes underline on hover

Hover over this container

       This link gets underlined when hovering parent

```html
<a href="#" class="text-decoration-none hover:text-underline">
  Hover over this link to see underline
</a>

<a href="#" class="text-underline hover:text-decoration-none">
  This link removes underline on hover
</a>

<div class="group card p-3 hover:bg-secondary">
  <p>Hover over this container</p>
  <a href="#" class="text-decoration-none group-hover:text-underline">
    This link gets underlined when hovering parent
  </a>
</div>
```

### Text align for different screen sizes

Text alignment utilities support responsive breakpoint classes, allowing you to change text alignment based on screen size. This is useful for creating layouts that adapt to different devices - for example, centering text on mobile for better readability while left-aligning on desktop for a more traditional layout. Only text-left, text-right, and text-center support responsive variants.

#### Responsive Heading

Center-aligned on mobile, left-aligned on small screens and up

---

This text is centered on mobile, left-aligned on tablet (md), and right-aligned on desktop (lg)

---

Left-aligned on tablet and desktop, but centered on mobile devices only

```html
<div class="text-center sm:text-left">
  <h6>Responsive Heading</h6>
  <p>Center-aligned on mobile, left-aligned on small screens and up</p>
</div>

<p class="text-center md:text-left lg:text-right">
  This text is centered on mobile, left-aligned on tablet (md),
  and right-aligned on desktop (lg)
</p>

<p class="text-left max-md:text-center">
  Left-aligned on tablet and desktop, but centered on mobile only
</p>
```

### How to customize?

You can customize text style utilities by editing scss/utilities/_text-style.scss file. Modify existing classes, add new font weights, change line height CSS variables, or create additional text decoration styles. After making changes, recompile your SCSS to generate the updated CSS file.

```css
/* Edit in scss/utilities/_text-style.scss */

/* Add custom font weights */
.font-extra-light { font-weight: 200!important; }
.font-black { font-weight: 900!important; }

/* Customize line height variables in _variables-root.scss */
:root {
  --line-height-sm: 1.25;
  --line-height-base: 1.4;
  --line-height-lg: 1.8;
}
```

To compile SCSS to CSS, you have two main options:

Option A: Use Node.js and npm tools if you're comfortable with the terminal and command-line interface.

Option B: Use visual applications like Prepros.io or CodeKit if you prefer graphical user interfaces and want to avoid terminal commands.
