<!-- Generated from docs/doc-utility-z-index.html. Keep this file in sync with the HTML documentation. -->

# Z-index

---

Z-index utilities control stacking order. Use them for overlays, dropdowns, sticky headers, menus, tooltips, modals, and layered decorative elements. Z-index only works on positioned elements, so combine these utilities with position classes such as `relative`, `absolute`, `fixed`, or `sticky`.

Responsive: No

---

### What it does?

Here are the available z-index classes:

| Class | Styles |
| --- | --- |
| -z-1 | z-index: -1; |
| z-0 | z-index: 0; |
| z-10 | z-index: 10; |
| z-20 | z-index: 20; |
| z-30 | z-index: 30; |
| z-40 | z-index: 40; |
| z-50 | z-index: 50; |
| z-100 | z-index: 100; |
| z-1000 | z-index: 1000; |
| z-max | z-index: 9999; |

### Basic example

      z-10
      z-20
      z-30

```html
<div class="relative h-40">
  <div class="absolute left-0 top-0 z-10">z-10</div>
  <div class="absolute left-10 top-5 z-20">z-20</div>
  <div class="absolute left-9 top-10 z-30">z-30</div>
</div>
```

### Overlay example

Use higher z-index values for UI that must sit above normal page content, such as floating menus and overlays.

      Page content

        Floating panel with z-50

```html
<div class="relative h-40">
  <div class="absolute left-0 top-0 w-full h-full z-0">Page content</div>
  <div class="absolute right-5 top-5 z-50 card card-body shadow">
    Floating panel
  </div>
</div>
```

### Behind content

Use `-z-1` carefully for background layers. The parent usually needs a stacking context such as `relative z-0`.

#### Content above a background shape

The purple shape uses `-z-1`.

```html
<div class="relative z-0 p-6">
  <div class="absolute left-2 top-2 w-40 h-20 rounded bg-purple-100 -z-1"></div>
  <h6>Content above a background shape</h6>
</div>
```

### How to customize?

You can customize z-index utilities in `scss/utilities/_z-index.scss`. Keep the scale small and intentional so components do not compete with arbitrary stacking values. After editing, compile the SCSS into the files in `css/`.

```css
/* Add project-specific layers */
.z-dropdown { z-index: 1000; }
.z-modal { z-index: 2000; }
.z-toast { z-index: 3000; }
```
