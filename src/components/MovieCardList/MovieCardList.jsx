import MovieCardItem from './MovieCardItem/MovieCardItem';
// import PropTypes from 'prop-types';

// import css from './ImageGallery.module.css';

const MovieCardList = ({ moviesTranding }) => {
  console.log(moviesTranding);
  const elements = moviesTranding.map(
    ({ id, title, poster_path, genresList, release_date }) => (
      <MovieCardItem
        key={id}
        title={title}
        poster_path={poster_path}
        genresList={genresList}
        release_date={release_date}
      />
    )
  );
  return <ul>{elements}</ul>;
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
