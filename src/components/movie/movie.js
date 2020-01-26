import { serviceMovies } from '../../services/movies';

export class Movie extends HTMLElement {
  constructor(movieId) {
    super();
    this.movieId = movieId;
  }

  static get name() {
    return 'b-movie';
  }

  async connectedCallback() {
    const {
      title,
      originalTitle,
      release,
      genre,
      duration,
      recommended,
      image,
      synopsis,
    } = await serviceMovies.getMovieInfo(this.movieId);

    const template = `
      <article>
        <h2>${title}</h2>
        <div>
          <b-image src="${image}" title="Poster ${title}"></b-image>
          <p>${synopsis}</p>
        </div>
        <b-datasheet
          originalTitle="${originalTitle}"
          release="${release}"
          genre="${genre}"
          duration="${duration}"
          recommended="${recommended}"
        ></b-datasheet>
      </article>
    `;

    this.innerHTML = template;
  }
}

customElements.define(Movie.name, Movie);
