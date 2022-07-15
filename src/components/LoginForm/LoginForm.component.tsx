import React, { useState } from 'react';
import Input from '../Input';
import Checkbox from '../Checkbox';
import Button from '../Button';
import { Link } from 'react-router-dom';
import './LoginForm.style.scss';

const LoginForm = ({ Log }: { Log: any }) => {
  const [details, setDetails] = useState({
    email: '',
    password: '',
    register: false,
  });

  const submitHandler = (e: any) => {
    e.preventDefault();
    Log(details);
  };

  return (
    <form className="login-form" onSubmit={submitHandler}>
      <Input
        type="email"
        name="Email"
        onChange={(e) => setDetails({ ...details, email: e.target.value })}
      />
      <Input
        type="password"
        name="Password"
        onChange={(e) => setDetails({ ...details, password: e.target.value })}
      />
      <div className="login-form__checkbox">
        <Checkbox
          title="Remember me"
          onChange={(e) =>
            setDetails({ ...details, register: e.target.checked })
          }
        ></Checkbox>
        <Link to="/about">Forgot Password?</Link>
      </div>
      <div className="login-form__btn">
        <Button variant="primary" styleType="outline">
          GO
        </Button>
      </div>
      <div className="login-form__sign-up">
        <p>Don't have an account yet?</p>
        <Link to="/about">Sign up</Link>
      </div>
    </form>
  );
};

export default LoginForm;
