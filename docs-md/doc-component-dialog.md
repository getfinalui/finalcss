<!-- Generated from docs/doc-component-dialog.html. Keep this file in sync with the HTML documentation. -->

# Dialog

---

Dialog components are modal overlays that display content on top of the main page. They use the native HTML `` element with custom styling for a consistent, accessible user experience across your application.

- When to use it: For important messages, confirmations, forms, or content that requires user attention and interaction before continuing. Ideal for actions that need focus like confirming deletions, displaying alerts, collecting form data, or showing detailed information.

- Don't use for: Passive notifications (use toasts instead), content that should be accessible while browsing (use sidebars), or simple tooltips. Avoid overusing dialogs as they interrupt the user experience.

- Dark mode: Automatic

- SCSS file: `/scss/components/_dialog.scss`

---

## Basic example

    Open basic dialog

### Basic dialog

This is a simple dialog with just content and a close button.

          Got it

```html
<button class="btn btn-default" onclick="document.getElementById('dialog_basic').showModal()">Open basic dialog</button>

<dialog id="dialog_basic">
  <div class="dialog-body">
    <button class="btn-close-dialog" onclick="this.closest('dialog').close()">
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="2"></path>
      </svg>
    </button>
    <h5 class="mb-2">Basic dialog</h5>
    <p>This is a simple dialog with just content and a close button.</p>

    <div class="mt-3 d-flex gap-1">
      <button class="btn btn-default" onclick="this.closest('dialog').close()">Got it</button>
    </div>
  </div>
</dialog>
```

---

## Dialog with header and footer

    Open structured dialog

### Dialog Title

This dialog has a structured layout with header, body, and footer sections for better organization.

        Cancel
        Confirm

```html
<dialog id="dialog_structured">
  <header class="dialog-header">
    <h5>Dialog Title</h5>
    <button class="btn btn-icon" onclick="this.closest('dialog').close()">
      <svg viewBox="0 0 24 24" width="24" height="24">...</svg>
    </button>
  </header>
  <div class="dialog-body">
    <p>Dialog content goes here...</p>
  </div>
  <div class="dialog-bottom">
    <button class="btn btn-default">Cancel</button>
    <button class="btn btn-primary">Confirm</button>
  </div>
</dialog>
```

---

## Dialog sizes

    Small dialog
    Medium dialog
    Large dialog
    Extra large dialog

### Small Dialog

Max-width: 360px

### Medium Dialog

Max-width: 620px (default)

### Large Dialog

Max-width: 760px

### Extra Large Dialog

Max-width: 1024px

```html
<dialog class="dialog-sm">...</dialog>  <!-- 360px -->
<dialog class="dialog-md">...</dialog>  <!-- 620px (default) -->
<dialog class="dialog-lg">...</dialog>  <!-- 760px -->
<dialog class="dialog-xl">...</dialog>  <!-- 1024px -->
```

---

## Aside dialogs (slide-in panels)

    Slide from left
    Slide from right

### Left Panel

This dialog slides in from the left side of the screen.

### Right Panel

This dialog slides in from the right side of the screen.

```html
<dialog class="dialog-aside-left">
  <div class="d-flex flex-col h-100vh">
    <header class="dialog-header">...</header>
    <div class="dialog-body">...</div>
  </div>
</dialog>

<dialog class="dialog-aside-right">
  <div class="d-flex flex-col h-100vh">
    <header class="dialog-header">...</header>
    <div class="dialog-body">...</div>
  </div>
</dialog>
```

---

## How to customize?

The dialog component can be customized using CSS variables for colors, sizing, and spacing. You can adjust the backdrop overlay, dialog dimensions, border radius, shadows, and spacing to match your design system. Customization allows you to create unique dialog styles while maintaining consistent behavior and accessibility.

### Customize using inline css and variables

Use the `style` attribute to override default dialog styling with CSS variables or direct properties:

    Open custom dialog

### Custom Styled Dialog

This dialog has custom width, border radius, border color, and gradient background.

        Close

```html
<dialog style="max-width: 500px; border-radius: 16px; border: 2px solid var(--primary-500);">
  <div class="dialog-body" style="padding: 32px; background: linear-gradient(135deg, var(--primary-100), var(--blue-100));">
    <h5>Custom Styled Dialog</h5>
    <p>This dialog has custom styling.</p>
  </div>
</dialog>
```

### Advanced customization using SCSS file

File to customize: `scss/components/_dialog.scss`

The dialog component uses the native HTML `` element with custom styling. By default, dialogs are hidden with `display: none` until opened. The dialog appears centered on screen with a semi-transparent backdrop overlay.

The base dialog styles include positioning at the top center of the viewport with an 8% top margin, a maximum width of 620px (90% on mobile), and a high z-index (99999) to ensure it appears above other content. The dialog automatically adjusts its height based on content and includes responsive behavior.

The `.dialog-body` section contains the main content and includes automatic scrolling when content exceeds 70vh height. The scrollbar is styled to be thin and uses custom colors. Images and SVGs within dialogs are automatically constrained to 100% width.

Aside dialogs (`.dialog-aside-left` and `.dialog-aside-right`) slide in from the sides with smooth transitions. They start off-screen with `translateX(-100%)` or `translateX(100%)` and animate to their final position when opened. These full-height panels are ideal for navigation menus, filters, or detailed content views.

The backdrop overlay uses `::backdrop` pseudo-element with a semi-transparent background. Alternative overlay elements (`.overlay`, `.backdrop`) are also available for custom implementations with fixed positioning and z-index layering.

### Key customization options

- Dialog dimensions: Modify `max-width` values for size variants (.dialog-sm: 360px, .dialog-md: 620px, .dialog-lg: 760px, .dialog-xl: 1024px)

- Backdrop styling: Adjust `dialog::backdrop` background color and opacity, or add backdrop-filter for blur effects

- Positioning: Change `margin-top` percentage to adjust vertical positioning on screen

- Spacing: Customize padding in `.dialog-header`, `.dialog-body`, and `.dialog-bottom` sections

- Border and radius: Modify `border` and `border-radius` values using CSS variables like `var(--border-radius-base)`

- Scrolling behavior: Adjust `max-height` in `.dialog-body` (default: 70vh) and customize scrollbar appearance

- Animations: Modify transition timing and transforms for aside dialogs in `.dialog-aside-left` and `.dialog-aside-right`

- Close button: Customize `.btn-close-dialog` positioning, size, colors, and hover states

- Shadow effects: Adjust `box-shadow` values for depth and elevation

### How to compile _dialog.scss file?

- Option A: Using Node.js and npm tools - Install sass package (`npm install sass`) and run the compiler from terminal with `sass scss/components/_dialog.scss css/dialog.css`. This method is ideal if you're comfortable with command-line tools and want automated build processes.

- Option B: Using visual GUI applications - Use software like Prepros (prepros.io) or CodeKit for Mac users. These apps provide a visual interface to drag-and-drop SCSS files for compilation without touching the terminal. Perfect for designers and developers who prefer visual tools.

- Option C: Using VS Code extensions - Install "Live Sass Compiler" extension in Visual Studio Code for automatic compilation on file save with visual indicators and output control.

// Helper functions for opening and closing dialogs
function open_dialog(dialog_id){
     document.getElementById(dialog_id).showModal();
}

function close_dialog(btn_close){
  let this_dialog = btn_close.closest('dialog');
  this_dialog.close();
}
