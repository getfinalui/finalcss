<!-- Generated from docs/doc-utility-visibility.html. Keep this file in sync with the HTML documentation. -->

# Visibility

---

Visibility utilities control whether an element is visible while preserving its layout space. Use them when you want to hide content without changing surrounding layout. For content that should be hidden visually but still available to assistive technologies, use `visually-hidden`.

Responsive: Yes

lg:classname, md:classname, sm:classname,

max-lg:classname, max-md:classname, max-sm:classname

---

### What it does?

Here are the available visibility classes:

| Class | Styles |
| --- | --- |
| visibility-visible | visibility: visible; |
| visibility-hidden | visibility: hidden; |
| visibility-collapse | visibility: collapse; |
| visually-hidden | Hides visually while keeping content available to screen readers; |
| md:visibility-hidden | visibility: hidden at 921px and above; |
| max-sm:visibility-collapse | visibility: collapse at 640px and below; |

### Basic example

      Visible
      Hidden but space remains
      Next item

```html
<div class="visibility-visible">Visible</div>
<div class="visibility-hidden">Hidden but space remains</div>
<div>Next item</div>
```

### Responsive visibility

Responsive variants are useful when an item should stay in the layout but be hidden at specific viewport sizes.

      Always visible
      Hidden on small screens
      Still keeps grid space

```html
<div class="d-grid grid-template-cols-3 max-sm:grid-template-cols-1 gap-3">
  <div>Always visible</div>
  <div class="max-sm:visibility-hidden">Hidden on small screens</div>
  <div>Still keeps grid space</div>
</div>
```

### Visually hidden text

Use `visually-hidden` for accessible labels on icon-only controls or extra context for screen readers.

      ?
      Open help

```html
<button type="button" class="btn btn-icon btn-primary">
  <span aria-hidden="true">?</span>
  <span class="visually-hidden">Open help</span>
</button>
```

### How to customize?

You can customize visibility utilities in `scss/utilities/_visibility.scss`. The responsive variants are generated from `scss/_breakpoint-config.scss`. After editing either file, compile the SCSS into the files in `css/`.

```css
/* Add a visible-on-print helper */
.visibility-print {
  visibility: hidden;
}

@media print {
  .visibility-print {
    visibility: visible;
  }
}
```
