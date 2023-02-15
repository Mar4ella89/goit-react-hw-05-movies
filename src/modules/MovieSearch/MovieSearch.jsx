import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';

import MovieSearchForm from 'modules/MovieSearchForm/MovieSearchForm';
import { searchMovie } from 'services/movieAPI';
import MovieCardList from 'components/MovieCardList/MovieCardList';
// import Searchbar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';
// import searchQueryImg from 'services/gallery-api';
// import Button from 'components/Button/Button';
// import Modal from './Modal/Modal';
// import ImageDetails from './ImageDetails/ImageDetails';

import 'react-toastify/dist/ReactToastify.css';
// import css from './App.module.css';

export const MovieSearch = () => {
  //   const [searchQuery, setSearchQuery] = useState('');
  const [movieItems, setMovieItems] = useState([]);
  //   const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  //   const [totalHits, setTotalHits] = useState(0);
  //   const [showModal, setShowModal] = useState(false);
  //   const [imgDetails, setImgDetails] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery');

  console.log(searchQuery);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const fetchSearchMovies = async () => {
      try {
        // setLoading(true);
        const data = await searchMovie(searchQuery, page);
        console.log(data.results);

        if (data.results.length === 0) {
          toast.info(
            'The search has not given any results. Try to find something else'
          );
        }
        setMovieItems(prevMovieItem => [...prevMovieItem, ...data.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        // setLoading(false);
      }
    };
    fetchSearchMovies();
  }, [searchQuery, page]);

  const handleFormSubmit = searchQuery => {
    setSearchParams({ searchQuery });
    setMovieItems([]);
    setPage(1);
  };

  // const loadMore = () => {
  //   setPage(prevPage => prevPage + 1);
  // };

  //   const showImage = largeImageURL => {
  //     setImgDetails(largeImageURL);
  //     setShowModal(true);
  //   };

  //   const closeModal = () => {
  //     setImgDetails(null);
  //     setShowModal(false);
  //   };

  return (
    <>
      <MovieSearchForm onSubmit={handleFormSubmit} />
      <MovieCardList movieItems={movieItems} />
      <ToastContainer autoClose={3000} />
      {error && <p>An error has occurred. Please try again later...</p>}
    </>
    // <div className={css.App}>
    //   <Searchbar onSubmit={handleFormSubmit} />

    //   <ImageGallery items={items} showImage={showImage} />

    //   {loading && <Loader />}

    //   {totalHits > items.length && (
    //     <Button text={'Load more'} onClick={loadMore} />
    //   )}

    //   {showModal && (
    //     <Modal close={closeModal}>
    //       <ImageDetails {...imgDetails} />
    //     </Modal>
    //   )}
    // </div>
  );
};
