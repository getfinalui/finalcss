<!-- Generated from docs/doc-utility-padding.html. Keep this file in sync with the HTML documentation. -->

# Padding

---

Padding utilities provide precise control over element inner spacing by applying padding on all sides or specific sides (top, bottom, left, right). These classes are essential for creating breathing room within elements, improving readability, and maintaining consistent internal spacing throughout your design. Use them to add space inside buttons, cards, containers, or any element that needs internal spacing.

Responsive: ✅ Yes

lg:classname, md:classname, sm:classname,

max-lg:classname, max-md:classname, max-sm:classname

---

### What it does?

Here are representative examples of these classes:

| Class | Styles |
| --- | --- |
| p-unset | padding: unset |
| p-initial | padding: initial |
| p-0 | padding: 0 |
| p-1 | padding: 4px |
| p-2 | padding: 8px |
| p-3 | padding: 12px |
| p-4 | padding: 16px |
| p-5 | padding: 20px |
| p-6 | padding: 24px |
| p-7 | padding: 28px |
| p-8 | padding: 32px |
| p-9 | padding: 36px |
| p-10 | padding: 40px |
| p-11 | padding: 44px |
| p-12 | padding: 48px |
| p-14 | padding: 56px |
| p-16 | padding: 64px |
| p-18 | padding: 72px |
| p-20 | padding: 80px |
| p-25 | padding: 100px |
| p-30 | padding: 120px |
| p-35 | padding: 140px |
| p-40 | padding: 160px |
| p-45 | padding: 180px |
| p-50 | padding: 200px |
| p-55 | padding: 220px |
| p-60 | padding: 240px |
| p-65 | padding: 260px |
| p-70 | padding: 280px |
| p-75 | padding: 300px |
| p-80 | padding: 320px |
| p-85 | padding: 340px |
| p-90 | padding: 360px |
| p-95 | padding: 380px |
| p-100 | padding: 400px |

| Class | Styles |
| --- | --- |
| py-unset | padding-top: unset; padding-bottom: unset |
| py-initial | padding-top: initial; padding-bottom: initial |
| py-0 | padding-top: 0; padding-bottom: 0 |
| py-1 | padding-top: 4px; padding-bottom: 4px |
| py-2 | padding-top: 8px; padding-bottom: 8px |
| ... | ... |
| py-100 | padding-top: 400px; padding-bottom: 400px |

| Class | Styles |
| --- | --- |
| px-unset | padding-left: unset; padding-right: unset |
| px-initial | padding-left: initial; padding-right: initial |
| px-0 | padding-left: 0; padding-right: 0 |
| px-1 | padding-left: 4px; padding-right: 4px |
| px-2 | padding-left: 8px; padding-right: 8px |
| ... | ... |
| px-100 | padding-left: 400px; padding-right: 400px |

| Class | Styles |
| --- | --- |
| pt-unset | padding-top: unset |
| pt-initial | padding-top: initial |
| pt-0 | padding-top: 0 |
| pt-1 | padding-top: 4px |
| pt-2 | padding-top: 8px |
| ... | ... |
| pt-100 | padding-top: 400px |

| Class | Styles |
| --- | --- |
| pb-unset | padding-bottom: unset |
| pb-initial | padding-bottom: initial |
| pb-0 | padding-bottom: 0 |
| pb-1 | padding-bottom: 4px |
| pb-2 | padding-bottom: 8px |
| ... | ... |
| pb-100 | padding-bottom: 400px |

| Class | Styles |
| --- | --- |
| pr-unset | padding-right: unset |
| pr-initial | padding-right: initial |
| pr-0 | padding-right: 0 |
| pr-1 | padding-right: 4px |
| pr-2 | padding-right: 8px |
| ... | ... |
| pr-100 | padding-right: 400px |

| Class | Styles |
| --- | --- |
| pl-unset | padding-left: unset |
| pl-initial | padding-left: initial |
| pl-0 | padding-left: 0 |
| pl-1 | padding-left: 4px |
| pl-2 | padding-left: 8px |
| ... | ... |
| pl-100 | padding-left: 400px |

### Basic example

      Padding all sides: p-5
      Padding top only: pt-8
      Horizontal padding: px-10

```html
<div class="p-5">Padding all sides: p-5</div>
<div class="pt-8">Padding top only: pt-8</div>
<div class="px-10">Horizontal padding: px-10</div>
```

### Examples

Padding utilities work seamlessly with responsive breakpoint prefixes, allowing you to create adaptive internal spacing that adjusts based on viewport size. Use classes like `lg:p-8` to apply padding only on large screens, or `max-sm:py-4` to apply vertical padding only on small screens and below. This is particularly useful for buttons, cards, and containers that need different spacing across devices.

        Button with responsive padding: p-2 on mobile, p-6 on large screens

        Card with vertical padding: py-3 normally, py-6 on medium screens and below

        Content with left padding: pl-2 on mobile, pl-10 on medium screens and up

```html
<button class="p-2 lg:p-6">
  Button with responsive padding
</button>

<div class="py-3 max-md:py-6">
  Card with vertical padding
</div>

<div class="pl-2 md:pl-10">
  Content with left padding
</div>
```

### How to customize?

You can customize the padding scale by editing the `$padding_map` variable in `scss/utilities/_padding.scss`. Add, remove, or modify spacing values to match your design system requirements. After making changes, compile the SCSS to generate updated CSS with your custom padding values.

```css
$padding_map: (
  "unset": unset,
  "initial": initial,
  "0": 0,
  "1": 4px,
  "2": 8px,
  "3": 12px,
  "4": 16px,
  "5": 20px,
  // Add custom values
  "custom": 42px,
  // Modify existing values
  "10": 50px,  // Changed from 40px
);

// Generates padding classes for all sides
@each $name, $value in $padding_map {
  .p-#{$name} { padding: #{$value}; }
}
```

To compile your SCSS into CSS, you have two main options: Option A: Use Node.js with npm tools like `sass` or `dart-sass` if you're comfortable working in the terminal and have Node.js installed on your system. Option B: Use visual applications like Prepros.io or CodeKit which provide an intuitive graphical interface for compiling SCSS without requiring any terminal or command-line knowledge.
