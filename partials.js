class SidebarComponent extends HTMLElement {
  constructor() {
    super(); // Always call super in the constructor.
  }

  // Use connectedCallback to modify the DOM when the component is added to the document
  connectedCallback() {
    const template = document.createElement('template');
    template.innerHTML = `

        <nav class="border-r pr-5">
          <ul class="nav nav-vertical">
            <li><a class="nav-link active" href="index.html">Home</a></li>
            <li><a class="nav-link" href="about.html">About</a></li>
            <li><a class="nav-link" href="services.html">Services</a></li>
            <li><a class="nav-link" href="contact.html">Contact</a></li>
          </ul>
          <hr>
          <a href="#" class="btn btn-primary">asdasdasd</a>

        </nav>
        

    `;

    // Append the template content to the Light DOM
    this.appendChild(template.content.cloneNode(true));
  }
}

// Define the custom component
customElements.define('sidebar-component', SidebarComponent);
