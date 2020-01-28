class NotFound extends HTMLElement {
  constructor() {
    super();
  }

  static get name() {
    return 'b-not-found';
  }

  connectedCallback() {
    const template = `
        <div>
          <i class="i-sad-face"></i>
        </div>
        <p>Ops! Não encontramos o que você esta procurando.</p>
    `;

    this.innerHTML = template;
  }

}

customElements.define(NotFound.name, NotFound);
