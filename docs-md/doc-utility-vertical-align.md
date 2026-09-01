<!-- Generated from docs/doc-utility-vertical-align.html. Keep this file in sync with the HTML documentation. -->

# Vertical align

---

Vertical align utilities set the CSS `vertical-align` property. They are useful for inline, inline-block, table-cell, icon, badge, image, and text alignment cases. For flexbox layouts, prefer flex alignment utilities such as `align-items-center`.

Responsive: No

---

### What it does?

Here are the available vertical align classes:

| Class | Styles |
| --- | --- |
| vertical-align-baseline | vertical-align: baseline; |
| vertical-align-top | vertical-align: top; |
| vertical-align-middle | vertical-align: middle; |
| vertical-align-bottom | vertical-align: bottom; |
| vertical-align-text-bottom | vertical-align: text-bottom; |
| vertical-align-text-top | vertical-align: text-top; |
| vertical-align-sub | vertical-align: sub; |
| vertical-align-super | vertical-align: super; |

### Basic example

Text

aligned with a middle icon.

```html
<p>
  Text
  <span class="d-inline-block w-6 h-6 bg-primary rounded vertical-align-middle"></span>
  aligned with a middle icon.
</p>
```

### Examples

Compare top, middle, and bottom alignment with inline-block elements placed beside text.

Top

alignment

Middle

alignment

Bottom

alignment

```html
<p>Top <span class="d-inline-block w-8 h-8 vertical-align-top"></span> alignment</p>
<p>Middle <span class="d-inline-block w-8 h-8 vertical-align-middle"></span> alignment</p>
<p>Bottom <span class="d-inline-block w-8 h-8 vertical-align-bottom"></span> alignment</p>
```

### Sub and super alignment

Use `vertical-align-sub` and `vertical-align-super` for inline labels, math-like notation, and small helper marks.

H2O

Pricenew

```html
<p>H<span class="vertical-align-sub text-sm">2</span>O</p>
<p>Price<span class="vertical-align-super text-sm">new</span></p>
```

### How to customize?

You can customize these utilities in `scss/utilities/_vertical-align.scss`. Add new classes only when you need a named value that CSS supports. After editing, compile the SCSS into the files in `css/`.

```css
/* Add a custom vertical-align utility */
.vertical-align-middle-plus {
  vertical-align: -0.125em;
}
```
