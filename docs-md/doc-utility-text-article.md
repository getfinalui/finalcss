<!-- Generated from docs/doc-utility-text-article.html, completed from scss/utilities/_text-article.scss for AI context. -->

# Article Text Wrapper

The `.article-wrap` utility styles long-form content with readable line height and predictable spacing between paragraphs and headings. It is useful for documentation pages, blog articles, rich text output, legal text, and prose-heavy content blocks.

- When to use it: Use `.article-wrap` around content that contains multiple paragraphs and headings.
- Don't use for: Dense app UI, cards with compact controls, nav menus, tables, or layouts where every spacing rule should be controlled manually.
- Dark mode: Automatic, because it only changes spacing and line height.
- SCSS file: `scss/utilities/_text-article.scss`
- Responsive: No generated responsive variants.

---

## Class Reference

| Class | Styles / behavior |
| --- | --- |
| `article-wrap` | Sets `line-height: 1.6` for readable long-form text. |
| `article-wrap > p` | Adds `margin-bottom: 1rem` to direct child paragraphs. |
| `article-wrap > p:not(:first-child)` | Adds `margin-top: 1rem` to paragraphs after the first paragraph. |
| `article-wrap > h1` to `article-wrap > h6` | Adds `margin-bottom: 1rem` to direct child headings. |
| `article-wrap p ~ h1` to `article-wrap p ~ h6` | Adds `margin-top: 2rem` when a heading follows paragraph content. |

---

## Basic Example

```html
<article class="article-wrap">
  <h2>Documentation title</h2>
  <p>Use this wrapper for long-form content with multiple paragraphs.</p>
  <p>Paragraph spacing is handled automatically.</p>
  <h3>Next section</h3>
  <p>Headings after paragraphs get extra top spacing.</p>
</article>
```

---

## Common Documentation Layout

```html
<article class="article-wrap mb-16">
  <h1>Component name</h1>
  <p>Explain what the component does and when to use it.</p>

  <h4>Basic example</h4>
  <p>Describe the main class names and behavior.</p>

  <h4>How to customize?</h4>
  <p>Edit the related SCSS file and compile it into CSS.</p>
</article>
```

---

## Customization

Customize prose spacing in `scss/utilities/_text-article.scss`, then compile SCSS to CSS.

```css
.article-wrap {
  line-height: 1.6;
}

.article-wrap > p {
  margin-bottom: 1rem;
}

.article-wrap p ~ h1,
.article-wrap p ~ h2,
.article-wrap p ~ h3,
.article-wrap p ~ h4,
.article-wrap p ~ h5,
.article-wrap p ~ h6 {
  margin-top: 2rem;
}
```
