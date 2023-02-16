import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

const HomePage = lazy(()=>import ('pages/HomePage/HomePage'));
const MoviesPage = lazy(()=>import ('./pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(()=>import ('pages/MovieDetails/MovieDetails'));
const CastMovie = lazy(()=>import ('pages/CastMovie/CastMovie'));
const ReviewsMovies = lazy(()=>import ('pages/ReviewsMovies/ReviewsMovies'));

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<p>...Loading</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<CastMovie />} />
            <Route path="reviews" element={<ReviewsMovies />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};
