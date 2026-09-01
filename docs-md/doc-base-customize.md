<!-- Generated from docs/doc-base-customize.html. Keep this file in sync with the HTML documentation. -->

# Customization

---

You can use any SASS / SCSS compiler you like. If you don't like terminal or node/npm stuff, then try simpler GUI apps for Mac or Windows.
For ex. [Prepros.io](https://prepros.io/) or [Codekit app](https://codekitapp.com/)

### Customizing colors

We do NOT suggest to override CSS styles. It will make your code mess. So, it is better to do customization by changing SCSS files according to you needs.
To customize colors / theme go to 📂 scss/ folder. Open `_theme.scss` file. You will find all list of colors. We have two group of colors library:
1. Default (light) mode colors.
2. Dark mode colors.

In _theme.scss file you will find `$colors_list: ( ... )`, and `$colors_list_darkmode: ( ... )`
Each contains colors with different shades.

You may want to change primary colors of UI. Primary colors are used for Buttons, Checkboxes and other Active elements.
You can just change Primary colors by editing the list inside `_themes.scss`

---

/scss/_theme.scss (default / light mode)

```scss
$colors_list: (

	"neutral": (
    "0": #fff,
    "50": #f8fafc,
    "100": #f1f5f9,
    "200": #e2e8f0,
    "300": #cbd5e1,
    "400": #A3B0C2,
    "500": #6B7C94,
    "600": #52637A,
    "700": #334155,
    "800": #1e293b,
    "900": #0f172a,
    "1000": #000
  ),

  "primary": (
    "100": #e0e7ff,
    "200": #c7d2fe,
    "300": #a5b4fc,
    "400": #818cf8,
    "500": #6163fe,
    "600": #4f46e5,
    "700": #4338ca,
    "800": #3730a3,
    "900": #312e81
  ),
	....
);
```

/scss/_theme.scss (dark mode)

```scss
$colors_list_darkmode: (

	"neutral": (
    "0": #000,
    "50": #101010,
    "100": #171717,
    "200": #242424,
    "300": #373737,
    "400": #555555,
    "500": #737373,
    "600": #9c9c9c,
    "700": #c5c5c5,
    "800": #dddddd,
    "900": #eeeeee,
    "1000": #fff
  ),

	"primary": (
    "100": #1e1b4b,
    "200": #312e81,
    "300": #3730a3,
    "400": #4338ca,
    "500": #4f46e5,
    "600": #7487ff,
    "700": #8a9ffc,
    "800": #c7d2fe,
    "900": #e0e7ff
  ),
	...
);
```

There are also other list of colors like red, green, orange, blue, ...

You can change any color you like and then compile SCSS into CSS

Afer compiling into CSS, all colors will be converted into CSS variables like `--primary-100; --primary-200; ...`

---

### Customizing fonts

Base (root) font size is 15px by default. To change global font sizes or font family, open `scss/_base-settings.scss`

It is also possible to edit utility classes from `scss/utilities/`, There are some scss files which generates classes to manipulate text colors or sizes or styles. See `_text-color.scss`, `_text-size.scss` or `_text-style.scss`

---

### Customizing components

- Go to scss/components directory

- Choose any component (for ex: _button.scss ) and open via code editor

- Edit css variables inside .btn{ .. } or make any changes

- Compile your scss into css (Using npm or other GUI tools like prepros.io)

---

Feel free to change any property like border-radius, size or any other style of component in `scss/components`.

NOTE: There is also global settings `scss/_base-settings.scss` where you can change breakpoints, border-radius, base font size, ...
