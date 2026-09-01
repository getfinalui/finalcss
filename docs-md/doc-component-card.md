<!-- Generated from docs/doc-component-card.html. Keep this file in sync with the HTML documentation. -->

# Card

---

Cards are flexible containers for grouping related content and actions. They provide a clean, bordered box with optional padding that helps organize information into digestible sections. Cards automatically adapt to light and dark modes.

- When to use it: Use cards to group related content like product listings, user profiles, article previews, dashboards widgets, or any content that benefits from visual separation and containment.

- Don't use for: Simple text blocks that don't need visual separation, navigation menus, or content that should flow naturally with the page layout without borders.

- Dark mode: Automatic

- SCSS file: `/scss/components/_card.scss`

---

## Basic example

### Card Title

This is a basic card with some content inside. Cards are great for organizing information.

```html
<div class="card">
  <div class="card-body">
    <h5>Card Title</h5>
    <p>This is a basic card with some content inside. Cards are great for organizing information.</p>
  </div>
</div>
```

---

## Card with image

### Card with Image

Images inside cards are automatically constrained to 100% width for responsive behavior.

```html
<div class="card">
  <img src="image.jpg" alt="Description">
  <div class="card-body">
    <h5>Card with Image</h5>
    <p>Images inside cards are automatically constrained to 100% width for responsive behavior.</p>
  </div>
</div>
```

---

## Clickable card link

### Clickable Card

This entire card is clickable as a link. The text decoration and color are inherited for clean styling.

```html
<a href="#" class="card">
  <div class="card-body">
    <h5>Clickable Card</h5>
    <p>This entire card is clickable as a link.</p>
  </div>
</a>
```

---

## Selected and active states

#### Selected Card

This card has the .selected class

#### Active Card

This card has the .active class

```html
<div class="card selected">
  <div class="card-body">
    <h6>Selected Card</h6>
    <p>This card has the .selected class</p>
  </div>
</div>

<div class="card active">
  <div class="card-body">
    <h6>Active Card</h6>
    <p>This card has the .active class</p>
  </div>
</div>
```

---

## How to customize?

Cards can be customized in multiple ways to match your design needs. You can adjust colors, spacing, borders, and shadows using CSS variables or by modifying the SCSS source file directly.

### Customize using inline css and variables

Override card appearance using inline styles with CSS custom properties:

### Custom Styled Card

This card uses custom background color, border color, and padding through inline styles.

```html
<div class="card" style="--bg-color-base: #f0f9ff; --border-color-default: #0ea5e9; border-width: 2px;">
  <div class="card-body" style="padding: 30px;">
    <h5>Custom Styled Card</h5>
    <p>This card uses custom background color, border color, and padding.</p>
  </div>
</div>
```

### Advanced customization using SCSS file

File to customize: `scss/components/_card.scss`

For global changes to all cards in your application, modify the SCSS source file. The card component uses CSS variables for background color, border color, and border radius, making it theme-aware by default.

The card structure is flexible with a column-based flexbox layout. You can adjust the default padding in `.card-body` (currently 20px) to make cards more compact or spacious. The border uses `var(--border-color-default)` and `var(--border-radius-lg)` for consistent theming.

For selected or active states, the outline uses `var(--primary-500)` with a 2px solid outline. You can modify the outline width, style, or change it to a border if you prefer different visual feedback.

### Key customization options

- Background color: Change `background-color: var(--bg-color-base)` to any color value or different CSS variable

- Border styling: Modify `border: 1px solid var(--border-color-default)` to adjust thickness, style, or color

- Border radius: Adjust `border-radius: var(--border-radius-lg)` for more or less rounded corners

- Card body padding: Change `padding: 20px 20px` in `.card-body` to increase or decrease internal spacing

- Selected state outline: Modify `outline: 2px solid var(--primary-500)` for different selection indicators

- Image constraints: Adjust `max-width: 100%` for images if you need different sizing behavior

#### How to compile _card.scss file?

- Option A: Use Node.js and npm tools if you're comfortable with the terminal and have a Node.js development environment set up

- Option B: Use visual GUI applications like Prepros.io or CodeKit if you prefer a graphical interface and want to avoid command-line tools
