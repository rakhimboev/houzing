import styled from 'styled-components';

const getType = ({type}) => {
  switch (type) {
    case 'dark':
      return {
        background: 'transparent',
        color: '#fff',
        border: '1px solid #fff',
      };
    case 'light':
      return {
        background: '#fff',
        color: '#0d263b',
        border: '1px solid #e6e9ec',
      };
    case 'primary':
      return {
        background: '#0061df',
        color: '#fff',
        border: 'none',
      };
    default:
      return {
        background: '#0061df',
        color: '#fff',
        border: 'none',
      };
  }
};

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: ${({ height }) => (height ? `${height}px` : '44px')};
  width: ${({ width }) => (width ? `${width}px` : '130px')};
  min-width: 120px;
  font-size: 14px;
  border-radius: 2px;
  ${getType}
  cursor: pointer;
  :active {
    opacity: 0.7;
  }
`;

export { Container };
