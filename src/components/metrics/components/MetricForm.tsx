import React, { FC } from 'react';

// @ts-ignore
import styles from './MetricForm.module.scss';
import Title from '../../common/Title';
import Input from '../../common/Input';
import Button from '../../common/Button';

interface MetricFormProps {
  handleMetricForm: any;
  stateMetricForm: any;
  onLoad: any;
}

const MetricForm: FC<MetricFormProps> = ({
  handleMetricForm,
  stateMetricForm,
  onLoad,
}) => {
  const handleChange = (context: any) => (event: { target: { value: any } }) =>
    handleMetricForm(context, event.target.value);
  const handleSubmit = (e: { preventDefault: () => any }) => e.preventDefault();
  return (
    <>
      <div className={styles.container}>
        <div className={styles['middle-row']}>
          <Title title=" Create Metric" />
          <form className={styles['form-container']} onSubmit={handleSubmit}>
            <Input
              id="name"
              type="text"
              state={'default'}
              value={stateMetricForm.name}
              handleChange={handleChange('name')}
              label={'Name'}
              placeholder={''}
              feedback={''}
            />
            <div>
              <Input
                id="value"
                type="text"
                state={'default'}
                value={stateMetricForm.value}
                handleChange={handleChange('value')}
                label={'Value'}
                placeholder={''}
                feedback={''}
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              label="Create"
              size="s"
              onClick={onLoad}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default MetricForm;
