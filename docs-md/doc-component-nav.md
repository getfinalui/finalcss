<!-- Generated from docs/doc-component-nav.html. Keep this file in sync with the HTML documentation. -->

# Navigation Menu (`.nav`)

---

The `.nav` component is a flexible utility for creating lists of navigation links (often referred to as navbars, tabs, or menus). It uses `display: flex` and various utility classes to support both horizontal (`.nav-row`) and vertical (`.nav-col`) layouts, with built-in active and hover states for clear interaction feedback.

- When to use it: For primary navigation bars, secondary tab menus, or footers where a list of links needs consistent styling and layout control.

- Don't use for: Complex application sidebars requiring multi-level collapse functionality or breadcrumbs (which require a distinct, simpler visual style).

- Dark mode: Automatic

- SCSS file: `/scss/components/_nav.scss`

---

## Basic examples (Row and List)

The primary structure can be created either using pure anchor tags inside a `nav` or using a standard unordered list (`ul`) with list items (`li`) for better semantic structure when using dropdowns or more complex items.

             Home
            About
            Services
            Disabled

- [Dashboard](#)

- [Reports](#)

- [Settings](#)

```html
 <nav class="nav nav-row">
    <a class="nav-link active" href="#"> Home </a>
    <a class="nav-link" href="#">About</a>
    <a class="nav-link" href="#">Services</a>
    <a class="nav-link disabled" href="#">Disabled</a>
</nav>

<ul class="nav nav-row">
    <li class="item-nav">
        <a class="nav-link active" href="#"> Dashboard </a>
    </li>
    <li class="item-nav">
        <a class="nav-link" href="#">Reports</a>
    </li>
    <li class="item-nav">
        <a class="nav-link" href="#">Settings</a>
    </li>
</ul>
```

---

## More example variants

#### Underline Style (`.nav-underline`)

             Documentation
             Tutorials
             API

#### Vertical Column (`.nav-col`)

             Profile
             Notifications
             Billing

#### Dropdown Integration

- [Products](#)

- [More](#) [Pricing](#) [Contact Sales](#) [Legal](#)

```html
 <!-- Underline Style -->
<nav class="nav nav-underline">
    <a href="#" class="nav-link active"> Documentation </a>
    <a href="#" class="nav-link"> Tutorials </a>
    <a href="#" class="nav-link"> API </a>
</nav>

<!-- Vertical Column -->
<nav class="nav nav-col w-40">
    <a href="#" class="nav-link"> Profile </a>
    <a href="#" class="nav-link active"> Notifications </a>
    <a href="#" class="nav-link"> Billing </a>
</nav>

<!-- Dropdown Integration -->
<ul class="nav nav-row">
    <li class="item-nav">
        <a class="nav-link active" href="#"> Products </a>
    </li>
    <li class="item-nav group">
        <a class="nav-link" href="#"> More <i class="icon-dropdown"></i> </a>
        <nav class="dropdown lg:min-w-60 group-hover:d-block d-none">
            <a class="dropdown-item" href="#">Pricing</a>
            <a class="dropdown-item" href="#">Contact Sales</a>
            <hr>
            <a class="dropdown-item" href="#">Legal</a>
        </nav>
    </li>
</ul>
```

---

## How to customize?

The navigation component uses a wide array of CSS variables to control colors, spacing, and border radius. This allows for deep visual customization without editing the core SCSS files, making it ideal for adapting to different branding requirements.

### Customize using inline css and variables

You can easily override the default colors and spacing of a specific navigation instance by setting the relevant CSS variables directly on the `.nav` container or a single `.nav-link`.

         Custom Link
         Custom Menu
         Custom Item

```html
 <nav class="nav nav-row" style="
    gap: 16px;
    --neutral-700: #3b82f6; /* Default text color */
    --alpha-1: rgba(59, 130, 246, 0.1); /* Hover background color */
    --primary-600: #1d4ed8; /* Active text color */
    --primary-100: rgba(29, 78, 216, 0.1); /* Active background color */">
    <a class="nav-link active" href="#"> Custom Link </a>
    <a class="nav-link" href="#"> Custom Menu </a>
    <a class="nav-link" href="#"> Custom Item </a>
</nav>
```

---

### Advanced customization using SCSS file

  File to customize: `scss/components/_nav.scss`

  To change structural elements, you should edit the `_nav.scss` file. The primary navigation container (`.nav`) sets `gap: 2px` for spacing between links, which can be adjusted for tighter or looser layouts. The default text color for all links is set using `color: var(--neutral-700)`.

  The `.nav-underline` style achieves its visual effect using the CSS pseudo-element `:after` on the `.active` list item or link. The line color is controlled by `border-bottom: 2px solid var(--primary-500)`. To change the color of the active underline across your application, update the `--primary-500` variable or modify this `border-bottom` property.

  The `.nav-link` class defines the padding and minimum height (`min-height: 38px`), ensuring all links have a good touch target size. The hover and active states use `--alpha-1` and `--primary-100` respectively for background colors, which typically come from your global transparency and primary color variables.

  The `.nav-compact` modifier class allows for smaller navigation links by reducing `min-height`, `gap`, and `padding`, which is useful for dense footer navigation or secondary menus.

### Key customization options

The following variables and properties are key for customization:

- `gap` on `.nav`: Controls the spacing between navigation links.

- `--neutral-700`: Default color for non-active links.

- `--text-color-base`: Hover text color.

- `--primary-600`: Active link text color.

- `--alpha-1`: Hover background color (a light, semi-transparent shade).

- `--primary-100`: Active background color.

- `--primary-500`: The color of the underline in the `.nav-underline` variant.

- `min-height` and `padding` on `.nav-link`: Defines the size and internal padding of the clickable area.

### How to compile _component.scss file?

- Option A) node and npm tools: Use command-line tools like `node-sass` or `dart-sass` via npm scripts if you are comfortable with the terminal and NodeJS environment.

- Option B) Prepros.io software or Codekit: Utilize visual applications like Prepros.io or Codekit. These tools provide a graphical user interface (UI) for compiling SCSS files automatically upon save, offering an easier workflow for those who prefer visual configuration over the terminal.
