import classNames from 'classnames';
import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';
import './Toast.style.scss';

type ToastProps = {
  type: string;
  message: string;
  position?: string;
};

const Toast: React.FC<ToastProps> = (props) => {
  const { type, message, position } = props;

  const [isShow, setIsShow] = useState(true);

  const classes = classNames(
    'toast',
    `toast--position-${position}`,
    `toast--${type}`,
    !isShow && 'toast-hide',
  );

  useEffect(() => {
    const timeId = setTimeout(() => {
      setIsShow(false);
    }, 5000);
    return () => {
      clearTimeout(timeId);
    };
  }, []);

  const handleClose = (e: any) => {
    e.preventDefault();
    setIsShow(false);
  };

  if (!isShow) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className={classes}>
      <span className="toast__close-btn" onClick={handleClose}>
        &times;
      </span>
      {message}
    </div>,
    document.getElementById('root'),
  );
};

export default Toast;

// const compose = (...fns) => () => { }

// const isValidEmail = compose(
//     validators.general.emptyInput(),
//     validators.general.validateEmail('Email is not valid'),
// )('email')
