<!-- Generated from docs/doc-utility-cursor.html. Keep this file in sync with the HTML documentation. -->

# Cursor

---

Cursor utilities set the mouse cursor for interactive, disabled, draggable, text, loading, and zoomable elements. Use them when an element's behavior is not obvious from native HTML semantics or when you are building custom controls.

Responsive: No

---

### What it does?

Here are the available cursor classes:

| Class | Styles |
| --- | --- |
| cursor-pointer | cursor: pointer; |
| cursor-not-allowed | cursor: not-allowed; |
| cursor-default | cursor: default; |
| cursor-help | cursor: help; |
| cursor-move | cursor: move; |
| cursor-col-resize | cursor: col-resize; |
| cursor-row-resize | cursor: row-resize; |
| cursor-no-drop | cursor: no-drop; |
| cursor-wait | cursor: wait; |
| cursor-zoom-in | cursor: zoom-in; |
| cursor-zoom-out | cursor: zoom-out; |
| cursor-text | cursor: text; |

### Basic example

      Pointer
      Not allowed
      Help cursor

```html
<button class="btn btn-primary cursor-pointer">Pointer</button>
<button class="btn btn-default cursor-not-allowed opacity-50">Not allowed</button>
<span class="cursor-help">Help cursor</span>
```

### Interactive examples

Hover over each item to see the cursor style. These classes are useful for custom UI where the browser does not infer the correct cursor automatically.

      cursor-move
      cursor-text
      cursor-wait
      cursor-col-resize
      cursor-row-resize
      cursor-zoom-in

```html
<div class="cursor-move">cursor-move</div>
<div class="cursor-text">cursor-text</div>
<div class="cursor-wait">cursor-wait</div>
<div class="cursor-col-resize">cursor-col-resize</div>
<div class="cursor-row-resize">cursor-row-resize</div>
<div class="cursor-zoom-in">cursor-zoom-in</div>
```

### Image preview links

Use zoom cursors on thumbnails or previews to communicate that the item can be opened or enlarged.

```html
<a href="#" class="d-inline-block cursor-zoom-in rounded overflow-hidden border">
  <img src="/placeholder.jpg" width="180" height="120" alt="Preview placeholder">
</a>
```

### How to customize?

You can customize cursor utilities in `scss/utilities/_cursor.scss`. Add only cursors that are meaningful for your project's UI patterns. After editing, compile the SCSS into the files in `css/`.

```css
/* Add a custom cursor utility */
.cursor-grab {
  cursor: grab;
}

.cursor-grabbing {
  cursor: grabbing;
}
```
