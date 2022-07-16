import { FC } from 'react';
import styled from 'styled-components';

import colors from './colors';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 350px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
`;

const CardImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;

type CardProps = {
  label?: string;
  title?: string;
  picture?: string;
};

const Card: FC<CardProps> = ({ label, title, picture }: CardProps) => {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelancer" />
      <span>{title}</span>
    </CardWrapper>
  );
};

export default Card;
