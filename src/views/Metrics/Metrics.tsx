import React from 'react';
import styled from 'styled-components';
import Title from '../../components/common/Title';
import MetricsShow from './Create/mantainers/MetricsShow';
import MetricsCreate from './Create/mantainers/MetricsCreate';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  border: 1px solid black;
  width: 100%;

  .wchild {
    margin: 10px;
  }
`;

const Metrics = () => {
  return (
    <>
      <Title label="Metrics" size={24} />
      <Wrapper>
        <div className="wchild">
          <Title label="Create" size={24} />
          <MetricsCreate />
        </div>
        <div className="wchild">
          <Title label="Show" size={24} />
          <MetricsShow />
        </div>
      </Wrapper>
    </>
  );
};

export default Metrics;
