const CastMovieItem = ({ name, profilePath, character }) => {
  return (
    <li>
      <img
        src={`https://image.tmdb.org/t/p/w100${profilePath}`}
        alt={name}
        loading="lazy"
      />
      <h3>{name}</h3>
      <h4>{character}</h4>
    </li>
  );
};

export default CastMovieItem;
