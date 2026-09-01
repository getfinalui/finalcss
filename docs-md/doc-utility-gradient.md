<!-- Generated from docs/doc-utility-gradient.html. Keep this file in sync with the HTML documentation. -->

# Background gradient

---

Gradient background utilities provide pre-designed gradient effects for elements. Use these classes to create visually stunning backgrounds for hero sections, cards, buttons, and promotional banners. The utility includes linear gradients and aurora effects with radial gradients for modern, eye-catching designs. These gradients add depth and visual interest without needing custom CSS.

---

### What it does?

Here are representative examples of these classes:

| Class | Styles |
| --- | --- |
| .bg-gradient |  |
| .bg-gradient-2 |  |
| .bg-aurora |  |
| .bg-aurora-2 |  |

### Basic example

## Linear Gradient

Blue to teal gradient (bg-gradient)

## Multi-Color Gradient

Purple to pink to yellow gradient (bg-gradient-2)

## Aurora Effect

Warm aurora with radial gradients (bg-aurora)

## Aurora Effect 2

Cool aurora with radial gradients (bg-aurora-2)

```html
<div class="bg-gradient p-6 rounded-lg text-white">
  <h4>Linear Gradient</h4>
  <p>Blue to teal gradient (bg-gradient)</p>
</div>

<div class="bg-gradient-2 p-6 rounded-lg text-white">
  <h4>Multi-Color Gradient</h4>
  <p>Purple to pink to yellow gradient (bg-gradient-2)</p>
</div>

<div class="bg-aurora p-6 rounded-lg text-white">
  <h4>Aurora Effect</h4>
  <p>Warm aurora with radial gradients (bg-aurora)</p>
</div>

<div class="bg-aurora-2 p-6 rounded-lg text-dark">
  <h4>Aurora Effect 2</h4>
  <p>Cool aurora with radial gradients (bg-aurora-2)</p>
</div>
```

### How to customize?

You can customize gradient styles or add new gradient classes by editing `scss/utilities/_gradient.scss`. Modify existing gradient colors, angles, or positions, or create entirely new gradient effects. After making changes, recompile your SCSS to generate the updated `css/final.css` file.

```css
// In scss/utilities/_gradient.scss

.bg-gradient{
  background-color: #0093E9;
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
}

.bg-gradient-2{
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
}

.bg-aurora{
  background-color:hsla(0,100%,50%,1);
  background-image:
  radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),
  radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
  radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),
  radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),
  radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
  radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),
  radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%);
}

.bg-aurora-2{
  background-color:#ffd899;
  background-image:
  radial-gradient(at 98% 75%, hsla(203,98%,69%,1) 0px, transparent 50%),
  radial-gradient(at 47% 73%, hsla(180,73%,76%,1) 0px, transparent 50%),
  radial-gradient(at 45% 16%, hsla(97,89%,60%,1) 0px, transparent 50%),
  radial-gradient(at 31% 64%, hsla(77,76%,64%,1) 0px, transparent 50%),
  radial-gradient(at 63% 93%, hsla(261,85%,62%,1) 0px, transparent 50%),
  radial-gradient(at 67% 78%, hsla(1,64%,60%,1) 0px, transparent 50%),
  radial-gradient(at 81% 92%, hsla(69,76%,79%,1) 0px, transparent 50%);
}
```

Compiling SCSS to CSS: You have two main options to compile your SCSS files into CSS.

Option A: If you're comfortable with terminal and have Node.js installed, you can use command-line tools like `sass` or `node-sass`.

Option B: If you prefer visual applications and want to avoid the terminal, use GUI tools like Prepros.io or CodeKit.

These apps provide a user-friendly interface where you can drag-and-drop your project folder and automatically compile SCSS with live reload and other features.
