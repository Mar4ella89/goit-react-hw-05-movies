import PropTypes from 'prop-types';

import css from './ReviewsMoviesItem.module.css';

const ReviewsMoviesItem = ({ author, authorDetails, content, createdAt }) => {
  const defaultImg = process.env.PUBLIC_URL + '/avatar.jpg ';
  
  return (
    <li className={css.reviewsItem}>
      <div className={css.reviewsUserInfo}>
        <img
          className={css.reviewsUserAvatar}
          width={80}
          src={
            authorDetails.avatar_path &&
            authorDetails.avatar_path.includes('https')
              ? authorDetails.avatar_path.substring(1)
              : defaultImg
          }
          alt=""
        />
        <p className={css.reviewsAutor}>{author}</p>
      </div>
      <div className={css.contentWrapper}>
        <p className={css.reviewsCreatedAt}>{createdAt.slice(0, 10)}</p>
        <p>{content}</p>
      </div>
    </li>
  );
};

ReviewsMoviesItem.propTypes = {
  
  author: PropTypes.string,
  createdAt: PropTypes.string,
  content: PropTypes.string,
  authorDetails:  PropTypes.shape({
      avatar_path: PropTypes.string,
      name: PropTypes.string,
      rating: PropTypes.number,
      username: PropTypes.string,
    })
  
};

export default ReviewsMoviesItem;


