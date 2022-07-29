import styled from 'styled-components';

const Header = styled.header`
  display: grid;
  border: 3px solid #73ad21;
  background-color: red;
  color: black;
  text-align: center;
  width: 100%;

  h2 {
    font-weight: 400;
    color: violet;
    font-size: 1rem;
  }

  li {
    color: #ccc;
    display: inline-block;
    list-style: none;
  }
`;

export default Header;
