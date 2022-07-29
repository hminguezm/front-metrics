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
              key={1}
              type="text"
              label={'Name'}
              maxLength={22}
              handleOnChange={handleChange('name')}
            />
            <div>
              <Input
                key={2}
                type="text"
                label={'Value'}
                maxLength={22}
                handleOnChange={handleChange('value')}
              />
            </div>
            <Button
              variant="cancel"
              label={'Create'}
              size={'m'}
              onClick={onLoad}
            />
            <Button
              variant="submit"
              label={'Create'}
              size={'l'}
              onClick={onLoad}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default MetricForm;
