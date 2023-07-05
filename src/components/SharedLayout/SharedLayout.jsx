import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <h1>React Movie App</h1>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
