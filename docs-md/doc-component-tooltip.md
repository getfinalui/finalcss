<!-- Generated from docs/doc-component-tooltip.html. Keep this file in sync with the HTML documentation. -->

# Tooltip

---

The tooltip component displays short helper text from a `data-tooltip` attribute. It uses CSS only: no JavaScript is required.

- When to use it: Use tooltips for short hints, labels for icon buttons, and small contextual notes.

- Don't use for: Essential instructions, long content, form validation, or information that must work on touch-only devices without another visible label.

- Dark mode: Uses fixed high-contrast colors.

- SCSS file: `/scss/components/_tooltip.scss`

- Responsive: No generated responsive variants.

---

## Selector reference

| Selector | Styles / behavior |
| --- | --- |
| [data-tooltip] | position: relative; cursor: pointer |
| [data-tooltip]::after | content from attr(data-tooltip); absolute position; max-width: 250px |
| [data-tooltip]:hover::after | sets opacity: 1 and visibility: visible |

---

## Basic example

    Hover me

```html
<button type="button" class="btn btn-primary" data-tooltip="Save your current changes">
  Hover me
</button>
```

---

## With common UI elements

      Copy link
      Active
      Documentation link

```html
<button type="button" class="btn btn-default" data-tooltip="Copy the public link">
  Copy link
</button>

<span class="badge badge-green" data-tooltip="This project is currently active">
  Active
</span>

<a href="#" data-tooltip="Open the full documentation">
  Documentation link
</a>
```

---

## How to customize?

Customize tooltip placement, colors, padding, max width, border radius, and visibility transitions in `scss/components/_tooltip.scss`, then compile the SCSS into CSS.

```css
[data-tooltip]::after {
  right: -30%;
  top: 90%;
  max-width: 250px;
  background-color: #222;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
}
```

Compile with a Sass command-line tool if you use Node and terminal workflows, or use a visual compiler such as Prepros or CodeKit if you prefer a GUI.
