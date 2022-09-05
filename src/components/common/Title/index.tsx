import { FC } from 'react';
import classnames from 'classnames';

// @ts-ignore
import styles from './Title.module.scss';

interface Props {
  size?: number;
  label?: string;
  testId?: string;
  center?: boolean;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
}

const Title: FC<Props> = ({
  size,
  label,
  testId,
  center,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
}) => {
  return (
    <div
      data-testid={`label-${testId}`}
      style={{
        fontSize: size,
        marginTop,
        marginLeft,
        marginRight,
        marginBottom,
      }}
      className={classnames(styles.label, center && styles.center)}
    >
      {label}
    </div>
  );
};

export default Title;
