import { useState } from 'react';

// @ts-ignore
import styles from './Metric.module.scss';
import MetricForm from '../components/MetricForm';
import { createMetric } from '../model';

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
    console.log(apiResponse)
    if (apiResponse.status !== 200) {
      setError(true);
      alert("Unsuccessful create")
      return
    }

    alert("Successful create")

  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wchild}>
          <MetricForm
            handleMetricForm={handleSetMetricForm}
            stateMetricForm={stateMetricForm}
            onLoad={handleForm}
          />
        </div>
        <div className={styles.wchild}>component</div>
      </div>
    </>
  );
};

export default CreateMetric;
