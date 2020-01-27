export class Header extends HTMLElement {
  constructor(router) {
    super();
    this.router = router;
  }

  static get name() {
    return 'b-header';
  }

  connectedCallback() {
    const template = `
      <header>
        <b-link href="/">
          <h1>
            Block<span>buster</span>
          </h1>
        </b-link>
      </header>
    `;
    this.innerHTML = template;

    const link = this.querySelector('b-link');
    link.router = this.router;
  }
}

customElements.define(Header.name, Header);