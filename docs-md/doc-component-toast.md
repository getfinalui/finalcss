<!-- Generated from docs/doc-component-toast.html. Keep this file in sync with the HTML documentation. -->

# Toast

---

The toast component is a compact fixed message for short feedback such as saved states, copied links, and completed actions. It appears at the bottom center of the viewport and uses a high-contrast black background with white text.

- When to use it: Use toast messages for temporary, low-interruption feedback after a user action.

- Don't use for: Critical errors, confirmations that need user input, or long messages. Use alerts or dialogs for those cases.

- Dark mode: Uses fixed high-contrast colors.

- SCSS file: `/scss/components/_toast.scss`

- Responsive: No generated responsive variants.

---

## Class reference

| Selector | Styles / behavior |
| --- | --- |
| toast | position: fixed; bottom: 40px; centered with left: 50% and translateX(-50%) |
| toast | min-width: 160px; max-width: 240px; padding: 8px 12px; border-radius: 12px |
| toast | color: #fff; background: #000 |

---

## Basic example

The live preview adds `static` so the toast stays inside this documentation example. In real use, `toast` is fixed to the bottom center of the viewport.

      ✅ Saved changes OK

```html
<div class="toast">Saved changes</div>
```

---

## With action feedback

      Save profile
       ✅ Profile updated

```html
<button type="button" class="btn btn-primary">Save profile</button>
<div class="toast theme-static static transform-none bg-green-800">Profile updated</div>
```

---

## How to customize?

Customize toast size, position, color, padding, and border radius in `scss/components/_toast.scss`, then compile the SCSS into CSS. You can also override simple values inline for a single toast.

```html
<div class="toast" style="background: var(--green-600); max-width: 320px;">
  Project published
</div>
```

Compile with a Sass command-line tool if you use Node and terminal workflows, or use a visual compiler such as Prepros or CodeKit if you prefer a GUI.
