<!-- Generated from docs/doc-utility-columns.html. Keep this file in sync with the HTML documentation. -->

# Columns

---

The Columns utility creates multi-column layouts using CSS multi-column properties, perfect for newspaper-style text layouts, masonry-style image galleries, and flowing content across multiple columns. These classes automatically distribute content across the specified number of columns, creating balanced, readable layouts without complex grid systems.

Responsive: ✅ Yes

lg:columns-3, md:columns-2, sm:columns-1,

max-lg:columns-2, max-md:columns-1, max-sm:columns-1

---

### Column classes

Set the number of columns for multi-column layouts. Content flows automatically from one column to the next.

| Class | Styles |
| --- | --- |
| .columns-1 | columns: 1; |
| .columns-2 | columns: 2; |
| .columns-3 | columns: 3; |
| .columns-4 | columns: 4; |
| .columns-5 | columns: 5; |
| .columns-6 | columns: 6; |
| .columns-7 | columns: 7; |
| .columns-8 | columns: 8; |
| .columns-9 | columns: 9; |
| .columns-10 | columns: 10; |

### Break inside controls

Control how content breaks across columns. Use these classes on child elements to prevent awkward breaks.

| Class | Styles |
| --- | --- |
| .break-inside-avoid | break-inside: avoid; |
| .break-inside-auto | break-inside: auto; |

### Basic example

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.

```html
<div class="columns-2">
  <p>Lorem ipsum dolor sit amet...</p>
  <p>Duis aute irure dolor...</p>
  <p>Sed ut perspiciatis unde...</p>
</div>
```

### Card grid with columns

Create masonry-style layouts for cards, images, or mixed content. The break-inside-avoid class prevents cards from splitting across columns.

#### Feature One

This card won't break across columns thanks to break-inside-avoid.

#### Feature Two

Content flows naturally into the next available column space.

#### Feature Three

Perfect for Pinterest-style layouts and galleries.

#### Feature Four

Columns adjust automatically based on content height.

#### Feature Five

No JavaScript required for this layout!

```html
<div class="columns-3" style="column-gap: 16px;">
  <div class="card break-inside-avoid">
    <div class="card-body">
      <h6>Feature One</h6>
      <p>This card won't break across columns.</p>
    </div>
  </div>
  <div class="card break-inside-avoid">
    <div class="card-body">
      <h6>Feature Two</h6>
      <p>Content flows naturally.</p>
    </div>
  </div>
  <!-- More cards... -->
</div>
```

### List with multiple columns

Display long lists in multiple columns to save vertical space and improve scannability.

- Apple

- Banana

- Cherry

- Date

- Elderberry

- Fig

- Grape

- Honeydew

- Kiwi

- Lemon

- Mango

- Orange

- Papaya

- Quince

- Raspberry

- Strawberry

```html
<div class="columns-4">
  <ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Cherry</li>
    <!-- More items... -->
  </ul>
</div>
```

### Using with breakpoints for responsiveness

Adjust the number of columns based on screen size for optimal readability. Use more columns on larger screens and fewer on mobile devices. Combine breakpoint prefixes to create fully responsive layouts that adapt to any device.

`lg:columns-4 md:columns-3 sm:columns-2 columns-1` → 4 columns on large screens, 3 on medium, 2 on small, 1 on mobile

`md:columns-3 max-md:columns-1` → 3 columns on medium screens and up, single column on mobile

`columns-2 max-sm:columns-1` → 2 columns by default, 1 column on small screens

This text layout uses 3 columns on medium screens and larger, but switches to a single column on mobile devices for better readability. This ensures your content is always easy to read, regardless of device.

The column layout automatically adjusts when you resize your browser window. Try it! Make your browser narrower to see the text switch to a single column layout, or wider to see it expand into three columns.

This approach is perfect for blog posts, articles, documentation, and any text-heavy content where you want to optimize reading experience across all devices without writing any JavaScript.

```html
<div class="md:columns-3 columns-1">
  <h6>Responsive Typography</h6>
  <p>This text layout uses 3 columns on medium screens...</p>
  <p>The column layout automatically adjusts...</p>
  <p>This approach is perfect for blog posts...</p>
</div>
```

### Column gap utilities

Control the spacing between columns using gap utility classes. These classes set the `column-gap` property to create consistent spacing in your multi-column layouts.

| Class | Styles |
| --- | --- |
| .gap-cols-0 | column-gap: 0; |
| .gap-cols-1 | column-gap: 4px; |
| .gap-cols-2 | column-gap: 8px; |
| .gap-cols-3 | column-gap: 12px; |
| .gap-cols-4 | column-gap: 16px; |
| .gap-cols-5 | column-gap: 20px; |
| .gap-cols-6 | column-gap: 24px; |
| .gap-cols-7 | column-gap: 28px; |
| .gap-cols-8 | column-gap: 32px; |
| .gap-cols-9 | column-gap: 36px; |
| .gap-cols-10 | column-gap: 40px; |

### Examples with column gaps

Combine column classes with gap utilities to control spacing between columns without writing inline CSS.

No gap (gap-cols-0):

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Small gap (gap-cols-3):

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

```html
<!-- No gap -->
<div class="columns-3 gap-cols-0">
  <p>Content with no spacing between columns</p>
</div>

<!-- Small gap -->
<div class="columns-3 gap-cols-3">
  <p>Content with 12px spacing</p>
</div>
```

### Responsive column gaps

Gap utilities also support responsive breakpoints, allowing you to adjust spacing at different screen sizes. Use larger gaps on desktop and smaller gaps on mobile for optimal visual balance.

          Responsive

Gap adjusts by screen size

          Adaptive

32px on large screens

          Flexible

20px on medium screens

          Mobile

8px on small screens

```html
<div class="md:columns-3 columns-2 lg:gap-cols-8 md:gap-cols-5 gap-cols-2">
  <div class="card break-inside-avoid">
    <div class="card-body">
      <div class="badge">Responsive</div>
      <p>Gap adjusts by screen size</p>
    </div>
  </div>
  <!-- More cards... -->
</div>
```

### 💡 Best Practices

- Always use `break-inside-avoid` on cards and block elements to prevent awkward splits

- Add `column-gap` CSS property to control spacing between columns (default varies by browser)

- Start with fewer columns on mobile (`columns-1` or `columns-2`) for better readability

- Test with various content lengths - columns work best when content can flow naturally

- For images, consider using `width: 100%` and `display: block` to prevent layout issues

- Combine with `column-rule` CSS property to add vertical lines between columns
