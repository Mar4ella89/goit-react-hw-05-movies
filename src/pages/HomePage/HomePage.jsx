import { trendingMovie } from 'services/movieAPI';
import { useState } from 'react';
import { useEffect } from 'react';

import MovieCardList from 'components/MovieCardList/MovieCardList';

import css from './HomePage.module.css';

const HomePage = () => {
  const [movieItems, setMovieItems] = useState([]);
  //   const [page, setPage] = useState(1);

  useEffect(() => {
    
    const fetchTrendingMovies = async () => {
      try {
        
        const data = await trendingMovie();

         setMovieItems(data.results);
        //   setItems(prevItems => [...prevItems, ...data.hits]);
      } catch ({response}) {
        console.log(response.data.message);
      } finally {
        
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
