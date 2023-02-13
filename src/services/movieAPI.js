import axios from 'axios';
// import PropTypes from 'prop-types';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'b331236c37988e13f653df9937f18de4',
    // per_page: 12,
    // media_type: 'all',
    // time_window: 'day',
  },
});

export const trendingMovie = async () => {
  //   const { data } = await axios.get(
  //     'https://api.themoviedb.org/3/trending/all/day?api_key=b331236c37988e13f653df9937f18de4'
  //   );
  const mediaType = 'all';
  const timeWindow = 'day';
  const { data } = await instance.get(`/trending/${mediaType}/${timeWindow}`);
  console.log(data);
  return data;
};

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
