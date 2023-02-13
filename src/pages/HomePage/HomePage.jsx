import { trendingMovie } from 'services/movieAPI';
import { useState } from 'react';
import { useEffect } from 'react';

import MovieCardList from 'components/MovieCardList/MovieCardList';

const HomePage = () => {
  const [moviesTranding, setMoviesTranding] = useState([]);
  const [page, setPage] = useState(1);

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

        setMoviesTranding(data.results);
        //   setItems(prevItems => [...prevItems, ...data.hits]);
      } catch (error) {
        //   setError(error.message);
      } finally {
        //   setLoading(false);
      }
    };
    fetchTrendingMovies();
  }, [page]);
  // , [searchQuery, page]);

  //   <li onClick={showImg} className={css.galleryItem}>
  //     <img
  //       src={srcImg}
  //       alt=""
  //       loading="lazy"
  //       className={css.ImageGalleryItemImage}
  //     />
  //   </li>;
  return (
    <>
      <h1>Tranding today</h1>
      <MovieCardList moviesTranding={moviesTranding} />
    </>
  );
};

export default HomePage;
