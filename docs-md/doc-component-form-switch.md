<!-- Generated from docs/doc-component-form-switch.html. Keep this file in sync with the HTML documentation. -->

# Switch Toggle

---

The `form-switch` component turns a native checkbox into a compact on/off control. It is CSS-only and supports unchecked, checked, and disabled states. The text label can appear before or after the switch.

- When to use it: For settings that take effect as an on/off choice, such as enabling notifications, publishing a feature, or changing a preference.

- Don't use for: Selecting one item from several choices (use radio buttons), accepting terms (use a checkbox), or actions that should happen only after a separate submit step.

- Dark mode: Uses theme color variables in the full `final.css` build

- SCSS file: `/scss/components/_form-switch.scss`

- JavaScript: Not required

---

## Component classes

| Class | Purpose |
| --- | --- |
| `form-switch` | Label wrapper and clickable switch container |
| `input-switch` | Native checkbox that stores the on/off state |
| `slider` | Visible track and thumb |
| `label-switch` | Optional text shown before or after the switch |

The `.slider` element must immediately follow the `.input-switch` checkbox. Checked and focus styles use the adjacent-sibling selector `input + .slider`. The `.label-switch` may be placed before the input or after the slider.

---

## Basic examples

      Toggle me

      Turn on / off

```html
<label class="form-switch">
  <span class="label-switch">Toggle me</span>
  <input class="input-switch" type="checkbox">
  <span class="slider"></span>
</label>

<label class="form-switch mt-5 mb-5">
  <input class="input-switch" type="checkbox">
  <span class="slider"></span>
  <span class="label-switch">Turn on / off</span>
</label>
```

---

## Checked and disabled states

      Unchecked

      Checked

      Disabled

```html
<label class="form-switch mr-4">
  <input class="input-switch" type="checkbox">
  <span class="slider"></span>
  <span class="label-switch">Unchecked</span>
</label>

<label class="form-switch mr-4">
  <input class="input-switch" type="checkbox" checked>
  <span class="slider"></span>
  <span class="label-switch">Checked</span>
</label>

<label class="form-switch">
  <input class="input-switch" type="checkbox" disabled>
  <span class="slider"></span>
  <span class="label-switch">Disabled</span>
</label>
```

For a disabled switch, place `.label-switch` after `.input-switch` so the current sibling selector can apply the disabled label opacity.

---

## Customize the active color

The checked track and focus outline use `--primary-500`. Override that variable on an individual switch when you need a one-off color.

      Green switch

```html
<label class="form-switch" style="--primary-500: #0d923e;">
  <input class="input-switch" type="checkbox" checked>
  <span class="slider"></span>
  <span class="label-switch">Green switch</span>
</label>
```

## SCSS customization

Edit `scss/components/_form-switch.scss` to change the component globally.

- Track: `50px × 28px`, with a `28px` radius and `0.3s` transition.
- Thumb: `22px × 22px`, positioned `3px` from the left and bottom.
- Checked movement: `translateX(22px)`.
- Unchecked track: `rgba(150, 150, 150, .4)`.
- Checked track and focus outline: `var(--primary-500)`.
- Thumb: white with a subtle shadow and `0.2s` transition.

The current `.input-switch` rule uses `visibility: hidden` together with zero dimensions. This documentation describes that behavior as implemented; projects that require direct keyboard focus should use a focusable visually-hidden technique before relying on the focus-visible rule.

After changing the SCSS, compile `scss/final.scss` and `scss/final-lite.scss` with Dart Sass, Prepros, or CodeKit to update the distributed CSS files.
