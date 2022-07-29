import { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

import { variants, fontSize } from './ButtonConfig';

interface ButtonProps {
  label?: string;
  variant?: 'default' | 'submit' | 'cancel';
  size?: 'xs' | 's' | 'm' | 'l';
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}

const ButtonComponent = styled.button<ButtonProps>`
  align-items: center;
  background: transparent;
  border: 1px solid;
  border-radius: 8px;
  color: black;
  display: inline-block;
  font-family: -apple-system, system-ui, system-ui, 'Segoe UI', Roboto,
    'Helvetica Neue', 'Fira Sans', Ubuntu, Oxygen, 'Oxygen Sans', Cantarell,
    'Droid Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Lucida Grande', Helvetica, Arial, sans-serif;
  justify-content: center;
  margin: 12px 0 0;
  padding: 6px 12px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;

  :disabled {
    cursor: not-allowed;
  }

  :hover {
    cursor: default;
  }

  ${(props) =>
    props.variant &&
    css`
    ... ${variants[`${props.variant}`]};
    `}

  ${(props) =>
    props.size &&
    css`
    ... ${fontSize[`${props.size}`]};
    `}
`;

const Button: FunctionComponent<ButtonProps> = ({
  disabled = false,
  isLoading = false,
  label,
  size = 's',
  onClick,
  variant = 'default',
  ...props
}: ButtonProps) => {
  return (
    <ButtonComponent
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {isLoading ? 'loading...' : label}
    </ButtonComponent>
  );
};

export default Button;
