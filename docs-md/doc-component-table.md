<!-- Generated from docs/doc-component-table.html. Keep this file in sync with the HTML documentation. -->

# Table Component (`.table`)

---

The `.table` class provides a beautifully styled, consistent way to present tabular data. It ensures full width coverage, clear row separation, and various optional modifiers for striped, bordered, and hover effects.

- When to use it: For displaying lists of complex, structured data such as database records, financial summaries, or configuration settings.

- Don't use for: Creating non-tabular grid layouts or complex application dashboard elements (use Grid or Card components instead).

- Dark mode: Automatic

- SCSS file: `/scss/components/_table.scss`

---

## Basic example (Hover and Row Selection)

The default table includes basic row dividers and highlights the table header (``) with a light background. The `.table-hover` class enables a soft highlight on mouse-over, and rows containing a checked checkbox will be automatically highlighted using primary brand colors.

|  | Transaction ID | Status | Amount | Action |
| --- | --- | --- | --- | --- |
|  | 8362-123 | ✓ Completed | $980.00 |  |
|  | 1982-123 | ✓ Completed | $980.00 |  |
|  | 8362-988 | ✕ Cancelled | $1,980.00 |  |

```html
 <div class="table-responsive">
		<table class="table table-hover">
			<thead>
				<tr>
					<th> <input class="form-check-input" type="checkbox" value=""> </th>
					<th>Transaction ID</th>
					<th>Status</th>
					<th class="text-right">Amount</th>
					<th class="text-right">Action</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td> <input class="form-check-input" type="checkbox" value=""> </td>
					<td> 8362-123 </td>
					<td> <b role="status" class="badge badge-green"> ✓ Completed</b> </td>
					<td class="text-right"> $980.00 </td>
					<td class="text-right"> ... </td> <!-- Action button omitted for brevity -->
				</tr>
				<tr>
					<td> <input class="form-check-input" type="checkbox" checked value=""> </td> <!-- This row will be highlighted -->
					<td> 1982-123 </td>
					<td> <b role="status" class="badge badge-green"> ✓ Completed</b> </td>
					<td class="text-right"> $980.00 </td>
					<td class="text-right"> ... </td> <!-- Action button omitted for brevity -->
				</tr>
				<tr>
					<td> <input class="form-check-input" type="checkbox" value=""> </td>
					<td> 8362-988 </td>
					<td> <b role="status" class="badge badge-red"> ✖ Cancelled</b> </td>
					<td class="text-right"> $1,980.00 </td>
					<td class="text-right"> ... </td> <!-- Action button omitted for brevity -->
				</tr>
			</tbody>
		</table>
	</div>
```

---

## More example variants

The table component supports several modifier classes to alter its appearance, including adding borders, applying alternating row colors, and managing responsiveness.

### Striped and Bordered Tables

Use `.table-striped` for visual clarity across many rows. Use `.table-bordered` to add borders around all cells and the entire table structure.

#### Striped Table (`.table-striped`)

| # | Name | Role |
| --- | --- | --- |
| 1 | John Doe | Developer |
| 2 | Jane Smith | Designer |
| 3 | Peter Jones | Manager |

#### Bordered Table (`.table-bordered`)

| # | Product | Price |
| --- | --- | --- |
| 1 | Laptop | $1200 |
| 2 | Mouse | $25 |

```html
 <!-- Striped Table -->
	<table class="table table-striped">
		<thead><tr><th>#</th><th>Name</th><th>Role</th></tr></thead>
		<tbody>
			<tr><td>1</td><td>John Doe</td><td>Developer</td></tr>
			<tr><td>2</td><td>Jane Smith</td><td>Designer</td></tr>
			<tr><td>3</td><td>Peter Jones</td><td>Manager</td></tr>
		</tbody>
	</table>

	<!-- Bordered Table -->
	<table class="table table-bordered">
		<thead><tr><th>#</th><th>Product</th><th>Price</th></tr></thead>
		<tbody>
			<tr><td>1</td><td>Laptop</td><td>$1200</td></tr>
			<tr><td>2</td><td>Mouse</td><td>$25</td></tr>
		</tbody>
	</table>
```

### Responsive Wrapper

To ensure tables are viewable on small screens without breaking the layout, wrap the `` element in a ``. This introduces horizontal scrolling when the table's content exceeds the parent container's width.

| Col 1 | Col 2 | Col 3 | Col 4 | Col 5 | Col 6 | Col 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Data A1 | Data A2 | Data A3 | Data A4 | Data A5 | Data A6 | Data A7 |

```html
 <div class="table-responsive">
		<table class="table">
			<thead>
				<tr>
					<th>Col 1</th><th>Col 2</th><th>Col 3</th><th>Col 4</th><th>Col 5</th><th>Col 6</th><th>Col 7</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Data A1</td><td>Data A2</td><td>Data A3</td><td>Data A4</td><td>Data A5</td><td>Data A6</td><td>Data A7</td>
				</tr>
			</tbody>
		</table>
	</div>
```

---

## How to customize?

	The table appearance is heavily reliant on CSS variables, controlling its colors, borders, and spacing. This makes it highly customizable using inline styles or global variable overrides.

### Customize using inline css and variables

	You can quickly adjust the appearance of the table header, the hover effect, or the border color by overriding the corresponding CSS variables on the <table> element.

| # | Item | Price |
| --- | --- | --- |
| 1 | Custom Header | $50 |
| 2 | Custom Hover | $100 |

```html
 <table class="table table-hover" style="
		--neutral-100: #e0f2f1; /* Light cyan background for hover and header */
		--border-color-default: #00796b; /* Dark cyan border */
		color: #004d40;"> /* Darkest cyan text */
		<thead><tr><th>#</th><th>Item</th><th>Price</th></tr></thead>
		<tbody>
			<tr><td>1</td><td>Custom Header</td><td>$50</td></tr>
			<tr><td>2</td><td>Custom Hover</td><td>$100</td></tr>
		</tbody>
	</table>
```

---

### Advanced customization using SCSS file

	  File to customize: `scss/components/_table.scss`

To fundamentally change the table's structure, cell padding, or how different variants are styled, you will need to modify the `_table.scss` file.

To adjust cell spacing, update the `padding` value within `.table tr > td, .table tr > th`. The current value is set to `0.8rem 0.5rem`.

The default background color for the table header (``) is controlled by `background-color: var(--neutral-100)`. Changing this will update the header shade for all tables.

The striped (`.table-striped`), hover (`.table-hover`), and active selection effects all utilize `var(--neutral-100)` for their background color. If you need a different shade for the hover effect than the striped rows, you must introduce a new variable (e.g., `--table-hover-bg`) and update the corresponding CSS block.

The powerful feature that highlights a row when a checkbox is checked uses the CSS `:has()` pseudo-class: `.table > tbody > tr:has(input[type=checkbox]:checked) > *`. The color is set to `var(--primary-100)`. You can change this to any color or variable to customize the selection highlight.

### Key customization options

- `--border-color-default`: Controls the color of all internal borders (for default and bordered tables).

- `--neutral-100`: Base color used for the table header background, striped row background, and hover background.

- `--primary-100`: Background color applied to table rows that have a checked checkbox for row selection emphasis.

- `padding` on `td` and `th`: Adjusts the internal spacing and height of table cells.

- `min-width` on `td:not(:first-child)`: Ensures content cells are at least `110px` wide, preventing narrow columns.

### How to compile _component.scss file?

- Option A) node and npm tools: Use command-line tools like `node-sass` or `dart-sass` via npm scripts if you are comfortable with the terminal and NodeJS environment.

- Option B) Prepros.io software or Codekit: Utilize visual applications like Prepros.io or Codekit. These tools provide a graphical user interface (UI) for compiling SCSS files automatically upon save, offering an easier workflow for those who prefer visual configuration over the terminal.
