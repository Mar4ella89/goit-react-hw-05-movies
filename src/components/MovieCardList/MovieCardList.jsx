import MovieCardItem from './MovieCardItem/MovieCardItem';
// import PropTypes from 'prop-types';

import css from './MovieCardList.module.css';

const MovieCardList = ({ moviesTranding }) => {
  console.log(moviesTranding);
  const elements = moviesTranding.map(
    ({ id, title, name, poster_path, release_date, first_air_date }) => (
      <MovieCardItem
        key={id}
        movieId={id}
        title={title || name}
        poster_path={poster_path}
        release_date={release_date || first_air_date}
      />
    )
  );
  return <ul className={css.movieCardList}>{elements}</ul>;
};

// ImageGallery.propTypes = {
//   showImage: PropTypes.func.isRequired,
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       webformatURL: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//       id: PropTypes.number.isRequired,
//     })
//   ),
// };

export default MovieCardList;
