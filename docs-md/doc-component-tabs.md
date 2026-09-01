<!-- Generated from docs/doc-component-tabs.html. Keep this file in sync with the HTML documentation. -->

# Tabs Component

---

The Tabs component provides two primary styles for content navigation. The default `.nav-tabs` class is ideal for standard page or section navigation, using an underline to indicate the active tab. The `.tabs-boxed` variant creates a "segmented control" look, perfect for toggling between different views or data sets within the same context.

- When to use it: For switching between content panels on a page (`.nav-tabs`) or for toggling views like "List" vs. "Grid" (`.tabs-boxed`).

- Don't use for: Main website navigation (use `.nav` component) or as a replacement for radio buttons in a standard form.

- Dark mode: Automatic

- SCSS file: `/scss/components/_tabs.scss`

---

## Basic example (`.nav-tabs`)

This is the default tab style, using a bottom border to highlight the active link. It's built on a `` element containing anchor (``) links.

           All
           Personal
           Groups
           Disabled

```html
 <nav class="nav-tabs font-medium border-bottom">
      <a class="tab-link active" href="#"> All </a>
      <a class="tab-link" href="#"> Personal </a>
      <a class="tab-link" href="#"> Groups </a>
      <a class="tab-link disabled" href="#"> Disabled </a>
    </nav>
```

---

## More example variants (`.tabs-boxed`)

The "boxed" style is designed to look like a segmented control. It is recommended to build this using `` elements containing hidden `` tags. This allows for accessible state management without JavaScript. Adding `.w-full` makes the tabs fill the container width.

#### Boxed Tabs (Full Width)

              The first

              Second item

              Third item

#### Boxed Tabs (Icon Only)

```html
 <!-- Boxed Tabs (Full Width) -->
   <nav class="tabs-boxed w-full">
      <label tabindex="0" class="tab-link">
          <input tabindex="-1" class="visually-hidden" checked="" type="radio" name="my-segment-1">
          The first
      </label>
      <label tabindex="0" class="tab-link">
          <input tabindex="-1" class="visually-hidden" type="radio" name="my-segment-1">
          Second item
      </label>
      <label tabindex="0" class="tab-link">
          <input tabindex="-1" class="visually-hidden" type="radio" name="my-segment-1">
          Third item
      </label>
  </nav>

   <!-- Boxed Tabs (Icon Only) -->
  <nav class="tabs-boxed">
      <label tabindex="0" class="tab-link">
          <input tabindex="-1" class="visually-hidden" checked="" type="radio" name="my-segment-2">
          <svg ...> <!-- Icon SVG --> </svg>
      </label>
      <label tabindex="0" class="tab-link">
          <input tabindex="-1" class="visually-hidden" type="radio" name="my-segment-2">
          <svg ...> <!-- Icon SVG --> </svg>
      </label>
  </nav>
```

---

## How to customize?

  Both tab variants are heavily styled using CSS variables, making them simple to theme. You can override colors and spacing on a case-by-case basis using inline styles, or globally by redefining the variables in your stylesheet.

### Customize using inline css and variables

Here, we customize the `.nav-tabs` component by changing the active color variables to an orange theme.

           Orange Tab
           Standard Tab

```html
 <nav class="nav-tabs font-medium border-bottom" style="
      --primary-500: #f97316; /* Active border color */
      --text-color-primary: #f97316; /* Active text color */
      --alpha-1: rgba(249, 115, 22, 0.1); /* Hover background */
   ">
      <a class="tab-link active" href="#"> Orange Tab </a>
      <a class="tab-link" href="#"> Standard Tab </a>
  </nav>
```

---

### Advanced customization using SCSS file

    File to customize: scss/components/_tabs.scss

For `.nav-tabs`, the core styling is the `border-bottom: 2px solid transparent` on the `.tab-link`, which is then overridden on the `.active` class to `border-bottom-color: var(--primary-500)`. You can change the thickness of this border or even its style (e.g., to `dotted`) in the SCSS file. The spacing between tabs is controlled by the `gap: 2px` on the `.nav-tabs` container.

For `.tabs-boxed`, the container (`.tabs-boxed`) provides the `background-color: var(--neutral-200)` and `padding: 1px` that creates the "inset" look. The active `.tab-link` (identified via `.active`, `.selected`, or `:has(input[type="radio"]:checked)`) gets its appearance from `background-color: var(--bg-color-base)`, a `box-shadow`, and `border: 1px solid var(--neutral-300)`. You can modify these properties to change the "lifted" effect of the active tab.

### Key customization options

For `.nav-tabs`:

- `--text-color-secondary`: Default (inactive) tab link color.

- `--text-color-primary`: Active tab link color.

- `--primary-500`: Active tab link bottom border color.

- `--alpha-1`: Background color for `.tab-link:hover`.

- `--border-radius-base`: Controls the top-left and top-right corner radius of the tabs.

For `.tabs-boxed`:

- `--neutral-200`: Background color of the main `.tabs-boxed` container.

- `--bg-color-base`: Background color of the active `.tab-link`.

- `--neutral-300`: Border color of the active `.tab-link`.

- `--text-color-secondary`: Default (inactive) tab link color.

- `--text-color-base`: Active tab link color.

- `box-shadow`: The shadow applied to the active tab to give it a "lifted" appearance.

### How to compile _component.scss file?

- Option A) node and npm tools: Use command-line tools like `node-sass` or `dart-sass` via npm scripts if you are comfortable with the terminal and NodeJS environment.

- Option B) Prepros.io software or Codekit: Utilize visual applications like Prepros.io or Codekit. These tools provide a graphical user interface (UI) for compiling SCSS files automatically upon save, offering an easier workflow for those who prefer visual configuration over the terminal.
