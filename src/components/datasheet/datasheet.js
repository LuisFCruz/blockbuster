export class Datasheet extends HTMLElement {
  constructor(movieId) {
    super();
    this.movieId = movieId;
  }

  static get name() {
    return 'b-datasheet';
  }

  async connectedCallback() {
    const originalTitle = this.getAttribute('originalTitle');
    const release = this.getAttribute('release');
    const genre = this.getAttribute('genre');
    const duration = this.getAttribute('duration');
    const recommended = this.getAttribute('recommended');

    const recommendedDescritipion =
      recommended === 'L'
        ? 'Recomendado para todas as idades'
        : `Não recomendado para menores de ${recommended} anos`;

    const template = `
      <section>
        <h3 class="sub-title">Ficha Técnica</h3>
        <b-datasheet-item label="Título Original" description="${originalTitle}" ></b-datasheet-item>
          <b-datasheet-item label="Data de Lançamento" description="${release}" ></b-datasheet-item>
          <b-datasheet-item label="Gênero" description="${genre}" ></b-datasheet-item>
          <b-datasheet-item label="Duração" description="${duration}" ></b-datasheet-item>
          <b-datasheet-item
            label="Recomendação"
            description="${recommendedDescritipion}"
          ></b-datasheet-item>
      </section>
    `;

    this.innerHTML = template;
  }
}

customElements.define(Datasheet.name, Datasheet);
