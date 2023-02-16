import PropTypes from 'prop-types';
// import MyImage from '../../../public/cast.jpg'

const CastMovieItem = ({ name, profilePath, character }) => {
  return (
    <li>
      <img
        src={`https://image.tmdb.org/t/p/w185${profilePath}  ` || '/cast.jpg'}
        alt={name}
        loading="lazy"
      />
      <h3>{name}</h3>
      <h4>{character}</h4>
    </li>
  );
};

export default CastMovieItem;

CastMovieItem.defaultProps = {

}
