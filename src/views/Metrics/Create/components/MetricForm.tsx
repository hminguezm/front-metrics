import React, { FC } from 'react';
import styled from 'styled-components';
import Title from '../../../../components/common/Title';
import Input from '../../../../components/common/Input';
import Button from '../../../../components/common/Button';

export const FormGroup = styled.div`
  display: flex;
  width: 300px;
  margin: 10px auto;
  justify-content: center;
  justify-items: center;
`;

const Form = styled.form`
  width: 100%;
`;

interface Props {
  handleMetricForm: any;
  stateMetricForm: any;
  onLoad: any;
}

const MetricForm: FC<Props> = ({
  handleMetricForm,
  stateMetricForm,
  onLoad,
}: Props) => {
  const handleChange = (context: any) => (event: { target: { value: any } }) =>
    handleMetricForm(context, event.target.value);
  const handleSubmit = (e: { preventDefault: () => any }) => e.preventDefault();

  return (
    <>
      <FormGroup>
        <Form onSubmit={handleSubmit}>
          <Input
            key={1}
            type="text"
            label={'Name'}
            maxLength={22}
            handleOnChange={handleChange('name')}
          />
          <Input
            key={2}
            type="text"
            label={'Value'}
            maxLength={22}
            handleOnChange={handleChange('value')}
          />
          <Button
            variant="submit"
            label={'Create'}
            size={'m'}
            onClick={onLoad}
          />
        </Form>
      </FormGroup>
    </>
  );
};

export default MetricForm;
