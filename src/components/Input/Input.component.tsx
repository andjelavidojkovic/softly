import classNames from 'classnames';
import React from 'react';
import './Input.styles.scss';
import InfoIcon from '../../icons/Info.icon';

type InputProps = {
  type?: string;
  label?: string;
  value?: string;
  error?: boolean;
  required?: boolean;
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
    label,
    value,
    type,
    className,
    error,
    name,
    placeholder = 'Contents',
    icon,
    required,
    iconPosition,
    errorMessage,
    ...rest
  } = props;

  const classes = classNames('input__box', className, {
    'input__box--row-reverse': iconPosition === 'right',
    'input__box--error': error,
  });

  return (
    <div className="input">
      <p className="input__label">{label}</p>
      <div className={classes}>
        <div className="input__icon">{icon}</div>
        <input
          {...rest}
          name={name}
          type={type}
          value={value}
          required={required}
          placeholder={placeholder}
          className={`input input__box--content`}
        />
      </div>
      {errorMessage ? (
        <span className="input__error-msg">
          <InfoIcon />
          {errorMessage}
        </span>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Input;
