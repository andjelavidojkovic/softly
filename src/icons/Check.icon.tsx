import React from 'react';
import classNames from 'classnames';

type SvgProps = {
  className?: string;
} & React.SVGProps<SVGSVGElement>;

// eslint-disable-next-line import/no-anonymous-default-export
const FatArrow: React.FC<SvgProps> = (props) => {
  const { className, ...rest } = props;

  return (
    <svg
      {...rest}
      className={className}
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 417 417"
      xmlSpace="preserve"
      aria-hidden="true"
      fill="currentColor"
    >
      <path
        d="M159.7,364.3c-4,4-9.4,6.2-15.1,6.2s-11.1-2.2-15.1-6.2L9.4,244c-12.5-12.5-12.5-32.7,0-45.2l15.1-15.1
	c12.5-12.5,32.7-12.5,45.2,0l75.1,75.1L347.4,56.1c12.5-12.5,32.7-12.5,45.2,0l15.1,15.1c12.5,12.5,12.5,32.7,0,45.2L159.7,364.3z"
        strokeWidth="2"
        stroke="none"
        id="id_102"
      ></path>
    </svg>
  );
};

export default FatArrow;
