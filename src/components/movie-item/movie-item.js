export class MovieItem extends HTMLElement {
  constructor(movie) {
    super();
    this.movie = movie;
  }

  static get name() {
    return 'b-movie-item';
  }

  connectedCallback() {
    const { title, image, release, rating, id, type } = this.movie;
    const year = this._getReaseYear(release, type);
    const template = `
      <b-image src="${image}" title="Poster ${title}"></b-image>
      <div>
        <h2>
          <a href="movie/${id}" alt="Acessar ${title}" >${title}</a>
        </h2>
        <span>${year}</span>
        <span>${rating ? `Nota ${rating.toLocaleString()}` : ''}</span>
      </div>
    `;
    this.innerHTML = template;
  }

  _getReaseYear(release, type) {
    if (type === 'F') {
      const [,year] =  release.match(/(\d{4})$/);
      return year;
    }

    return release;
  }
}

customElements.define(MovieItem.name, MovieItem);
