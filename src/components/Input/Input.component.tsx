import classNames from 'classnames';
import React from 'react';
import './Input.styles.scss';

type InputProps = {
  type?: string;
  value?: string;
  className?: string;
  name?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  errorMessage?: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: React.FC<InputProps> = (props) => {
  const {
    value,
    type,
    className,
    name,
    placeholder = 'Contents',
    icon,
    iconPosition,
    errorMessage,
    ...rest
  } = props;

  const classes = classNames('input__box', className, {
    'input__box--row-reverse': iconPosition === 'right',
    'input__box--error': false,
  });

  return (
    <div className="input">
      <p className="input__name">{name}</p>
      <div className={classes}>
        {icon}
        <input
          {...rest}
          type={type}
          value={value}
          placeholder={placeholder}
          className="input input__box--content"
        />
      </div>
    </div>
  );
};

export default Input;
