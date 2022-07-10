import React, { useEffect, useState } from 'react';

// @ts-ignore
import styles from './ShowMetric.module.scss';
import Timeline from '../../components/Timeline';
import { getMetric } from '../../model';
import Button from '../../../common/Button';
import Title from "../../../common/Title";

const ShowMetric = () => {
  const [stateMetricData, setMetricData] = useState([]);
  const [estateErrorGetMetricData, setErrorGetMetricData] = useState({});

  const handleForm = async () => {
    const apiResponse = await getMetric();
    if (apiResponse.status !== 200) {
      setErrorGetMetricData(true);
      alert('Unsuccessful create');
      return;
    }
    const { data } = apiResponse;
    setMetricData(data.slice(1, 6));
  };

  useEffect(() => {}, [stateMetricData]);

  return (
    <>
      <Title title=" Show Timeline Metric" />
      {stateMetricData.length > 0 && (
        <div className={styles['timeline-container']}>
          {stateMetricData.map((data, index) => (
            <Timeline key={index} data={data} />
          ))}
        </div>
      )}
      <Button
        type="submit"
        variant="primary"
        label="Get data"
        size="s"
        onClick={handleForm}
      />
    </>
  );
};

export default ShowMetric;
