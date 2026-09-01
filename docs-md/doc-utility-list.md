<!-- Generated from docs/doc-utility-list.html. Keep this file in sync with the HTML documentation. -->

# Lists

---

List utility classes provide pre-styled list variations with custom markers, positioning, and spacing. Use these classes to create visually appealing ordered and unordered lists with bullets, checkmarks, numbers, or custom symbols. Perfect for feature lists, checklists, and content hierarchies.

---

### What it does?

Here are representative examples of these classes:

| Class | Styles |
| --- | --- |
| list-bullet | Custom bullet list with colored circle markers |
| list-check | Checklist with checkmark symbols before items |
| list-number | Numbered list with colored decimal markers |
| list-style-disc | list-style-type: disc |
| list-style-number | list-style-type: decimal |
| list-style-like | list-style-type: "👍" |
| list-postion-inside | list-style-position: inside |
| list-postion-outside | list-style-position: outside |

### Basic example

- First item with custom bullet

- Second item with custom bullet

- Third item with custom bullet

```html
<ul class="list-bullet">
  <li>First item with custom bullet</li>
  <li>Second item with custom bullet</li>
  <li>Third item with custom bullet</li>
</ul>
```

### Examples

Checklist style is ideal for feature lists, requirements, or completed tasks. The checkmark symbol provides a visual confirmation.

- Responsive design included

- Cross-browser compatible

- Accessible markup

- Custom color support

```html
<ul class="list-check">
  <li>Responsive design included</li>
  <li>Cross-browser compatible</li>
  <li>Accessible markup</li>
  <li>Custom color support</li>
</ul>
```

Numbered lists with styled markers are perfect for step-by-step instructions or ordered content.

- Install the dependencies

- Configure your settings

- Build the project

- Deploy to production

```html
<ol class="list-number">
  <li>Install the dependencies</li>
  <li>Configure your settings</li>
  <li>Build the project</li>
  <li>Deploy to production</li>
</ol>
```

Use fun custom symbols like thumbs up for positive lists or feedback.

- Great performance

- Easy to customize

- Well documented

```html
<ul class="list-style-like">
  <li>Great performance</li>
  <li>Easy to customize</li>
  <li>Well documented</li>
</ul>
```

### How to customize?

You can customize list styles by editing scss/utilities/_list.scss file. Change colors by modifying CSS variables, adjust spacing with margin/padding values, or add new custom symbols using Unicode characters or emojis. After making changes, compile the SCSS to generate the final CSS file.

```css
/* Example */
.list-star {
  list-style: none;
  margin-left: 0;
  padding-left: 0;
  margin-top: 0.6rem;
li {
  padding-left: 1.6em;
  position: relative;
  margin-bottom: 0.6rem;
  }
  li::before {
  content: "\2605"; // Unicode star symbol
  color: var(--orange-500, #f97316);
  font-size: 1em;
  position: absolute;
  left: 0;
  top: 0;
  }
}
/* Change bullet color */
.list-bullet > li::before {
color: var(--primary-500, #6163fe);
}
```
