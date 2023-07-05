import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

const Trending = lazy(() => import('../pages/Trending'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const NotFound = lazy(() => import('../pages/NotFound'));


export const App = () => {
  return (
    <div>
   <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Trending />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  );
};
