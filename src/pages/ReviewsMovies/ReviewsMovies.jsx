import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

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

  return elements?.length === 0 ? (
    <p>We don't have any reviews for this movie</p>
  ) : (
    <ul className={css.reviewsList}>{elements}</ul>
  );
};

ReviewsMovies.propTypes = {
  id: PropTypes.string,
  author: PropTypes.string,
  created_at: PropTypes.string,
  content: PropTypes.string,
  author_details: PropTypes.array,
};

export default ReviewsMovies;
