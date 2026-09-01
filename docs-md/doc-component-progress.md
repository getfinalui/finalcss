<!-- Generated from docs/doc-component-progress.html, completed from scss/components/_progress.scss for AI context. -->

# Progress bar

The progress component displays completion, upload, loading, or task status using a horizontal track and inner bar. The outer `.progress` element creates the track. The inner `.progress-bar` element shows the current value, usually by setting an inline `width`.

- When to use it: Use progress bars for measurable completion, upload progress, setup steps, usage limits, and async tasks with a known percentage.
- Don't use for: Unknown loading states, temporary messages, badges, or status text that has no measurable value.
- Dark mode: Automatic, because the track uses `var(--neutral-300)` and the bar uses `var(--primary-500)`.
- SCSS file: `scss/components/_progress.scss`
- JavaScript: Not required for static values. Use JavaScript only when updating progress dynamically.

---

## Class Reference

| Class | Styles / behavior |
| --- | --- |
| `progress` | `display: flex; height: 12px; overflow: hidden; width: 100%; background-color: var(--neutral-300); border-radius: var(--border-radius-sm);` |
| `progress-bar` | `display: flex; flex-direction: column; justify-content: center; overflow: hidden; white-space: nowrap; text-align: center; background-color: var(--primary-500); transition: width 0.6s ease;` |

---

## Basic Example

```html
<div class="progress">
  <div class="progress-bar" style="width: 60%;"></div>
</div>
```

Use `aria` attributes when the progress value communicates important state.

```html
<div class="progress" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 60%;"></div>
</div>
```

---

## With Label

```html
<p class="mb-2">Storage used</p>
<div class="progress" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-white" style="width: 72%;">72%</div>
</div>
```

---

## Customization

Customize the track height, border radius, track color, bar color, and transition in `scss/components/_progress.scss`, then compile SCSS to CSS.

```css
.progress {
  height: 12px;
  background-color: var(--neutral-300, #bbb);
  border-radius: var(--border-radius-sm);
}

.progress-bar {
  background-color: var(--primary-500, blue);
  transition: width 0.6s ease;
}
```

For one-off variants, override styles inline or combine with utility classes:

```html
<div class="progress h-4">
  <div class="progress-bar bg-green" style="width: 85%;"></div>
</div>
```
