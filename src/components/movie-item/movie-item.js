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
          <a href="movie/${id}" alt="Acesar ${title}" >${title}</a>
        </h2>
        <span>${year}</span>
        <span>Nota ${rating.toLocaleString()}</span>
      </div>
    `;
    this.innerHTML = template;

    const anchor = this.querySelector('a');
    anchor.addEventListener('click', this.handlerClick.bind(this), false);
  }

  disconnectedCallback() {
    const anchor = this.querySelector('a');
    anchor.removeEventListener('click', this.handlerClick.bind(this), false);
  }

  handlerClick(event) {
    event.preventDefault();
    const anchor = event.target.closest('a');
    this.router.navigateTo(anchor.href);
  }
}

customElements.define(MovieItem.name, MovieItem);
