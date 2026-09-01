<!-- Generated from docs/doc-utility-order.html. Keep this file in sync with the HTML documentation. -->

# Order

---

Order utility classes control the visual order of flex and grid items without changing the HTML structure. Use these classes to rearrange elements for different screen sizes, prioritize content visibility, or create responsive layouts where element order changes based on viewport width. Works with flexbox and CSS grid containers.

Responsive: ✅ Yes

lg:classname, md:classname, sm:classname,

max-lg:classname, max-md:classname, max-sm:classname

---

### What it does?

Here are representative examples of these classes:

| Class | Styles |
| --- | --- |
| order-0 | order: 0 |
| order-1 | order: 1 |
| order-2 | order: 2 |
| order-3 | order: 3 |
| order-4 | order: 4 |
| order-5 | order: 5 |
| md:order-2 | order: 2 (at 921px and above) |
| max-sm:order-3 | order: 3 (at 640px and below) |

### Basic example

  First in HTML (order-3)
  Second in HTML (order-1)
  Third in HTML (order-2)

```html
<div style="display: flex; gap: 10px;">
  <div class="order-3">First in HTML (order-3)</div>
  <div class="order-1">Second in HTML (order-1)</div>
  <div class="order-2">Third in HTML (order-2)</div>
</div>
```

### Examples

Responsive ordering is perfect for mobile-first layouts. On mobile, show important content first, then reorder for desktop viewing. Resize your browser to see the order change.

    Header - Shows second on mobile, first on desktop

    Main Content - Shows first on mobile, second on desktop

    Sidebar - Shows third on both mobile and desktop

```html
<div style="display: flex; flex-direction: column;">
  <div class="order-2 md:order-1">
    Header - Shows second on mobile, first on desktop
  </div>
  <div class="order-1 md:order-2">
    Main Content - Shows first on mobile, second on desktop
  </div>
  <div class="order-3 md:order-3">
    Sidebar - Shows third on both mobile and desktop
  </div>
</div>
```

Use max-width breakpoints to reverse order on smaller screens. This example shows a typical desktop layout that rearranges for mobile devices.

    Image
order-1 max-sm:order-3

    Title
order-2 max-sm:order-1

    Description
order-3 max-sm:order-2

```html
<div style="display: flex; gap: 15px;">
  <div class="order-1 max-sm:order-3">Image</div>
  <div class="order-2 max-sm:order-1">Title</div>
  <div class="order-3 max-sm:order-2">Description</div>
</div>
```

### How to customize?

You can customize order values by editing `scss/utilities/_order.scss` file. Add additional order values beyond 0-5 if needed, or modify breakpoint behavior. After making changes, compile the SCSS to generate the updated CSS file.

```css
/* Add more order values */
.order-6 { order: 6; }
.order-7 { order: 7; }
.order-8 { order: 8; }

/* Add negative order values */
.order-first { order: -1; }
.order-last { order: 999; }

/* Generate responsive classes for new values */
@each $breakpoint, $screen_size in $breakpoints {
  @media ($screen_size) {
    .#{$breakpoint}\:order-6 { order: 6; }
    .#{$breakpoint}\:order-first { order: -1; }
    .#{$breakpoint}\:order-last { order: 999; }
  }
}
```
