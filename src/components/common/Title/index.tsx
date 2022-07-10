import { FC } from 'react';
import classnames from 'classnames';

// @ts-ignore
import styles from './Title.module.scss';

interface Props {
  size?: number;
  title?: string;
  testId?: string;
  center?: boolean;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
}

const Title: FC<Props> = ({
  size,
  title,
  testId,
  center,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
}) => {
  return (
    <div
      data-testid={`title-${testId}`}
      style={{
        fontSize: size,
        marginTop,
        marginLeft,
        marginRight,
        marginBottom,
      }}
      className={classnames(styles.title, center && styles.center)}
    >
      {title}
    </div>
  );
};

export default Title;
