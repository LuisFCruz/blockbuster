class Header extends HTMLElement {
  constructor() {
    super();
  }

  static get name() {
    return 'b-header';
  }

  connectedCallback() {
    const template = `
      <header>
        <a href="">
          <h1>
            Block<span>buster</span>
          </h1>
        </a>
      </header>
    `;
    this.innerHTML = template;
  }
}

customElements.define(Header.name, Header);