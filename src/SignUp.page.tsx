import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import Logo from './components/ImageComponents/Logo.icon';
import Input from './components/Input';
import './SignUp.style.scss';
import axios from './axios';
import ErrorIcon from './icons/Error.icon';

// eslint-disable-next-line no-useless-escape
const USER_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX = /^(?=.*[a-z]).{6,24}$/;
const FIRST_NAME_REGEX = /^[A-Z]+([a-z])/;

type ErrMsg = {
  email?: string;
  password?: string;
  repeatPassword?: string;
  firstName?: string;
  lastName?: string;
};

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);

  const [success, setSuccess] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({
    email: '',
    pwd: '',
    matchPwd: '',
    firstName: '',
    lastName: '',
  });

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

  useEffect(() => {
    setErrors((oldErrors) => {
      return {
        ...oldErrors,
        pwd: oldErrors.pwd,
        matchPwd: oldErrors.matchPwd,
        firstName: oldErrors.firstName,
        lastName: oldErrors.lastName,
      };
    });
  }, [email]);

  useEffect(() => {
    setErrors({
      email: errors.email,
      pwd: '',
      matchPwd: errors.matchPwd,
      firstName: errors.firstName,
      lastName: errors.lastName,
    });
  }, [pwd]);

  useEffect(() => {
    setErrors({
      email: errors.email,
      pwd: errors.pwd,
      matchPwd: '',
      firstName: errors.firstName,
      lastName: errors.lastName,
    });
  }, [matchPwd]);

  useEffect(() => {
    setErrors({
      email: errors.email,
      pwd: errors.pwd,
      matchPwd: '',
      firstName: '',
      lastName: errors.lastName,
    });
  }, [firstName]);

  useEffect(() => {
    setErrors({
      email: errors.email,
      pwd: errors.pwd,
      matchPwd: '',
      firstName: errors.firstName,
      lastName: '',
    });
  }, [lastName]);

  const validation = (props: any) => {
    let errors: ErrMsg = {};

    if (!props.email) {
      errors.email = 'Email is required.';
    } else if (!validEmail) {
      errors.email = 'Invalid form of the email.';
    }
    if (!props.pwd) {
      errors.password = 'Password is required.';
    } else if (!validPwd) {
      errors.password = 'Password must contain minimum 6 characters';
    }
    if (!props.matchPwd) {
      errors.repeatPassword = 'Password is required.';
    } else if (!validMatch) {
      errors.repeatPassword = 'Password must match the one entered above.';
    }
    if (!props.firstName) {
      errors.firstName = 'Name is required.';
    } else if (!FIRST_NAME_REGEX.test(props.firstName)) {
      errors.firstName =
        'Name must start with the capital letter and should have minumun 2 letters.';
    }
    if (!props.lastName) {
      errors.lastName = 'Last name is required.';
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const err: ErrMsg = validation({
      email,
      pwd,
      matchPwd,
      firstName,
      lastName,
    });
    setErrors({
      email: err.email,
      pwd: err.password,
      matchPwd: err.repeatPassword,
      firstName: err.firstName,
      lastName: err.lastName,
    });
    try {
      const response = await axios.post(
        '/users/signup',
        JSON.stringify({
          email: email,
          password: pwd,
          firstName: firstName,
          lastName: lastName,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );
      console.log(response);
      console.log(response.data);
      const id = response.data.id;
      console.log(id);
      localStorage.setItem('id', id);
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
              value={firstName}
              name="firstName"
              type="text"
              label="First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              error={errors.firstName ? true : false}
              icon={
                errors.firstName ? <ErrorIcon height="24" width="24" /> : false
              }
              iconPosition="right"
            />
            {errors.firstName && (
              <p className="sign-up__form__err-msg">{errors.firstName}</p>
            )}
            <Input
              value={lastName}
              name="lastName"
              type="text"
              label="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              error={errors.lastName ? true : false}
              icon={
                errors.lastName ? <ErrorIcon height="24" width="24" /> : false
              }
              iconPosition="right"
            />
            {errors.lastName && (
              <p className="sign-up__form__err-msg">{errors.lastName}</p>
            )}
            <Input
              value={email}
              name="email"
              type="text"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email ? true : false}
              icon={errors.email ? <ErrorIcon height="24" width="24" /> : false}
              iconPosition="right"
              errorMessage={errors.email}
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
            {/* <Input
              value={matchPwd}
              name="repeatPassword"
              type="password"
              label="Repeat Password"
              onChange={(e) => setMatchPwd(e.target.value)}
              error={errors.matchPwd ? true : false}
              icon={
                errors.matchPwd ? <ErrorIcon height="24" width="24" /> : false
              }
              iconPosition="right"
            />
            {errors.matchPwd && (
              <p className="sign-up__form__err-msg">{errors.matchPwd}</p>
            )} */}
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
