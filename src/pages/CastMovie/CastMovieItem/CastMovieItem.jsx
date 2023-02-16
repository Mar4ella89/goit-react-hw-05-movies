// import PropTypes from 'prop-types';

import css from './CastMovieItem.module.css';

const CastMovieItem = ({ name, profilePath, character }) => {
  const defaultImg = process.env.PUBLIC_URL + '/cast.jpg ';
  return (
    <li className={css.castItem}>
      <img
        src={
          profilePath
            ? `https://image.tmdb.org/t/p/w185${profilePath}`
            : defaultImg
        }
        alt={name}
        loading="lazy"
      />

      <h3 className={css.itemName}>{name}</h3>
      <p className={css.itemСharacter}>{character}</p>
    </li>
  );
};

export default CastMovieItem;

// CastMovieItem.defaultProps = {};
