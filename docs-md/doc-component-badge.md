<!-- Generated from docs/doc-component-badge.html. Keep this file in sync with the HTML documentation. -->

# Badge

---

Short information about this component: The badge component is a small, inline label used to highlight information, display status, show counts, or categorize content. It features multiple color variants with automatic theming through CSS custom properties and supports icons alongside text.

- When to use it: Use badges to display status indicators (active, pending, completed), notification counts, tags or categories, labels for new features, version numbers, or any small piece of metadata that needs visual emphasis. Perfect for highlighting important information in cards, lists, tables, or next to headings.

- Don't use for: Don't use badges for interactive buttons or primary calls-to-action (use button components instead). Avoid using badges for long text content or as replacements for alerts and notifications that require more detail. Not suitable for form inputs or navigation elements.

- Dark mode: Automatic

- SCSS file: `/scss/components/_badge.scss`

---

## Examples

      Default
      Neutral
      Primary
      Blue
      Success
      Error
      Warning
      Yellow
      Purple
      Teal

        Verified

        Info

        Warning

        Error

      New
      Active
      Pending
      Draft
      v2.0
      Beta

```html
<!-- Basic badge colors -->
<span class="badge">Default</span>
<span class="badge badge-neutral">Neutral</span>
<span class="badge badge-primary">Primary</span>
<span class="badge badge-blue">Blue</span>
<span class="badge badge-green">Success</span>
<span class="badge badge-red">Error</span>
<span class="badge badge-orange">Warning</span>
<span class="badge badge-yellow">Yellow</span>
<span class="badge badge-purple">Purple</span>
<span class="badge badge-teal">Teal</span>

<!-- Badges with icons -->
<span class="badge badge-green">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">...</svg>
  Verified
</span>
<span class="badge badge-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">...</svg>
  Info
</span>

<!-- Status badges -->
<span class="badge badge-primary">New</span>
<span class="badge badge-green">Active</span>
<span class="badge badge-orange">Pending</span>
<span class="badge badge-neutral">Draft</span>
```

---

## How to customize?

The badge component uses CSS custom properties for flexible theming and color customization. To modify the component, edit the `scss/components/_badge.scss` file.

Key customization options:

- Colors: The component uses a dynamic color system with CSS variables. Each color variant (neutral, primary, blue, red, green, orange, yellow, purple, teal) is generated automatically using the `@each` loop in SCSS. Customize colors by modifying the color variables in your main variables file or directly in `_badge.scss`.

- Background, text, and border: Each badge variant uses three CSS custom properties: `--badge-bg` (background using color-100 shade), `--badge-text-color` (text using color-600 shade), and `--badge-border` (border using color-300 shade). Adjust these values to create custom color schemes.

- Size and spacing: Modify `font-size` (default 0.9rem), `padding` (default 4px 8px), `min-height` (default 28px), and `gap` (default 4px for icon spacing) to change badge dimensions.

- Border radius: Change `border-radius` (default 16px) to adjust the pill shape. Use smaller values for more rectangular badges or larger values for more rounded appearance.

- Icon size: Icons, images, and elements with `.icon` class are automatically sized to 18x18 pixels. Modify the `svg, img, .icon` selector to change icon dimensions.

- Adding new color variants: To add new badge colors, simply add the color to the `$colors_list` map in your SCSS variables file. The `@each` loop will automatically generate the corresponding badge class.

- Empty state: Badges automatically hide when empty using the `.badge:empty { display: none; }` rule, preventing empty badges from taking up space in your layout.

Advanced customization:

- Create custom badge styles by overriding the CSS custom properties inline: `Custom`

- Add new badge variants by creating additional classes following the pattern `.badge-[variant-name]` with custom property values

- Adjust font-weight (default 500) to make badge text lighter or bolder

How to compile?

- Option A: Node and npm tools (if you know terminal and Node.js)

- Option B: Prepros.io software or CodeKit (if you like visual apps UI and hate terminal)
