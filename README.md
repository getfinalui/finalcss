# Final CSS

Final CSS is a simple, modern CSS library that combines Bootstrap-style components with Tailwind-style utility classes. It is designed for developers who want useful defaults, light/dark theme support, responsive layout tools, and editable SCSS source without being locked into a framework or build ecosystem.

Project links:

- Website: https://finalcss.com
- Figma/UI work: https://finalui.com
- CDN: `https://cdn.jsdelivr.net/gh/getfinalui/finalcss@main/css/final.min.css`

## Philosophy

Final CSS is built around a few practical ideas:

- Simple light and dark color themes without writing extra component CSS.
- Theme switching with `data-theme="dark"` / `data-theme="light"` or `.theme-dark` / `.theme-light`.
- Tailwind-like utility classes for fast composition.
- Bootstrap-like components for common interface patterns.
- No JavaScript dependency.
- No framework lock-in. Use it with plain HTML, server-rendered apps, React, Vue, Angular, Svelte, or any other stack.
- Extend the library by adding utility classes and components directly in the SCSS files, then compile.
- Powerful layout tools based on both flexbox and CSS Grid.

## Why Another CSS Library?

Final CSS is similar in spirit to Bootstrap 5, but more lightweight, without JavaScript, with simplified components and additional utility classes. The default design is intended to feel cleaner and more aesthetic out of the box.

Bootstrap is powerful, but it can become frustrating when projects need frequent overrides, custom navbars, custom utility classes, simpler color naming, or predictable dark mode. Tailwind is powerful too, but it can create long class strings, require more tooling, and push projects into its ecosystem.

Final CSS aims for a middle path: reusable components when you want speed, utility classes when you need control, and SCSS source when you want to shape the system for your own project.

## Quick Start

Use the compiled CSS directly:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/getfinalui/finalcss@main/css/final.min.css"
>
```

Or use the local compiled file:

```html
<link rel="stylesheet" href="css/final.css">
```

Basic example:

```html
<main class="bg-base text-base py-10">
  <div class="container">
    <div class="card card-body">
      <h1 class="text-4xl mb-3">Final CSS</h1>
      <p class="text-secondary mb-5">Utilities plus components for modern UI.</p>
      <button class="btn btn-primary">Get started</button>
    </div>
  </div>
</main>
```

Dark mode:

```html
<html data-theme="dark">
  ...
</html>
```

You can also apply theme classes to a section:

```html
<section class="theme-dark bg-base text-base">
  ...
</section>
```

## File Structure

```text
.
+-- css/
|   +-- final.css
|   +-- final.min.css
|   +-- final-simple.css
|   +-- final-simple.min.css
+-- scss/
|   +-- final.scss
|   +-- _breakpoint-config.scss
|   +-- _theme.scss
|   +-- _variables-root.scss
|   +-- _reset.scss
|   +-- _grid-system.scss
|   +-- components/
|   +-- utilities/
|   +-- layout/
+-- html-templates/
+-- site/
+-- docs/
+-- index.html
+-- templates.html
```

Important files:

- `scss/final.scss` is the main SCSS entrypoint. It imports theme, reset, grid, components, utilities, and optional layout styles.
- `css/final.css` is the compiled development CSS.
- `css/final.min.css` is the compiled minified CSS for production/CDN usage.
- `scss/_theme.scss` defines the color palettes for light and dark mode.
- `scss/_variables-root.scss` generates CSS variables and semantic aliases.
- `scss/_breakpoint-config.scss` defines responsive prefixes.
- `scss/_grid-system.scss` contains the flexbox row/column grid and CSS Grid helpers.
- `scss/components/` contains component classes such as buttons, cards, forms, navs, tables, dialogs, tabs, badges, alerts, avatars, dropdowns, chips, and progress.
- `scss/utilities/` contains utility classes for spacing, display, text, color, size, borders, radius, position, overflow, shadow, ratio, columns, and more.
- `html-templates/` contains demo examples built with Final CSS.
- `index.html` is the main landing page and visual demo.

## SCSS Entry Point

`scss/final.scss` controls what is included in the final build:

```scss
@import "breakpoint-config";

@import "theme";
@import "variables-root";
@import "reset";
@import "grid-system";

@import "components/button";
@import "components/card";
@import "components/form-input";

@import "utilities/display-layout";
@import "utilities/gap";
@import "utilities/margin";
@import "utilities/padding";
```

To customize the library, edit or add SCSS partials, then import them from `final.scss`.

## CSS Writing Guidelines

Final CSS should stay predictable, composable, and easy to override through variables.

### Spacing

Margins, paddings, sizes, and gaps use a simple 4px-based scale:

```text
1 = 4px
2 = 8px
3 = 12px
4 = 16px
5 = 20px
6 = 24px
10 = 40px
20 = 80px
100 = 400px
```

Spacing utilities:

- Margin: `m-*`, `mx-*`, `my-*`, `mt-*`, `mr-*`, `mb-*`, `ml-*`
- Padding: `p-*`, `px-*`, `py-*`, `pt-*`, `pr-*`, `pb-*`, `pl-*`
- Gap: `gap-*`, `gap-rows-*`, `gap-cols-*`

Examples:

```html
<section class="py-10">
  <div class="container">
    <div class="d-grid grid-cols-3 gap-5">
      <article class="card card-body mb-4">...</article>
    </div>
  </div>
</section>
```

### Responsive Classes

Responsive utilities use a prefix before the class name:

```html
<div class="d-grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
  ...
</div>
```

Default breakpoints:

```text
max-lg: max-width: 1200px
max-md: max-width: 920px
max-sm: max-width: 640px
sm:     min-width: 641px
md:     min-width: 921px
lg:     min-width: 1201px
```

Change breakpoints in `scss/_breakpoint-config.scss`.

### Layout And Grid

Use `.container` for centered page content and `.container-fluid` for full-width content with side padding.

Flexbox grid:

```html
<div class="row gap-5">
  <aside class="lg:col-4 max-lg:col-12">...</aside>
  <main class="lg:col-8 max-lg:col-12">...</main>
</div>
```

CSS Grid utilities:

```html
<div class="d-grid grid-cols-12 gap-5">
  <aside class="grid-col-span-4">...</aside>
  <main class="grid-col-span-8">...</main>
</div>
```

Use flex utilities for alignment and simple rows:

```html
<div class="d-flex align-items-center justify-content-between gap-3">
  ...
</div>
```

### Color System

Theme colors are defined in `scss/_theme.scss` and exported as CSS variables in `scss/_variables-root.scss`.

Available color families:

```text
neutral, primary, blue, red, green, orange, yellow, purple, teal
```

Most color families use shade steps from `100` to `900`. Neutral also includes `0`, `50`, and `1000`.

Generated variable examples:

```css
--primary-500
--primary-600
--neutral-100
--neutral-900
```

Semantic aliases should be preferred for app surfaces:

```css
--bg-color-base
--bg-color-secondary
--bg-color-lower
--bg-color-raised
--border-color-default
--text-color-base
--text-color-secondary
--text-color-muted
--text-color-invert
```

Utility examples:

```html
<div class="bg-base text-base border">
  <p class="text-secondary">Secondary text</p>
  <span class="text-primary">Primary text</span>
  <button class="btn btn-primary">Action</button>
</div>
```

Use semantic colors for layout and component surfaces. Use exact shade utilities like `bg-blue-100`, `text-red-600`, or `border-color-neutral-300` when a specific color is required.

### Components

Components provide useful defaults and can be combined with utilities.

Common component classes:

- Buttons: `btn`, `btn-primary`, `btn-default`, `btn-outline`, `btn-invert`, `btn-neutral`, `btn-sm`, `btn-lg`, `btn-xl`, `btn-icon`
- Cards: `card`, `card-body`, `card active`, `card selected`
- Forms: `form-label`, `form-control`, `form-select`, `form-check`, `form-check-input`, `form-check-label`
- Navigation: `nav`, `nav-row`, `nav-col`, `nav-underline`, `nav-link`, `item-nav`, `nav-compact`
- Tables: `table`, `table-compact`, `table-bordered`, `table-borderless`, `table-striped`, `table-hover`, `table-responsive`
- Feedback and UI: `alert`, `badge`, `avatar`, `dialog`, `tabs`, `dropdown`, `tag`, `chip`, `progress`

Example:

```html
<article class="card">
  <div class="card-body">
    <h2 class="text-2xl mb-2">Account</h2>
    <label class="form-label" for="email">Email</label>
    <input id="email" class="form-control mb-4" type="email">
    <button class="btn btn-primary">Save changes</button>
  </div>
</article>
```

### Extending Final CSS

Add new components in `scss/components/` and new utilities in `scss/utilities/`.

Recommended pattern:

1. Create a focused partial, for example `scss/components/_timeline.scss`.
2. Use CSS variables where the value should be themeable.
3. Use existing tokens such as `--border-radius-base`, `--bg-color-raised`, `--text-color-base`, and `--border-color-default`.
4. Import the partial from `scss/final.scss`.
5. Compile to `css/final.css` and `css/final.min.css`.

Example component style:

```scss
.timeline {
  display: grid;
  gap: 16px;
  color: var(--text-color-base);
}

.timeline-item {
  padding: 16px;
  background-color: var(--bg-color-raised);
  border: 1px solid var(--border-color-default);
  border-radius: var(--border-radius-base);
}
```

## For AI Agents

When working in this repository:

- Treat `scss/final.scss` as the source of truth for what the library includes.
- Prefer editing SCSS partials over editing compiled CSS directly.
- Keep utilities small, explicit, and generated from maps when they follow a scale.
- Preserve the 4px spacing scale unless the project intentionally changes it.
- Prefer semantic CSS variables for component colors so light/dark mode works automatically.
- Use responsive prefixes from `scss/_breakpoint-config.scss`.
- Do not add JavaScript dependencies for core components.
- Keep components composable with utilities instead of creating many one-off variants.
- After SCSS changes, regenerate the files in `css/`.

## Status

Final CSS is an active project. The current README gives high-level context and short usage documentation. Detailed documentation for each utility class and component will be added separately.
