<!-- Generated from docs/doc-component-alert.html. Keep this file in sync with the HTML documentation. -->

# Alert

---

Short information about this component: The alert component is used to display important messages, notifications, or feedback to users. It comes in four variants (danger, warning, success, info) with distinct color schemes to convey different types of information. Each alert supports icons or images alongside text content.

- When to use it: Use alerts to display error messages, warnings, success confirmations, or informational notices that require user attention. Perfect for form validation feedback, system notifications, or contextual messages.

- Don't use for: Don't use alerts for permanent UI elements, navigation components, or content that doesn't require immediate attention. Avoid overusing alerts as they can cause alert fatigue and reduce their effectiveness.

- Dark mode: Automatic

- SCSS file: `/scss/components/_alert.scss`

---

## Examples

        Error! There was a problem with your submission.

        Warning! Please review your information before proceeding.

        Success! Your changes have been saved.

        Info! New updates are available for your account.

```html
<div class="alert alert-danger">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">...</svg>
  <span>Error! There was a problem with your submission.</span>
</div>

<div class="alert alert-warning">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">...</svg>
  <span>Warning! Please review your information before proceeding.</span>
</div>

<div class="alert alert-success">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">...</svg>
  <span>Success! Your changes have been saved.</span>
</div>

<div class="alert alert-info">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">...</svg>
  <span>Info! New updates are available for your account.</span>
</div>
```

---

## How to customize?

The alert component uses CSS custom properties (variables) for easy customization. To modify the appearance, edit `scss/components/_alert.scss`. Key customizable properties include `--alert-bg-color` and `--alert-text-color` for each variant (danger, warning, success, info). You can adjust padding, margins, border-radius using variables like `--border-radius-base`, or directly modify the values in the SCSS file. The component also references color variables like `--text-color-red`, `--red-100`, etc., which should be defined in your main variables file. Icons and images are automatically sized to 20x20 pixels with 8px right margin. After making changes, compile the SCSS using either: Option A) Node.js and npm with a build tool like sass or webpack if you're comfortable with terminal commands, or Option B) Visual GUI applications like Prepros.io or CodeKit if you prefer a graphical interface without using the terminal.
