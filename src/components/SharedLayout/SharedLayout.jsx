import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Nav, Link } from'./SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
    <Suspense fallback={<div>Loading page...</div>}>
    <Header>
      <Nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </Nav>
    </Header>
    
      <Outlet />
    </Suspense>
  </>
  );
};

export default SharedLayout;