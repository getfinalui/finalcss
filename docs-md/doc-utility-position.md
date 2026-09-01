<!-- Generated from docs/doc-utility-position.html. Keep this file in sync with the HTML documentation. -->

# Position

---

Position utilities control how elements are positioned in the document flow and allow precise placement using offset values. Use these classes to set positioning context (static, relative, absolute, fixed, sticky) and position elements using top, bottom, left, and right properties. Perfect for creating overlays, tooltips, dropdown menus, sticky navigation, and any layout requiring precise element placement.

Responsive: ✅ Yes

lg:classname, md:classname, sm:classname,

max-lg:classname, max-md:classname, max-sm:classname

---

### Position classes

Here are representative examples of these classes:

| Class | Styles |
| --- | --- |
| .static | position: static; |
| .relative | position: relative; |
| .absolute | position: absolute; |
| .fixed | position: fixed; |
| .sticky | position: sticky; |
| .fixed-top | position: fixed; top: 0; left: 0; right: 0; z-index: 1020; |
| .sticky-top | position: sticky; top: 0; z-index: 1000; |
| .fixed-bottom | position: fixed; bottom: 0; left: 0; right: 0; z-index: 1020; |
| .sticky-bottom | position: sticky; bottom: 0; z-index: 1000; |

You can create responsive position variants by adding breakpoint prefixes. For example, use `lg:relative` to make an element relative only on large screens, or `max-sm:fixed` to fix an element on small screens and below. Combine multiple breakpoints like `lg:absolute md:relative max-sm:static` for complete responsive control.

### Basic example of position

      I'm in normal flow (relative)
      Absolute positioned
      Bottom left corner

```html
<div class="relative">
  <div class="badge">I'm in normal flow</div>
  <div class="absolute top-0 right-0 badge">Absolute positioned</div>
  <div class="absolute bottom-0 left-0 badge">Bottom left corner</div>
</div>
```

### Arrange elements (px)

Position elements with pixel-based offset values. These classes provide precise control for small adjustments and fixed spacing.

| Class | Styles |
| --- | --- |
| .top-auto | top: auto; |
| .top-initial | top: initial; |
| .top-unset | top: unset; |
| .top-0 | top: 0; |
| .top-1 | top: 4px; |
| .top-2 | top: 8px; |
| .top-3 | top: 12px; |
| .top-4 | top: 16px; |
| .top-5 | top: 20px; |
| .top-6 | top: 24px; |
| .top-7 | top: 28px; |
| .top-8 | top: 32px; |
| .top-9 | top: 36px; |
| .top-10 | top: 40px; |

| Class | Styles |
| --- | --- |
| .bottom-auto | bottom: auto; |
| .bottom-initial | bottom: initial; |
| .bottom-unset | bottom: unset; |
| .bottom-0 | bottom: 0; |
| .bottom-1 | bottom: 4px; |
| .bottom-2 | bottom: 8px; |
| .bottom-3 | bottom: 12px; |
| .bottom-4 | bottom: 16px; |
| .bottom-5 | bottom: 20px; |
| .bottom-6 | bottom: 24px; |
| .bottom-7 | bottom: 28px; |
| .bottom-8 | bottom: 32px; |
| .bottom-9 | bottom: 36px; |
| .bottom-10 | bottom: 40px; |

| Class | Styles |
| --- | --- |
| .left-auto | left: auto; |
| .left-initial | left: initial; |
| .left-unset | left: unset; |
| .left-0 | left: 0; |
| .left-1 | left: 4px; |
| .left-2 | left: 8px; |
| .left-3 | left: 12px; |
| .left-4 | left: 16px; |
| .left-5 | left: 20px; |
| .left-6 | left: 24px; |
| .left-7 | left: 28px; |
| .left-8 | left: 32px; |
| .left-9 | left: 36px; |
| .left-10 | left: 40px; |

| Class | Styles |
| --- | --- |
| .right-auto | right: auto; |
| .right-initial | right: initial; |
| .right-unset | right: unset; |
| .right-0 | right: 0; |
| .right-1 | right: 4px; |
| .right-2 | right: 8px; |
| .right-3 | right: 12px; |
| .right-4 | right: 16px; |
| .right-5 | right: 20px; |
| .right-6 | right: 24px; |
| .right-7 | right: 28px; |
| .right-8 | right: 32px; |
| .right-9 | right: 36px; |
| .right-10 | right: 40px; |

### Examples

Position badges and notification indicators with precise pixel offsets

      New
      8px from edges
      12px offset
      Button

```html
<div class="relative">
  <div class="absolute top-2 right-2 badge badge-red">New</div>
  <div class="absolute top-5 left-5 badge badge-blue">8px from edges</div>
  <div class="absolute bottom-3 right-3 badge badge-green">12px offset</div>
  <button class="btn absolute bottom-5 left-5">Button</button>
</div>
```

### Arrange elements (%)

Position elements with percentage-based offsets for responsive, fluid layouts that scale with container size.

| Class | Styles |
| --- | --- |
| .top-5% | top: 5%; |
| .top-10% | top: 10%; |
| .top-15% | top: 15%; |
| .top-20% | top: 20%; |
| .top-25% | top: 25%; |
| .top-30% | top: 30%; |
| .top-35% | top: 35%; |
| .top-40% | top: 40%; |
| .top-45% | top: 45%; |
| .top-50% | top: 50%; |
| .top-55% | top: 55%; |
| .top-60% | top: 60%; |
| .top-65% | top: 65%; |
| .top-70% | top: 70%; |
| .top-75% | top: 75%; |
| .top-80% | top: 80%; |
| .top-85% | top: 85%; |
| .top-90% | top: 90%; |
| .top-95% | top: 95%; |
| .top-100% | top: 100%; |

| Class | Styles |
| --- | --- |
| .bottom-5% | bottom: 5%; |
| .bottom-10% | bottom: 10%; |
| .bottom-15% | bottom: 15%; |
| .bottom-20% | bottom: 20%; |
| .bottom-25% | bottom: 25%; |
| .bottom-30% | bottom: 30%; |
| .bottom-35% | bottom: 35%; |
| .bottom-40% | bottom: 40%; |
| .bottom-45% | bottom: 45%; |
| .bottom-50% | bottom: 50%; |
| .bottom-55% | bottom: 55%; |
| .bottom-60% | bottom: 60%; |
| .bottom-65% | bottom: 65%; |
| .bottom-70% | bottom: 70%; |
| .bottom-75% | bottom: 75%; |
| .bottom-80% | bottom: 80%; |
| .bottom-85% | bottom: 85%; |
| .bottom-90% | bottom: 90%; |
| .bottom-95% | bottom: 95%; |
| .bottom-100% | bottom: 100%; |

| Class | Styles |
| --- | --- |
| .left-5% | left: 5%; |
| .left-10% | left: 10%; |
| .left-15% | left: 15%; |
| .left-20% | left: 20%; |
| .left-25% | left: 25%; |
| .left-30% | left: 30%; |
| .left-35% | left: 35%; |
| .left-40% | left: 40%; |
| .left-45% | left: 45%; |
| .left-50% | left: 50%; |
| .left-55% | left: 55%; |
| .left-60% | left: 60%; |
| .left-65% | left: 65%; |
| .left-70% | left: 70%; |
| .left-75% | left: 75%; |
| .left-80% | left: 80%; |
| .left-85% | left: 85%; |
| .left-90% | left: 90%; |
| .left-95% | left: 95%; |
| .left-100% | left: 100%; |

| Class | Styles |
| --- | --- |
| .right-5% | right: 5%; |
| .right-10% | right: 10%; |
| .right-15% | right: 15%; |
| .right-20% | right: 20%; |
| .right-25% | right: 25%; |
| .right-30% | right: 30%; |
| .right-35% | right: 35%; |
| .right-40% | right: 40%; |
| .right-45% | right: 45%; |
| .right-50% | right: 50%; |
| .right-55% | right: 55%; |
| .right-60% | right: 60%; |
| .right-65% | right: 65%; |
| .right-70% | right: 70%; |
| .right-75% | right: 75%; |
| .right-80% | right: 80%; |
| .right-85% | right: 85%; |
| .right-90% | right: 90%; |
| .right-95% | right: 95%; |
| .right-100% | right: 100%; |

### Examples

Create fluid, responsive layouts where elements maintain their relative position regardless of container size

      10% from edges
      25% positioned
      50% (center start)
      Bottom 20%, Right 15%
      75% from top

```html
<div class="relative">
  <div class="absolute top-10% left-10% badge">10% from edges</div>
  <div class="absolute top-25% right-25% badge">25% positioned</div>
  <div class="absolute top-50% left-50% badge">50% (center start)</div>
  <div class="absolute bottom-20% right-15% badge">Bottom 20%, Right 15%</div>
  <div class="absolute top-75% left-30% badge">75% from top</div>
</div>
```

### Using with breakpoints for responsiveness

All position offset classes support responsive breakpoints, allowing you to adjust element positioning at different screen sizes. Prefix any position class with a breakpoint to apply it conditionally.
Use `lg:`, `md:`, `sm:` for minimum widths, or `max-lg:`, `max-md:`, `max-sm:` for maximum widths.
This is essential for creating adaptive layouts where elements need different positioning on mobile vs desktop.

Breakpoint prefixes:
`lg:top-10` → applies `top: 40px` on large screens and up
`md:right-5%` → applies `right: 5%` on medium screens and up
`max-sm:left-0` → applies `left: 0` on small screens and below (mobile only)
`max-md:bottom-10%` → applies `bottom: 10%` on medium screens and below

        Default: 10% offset
        Mobile: 5% offset
        Large: 20% offset

```html
<div class="relative border-strong" style="height: 200px;">
      <div class="card p-3 bg-blue-200 absolute bottom-10% lg:bottom-20% max-md:bottom-5%">
        Default: 10% offset
        Mobile: 5% offset
        Large: 20% offset
      </div>
</div>
```

### Centering (helpers)

Utility classes for perfectly centering absolutely positioned elements using CSS transforms.

| Class | Styles |
| --- | --- |
| center-y | top: 50%; transform: translateY(-50%); |
| center-x | left: 50%; transform: translateX(-50%); |
| center-xy | top: 50%; left: 50%; transform: translate(-50%, -50%); |

* Note: The actual implementation uses separate translateY and translateX, but the combined effect centers the element both horizontally and vertically.

### Examples

Perfect for centering modals, overlays, and UI elements without needing to know their dimensions

#### Perfectly Centered Modal

This element is centered both horizontally and vertically using .center-xy

        Got it

```html
<div class="relative" style="height:360px;">
  <div class="absolute center-xy card">
    <h6>Perfectly Centered Modal</h6>
    <p>This element is centered both ways</p>
    <button class="btn">Got it</button>
  </div>
</div>
```

      Centered horizontally only
      Centered vertically only

```html
<div class="relative" >
  <div class="absolute center-x badge" style="top: 20px;">
    Centered horizontally only
  </div>
  <div class="absolute center-y badge" style="left: 20px;">
    Centered vertically only
  </div>
</div>
```

### 💡 Common Use Cases

- Floating action buttons: `fixed bottom-5 right-5 max-sm:bottom-3 max-sm:right-3`

- Mobile-only badges: `absolute top-0 right-0 max-md:top-2 max-md:right-2`

- Adaptive overlays: `absolute lg:top-10% lg:right-10% max-lg:center-xy`

- Responsive tooltips: `absolute bottom-100% left-50% max-sm:left-0 max-sm:right-0`

### How to customize?

You can customize the position offset values by modifying the SCSS maps in your `scss/utilities/_position.scss` file. Add, remove, or adjust values to match your project's spacing system, then compile the SCSS to generate your custom CSS.

```css
// Customize pixel-based position offsets
$position_map:(
  "auto": auto,
  "initial": initial,
  "unset": unset,
  "0": 0,
  "1": 4px,
  "2": 8px,
  "3": 12px,
  "4": 16px,
  "5": 20px,
  "6": 24px,
  "7": 28px,
  "8": 32px,
  "9": 36px,
  "10": 40px
);

// Customize percentage-based position offsets
$position_map_percent:(
  "5": 5%,
  "10": 10%,
  "15": 15%,
  "20": 20%,
  "25": 25%,
  "30": 30%,
  "35": 35%,
  "40": 40%,
  "45": 45%,
  "50": 50%,
  "55": 55%,
  "60": 60%,
  "65": 65%,
  "70": 70%,
  "75": 75%,
  "80": 80%,
  "85": 85%,
  "90": 90%,
  "95": 95%,
  "100": 100%
);

// Generate position utilities for pixels
@each $name, $value in $position_map {
  .top-#{$name} { top: #{$value}; }
  .bottom-#{$name} { bottom: #{$value}; }
  .right-#{$name} { right: #{$value}; }
  .left-#{$name} { left: #{$value}; }
}

// Generate position utilities for percentages
@each $name, $value in $position_map_percent {
  .top-#{$name}\% { top: #{$value}; }
  .bottom-#{$name}\% { bottom: #{$value}; }
  .right-#{$name}\% { right: #{$value}; }
  .left-#{$name}\% { left: #{$value}; }
}

// Helper classes for centering
.center-y { top: 50%; transform: translateY(-50%); }
.center-x { left: 50%; transform: translateX(-50%); }
.center-xy { top: 50%; left: 50%; transform: translate(-50%, -50%); }
```

After customizing your SCSS variables and maps, you'll need to compile the SCSS into CSS. You have two main options: Option A: Use command-line tools like Node.js with npm packages (node-sass, sass, or gulp-sass) if you're comfortable with terminal commands and have Node.js installed on your system. Option B: Use visual GUI applications like Prepros.io or CodeKit if you prefer a graphical interface and want to avoid the terminal—these apps automatically watch your SCSS files and compile them to CSS whenever you save changes, making the development process seamless.
