import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Wrapper } from './NavbarStyle';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Navbar</h1>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default Navbar;
