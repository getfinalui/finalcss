<!-- Generated from docs/doc-utility-gap.html. Keep this file in sync with the HTML documentation. -->

# Gap

---

Gap utilities control the spacing between child elements in flexbox and grid layouts. These classes provide a clean way to add consistent spacing without using margins on individual items. Use `gap-*` for uniform spacing in both directions, `gap-rows-*` for vertical spacing only, or `gap-cols-*` for horizontal spacing only. These utilities are essential for creating evenly spaced card grids, navigation menus, form layouts, and any flex or grid container.

Responsive: ✅ Yes

lg:classname, md:classname, sm:classname,

max-lg:classname, max-md:classname, max-sm:classname

---

### What it does?

Here are representative examples of these classes:

| Class | Styles |
| --- | --- |
| gap-0 | gap: 0 |
| gap-1 | gap: 4px |
| gap-2 | gap: 8px |
| gap-3 | gap: 12px |
| gap-4 | gap: 16px |
| gap-5 | gap: 20px |
| gap-6 | gap: 24px |
| gap-7 | gap: 28px |
| gap-8 | gap: 32px |
| gap-9 | gap: 36px |
| gap-10 | gap: 40px |
| gap-rows-0 | row-gap: 0 |
| gap-rows-1 | row-gap: 4px |
| gap-rows-2 | row-gap: 8px |
| gap-rows-3 | row-gap: 12px |
| gap-rows-4 | row-gap: 16px |
| gap-rows-5 | row-gap: 20px |
| gap-rows-6 | row-gap: 24px |
| gap-rows-7 | row-gap: 28px |
| gap-rows-8 | row-gap: 32px |
| gap-rows-9 | row-gap: 36px |
| gap-rows-10 | row-gap: 40px |
| gap-cols-0 | column-gap: 0 |
| gap-cols-1 | column-gap: 4px |
| gap-cols-2 | column-gap: 8px |
| gap-cols-3 | column-gap: 12px |
| gap-cols-4 | column-gap: 16px |
| gap-cols-5 | column-gap: 20px |
| gap-cols-6 | column-gap: 24px |
| gap-cols-7 | column-gap: 28px |
| gap-cols-8 | column-gap: 32px |
| gap-cols-9 | column-gap: 36px |
| gap-cols-10 | column-gap: 40px |

### Basic example

Uniform gap (gap-4):

        Item 1
        Item 2
        Item 3
        Item 4

Row gap only (gap-rows-6):

        Item 1
        Item 2
        Item 3
        Item 4
        Item 5

Column gap only (gap-cols-5):

        Item 1
        Item 2
        Item 3
        Item 4
        Item 5

```html
<!-- Uniform gap in both directions -->
<div class="d-flex flex-wrap gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>

<!-- Row gap only (vertical spacing) -->
<div class="d-flex flex-wrap gap-rows-6">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
</div>

<!-- Column gap only (horizontal spacing) -->
<div class="d-flex flex-wrap gap-cols-5">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
</div>
```

### Examples with responsive classes

Gap utilities support responsive breakpoint prefixes, allowing you to adjust spacing between elements based on screen size. Use classes like `lg:gap-8` to apply larger gaps on desktop screens, or `max-sm:gap-2` to use tighter spacing on mobile devices. This is particularly useful for responsive card grids, navigation menus, and layouts that need different spacing across viewport sizes.

Responsive gap (gap-2 md:gap-6):

        Card 1
        Card 2
        Card 3
        Card 4
        Card 5
        Card 6

Responsive row gap (gap-rows-3 lg:gap-rows-8):

        Item 1
        Item 2
        Item 3
        Item 4
        Item 5
        Item 6

Mobile-first approach (gap-4 max-sm:gap-1):

        Box 1
        Box 2
        Box 3
        Box 4

```html
<!-- Smaller gap on mobile, larger on medium screens+ -->
<div class="d-flex flex-wrap gap-2 md:gap-6">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>

<!-- Responsive row gap only -->
<div class="d-flex flex-wrap gap-cols-4 gap-rows-3 lg:gap-rows-8">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Larger gap by default, smaller on mobile -->
<div class="d-flex flex-wrap gap-4 max-sm:gap-1">
  <div>Box 1</div>
  <div>Box 2</div>
  <div>Box 3</div>
</div>
```

### How to customize?

You can customize the gap scale by editing the `$gap_map` variable in `scss/utilities/_gap.scss`. Add, remove, or modify spacing values to match your design system requirements. After making changes, compile the SCSS to generate updated CSS with your custom gap values.

```css
$gap_map: (
  "0": 0,
  "1": 4px,
  "2": 8px,
  "3": 12px,
  "4": 16px,
  "5": 20px,
  // Add custom values
  "custom": 18px,
  // Modify existing values
  "10": 50px,  // Changed from 40px
);

// Generates gap classes
@each $name, $value in $gap_map {
  .gap-#{$name} { gap: #{$value}; }
  .gap-rows-#{$name} { row-gap: #{$value}; }
  .gap-cols-#{$name} { column-gap: #{$value}; }
}
```

To compile your SCSS into CSS, you have two main options: Option A: Use Node.js with npm tools like `sass` or `dart-sass` if you're comfortable working in the terminal and have Node.js installed on your system. Option B: Use visual applications like Prepros.io or CodeKit which provide an intuitive graphical interface for compiling SCSS without requiring any terminal or command-line knowledge.
