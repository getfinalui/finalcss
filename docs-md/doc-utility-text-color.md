<!-- Generated from docs/doc-utility-text-color.html. Keep this file in sync with the HTML documentation. -->

# Text color

---

Text color utilities allow you to quickly apply text colors to any element. The library provides semantic color names (like text-base, text-secondary, text-muted), theme colors (like text-primary, text-red, text-blue), and shade variants (like text-blue-300, text-red-600) for fine-grained control. All colors automatically adapt to dark mode through CSS variables.

---

### What it does?

Here are representative examples of these classes:

| Class | Styles |
| --- | --- |
| text-base | color: var(--text-color-base); |
| text-secondary | color: var(--text-color-secondary); |
| text-muted | color: var(--text-color-muted); |
| text-inherit | color: inherit; |
| text-initial | color: initial; |
| text-white | color: #FFF; |
| text-dark | color: #000; |
| text-black | color: #000; |
| text-primary | color: #4f46e5; |
| text-primary-100 | color: var(--primary-100) !important; |
| text-primary-200 | color: var(--primary-200) !important; |
| text-primary-300 ... 900 | color: var(--primary-[shade]) !important; |
| text-red | color: #d11616; |
| text-red-100 ... 900 | color: var(--red-[shade]) !important; |
| text-green | color: #0d923e; |
| text-green-100 ... 900 | color: var(--green-[shade]) !important; |
| text-blue | color: #2563eb; |
| text-blue-100 ... 900 | color: var(--blue-[shade]) !important; |
| text-orange | color: #d14f09; |
| text-orange-100 ... 900 | color: var(--orange-[shade]) !important; |
| text-yellow | color: #D6A400; |
| text-yellow-100 ... 900 | color: var(--yellow-[shade]) !important; |
| text-purple | color: #9333ea; |
| text-purple-100 ... 900 | color: var(--purple-[shade]) !important; |
| text-teal | color: #0d9488; |
| text-teal-100 ... 900 | color: var(--teal-[shade]) !important; |
| text-neutral-0 ... 1000 | color: var(--neutral-[shade]) !important; |
| hover:text-* | color: [color] (on hover state); |
| group-hover:text-* | color: [color] (when parent .group is hovered); |
| links-color-* | Applies color to all elements inside; |

### Basic example

This text uses the base color

This text uses the secondary color

This text uses the muted color

This text uses the primary theme color

This text is red

This text is green

This text is blue

```html
<p class="text-base">This text uses the base color</p>
<p class="text-secondary">This text uses the secondary color</p>
<p class="text-muted">This text uses the muted color</p>
<p class="text-primary">This text uses the primary theme color</p>
<p class="text-red">This text is red</p>
<p class="text-green">This text is green</p>
<p class="text-blue">This text is blue</p>
```

### Text on hover

You can change text color on hover using the `hover:` prefix. This is useful for interactive elements like links and buttons where you want to provide visual feedback.

Hover over this text to see it turn primary color

Hover over this text to see it turn red

Hover over this text to see it turn green

    Hover me

```html
<p class="text-base hover:text-primary">Hover over this text to see it turn primary color</p>
<p class="text-secondary hover:text-red">Hover over this text to see it turn red</p>
<p class="text-muted hover:text-green">Hover over this text to see it turn green</p>
<button class="btn text-base hover:text-blue">Hover me</button>
```

### Changing text color based on parent hover

Use the `group-hover:` variant to change child element colors when hovering over a parent element. Add the `group` class to the parent, then use `group-hover:text-*` on child elements. This is perfect for card components, navigation items, or any grouped interactive elements.

#### Hover over this card

The text color changes on parent hover

#### Interactive Card

Hover over the entire card area

```html
 <div class="card group ">
    <h6 class="group-hover:text-primary">Hover over this card</h6>
    <p class="text-secondary group-hover:text-red">The text color changes on parent hover</p>
  </div>

  <div class="card group hover:bg-primary-100">
      <h6 class="group-hover:text-green">Interactive Card</h6>
      <p class="text-secondary group-hover:text-purple">Hover over the entire card area</p>
  </div>
```

### Link colors

Apply colors to all links within a container using `links-color-*` classes. This is useful for styling multiple links at once without adding classes to each individual link element.

Links in this container are primary colored: [Link one](#), [Link two](#), [Link three](#)

Links in this container are red: [Link one](#), [Link two](#), [Link three](#)

Links in this container are green: [Link one](#), [Link two](#), [Link three](#)

```html
 <div class="links-color-primary">
    <p>Links in this container are primary colored: <a href="#">Link one</a>, <a href="#">Link two</a>, <a href="#">Link three</a></p>
  </div>
  <div class="links-color-red">
    <p>Links in this container are red: <a href="#">Link one</a>, <a href="#">Link two</a>, <a href="#">Link three</a></p>
  </div>
  <div class="links-color-green">
    <p>Links in this container are green: <a href="#">Link one</a>, <a href="#">Link two</a>, <a href="#">Link three</a></p>
</div>
```

### Different color shades

Each color comes with 9 shade variants (100-900) for precise color control. Use lighter shades (100-300) for subtle text, medium shades (400-600) for standard text, and darker shades (700-900) for emphasis. For example: `text-blue-300`, `text-red-600`, `text-green-800`.

#### Blue shades:

text-blue-200 - Lightest

text-blue-300 - Light

text-blue-500 - Medium

text-blue-700 - Dark

text-blue-900 - Darkest

#### Red shades:

text-red-200

text-red-400

text-red-600

text-red-800

#### Green shades:

text-green-200

text-green-400

text-green-600

text-green-800

```html
<p class="text-blue-200">text-blue-200 - Lightest</p>
<p class="text-blue-300">text-blue-300 - Light</p>
<p class="text-blue-500">text-blue-500 - Medium</p>
<p class="text-blue-700">text-blue-700 - Dark</p>
<p class="text-blue-900">text-blue-900 - Darkest</p>
<p class="text-red-600">text-red-600</p&gt
<p class="text-green-600">text-green-600</p&gt
```

### How color system work?

All colors are defined in the `scss/_theme.scss` file using a comprehensive color palette system. The library uses CSS custom properties (variables) that automatically adapt to dark mode, ensuring consistent theming across your entire application. When dark mode is enabled, color values automatically adjust to maintain proper contrast and readability without requiring any additional classes or modifications to your HTML.

### Base color variables

FinalCSS uses semantic color variables defined in the `scss/_variables-root.scss` file. You can override these default values to customize your theme. Key variables include:

```css
/* Semantic text color variables */
--text-color-base: var(--neutral-800);
--text-color-secondary: var(--neutral-600);
--text-color-muted: var(--neutral-400);
--text-color-invert: #fff;
--text-color-primary: var(--primary-600);
/* Border and background variables */
--border-color-default: var(--neutral-200);
--bg-color-base: #fff;
--bg-color-raised: var(--neutral-50);
```

These variables reference the main color palette, which includes shades from 100 to 900 for colors like primary, red, green, blue, orange, yellow, purple, teal, and neutral. You can customize any of these values to match your brand identity.

### How to customize?

To customize text colors, edit the `scss/utilities/_text-color.scss` file and modify the color definitions in `scss/_theme.scss`. After making changes, compile your SCSS to CSS to see the updates.

```css
 /* scss/utilities/_text-color.scss
    Define colors of text
    Default color chosen as 600, for example text-red classname = text-red-600
  */
  $colors_text_main:(
    "base": var(--text-color-base),
    "secondary": var(--text-color-secondary),
    "muted": var(--text-color-muted),
    "inherit": inherit,
    "initial": initial,
    "white": #FFF,
    "dark": #000,
    "black": #000,
    "primary": map-get(map-get($colors_list, "primary"), "600"),
    "red": map-get(map-get($colors_list, "red"), "600"),
    "green": map-get(map-get($colors_list, "green"), "600"),
    "blue": map-get(map-get($colors_list, "blue"), "600"),
    "orange": map-get(map-get($colors_list, "orange"), "600"),
    "yellow": map-get(map-get($colors_list, "yellow"), "600"),
    "purple": map-get(map-get($colors_list, "purple"), "600"),
    "teal": map-get(map-get($colors_list, "teal"), "600")
  );

  /* Link colors or a tag */
  @each $classname, $value in $colors_text_main {
    .links-color-#{$classname} a { color: #{$value}; }
    .text-#{$classname} { color: #{$value}; }
    .hover\:text-#{$classname}:hover{ color: #{$value}; }
    .group:hover .group-hover\:text-#{$classname}{ color: #{$value}; }
  }

  /* Generate classes for text colors based on color list of theme.scss */
  @each $color, $shades in $colors_list {
    @each $shade, $value in $shades {
      .text-#{$color}-#{$shade} { color:var(--#{$color}-#{$shade}) !important;  }
      .hover\:text-#{$color}-#{$shade}:hover { color:var(--#{$color}-#{$shade}) !important; }
      .group:hover .group-hover\:text-#{$color}-#{$shade} { color:var(--#{$color}-#{$shade}) !important; }
    }
  }
```

To compile SCSS to CSS, you have two main options:

Option A: Use Node.js and npm tools if you're comfortable with the terminal and command-line interface. Install sass via npm (`npm install -g sass`) and run `sass input.scss output.css` to compile.

Option B: Use visual applications like Prepros.io or CodeKit if you prefer graphical user interfaces and want to avoid terminal commands. These apps provide drag-and-drop functionality and automatic compilation when you save files.
