import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReview } from 'services/movieAPI';
import ReviewsMoviesCard from '../../components/ReviewsMoviesCard/ReviewsMoviesCard';

const ReviewsMovies = () => {
  const [reviewMovie, setReviewMovie] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const fetchGetMovieReview = async () => {
      try {
        const data = await getMovieReview(movieId);

        setReviewMovie(data.results);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchGetMovieReview();
  }, [movieId]);

  return reviewMovie?.length === 0 ? (
    <p>We don't have any reviews for this movie</p>
  ) : (
    <ReviewsMoviesCard reviewMovie={reviewMovie} />
  );
};

export default ReviewsMovies;
