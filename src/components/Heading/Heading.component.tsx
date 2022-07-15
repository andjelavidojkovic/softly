import React from 'react';
import classNames from 'classnames';
import './Heading.style.scss';

type HeadingProps = {
  className?: string;
  children?: String;
};

const Heading: React.FC<HeadingProps> = (props) => {
  const { className, children } = props;

  const classes = classNames('h3-heading', className);

  return <h3 className={classes}>{children}</h3>;
};

export default Heading;
