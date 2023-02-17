import PropTypes from 'prop-types';

import css from './ReviewsMoviesCard.module.css';

const ReviewsMoviesCard = ({ reviewMovie }) => {
  const defaultImg = process.env.PUBLIC_URL + '/avatar.jpg ';

  const elements = reviewMovie?.map(
    ({ id, author_details, author, created_at, content }) => (
      <li className={css.reviewsItem} key={id}>
        <div className={css.reviewsUserInfo}>
          <img
            className={css.reviewsUserAvatar}
            width={80}
            src={
              author_details.avatar_path &&
              author_details.avatar_path.includes('https')
                ? author_details.avatar_path.substring(1)
                : defaultImg
            }
            alt=""
          />
          <p className={css.reviewsAutor}>{author}</p>
        </div>
        <div className={css.contentWrapper}>
          <p className={css.reviewsCreatedAt}>{created_at.slice(0, 10)}</p>
          <p>{content}</p>
        </div>
      </li>
    )
  );

  return <ul className={css.reviewsList}>{elements}</ul>;
};

ReviewsMoviesCard.propTypes = {
  reviewMovie: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      created_at: PropTypes.string,
      content: PropTypes.string,
      author_details: PropTypes.shape({
        avatar_path: PropTypes.string,
        name: PropTypes.string,
        rating: PropTypes.number,
        username: PropTypes.string,
      }),
    })
  ),
};

export default ReviewsMoviesCard;
