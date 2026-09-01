<!-- Generated from docs/doc-component-form-select.html. Keep this file in sync with the HTML documentation. -->

# Form Select

---

The `form-select` component styles the native HTML `select` element, providing a consistent look and feel across browsers. It includes a custom, SVG-based arrow icon to replace the inconsistent browser default, ensuring branding consistency. The styling covers normal, hover, focus, and disabled states.

- When to use it: Use when providing a list of predefined options from which the user must select a single item (or multiple items, using the `multiple` attribute).

- Don't use for: Situations where the list of options is extremely long (consider a typeahead/autocomplete component instead) or when custom styling is required for the options themselves (use a custom drop-down component).

- Dark mode: Automatic

- SCSS file: `/scss/components/_form-select.scss`

---

## Basic example

          Select your preferred role

              Open this select menu
              UX Designer
              Product Manager
              Web Developer

          Disabled Select

              This menu is disabled
              Option 1

```html
 <div class="mb-4">
      <label class="form-label">Select your preferred role</label>
      <select class="form-select">
          <option selected>Open this select menu</option>
          <option value="1">UX Designer</option>
          <option value="2">Product Manager</option>
          <option value="3">Web Developer</option>
      </select>
  </div>
  <div class="mb-0">
      <label class="form-label">Disabled Select</label>
      <select class="form-select" disabled>
          <option selected>This menu is disabled</option>
          <option value="1">Option 1</option>
      </select>
  </div>
```

---

## More example variants

          Multiple Selection

              Task 1: Planning
              Task 2: Design
              Task 3: Development
              Task 4: Testing
              Task 5: Deployment

```html
 <div class="mb-4">
      <label class="form-label">Multiple Selection</label>
      <select class="form-select" multiple size="4">
          <option value="1">Task 1: Planning</option>
          <option value="2">Task 2: Design</option>
          <option value="3">Task 3: Development</option>
          <option value="4">Task 4: Testing</option>
          <option value="5">Task 5: Deployment</option>
      </select>
  </div>
```

---

## How to customize?

  The `form-select` component is designed for easy customization using CSS variables, allowing you to quickly change its visual properties such as colors, borders, and the internal SVG icon without touching the SCSS source files. This is the recommended approach for lightweight theme modifications.

### Customize using inline css and variables

  You can override component styles directly on the element using the `style` attribute. This is particularly useful for changing the border and background colors, or even replacing the arrow icon for a specific instance.

       Select with Custom Icon and Colors

          Custom Themed Select
          Option A

```html
 <label class="form-label">Select with Custom Icon and Colors</label>
  <select class="form-select" style="
      --neutral-50: #e0f2f1; /* Light Teal background */
      --primary-500: #00897b; /* Dark Teal focus */
      --icon-arrow: url(&quot;data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%2300897b' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 9 4 4 4-4'/%3e%3c/svg%3e&quot;);
      border: 2px solid var(--primary-500);
  ">
      <option selected>Custom Themed Select</option>
      <option value="1">Option A</option>
  </select>
```

---

### Advanced customization using SCSS file

    File to customize: `scss/components/_form-select.scss`

    The custom arrow icon is defined via the `--icon-arrow` CSS variable, which holds a base64-encoded SVG. To globally change the arrow's color or shape, you must update this variable directly in `_form-select.scss` or your root variables file. Note that a separate definition is provided for `[data-theme=dark] .form-select` to ensure the arrow icon maintains sufficient contrast in dark mode.

    The dimensions and spacing are controlled by `height: 38px`, `padding: 0.4rem 0.6rem`, and importantly, `padding-right: 32px` to make room for the custom arrow icon. The icon itself is positioned using `background-position: right 0.6rem center`. Modifying these values allows fine-tuning the component's size and spacing.

    The focus ring is handled by `box-shadow: 0 0 0 1px blue` and `border-color: var(--primary-500)`. To change the color of the focus shadow, you would update the blue color value here or introduce a new CSS variable.

    For multi-selects (using `multiple` or `size` attributes), the styles `padding-right: 0.75rem` and `background-image: none` are applied to revert to a standard list box appearance, overriding the custom arrow icon.

### Key customization options

- `--icon-arrow`: The base64-encoded SVG for the drop-down arrow. Change this to use a different icon or change the arrow color (ensure the dark mode definition is also updated).

- `--neutral-50`: Controls the default background color.

- `--neutral-300`: Controls the default border color.

- `--neutral-500`: Controls the border color on the `:hover` state.

- `--primary-500`: Controls the border color on the `:focus` state.

- `--border-radius-base`: Defines the corner radius.

- `padding-right` (default: `32px`): Adjusts the space on the right side reserved for the custom arrow icon.

### How to compile _component.scss file?

- Option A) node and npm tools: Use command-line tools like `node-sass` or `dart-sass` via npm scripts if you are comfortable with the terminal and NodeJS environment.

- Option B) Prepros.io software or Codekit: Utilize visual applications like Prepros.io or Codekit. These tools provide a graphical user interface (UI) for compiling SCSS files automatically upon save, offering an easier workflow for those who prefer visual configuration over the terminal.
