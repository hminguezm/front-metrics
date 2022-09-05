import { FC } from 'react';

import styled from 'styled-components';

const TimelineItemContent = styled.div`
  align-items: flex-end;
  background-color: rgba(255, 255, 255, 100);
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  padding: 15px;
  position: relative;
  text-align: right;
  max-width: 70%;
  width: 500px;

  ::after {
    content: ' ';
    background-color: rgba(255, 255, 255, 100);
    box-shadow: 1px -2px 1px rgba(0, 0, 0, 0.2);
    position: absolute;
    right: -7.5px;
    top: calc(50% - 3.5px);
    transform: rotate(45deg);
    width: 15px;
    height: 15px;
  }

  :nth-child(odd) {
    text-align: left;
    align-items: flex-start;
  }
`;

const TimelineItemContentCircle = styled.circle`
  background-color: rgba(255, 255, 255, 100);
  border: 3px solid rgba(255, 123, 119, 100);
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 10px);
  right: -40px;
  width: 20px;
  height: 20px;
  z-index: 100;
`;

const TimelineItemContentTitle = styled.span`
  color: rgba(0, 0, 0, 0.2);
  font-size: 18px;
  font-weight: bold;
  top: 5px;
  left: 5px;
  letter-spacing: 1px;
  padding: 5px;
  position: absolute;
  text-transform: uppercase;
`;

const TimelineItemCard = styled.div`
  display: flex;
  margin: 10px 0;
  padding-right: 30px;
  position: relative;
  width: 55%;

  :nth-child(odd) {
    left: 54%;
  }

  :nth-child(odd) ${TimelineItemContent} {
    text-align: left;
    align-items: flex-start;
  }

  :nth-child(odd) ${TimelineItemContent} {
    ::after {
      right: auto;
      left: -7.5px;
      box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);
    }
  }

  :nth-child(odd) ${TimelineItemContent} ${TimelineItemContentTitle} {
    left: auto;
    right: 5px;
  }

  :nth-child(odd) ${TimelineItemContent} ${TimelineItemContentCircle} {
    right: auto;
    left: -40px;
  }

  @media only screen and (max-width: 1023px) {
    ${TimelineItemContent} {
      max-width: 100%;
    }
  }
`;

interface Pros {
  title: string | any;
  children?: string | any;
}

const Timeline: FC<Pros> = ({ title, children }: Pros) => {
  return (
    <TimelineItemCard>
      <TimelineItemContent>
        <TimelineItemContentTitle>{title}</TimelineItemContentTitle>
        {children}
        <TimelineItemContentCircle />
      </TimelineItemContent>
    </TimelineItemCard>
  );
};

export default Timeline;
