import React from 'react';
import MoviesCard from '../movies-card/movies-card';

interface MainPageProps {
	promoFilm: {
		title: string;
		genre: string;
		year: number;
	};
}

function MainPage({ promoFilm }: MainPageProps): JSX.Element {
  const { title, genre, year } = promoFilm;
  const movies = [
    { id: '1', imgSrc: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg', title: 'Fantastic Beasts: The Crimes of Grindelwald' },
    { id: '2', imgSrc: 'img/bohemian-rhapsody.jpg', title: 'Bohemian Rhapsody' },
    { id: '3', imgSrc: 'img/macbeth.jpg', title: 'Macbeth' },
    { id: '4', imgSrc: 'img/aviator.jpg', title: 'Aviator' },
    { id: '5', imgSrc: 'img/we-need-to-talk-about-kevin.jpg', title: 'We need to talk about Kevin' },
    { id: '6', imgSrc: 'img/what-we-do-in-the-shadows.jpg', title: 'What We Do in the Shadows' },
    { id: '7', imgSrc: 'img/revenant.jpg', title: 'Revenant' },
    { id: '8', imgSrc: 'img/johnny-english.jpg', title: 'Johnny English' },
    { id: '9', imgSrc: 'img/shutter-island.jpg', title: 'Shutter Island' },
    { id: '10', imgSrc: 'img/pulp-fiction.jpg', title: 'Pulp Fiction' },
    { id: '11', imgSrc: 'img/no-country-for-old-men.jpg', title: 'No Country for Old Men' },
    { id: '12', imgSrc: 'img/snatch.jpg', title: 'Snatch' },
    { id: '13', imgSrc: 'img/moonrise-kingdom.jpg', title: 'Moonrise Kingdom' },
    { id: '14', imgSrc: 'img/seven-years-in-tibet.jpg', title: 'Seven Years in Tibet' },
    { id: '15', imgSrc: 'img/midnight-special.jpg', title: 'Midnight Special' },
    { id: '16', imgSrc: 'img/war-of-the-worlds.jpg', title: 'War of the Worlds' },
    { id: '17', imgSrc: 'img/dardjeeling-limited.jpg', title: 'Dardjeeling Limited' },
    { id: '18', imgSrc: 'img/orlando.jpg', title: 'Orlando' },
    { id: '19', imgSrc: 'img/mindhunter.jpg', title: 'Mindhunter' },
    { id: '20', imgSrc: 'img/midnight-special.jpg', title: 'Midnight Special' },
  ];
  return (
    <React.Fragment>
      <div className="visually-hidden">
      </div>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <div className="catalog__films-list">
            {/*movies.map((movie) => (
							<MoviesCard key={movie.id} imgSrc={movie.imgSrc} title={movie.title} />
						))*/}
            {Array.from({ length: movies.length }, (_, index) => (
              <MoviesCard key={movies[index].id} imgSrc={movies[index].imgSrc} title={movies[index].title} />
            ))}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default MainPage;
