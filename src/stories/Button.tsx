import React, { FC } from 'react';
import './button.css';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ primary = false, size = 'medium', backgroundColor, children, ...props}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button type="button" className={['storybook-button', `storybook-button--${size}`, mode].join(' ')} style={{ backgroundColor }}{...props}>
      {children}
    </button>
  );
};
