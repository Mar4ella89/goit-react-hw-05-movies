import { trendingMovie } from 'services/movieAPI';
import { useState } from 'react';
import { useEffect } from 'react';

import MovieCardList from 'components/MovieCardList/MovieCardList';

import css from './HomePage.module.css';

const HomePage = () => {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await trendingMovie();

        setMovieItems(data.results);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h1 className={css.HomePageTitle}>Tranding today</h1>
      <MovieCardList movieItems={movieItems} />
    </>
  );
};

export default HomePage;
