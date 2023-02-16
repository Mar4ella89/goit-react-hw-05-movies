import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast } from 'services/movieAPI';
import CastMovieItem from './CastMovieItem/CastMovieItem';

import css from './CastMovie.module.css';

const CastMovie = () => {
  const [castMovie, setCastMovie] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const fetchGetMovieCast = async () => {
      try {
        const data = await getMovieCast(movieId);
        setCastMovie(data.cast);
      } catch ({ response }) {
        console.log(response.data.message);
      } finally {
        //   setLoading(false);
      }
    };
    fetchGetMovieCast();
  }, [movieId]);

  const elements = castMovie?.map(
    ({ cast_id, character, name, original_name, profile_path }) => (
      <CastMovieItem
        key={cast_id}
        name={name ?? original_name}
        profilePath={profile_path}
        character={character}
      />
    )
  );

  return elements?.length === 0 ? <p>We don't have any cast for this movie</p> :
  <ul className={css.castList}>
    {elements} 
  </ul> ;
  
};

export default CastMovie;
