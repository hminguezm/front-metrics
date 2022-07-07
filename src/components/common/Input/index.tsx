import React, { FunctionComponent, useEffect, useState } from 'react';
import classnames from 'classnames';
import { IoMdAlert } from 'react-icons/io';
import { GoAlert } from 'react-icons/go';
import { BsCheckCircleFill, BsEye, BsEyeSlash } from 'react-icons/bs';

// @ts-ignore
import styles from './Input.module.scss';

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  state: 'default' | 'success' | 'error' | 'warning' | 'disabled';
  icon?: React.ReactNode;
  label?: string;
  feedback?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FunctionComponent<InputProps> = ({
  state,
  feedback,
  label,
  handleChange,
  type,
  value,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(false);
  const [showPassword, setShowPassword] = useState<boolean>(
    type !== 'password',
  );

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (handleChange) handleChange(e);
    if (e.currentTarget.value) {
      setInputValue(true);
    } else {
      setInputValue(false);
    }
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    if (value) {
      setInputValue(true);
    } else {
      setInputValue(false);
    }
  }, [value]);

  return (
    <div>
      <div className={classnames(styles['input-container'])}>
        <input
          {...props}
          className={classnames(styles.input, styles[state])}
          value={value}
          type={showPassword && type === 'password' ? 'text' : type}
          onChange={handleValue}
        />
        <label
          className={classnames(
            styles.label,
            inputValue && styles['input-value'],
          )}
        >
          {label}
        </label>
        {type === 'password' && !showPassword && (
          <BsEyeSlash
            size={19}
            className={classnames(styles.icon, styles[state])}
            onClick={handleShowPassword}
          />
        )}
        {type === 'password' && showPassword && (
          <BsEye
            size={19}
            className={classnames(styles.icon, styles[state])}
            onClick={handleShowPassword}
          />
        )}
        {type !== 'password' && state === 'success' && (
          <BsCheckCircleFill
            size={21}
            className={classnames(styles.icon, styles[state])}
          />
        )}
        {type !== 'password' && state === 'error' && (
          <IoMdAlert
            size={22}
            className={classnames(styles.icon, styles[state])}
          />
        )}
        {type !== 'password' && state === 'warning' && (
          <GoAlert
            size={20}
            className={classnames(styles.icon, styles[state])}
          />
        )}
      </div>
      <div className={classnames(styles.feedback, styles[state])}>
        {feedback}
      </div>
    </div>
  );
};
