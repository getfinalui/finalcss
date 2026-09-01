<!-- Generated from docs/doc-base-theme.html. Keep this file in sync with the HTML documentation. -->

# Colors & Theme

---

Finalcss includes a vast, beautiful color palette, carefully crafted and tested for dark mode and accessibility. You are free to add or remove colors from the list by editing 📂 scss/_theme.scss file

---

## Color modes

Default (light) mode is default color of theme because it is assigned to :root element as css variable list

You can also use following classes/attributes for part of page to keep it as light/default mode.

`data-theme="light"` attribute,

`theme-light` class name

Dark mode is activated when there is `[data-theme=dark]` attribute or `.theme-dark` class names. For ex. `class="theme-dark"` will override all colors inside the element to make dark.

Dark/Light toggle button adds or removes classname or attribute into html element

---

## Neutral (monochrome) colors:

Default (light) mode:

        #ffffff
  --neutral-0

        #f8fafc
 --neutral-50

        #f1f5f9
 --neutral-100

        #e2e8f0
  --neutral-200

        #cbd5e1
  --neutral-300

        #A3B0C2
  --neutral-400

        #6B7C94
  --neutral-500

        #52637A
  --neutral-600

        #334155
  --neutral-700

        #1e293b
  --neutral-800

        #0f172a
  --neutral-900

        #000000
  --neutral-1000

Dark mode (override):

        #000000
  --neutral-0

        #101010
 --neutral-50

        #171717
 --neutral-100

        #242424
  --neutral-200

        #373737
  --neutral-300

        #555555
  --neutral-400

        #737373
  --neutral-500

        #9c9c9c
  --neutral-600

        #c5c5c5
  --neutral-700

        #dddddd
  --neutral-800

        #eeeeee
  --neutral-900

        #ffffff
  --neutral-1000

---

#### Example component

Here is a component example. On the left side it is in default mode.
On the right there is `class="... theme-dark"` class name given to parent div

      Edit

### Alexandra Heilium

         Digital Designer UX/UI

          259
          Posts

          129K
          Followers

          34
          Following

         Follow
         Message

      Edit

### Alexandra Heilium

         Digital Designer UX/UI

          259
          Posts

          129K
          Followers

          34
          Following

         Follow
         Message

---

## Color palette:

Each of following color has its dark variant.
Color will be changed to dark variant when parent tag has class name `theme-dark` or attribute `data-theme="dark"`

     primary-100
     primary-200
     primary-300
     primary-400
     primary-500
     primary-600
     primary-700
     primary-800
     primary-900

     blue-100
     blue-200
     blue-300
     blue-400
     blue-500
     blue-600
     blue-700
     blue-800
     blue-900

     red-100
     red-200
     red-300
     red-400
     red-500
     red-600
     red-700
     red-800
     red-900

     green-100
     green-200
     green-300
     green-400
     green-500
     green-600
     green-700
     green-800
     green-900

     orange-100
     orange-200
     orange-300
     orange-400
     orange-500
     orange-600
     orange-700
     orange-800
     orange-900

     yellow-100
     yellow-200
     yellow-300
     yellow-400
     yellow-500
     yellow-600
     yellow-700
     yellow-800
     yellow-900

     purple-100
     purple-200
     purple-300
     purple-400
     purple-500
     purple-600
     purple-700
     purple-800
     purple-900

     teal-100
     teal-200
     teal-300
     teal-400
     teal-500
     teal-600
     teal-700
     teal-800
     teal-900

---

## Static colors:

If you don't want colors to be changed on dark theme, then use static color variables of css. just use `-static` keyword after color name.
For ex: `--primary-300-static` is always remain `#a5b4fc` on any theme. `--neutral-0-static` always white color and it will not affected by changing theme. Because there is no override on theme-dark { ... } color list

---

If you designed a component using utility classes like bg-neutral-100, border and text-secondary class names, all of them will be changed if parent tag has `theme-dark` class name. But if you don't want them to be changed, then add `theme-static` class name to parent element.

---

## How does color system work?

All colors are defined inside the 📂 scss/_theme.scss file.
There are two groups: Default (light) theme colors and Dark theme colors which overrides default/light mode.

The list of colors inside the 📂scss/_theme.scss file is converted into CSS variables. You can find it at the top of final.css or final.min.css

### Generated list of CSS variables

All component and utility classes use colors from css variables list

```scss
:root, [data-theme=light], .theme-light, [data-theme=static], .theme-static {
  --neutral-0: #fff;
  --neutral-50: #f8fafc;
  --neutral-100: #f1f5f9;
  --neutral-200: #e2e8f0;
  --neutral-300: #cbd5e1;
  --neutral-400: #A3B0C2;
  --neutral-500: #6B7C94;
  --neutral-600: #52637A;
  --neutral-700: #334155;
  --neutral-800: #1e293b;
  --neutral-900: #0f172a;
  --neutral-1000: #000;
  --primary-100: #e0e7ff;
  --primary-200: #c7d2fe;
  --primary-300: #a5b4fc;
  --primary-400: #818cf8;
  --primary-500: #6163fe;
  --primary-600: #4f46e5;
  --primary-700: #4338ca;
  --primary-800: #3730a3;
  --primary-900: #312e81;
  --blue-100: #dbeafe;
  --blue-200: #bfdbfe;
  --blue-300: #93c5fd;
  --blue-400: #60a5fa;
  --blue-500: #3780f6;
  --blue-600: #2563eb;
  --blue-700: #1d4ed8;
  --blue-800: #1e40af;
  --blue-900: #112a6e;
  --red-100: #fee2e2;
  --red-200: #fecaca;
  --red-300: #fca5a5;
  --red-400: #f87171;
  --red-500: #ef3232;
  --red-600: #d11616;
  --red-700: #b91c1c;
  --red-800: #991b1b;
  --red-900: #671010;
  --green-100: #DBFFE1;
  --green-200: #bbf7d0;
  --green-300: #86efac;
  --green-400: #4ade80;
  --green-500: #0dab47;
  --green-600: #0d923e;
  --green-700: #15803d;
  --green-800: #166534;
  --green-900: #0a4321;
  --orange-100: #ffedd5;
  --orange-200: #fed7aa;
  --orange-300: #fdba74;
  --orange-400: #fb923c;
  --orange-500: #f97316;
  --orange-600: #d14f09;
  --orange-700: #b13606;
  --orange-800: #87290a;
  --orange-900: #5e1a04;
  --yellow-100: #fff6a5;
  --yellow-200: #ffed4a;
  --yellow-300: #ffe11e;
  --yellow-400: #fed507;
  --yellow-500: #E5B800;
  --yellow-600: #D6A400;
  --yellow-700: #B88700;
  --yellow-800: #996B00;
  --yellow-900: #855800;
  --purple-100: #f3e8ff;
  --purple-200: #e9d5ff;
  --purple-300: #d8b4fe;
  --purple-400: #c084fc;
  --purple-500: #a855f7;
  --purple-600: #9333ea;
  --purple-700: #7e22ce;
  --purple-800: #6b21a8;
  --purple-900: #3f0b68;
  --teal-100: #ccfbf1;
  --teal-200: #99f6e4;
  --teal-300: #5eead4;
  --teal-400: #2dd4bf;
  --teal-500: #14b8a6;
  --teal-600: #0d9488;
  --teal-700: #0f766e;
  --teal-800: #115e59;
  --teal-900: #0c4844;

  --neutral-0-static: #fff;
  --neutral-50-static: #f8fafc;
  --neutral-100-static: #f1f5f9;
  --neutral-200-static: #e2e8f0;
  --neutral-300-static: #cbd5e1;
  --neutral-400-static: #A3B0C2;
  --neutral-500-static: #6B7C94;
  --neutral-600-static: #52637A;
  --neutral-700-static: #334155;
  --neutral-800-static: #1e293b;
  --neutral-900-static: #0f172a;
  --neutral-1000-static: #000;
  --primary-100-static: #e0e7ff;
  --primary-200-static: #c7d2fe;
  --primary-300-static: #a5b4fc;
  --primary-400-static: #818cf8;
  --primary-500-static: #6163fe;
  --primary-600-static: #4f46e5;
  --primary-700-static: #4338ca;
  --primary-800-static: #3730a3;
  --primary-900-static: #312e81;
  --blue-100-static: #dbeafe;
  --blue-200-static: #bfdbfe;
  --blue-300-static: #93c5fd;
  --blue-400-static: #60a5fa;
  --blue-500-static: #3780f6;
  --blue-600-static: #2563eb;
  --blue-700-static: #1d4ed8;
  --blue-800-static: #1e40af;
  --blue-900-static: #112a6e;
  --red-100-static: #fee2e2;
  --red-200-static: #fecaca;
  --red-300-static: #fca5a5;
  --red-400-static: #f87171;
  --red-500-static: #ef3232;
  --red-600-static: #d11616;
  --red-700-static: #b91c1c;
  --red-800-static: #991b1b;
  --red-900-static: #671010;
  --green-100-static: #DBFFE1;
  --green-200-static: #bbf7d0;
  --green-300-static: #86efac;
  --green-400-static: #4ade80;
  --green-500-static: #0dab47;
  --green-600-static: #0d923e;
  --green-700-static: #15803d;
  --green-800-static: #166534;
  --green-900-static: #0a4321;
  --orange-100-static: #ffedd5;
  --orange-200-static: #fed7aa;
  --orange-300-static: #fdba74;
  --orange-400-static: #fb923c;
  --orange-500-static: #f97316;
  --orange-600-static: #d14f09;
  --orange-700-static: #b13606;
  --orange-800-static: #87290a;
  --orange-900-static: #5e1a04;
  --yellow-100-static: #fff6a5;
  --yellow-200-static: #ffed4a;
  --yellow-300-static: #ffe11e;
  --yellow-400-static: #fed507;
  --yellow-500-static: #E5B800;
  --yellow-600-static: #D6A400;
  --yellow-700-static: #B88700;
  --yellow-800-static: #996B00;
  --yellow-900-static: #855800;
  --purple-100-static: #f3e8ff;
  --purple-200-static: #e9d5ff;
  --purple-300-static: #d8b4fe;
  --purple-400-static: #c084fc;
  --purple-500-static: #a855f7;
  --purple-600-static: #9333ea;
  --purple-700-static: #7e22ce;
  --purple-800-static: #6b21a8;
  --purple-900-static: #3f0b68;
  --teal-100-static: #ccfbf1;
  --teal-200-static: #99f6e4;
  --teal-300-static: #5eead4;
  --teal-400-static: #2dd4bf;
  --teal-500-static: #14b8a6;
  --teal-600-static: #0d9488;
  --teal-700-static: #0f766e;
  --teal-800-static: #115e59;
  --teal-900-static: #0c4844;

  --text-color-neutral: var(--neutral-600);
  --text-color-primary: var(--primary-600);
  --text-color-blue: var(--blue-600);
  --text-color-red: var(--red-600);
  --text-color-green: var(--green-600);
  --text-color-orange: var(--orange-600);
  --text-color-yellow: var(--yellow-600);
  --text-color-purple: var(--purple-600);
  --text-color-teal: var(--teal-600);

  --text-color-base: #000;
  --text-color-secondary: var(--neutral-500);
  --text-color-muted: var(--neutral-400);
  --text-color-invert: #fff;

  --alpha-1: rgba(0,20,60,.06);
  --alpha-2: rgba(0,20,60,.10);
  --alpha-3: rgba(0,20,60,.15);

  --bg-color-base: #fff;
  --bg-color-secondary: var(--neutral-100);
  --bg-color-lower: var(--neutral-100);
  --bg-color-raised: #fff;
  --border-color-default: var(--neutral-200);

  color: var(--text-color-base);
  background-color: var(--bg-color-base);
}
```

---

Dark mode color variables

```scss
[data-theme=dark], .theme-dark {
  --neutral-0: #000;
  --neutral-50: #101010;
  --neutral-100: #171717;
  --neutral-200: #242424;
  --neutral-300: #373737;
  --neutral-400: #555555;
  --neutral-500: #737373;
  --neutral-600: #9c9c9c;
  --neutral-700: #c5c5c5;
  --neutral-800: #dddddd;
  --neutral-900: #eeeeee;
  --neutral-1000: #fff;
  --primary-100: #1e1b4b;
  --primary-200: #312e81;
  --primary-300: #3730a3;
  --primary-400: #4338ca;
  --primary-500: #4f46e5;
  --primary-600: #7487ff;
  --primary-700: #8a9ffc;
  --primary-800: #c7d2fe;
  --primary-900: #e0e7ff;
  --blue-100: #091253;
  --blue-200: #0C186E;
  --blue-300: #1e3a8a;
  --blue-400: #006BD6;
  --blue-500: #3c99f6;
  --blue-600: #61bafa;
  --blue-700: #91d9fd;
  --blue-800: #bee9fe;
  --blue-900: #dcf3fe;
  --red-100: #40071A;
  --red-200: #57051F;
  --red-300: #820627;
  --red-400: #CB0B38;
  --red-500: #DF0C3D;
  --red-600: #F21246;
  --red-700: #FF6680;
  --red-800: #fecaca;
  --red-900: #fee2e2;
  --green-100: #052E0D;
  --green-200: #033A0E;
  --green-300: #025D14;
  --green-400: #009419;
  --green-500: #00A81C;
  --green-600: #00BD1F;
  --green-700: #6DF383;
  --green-800: #bbf7d0;
  --green-900: #dcfce7;
  --orange-100: #401A07;
  --orange-200: #4E2004;
  --orange-300: #662D00;
  --orange-400: #CC6900;
  --orange-500: #E07B00;
  --orange-600: #F58700;
  --orange-700: #FFBB33;
  --orange-800: #fed7aa;
  --orange-900: #ffedd5;
  --yellow-100: #573C05;
  --yellow-200: #795706;
  --yellow-300: #916D08;
  --yellow-400: #B38A05;
  --yellow-500: #CCA300;
  --yellow-600: #DFBC0C;
  --yellow-700: #F5CC00;
  --yellow-800: #FFDD00;
  --yellow-900: #FFED4D;
  --purple-100: #320849;
  --purple-200: #46066B;
  --purple-300: #5A038C;
  --purple-400: #910BE9;
  --purple-500: #9F1FF4;
  --purple-600: #AC3DF5;
  --purple-700: #D799FF;
  --purple-800: #e9d5ff;
  --purple-900: #f3e8ff;
  --teal-100: #052E2B;
  --teal-200: #07403C;
  --teal-300: #0C565A;
  --teal-400: #006e6e;
  --teal-500: #009a9a;
  --teal-600: #15bcbc;
  --teal-700: #66DBD1;
  --teal-800: #99f6e4;
  --teal-900: #ccfbf1;

  --text-color-neutral: var(--neutral-700);
  --text-color-primary: var(--primary-700);
  --text-color-blue: var(--blue-700);
  --text-color-red: var(--red-700);
  --text-color-green: var(--green-700);
  --text-color-orange: var(--orange-700);
  --text-color-yellow: var(--yellow-700);
  --text-color-purple: var(--purple-700);
  --text-color-teal: var(--teal-700);

  --text-color-base: #fff;
  --text-color-secondary: var(--neutral-600);
  --text-color-muted: var(--neutral-400);
  --text-color-invert:#000;

  --alpha-1: rgba(255,255,255,.1);
  --alpha-2: rgba(255,255,255,.15);
  --alpha-3: rgba(255,255,255,.2);

  --bg-color-base: var(--neutral-50);
  --bg-color-secondary: var(--neutral-100);
  --bg-color-lower: #000;
  --bg-color-raised: var(--neutral-200);
  --border-color-default: var(--neutral-200);

  color: var(--text-color-base);
  background-color: var(--bg-color-base);

}
```

---

You may have noticed, there are some other css color variables like `--alpha-1`. That is just transparent variants of dark or light, which can be used for components.

There are also additional variables like `--text-color-primary` or `--bg-color-base`. Those are helper variables using theme color. The reason to use them, When you use any color for text in default/light mode, they may look fine. But on dark mode text might not be visible well. Because text should be more lighter on dark mode. That's why it is recommended to use color for text specifically made for text colors
