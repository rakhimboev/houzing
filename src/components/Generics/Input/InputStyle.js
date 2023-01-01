import styled from 'styled-components';

const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;

  height: ${({ height }) => (height ? `${height}px` : '44px')};
  width: ${({ width }) => (width ? `${width}px` : '100% ')};
  min-width: 120px;
  font-size: 14px;
  border-radius: 2px;
  outline: none;
  border: '1px solid #e6e9ec';
 
`;

export { Container };
