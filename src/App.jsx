import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from 'modules/Loader/Loader';

import Navbar from './modules/Navbar/Navbar';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const CastMovie = lazy(() => import('pages/CastMovie/CastMovie'));
const ReviewsMovies = lazy(() => import('pages/ReviewsMovies/ReviewsMovies'));

export const App = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loader />}>
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
    </div>
  );
};
