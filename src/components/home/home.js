import { serviceMovies } from '../../services/movies';
import { MovieItem } from '../movie-item/movie-item';

export class Home extends HTMLElement {
  constructor(router) {
    super();
    this.router = router;
  }

  static get name() {
    return 'b-home';
  }

  async connectedCallback() {
    const movies = await serviceMovies.getMovies();

    if (movies) {
      movies.forEach(movie =>
        this.appendChild(new MovieItem(this.router, movie))
      );
    } else {
      this.innerHTML = '<b-not-found></b-not-found>';
    }
  }
}

customElements.define(Home.name, Home);
