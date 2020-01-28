export class MovieItem extends HTMLElement {
  constructor(movie) {
    super();
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
          <a href="movie/${id}" alt="Acessar ${title}" >${title}</a>
        </h2>
        <span>${year}</span>
        <span>Nota ${rating.toLocaleString()}</span>
      </div>
    `;
    this.innerHTML = template;
  }
}

customElements.define(MovieItem.name, MovieItem);
