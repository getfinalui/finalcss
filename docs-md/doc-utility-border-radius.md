<!-- Generated from docs/doc-utility-border-radius.html. Keep this file in sync with the HTML documentation. -->

# Border radius

---

Border radius utilities control the rounded corners of elements. Use these classes to quickly apply consistent border radius values across your application. These utilities are perfect for creating cards, buttons, images, and other UI components with rounded corners. The values are customizable through CSS variables defined in `_base-settings.scss`.

Responsive: No

---

### What it does?

Here are representative examples of these classes:

| Class | Styles |
| --- | --- |
| .rounded-0 | border-radius: 0; |
| .rounded | border-radius: var(--border-radius-base); |
| .rounded-sm | border-radius: var(--border-radius-sm); |
| .rounded-md | border-radius: var(--border-radius-md); |
| .rounded-lg | border-radius: var(--border-radius-lg); |
| .rounded-xl | border-radius: var(--border-radius-xl); |
| .rounded-full | border-radius: 400px; flex-shrink: 0; |
| .rounded-circle | border-radius: 50%; flex-shrink: 0; |
| .rounded-top | border-top-left-radius: var(--border-radius-base); border-top-right-radius: var(--border-radius-base); |
| .rounded-bottom | border-bottom-left-radius: var(--border-radius-base); border-bottom-right-radius: var(--border-radius-base); |
| .rounded-left | border-top-left-radius: var(--border-radius-base); border-bottom-left-radius: var(--border-radius-base); |
| .rounded-right | border-top-right-radius: var(--border-radius-base); border-bottom-right-radius: var(--border-radius-base); |
| .rounded-top-0 | border-top-left-radius: 0; border-top-right-radius: 0; |
| .rounded-bottom-0 | border-bottom-left-radius: 0; border-bottom-right-radius: 0; |
| .rounded-left-0 | border-top-left-radius: 0; border-bottom-left-radius: 0; |
| .rounded-right-0 | border-top-right-radius: 0; border-bottom-right-radius: 0; |

### Basic example

  rounded-0
  rounded-sm
  rounded
  rounded-md
  rounded-lg
  rounded-xl

```html
<div class="d-flex gap-3 flex-wrap">
  <div class="rounded-0 bg-primary p-4 text-white">rounded-0</div>
  <div class="rounded-sm bg-blue p-4 text-white">rounded-sm</div>
  <div class="rounded bg-green p-4 text-white">rounded</div>
  <div class="rounded-md bg-orange p-4 text-white">rounded-md</div>
  <div class="rounded-lg bg-purple p-4 text-white">rounded-lg</div>
  <div class="rounded-xl bg-teal p-4 text-white">rounded-xl</div>
</div>
```

### Examples

Circular and pill-shaped elements are commonly used for avatars, badges, and buttons. Use `.rounded-circle` for perfect circles and `.rounded-full` for pill-shaped elements.

    Avatar

  Pill Button
  Badge

```html
<div class="d-flex gap-4 align-items-center">
  <div class="rounded-circle bg-primary" style="width: 80px; height: 80px;">
    Avatar
  </div>
  <button class="rounded-full bg-blue text-white px-6 py-2">Pill Button</button>
  <span class="rounded-full bg-red text-white px-3 py-1">Badge</span>
</div>
```

Directional border radius classes allow you to round specific corners. This is useful for creating connected elements, dropdown menus, tabs, and stacked cards.

  rounded-top
  rounded-bottom
  rounded-left
  rounded-right

```html
<div class="d-flex gap-3">
  <div class="rounded-top bg-primary p-4 text-white">rounded-top</div>
  <div class="rounded-bottom bg-blue p-4 text-white">rounded-bottom</div>
  <div class="rounded-left bg-green p-4 text-white">rounded-left</div>
  <div class="rounded-right bg-orange p-4 text-white">rounded-right</div>
</div>
```

Use zero radius classes to remove rounding from specific sides. Perfect for creating seamless connections between stacked elements or card layouts.

    Card Header

    Card Body Content

    Card Footer

```html
<div class="bg-white">
  <div class="rounded-md rounded-bottom-0 bg-primary text-white p-4">
    Card Header
  </div>
  <div class="bg-neutral-100 p-4">
    Card Body Content
  </div>
  <div class="rounded-md rounded-top-0 bg-neutral-200 p-4">
    Card Footer
  </div>
</div>
```

### How to customize?

You can customize border radius values by modifying the CSS custom properties in `scss/_base-settings.scss` or `scss/_variables-root.scss`. After making changes, recompile your SCSS to generate the updated `css/final.css` file.

```css
/* In _base-settings.scss or _variables-root.scss */
:root {
  --border-radius-base: 8px;
  --border-radius-sm: 4px;
  --border-radius-md: 12px;
  --border-radius-lg: 16px;
  --border-radius-xl: 24px;
}

// Compile SCSS to CSS
// Run: sass scss/main.scss css/final.css
```
