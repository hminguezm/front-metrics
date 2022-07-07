import { FC, ReactElement } from 'react';
import { Link, Outlet } from 'react-router-dom';
import classNames from 'classnames';

// @ts-ignore
import styles from './Layout.module.scss';
import Header from '../Header';

interface Props {
  padding?: string | undefined;
  bigContainer?: boolean;
  withHeader?: boolean;
  children?: ReactElement;
  componentsWithoutLayout?: ReactElement;
}

const Layout: FC<Props> = ({
  padding = '',
  bigContainer = false,
  withHeader = false,
  children,
  componentsWithoutLayout = null,
}) => {
  return (
    <>
      <div className={styles['app-wrapper']}>
        <div
          style={{ padding }}
          className={classNames(
            styles.frame,
            bigContainer && styles.bigContainer,
          )}
        >
          {withHeader && <Header />}
          {children}
        </div>
      </div>
      {componentsWithoutLayout}
      <Outlet />
    </>
  );
};

export default Layout;
