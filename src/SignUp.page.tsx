import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import Logo from './components/ImageComponents/Logo.icon';
import Input from './components/Input';
import './SignUp.style.scss';
import axios from './axios';
import ErrorIcon from './icons/Error.icon';

const USER_REGEX = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
const PWD_REGEX = /^(?=.*[a-z]).{6,24}$/;

type ErrMsg = {
  email?: string;
  password?: string;
  repeatPassword?: string;
};

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);

  const [success, setSuccess] = useState(false);

  const [errors, setErrors] = useState({ email: '', pwd: '', matchPwd: '' });

  useEffect(() => {
    const result = USER_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  const validation = (props: any) => {
    let errors: ErrMsg = {};

    if (!props.email) {
      errors.email = 'Email is required.';
    } else if (!USER_REGEX.test(props.email)) {
      errors.email = 'Invalid form of the email.';
    }
    if (!props.pwd) {
      errors.password = 'Password is required.';
    } else if (!PWD_REGEX.test(props.pwd)) {
      errors.password = 'Password must contain minimum 6 characters';
    }
    if (!props.matchPwd) {
      errors.repeatPassword = 'Password is required.';
    } else if (!validMatch) {
      errors.repeatPassword = 'Password must match the one entered above.';
    }
    return errors;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const err: ErrMsg = validation({ email, pwd, matchPwd });
    setErrors({
      email: err.email,
      pwd: err.password,
      matchPwd: err.repeatPassword,
    });
    try {
      const response = await axios.post(
        '/users/signup',
        JSON.stringify({ email: email, password: pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );
      console.log(response);
      console.log(response.data);
      setSuccess(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1> Success </h1>
          <Link to="/login">Sign In</Link>
        </section>
      ) : (
        <div className="sign-up">
          <Logo width="210" height="150" />
          <p> CREATE </p>
          <form className="sign-up__form" onSubmit={handleSubmit}>
            <Input
              value={email}
              name="email"
              type="text"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email ? true : false}
              icon={errors.pwd ? <ErrorIcon height="24" width="24" /> : false}
              iconPosition="right"
            />
            {errors.email && (
              <p className="sign-up__form__err-msg">{errors.email}</p>
            )}
            <Input
              value={pwd}
              name="password"
              type="password"
              label="Password"
              onChange={(e) => setPwd(e.target.value)}
              error={errors.pwd ? true : false}
              icon={errors.pwd ? <ErrorIcon height="24" width="24" /> : false}
              iconPosition="right"
            />
            {errors.pwd && (
              <p className="sign-up__form__err-msg">{errors.pwd}</p>
            )}
            <Input
              value={matchPwd}
              name="repeat-password"
              type="password"
              label="Repeat Password"
              onChange={(e) => setMatchPwd(e.target.value)}
              error={errors.matchPwd ? true : false}
              icon={errors.pwd ? <ErrorIcon height="24" width="24" /> : false}
              iconPosition="right"
            />
            {errors.matchPwd && (
              <p className="sign-up__form__err-msg">{errors.matchPwd}</p>
            )}
            <div className="sign-up__form__checkbox">
              <Checkbox
                label={
                  <span>
                    I hereby confirm that I have read and agree to the{' '}
                    <span className="bold">
                      Terms&Conditions and Privacy Policy
                    </span>{' '}
                    of Softly.
                  </span>
                }
                className="sign-up-form"
              />
            </div>
            <div className="sign-up__form__btn">
              <Button
                variant="primary"
                styleType="outline"
                // disabled={
                //   !validEmail || !validPwd || !validMatch ? true : false
                // }
              >
                GO
              </Button>
            </div>
            <div className="sign-up__login">
              <p>Already have an account?</p>
              <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default SignUp;
