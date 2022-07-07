import { FunctionComponent } from 'react';
import { CgSpinner } from 'react-icons/cg';

// @ts-ignore
import styles from './Spinner.module.scss';

const Spinner: FunctionComponent = () => (
  <CgSpinner size={25} className={styles.spinner} />
);

export default Spinner;
