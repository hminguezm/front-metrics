import React, { useState } from 'react';
import styled from 'styled-components';
import MetricForm from '../components/MetricForm';
import Title from '../../../../components/common/Title';
import { createMetric } from '../../model';

const Wrapper = styled.div`
  display: flex;
`;

const MetricsCreate = () => {
  const [stateMetricForm, setMetricForm] = useState({
    name: '',
    value: '',
  });
  const [stateError, setError] = useState(false);

  const handleSetMetricForm = (context: any, value: any) => {
    setMetricForm({ ...stateMetricForm, [context]: value });
  };

  const handleForm = async () => {
    const apiResponse = await createMetric(stateMetricForm);
    if (apiResponse.status !== 200) {
      setError(true);
      alert('Unsuccessful create');
      return;
    }

    alert('Successful create');
  };

  return (
    <Wrapper>
      <Title label="Metrics" />
      <MetricForm
        handleMetricForm={handleSetMetricForm}
        stateMetricForm={stateMetricForm}
        onLoad={handleForm}
      />
    </Wrapper>
  );
};

export default MetricsCreate;
