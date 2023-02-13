import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieById } from 'services/movieAPI';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const fetchGetMovieById = async () => {
      try {
        const data = await getMovieById(movieId);
        setMovieDetails(data);
      } catch ({response}) {
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
    <>
    <div >
      <img width={340}
         src={`https://image.tmdb.org/t/p/w400${movieDetails?.poster_path}`}
        alt={movieDetails?.title} />
        </div>
    <div>
      <h2>{movieDetails?.title.toUpperCase()}</h2>
      <div>
        <div>
          <p>Vote / Votes</p>
          <p>
            <span>{movieDetails?.vote_average}</span>
            <span> / </span>
            <span>{movieDetails?.vote_count}</span>
          </p>
        </div>
        <div>
          <p>Popularity</p>
          <p>{movieDetails?.popularity}</p>
        </div>
        <div>
          <p>Original Title</p>
          <p>{movieDetails?.original_title.toUpperCase()}</p>
        </div>
        <div>
          <p>Genre</p>
          <p>{movieDetails?.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <h3>About</h3>
      <p>{movieDetails?.verview}</p>
    </div>
    </>
  );
};

export default MovieDetails;
