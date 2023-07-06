import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
// import { MovieDetails } from '../pages/MovieDetails/MovieDetails';

const Trending = lazy(() => import('../pages/Trending/Trending'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));


const App = () => {
  return (
    <div>
   <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Trending />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  );
};

export default App;