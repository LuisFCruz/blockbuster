class Link extends HTMLElement {
  constructor() {
    super();
  }

  static get name() {
    return 'b-link';
  }

  connectedCallback() {
    this.addEventListener('click', this.handlerClick.bind(this), false);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.handlerClick.bind(this), false);
  }

  handlerClick(event) {
    event.preventDefault();
    this.router.navigateTo(this.getAttribute('href'));
  }
}

customElements.define(Link.name, Link);
