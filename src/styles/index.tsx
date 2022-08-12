import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
    margin: 0;
    scroll-behavior: smooth;
  }
  body {
    background: #fff;
    font-size: 0.85rem;
    letter-spacing: 0.07em;
    margin: 0;
  }
  ::-webkit-scrollbar {
    height: 5px;
    width: 6px;
  }
  ::-webkit-scrollbar-corner {
    height: 0;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 25px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: lightblue;
    border-radius: 25px;
  }
  #root{
    margin:0 auto;
  }
`;

export const Container = styled.div`
  align-items: center;
  background-color: #131a22;
  color: white;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: auto;
`;
