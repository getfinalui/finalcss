<!-- Generated from docs/doc-component-dropdown.html. Keep this file in sync with the HTML documentation. -->

# Dropdown

---

Dropdowns are toggleable, contextual overlays that display a list of links, actions, or content. They're commonly used for navigation menus, action lists, and selection interfaces that need to be hidden until triggered by user interaction.

- When to use it: Use dropdowns for displaying contextual menus, navigation options, user profile actions, or any list of options that would clutter the interface if always visible. Ideal for secondary actions, filtering options, or when space is limited.

- Don't use for: Primary navigation that should always be visible, form selects (use `` instead), or critical information that users need to see immediately. Avoid for mobile-first designs where screen taps might be difficult.

- Dark mode: Automatic

- SCSS file: `/scss/components/_dropdown.scss`

---

## Basic example

          Open Menu

- [Action](#)

- [Another action](#)

- [Something else](#)

```html
<div class="item-nav">
    <button class="btn btn-default" data-toggle="menu_basic_1">
      Open Menu <i class="icon-dropdown"></i>
    </button>
    <ul class="dropdown" id="menu_basic_1" style="display: none;">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else</a></li>
    </ul>
  </div>
```

---

## Profile dropdown with avatar

          A
          Profile

- [Profile](#)

- [Account Settings](#)

- [Newsletter](#)

-

- [Sign Out](#)

```html
<div class="item-nav">
    <a class="nav-link px-2 p-1" href="#" data-toggle="menu_profile_1">
      <span class="avatar avatar-sm">A</span>
      <span>Profile</span>
      <i class="icon-dropdown"></i>
    </a>
    <ul class="dropdown right-0" id="menu_profile_1" style="display: none;">
      <li><a class="dropdown-item" href="#">Profile</a></li>
      <li><a class="dropdown-item" href="#">Account Settings</a></li>
      <li><a class="dropdown-item" href="#">Newsletter</a></li>
      <li><hr></li>
      <li><a class="dropdown-item" href="#">Sign Out</a></li>
    </ul>
  </div>
```

---

## Dropdown on hover (no JavaScript required)

        More options

          Great courses
          Documentation
          Newsletter

---

          Example link
          Great sample

```html
<div class="item-nav group">
    <a class="nav-link" href="#">More options <i class="icon-dropdown"></i></a>
    <nav class="dropdown lg:min-w-60 group-hover:d-block d-none">
      <a class="dropdown-item" href="#">Great courses</a>
      <a class="dropdown-item" href="#">Documentation</a>
      <a class="dropdown-item" href="#">Newsletter</a>
      <hr>
      <a class="dropdown-item" href="#">Example link</a>
      <a class="dropdown-item" href="#">Great sample</a>
    </nav>
  </div>
```

---

## Dropdown with dividers and disabled items

          Actions

- [Edit](#)

- [Duplicate](#)

-

- [Active item](#)

- [Disabled item](#)

-

- [Delete](#)

```html
<div class="item-nav">
    <button class="btn btn-primary" data-toggle="menu_complex_1">
      Actions <i class="icon-dropdown"></i>
    </button>
    <ul class="dropdown" id="menu_complex_1" style="display: none;">
      <li><a class="dropdown-item" href="#">Edit</a></li>
      <li><a class="dropdown-item" href="#">Duplicate</a></li>
      <li><div class="divider"></div></li>
      <li><a class="dropdown-item active" href="#">Active item</a></li>
      <li><a class="dropdown-item disabled" href="#">Disabled item</a></li>
      <li><div class="divider"></div></li>
      <li><a class="dropdown-item" href="#">Delete</a></li>
    </ul>
  </div>
```

---

## Dropup variant

          Dropup

- [Action](#)

- [Another action](#)

- [Something else](#)

```html
<div class="item-nav">
    <button class="btn btn-default" data-toggle="menu_dropup_1">
      Dropup <i class="icon-dropup"></i>
    </button>
    <ul class="dropdown open-up" id="menu_dropup_1" style="display: none;">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else</a></li>
    </ul>
  </div>
```

---

## How to customize?

Dropdowns can be customized to match your design system by modifying colors, sizes, shadows, and positioning. You can adjust these properties either inline with CSS variables or by modifying the SCSS source files for more comprehensive changes across your project.

### Customize using inline CSS and variables

You can override dropdown styling using the `style` attribute or by targeting CSS custom properties. This is useful for one-off customizations without modifying the core styles.

          Custom Style

- [Custom item 1](#)

- [Custom item 2](#)

- [Custom item 3](#)

```html
<ul class="dropdown" style="min-width: 250px; --bg-color-raised: #f0f9ff; --neutral-300: #93c5fd; box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);">
    <li><a class="dropdown-item" href="#" style="border-radius: 8px;">Custom item 1</a></li>
    <li><a class="dropdown-item" href="#" style="border-radius: 8px;">Custom item 2</a></li>
  </ul>
```

### Advanced customization using SCSS file

File to customize: `scss/components/_dropdown.scss`

For project-wide dropdown customization, modify the SCSS source file. The dropdown component uses several CSS custom properties that you can override in your theme or variables file:

Background and borders: The dropdown uses `--bg-color-raised` for its background color and `--neutral-300` for border color. Override these variables in your root or theme file to change the dropdown appearance across your entire application.

Spacing and sizing: You can adjust the `min-width` property (default: 10rem) to control the minimum dropdown width, and modify the `padding: 4px` to change internal spacing. The `top: 99%` property positions the dropdown just below its trigger element.

Dropdown items: Individual dropdown items have a `min-height: 38px`, `padding: 4px 8px`, and `gap: 8px` for icon spacing. Modify these values to create more compact or spacious menu items. The hover state uses `--neutral-100` for background color.

Shadow and elevation: The default shadow is `box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1)`. Adjust this to make dropdowns appear more elevated or subtle based on your design needs.

Dropup variant: The `.open-up` class repositions the dropdown above the trigger using `bottom: 0`, `top: auto`, and `transform: translateY(-40px)`. Adjust the transform value to fine-tune vertical positioning.

### Key customization options

- `min-width`: Controls minimum dropdown width (default: 10rem)

- `--bg-color-raised`: Dropdown background color

- `--neutral-300`: Border color for dropdown container and dividers

- `box-shadow`: Elevation shadow for the dropdown (default: 0 4px 16px)

- `--border-radius-lg`: Corner radius for dropdown container

- `--border-radius-base`: Corner radius for dropdown items

- `.dropdown-item` padding and gap: Control item spacing and icon gaps

- `--neutral-100`: Hover background color for items

- `--neutral-200`: Active/pressed background color for items

- `z-index: 1000`: Stacking order (increase if dropdowns appear behind other elements)

### How to compile _dropdown.scss file?

- Option A: Node.js and npm tools - If you're comfortable with terminal and Node.js, use tools like Sass CLI, Gulp, or Webpack to compile SCSS to CSS. Run commands like `sass scss/components/_dropdown.scss css/dropdown.css` in your terminal.

- Option B: Visual GUI applications - If you prefer visual interfaces, use applications like Prepros.io or CodeKit. Simply drag your project folder into the app, and it will automatically watch and compile your SCSS files whenever you save changes.

---

## JavaScript functionality

To enable click-to-toggle behavior for dropdowns, include the following JavaScript. This script listens for clicks on elements with a `data-toggle` attribute and toggles the corresponding dropdown visibility. It also automatically closes dropdowns when clicking outside.

```javascript
document.addEventListener("click", function (event) {
    // Find the closest ancestor with a data-toggle attribute
    const triggerElement = event.target.closest("[data-toggle]");

    if (triggerElement) {
      // Get the target ID from the data-toggle attribute
      const targetId = triggerElement.getAttribute("data-toggle");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Toggle element visibility
        if (targetElement.style.display === "none" || !targetElement.style.display || targetElement.hasAttribute('hidden')) {
          targetElement.style.display = "block";
          targetElement.removeAttribute('hidden');
        } else {
          targetElement.style.display = "none";
          targetElement.setAttribute('hidden', '');
        }
      }
      event.preventDefault();
      return;
    }

    // Close dropdowns if clicked outside
    const openedDropdowns = document.querySelectorAll('.dropdown[style*="display: block"]');
    openedDropdowns.forEach(dropdown => {
      if (!dropdown.contains(event.target)) {
        dropdown.style.display = "none";
      }
    });
  });
```

		// ***********************
		// Show/hide dropdown
		document.addEventListener("click", function (event) {
				// Find the closest ancestor with a `data-trigger` attribute (if any)
				const triggerElement = event.target.closest("[data-toggle]");

				if (triggerElement) {
						// Get the target ID from the `data-trigger` attribute
						const targetId = triggerElement.getAttribute("data-toggle");
						const targetElement = document.getElementById(targetId);

						if (targetElement) {
							console.log(targetElement.style.display);
								// Toggle element
								if (targetElement.style.display === "none" || !targetElement.style.display || targetElement.hasAttribute('hidden')) {
										targetElement.style.display = "block"; // Show the dropdown
										targetElement.removeAttribute('hidden');
								} else {
										targetElement.style.display = "none"; // Hide the dropdown
										targetElement.setAttribute('hidden', '');
								}
						}
						// Prevent default action for links (optional)
						event.preventDefault();
						return; // Exit, since we handled the trigger click
				}
				// Close dropdowns if clicked outside
				const openedDropdowns = document.querySelectorAll('.dropdown[style*="display: block"]');
				openedDropdowns.forEach(dropdown => {
						// Check if the click is inside the dropdown
						if (!dropdown.contains(event.target)) {
								dropdown.style.display = "none"; // Close the dropdown
						}
				});
		});
