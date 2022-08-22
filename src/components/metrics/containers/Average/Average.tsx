import React, { FC, useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { getMetric } from '../../model';
import Button from '../../../common/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`

const Average: FC = () => {
  const [stateMetricData, setMetricData] = useState([]);

  const handleForm = async () => {
    const apiResponse = await getMetric();
    if (apiResponse.status !== 200) {
      alert('Unsuccessful create');
      return;
    }
    const { data } = apiResponse;
    console.log({data})
    setMetricData(data.slice(1, 6));
  };

  useEffect(() => {}, [stateMetricData]);

  const state = {
    options: {
      series: [{
        name: 'Amount',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }],
      chart: {
        id: 'apexchart-example'
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    }
  }

  return (
    <Wrapper>
      <Button variant="submit" label="Get data" onClick={handleForm} />
      <Chart options={state.options} series={state.options.series} type="line"  width={350} height={280} />
    </Wrapper>
  );
};

export default Average
