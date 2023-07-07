import axios from 'axios';

const API_KEY = '7dae00a65762652576a4ad1635dfa4a8';

export const fetchMovies = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day',
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data.results;
};

export const fetchMovieDetails = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data;
}

export const fetchSearchMovies = async query => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        api_key: API_KEY,
        query,
      },
    }
  );
  return response.data.results;
}

export const fetchMovieCast = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data.cast;
}

export const fetchMovieReviews = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data.results;
}