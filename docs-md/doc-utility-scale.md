<!-- Generated from docs/doc-utility-scale.html. Keep this file in sync with the HTML documentation. -->

# Scale

---

Scale utilities apply CSS transform scaling to an element. Use them for small interactive effects, zoom previews, selected states, and hover feedback. Scale classes include a built-in 0.2s transform transition, so hover and group-hover changes feel smooth by default.

Responsive: No

---

### What it does?

Here are representative examples of these classes:

| Class | Styles |
| --- | --- |
| transition-all | transition-property: all; transition-duration: .2s; |
| scale-50 | transform: scale(0.5); |
| scale-80 | transform: scale(0.8); |
| scale-100 | transform: scale(1); |
| scale-120 | transform: scale(1.2); |
| scale-150 | transform: scale(1.5); |
| hover:scale-110 | transform: scale(1.1) on hover; |
| group-hover:scale-110 | transform: scale(1.1) when parent .group is hovered; |

### Basic example

      scale-80
      scale-100
      scale-120

```html
<div class="scale-80">scale-80</div>
<div class="scale-100">scale-100</div>
<div class="scale-120">scale-120</div>
```

### Hover scale

Use `hover:scale-*` for simple zoom effects on cards, buttons, thumbnails, and icons.

    Hover me
    Hover card

```html
<button class="btn btn-primary hover:scale-110">Hover me</button>
<a href="#" class="d-inline-block p-4 rounded bg-purple-100 hover:scale-120">
  Hover card
</a>
```

### Group hover scale

Use `group-hover:scale-*` when a child element should scale after hovering the parent.

#### Hover over the card

The square scales because the parent has class `group`.

```html
<article class="group card card-body">
  <div class="w-12 h-12 rounded bg-primary group-hover:scale-120"></div>
  <h6>Hover over the card</h6>
</article>
```

### How to customize?

You can customize scale utilities in `scss/utilities/_scale.scss`. Add new scale values, change the transition duration, or remove the default transition if you want scaling to happen instantly. After editing, compile the SCSS into the files in `css/`.

```css
/* Add a new scale value */
.scale-105 { transform: scale(1.05); }
.hover\:scale-105:hover { transform: scale(1.05); }
.group:hover .group-hover\:scale-105 { transform: scale(1.05); }

/* Change the default transition */
[class*=scale] {
  transition: transform 0.15s;
}
```
