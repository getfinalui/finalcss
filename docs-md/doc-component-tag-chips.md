<!-- Generated from docs/doc-component-tag-chips.html. Keep this file in sync with the HTML documentation. -->

# Tags, Chips, and Pills Component

---

The Tag, Chip, and Pill components are highly versatile elements used for categorization, selection, filtering, or display of short, informational fragments. Unlike a static badge or indicator, these components are **interactive** and often serve as buttons or toggles to facilitate user actions like filtering, removing items, or selecting options.

- When to use it: For displaying filter selections, contact names, skill categorization, product attributes, or removable items in an input field.

- Don't use for: Long-form text, static indicators (use `.badge` instead).

- Interaction: Tags include hover effects, an active state (`.active`), and a subtle press-down animation (using `[role=button]:active`) to confirm click interaction.

- SCSS file: `/scss/components/_tag-chip.scss`

---

## Basic Tags and Chips

The core classes `.tag`, `.chip`, and `.pill` all share the same base style, offering flexibility in semantic naming depending on their context. They are typically used with a `` or `` element, or a `` with `role="button"`.

       Tag Default
       Chip Link
       Pill Button
       Active Tag
       Custom Active

```html
 <div class="tag" role="button">Tag Default</div>
   <a href="#" class="chip">Chip Link</a>
   <button class="pill">Pill Button</button>
   <div class="tag active" role="button">Active Tag</div>
   <div class="tag active" role="button" style="background-color: var(--warning-500);">Custom Active</div>
```

---

## Interactive Tags (With Icon or Close Button)

Tags and Chips are often used with an icon or a small close button (e.g., an 'X' symbol) to indicate that they can be dismissed or that they represent a filter that can be removed. The component uses `display: inline-flex` and `gap: 4px` to automatically space the inner elements.

          John Doe

          Filter Applied

          Frontend

```html
 <div class="chip" role="button">
      <svg...></svg>
      John Doe
   </div>
   <div class="tag active" role="button">
      Filter Applied
      <svg...></svg> <!-- Close Icon -->
   </div>
   <button class="pill" style="background:var(--primary-200); color:var(--text-color-primary);">
      Frontend
      <svg...></svg> <!-- Close Icon -->
   </button>
```

---

## Customization and Styling

The Tag component is highly customizable using CSS variables. Since all three classes (`.tag`, `.chip`, `.pill`) share the same underlying CSS, customizing one customizes all.

The default appearance uses a light, neutral background (`var(--alpha-2)`), and the active state uses the primary color (`var(--primary-500)`).

### Key Customization Options

These variables can be overridden globally or inline using the `style` attribute.

- `padding`: Controls the internal padding (default: `3px 8px`). Increasing this will make the tag larger.

- `min-height`: Sets the minimum vertical size (default: `32px`).

- `background`: The background color of the default (inactive) state (default: `var(--alpha-2)`).

- `border-radius`: Controls the corner roundness (default: `16px` for a pill shape).

- `--primary-500`: Controls the background color of the `.active` state.

### Example: Customizing Active Color and Border

Here, we change the active state to a custom blue color and add a slight border for separation.

       Unselected
       Selected

```html
 <div class="tag" role="button" style="border: 1px solid var(--neutral-300);">Unselected</div>
   <div class="tag active" role="button" style="
      background-color: #2563eb; /* Custom blue active background */
      color: white;
      border: 1px solid #2563eb;
   ">Selected</div>
```

---

### How to compile _tag-chip.scss file?

To apply your SCSS customizations, you will need an SCSS compiler. The steps are similar to compiling other component files:

- Option A) node and npm tools: Use command-line tools like `node-sass` or `dart-sass` via npm scripts if you are comfortable with the terminal and NodeJS environment.

- Option B) Prepros.io software or Codekit: Utilize visual applications like Prepros.io or Codekit. These tools provide a graphical user interface (UI) for compiling SCSS files automatically upon save, offering an easier workflow for those who prefer visual configuration over the terminal.
