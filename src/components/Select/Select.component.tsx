import React from 'react';
import './Select.style.scss';

type SelectProps = {
  label?: string;
  options?: Record<string, any>[];
  className?: string;
  name?: string;
} & React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

const Select: React.FC<SelectProps> = (props) => {
  const { label, className, options, name, ...rest } = props;

  return (
    <div className="select">
      <p className="select__label">{label}</p>
      <select {...rest} className="sss">
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
