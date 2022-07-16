import Button from './index';

export default {
  title: 'Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
};

export const Default = () => <Button label="Example" />;

export const Submit = () => (
  <Button variant="submit" label="Example" size={'m'} />
);

export const Cancel = () => (
  <Button variant="cancel" label="Example" size={'m'} />
);
