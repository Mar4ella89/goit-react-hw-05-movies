import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import css from './MovieCardItem.module.css';

const MovieCardItem = ({ movieId, title, poster_path, release_date }) => {
  return (
    <Link to={`/movies/${movieId}`}>
      <li>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w400${poster_path}`}
            alt={title}
            loading="lazy"
          />
        </div>
        <div className={css.movieCardItemTitle}>
          <p>
            <span>{title.toUpperCase()}</span>
            <span className={css.cardYear}>{release_date.slice(0, 4)}</span>
          </p>
        </div>
      </li>
    </Link>
  );
};

MovieCardItem.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  release_date: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
};

export default MovieCardItem;
