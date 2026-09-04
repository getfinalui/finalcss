<!-- Generated from docs/index.html. Keep this file in sync with the HTML documentation. -->

# Getting started

---

Finalcss is a powerful and simple frontend toolkit. Build anything—from prototype to production—in minutes.

- Carefully curated UI design - colors and typography

- Light / Dark mode, without writing extra code

- Tailwind like utility classes, Bootstrap like components

- You're NOT locked into framework

- No JS, No complex setup

- Extend by adding your utility classes and components

---

### Using via CDN

	 https://cdn.jsdelivr.net/gh/getfinalui/finalcss@main/css/final.min.css

Create a new index.html file in your project root. To include final.css, place the `<link>` tag in the `<head>` for our CSS.

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Final CSS demo</title>
		<link href="https://cdn.jsdelivr.net/gh/getfinalui/finalcss@main/css/final.min.css" rel="stylesheet" async='true' crossorigin='anonymous'>
	</head>
	<body>
		<h1>Hello, world!</h1>
		<p>This is my project content</p>
	</body>
</html>
```

---

### Using final-lite.css

If your project only needs desktop and mobile responsive behavior, you can use `final-lite.css` or `final-lite.min.css`. It includes the same core Final CSS components and utilities, but generates only two responsive breakpoint prefixes.

| Prefix | Media query | Use case |
| --- | --- | --- |
| `max-sm:` | `max-width: 640px` | Mobile-only overrides |
| `sm:` | `min-width: 641px` | Small tablet, desktop, and larger screens |

This is useful for simpler websites and apps where you do not need separate tablet, laptop, and desktop breakpoints. The full `final.css` build still supports all breakpoints from `scss/_breakpoint-config.scss`.

```html
<link href="css/final-lite.min.css" rel="stylesheet">

<div class="d-grid grid-cols-2 max-sm:grid-cols-1 gap-4">
  <div class="p-4 rounded bg-blue-100">Desktop: two columns</div>
  <div class="p-4 rounded bg-green-100">Mobile: one column</div>
</div>
```

```html
<!-- Stack on mobile, align in a row from 641px and wider -->
<div class="d-flex flex-col sm:flex-row gap-3">
  <button type="button" class="btn btn-primary">Primary action</button>
  <button type="button" class="btn btn-default">Secondary action</button>
</div>
```

### Download locally

You can [Download](https://github.com/getfinalui/finalcss) from Github or click "Download" button at the top-right of this page. If you have downloaded finalcss, then here is overview. We also included many example html templates built with Finalcss library.

	📂 your-project
	│
	├── 📂 scss/
	│   │
	│   ├── 📂 components/
	│   ├── 📂 utilities/
	│   ├── 📂 layout/
	│   │
	│   ├── 📄 _base-settings.scss
	│   ├── 📄 _reset.scss
	│   ├── 📄 _grid-system.scss
	│   ├── 📄 _theme.scss
	│   ├── 📄 _variables-root.scss
	│   │
	│   └── 📄 final.scss
	│
	├── 📂 css/
	│   └── final.css
	└
	📄  starter-admin.html
	📄  starter-blog.html
	📄  starter-table.html
	📄  starter-landing.html
	📄  starter-login.html
