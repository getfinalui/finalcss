<!-- Generated from docs/doc-utility-background.html. Keep this file in sync with the HTML documentation. -->

# Background Color

---

Background color utility classes provide a comprehensive system for applying background colors to elements. Use these classes to quickly style containers, cards, buttons, and other UI components. The system includes semantic colors (base, secondary, lower), theme colors (primary, red, green, etc.), and multiple shades (100-900) for each color. All classes support hover states and work seamlessly with dark mode.

Hover support: ✅ Yes

hover:classname, group-hover:classname

Also read more about [Themes and Colors](doc-base-theme.html) in this documentation.

---

### Base colors

Here are representative examples of semantic and utility background classes defines in `scss/_variables-root.scss` :

| Class | Styles |
| --- | --- |
| bg-base | background-color: var(--bg-color-base); #ffffff |
| bg-secondary | background-color: var(--bg-color-secondary); from var(--neutral-100) |
| bg-lower | background-color: var(--bg-color-lower); from var(--neutral-100); |
| bg-transparent | background-color: transparent; |
| bg-white | background-color: #FFF; |
| bg-black | background-color: #000; |
| bg-alpha-1 | background-color: var(--alpha-1); |
| bg-alpha-2 | background-color: var(--alpha-2); |
| bg-alpha-3 | background-color: var(--alpha-3); |

Note: There is a subtle but important difference between `bg-secondary` and `bg-lower`. The `bg-lower` class is designed for backgrounds behind card elements and switches to the darkest black in dark mode. Meanwhile, `bg-secondary` flips to a lighter dark shade (neutral-100) in dark mode, making it ideal for card surfaces themselves.

### Main theme colors (500 shades)

These classes use the 500 shade of each color from _theme.scss, providing the primary color value for each theme color:

| Class | Styles |
| --- | --- |
| bg-primary | background-color: #6163fe; var(--primary-500) |
| bg-red | background-color: #ef3232; var(--red-500) |
| bg-green | background-color: #0dab47; var(--green-500) |
| bg-blue | background-color: #3780f6; var(--blue-500) |
| bg-orange | background-color: #f97316; var(--orange-500) |
| bg-yellow | background-color: #E5B800; var(--yellow-500) |
| bg-purple | background-color: #a855f7; var(--purple-500) |
| bg-teal | background-color: #14b8a6; var(--teal-500) |

### All color shades

Every theme color has 9 shades (100-900) defined in `scss/_theme.scss`. These shades provide fine-grained control over color intensity. Lower numbers (100-300) are lighter, middle numbers (400-600) are medium intensity, and higher numbers (700-900) are darker. All shades automatically adapt to dark mode.

Learn more about color shades in the [Colors & Themes](doc-base-theme.html) section of this documentation.

| Class | Styles |
| --- | --- |
| bg-primary-100 | background-color: var(--primary-100); |
| bg-primary-200 | background-color: var(--primary-200); |
| bg-primary-300 | background-color: var(--primary-300); |
| bg-primary-400 | background-color: var(--primary-400); |
| bg-primary-500 | background-color: var(--primary-500); |
| bg-primary-600 | background-color: var(--primary-600); |
| bg-primary-700 | background-color: var(--primary-700); |
| bg-primary-800 | background-color: var(--primary-800); |
| bg-primary-900 | background-color: var(--primary-900); |
| bg-neutral-0 | background-color: var(--neutral-0); |
| bg-neutral-50 | background-color: var(--neutral-50); |
| bg-neutral-100 | background-color: var(--neutral-100); |
| bg-neutral-200 | background-color: var(--neutral-200); |
| bg-neutral-300 | background-color: var(--neutral-300); |
| bg-neutral-400 | background-color: var(--neutral-400); |
| bg-neutral-500 | background-color: var(--neutral-500); |
| bg-neutral-600 | background-color: var(--neutral-600); |
| bg-neutral-700 | background-color: var(--neutral-700); |
| bg-neutral-800 | background-color: var(--neutral-800); |
| bg-neutral-900 | background-color: var(--neutral-900); |
| bg-neutral-1000 | background-color: var(--neutral-1000); |
| bg-blue-100 | background-color: var(--blue-100); |
| bg-blue-200 | background-color: var(--blue-200); |
| bg-blue-300 | background-color: var(--blue-300); |
| bg-blue-400 | background-color: var(--blue-400); |
| bg-blue-500 | background-color: var(--blue-500); |
| bg-blue-600 | background-color: var(--blue-600); |
| bg-blue-700 | background-color: var(--blue-700); |
| bg-blue-800 | background-color: var(--blue-800); |
| bg-blue-900 | background-color: var(--blue-900); |
| bg-red-100 | background-color: var(--red-100); |
| bg-red-200 | background-color: var(--red-200); |
| bg-red-300 | background-color: var(--red-300); |
| bg-red-400 | background-color: var(--red-400); |
| bg-red-500 | background-color: var(--red-500); |
| bg-red-600 | background-color: var(--red-600); |
| bg-red-700 | background-color: var(--red-700); |
| bg-red-800 | background-color: var(--red-800); |
| bg-red-900 | background-color: var(--red-900); |
| bg-green-100 | background-color: var(--green-100); |
| bg-green-200 | background-color: var(--green-200); |
| bg-green-300 | background-color: var(--green-300); |
| bg-green-400 | background-color: var(--green-400); |
| bg-green-500 | background-color: var(--green-500); |
| bg-green-600 | background-color: var(--green-600); |
| bg-green-700 | background-color: var(--green-700); |
| bg-green-800 | background-color: var(--green-800); |
| bg-green-900 | background-color: var(--green-900); |
| bg-orange-100 | background-color: var(--orange-100); |
| bg-orange-200 | background-color: var(--orange-200); |
| bg-orange-300 | background-color: var(--orange-300); |
| bg-orange-400 | background-color: var(--orange-400); |
| bg-orange-500 | background-color: var(--orange-500); |
| bg-orange-600 | background-color: var(--orange-600); |
| bg-orange-700 | background-color: var(--orange-700); |
| bg-orange-800 | background-color: var(--orange-800); |
| bg-orange-900 | background-color: var(--orange-900); |
| bg-yellow-100 | background-color: var(--yellow-100); |
| bg-yellow-200 | background-color: var(--yellow-200); |
| bg-yellow-300 | background-color: var(--yellow-300); |
| bg-yellow-400 | background-color: var(--yellow-400); |
| bg-yellow-500 | background-color: var(--yellow-500); |
| bg-yellow-600 | background-color: var(--yellow-600); |
| bg-yellow-700 | background-color: var(--yellow-700); |
| bg-yellow-800 | background-color: var(--yellow-800); |
| bg-yellow-900 | background-color: var(--yellow-900); |
| bg-purple-100 | background-color: var(--purple-100); |
| bg-purple-200 | background-color: var(--purple-200); |
| bg-purple-300 | background-color: var(--purple-300); |
| bg-purple-400 | background-color: var(--purple-400); |
| bg-purple-500 | background-color: var(--purple-500); |
| bg-purple-600 | background-color: var(--purple-600); |
| bg-purple-700 | background-color: var(--purple-700); |
| bg-purple-800 | background-color: var(--purple-800); |
| bg-purple-900 | background-color: var(--purple-900); |
| bg-teal-100 | background-color: var(--teal-100); |
| bg-teal-200 | background-color: var(--teal-200); |
| bg-teal-300 | background-color: var(--teal-300); |
| bg-teal-400 | background-color: var(--teal-400); |
| bg-teal-500 | background-color: var(--teal-500); |
| bg-teal-600 | background-color: var(--teal-600); |
| bg-teal-700 | background-color: var(--teal-700); |
| bg-teal-800 | background-color: var(--teal-800); |
| bg-teal-900 | background-color: var(--teal-900); |

---

### Transparent black and white

Use transparent black and white background utilities for overlays, glass-like panels, hover surfaces, and text blocks placed over images or colorful backgrounds. These classes use fixed RGBA values, so they do not change with light or dark mode.

| Class pattern | Styles |
| --- | --- |
| bg-white-10% to bg-white-90% | background-color: rgba(255, 255, 255, 0.1 to 0.9); |
| bg-black-10% to bg-black-90% | background-color: rgba(0, 0, 0, 0.1 to 0.9); |
| hover:bg-white-10% to hover:bg-white-90% | apply transparent white on hover |
| hover:bg-black-10% to hover:bg-black-90% | apply transparent black on hover |
| group-hover:bg-white-10% to group-hover:bg-white-90% | apply transparent white when a parent with `group` is hovered |
| group-hover:bg-black-10% to group-hover:bg-black-90% | apply transparent black when a parent with `group` is hovered |

### Transparent overlay examples

Combine these utilities with text, spacing, border radius, and hover utilities to create readable overlays without writing custom CSS.

      White 20% over blue

      Black 20% over yellow

```html
<div class="bg-blue rounded p-5 text-white">
  <div class="bg-white-20% p-4 rounded">
    White 20% over blue
  </div>
</div>

<div class="bg-yellow-300 rounded p-5">
  <div class="bg-black-20% p-4 rounded text-white">
    Black 20% over yellow
  </div>
</div>
```

### Transparent hover examples

    Hover for darker overlay

Hover this parent

      Child overlay changes

```html
<button type="button" class="btn bg-black-10% hover:bg-black-20%">
  Hover for darker overlay
</button>

<div class="group bg-purple rounded p-4 text-white">
  <p class="mb-3">Hover this parent</p>
  <div class="bg-white-10% group-hover:bg-white-30% p-3 rounded">
    Child overlay changes
  </div>
</div>
```

### Hover state

All background color classes support hover interactions using the `hover:` prefix. Additionally, you can create group hover effects where child elements respond to parent hover using the `group-hover:` prefix. The parent element must have the `group` class applied for group hover to work.

### Basic example

Primary Background
Secondary Background
Green 200 Shade

```html
<div class="bg-primary text-white p-4 rounded mb-3">Primary Background</div>
<div class="bg-secondary p-4 rounded mb-3">Secondary Background</div>
<div class="bg-green-200 p-4 rounded">Green 200 Shade</div>
```

### Examples with hover

Hover states provide visual feedback when users interact with elements. Use simple hover classes for individual elements, or group-hover for coordinated effects across related elements.

  Hover over me to see darker blue

  Transparent to light red on hover

Hover over this card

    This changes to green when parent is hovered

```html
<div class="bg-blue hover:bg-blue-700 text-white p-4 rounded transition">
  Hover over me to see darker blue
</div>

<div class="bg-transparent hover:bg-red-100 p-4 rounded border transition">
  Transparent to light red on hover
</div>

<div class="group border rounded p-3">
  <p>Hover over this card</p>
  <div class="bg-neutral-200 group-hover:bg-green-500 p-3 rounded transition">
    This changes to green when parent is hovered
  </div>
</div>
```

### Dark mode

All color variables defined in `scss/_theme.scss` have both light and dark mode versions. The system automatically switches to dark mode colors when you add the `theme-dark` class to the HTML tag or set the `data-theme="dark"` attribute. No additional classes are needed—your background colors will automatically adapt to the theme.

### Static colors (no change on dark mode)

By default, all CSS variable-based background colors automatically adapt when switching to dark mode. However, there are situations where you need colors to remain consistent regardless of the theme—such as brand logos, fixed UI elements, or specific design requirements where a particular color must stay the same in both light and dark modes.

Method 1: Direct hex color codes

Use hex color codes directly in your CSS or inline styles. This bypasses the CSS variable system entirely, ensuring the color never changes.

        This stays #bed2ff in both themes
        This stays #0dab47 in both themes

```html
<div style="background-color: #6163fe;" class="p-4"> This stays #6163fe in both themes </div>
<div style="background-color: #0dab47;" class="p-4"> This stays #0dab47 in both themes </div>
```

Method 2: Using theme-static class or data attribute

Add the `theme-static` class or `data-theme="static"` attribute to any element to prevent its CSS variable-based colors from changing in dark mode.
This preserves the light mode color values even when dark mode is active.
You can apply this to the element itself or to a parent container to affect all child elements. You can apply `theme-static` to `body` or root html tag to prevent changing style based on color mode.

        Green 200 stays light green even in dark mode
        Primary 100 remains static using data attribute

        Static Yellow 300
        Static Purple 400

```html
<div class="bg-green-200 theme-static p-4"> Green 200 stays light green even in dark mode </div>
<div class="bg-primary-100 p-4" data-theme="static"> Primary 100 remains static using data attribute </div>
<article class="theme-static border p-2">
    <div class="bg-yellow-300 p-2">Static Yellow 300</div>
    <div class="bg-purple-400 p-2">Static Purple 400</div>
</article>
```

When to use static colors: Use static colors for brand elements that must maintain consistent appearance (logos, badges), data visualizations where color meaning is semantic, or UI elements where color consistency is part of the user experience design.

### How to customize?

To customize background colors, edit the `scss/utilities/_background.scss` file. You can modify the `$colors_bg_main` map to change which shade is used for base color classes (e.g., changing bg-blue from shade 500 to 600), or edit `scss/_theme.scss` to adjust the actual color values. After making changes, recompile your SCSS to CSS.

```css
/* Define basic background colors in scss/utilities/_background.scss */
$colors_bg_main:(
  "primary": map-get(map-get($colors_list, "primary"), "500"),
  "red": map-get(map-get($colors_list, "red"), "500"),
  "green": map-get(map-get($colors_list, "green"), "500"),
  /* Add your custom colors here */
  "custom": #FF5733
);

/* Generate classes for all background colors */
@each $classname, $value in $colors_bg_main {
  .bg-#{$classname} {
    background-color: #{$value};
  }
  .hover\:bg-#{$classname}:hover {
    background-color: #{$value};
  }
  .group:hover .group-hover\:bg-#{$classname} {
    background-color: #{$value};
  }
}

/* Generate classes for all color shades from _theme.scss */
@each $color, $shades in $colors_list {
  @each $shade, $value in $shades {
    .bg-#{$color}-#{$shade} {
      background-color: var(--#{$color}-#{$shade});
    }
    .hover\:bg-#{$color}-#{$shade}:hover {
      background-color: var(--#{$color}-#{$shade}) !important;
    }
    .group:hover .group-hover\:bg-#{$color}-#{$shade} {
      background-color: var(--#{$color}-#{$shade}) !important;
    }
  }
}
```

To compile SCSS to CSS, you have two main options:

Option A: Use Node.js and npm tools if you're comfortable with the terminal and command-line interface.

Option B: Use visual applications like Prepros.io or CodeKit if you prefer graphical user interfaces and want to avoid terminal commands.
