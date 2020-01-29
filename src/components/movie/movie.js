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
    this.innerHTML = '<b-spinner></b-spinner>';

    const movie = await serviceMovies.getMovieInfo(this.movieId);

    if (!movie) {
      this.innerHTML = '<b-not-found></b-not-found>';
      return;
    }

    const {
      title,
      originalTitle,
      release,
      image,
      synopsis,
      rating,
      genre = '',
      duration = '',
      recommended = '',
      seasons = '',
      episodes = '',
    } = movie;

    const template = `
      <article>
        <h2>${title}</h2>
        <div>
          <b-image src="${image}" title="Poster ${title}"></b-image>
          <p>${synopsis}</p>
        </div>
        <b-rating value="${rating}"></b-rating>
        <b-datasheet
          originalTitle="${originalTitle}"
          release="${release}"
          genre="${genre}"
          duration="${duration}"
          recommended="${recommended}"
          seasons="${seasons}"
          episodes="${episodes}"
        ></b-datasheet>
      </article>
    `;

    this.innerHTML = template;
  }
}

customElements.define(Movie.name, Movie);
