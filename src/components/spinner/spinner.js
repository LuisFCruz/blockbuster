class Spinner extends HTMLElement {
  constructor() {
    super();
  }

  static get name() {
    return 'b-spinner';
  }

  connectedCallback() {
   
    const template = `
      <div class="spinner-cube">
        <div class="cube1 cube"></div>
        <div class="cube2 cube"></div>
        <div class="cube4 cube"></div>
        <div class="cube3 cube"></div>
      </div>
    `;

    this.innerHTML = template;
  }
}

customElements.define(Spinner.name, Spinner);
