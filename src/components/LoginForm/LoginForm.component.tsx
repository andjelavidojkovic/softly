import React, { useState, useEffect } from 'react';
import Input from '../Input';
import Checkbox from '../Checkbox';
import Button from '../Button';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.style.scss';
import axios from '../../axios';
// import utils from '../../utils';
import ErrorIcon from '../../icons/Error.icon';

type ErrMsg = {
  email?: string;
  password?: string;
};

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [formErrors, setFormErrors] = useState({ email: '', password: '' });
  // const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const err: ErrMsg = validate({ email, pwd });
    setFormErrors({ email: err.email, password: err.password });
    // setIsSubmit(true);
    console.log({ email, pwd });
    try {
      const response = await axios.post(
        '/users/signin',
        JSON.stringify({
          email: email,
          password: pwd,
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

  useEffect(() => {
    setFormErrors({ email: '', password: formErrors.password });
  }, [email]);

  useEffect(() => {
    setFormErrors({ email: formErrors.email, password: '' });
  }, [pwd]);

  const validate = (values: any) => {
    const errors: ErrMsg = {};
    // eslint-disable-next-line no-useless-escape
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regexEmail.test(values.email)) {
      errors.email = 'This is not a valid email format';
    }
    if (!values.pwd) {
      errors.password = 'Password is required!';
    } else if (values.pwd.length < 6) {
      errors.password = 'Password must be more that 6 characters';
    }
    console.log(formErrors);
    return errors;
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          error={formErrors.email ? true : false}
        />
        {formErrors.email ? (
          <span className="login-form__err-msg">
            <ErrorIcon height="24" width="24" />
            {formErrors.email}
          </span>
        ) : (
          <span></span>
        )}
        <Input
          type="password"
          label="Password"
          onChange={(e) => setPwd(e.target.value)}
          error={formErrors.password ? true : false}
        />
        {formErrors.password ? (
          <span className="login-form__err-msg">
            <ErrorIcon height="24" width="24" />
            {formErrors.password}
          </span>
        ) : (
          <span></span>
        )}

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
