import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
`;

const Button = styled.button`
  align-items: center;
  background: ${(props) => props.color};
  color: rgb(85%, 85%, 85%);
  border: 0 solid;
  border-radius: 30%;
  font-size: 12px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  :hover {
    background: ${(props) => props.color};
  }
`;

const Label = styled.label`
  letter-spacing: 0.25px;
  pointer-events: none;
  color: rgb(0, 0, 0);
  background: ${(props) => props.color};
  font-family: apple-system, system-ui, system-ui, 'Segoe UI', Roboto,
    'Helvetica Neue', 'Fira Sans', Ubuntu, Oxygen, 'Oxygen Sans', Cantarell,
    'Droid Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Lucida Grande', Helvetica, Arial, sans-serif;
  transition: all 0.3s ease-in;
  padding: 2px;
`;

interface Props {
  handleOnValue: Function;
}

const Counter: FC<Props> = ({ handleOnValue }: Props) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    handleOnValue(counter);
  }, [counter]);

  const increase = () => {
    setCounter((count: number) => count + 1);
  };

  const decrease = () => {
    counter > 0 && setCounter((count: number) => count - 1);
  };

  return (
    <Wrapper>
      <Button color={'rgb(78%, 25%, 25%)'} onClick={decrease}>
        -
      </Button>
      <Label>{counter}</Label>
      <Button color={'rgb(55%, 78%, 25%)'} onClick={increase}>
        +
      </Button>
    </Wrapper>
  );
};

export default Counter;
