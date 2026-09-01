<!-- Generated from docs/doc-component-form-input.html. Keep this file in sync with the HTML documentation. -->

# Form Control and Label

---

The `form-control` class provides a consistent, responsive, and cross-browser base style for all native text-based form inputs, including input , textarea. It ensures inputs are full-width, visually clear, and adhere to the design system's color and border conventions. The `form-label` class ensures proper spacing and association with the control.

- When to use it: Use for any standard user input element such as text fields, email, password, number, or multi-line text areas (textarea).

- Don't use for: Custom, non-textual controls like color pickers, range sliders, or complex drop-downs where default browser styling is heavily modified or inappropriate.

- Dark mode: Automatic

- SCSS file: `/scss/components/_form-input.scss` (and `_form-label.scss`)

---

## Basic example

Email Address

      Password

```html
 <label for="basicEmail" class="form-label">Email Address</label>
  <input type="email" id="basicEmail" class="form-control" placeholder="you@example.com">
  <div class="mt-4">
      <label for="basicPassword" class="form-label">Password</label>
      <input type="password" id="basicPassword" class="form-control" placeholder="Enter your secret">
  </div>
```

---

## Another example variant

Message (Textarea)

      Disabled Input

```html
 <label for="messageInput" class="form-label">Message (Textarea)</label>
  <textarea id="messageInput" class="form-control" rows="3" placeholder="Write your feedback here..."></textarea>
  <div class="mt-4">
      <label for="disabledInput" class="form-label">Disabled Input</label>
      <input type="text" id="disabledInput" class="form-control" placeholder="Cannot be edited" disabled>
  </div>
```

---

## How to customize?

  The `form-control` component relies heavily on CSS variables for its colors, borders, and rounded corners. This allows for quick, contextual changes to the appearance without modifying the underlying SCSS source code, which is ideal for theming or specific application needs.

### Customize using inline css and variables

  You can override any of the component's CSS variables directly using the `style` attribute on the element. For example, you can change the background color, focus ring color, and border radius to create a distinct look.

 Custom Themed Input

```html
 <label for="customInput" class="form-label">Custom Themed Input</label>
  <input type="text" id="customInput" class="form-control" placeholder="Styled with custom variables" style="--neutral-50: #fff; --primary-500: #6d28d9; --border-radius-base: 0.75rem; border-width: 2px;">
```

### Advanced customization using SCSS file

 File to customize: `scss/components/_form-input.scss` and `scss/components/_form-label.scss`

  To make global changes to all form controls across your project, modify the CSS variables in your main variable file, or directly edit the component SCSS files.

  The base styles for `form-control` define the default appearance, including `min-height: 38px`, `padding: .4rem .6rem`, and a full-width block display (`width: 100%`). Changing these values in `_form-input.scss` will affect all inputs.

  The component leverages `:hover` and `:focus` pseudo-classes to provide clear visual feedback to the user. The `:focus` state specifically uses `outline-color: var(--primary-500)` to ensure the input stands out with the brand's primary color when selected. To change the focus color globally, update the `--primary-500` variable.

  Disabled inputs are styled using `:disabled` to set a muted color palette (`--neutral-200` background/border) and a clear `cursor: not-allowed` indicator. You can adjust the opacity and colors here if the default muted appearance is not suitable.

  The `textarea.form-control` specifically uses `height: auto;` to allow multi-line controls to size according to their content or the `rows` attribute, which prevents the default `min-height` from imposing a fixed size.

### Key customization options

- `--neutral-50`: Controls the default background color of the input field.

- `--neutral-300`: Controls the default border color.

- `--neutral-400`: Controls the border color on the `:hover` state.

- `--primary-500`: Controls the color of the outline/focus ring on the `:focus` state.

- `--border-radius-base`: Defines the corner radius for all input fields.

- `--text-color-muted`: Sets the color for placeholder text (`::placeholder`) and disabled text.

- `--neutral-200`: Defines the background and border color for the `:disabled` state.

### How to compile _component.scss file?

- Option A) node and npm tools: Use command-line tools like `node-sass` or `dart-sass` via npm scripts if you are comfortable with the terminal and NodeJS environment.

- Option B) Prepros.io software or Codekit: Utilize visual applications like Prepros.io or Codekit. These tools provide a graphical user interface (UI) for compiling SCSS files automatically upon save, offering an easier workflow for those who prefer visual configuration over the terminal.
