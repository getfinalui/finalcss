<!-- Generated from docs/doc-utility-border-style.html. Keep this file in sync with the HTML documentation. -->

# Border color and style

---

Border utility classes provide a flexible way to add borders to elements with various styles, colors, widths, and side-specific applications. Use these classes to create visual boundaries, highlight interactive elements, or separate content sections. Classes can be combined to create custom border styles and are fully responsive with breakpoint support.

Hover support: ✅ Yes

hover:classname, group-hover:classname

---

### Default border color

There is default border color set on file `scss/_variables-root.scss`

`--border-color-default: var(--neutral-200);`. It adapts on dark and light theme

### Border on all sides

Here are representative examples of these classes:

| Class | Styles |
| --- | --- |
| border | border: 1px solid var(--border-color-default); |
| border-0 | border: 0 !important; |
| border-none | border: none !important; |
| border-default | border: 1px solid var(--border-color-default); |
| border-strong | border: 1px solid var(--neutral-300); |
| border-transparent | border: 1px solid transparent; |
| border-white | border: 1px solid white; |
| border-black | border: 1px solid black; |
| border-primary | border: 1px solid #6163fe; |
| border-red | border: 1px solid #ef3232; |
| border-green | border: 1px solid #0dab47; |
| border-blue | border: 1px solid #3780f6; |
| border-orange | border: 1px solid #f97316; |
| border-yellow | border: 1px solid #E5B800; |
| border-purple | border: 1px solid #a855f7; |
| border-teal | border: 1px solid #14b8a6; |

### Examples

    Default border with adaptive color
    Primary brand color border
    Red border for errors or alerts
    Green border for success states
    Blue border for informational elements

```html
<div class="border p-3">Default border with adaptive color</div>
<div class="border-primary p-3">Primary brand color border</div>
<div class="border-red p-3">Red border for errors or alerts</div>
<div class="border-green p-3">Green border for success states</div>
<div class="border-blue p-3">Blue border for informational elements</div>
```

### Border with hover state

Add interactive visual feedback by changing border colors on hover. Use `hover:` prefix for element hover, or `group-hover:` for parent-triggered hover effects. This is useful for cards, buttons, and interactive elements.

    Hover me - border changes to primary
    Hover me - border changes to red

      Child element - border appears when parent is hovered

```html
<div class="border-default hover:border-primary p-3">
  Hover me - border changes to primary
</div>

<div class="border hover:border-red p-3">
  Hover me - border changes to red
</div>

<div class="group border-default p-3">
  <div class="border-transparent group-hover:border-green p-2">
    Child element - border appears when parent is hovered
  </div>
</div>
```

### More color shades for border-color

Use these classes to apply specific color intensities. These classes only set border-color, so combine them with border-width and border-style classes. Available for: primary, red, green, blue, orange, yellow, purple, teal, and neutral colors.

| Class | Styles |
| --- | --- |
| border-color-primary-100 | border-color: var(--primary-100); |
| border-color-primary-200 | border-color: var(--primary-200); |
| border-color-primary-300 | border-color: var(--primary-300); |
| border-color-primary-400 | border-color: var(--primary-400); |
| border-color-primary-500 | border-color: var(--primary-500); |
| border-color-primary-600 | border-color: var(--primary-600); |
| border-color-primary-700 | border-color: var(--primary-700); |
| border-color-primary-800 | border-color: var(--primary-800); |
| border-color-primary-900 | border-color: var(--primary-900); |
| border-color-red-100 | border-color: var(--red-100); |
| border-color-red-200 | border-color: var(--red-200); |
| border-color-red-300 | border-color: var(--red-300); |
| border-color-red-... | border-color: var(--red-...); |
| border-color-red-900 | border-color: var(--red-900); |
| border-color-green-100 | border-color: var(--green-100); |
| border-color-green-200 | border-color: var(--green-200); |
| border-color-green-300 | border-color: var(--green-300); |
| border-color-green-... | border-color: var(--green-...); |
| border-color-green-900 | border-color: var(--green-900); |
| border-color-blue-100 | border-color: var(--blue-100); |
| border-color-blue-200 | border-color: var(--blue-200); |
| border-color-blue-300 | border-color: var(--blue-300); |
| border-color-blue-... | border-color: var(--blue-...); |
| border-color-blue-900 | border-color: var(--blue-900); |
| border-color-orange-100 | border-color: var(--orange-100); |
| border-color-orange-200 | border-color: var(--orange-200); |
| border-color-orange-300 | border-color: var(--orange-300); |
| border-color-orange-... | border-color: var(--orange-...); |
| border-color-orange-900 | border-color: var(--orange-900); |
| border-color-yellow-100 | border-color: var(--yellow-100); |
| border-color-yellow-200 | border-color: var(--yellow-200); |
| border-color-yellow-300 | border-color: var(--yellow-300); |
| border-color-yellow-... | border-color: var(--yellow-...); |
| border-color-yellow-900 | border-color: var(--yellow-900); |
| border-color-purple-100 | border-color: var(--purple-100); |
| border-color-purple-200 | border-color: var(--purple-200); |
| border-color-purple-300 | border-color: var(--purple-300); |
| border-color-purple-... | border-color: var(--purple-...); |
| border-color-purple-900 | border-color: var(--purple-900); |
| border-color-teal-100 | border-color: var(--teal-100); |
| border-color-teal-200 | border-color: var(--teal-200); |
| border-color-teal-300 | border-color: var(--teal-300); |
| border-color-teal-... | border-color: var(--teal-...); |
| border-color-teal-900 | border-color: var(--teal-900); |
| border-color-neutral-100 | border-color: var(--neutral-100); |
| border-color-neutral-200 | border-color: var(--neutral-200); |
| border-color-neutral-300 | border-color: var(--neutral-300); |
| border-color-neutral-... | border-color: var(--neutral-...); |
| border-color-neutral-900 | border-color: var(--neutral-900); |
| border-color-neutral-1000 | border-color: var(--neutral-1000); |
| ...and more for blue, orange, yellow, purple, teal (100-900) |  |

### Examples with border color

Use color shades to create subtle variations and visual hierarchy. Lighter shades (100-300) work well for backgrounds, while darker shades (700-900) provide strong emphasis.

    Light primary border with hover red-400
    Medium primary border (shade 500)
    Dark blue dotted border
    3px solid orange-700 border

```html
<div class="border border-color-primary-200  hover:border-color-red-300 p-3">
    Light primary border, with hover red-400
</div>
<div class="border border-color-primary-500 p-3">
  Medium primary border
</div>
<div class="border-style-dotted border-width-2 border-color-primary-800 p-3">
  Dark blue dotted border
</div>
<div class="border-style-solid border-width-3 border-color-orange-700 p-3">
  3px solid orange-700 border
</div>
```

### Border line style

Control the visual appearance of border lines. Combine with border-width for more prominent effects.

| Class | Styles |
| --- | --- |
| border-style-solid | border-style: solid !important; |
| border-style-dashed | border-style: dashed !important; |
| border-style-dotted | border-style: dotted !important; |
| border-style-initial | border-style: initial !important; |

### Examples

    Solid border line (default)
    Dashed border line
    Dotted border line
    3px dashed blue border

```html
<div class="border border-style-solid p-3">Solid border line</div>
<div class="border border-style-dashed p-3">Dashed border line</div>
<div class="border border-style-dotted p-3">Dotted border line</div>
<div class="border border-style-dashed border-width-3 border-color-blue-500 p-3">
  3px dashed blue border
</div>
```

### Border width (thickness)

Control border thickness from 1px to 5px. Useful for creating emphasis or visual hierarchy.

| Class | Styles |
| --- | --- |
| border-width-1 | border-width: 1px !important; |
| border-width-2 | border-width: 2px !important; |
| border-width-3 | border-width: 3px !important; |
| border-width-4 | border-width: 4px !important; |
| border-width-5 | border-width: 5px !important; |

### Examples

    1px border (default)
    2px border
    3px border
    4px border
    5px border

```html
<div class="border border-width-1 p-3">1px border</div>
<div class="border border-width-2 p-3">2px border</div>
<div class="border border-width-3 p-3">3px border</div>
<div class="border border-width-4 p-3">4px border</div>
<div class="border border-width-5 p-3">5px border</div>
```

### Border for specific sides

Apply borders to individual sides. These classes support responsive breakpoints (e.g., max-sm:border-right-0, lg:border-left).

| Class | Styles |
| --- | --- |
| border-top | border-top: 1px solid var(--border-color-default); |
| border-right | border-right: 1px solid var(--border-color-default); |
| border-bottom | border-bottom: 1px solid var(--border-color-default); |
| border-left | border-left: 1px solid var(--border-color-default); |
| border-top-0 | border-top: 0 !important; |
| border-right-0 | border-right: 0 !important; |
| border-bottom-0 | border-bottom: 0 !important; |
| border-left-0 | border-left: 0 !important; |

### Examples

    Top border only
    Bottom border only (great for dividers)
    Left border only (sidebar accent)
    Border on all sides except right
    Top and bottom borders

```html
<div class="border-top p-3">Top border only</div>
<div class="border-bottom p-3">Bottom border only</div>
<div class="border-left p-3">Left border only</div>
<div class="border border-right-0 p-3">Border except right</div>
<div class="border-top border-bottom p-3">Top and bottom borders</div>
```

### Responsive borders

Side-specific borders support breakpoint prefixes: max-sm:, max-md:, max-lg:, sm:, md:, lg:

    Right border removed on mobile
    Left border appears on desktop (≥1201px)
    Bottom border on mobile, right border on tablet+

```html
<div class="border-right max-sm:border-right-0 p-3">
  Right border removed on mobile
</div>

<div class="lg:border-left p-3">
  Left border appears on desktop
</div>

<div class="border-bottom md:border-bottom-0 md:border-right p-3">
  Bottom border on mobile, right border on tablet+
</div>
```

### How to customize?

You can customize border utilities by editing the SCSS source files. Border colors are generated from the color maps in `scss/_theme.scss`. To add new border colors or modify existing ones, edit the `$colors_border_main` map in `scss/utilities/_border-style.scss` and recompile your CSS.

```css
/* File: scss/utilities/_border-style.scss */
$colors_border_main: (
  "default": var(--border-color-default),
  "strong": var(--neutral-300),
  "custom": #ff00ff, // Add your custom color
  "primary": map-get(map-get($colors_list, "primary"), "500"),
  /* ... more colors */
);
```

To compile SCSS to CSS, you have two main options:

Option A: Use Node.js and npm tools if you're comfortable with the terminal and command-line interface.

Option B: Use visual applications like Prepros.io or CodeKit if you prefer graphical user interfaces and want to avoid terminal commands.
