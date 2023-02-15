import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast } from 'services/movieAPI';
import CastMovieItem from './CastMovieItem';
// import { getMovieById } from 'services/movieAPI';

// import css from './CastMovie.module.css';

const CastMovie = () => {
  const [castMovie, setCastMovie] = useState();
  const { movieId } = useParams();

  console.log(getMovieCast());

  useEffect(() => {
    const fetchGetMovieCast = async () => {
      try {
        const data = await getMovieCast(movieId);
        console.log(data);
        setCastMovie(data);
      } catch ({ response }) {
        console.log(response.data.message);
      } finally {
        //   setLoading(false);
      }
    };
    fetchGetMovieCast();
  }, [movieId]);

  console.log(castMovie);

  const elements = castMovie.map(
    ({ cast_id, character, name, original_name, profile_path }) => (
      <CastMovieItem
        key={cast_id}
        name={name ?? original_name}
        profilePath={profile_path}
        character={character}
      />
    )
  );

  return <ul>{elements}</ul>;
};

export default CastMovie;
