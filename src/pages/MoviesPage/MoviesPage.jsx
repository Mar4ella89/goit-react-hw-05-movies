import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

import MovieSearchForm from 'modules/MovieSearchForm/MovieSearchForm';
import { searchMovie } from 'services/movieAPI';
import MovieCardList from 'components/MovieCardList/MovieCardList';

import 'react-toastify/dist/ReactToastify.css';

export const MoviesPage = () => {
  const [movieItems, setMovieItems] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const fetchSearchMovies = async () => {
      try {
        const data = await searchMovie(searchQuery, page);

        if (data.results.length === 0) {
          toast.info(
            'The search has not given any results. Try to find something else'
          );
        }
        setMovieItems([...data.results]);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchSearchMovies();
  }, [searchQuery, page]);

  const handleFormSubmit = searchQuery => {
    setSearchParams({ searchQuery });
    setMovieItems([]);
    setPage(1);
  };

  return (
    <>
      <MovieSearchForm onSubmit={handleFormSubmit} />
      <MovieCardList movieItems={movieItems} />
      <ToastContainer autoClose={3000} />
      {error && <p>An error has occurred. Please try again later...</p>}
    </>
  );
};

export default MoviesPage;
