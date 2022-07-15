import React, { ReactNode } from 'react';
import './Button.style.scss';
import classNames from 'classnames';

type ButtonProps = {
  rotate?: string;
  children?: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'right' | 'bottom' | 'left';
  className?: string;
  variant: 'primary' | 'secondary';
  styleType?: 'solid' | 'outline' | 'link';
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: React.FC<ButtonProps> = (props) => {
  const {
    rotate,
    children,
    icon,
    iconPosition,
    className,
    styleType = 'solid',
    variant = 'primary',
    ...rest
  } = props;

  const classes = classNames(
    'button',
    `button--${variant}`,
    `button--${styleType}`,
    `button--icon-${iconPosition}`,
    `button--icon-rotate--${rotate}`,
    { 'button--error': false },
  );

  return (
    <button {...rest} className={classes}>
      {children}
      {icon}
    </button>
  );
};

export default Button;
