import PropTypes from 'prop-types';

import css from './CastMovieCard.module.css';

const CastMovieCard = ({ castMovie }) => {
  const defaultImg = process.env.PUBLIC_URL + '/cast.jpg ';

  const elements = castMovie?.map(
    ({ cast_id, character, name, original_name, profile_path }) => (
      <li className={css.castItem} key={cast_id}>
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w185${profile_path}`
              : defaultImg
          }
          alt={name}
          loading="lazy"
        />
        <h3 className={css.itemName}>{name ?? original_name}</h3>
        <p className={css.itemСharacter}>{character}</p>
      </li>
    )
  );

  return <ul className={css.castList}>{elements}</ul>;
};

CastMovieCard.propTypes = {
  castMovie: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string,
      original_name: PropTypes.string,
      character: PropTypes.string,
      cast_id: PropTypes.number.isRequired,
    })
  ),
};

export default CastMovieCard;
