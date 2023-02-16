import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReview } from 'services/movieAPI';
import ReviewsMoviesItem from './ReviewsMoviesItem/ReviewsMoviesItem';

import css from './ReviewsMovies.module.css';

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
      } finally {
        //   setLoading(false);
      }
    };
    fetchGetMovieReview();
  }, [movieId]);

  const elements = reviewMovie?.map(
    ({ id, author_details, author, created_at, content }) => (
      <ReviewsMoviesItem
        key={id}
        author={author}
        authorDetails={author_details}
        content={content}
        createdAt={created_at}
      />
    )
  );

  return <ul className={css.reviewsList}>{elements}</ul>;
};

export default ReviewsMovies;
