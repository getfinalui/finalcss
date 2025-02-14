

class HeaderComponent extends HTMLElement {
  constructor() {
    super(); // Always call super in the constructor.
  }

  // Use connectedCallback to modify the DOM when the component is added to the document
  connectedCallback() {
    const template = document.createElement('template');
    template.innerHTML = `

<dialog id="mobile_menu" class="md:d-none" style="margin-top:12px">
    <button type="button" class="btn btn-icon absolute top-0 right-0 m-2 float-right" onclick="document.getElementById('mobile_menu').close()">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
				<path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
			</svg> 
		</button>
		<h5>FinalCSS</h5>
    <hr>
		<nav class="nav nav-col" style="margin:0 -8px;">
			<a href="index.html" class="nav-link"> Home </a>
			<a href="docs.html" class="nav-link"> Documentation </a>
      <a href="templates.html" class="nav-link"> Templates </a>
			<a href="https://finalui.medium.com" target="_blank"  class="nav-link">Blog &nearr;  </a>
			<a href="https://finalui.com" target="_blank" class="nav-link">Figma UI Kit &nearr;  </a>  
			<a href="https://github.com/getfinalui/finalcss"  target="_blank" class="nav-link">Github &nearr; </a>
		</nav>
</dialog>
	
<header class="bg-neutral-0 py-2 border-bottom sticky top-0 z-10">
	<div class="container">
		<div class="d-flex flex-column md:flex-row align-items-center">
			<div>
				<a href="https://finalcss.com" class="hover:opacity-80 d-flex text-decoration-none align-items-center m-0">
				<img src="logo.png" alt="Finalcss logo" height="40">
				  <div style="font-size:24px;" class="text-neutral-1000 lh-1 fw-medium ml-1">final<span class="text-secondary">css</span> </div>
			  </a>
			</div>
			<div class="ml-auto d-flex align-items-center">
				<nav class="nav d-none md:d-flex align-items-center">
					<a href="index.html" class="nav-link">Home</a>
					<a href="docs.html" class="nav-link"> Documentation </a>
          <a href="templates.html" class="nav-link"> Templates </a>
					<a href="https://finalui.medium.com" target="_blank"  class="nav-link">Blog &nearr; </a>
					<a href="https://finalui.com" target="_blank" class="nav-link">Figma UI Kit &nearr; </a>  
					<a href="https://github.com/getfinalui/finalcss"  target="_blank" class="nav-link">Github &nearr; </a>
					<a href="https://github.com/getfinalui/finalcss/archive/refs/heads/main.zip" class="btn btn-default">Download</a>
				</nav>
				<button onclick="themeSwitcher()" class="ml-1 btn btn-neutral btn-icon">
					<span class="d-none dark:d-block">
						<svg xmlns="http://www.w3.org/2000/svg" class="align-middle" fill="none" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
						</svg>
					</span>
					<span class="dark:d-none">
						<svg xmlns="http://www.w3.org/2000/svg" class="align-middle" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
						</svg>
					</span>
				</button>
				<button class="md:d-none ml-2 btn-icon btn btn-default" onclick="window.mobile_menu.showModal()">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
						<path d="M4 5L20 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M4 12L20 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M4 19L20 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</button>
			</div>
		</div>
	</div>
</header>   

    `;

    // Append the template content to the Light DOM
    this.appendChild(template.content.cloneNode(true));
  }
}

// Define the header component
customElements.define('header-component', HeaderComponent);




class SidebarComponent extends HTMLElement {
  constructor() {
    super(); // Always call super in the constructor.
  }

  // Use connectedCallback to modify the DOM when the component is added to the document
  connectedCallback() {
    const template = document.createElement('template');
    template.innerHTML = `

        <nav class="md:border-right pt-4 pb-4 pr-2 sticky h-full scrollbar-thin overflow-y-scroll" style="max-height:calc(100vh - 57px); top:57px">
          <ul id="doc_sidebar" class="nav nav-col nav-compact">
            <li><a class="nav-link" href="docs.html">Getting started</a></li>
            <li><a class="nav-link" href="docs-customize.html">Customization</a></li>
            <li><a class="nav-link" href="docs-theme.html">Theme & colors</a></li>
            <li><a class="nav-link" href="docs-grid.html">Grid system</a></li>
            <li><a class="nav-link" href="docs-howto.html">How to (tutorials) </a></li>
            <li class="px-2">
              <hr>
              <h6 class="mb-2"> Components </h6>
            </li>
            <li><a class="nav-link" href="docs-component-alert.html">Alert</a></li>
            <li><a class="nav-link" href="docs-component-avatar.html">Avatar</a></li>
            <li><a class="nav-link" href="docs-component-badge.html">Badge</a></li>
            <li><a class="nav-link" href="docs-component-button.html">Button</a></li>
            <li><a class="nav-link" href="docs-component-card.html">Card</a></li>
            <li><a class="nav-link" href="docs-component-dialog.html">Dialog</a></li>
            <li><a class="nav-link" href="docs-component-dropdown.html">Dropdown</a></li>
            <li><a class="nav-link" href="docs-component-forms.html">Form elements</a></li>
            <li><a class="nav-link" href="docs-component-nav.html">Nav menu</a></li>
            <li><a class="nav-link" href="docs-component-segment.html">Segmented control</a></li>
            <li><a class="nav-link" href="docs-component-table.html">Table</a></li>
            <li><a class="nav-link" href="docs-component-tabs.html">Tabs</a></li>
            <li><a class="nav-link" href="docs-component-tag.html">Tag / chips</a></li>
            <li class="px-2">
              <hr>
              <h6 class="mb-2"> Utiltiy classes </h6>
            </li>
            <li><a class="nav-link" href="docs-display-layout.html"> Display (block, flex) </a></li>
            <li><a class="nav-link" href="docs-size.html"> Size (width, height) </a></li>
            <li><a class="nav-link" href="docs-margin.html">Margin</a></li>
            <li><a class="nav-link" href="docs-padding.html"> Padding </a></li>
            <li><a class="nav-link" href="docs-float.html"> Float </a></li>
            <li><a class="nav-link" href="docs-gap.html">Gap</a></li>
            <li><a class="nav-link" href="docs-positions.html"> Positions </a></li>
            <li><a class="nav-link" href="docs-columns.html">Columns</a></li>
            <li><a class="nav-link" href="docs-overflow.html"> Overflow </a></li>
            <li> <hr class="my-1"> </li>
            <li><a class="nav-link" href="docs-text-color.html"> Text color </a></li>
            <li><a class="nav-link" href="docs-text-size.html"> Text size </a></li>
            <li><a class="nav-link" href="docs-text-style.html"> Text style </a></li>
            <li> <hr class="my-1"> </li>
            <li><a class="nav-link" href="docs-bacckground.html">Background</a></li>
            <li><a class="nav-link" href="docs-border-color.html">Border color</a></li>
            <li><a class="nav-link" href="docs-border-radius.html">Border radius</a></li>
            <li><a class="nav-link" href="docs-shadow.html"> Shadow </a></li>
            <li><a class="nav-link" href="docs-opacity.html">Opacity</a></li>
            <li><a class="nav-link" href="docs-gradient.html">Gradient</a></li>
            <li><a class="nav-link" href="docs-object-fit.html">Object fit</a></li>
            <li> <hr class="my-1"> </li>
            <li><a class="nav-link" href="docs-list.html">List</a></li>
            <li><a class="nav-link" href="docs-order.html"> Order </a></li>
            <li><a class="nav-link" href="docs-ratio.html"> Ratio </a></li>
            <li><a class="nav-link" href="docs-scale.html"> Scale </a></li>
            <li><a class="nav-link" href="docs-vertical-align.html"> Vertical align </a></li>
            <li><a class="nav-link" href="docs-visibility.html"> Visibility </a></li>
            <li><a class="nav-link" href="docs-whitespace.html"> White-space </a></li>
            <li><a class="nav-link" href="docs-cursor.html"> Cursor </a></li>
            <li><a class="nav-link" href="docs-z-index.html"> Z-index </a></li>
            <li><hr class="my-1"></li>
            <li><a class="nav-link" href="docs-links.html">Useful resources</a></li>
            <li><br></li>
          </ul>

        </nav>
        
    `;

    // Append the template content to the Light DOM
    this.appendChild(template.content.cloneNode(true));

    //this.highlightActiveLink();
  }
}
// Define the doc sidebar component
customElements.define('sidebar-component', SidebarComponent);

// Add "active" classname into selected menu by matching URL and linkname
document.addEventListener("DOMContentLoaded", function(){
  const currentPage = window.location.pathname.split('/').pop(); // Get the current page (e.g., 'about.html')
  const links = document.querySelectorAll('#doc_sidebar a'); // Select all sidebar links
  console.log(links);

  links.forEach(link => {
    // const listItem = link.parentElement; // Get the <li> containing the <a>
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active'); // Add 'active' class to the matching <li>
    } else {
      link.classList.remove('active'); // Remove 'active' class from other items
    }
  });

});




class BottomComponent extends HTMLElement {
  constructor() {
    super(); // Always call super in the constructor.
  }

  // Use connectedCallback to modify the DOM when the component is added to the document
  connectedCallback() {
    const template = document.createElement('template');
    template.innerHTML = `

<style type="text/css">
  .bg-colorful{
    background-image: linear-gradient(180deg, #ffffff03, var(--bg-color-base) 85%), radial-gradient(ellipse at top left, #0d6efd80, transparent 50%), radial-gradient(ellipse at top right, #ffe48480, transparent 50%), radial-gradient(ellipse at center right, #712cf980, transparent 50%), radial-gradient(ellipse at center left, #d6338480, transparent 50%);
  }
</style>

<section class="py-10 bg-colorful border-top fs-lg">
    <div class="container article text-center" style="max-width: 920px">
      <h2 class="my-4">Your support matters!</h2>
      <p class="mb-5">
        This is new project requires regular updates like adding new utility classes and components. <br> Your support motivates to improve this project continiously. 
      </p> 
      <p class="mb-2">
        <a class="btn border border-dark btn-lg" href="https://buymeacoffee.com/vosidiy" target="_blank">
          <i class="h4 me-2"> &#9749; </i> <span>Buy me a coffee</span>
        </a> 
        <a class="btn btn-lg btn-outline" href="https://paypal.me/vosidiy/20"> 
          Support via Paypal
        </a>
      </p>
      <br><br>
    </div> <!-- container end -->
</section>

<footer class="bg-base border-top py-10">
  <div class="container">
    <section class="d-flex align-items-center flex-col md:flex-row md:justify-content-between">
        <p class="md:mb-0 mb-3 text-center md:text-left"> © 2025 <b>Final CSS.</b> Modern CSS library <br> based on Final UI - Design System  </p>  
        <nav class="nav">
            <a href="docs.html" class="nav-link">Docs</a>
            <a href="https://finalui.com" target="_blank" class="nav-link">Figma UI Kit</a>
            <a href="https://github.com/getfinalui/finalcss"  target="_blank" class="nav-link">Github</a>
        </nav>
      </section>
  </div><!-- //container -->
</footer>

        
    `;

    // Append the template content to the Light DOM
    this.appendChild(template.content.cloneNode(true));
  }
}
// Define the doc sidebar component
customElements.define('bottom-component', BottomComponent);