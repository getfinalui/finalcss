<!-- Generated from docs/doc-utility-whitespace.html. Keep this file in sync with the HTML documentation. -->

# Whitespace

---

Whitespace utilities control how spaces, tabs, and line breaks are handled inside an element. Use them for single-line labels, preformatted text, code-like content, messages, and places where text wrapping needs to be explicit.

Responsive: No

---

### What it does?

Here are the available whitespace classes:

| Class | Styles |
| --- | --- |
| whitespace-normal | white-space: normal; |
| whitespace-nowrap | white-space: nowrap; |
| whitespace-pre | white-space: pre; |
| whitespace-pre-line | white-space: pre-line; |
| whitespace-pre-wrap | white-space: pre-wrap; |
| whitespace-break-spaces | white-space: break-spaces; |

### Basic example

      This label stays on one line even when the container is narrow.

```html
<div class="border rounded p-3 w-50%">
  <span class="whitespace-nowrap">
    This label stays on one line even when the container is narrow.
  </span>
</div>
```

### Preserve line breaks

Use `whitespace-pre-line` when you want line breaks from the source text to render while normal spacing still collapses.

First line
Second line
Third line

```html
<p class="whitespace-pre-line">First line
Second line
Third line</p>
```

### Preserve spaces and wrapping

Use `whitespace-pre-wrap` or `whitespace-break-spaces` when spaces and line breaks are meaningful, such as formatted notes or generated text.

Name: Final CSS
Status: Active project
Mode: Utility and component library

```html
<p class="whitespace-pre-wrap">Name:     Final CSS
Status:   Active project
Mode:     Utility and component library</p>
```

### How to customize?

You can customize whitespace utilities in `scss/utilities/_whitespace.scss`. Add another class when your project needs a CSS `white-space` value that is not already included. After editing, compile the SCSS into the files in `css/`.

```css
/* Add a shorthand alias */
.ws-nowrap {
  white-space: nowrap;
}
```
