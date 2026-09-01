<!-- Generated from docs/doc-utility-object-fit.html. Keep this file in sync with the HTML documentation. -->

# Object Fit

---

Object fit utilities control how images and videos are resized to fit their container. Use these classes to specify whether content should be stretched, scaled proportionally, cropped, or displayed at its original size. This is particularly useful when working with responsive images, thumbnails, avatars, and media galleries where you need consistent sizing while maintaining aspect ratios or filling containers completely.

Responsive: No

---

### What it does?

Here are representative examples of these classes:

| Class | Styles |
| --- | --- |
| object-fit-contain | object-fit: contain; |
| object-fit-cover | object-fit: cover; |
| object-fit-fill | object-fit: fill; |
| object-fit-scale | object-fit: scale-down; |
| object-fit-none | object-fit: none; |

### Basic example

object-fit-contain

Scales to fit, maintains aspect ratio

object-fit-cover

Fills container, crops if needed

object-fit-fill

Stretches to fill, may distort

object-fit-scale

Contain or original, whichever is smaller

object-fit-none

Original size, crops overflow

```html
<!-- object-fit-contain: Scales to fit while maintaining aspect ratio -->
<div class="bg-neutral-100 rounded">
  <img src="https://placehold.co/800x600.png" class="object-fit-contain" style="width: 100%; height:200px" alt="Contain">
</div>

<!-- object-fit-cover: Fills container, crops excess -->
<div class="bg-neutral-100 rounded">
  <img src="https://placehold.co/800x600.png" class="object-fit-cover" style="width: 100%; height:200px;" alt="Cover">
</div>

<!-- object-fit-fill: Stretches to fill container -->
<div class="bg-neutral-100 rounded">
  <img src="https://placehold.co/800x600.png" class="object-fit-fill" style="width: 100%; height: 200px" alt="Fill">
</div>

<!-- object-fit-scale: Like contain but won't upscale -->
<div class="bg-neutral-100 rounded">
  <img src="https://placehold.co/800x600.png" class="object-fit-scale" style="width: 100%; height:200px" alt="Scale">
</div>

<!-- object-fit-none: Uses original size -->
<div class="bg-neutral-100 rounded">
  <img src="https://placehold.co/800x600.png" class="object-fit-none" style="width: 100%; height:200px" alt="None">
</div>
```

### How to customize?

You can add more object-fit utilities by editing `scss/utilities/_object-fit.scss`. After making changes, recompile your SCSS to generate the updated `css/final.css` file.

```css
// In scss/utilities/_object-fit.scss

.object-fit-contain { object-fit: contain; }
.object-fit-cover { object-fit: cover; }
.object-fit-fill { object-fit: fill; }
.object-fit-scale { object-fit: scale-down; }
.object-fit-none { object-fit: none; }

// Compile SCSS to CSS
// Run: sass scss/main.scss css/final.css
```
