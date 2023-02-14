import axios from 'axios';
// import PropTypes from 'prop-types';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'b331236c37988e13f653df9937f18de4',
    language: 'en-US',
    include_adult: false,
    // per_page: 12,
  },
});

export const trendingMovie = async () => {
  const mediaType = 'all';
  const timeWindow = 'day';
  const { data } = await instance.get(`/trending/${mediaType}/${timeWindow}`);

  return data;
};

export const getMovieById = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const searchMovie = async (searchQuery, page) => {
  const { data } = await instance.get(`/search/movie`, {
    params: {
      query: searchQuery,
      page,
    },
  });
  return data;
};
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

// export const trendingMovie = async (searchQuery, page) => {
//   const { data } = await instance.get('/', {
//     params: {
//       q: searchQuery,
//       page,
//     },
//   });
//   return data;
// };

// searchQueryImg.propTypes = {
//   searchQuery: PropTypes.string.isRequired,
// };

// export default trendingMovie;
