import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 40px 0;

  ::after {
    background-color: rgba(255, 123, 119, 100);
    content: '';
    position: absolute;
    left: calc(60% - 1px);
    width: 4px;
    height: 100%;
  }
`;

interface Props {
  children: any;
}

const TimelineMaintainer: FC<Props> = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default TimelineMaintainer;
