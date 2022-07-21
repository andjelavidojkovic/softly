import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import Logo from './components/ImageComponents/Logo.icon';
import Input from './components/Input';
import './SignUp.style.scss';
import axios from './axios';

const USER_REGEX = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
const PWD_REGEX = /^(?=.*[a-z]).{6,24}$/;

const REGISTER_URL = '/users/signup';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);

  const [success, setSuccess] = useState(false);

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // axios
    //   .post('https://reqres.in/api/register', {
    //     email: email,
    //     password: pwd,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     console.log(response.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     console.log(err.message);
    //   });
    try {
      const response = await axios.post(
        REGISTER_URL,
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
              type="email"
              name="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              name="Password"
              onChange={(e) => setPwd(e.target.value)}
            />
            <Input
              type="password"
              name="Repeat Password"
              onChange={(e) => setMatchPwd(e.target.value)}
            />
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
                disabled={
                  !validEmail || !validPwd || !validMatch ? true : false
                }
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
