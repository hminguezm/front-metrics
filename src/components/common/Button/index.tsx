import { FunctionComponent } from 'react';
import classnames from 'classnames';
import Spinner from '../Spinner';

// @ts-ignore
import styles from './Button.module.scss';

interface ButtonProps {
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary' | 'terciary';
  size?: 'xs' | 's' | 'm' | 'l';
  label: string;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({
  type = 'button',
  variant = 'primary',
  size = 'm',
  label,
  onClick,
  isLoading = false,
  disabled = false,
  ...props
}) => {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={classnames(
        styles.button,
        styles[variant],
        styles[size],
        isLoading && styles.loading,
      )}
      onClick={onClick}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <Spinner /> : label}
    </button>
  );
};

export default Button;
