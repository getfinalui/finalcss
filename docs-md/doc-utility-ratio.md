<!-- Generated from docs/doc-utility-ratio.html. Keep this file in sync with the HTML documentation. -->

# Aspect Ratio

---

Aspect ratio utility classes maintain consistent width-to-height proportions for elements. Use these classes to create responsive images, video containers, thumbnails, and grid items that preserve their shape regardless of screen size. Perfect for maintaining visual consistency across media elements, cards, and placeholders.

---

### What it does?

Here are representative examples of these classes:

| Class | Styles |
| --- | --- |
| ratio-1x1 or square | aspect-ratio: 1/1 |
| ratio-16x9 | aspect-ratio: 16/9 |
| ratio-9x16 | aspect-ratio: 9/16 |
| ratio-4x3 | aspect-ratio: 4/3 |
| ratio-3x4 | aspect-ratio: 3/4 |
| ratio-3x2 | aspect-ratio: 3/2 |
| ratio-2x3 | aspect-ratio: 2/3 |
| ratio-2x1 | aspect-ratio: 2/1 |
| ratio-1x2 | aspect-ratio: 1/2 |
| ratio-3x1 | aspect-ratio: 3/1 |
| ratio-1x3 | aspect-ratio: 1/3 |

### Basic example

  1:1 Square

```html
<div class="ratio-1x1" style="width: 200px;">
  1:1 Square
</div>
```

### Examples

Common video aspect ratios like 16:9 (widescreen) and 4:3 (standard) are ideal for embedding videos, creating video placeholders, or designing media containers.

      16:9 Widescreen

      4:3 Standard

```html
<div class="ratio-16x9">
  16:9 Widescreen
</div>

<div class="ratio-4x3">
  4:3 Standard
</div>
```

Portrait orientations like 9:16 (mobile video) and 3:4 (portrait photo) are perfect for social media content, mobile-first designs, and vertical layouts.

      9:16
Mobile Story

      3:4
Portrait

```html
<div class="ratio-9x16">
  9:16 Mobile Story
</div>

<div class="ratio-3x4">
  3:4 Portrait
</div>
```

Wide panoramic ratios like 3:1 and 2:1 are excellent for banners, hero sections, and horizontal layouts that need dramatic width.

    3:1 Panoramic Banner

    2:1 Wide Banner

```html
<div class="ratio-3x1">
  3:1 Panoramic Banner
</div>

<div class="ratio-2x1">
  2:1 Wide Banner
</div>
```

Image grids with consistent aspect ratios create professional-looking galleries and product showcases. The square ratio is perfect for thumbnails and profile images.

```html
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 15px;">
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
</div>
```

### How to customize?

You can customize aspect ratios by editing scss/utilities/_ratio.scss file. Add custom ratios for specific use cases like social media dimensions (1.91:1 for Facebook, 1:1.25 for Pinterest), or create branded aspect ratios. After making changes, compile the SCSS to generate the updated CSS file.

```css
/* Add custom social media aspect ratios */
.ratio-facebook { aspect-ratio: 1.91/1; } // Facebook link preview
.ratio-twitter { aspect-ratio: 2/1; } // Twitter card
.ratio-pinterest { aspect-ratio: 2/3; } // Pinterest pin
.ratio-instagram { aspect-ratio: 4/5; } // Instagram portrait

/* Add ultra-wide ratios */
.ratio-21x9 { aspect-ratio: 21/9; } // Cinematic
.ratio-32x9 { aspect-ratio: 32/9; } // Super ultrawide

/* Add golden ratio */
.ratio-golden { aspect-ratio: 1.618/1; } // Golden ratio

/* Custom business card */
.ratio-business-card { aspect-ratio: 3.5/2; } // Standard business card
```
