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
        <a href="/">
          <h1>
            Block<span>buster</span>
          </h1>
        </a>
      </header>
    `;
    this.innerHTML = template;

    const anchor = this.querySelector('a');
    anchor.addEventListener('click', this.handlerClick.bind(this), false);
  }

  disconnectedCallback() {
    const anchor = this.querySelector('a');
    anchor.removeEventListener('click', this.handlerClick.bind(this), false);
  }

  handlerClick(event) {
    event.preventDefault();
    const anchor = event.target.closest('a');
    this.router.navigateTo(anchor.href);
  }
}

customElements.define(Header.name, Header);