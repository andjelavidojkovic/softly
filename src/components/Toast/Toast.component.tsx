import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import './Toast.style.scss';

const Toast = ({ type, message }: { type: string; message: string }) => {
  const [isShow, setIsShow] = useState(true);
  const [disappear, setDesappear] = useState(true);
  //   useEffect(() => {
  //   const timeId =
  setTimeout(() => {
    setDesappear(false);
  }, 5000);
  //     return () => {
  //       clearTimeout(timeId);
  //     };
  //   }, []);

  const handleClose = (e: any) => {
    e.preventDefault();
    setIsShow(false);
  };

  const classes = classNames('toast', `toast--${type}`, !isShow && 'hide');
  if (!disappear) {
    return null;
  }
  return (
    <div className={classes}>
      <span className="closebtn" onClick={handleClose}>
        &times;
      </span>
      {message}
    </div>
  );
};

export default Toast;
