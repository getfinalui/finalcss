<!-- Generated from docs/doc-utility-margin.html. Keep this file in sync with the HTML documentation. -->

# Margin

---

Margin utilities provide precise control over element spacing by applying margin on all sides or specific sides (top, bottom, left, right). These classes are essential for creating consistent layouts and maintaining proper visual hierarchy throughout your design. Use them to add space around elements, center content, or reset default margins.

Responsive: ✅ Yes

lg:classname, md:classname, sm:classname,

max-lg:classname, max-md:classname, max-sm:classname

---

### What it does?

Here are representative examples of these classes:

| Class | Styles |
| --- | --- |
| m-unset | margin: unset |
| m-initial | margin: initial |
| m-auto | margin: auto |
| m-0 | margin: 0 |
| m-1 | margin: 4px |
| m-2 | margin: 8px |
| m-3 | margin: 12px |
| m-4 | margin: 16px |
| m-5 | margin: 20px |
| m-6 | margin: 24px |
| m-7 | margin: 28px |
| m-8 | margin: 32px |
| m-9 | margin: 36px |
| m-10 | margin: 40px |
| m-11 | margin: 44px |
| m-12 | margin: 48px |
| m-14 | margin: 56px |
| m-16 | margin: 64px |
| m-18 | margin: 72px |
| m-20 | margin: 80px |
| m-25 | margin: 100px |
| m-30 | margin: 120px |
| m-35 | margin: 140px |
| m-40 | margin: 160px |
| m-45 | margin: 180px |
| m-50 | margin: 200px |
| m-55 | margin: 220px |
| m-60 | margin: 240px |
| m-65 | margin: 260px |
| m-70 | margin: 280px |
| m-75 | margin: 300px |
| m-80 | margin: 320px |
| m-85 | margin: 340px |
| m-90 | margin: 360px |
| m-95 | margin: 380px |
| m-100 | margin: 400px |

| Class | Styles |
| --- | --- |
| my-unset | margin-top: unset; margin-bottom: unset |
| my-initial | margin-top: initial; margin-bottom: initial |
| my-auto | margin-top: auto; margin-bottom: auto |
| my-0 | margin-top: 0; margin-bottom: 0 |
| my-1 | margin-top: 4px; margin-bottom: 4px |
| my-2 | margin-top: 8px; margin-bottom: 8px |
| ... | ... |
| my-100 | margin-top: 400px; margin-bottom: 400px |

| Class | Styles |
| --- | --- |
| mx-unset | margin-left: unset; margin-right: unset |
| mx-initial | margin-left: initial; margin-right: initial |
| mx-auto | margin-left: auto; margin-right: auto |
| mx-0 | margin-left: 0; margin-right: 0 |
| mx-1 | margin-left: 4px; margin-right: 4px |
| mx-2 | margin-left: 8px; margin-right: 8px |
| ... | ... |
| mx-100 | margin-left: 400px; margin-right: 400px |

| Class | Styles |
| --- | --- |
| mt-unset | margin-top: unset |
| mt-initial | margin-top: initial |
| mt-auto | margin-top: auto |
| mt-0 | margin-top: 0 |
| mt-1 | margin-top: 4px |
| mt-2 | margin-top: 8px |
| ... | ... |
| mt-100 | margin-top: 400px |

| Class | Styles |
| --- | --- |
| mb-unset | margin-bottom: unset |
| mb-initial | margin-bottom: initial |
| mb-auto | margin-bottom: auto |
| mb-0 | margin-bottom: 0 |
| mb-1 | margin-bottom: 4px |
| mb-2 | margin-bottom: 8px |
| ... | ... |
| mb-100 | margin-bottom: 400px |

| Class | Styles |
| --- | --- |
| mr-unset | margin-right: unset |
| mr-initial | margin-right: initial |
| mr-auto | margin-right: auto |
| mr-0 | margin-right: 0 |
| mr-1 | margin-right: 4px |
| mr-2 | margin-right: 8px |
| ... | ... |
| mr-100 | margin-right: 400px |

| Class | Styles |
| --- | --- |
| ml-unset | margin-left: unset |
| ml-initial | margin-left: initial |
| ml-auto | margin-left: auto |
| ml-0 | margin-left: 0 |
| ml-1 | margin-left: 4px |
| ml-2 | margin-left: 8px |
| ... | ... |
| ml-100 | margin-left: 400px |

### Basic example

      Margin all sides: m-5
      Margin top and bottom only: mt-8 mb-1
      Centered with mx-auto

```html
<div class="m-5">Margin all sides: m-5</div>
<div class="mt-8">Margin top only: mt-8</div>
<div class="mx-auto" style="width: 200px;">Centered with mx-auto</div>
```

### Examples

Margin utilities work seamlessly with responsive breakpoint prefixes. Use classes like `lg:m-5` to apply margin only on large screens, or `max-sm:mt-10` to apply top margin only on small screens and below. This enables you to create adaptive spacing that adjusts based on viewport size.

        Responsive margin: m-2 on mobile, m-10 on large screens

        Vertical margin: my-4 normally, my-8 on medium screens and below

        Left margin: ml-0 on mobile, ml-12 on medium screens and up

```html
<div class="m-2 lg:m-10">
  Responsive margin: m-2 on mobile, m-10 on large screens
</div>

<div class="my-4 max-md:my-8">
  Vertical margin: my-4 normally, my-8 on medium screens and below
</div>

<div class="ml-0 md:ml-12">
  Left margin: ml-0 on mobile, ml-12 on medium screens and up
</div>
```

### How to customize?

You can customize the margin scale by editing the `$margin_map` variable in `scss/utilities/_margin.scss`. Add, remove, or modify spacing values to match your design system. After making changes, compile the SCSS to generate updated CSS.

```css
$margin_map: (
  "unset": unset,
  "initial": initial,
  "auto": auto,
  "0": 0,
  "1": 4px,
  "2": 8px,
  "3": 12px,
  "4": 16px,
  "5": 20px,
  "6": 24px,
  // Add custom values
  "custom": 42px,
  // Modify existing values
  "10": 50px,  // Changed from 40px
);

// Generates margin classes for all sides
@each $name, $value in $margin_map {
  .m-#{$name} { margin: #{$value}!important; }
}
```

To compile your SCSS into CSS, you have two main options: Option A: Use Node.js with npm tools like `sass` or `dart-sass` if you're comfortable with terminal commands and have Node.js installed. Option B: Use visual applications like Prepros.io or CodeKit which provide a user-friendly interface for compiling SCSS without requiring terminal knowledge.
