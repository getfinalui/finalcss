<!-- Generated from docs/doc-component-button.html. Keep this file in sync with the HTML documentation. -->

# Button

---

Buttons are interactive elements that trigger actions when clicked. They come in multiple sizes, color variants, and styles to accommodate different use cases and visual hierarchies in your interface.

- When to use it: For primary actions, form submissions, navigation triggers, confirmations, and any clickable action that changes application state or navigates users.

- Don't use for: Simple navigation links between pages (use anchor tags), text that doesn't trigger actions, or decorative elements. Avoid overusing primary colored buttons - reserve them for the most important actions.

- Dark mode: Automatic

- SCSS file: `/scss/components/_button.scss`

---

## Basic example

    Default Button
    Primary Button
    Default Style
    Disabled Button

```html
<button class="btn">Default Button</button>
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-default">Default Style</button>
<button class="btn" disabled>Disabled Button</button>
```

---

## Button sizes

    Small (32px)
    Medium (38px)
    Large (44px)
    Extra Large (56px)

```html
<button class="btn btn-sm btn-primary">Small (32px)</button>
<button class="btn btn-primary">Medium (38px)</button>
<button class="btn btn-lg btn-primary">Large (44px)</button>
<button class="btn btn-xl btn-primary">Extra Large (56px)</button>
```

---

## Color variants

    Primary
    Blue
    Green
    Red
    Orange
    Yellow
    Purple
    Teal
    Neutral

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-blue">Blue</button>
<button class="btn btn-green">Green</button>
<button class="btn btn-red">Red</button>
<button class="btn btn-orange">Orange</button>
<button class="btn btn-yellow">Yellow</button>
<button class="btn btn-purple">Purple</button>
<button class="btn btn-teal">Teal</button>
<button class="btn btn-neutral">Neutral</button>
```

---

## Subtle color variants

    Primary Subtle
    Blue Subtle
    Green Subtle
    Red Subtle
    Orange Subtle
    Neutral Subtle

```html
<button class="btn btn-primary-subtle">Primary Subtle</button>
<button class="btn btn-blue-subtle">Blue Subtle</button>
<button class="btn btn-green-subtle">Green Subtle</button>
<button class="btn btn-red-subtle">Red Subtle</button>
<button class="btn btn-orange-subtle">Orange Subtle</button>
<button class="btn btn-neutral-subtle">Neutral Subtle</button>
```

---

## Button styles

    Outline Button
    Inverted Button
    Default Button

```html
<button class="btn btn-outline">Outline Button</button>
<button class="btn btn-invert">Inverted Button</button>
<button class="btn btn-default">Default Button</button>
```

---

## Icon buttons

```html
<button class="btn btn-icon btn-primary">
  <svg width="20" height="20">...</svg>
</button>
<button class="btn btn-icon btn-sm btn-default">
  <svg width="18" height="18">...</svg>
</button>
<button class="btn btn-icon btn-lg btn-green">
  <svg width="24" height="24">...</svg>
</button>
```

---

## Buttons with icons and text

      Add Item

      Save Changes

      Menu

```html
<button class="btn btn-primary">
  <svg width="20" height="20">...</svg>
  Add Item
</button>
<button class="btn btn-green">
  Save Changes
  <svg width="20" height="20">...</svg>
</button>
```

---

## How to customize?

Buttons are highly customizable through CSS variables, allowing you to adjust colors, sizes, borders, and spacing without modifying the core SCSS files. This approach keeps your customizations maintainable and prevents conflicts with future updates.

#### Customize using inline CSS and variables

You can override button variables directly in the `style` attribute to create unique button variations:

      Custom Purple

      Larger Button

      Gradient Button

      Thick Border

```html
<button class="btn" style="--btn-bg: #8b5cf6; --btn-bg-hover: #7c3aed; --btn-text-color: white;">
  Custom Purple
</button>

<button class="btn btn-primary" style="--btn-size-md: 48px; --btn-padding-x: 24px;">
  Larger Button
</button>

<button class="btn" style="--btn-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%); --btn-text-color: white;">
  Gradient Button
</button>
```

#### Advanced customization using SCSS file

File to customize: `scss/components/_button.scss`

The button component uses a comprehensive set of CSS custom properties (variables) that control every aspect of its appearance. These variables are defined at the top of the `.btn` class and can be overridden globally or per variant.

Size customization: The button defines four size presets (sm, md, lg, xl) through variables like `--btn-size-sm: 32px` and `--btn-size-xl: 56px`. You can modify these values to adjust button heights across your entire application.

Creating new color variants: The SCSS file uses a loop (`@each $color, $shades in $colors_list`) to automatically generate button classes for each color in your color palette. To add a new color variant, simply add it to your `$colors_list` map in your variables file, and buttons like `.btn-yourcolor` will be generated automatically.

Modifying button states: Hover, active, and disabled states are controlled through the `--btn-bg-hover` variable and direct CSS rules. The active state includes a subtle `translateY(1px)` transform and inset box-shadow for a pressed effect.

Custom button styles: Beyond the auto-generated color variants, you can create semantic button styles like `.btn-default`, `.btn-outline`, or `.btn-invert` by defining new classes that override the CSS variables.

#### Key customization options

- `--btn-size-{sm|md|lg|xl}` - Control button heights for each size variant

- `--btn-padding-x` and `--btn-padding-y` - Adjust horizontal and vertical padding

- `--btn-font-size-{sm|md|lg|xl}` - Set font sizes for different button sizes

- `--btn-bg` and `--btn-bg-hover` - Control background colors for normal and hover states

- `--btn-text-color` - Set the button text color

- `--btn-border-color` and `--btn-border-hover-color` - Define border colors for different states

- `--btn-font-weight` - Adjust button text weight (default: 400)

- `gap` property - Controls spacing between icon and text (default: 8px)

- Icon sizes - Controlled through nested `svg, .icon, img` selectors with size constraints

- Disabled state opacity - Set through `opacity: 0.4` on `:disabled` state

#### How to compile _button.scss file?

- Option A: Use Node.js and npm tools if you're comfortable with the terminal and have Node.js installed. Install sass globally with `npm install -g sass`, then compile with `sass scss/components/_button.scss css/button.css`

- Option B: Use visual applications like Prepros.io or CodeKit if you prefer a graphical user interface and want to avoid terminal commands. Simply drag your project folder into the app and it will automatically watch and compile your SCSS files
