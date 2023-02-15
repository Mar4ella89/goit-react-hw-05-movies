import { trendingMovie } from 'services/movieAPI';
import { useState } from 'react';
import { useEffect } from 'react';

import MovieCardList from 'components/MovieCardList/MovieCardList';

import css from './HomePage.module.css';

const HomePage = () => {
  const [movieItems, setMovieItems] = useState([]);
  //   const [page, setPage] = useState(1);

  useEffect(() => {
    //   if (!searchQuery) {
    //     return;
    //   }

    const fetchTrendingMovies = async () => {
      try {
        //   setLoading(true);
        const data = await trendingMovie();

        console.log(data.results);

        // setMoviesTranding(prevMoviesTranding => [
        //   ...prevMoviesTranding,
        //   ...data.results,
        // ]);

        setMovieItems(data.results);
        //   setItems(prevItems => [...prevItems, ...data.hits]);
      } catch (error) {
        //   setError(error.message);
      } finally {
        //   setLoading(false);
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
