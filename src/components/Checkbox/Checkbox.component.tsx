import React, { useState } from 'react';
import './Checkbox.style.scss';
import CheckIcon from '../../icons/Check.icon';
import classNames from 'classnames';

type CheckboxProps = {
  title?: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { title, onChange, ...rest } = props;
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="checkbox">
      <input
        {...rest}
        hidden
        type="checkbox"
        onChange={(event) => {
          setIsChecked(event.target.checked);
          onChange(event);
        }}
      />
      <div
        className={classNames('checkbox__box', {
          'checkbox__box--active': isChecked,
        })}
      >
        <CheckIcon />
      </div>
      <span>{title}</span>
    </label>
  );
};

export default Checkbox;
