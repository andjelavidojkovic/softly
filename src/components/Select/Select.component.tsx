import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import './Select.style.scss';

type SelectProps = {
  label?: string;
  options?: Record<string, any>[];
  className?: string;
  name?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  selected?: string;
  setSelected?: React.Dispatch<React.SetStateAction<string>>;
} & React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

const Select: React.FC<SelectProps> = (props) => {
  const { label, options, selected, setSelected, icon, iconPosition } = props;
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const onClick = () => {
      setIsActive(false);
    };

    document.body.addEventListener('click', onClick);

    return () => {
      document.body.removeEventListener('click', onClick);
    };
  }, [isActive]);

  const selectBtn = classNames('select__btn', {
    'select__icon--row-reverse': iconPosition === 'right',
    'select__btn--close': isActive === false,
  });

  const iconOpenClose = classNames('select__icon', {
    'select__icon--open': isActive === true,
    // 'select__icon--close': isActive === false,
  });
  return (
    <div className="select">
      <p className="select__label">{label}</p>
      <div
        className={selectBtn}
        onClick={(event) => {
          setIsActive(!isActive);
          event.stopPropagation();
        }}
      >
        <div className={iconOpenClose}>{icon ? icon : null}</div>
        <div>{selected ? selected : 'Contents'} </div>
      </div>
      {isActive && (
        <div className="select__content">
          {options.map((option) => (
            <div
              className="select__content__item"
              onClick={(e) => {
                setSelected(option.label);
                setIsActive(false);
              }}
              key={option.value}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
