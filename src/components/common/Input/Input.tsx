import React, { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin: 10px;
  justify-content: center;
  font-family: -apple-system, system-ui, system-ui, 'Segoe UI', Roboto,
    'Helvetica Neue', 'Fira Sans', Ubuntu, Oxygen, 'Oxygen Sans', Cantarell,
    'Droid Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Lucida Grande', Helvetica, Arial, sans-serif;
`;

const Icon = styled.img`
  position: absolute;
  left: auto;
  right: 6px;
  width: 32px;
  height: 32px;
  top: initial;
`;

const Label = styled.label<{ isDisabled: boolean }>`
  position: absolute;
  letter-spacing: 0.25px;
  pointer-events: none;
  color: rgb(0, 0, 0);
  background: ${(props) =>
    !props.isDisabled ? 'rgb(245, 250, 251)' : 'transparent'};
  transition: all 0.3s ease-in;
  font-family: apple-system, system-ui, system-ui, 'Segoe UI', Roboto,
    'Helvetica Neue', 'Fira Sans', Ubuntu, Oxygen, 'Oxygen Sans', Cantarell,
    'Droid Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Lucida Grande', Helvetica, Arial, sans-serif;
  top: -7px;
  left: 11px;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  border-radius: 1px;
`;

const StyledInput = styled.input`
  display: flex;
  background-color: rgb(245, 250, 251);
  border-radius: 8px;
  caret-shape: block;
  font-size: 14px;
  gap: 10px;
  height: 48px;
  outline: none;
  padding: 2px 5px;
  width: 100%;

  :hover {
    border: 2px solid rgb(0, 0, 0);
  }

  :focus {
    border: 2px solid rgb(0, 0, 0);
    outline: none;

    ::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }
  }

  :disabled {
    color: rgba(0, 0, 0, 0.3);
    background: rgba(0, 0, 0, 0.08);
    border: 0.5px solid rgb(0, 0, 0);
    border-radius: 8px;
    cursor: not-allowed;

    :hover {
      background: rgba(0, 0, 0, 0.08);
      color: rgba(0, 0, 0, 0.3);
      cursor: not-allowed;
    }
  }

  ::placeholder {
    color: transparent;
  }
`;

interface InputProps {
  type: 'password' | 'text';
  label: string;
  maxLength: number;
  placeHolder?: string;
  ImgUrl?: string;
  isDisabled?: boolean;
  handleOnChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  type,
  label,
  maxLength = 19,
  placeHolder,
  ImgUrl,
  handleOnChange,
  isDisabled = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(
    type !== 'password',
  );
  const [inputValue, setInputValue] = useState<string>('');

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value);
    handleOnChange && handleOnChange(e);
  };

  return (
    <>
      <Container>
        <StyledInput
          size={22}
          type={showPassword && type === 'password' ? 'text' : type}
          value={inputValue}
          maxLength={maxLength}
          placeholder={placeHolder}
          onChange={handleValue}
          disabled={isDisabled}
          {...props}
        />
        <Label isDisabled={isDisabled}>{label}</Label>
        {ImgUrl && <Icon src={ImgUrl} />}
        {type === 'password' && inputValue && !showPassword && (
          <BsEye
            style={{
              position: 'absolute',
              color: 'rgb(0, 0, 0)',
              left: 'auto',
              right: '12px',
              top: 0,
              fontSize: '25px',
              height: '100%',
            }}
            onClick={handleShowPassword}
          />
        )}
        {type === 'password' && inputValue && showPassword && (
          <BsEyeSlash
            style={{
              position: 'absolute',
              color: 'rgb(0, 0, 0)',
              left: 'auto',
              right: '12px',
              top: 0,
              fontSize: '25px',
              height: '100%',
            }}
            onClick={handleShowPassword}
          />
        )}
      </Container>
    </>
  );
};

export default Input;
