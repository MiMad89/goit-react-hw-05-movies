import React from 'react';
import { fetchSearchMovies } from 'services';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useEffect, useState } from 'react';
import TrendingList from 'components/TrendingList/TrendingList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movie') ?? '';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setMovies(await fetchSearchMovies(movieName));
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements.input.value;
    setSearchParams({ movie: searchQuery });
    e.target.reset();
  };

  return (
    <>
      <SearchBox onSubmit={handleSubmit} />
      <TrendingList movies={movies} />
    </>
  );
};

export default Movies;
