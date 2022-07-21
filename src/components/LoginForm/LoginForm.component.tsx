import React, { useState, useEffect } from 'react';
import Input from '../Input';
import Checkbox from '../Checkbox';
import Button from '../Button';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.style.scss';
import axios from '../../axios';
import utils from '../../utils';
import { AxiosError } from 'axios';

// function ValidateEmail(email: string) {
//   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
//     return true;
//   } else {
//     alert('you have entered an invalid email address');
//     return false;
//   }
// }

function validateLogin(errorMsg: string) {
  if (errorMsg === "User with that email address doesn't exist!") return true;
  else return false;
}

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [errEmail, setErrEmail] = useState(false);
  const [errPwd, setErrPwd] = useState(false);

  useEffect(() => {
    setErrMsg('');
    setErrEmail(false);
    setErrPwd(false);
  }, [email, pwd]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log({ email, pwd });
    try {
      const response = await axios.post(
        '/users/signin',
        JSON.stringify({ email, password: pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );
      console.log(response);
      const accessToken = response.data.accessToken;
      console.log(accessToken);
      localStorage.setItem('token', accessToken);
      navigate('/');
    } catch (error) {
      console.log(error);
      const er = validateLogin(utils.getStringError(error as AxiosError));
      setErrEmail(er);
      setErrPwd(!er);
      setErrMsg(utils.getStringError(error as AxiosError));
    }
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <Input
          type="email"
          name="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
          error={errEmail ? true : false}
        />
        <p
          className={
            errMsg === "User with that email address doesn't exist!"
              ? 'errmsg'
              : 'nothing'
          }
        >
          {errMsg}
        </p>
        <Input
          type="password"
          name="Password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          required={true}
          error={errPwd ? true : false}
        />
        <p className={errMsg === 'Incorrect password!' ? 'errmsg' : 'nothing'}>
          {errMsg}
        </p>
        <div className="login-form__checkbox">
          <Checkbox label="Remember me"></Checkbox>
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
