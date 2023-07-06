import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services';
import { ImageInfo } from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movieDetails = await fetchMovieDetails(id);
        setMovieDetails(movieDetails);
        setGenres(movieDetails.genres);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieDetails();
  }, [id]);

  return (
    <>
      <Link to={location.state?.from ?? '/'}>
        <button type="button">Go back</button>
      </Link>
      <ImageInfo>
        <img
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
              : `https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png`
          }
          alt={movieDetails.title}
          width={300}
        />
      </ImageInfo>
      <div>
        <h2>{movieDetails.title}</h2>
        <p>User score: {movieDetails.vote_average * 10}%</p>
        <h3>Overview</h3>
        <p>{movieDetails.overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

// export default MovieDetails;