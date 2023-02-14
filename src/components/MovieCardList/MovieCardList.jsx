import MovieCardItem from './MovieCardItem/MovieCardItem';
import PropTypes from 'prop-types';

import css from './MovieCardList.module.css';

const MovieCardList = ({ movieItems }) => {
  console.log(movieItems);
  const elements = movieItems.map(
    ({ id, title, name, poster_path, release_date, first_air_date }) => (
      <MovieCardItem
        key={id}
        movieId={id}
        title={title ?? name}
        poster_path={poster_path}
        release_date={release_date ?? first_air_date}
      />
    )
  );
  return <ul className={css.movieCardList}>{elements}</ul>;
};

MovieCardList.propTypes = {
  movieItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string,
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
      first_air_date: PropTypes.string,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MovieCardList;
