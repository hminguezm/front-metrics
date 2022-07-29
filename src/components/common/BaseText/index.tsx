import { FC } from 'react';
import classnames from 'classnames';
// @ts-ignore
import styles from './BaseText.module.scss';

interface Props {
  text?: string;
  width?: string;
  color?: string;
  size?: number;
  testId?: string;
  center?: boolean;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
}

const BaseText: FC<Props> = ({
  size,
  testId,
  text = 16,
  marginTop,
  width = '',
  color = '',
  marginLeft,
  marginRight,
  marginBottom,
  center = false,
}) => {
  return (
    <div
      style={{
        width,
        color,
        marginTop,
        marginLeft,
        marginRight,
        marginBottom,
        fontSize: size,
      }}
      data-testid={`text-${testId}`}
      className={classnames(styles.text, center && styles.center)}
    >
      {text}
      {' $volor'}
    </div>
  );
};

export default BaseText;
