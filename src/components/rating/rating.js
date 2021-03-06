class Rating extends HTMLElement {
  constructor() {
    super();
  }

  static get name() {
    return 'b-rating';
  }

  connectedCallback() {
    const value = this.getAttribute('value');
    const rating = parseFloat(value);

    const template = `
      <section>
        <h3 class="sub-title">Nota</h3>
        <div>
          <i class="i-star ${!rating ? 'empty' : ''}"></i>
          <span>${rating ? rating.toLocaleString() : ''}</span>
          <span>${this.ratingToText(rating)}</span>
        </div>
      </section>
    `;

    this.innerHTML = template;
  }

  ratingToText(rating = 0) {
    const values = ['Péssimo', 'Ruim', 'Bom', 'Ótimo', 'Excelente'];
    const index = Math.round(rating / 2) - 1;
    return values[index] || 'Nenhuma avaliação';
  }
}

customElements.define(Rating.name, Rating);
