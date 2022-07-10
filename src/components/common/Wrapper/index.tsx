import { FC, ReactElement } from 'react';

// @ts-ignore
import styles from './Wrapper.module.scss';

interface Props {
  children?: ReactElement[];
}

const Wrapper: FC<Props> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {children?.map((component: ReactElement, key: number) => {
        return (
          <div key={key} className={styles.wchild}>
            {component}
          </div>
        );
      })}
    </div>
  );
};

export default Wrapper;
