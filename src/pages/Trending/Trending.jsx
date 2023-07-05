import React from 'react';
import { fetchMovies } from 'services';
import { useEffect, useState } from 'react';
import { TrendingList } from 'components/TrendingList/TrendingList';

const Trending = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      try {
        setTrending(await fetchMovies());
      } catch (error) {
        console.log(error);
      }
    };
    getTrending();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <TrendingList movies={trending} />
    </>
  );
};

export default Trending;
