import React, { useState } from 'react';

// @ts-ignore
import styles from './Metric.module.scss';
import MetricForm from '../components/MetricForm';
import { createMetric } from '../model';
import ShowMetric from './ShowMetric';
import Card from '../../common/InformationCard/InformationCard';
import Counter from '../../common/Counter';
import Wrapper from '../../common/Wrapper';

const lunchPeru = [
  {
    name: 'Ceviche',
    image: '',
    price: '$6.500',
    quantity: 0,
    id: 1,
  },
  {
    name: 'Lomo saltado',
    image: '',
    price: '$5.500',
    quantity: 0,

    id: 2,
  },

  {
    name: 'Causa limeña',
    image: '',
    price: '$3.500',
    quantity: 0,
    id: 3,
  },
];

const CreateMetric = () => {
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

  const [dataMenu, setDataManu] = useState(lunchPeru);

  const handleCounterChange = (index: number, value: number): void => {
    dataMenu[index].quantity = value;
    setDataManu(dataMenu);
  };

  return (
    <>
      {dataMenu.map((menu, idx) => {
        return (
          <div key={idx}>
            {menu.name}
            {menu.price}
            <Counter
              handleOnValue={(value: any) => handleCounterChange(idx, value)}
            />
          </div>
        );
      })}
      {'}'}

      <div className={styles.wrapper}>
        <div className={styles.wchild}>
          <MetricForm
            handleMetricForm={handleSetMetricForm}
            stateMetricForm={stateMetricForm}
            onLoad={handleForm}
          />
        </div>
        <div className={styles.wchild}>
          <ShowMetric />
        </div>
      </div>
    </>
  );
};

export default CreateMetric;
