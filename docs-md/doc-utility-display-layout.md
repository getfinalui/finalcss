<!-- Generated from docs/doc-utility-display-layout.html. Keep this file in sync with the HTML documentation. -->

# Display & Layout Utilities

---

Display and layout utilities provide quick control over element display types and flexbox/grid properties. Use these classes to control how elements are rendered, manage flexbox layouts, and align content without writing custom CSS. These utilities are essential for responsive design and building flexible layouts.

Responsive: ✅ Yes

lg:classname, md:classname, sm:classname,

max-lg:classname, max-md:classname, max-sm:classname

---

### What it does?

Here are representative examples of these classes:

| Class | Styles |
| --- | --- |
| d-initial | display: initial; |
| d-block | display: block; |
| d-inline-block | display: inline-block; |
| d-inline | display: inline; |
| d-table | display: table; |
| d-table-row | display: table-row; |
| d-table-cell | display: table-cell; |
| d-inline-table | display: inline-table; |
| d-table-caption | display: table-caption; |
| d-grid | display: grid; |
| d-inline-grid | display: inline-grid; |
| d-flex | display: flex; |
| d-inline-flex | display: inline-flex; |
| d-none | display: none; |
| hidden | display: none; |
| flex-basis-auto | flex-basis: auto; |
| flex-basis-0 | flex-basis: 0; |
| flex-basis-full | flex-basis: 100%; |
| flex-1 | flex: 1 1 0%; |
| flex-auto | flex: 1 1 auto; |
| flex-none | flex: none; |
| flex-shrink-0 | flex-shrink: 0; |
| flex-shrink | flex-shrink: 1; |
| flex-shrink-initial | flex-shrink: initial; |
| flex-grow-0 | flex-grow: 0; |
| flex-grow | flex-grow: 1; |
| flex-grow-initial | flex-grow: initial; |
| flex-row | flex-direction: row; |
| flex-row-reverse | flex-direction: row-reverse; |
| flex-col | flex-direction: column; |
| flex-col-reverse | flex-direction: column-reverse; |
| flex-wrap | flex-wrap: wrap; |
| flex-wrap-reverse | flex-wrap: wrap-reverse; |
| flex-nowrap | flex-wrap: nowrap; |
| align-content-normal | align-content: normal; |
| align-content-center | align-content: center; |
| align-content-start | align-content: flex-start; |
| align-content-end | align-content: flex-end; |
| align-content-between | align-content: space-between; |
| align-content-around | align-content: space-around; |
| align-content-evenly | align-content: space-evenly; |
| align-content-stretch | align-content: stretch; |
| align-self-auto | align-self: auto; |
| align-self-start | align-self: flex-start; |
| align-self-end | align-self: flex-end; |
| align-self-center | align-self: center; |
| align-self-stretch | align-self: stretch; |
| align-self-baseline | align-self: baseline; |
| align-items-start | align-items: flex-start; |
| align-items-end | align-items: flex-end; |
| align-items-center | align-items: center; |
| align-items-baseline | align-items: baseline; |
| align-items-stretch | align-items: stretch; |
| justify-content-normal | justify-content: normal; |
| justify-content-start | justify-content: flex-start; |
| justify-content-end | justify-content: flex-end; |
| justify-content-center | justify-content: center; |
| justify-content-between | justify-content: space-between; |
| justify-content-around | justify-content: space-around; |
| justify-content-evenly | justify-content: space-evenly; |
| justify-content-stretch | justify-content: stretch; |
| justify-items-start | justify-items: start; |
| justify-items-end | justify-items: end; |
| justify-items-center | justify-items: center; |
| justify-items-stretch | justify-items: stretch; |
| place-items-start | place-items: start; |
| place-items-end | place-items: end; |
| place-items-center | place-items: center; |
| place-items-baseline | place-items: baseline; |
| place-items-stretch | place-items: stretch; |
| place-content-center | place-content: center; |
| place-content-start | place-content: start; |
| place-content-end | place-content: end; |
| place-content-between | place-content: space-between; |
| place-content-around | place-content: space-around; |
| place-content-evenly | place-content: space-evenly; |
| place-content-baseline | place-content: baseline; |
| place-content-stretch | place-content: stretch; |
| flex-center | justify-content: center; align-items: center; |

### Basic example

      Item 1
      Item 2
      Item 3

```html
<div class="d-flex align-items-center justify-content-between">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### How to make responsive

This utility class supports responsive breakpoints, which means you can control when specific styles are applied based on the screen size.

The responsive system works by prefixing any utility class with a breakpoint name followed by a colon. For example, if you want an element to display as a block only on large screens, you would use `class="lg:d-block"`. This applies `display: block` exclusively when the viewport width is 1201 pixels or wider, which typically covers desktop screens and widescreen displays.

The framework provides two types of breakpoint approaches to give you complete control. The first type uses minimum width breakpoints like `sm:`, `md:`, and `lg:`, which apply styles from that screen size and up. The second type uses maximum width breakpoints like `max-sm:`, `max-md:`, and `max-lg:`, which apply styles from zero width up to that specific breakpoint. This "max" approach is particularly useful when you want to target smaller devices specifically.

Consider a practical example: `class="max-lg:d-block"` will apply `display: block` to all screens from zero pixels up to 1200 pixels wide, which includes tablets and mobile devices. Similarly, `class="max-sm:d-none"` hides an element completely on small mobile devices by applying `display: none` to screens up to 640 pixels wide.

You can even combine multiple breakpoint classes on a single element. For instance, `class="d-none md:d-block lg:d-flex"` would hide the element by default on mobile, show it as a block on medium screens like tablets, and change it to flex display on large desktop screens.

The breakpoint values themselves are fully customizable from the configuration file located at `scss/_breakpoint-config.scss`.

### Examples

Responsive display control - show/hide elements on different screen sizes

      Visible on desktop (hidden on mobile and tablets)

      Visible on mobile and tablets only

```html
<div class="d-block max-md:d-none">
  Visible on desktop (hidden on mobile and tablets)
</div>
<div class="d-none max-md:d-block">
  Visible on mobile and tablets only
</div>
```

Flexbox layout with direction and alignment control

      Box 1
      Box 2
      Box 3

```html
<div class="d-flex flex-col md:flex-row align-items-center justify-content-center">
  <div>Box 1</div>
  <div>Box 2</div>
  <div>Box 3</div>
</div>
```

Using the flex-center helper class for quick centering

        Perfectly Centered Content

```html
<div class="d-flex flex-center" style="height: 200px;">
  <div>Perfectly Centered Content</div>
</div>
```

Flex grow and shrink utilities for dynamic sizing

      Fixed Width
      Grows to Fill Space
      Fixed Width

```html
<div class="d-flex">
  <div class="flex-none">Fixed Width</div>
  <div class="flex-1">Grows to Fill Space</div>
  <div class="flex-none">Fixed Width</div>
</div>
```

### How to customize?

You can customize or extend these utilities by modifying the `scss/utilities/_display-layout.scss` file. Add your own display utilities to the `$layout-utils` map and recompile the SCSS to generate new utility classes.

```css
// Add custom utilities to the $layout-utils map
$layout-utils: (
  'd-block': (display: block),
  'd-flex': (display: flex),
  // Add your custom utilities here
  'flex-2': (flex: 2 1 0%),
  'flex-3': (flex: 3 1 0%),
);

// Or create custom helper classes
.flex-center-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
```

To compile your SCSS changes into CSS, you have two main options: Option A: Use Node.js and npm tools if you're comfortable with the terminal and have Node.js installed. Install a Sass compiler like `dart-sass` or `node-sass` and run the compiler from your command line. Option B: Use visual GUI applications like [Prepros](https://prepros.io) or CodeKit if you prefer a visual interface and want to avoid working in the terminal. These tools provide a simple drag-and-drop interface for compiling Sass files.
