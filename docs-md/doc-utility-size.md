<!-- Generated from docs/doc-utility-size.html. Keep this file in sync with the HTML documentation. -->

# Size utilities

---

Size utilities control element dimensions with classes for `width`, `height`, `min-width`, `max-width`, `min-height`, and `max-height`. Final CSS includes fixed pixel sizes, percentage sizes, viewport width and height sizes, custom CSS-variable sizes, and responsive variants generated from the breakpoint config.

Responsive: Yes

lg:classname, md:classname, sm:classname,

max-lg:classname, max-md:classname, max-sm:classname

---

## Class reference

Size utilities are generated from the maps in `scss/utilities/_size.scss`.

### Fixed size scale

The fixed scale is based on a 4px step for small values, then larger steps for common layout sizes. The same values are generated for `w-*`, `h-*`, `min-w-*`, `max-w-*`, `min-h-*`, and `max-h-*`.

#### Width sizes

| Class | Styles |
| --- | --- |
| w-unset | width: unset; |
| w-initial | width: initial; |
| w-auto | width: auto; |
| w-0 | width: 0; |
| w-1 | width: 4px; |
| w-2 | width: 8px; |
| w-3 | width: 12px; |
| w-4 | width: 16px; |
| w-5 | width: 20px; |
| w-6 | width: 24px; |
| w-7 | width: 28px; |
| w-8 | width: 32px; |
| w-9 | width: 36px; |
| w-10 | width: 40px; |
| w-11 | width: 44px; |
| w-12 | width: 48px; |
| w-14 | width: 56px; |
| w-16 | width: 64px; |
| w-18 | width: 72px; |
| w-20 | width: 80px; |
| w-25 | width: 100px; |
| w-30 | width: 120px; |
| w-35 | width: 140px; |
| w-40 | width: 160px; |
| w-45 | width: 180px; |
| w-50 | width: 200px; |
| w-55 | width: 220px; |
| w-60 | width: 240px; |
| w-65 | width: 260px; |
| w-70 | width: 280px; |
| w-75 | width: 300px; |
| w-80 | width: 320px; |
| w-85 | width: 340px; |
| w-90 | width: 360px; |
| w-95 | width: 380px; |
| w-100 | width: 400px; |
| w-full | width: 100%; |

#### Min width and max width

| Class | Styles |
| --- | --- |
| min-w-unset | min-width: unset; |
| min-w-initial | min-width: initial; |
| min-w-auto | min-width: auto; |
| min-w-0 | min-width: 0; |
| min-w-1 | min-width: 4px; |
| min-w-2 | min-width: 8px; |
| min-w-3 | min-width: 12px; |
| min-w-4 | min-width: 16px; |
| min-w-5 | min-width: 20px; |
| min-w-6 | min-width: 24px; |
| min-w-7 | min-width: 28px; |
| min-w-8 | min-width: 32px; |
| min-w-9 | min-width: 36px; |
| min-w-10 | min-width: 40px; |
| min-w-11 | min-width: 44px; |
| min-w-12 | min-width: 48px; |
| min-w-14 | min-width: 56px; |
| min-w-16 | min-width: 64px; |
| min-w-18 | min-width: 72px; |
| min-w-20 | min-width: 80px; |
| min-w-25 | min-width: 100px; |
| min-w-30 | min-width: 120px; |
| min-w-35 | min-width: 140px; |
| min-w-40 | min-width: 160px; |
| min-w-45 | min-width: 180px; |
| min-w-50 | min-width: 200px; |
| min-w-55 | min-width: 220px; |
| min-w-60 | min-width: 240px; |
| min-w-65 | min-width: 260px; |
| min-w-70 | min-width: 280px; |
| min-w-75 | min-width: 300px; |
| min-w-80 | min-width: 320px; |
| min-w-85 | min-width: 340px; |
| min-w-90 | min-width: 360px; |
| min-w-95 | min-width: 380px; |
| min-w-100 | min-width: 400px; |
| min-w-full | min-width: 100%; |
| max-w-unset | max-width: unset; |
| max-w-initial | max-width: initial; |
| max-w-auto | max-width: auto; |
| max-w-0 | max-width: 0; |
| max-w-1 | max-width: 4px; |
| max-w-2 | max-width: 8px; |
| max-w-3 | max-width: 12px; |
| max-w-4 | max-width: 16px; |
| max-w-5 | max-width: 20px; |
| max-w-6 | max-width: 24px; |
| max-w-7 | max-width: 28px; |
| max-w-8 | max-width: 32px; |
| max-w-9 | max-width: 36px; |
| max-w-10 | max-width: 40px; |
| max-w-11 | max-width: 44px; |
| max-w-12 | max-width: 48px; |
| max-w-14 | max-width: 56px; |
| max-w-16 | max-width: 64px; |
| max-w-18 | max-width: 72px; |
| max-w-20 | max-width: 80px; |
| max-w-25 | max-width: 100px; |
| max-w-30 | max-width: 120px; |
| max-w-35 | max-width: 140px; |
| max-w-40 | max-width: 160px; |
| max-w-45 | max-width: 180px; |
| max-w-50 | max-width: 200px; |
| max-w-55 | max-width: 220px; |
| max-w-60 | max-width: 240px; |
| max-w-65 | max-width: 260px; |
| max-w-70 | max-width: 280px; |
| max-w-75 | max-width: 300px; |
| max-w-80 | max-width: 320px; |
| max-w-85 | max-width: 340px; |
| max-w-90 | max-width: 360px; |
| max-w-95 | max-width: 380px; |
| max-w-100 | max-width: 400px; |
| max-w-full | max-width: 100%; |

#### Height sizes

| Class | Styles |
| --- | --- |
| h-unset | height: unset; |
| h-initial | height: initial; |
| h-auto | height: auto; |
| h-0 | height: 0; |
| h-1 | height: 4px; |
| h-2 | height: 8px; |
| h-3 | height: 12px; |
| h-4 | height: 16px; |
| h-5 | height: 20px; |
| h-6 | height: 24px; |
| h-7 | height: 28px; |
| h-8 | height: 32px; |
| h-9 | height: 36px; |
| h-10 | height: 40px; |
| h-11 | height: 44px; |
| h-12 | height: 48px; |
| h-14 | height: 56px; |
| h-16 | height: 64px; |
| h-18 | height: 72px; |
| h-20 | height: 80px; |
| h-25 | height: 100px; |
| h-30 | height: 120px; |
| h-35 | height: 140px; |
| h-40 | height: 160px; |
| h-45 | height: 180px; |
| h-50 | height: 200px; |
| h-55 | height: 220px; |
| h-60 | height: 240px; |
| h-65 | height: 260px; |
| h-70 | height: 280px; |
| h-75 | height: 300px; |
| h-80 | height: 320px; |
| h-85 | height: 340px; |
| h-90 | height: 360px; |
| h-95 | height: 380px; |
| h-100 | height: 400px; |
| h-full | height: 100%; |

#### Min height and max height

| Class | Styles |
| --- | --- |
| min-h-unset | min-height: unset; |
| min-h-initial | min-height: initial; |
| min-h-auto | min-height: auto; |
| min-h-0 | min-height: 0; |
| min-h-1 | min-height: 4px; |
| min-h-2 | min-height: 8px; |
| min-h-3 | min-height: 12px; |
| min-h-4 | min-height: 16px; |
| min-h-5 | min-height: 20px; |
| min-h-6 | min-height: 24px; |
| min-h-7 | min-height: 28px; |
| min-h-8 | min-height: 32px; |
| min-h-9 | min-height: 36px; |
| min-h-10 | min-height: 40px; |
| min-h-11 | min-height: 44px; |
| min-h-12 | min-height: 48px; |
| min-h-14 | min-height: 56px; |
| min-h-16 | min-height: 64px; |
| min-h-18 | min-height: 72px; |
| min-h-20 | min-height: 80px; |
| min-h-25 | min-height: 100px; |
| min-h-30 | min-height: 120px; |
| min-h-35 | min-height: 140px; |
| min-h-40 | min-height: 160px; |
| min-h-45 | min-height: 180px; |
| min-h-50 | min-height: 200px; |
| min-h-55 | min-height: 220px; |
| min-h-60 | min-height: 240px; |
| min-h-65 | min-height: 260px; |
| min-h-70 | min-height: 280px; |
| min-h-75 | min-height: 300px; |
| min-h-80 | min-height: 320px; |
| min-h-85 | min-height: 340px; |
| min-h-90 | min-height: 360px; |
| min-h-95 | min-height: 380px; |
| min-h-100 | min-height: 400px; |
| min-h-full | min-height: 100%; |
| max-h-unset | max-height: unset; |
| max-h-initial | max-height: initial; |
| max-h-auto | max-height: auto; |
| max-h-0 | max-height: 0; |
| max-h-1 | max-height: 4px; |
| max-h-2 | max-height: 8px; |
| max-h-3 | max-height: 12px; |
| max-h-4 | max-height: 16px; |
| max-h-5 | max-height: 20px; |
| max-h-6 | max-height: 24px; |
| max-h-7 | max-height: 28px; |
| max-h-8 | max-height: 32px; |
| max-h-9 | max-height: 36px; |
| max-h-10 | max-height: 40px; |
| max-h-11 | max-height: 44px; |
| max-h-12 | max-height: 48px; |
| max-h-14 | max-height: 56px; |
| max-h-16 | max-height: 64px; |
| max-h-18 | max-height: 72px; |
| max-h-20 | max-height: 80px; |
| max-h-25 | max-height: 100px; |
| max-h-30 | max-height: 120px; |
| max-h-35 | max-height: 140px; |
| max-h-40 | max-height: 160px; |
| max-h-45 | max-height: 180px; |
| max-h-50 | max-height: 200px; |
| max-h-55 | max-height: 220px; |
| max-h-60 | max-height: 240px; |
| max-h-65 | max-height: 260px; |
| max-h-70 | max-height: 280px; |
| max-h-75 | max-height: 300px; |
| max-h-80 | max-height: 320px; |
| max-h-85 | max-height: 340px; |
| max-h-90 | max-height: 360px; |
| max-h-95 | max-height: 380px; |
| max-h-100 | max-height: 400px; |
| max-h-full | max-height: 100%; |

### Percentage sizes

Percentage classes include values from `10%` to `100%` in 5% steps after 10%. Escape the percent sign in CSS, but write it normally in HTML class names.

| Class examples | Styles |
| --- | --- |
| w-10%, h-10% | width / height: 10%; |
| w-25%, h-25% | width / height: 25%; |
| w-50%, h-50% | width / height: 50%; |
| w-75%, h-75% | width / height: 75%; |
| w-100%, h-100% | width / height: 100%; |
| min-w-50%, max-w-90% | min-width: 50%; max-width: 90%; |
| min-h-50%, max-h-100% | min-height: 50%; max-height: 100%; |

### Viewport sizes

Viewport width classes use `vw` and viewport height classes use `vh`. Width viewport classes are generated for width, min-width, and max-width. Height viewport classes are generated for height, min-height, and max-height.

| Class examples | Styles |
| --- | --- |
| w-10vw, max-w-10vw | width / max-width: 10vw; |
| w-50vw, min-w-50vw | width / min-width: 50vw; |
| w-100vw, max-w-100vw | width / max-width: 100vw; |
| h-10vh, max-h-10vh | height / max-height: 10vh; |
| h-50vh, min-h-50vh | height / min-height: 50vh; |
| h-100vh, max-h-100vh | height / max-height: 100vh; |

### Custom CSS-variable sizes

Custom size utilities read values from inline or inherited CSS variables. Use them when a size is too specific for the shared scale but you still want to keep utility-style markup.

| Class | Styles |
| --- | --- |
| w-custom | width: var(--w, initial); |
| h-custom | height: var(--h, initial); |
| min-w-custom | min-width: var(--min-w, initial); |
| max-w-custom | max-width: var(--max-w, initial); |

---

## Fixed width and height

Use fixed size utilities for icons, avatars, placeholders, thumbnails, and other elements that should stay on the same pixel scale.

```html
<div class="w-10 h-10 rounded bg-blue-100"></div>
<div class="w-16 h-16 rounded bg-green-100"></div>
<div class="w-25 h-25 rounded bg-orange-100"></div>
<div class="w-40 h-40 rounded bg-purple-100"></div>
```

---

## Percentage width

Use percentage width classes when an element should size itself relative to its parent. These are useful for split layouts, progress-like blocks, and simple proportional sections.

      w-25%
      w-50%
      w-75%
      w-100%

```html
<div class="border rounded p-3">
  <div class="w-25%">w-25%</div>
  <div class="w-50%">w-50%</div>
  <div class="w-75%">w-75%</div>
  <div class="w-100%">w-100%</div>
</div>
```

### Responsive percentage widths

Combine percentage width classes with responsive prefixes to stack on mobile and split into columns on larger screens.

      Responsive item
      Responsive item
      Responsive item

```html
<div class="d-flex flex-wrap gap-3">
  <div class="w-100% md:w-50% lg:w-25%">Responsive item</div>
  <div class="w-100% md:w-50% lg:w-25%">Responsive item</div>
  <div class="w-100% md:w-50% lg:w-25%">Responsive item</div>
</div>
```

---

## Percentage height

Percentage height depends on the parent having an explicit height. In this example, the parent uses `h-60`, so children can use `h-25%`, `h-50%`, and `h-100%`.

```html
<div class="h-60 d-flex align-items-end gap-3">
  <div class="w-20 h-25%"></div>
  <div class="w-20 h-50%"></div>
  <div class="w-20 h-75%"></div>
  <div class="w-20 h-100%"></div>
</div>
```

---

## Viewport width and height

Use viewport units for sections that relate to the browser window instead of the parent element. Common patterns include hero sections, full-screen app shells, drawers, and scrollable panels.

      min-h-50vh section

```html
<section class="w-full min-h-50vh rounded bg-blue-100 p-5 d-flex align-items-center justify-content-center">
  min-h-50vh section
</section>
```

### Viewport width sidebar

Viewport width classes are useful for panels whose size should be based on the browser width.

      w-40vw with min and max width constraints

```html
<div class="w-40vw max-w-80 min-w-50">
  w-40vw with min and max width constraints
</div>
```

---

## Min and max constraints

Use min and max utilities to keep flexible content readable. They work with fixed sizes, percentage sizes, and viewport-unit sizes.

      Fixed min/max width: min-w-50 max-w-80

      Percentage max width: max-w-75%

```html
<div class="max-w-80 min-w-50">
  Fixed min/max width
</div>
<div class="max-w-75% min-h-20">
  Percentage max width
</div>
```

---

## Custom sizes with CSS variables

Use custom utilities for one-off sizes while keeping the class name stable. The size value comes from CSS variables such as `--w`, `--h`, `--min-w`, and `--max-w`.

      Custom width and height

```html
<div class="w-custom h-custom" style="--w: 280px; --h: 96px;">
  Custom width and height
</div>
```

---

## How to customize?

You can customize the size system in `scss/utilities/_size.scss`. Edit `$size_map` for fixed pixel sizes, `$size_map_percent` for percentage sizes, `$size_map_vw` for viewport width sizes, and `$size_map_vh` for viewport height sizes. Responsive variants are generated from `scss/_breakpoint-config.scss`. After editing, compile `scss/final.scss` into the CSS files.

```css
/* scss/utilities/_size.scss */
$size_map: (
  "0": 0,
  "1": 4px,
  "2": 8px,
  "20": 80px,
  "card": 360px,
  "full": 100%,
);

$size_map_percent: (
  "25": 25%,
  "50": 50%,
  "75": 75%,
  "100": 100%,
);

$size_map_vh: (
  "50": 50vh,
  "100": 100vh,
);
```
