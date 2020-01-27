export class MovieItem extends HTMLElement {
  constructor(router, movie) {
    super();
    this.router = router;
    this.movie = movie;
  }

  static get name() {
    return 'b-movie-item';
  }

  connectedCallback() {
    const { title, image, release, rating, id } = this.movie;
    const [, year] = release.match(/(\d{4})$/);

    const template = `
      <b-image src="${image}" title="Poster ${title}"></b-image>
      <div>
        <h2>
          <b-link href="/movie/${id}" alt="Acessar ${title}" >${title}</b-link>
        </h2>
        <span>${year}</span>
        <span>Nota ${rating.toLocaleString()}</span>
      </div>
    `;
    this.innerHTML = template;

    const link = this.querySelector('b-link');
    link.router = this.router;
  }
}

customElements.define(MovieItem.name, MovieItem);
