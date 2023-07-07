import { fetchMovieReviews } from 'services';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        setReviews(await fetchMovieReviews(id));
      } catch (error) {
        console.log(error);
      }
    };
    getMovieReviews();
  }, [id]);

  return (
    <>
      <ul>
        {reviews.length === 0 ? (
          <p>We don't have any reviews for this movie.</p>
        ) : (
          reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default Reviews;
