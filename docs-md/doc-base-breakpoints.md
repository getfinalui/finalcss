<!-- Generated from docs/doc-base-breakpoints.html. Keep this file in sync with the HTML documentation. -->

# Breakpoints

---

Breakpoints are responsive prefixes added before utility and grid class names. Final CSS uses Tailwind-like prefix syntax such as `lg:d-flex`, `md:w-50%`, and `max-sm:d-none`. The same base utility can be applied at different viewport sizes without writing custom media queries.

Responsive classes are generated from `scss/_breakpoint-config.scss` and compiled into `css/final.css`.

---

### Breakpoint list

Final CSS includes both min-width and max-width breakpoints.

| Prefix | Media query | Common use |
| --- | --- | --- |
| max-lg: | @media (max-width: 1200px) | Tablet and smaller |
| max-md: | @media (max-width: 920px) | Large mobile and smaller |
| max-sm: | @media (max-width: 640px) | Mobile only |
| sm: | @media (min-width: 641px) | Small tablet and up |
| md: | @media (min-width: 921px) | Larger tablet and up |
| lg: | @media (min-width: 1201px) | Desktop and widescreen |

### How prefix syntax works

Write the breakpoint prefix, a colon, then the normal class name. The compiled CSS escapes the colon internally, but in HTML you write it naturally.

| Class | Meaning |
| --- | --- |
| lg:d-flex | display: flex at 1201px and wider |
| md:w-50% | width: 50% at 921px and wider |
| max-sm:d-none | display: none at 640px and smaller |
| max-lg:col-12 | width: 100% at 1200px and smaller |
| lg:grid-template-cols-4 | grid-template-columns: repeat(4, minmax(0, 1fr)) at 1201px and wider |

### Mobile-first approach

Start with mobile/default styles, then add larger breakpoint overrides.

      First
      Second
      Third

```html
<!-- Column by default, row on desktop -->
<div class="d-flex flex-col lg:flex-row gap-3">
  <div>First</div>
  <div>Second</div>
  <div>Third</div>
</div>
```

### Desktop-first approach

Start with desktop/default styles, then use max-width prefixes to adjust smaller screens.

      Navigation
      Content area

```html
<!-- Row by default, column on mobile -->
<div class="d-flex flex-row max-sm:flex-col gap-3">
  <div>Navigation</div>
  <div>Content area</div>
</div>
```

### Common responsive patterns

Use responsive prefixes with display, width, spacing, column, order, grid, and many utility classes.

      Card 1
      Card 2
      Card 3
      Card 4

```html
<div class="d-grid grid-template-cols-1 md:grid-template-cols-2 lg:grid-template-cols-4 gap-3 md:gap-6">
  <article class="card card-body">Card 1</article>
  <article class="card card-body">Card 2</article>
  <article class="card card-body">Card 3</article>
  <article class="card card-body">Card 4</article>
</div>
```

### Show and hide by breakpoint

Combine default display classes with breakpoint display classes to control what users see at each screen size.

    Visible on medium screens and wider
    Visible below medium screens

```html
<div class="d-none md:d-block">Visible on medium screens and wider</div>
<div class="d-block md:d-none">Visible below medium screens</div>
```

### How to customize?

Open `scss/_breakpoint-config.scss` and edit the `$breakpoints` map. Utility partials read this map and generate prefixed classes during SCSS compilation.

```css
// Breakpoint sizes to generate utility classes
$breakpoints: (
  // Device-only breakpoints
  'max-lg': 'max-width: 1200px',
  'max-md': 'max-width: 920px',
  'max-sm': 'max-width: 640px',

  // Classic min-width breakpoints
  'sm': 'min-width: 641px',
  'md': 'min-width: 921px',
  'lg': 'min-width: 1201px',
);
```

After changing breakpoint names or values, compile `scss/final.scss` again so `css/final.css` and `css/final.min.css` include the updated responsive classes.
