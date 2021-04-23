import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 50%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#8B40F4' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(145, 92, 182, .4);

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: #40F48B;
    box-shadow: 0 5px 15px rgba(145, 92, 182, .4);

  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;