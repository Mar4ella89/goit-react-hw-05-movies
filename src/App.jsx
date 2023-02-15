import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
// import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import CastMovie from 'pages/CastMovie/CastMovie';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<CastMovie />} />
          </Route>
          {/* <Route path="*" element={<HomePage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};
