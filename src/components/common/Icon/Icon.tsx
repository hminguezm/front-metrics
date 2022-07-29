import styled from 'styled-components';
import { FC } from 'react';

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border: black;
`;

const Img = styled.img`
  padding: 9px 8px;
  right: 0;
`;

interface IconProps {
  width: string;
  viewBox: string;
}

const Icon: FC<IconProps> = ({ width = '50%', viewBox }: IconProps) => {
  return (
    <Container>
      <Img src={'./src/assets/images/icons/close.svg'} width={width} />
    </Container>
  );
};

export default Icon;
