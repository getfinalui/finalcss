<!-- Generated from docs/doc-base-grid.html. Keep this file in sync with the HTML documentation. -->

# Grid system - rows & columns

---

Final CSS includes two layout systems: a flexbox row and column grid inspired by Bootstrap, and CSS Grid utility classes inspired by Tailwind-style composition. Use rows and columns for familiar 12-column layouts, equal-width card lists, and responsive sidebar layouts. Use CSS Grid when you need explicit tracks, column spans, dashboard panels, footers, and more complex page sections.

Responsive: Yes

lg:classname, md:classname, sm:classname,

max-lg:classname, max-md:classname, max-sm:classname

---

## Core classes

The grid system starts with containers, rows, columns, CSS Grid templates, span utilities, and gap utilities. These classes are defined mainly in `scss/_grid-system.scss`, with spacing values coming from `scss/utilities/_gap.scss`.

### Class reference

Here are the main layout classes used to build grids.

| Class | Styles / behavior |
| --- | --- |
| container | width: 100%; max-width: 1280px; horizontal padding: 20px; centered |
| container-fluid | width: 100%; horizontal padding: 20px |
| row | display: flex; flex-wrap: wrap; uses negative margins and child padding for gutters |
| col | flex: 1 0 0 |
| col-auto | flex: 0 0 auto; width: auto |
| col-1 ... col-12 | 12-column percentage widths from 8.33333333% to 100% |
| row-cols-1 ... row-cols-12 | sets equal widths on direct children of a row |
| d-grid | display: grid |
| grid-template-cols-1 ... 12 | grid-template-columns: repeat(n, minmax(0, 1fr)) |
| grid-col-span-1 ... 12 | grid-column: auto / span n |
| grid-col-span-full | grid-column: 1 / -1 |

### Container example

Use `container` for centered content and `container-fluid` when a section should take the full available width.

    Centered container
    Fluid container

```html
<div class="container">Centered container</div>
<div class="container-fluid">Fluid container</div>
```

---

## Breakpoints with layout classes

Use the class without a prefix as the default style, then add responsive prefixes to override it at specific viewport sizes.

### Breakpoint reference

| Prefix | Media query | Common use |
| --- | --- | --- |
| max-sm: | max-width: 640px | Mobile overrides |
| max-md: | max-width: 920px | Large mobile / tablet overrides |
| max-lg: | max-width: 1200px | Tablet and smaller overrides |
| sm: | min-width: 641px | Small tablet and wider |
| md: | min-width: 921px | Large tablet and wider |
| lg: | min-width: 1201px | Desktop and wider |

### Mobile-first layout classes

Start with the smallest layout, then add larger breakpoints. This pattern is common in app shells and responsive content blocks.

      Sidebar
      Main content

```html
<!-- Column by default, row on large screens and wider -->
<div class="d-flex flex-col lg:flex-row gap-3">
  <div>Sidebar</div>
  <div class="flex-grow">Main content</div>
</div>
```

### Desktop-first layout classes

Desktop-first works the other way: set the desktop/default layout first, then override smaller screens with max-width prefixes.

      Filters
      Results

```html
<!-- Row by default, column on mobile -->
<div class="d-flex flex-row max-sm:flex-col gap-3">
  <div>Filters</div>
  <div class="flex-grow">Results</div>
</div>
```

---

## Rows and columns

Use `.row` with `.col-*` classes when you want familiar 12-column flexbox layout behavior. Each direct child of `.row` receives gutter padding automatically. Combine rows with `gap-*`, `gap-rows-*`, or `gap-cols-*` to control gutters.

### Basic example

        col-4

        col-4

        col-4

```html
<div class="row gap-4">
  <div class="col-4">col-4</div>
  <div class="col-4">col-4</div>
  <div class="col-4">col-4</div>
</div>
```

### Example with responsive grid (mobile first)

This layout is full-width on mobile and becomes a sidebar plus content area on desktop.

        lg:col-4 max-lg:col-12

        lg:col-8 max-lg:col-12
