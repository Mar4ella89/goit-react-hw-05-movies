import { useState, useEffect } from 'react';
import {
  useParams,
  useNavigate,
  NavLink,
  Outlet,
  useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import { getMovieById } from 'services/movieAPI';

import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState();
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchGetMovieById = async () => {
      try {
        const data = await getMovieById(movieId);
        setMovieDetails(data);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchGetMovieById();
  }, [movieId]);

  const defaultImgMovie = process.env.PUBLIC_URL + '/movie.jpg ';

  return (
    <div className={css.container}>
      <button
        className={css.button}
        onClick={() => {
          navigate(from);
        }}
      >
        Go back
      </button>
      <div className={css.wrapper}>
        <div className={css.wrapperImg}>
          <img
            src={
              movieDetails?.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                : defaultImgMovie
            }
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
      <h3 className={css.addInfo}>Additional information</h3>
      <NavLink to="cast" state={{ from }} className={css.addInfoCast}>
        <p>Cast</p>
      </NavLink>
      <NavLink to="reviews" state={{ from }} className={css.addInfoReviews}>
        <p>Reviews</p>
      </NavLink>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
