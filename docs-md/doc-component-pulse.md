<!-- Generated from docs/doc-component-pulse.html. Keep this file in sync with the HTML documentation. -->

# Pulse

---

The pulse component is a small animated status indicator. It creates a 16px inline marker with a repeating animated ring using the `::after` pseudo-element.

- When to use it: Use pulse indicators for live status, notifications, online presence, recording states, or recently updated items.

- Don't use for: Long-running progress, loading states that need labels, or critical alerts. Use progress bars, spinners, badges, or alerts instead.

- Dark mode: Uses a fixed red pulse color.

- SCSS file: `/scss/components/_pulse.scss`

- Responsive: No generated responsive variants.

---

## Class reference

| Selector | Styles / behavior |
| --- | --- |
| pulse | position: relative; display: inline-block; width and height: 16px |
| pulse::after | absolute ring with inset: -8px; border-radius: 20px; rgba red background |
| @keyframes pulse | scales and fades the ring in a 1s infinite animation |

---

## Basic example

```html
<span class="pulse"></span>
```

---

## Status list

- Live deployment

- Recording session

- New activity

```html
<ul class="d-flex flex-col gap-3">
  <li>
    <span class="pulse"></span>
    <span>Live deployment</span>
  </li>
  <li>
    <span class="pulse"></span>
    <span>Recording session</span>
  </li>
</ul>
```

---

## How to customize?

Customize the marker size, ring inset, pulse color, border radius, and animation timing in `scss/components/_pulse.scss`, then compile the SCSS into CSS.

```css
.pulse {
  width: 16px;
  height: 16px;
}

.pulse::after {
  inset: -8px;
  background: rgba(255, 82, 82, 0.4);
  animation: pulse 1s infinite;
}
```

Compile with a Sass command-line tool if you use Node and terminal workflows, or use a visual compiler such as Prepros or CodeKit if you prefer a GUI.
