<!-- Generated from docs/doc-utility-text-size.html. Keep this file in sync with the HTML documentation. -->

# Text size

---

Text size utilities control the font-size of text elements. Use these classes to adjust typography scale across your design. Choose from predefined sizes ranging from extra small (text-xs) to extra large (text-9xl). These utilities are perfect for creating visual hierarchy, emphasizing content, or adapting text sizes for different screen sizes using responsive variants.

Responsive: ✅ Yes

lg:classname, md:classname, sm:classname,

max-lg:classname, max-md:classname, max-sm:classname

---

### What it does?

Here are representative examples of these classes:

| Class | Styles |
| --- | --- |
| text-xs | font-size: 0.8rem; |
| text-sm | font-size: 0.9rem; |
| text-default | font-size: 1rem; |
| text-lg | font-size: 1.12rem; |
| text-xl | font-size: 1.3rem; |
| text-2xl | font-size: 1.5rem; |
| text-3xl | font-size: 1.8rem; |
| text-4xl | font-size: 2.2rem; |
| text-5xl | font-size: 2.8rem; |
| text-6xl | font-size: 3.4rem; |
| text-7xl | font-size: 4rem; |
| text-8xl | font-size: 5rem; |
| text-9xl | font-size: 6rem; |

### Basic example

Extra small text (0.8rem)

Small text (0.9rem)

Default text (1rem)

Large text (1.12rem)

Extra large text (1.3rem)

3XL text (1.8rem)

5XL text (2.8rem)

```html
<p class="text-xs">Extra small text (0.8rem)</p>
<p class="text-sm">Small text (0.9rem)</p>
<p class="text-default">Default text (1rem)</p>
<p class="text-lg">Large text (1.12rem)</p>
<p class="text-xl">Extra large text (1.3rem)</p>
<p class="text-3xl">3XL text (1.8rem)</p>
<p class="text-5xl">5XL text (2.8rem)</p>
```

### Examples with responsive class names

Responsive text size utilities allow you to adapt typography for different screen sizes. For example, you can display large headings on desktop that scale down to smaller sizes on mobile devices for better readability and layout. The example below shows text that is 5xl on desktop (lg), 3xl on tablets (md), and xl on mobile devices.

## Responsive Heading

This paragraph adjusts size based on screen width. Small on mobile, default on tablet, large on desktop.

Large text on desktop and tablet, but small on mobile devices only.

```html
<h2 class="text-xl md:text-3xl lg:text-5xl">Responsive Heading</h2>
<p class="text-sm md:text-default lg:text-lg">This paragraph adjusts size based on screen width.</p>
<p class="text-lg max-md:text-sm">Large text on desktop, small on mobile only.</p>
```

### Default heading tags (h1, h2, ..., h6)

All heading tags (h1 through h6) come with predefined font sizes that create a clear typographic hierarchy. These headings have a font-weight of 600, line-height of 1.25, and zero margin by default. H1 is the largest at 3rem, scaling down to h6 at 1rem. You can override these defaults using text size utility classes if needed.

# Heading 1

## Heading 2

### Heading 3

## Heading 4

### Heading 5

#### Heading 6

```html
<h1>Heading 1 (3rem)</h1>
<h2>Heading 2 (2.2rem)</h2>
<h3>Heading 3 (1.8rem)</h3>
<h4>Heading 4 (1.5rem)</h4>
<h5>Heading 5 (1.12rem)</h5>
<h6>Heading 6 (1rem)</h6>
```

### How to customize?

You can customize text sizes by editing the $font-sizes-list map in scss/utilities/_text-size.scss. Add, remove, or modify size values, then recompile your SCSS to CSS. The utility classes and responsive variants will be automatically generated based on your custom configuration and the breakpoints defined in scss/_breakpoint-config.scss.

```css
/* Edit this map in scss/utilities/_text-size.scss */
$font-sizes-list: (
  xs: 0.8rem,
  sm: 0.9rem,
  default: 1rem,
  lg: 1.12rem,
  xl: 1.3rem,
  2xl: 1.5rem,
  3xl: 1.8rem,
  4xl: 2.2rem,
  5xl: 2.8rem,
  6xl: 3.4rem,
  7xl: 4rem,
  8xl: 5rem,
  9xl: 6rem,
  // Add your custom sizes here
  custom: 2.5rem,
) !default;
```

To compile SCSS to CSS, you have two main options:

Option A: Use Node.js and npm tools if you're comfortable with the terminal and command-line interface.

Option B: Use visual applications like Prepros.io or CodeKit if you prefer graphical user interfaces and want to avoid terminal commands.
