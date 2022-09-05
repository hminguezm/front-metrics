import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../../../../components/common/Button';
import { getMetric } from '../../model';
import Chart from 'react-apexcharts';
import { average, charData, dates } from '../../Services/Services';
import Title from '../../../../components/common/Title';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const MetricsShow: FC = () => {
  const [stateMetricData, setMetricData] = useState([]);

  const handleForm = async () => {
    try {
      const apiResponse = await getMetric();
      if (apiResponse.status !== 200) {
        alert('Unsuccessful create');
        return;
      }
      const { data } = apiResponse;
      setMetricData(data);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {}, [stateMetricData]);

  const days = average(dates(stateMetricData, 'day'));
  const hours = average(dates(stateMetricData, 'hour'));
  const minutes = average(dates(stateMetricData, 'minute'));
  const dayChar = charData(days);
  const hourChar = charData(hours);
  const minuteChar = charData(minutes);

  return (
    <>
      <Wrapper>
        <Title label={'Days'} />
        <Chart
          options={dayChar.options}
          series={dayChar.options.series}
          type="line"
          width={350}
          height={280}
        />
        <Title label={'Hours'} />
        <Chart
          options={hourChar.options}
          series={hourChar.options.series}
          type="line"
          width={350}
          height={280}
        />
        <Title label={'Minutes'} />
        <Chart
          options={minuteChar.options}
          series={minuteChar.options.series}
          type="line"
          width={350}
          height={280}
        />
        <div>
          <Button variant="submit" label="Get data" onClick={handleForm} />
        </div>
      </Wrapper>
    </>
  );
};

export default MetricsShow;
