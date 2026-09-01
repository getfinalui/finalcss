<!-- Generated from docs/doc-component-avatar.html. Keep this file in sync with the HTML documentation. -->

# Avatar

---

Short information about this component: The avatar component displays a user's profile picture or initials in a circular container. It supports both image-based avatars and text-based initials with customizable sizes and colors. The component is designed to be flexible with CSS custom properties for easy theming.

- When to use it: Use avatars to represent users in profiles, comment sections, user lists, navigation headers, chat interfaces, or anywhere you need to visually identify a person or account. Perfect for displaying profile pictures with automatic fallback to initials when no image is available.

- Don't use for: Don't use avatars for logos, icons, or non-person entities unless they specifically represent user accounts. Avoid using avatars for decorative purposes or as generic image containers. Not suitable for rectangular images or content that doesn't represent a user or profile.

- Dark mode: Automatic

- SCSS file: `/scss/components/_avatar.scss`

---

## Examples

      AB
      CD
      EF
      GH
      IJ
      KL
      MN

```html
<!-- Avatar sizes with initials -->
<div class="avatar avatar-xs">AB</div>
<div class="avatar avatar-sm">CD</div>
<div class="avatar avatar-md">EF</div>
<div class="avatar">GH</div>
<div class="avatar avatar-lg">IJ</div>
<div class="avatar avatar-xl">KL</div>
<div class="avatar avatar-2xl">MN</div>

<!-- Avatar with images -->
<div class="avatar avatar-sm">
  <img src="https://i.pravatar.cc/150?img=1" alt="User">
</div>
<div class="avatar">
  <img src="https://i.pravatar.cc/150?img=2" alt="User">
</div>
<div class="avatar avatar-lg">
  <img src="https://i.pravatar.cc/150?img=3" alt="User">
</div>
```

---

## How to customize?

The avatar component is highly customizable through CSS custom properties and SCSS variables. To modify the component, edit the `scss/components/_avatar.scss` file.

Key customization options:

- Size: Customize avatar dimensions using the `--size` CSS variable or modify the predefined size classes (avatar-xs through avatar-2xl) in the SCSS file. Default size is 40px.

- Background color: Change the background using the `--primary-500` variable or directly set `background-color` property. Default fallback is teal.

- Text color: Modify the initials color by changing the `color: #ffffffaf;` property in the SCSS file.

- Font size: Adjust text size using the `--font-size` variable or modify font-size values for each size variant.

- Border radius: While currently set to 50% for circular avatars, you can modify `border-radius` to create rounded squares or other shapes.

- Custom sizes: Add new size variants by creating additional classes following the pattern `.avatar-[size-name]` with custom width, height, and font-size values.

How to compile?

- Option A: Node and npm tools (if you know terminal and Node.js)

- Option B: Prepros.io software or CodeKit (if you like visual apps UI and hate terminal)
