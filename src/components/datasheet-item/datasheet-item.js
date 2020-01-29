export class DatasheetItem extends HTMLElement {
  constructor() {
    super();
  }

  static get name() {
    return 'b-datasheet-item';
  }

  async connectedCallback() {
    const label = this.getAttribute('label');
    const description = this.getAttribute('description');

    if (description) {
      const template = `
            <div>
              <span>${label}:</span> ${description}
            </div>
        `;

      this.innerHTML = template;
    }
  }
}

customElements.define(DatasheetItem.name, DatasheetItem);
