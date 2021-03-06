import constants from '../../constants';

class Image extends HTMLElement {
  constructor() {
    super();
  }

  static get name() {
    return 'b-image';
  }

  connectedCallback() {
    const image = this.getAttribute('src');
    const title = this.getAttribute('title');

    const template = `
      <figure>
        <img src="${constants.baseUrl}/images/${image}" alt=${title} />
      </figure>
    `;
    this.innerHTML = template;
  }
}

customElements.define(Image.name, Image);
