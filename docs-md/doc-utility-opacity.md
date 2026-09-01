<!-- Generated from docs/doc-utility-opacity.html. Keep this file in sync with the HTML documentation. -->

# Opacity

---

Opacity utilities control the transparency level of elements. Use these classes to create fade effects, overlay elements, disabled states, or to subtly de-emphasize content. The utility includes hover states and group-hover variants for interactive opacity changes. Values range from 0 (fully transparent) to 100 (fully opaque) in increments of 10.

Responsive: No

Hover support: ✅ Yes

hover:classname, group-hover:classname

---

### What it does?

Here are representative examples of these classes:

| Class | Styles |
| --- | --- |
| opacity-0 | opacity: 0; |
| opacity-10 | opacity: 0.1; |
| opacity-20 | opacity: 0.2; |
| opacity-30 | opacity: 0.3; |
| opacity-40 | opacity: 0.4; |
| opacity-50 | opacity: 0.5; |
| opacity-60 | opacity: 0.6; |
| opacity-70 | opacity: 0.7; |
| opacity-80 | opacity: 0.8; |
| opacity-90 | opacity: 0.9; |
| opacity-100 | opacity: 1; |
| hover:opacity-{value}:hover | opacity: {value} !important; (on hover) |
| group-hover:opacity-{value} | opacity: {value} !important; (when parent .group is hovered) |

### Basic example

  0
  10
  20
  30
  40
  50
  60
  70
  80
  90
  100

```html
<div class="opacity-0 bg-primary p-4 rounded">0</div>
<div class="opacity-10 bg-primary p-4 rounded">10</div>
<div class="opacity-20 bg-primary p-4 rounded">20</div>
<div class="opacity-30 bg-primary p-4 rounded">30</div>
<div class="opacity-40 bg-primary p-4 rounded">40</div>
<div class="opacity-50 bg-primary p-4 rounded">50</div>
<div class="opacity-60 bg-primary p-4 rounded">60</div>
<div class="opacity-70 bg-primary p-4 rounded">70</div>
<div class="opacity-80 bg-primary p-4 rounded">80</div>
<div class="opacity-90 bg-primary p-4 rounded">90</div>
<div class="opacity-100 bg-primary p-4 rounded">100</div>
```

### Example with hover

Hover opacity effects create smooth interactive feedback. Use `.hover:opacity-{value}` to change element opacity on hover.

    Hover me (opacity-80)

    Hover me (opacity-60)

    Hover me (opacity-50)

```html
<button class="bg-primary text-white px-6 py-3 rounded hover:opacity-80">
  Hover me (opacity-80)
</button>

<button class="bg-blue text-white px-6 py-3 rounded hover:opacity-60">
  Hover me (opacity-60)
</button>

<button class="bg-green text-white px-6 py-3 rounded hover:opacity-50">
  Hover me (opacity-50)
</button>
```

Group-hover allows child elements to change opacity when hovering over a parent element with the `.group` class. This creates coordinated hover effects across multiple elements.

#### Product Card

Hover over this card to see opacity changes

      Icon Area

#### Feature Card

Multiple elements fade on hover

```html
<div class="group bg-white p-5 rounded-md shadow-sm">
  <img src="image.jpg" class="rounded mb-3 group-hover:opacity-80" alt="Image">
  <h6>Product Card</h6>
  <p class="text-secondary group-hover:opacity-70">
    Hover over this card to see opacity changes
  </p>
</div>

<div class="group bg-white p-5 rounded-md shadow-sm">
  <div class="bg-blue rounded p-4 mb-3 group-hover:opacity-60">
    Icon Area
  </div>
  <h6 class="group-hover:opacity-80">Feature Card</h6>
  <p class="text-secondary group-hover:opacity-50">
    Multiple elements fade on hover
  </p>
</div>
```

Opacity is commonly used for disabled states, placeholder content, secondary information, and creating visual hierarchy. Lower opacity values de-emphasize content without hiding it completely.

#### Main Content

This is the primary text with full opacity.

This is secondary text with opacity-70.

This is tertiary text with opacity-40.

    Active Button

    Disabled Button (opacity-50)

```html
<div class="bg-neutral-100 p-4 rounded">
    <h6>Main Content</h6>
    <p>This is the primary text with full opacity.</p>
    <p class="opacity-70">This is secondary text with opacity-70.</p>
    <p class="opacity-40">This is tertiary text with opacity-40.</p>
</div>

<button class="bg-primary text-white px-6 py-3 rounded">
  Active Button
</button>

<button class="bg-primary text-white px-6 py-3 rounded opacity-50" disabled>
  Disabled Button (opacity-50)
</button>
```

Create overlay effects by combining opacity with positioning. This is useful for image overlays, modal backdrops, and loading states.

```html
<div class="relative rounded overflow-hidden" style="height: 200px;">
  <div class="absolute top-0 left-0 w-full h-full bg-dark opacity-30 hover:opacity-60"></div>
  <img src="https://placehold.net/1-800x600.png"class="w-full h-full object-fit-cover">
</div>
```

### How to customize?

You can customize opacity values by modifying the `$opacity_map` variable in `scss/utilities/_opacity.scss`. Add, remove, or adjust opacity levels to match your design requirements. The SCSS loop automatically generates all base classes, hover variants, and group-hover variants. After making changes, recompile your SCSS to generate the updated `css/final.css` file.

```css
/* In scss/utilities/_opacity.scss */

$opacity_map:(
  "0": 0,
  "10": 0.1,
  "20": 0.2,
  "30": 0.3,
  "40": 0.4,
  "50": 0.5,
  "60": 0.6,
  "70": 0.7,
  "80": 0.8,
  "90": 0.9,
  "100": 1
);

/* Generate utility classes based on opacity_map */
/* Example: .opacity-10 { opacity: 0.1; } */
@each $name, $value in $opacity_map {
  .opacity-#{$name} { opacity: #{$value}; }
  .hover\:opacity-#{$name}:hover { opacity: #{$value}!important; }
  .group:hover .group-hover\:opacity-#{$name} { opacity: #{$value}!important;}
}

// Compile SCSS to CSS
// Run: sass scss/main.scss css/final.css
```
