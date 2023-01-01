import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as logoImg } from '../../assets/icons/logo.svg';

const Container = styled.div``;

const Main = styled.div`
  background: var(--colorPrimary);
`;

const Wrapper = styled.div`
  color: #fff;
  padding: var(--padding);
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  max-width: 1440px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && 'pointer'};
  .active {
    color: #b8ff06;
  }
`;

const Logo = styled(logoImg)`
  width: 30px;
  margin-right: 10px;
  & path {
    fill: #fff;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  padding: 0 30px;
`;

export { Container, Wrapper, Section, Logo, Main, Link };
