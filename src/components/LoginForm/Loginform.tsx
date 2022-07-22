import React, { useState, useEffect } from 'react';
import Input from '../Input';
import Checkbox from '../Checkbox';
import Button from '../Button';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.style.scss';
import axios from '../../axios';
import utils from '../../utils';
// import { AxiosError } from 'axios';

const Loginform = () => {
  const initialValues = { email: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);

  const navigate = useNavigate();

  //   const [email, setEmail] = useState('');
  //   const [pwd, setPwd] = useState('');
  //   const [errMsg, setErrMsg] = useState('');
  //   const [errEmail, setErrEmail] = useState(false);
  //   const [errPwd, setErrPwd] = useState(false);
  //   const [blankEmail, setBlankEmail] = useState('');
  //   const [blankPwd, setBlankPwd] = useState('');

  //   useEffect(() => {
  //     setErrMsg('');
  //     setErrEmail(false);
  //     setErrPwd(false);
  //   }, [email, pwd]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // console.log({ email, pwd });
    try {
      const response = await axios.post(
        '/users/signin',
        JSON.stringify({
          email: formValues.email,
          password: formValues.password,
        }),
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
    }
  };

  const handleChange = (e: any) => {
    console.log(e.target);
    const { name, value } = e.target;
    // setFormValues({ ...formValues, name: value });
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="Email"
          value={formValues.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="Password"
          value={formValues.password}
          onChange={handleChange}
        />
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

export default Loginform;
