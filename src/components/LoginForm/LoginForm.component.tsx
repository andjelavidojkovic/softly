import React, { useState } from 'react';
import Input from '../Input';
import Checkbox from '../Checkbox';
import Button from '../Button';
import { Link } from 'react-router-dom';
import './LoginForm.style.scss';
import axios from 'axios';

const LoginForm = ({ Log }: { Log: any }) => {
  // const [details, setDetails] = useState({
  //   email: '',
  //   password: '',
  //   register: false,
  // });

  // const submitHandler = (e: any) => {
  //   e.preventDefault();
  //   Log(details);
  // };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log('form submitted');
    axios
      .post('http://localhost:3000/api/users/signin', {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        alert('successfully loggedIn');
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        alert(err.message);
      });
  };

  return (
    <div>
      {' '}
      <form className="login-form" onSubmit={handleSubmit}>
        <Input
          type="email"
          name="Email"
          // onChange={(e) => setDetails({ ...details, email: e.target.value })}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          name="Password"
          // onChange={(e) => setDetails({ ...details, password: e.target.value })}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="login-form__checkbox">
          {/* <Checkbox
            title="Remember me"
            onChange={(e) =>
              setDetails({ ...details, register: e.target.checked })
            }
          ></Checkbox> */}
          <Link to="/signup">Forgot Password?</Link>
        </div>
        <div className="login-form__btn">
          <Button variant="primary" styleType="outline">
            GO
          </Button>
        </div>
        <div className="login-form__sign-up">
          <p>Don't have an account yet?</p>
          <Link to="/signup">Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
