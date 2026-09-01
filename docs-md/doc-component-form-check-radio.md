<!-- Generated from docs/doc-component-form-check-radio.html. Keep this file in sync with the HTML documentation. -->

# Checkbox & Radio

---

Custom styled checkbox and radio input components that provide consistent appearance across browsers. These form controls support various states including checked, disabled, and focused, with built-in accessibility features.

- When to use it: For single or multiple selection options in forms, surveys, settings panels, or any interface requiring user choice confirmation. The card-check variant works well for presenting mutually exclusive options with additional context.

- Don't use for: Toggle switches (use a dedicated toggle component), dropdown selections with many options (use select instead), or simple yes/no actions (use buttons).

- Dark mode: Automatic

- SCSS file: `/scss/components/_form-check-radio.scss`

---

## Basic checkbox example

        Default checkbox

        Checked checkbox

        Disabled checkbox

```html
<div class="form-check mb-3">
    <input class="form-check-input" type="checkbox" value="" id="check1">
    <label class="form-check-label" for="check1">Default checkbox</label>
  </div>
  <div class="form-check mb-3">
    <input class="form-check-input" type="checkbox" value="" id="check2" checked>
    <label class="form-check-label" for="check2">Checked checkbox</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="check3" disabled>
    <label class="form-check-label" for="check3">Disabled checkbox</label>
  </div>
```

---

## Basic radio buttons

        Selected option

        Another option

        Disabled option

```html
<div class="form-check mb-3">
    <input class="form-check-input" type="radio" name="radioGroup1" id="radio1" checked>
    <label class="form-check-label" for="radio1">Selected option</label>
  </div>
  <div class="form-check mb-3">
    <input class="form-check-input" type="radio" name="radioGroup1" id="radio2">
    <label class="form-check-label" for="radio2">Another option</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="radioGroup1" id="radio3" disabled>
    <label class="form-check-label" for="radio3">Disabled option</label>
  </div>
```

---

## Card-style selection (radio buttons)

            Self pick-up

From nearest location

            Standard delivery

7-10 days after order

            Express Delivery

1-2 days after order

```html
<fieldset class="d-flex flex-col lg:flex-row gap-2">
      <label class="card-check d-flex p-3 rounded">
        <input class="form-check-input" name="delivery-type" type="radio" value="">
        <div class="ml-1">
          <span>Self pick-up</span>
          <p class="d-block mb-0 text-secondary">From nearest location</p>
        </div>
      </label>
      <label class="card-check d-flex p-3 rounded">
        <input class="form-check-input" name="delivery-type" type="radio" value="" checked>
        <div class="ml-1">
          <span>Standard delivery</span>
          <p class="d-block mb-0 text-secondary">7-10 days after order</p>
        </div>
      </label>

      <label class="card-check d-flex p-3 rounded">
        <input class="form-check-input" name="delivery-type" type="radio" value="">
        <div class="ml-1">
          <span>Express Delivery</span>
          <p class="d-block mb-0 text-secondary">1-2 days after order</p>
        </div>
      </label>
  </fieldset>
```

---

## Reverse layout

        Checkbox on the right

        Radio button on the right

```html
<div class="form-check form-check-reverse mb-3">
        <input class="form-check-input" type="checkbox" value="" id="reverseCheck1" checked>
        <label class="form-check-label" for="reverseCheck1">Checkbox on the right</label>
      </div>
      <div class="form-check form-check-reverse">
        <input class="form-check-input" type="radio" name="reverseRadio" id="reverseRadio1" checked>
        <label class="form-check-label" for="reverseRadio1">Radio button on the right</label>
      </div>
```

---

## How to customize?

The checkbox and radio components use CSS custom properties (variables) for theming, making them easy to customize without modifying the source files. You can adjust colors, sizes, and spacing to match your brand or design system. The card-check variant is particularly useful when you need to present options with additional context or visual hierarchy.

### Customize using inline CSS and variables

You can override the default styling by using inline styles with CSS custom properties. This is useful for one-off customizations or prototyping.

      Custom green checkbox

      Larger orange radio button

```html
<div class="form-check mb-3">
  <input class="form-check-input" type="checkbox" value="" id="customCheck1" checked
          style="--primary-100: #e8f5e9; --primary-400: #4caf50; --primary-500: #2e7d32;">
  <label class="form-check-label" for="customCheck1">Custom green checkbox</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="customRadio" id="customRadio1" checked
          style="--primary-100: #fff3e0; --primary-400: #ff9800; --primary-500: #f57c00; width: 22px; height: 22px;">
  <label class="form-check-label" for="customRadio1">Larger orange radio button</label>
</div>
```

### Advanced customization using SCSS file

File to customize: `scss/components/_form-check-radio.scss`

For global styling changes across your entire application, modify the SCSS source file. This approach is recommended when you need consistent styling throughout your project.

The component uses CSS custom properties for colors that reference your primary color palette. To change the default appearance, you can override these variables in your main variables file or customize the component directly.

The checkbox and radio inputs use SVG data URIs for the checked state indicators. These are defined at the top of the SCSS file and can be modified to use different icons or colors. The checkbox uses a checkmark path, while the radio uses a filled circle.

The card-check variant uses the `:has()` pseudo-class to style the parent label when its child input is checked. This creates an interactive card effect that highlights the selected option with background color and border changes.

### Key customization options

- Size adjustment: Modify `width` and `height` properties of `.form-check-input` to change the input size (default is 18px)

- Spacing: Adjust `margin-right` on `.form-check-input` to control space between input and label (default is 8px)

- Colors: Override `--primary-100`, `--primary-400`, and `--primary-500` variables to change unchecked background, border, and checked state colors

- Border radius: Change `border-radius` on `.form-check-input[type=checkbox]` to adjust checkbox corner rounding (default is 0.25em)

- Focus outline: Customize `outline-offset` and `outline-style` properties for keyboard focus states

- Disabled opacity: Modify the `opacity` value in the `:disabled` state (default is 0.5)

- Card-check styling: Customize `.card-check` borders, hover states, and checked background colors for the card-style variant

- Check indicator icons: Replace the SVG data URIs in `--form-check-bg-image` variables to use custom checkmark or radio dot designs

### How to compile _form-check-radio.scss file?

- Option A - Node.js & npm tools: If you're comfortable with the terminal and have Node.js installed, use tools like `sass`, `node-sass`, or task runners like Gulp or Webpack to compile SCSS to CSS. Run commands like `sass scss/components/_form-check-radio.scss css/components/form-check-radio.css` from your project directory.

- Option B - Visual GUI applications: If you prefer visual interfaces and want to avoid the terminal, use desktop applications like Prepros.io (cross-platform) or CodeKit (macOS only). These apps provide drag-and-drop SCSS compilation with live preview and automatic browser refresh.
