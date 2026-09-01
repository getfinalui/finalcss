<!-- Generated from docs/doc-utility-shadow.html. Keep this file in sync with the HTML documentation. -->

# Box Shadow

---

Box shadow utilities add depth and elevation to elements by applying shadow effects. Use these classes to create visual hierarchy and make elements appear raised above the page. Shadows are commonly used on cards, modals, dropdowns, and buttons to improve the visual design and user experience.

Responsive: No

---

### What it does?

Here are representative examples of these classes:

| Class | Styles |
| --- | --- |
| .shadow | box-shadow: 0 4px 8px rgba(64, 64, 64, 0.1); |
| .shadow-top | box-shadow: 0 -4px 8px rgba(64, 64, 64, 0.1); |
| .shadow-sm | box-shadow: 0 1px 3px rgba(64, 64, 64, 0.08); |
| .shadow-lg | box-shadow: 0 6px 12px rgba(64, 64, 64, 0.1); |
| .shadow-inner | box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); |
| .shadow-inset | box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); |
| .shadow-none | box-shadow: none !important; |
| .shadow-0 | box-shadow: none !important; |

### Basic example

    shadow-sm

Small shadow

    shadow

Default shadow

    shadow-lg

Large shadow

```html
<div class="d-flex gap-4">
  <div class="shadow-sm bg-white p-4 rounded">
    <strong>shadow-sm</strong>
    <p>Small shadow</p>
  </div>
  <div class="shadow bg-white p-4 rounded">
    <strong>shadow</strong>
    <p>Default shadow</p>
  </div>
  <div class="shadow-lg bg-white p-4 rounded">
    <strong>shadow-lg</strong>
    <p>Large shadow</p>
  </div>
</div>
```

### Examples

Shadow effects on cards create visual depth and hierarchy. Different shadow sizes indicate different levels of elevation and importance.

#### Product Card

Subtle shadow for list items

#### Featured Card

Standard shadow for main content

#### Modal Dialog

Large shadow for elevated elements

```html
<div class="shadow-sm bg-white p-5 rounded-md">
  <h6>Product Card</h6>
  <p>Subtle shadow for list items</p>
</div>

<div class="shadow bg-white p-5 rounded-md">
  <h6>Featured Card</h6>
  <p>Standard shadow for main content</p>
</div>

<div class="shadow-lg bg-white p-5 rounded-md">
  <h6>Modal Dialog</h6>
  <p>Large shadow for elevated elements</p>
</div>
```

Top shadow is useful for sticky headers, navigation bars, or elements that need shadow above them. Inner shadow creates a recessed or pressed effect.

    shadow-top

Shadow appears above the element

    shadow-inner / shadow-inset

Creates a recessed appearance

```html
<div class="shadow-top bg-white p-4 rounded">
  <strong>shadow-top</strong>
  <p>Shadow appears above the element</p>
</div>

<div class="shadow-inner bg-neutral-100 p-4 rounded">
  <strong>shadow-inner / shadow-inset</strong>
  <p>Creates a recessed appearance</p>
</div>
```

Remove shadows when needed using `.shadow-none` or `.shadow-0`. This is useful for overriding default shadows or creating flat designs.

    With shadow

    shadow-none

    shadow-0

```html
<div class="shadow bg-white p-4 rounded">
  <strong>With shadow</strong>
</div>

<div class="shadow-none bg-white p-4 rounded border">
  <strong>shadow-none</strong>
</div>

<div class="shadow-0 bg-white p-4 rounded border">
  <strong>shadow-0</strong>
</div>
```

### How to customize?

You can customize shadow values by modifying the classes in `scss/utilities/_shadow.scss`. Adjust the blur radius, spread, offset, and color opacity to match your design system. After making changes, recompile your SCSS to generate the updated `css/final.css` file.

```css
/* In scss/utilities/_shadow.scss */

.shadow {
  box-shadow: 0 4px 8px rgba(#404040, .1);
}
.shadow-top {
  box-shadow: 0 -4px 8px rgba(#404040, .1);
}
.shadow-sm {
  box-shadow: 0 1px 3px rgba(#404040, .08);
}
.shadow-lg {
  box-shadow: 0 6px 12px rgba(#404040, 0.1);
}
.shadow-inner, .shadow-inset{
  box-shadow: inset 0 1px 2px rgba(#000, .1);
}
.shadow-none, .shadow-0 {
  box-shadow: none !important;
}

// Compile SCSS to CSS
// Run: sass scss/main.scss css/final.css
```
