import { FC } from 'react';

// @ts-ignore
import styles from './Divider.module.scss';

interface Props {
  text?: string;
  children?: string;
}

const Divider: FC<Props> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.border} />
    </div>
  );
};

export default Divider;
