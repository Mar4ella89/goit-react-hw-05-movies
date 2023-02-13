const MovieDetails = () => {
  return (
    <div>
      <h2>${title.toUpperCase()}</h2>
      <div>
        <div>
          <p>Vote / Votes</p>
          <p>
            <span>${vote_average}</span>
            <span> / </span>
            <span>${vote_count}</span>
          </p>
        </div>
        <div>
          <p>Popularity</p>
          <p>${popularity}</p>
        </div>
        <div>
          <p>Original Title</p>
          <p>${original_title.toUpperCase()}</p>
        </div>
        <div>
          <p>Genre</p>
          <p>${genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <h3>About</h3>
      <p>${overview}</p>
    </div>
  );
};

export default MovieDetails;
