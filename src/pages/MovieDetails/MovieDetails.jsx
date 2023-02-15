import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link, Outlet } from 'react-router-dom';

import { getMovieById } from 'services/movieAPI';

import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState();
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGetMovieById = async () => {
      try {
        const data = await getMovieById(movieId);
        setMovieDetails(data);
      } catch ({ response }) {
        console.log(response.data.message);
        //   setError(error.message);
      } finally {
        //   setLoading(false);
      }
    };
    fetchGetMovieById();
  }, [movieId]);

  console.log(movieDetails);

  return (
    <div className={css.container}>
      <button
        className={css.button}
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </button>
      <div className={css.wrapper}>
        <div className={css.wrapperImg}>
          <img
            // width={640}
            src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`}
            alt={movieDetails?.title}
          />
        </div>
        <div className={css.wrapperDetails}>
          <h2>{movieDetails?.title.toUpperCase()}</h2>
          <div>
            <div className={css.wrapperVoits}>
              <p>Vote / Votes</p>
              <p>
                <span>{movieDetails?.vote_average}</span>
                <span> / </span>
                <span>{movieDetails?.vote_count}</span>
              </p>
            </div>
            <div className={css.wrapperPopularity}>
              <p>Popularity</p>
              <p>{movieDetails?.popularity}</p>
            </div>
            <div className={css.wrapperTitle}>
              <p>Original Title</p>
              <p>{movieDetails?.original_title.toUpperCase()}</p>
            </div>
            <div className={css.wrapperGenre}>
              <p>Genre</p>
              <p>{movieDetails?.genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </div>
          <h3 className={css.about}>About</h3>
          <p>{movieDetails?.overview}</p>
        </div>
      </div>
      <h3>Additional information</h3>
      <Link to="cast">
        <p>Cast</p>
      </Link>
      <Link to="reviews">
        <p>Reviews</p>
      </Link>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
