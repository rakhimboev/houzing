import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { navbar } from '../../utils/navbar';
import Button from '../Generics/Button/Button';
import { Container, Link, Logo, Main, Section, Wrapper } from './NavbarStyle';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section logo onClick={() => navigate('/home')}>
            <Logo />
            <h3>Houzing</h3>
          </Section>
          <Section link>
            {navbar.map(({ title, path, hidden }, index) => {
              return !hidden && (
                <Link
                  className={({ isActive }) => isActive && 'active'}
                  key={index}
                  to={path}>
                  {title}
                </Link>
              );
            })}
          </Section>
          <Section>
            <Button onClick={() => navigate('/signin')} type='dark' width='120px'>Sign in</Button>
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  );
};

export default Navbar;
