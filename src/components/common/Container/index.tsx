import React, { FC } from 'react';
import './styles';

interface ContainerProps {
  children: any;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default Container;
