import React, { useCallback, useContext, useState } from 'react';
import Button from '../../components/Button';
import FieldInput from '../../components/fields/FieldInput';
import FormWrapper from '../../components/FormWrapper';
import Field from '../../components/FormWrapper/components/Field';
import validators from '../../validators';
import axios from '../../axios';
import Logo from '../../components/ImageComponents/Logo.icon';

import './Login.styles.scss';
import { Link, useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import utils from '../../utils';
import Toast from '../../components/Toast';
import { composeValidators } from '../../validators/general';
import api from '../../api';
import { User } from '../../models/User';
import LoginContext from '../../providers/General/Login.context';

type LoginFormType = {
  email: string;
  password: string;
};

const required = validators.general.required('This field is required');
const emailValidator = validators.general.validateEmail('Email is not valid');
const passwordValidator = validators.general.validatePassword(
  'Password is not valid',
);

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const { setUser } = useContext(LoginContext);

  const [errorMessageFromServer, setErrorMessageFromServer] = useState('');

  const handleSubmit = useCallback(
    async (values: LoginFormType) => {
      try {
        const { email, password } = values;

        const {
          data: { accessToken, user },
        } = await api.auth.login(email, password);

        setUser(user);

        localStorage.setItem('token', accessToken);
        localStorage.setItem('user', JSON.stringify(user));
        navigate({ pathname: '/' });
      } catch (error) {
        console.log(error);
        setErrorMessageFromServer(utils.getStringError(error as AxiosError));
      }
    },
    [navigate, setUser],
  );

  console.log(errorMessageFromServer);

  return (
    <div className="softly-login">
      {errorMessageFromServer && (
        <Toast
          message={errorMessageFromServer}
          type="error"
          position="top"
          onClose={() => setErrorMessageFromServer(null)}
        ></Toast>
      )}
      <Logo width="210" height="150" />
      <p> LOGIN </p>
      <FormWrapper<LoginFormType>
        className="softly-login__form"
        onSubmit={handleSubmit}
      >
        <Field
          name="email"
          component={FieldInput}
          label="Email"
          validate={composeValidators(required, emailValidator)}
        />
        <Field
          name="password"
          component={FieldInput}
          type="password"
          label="Password"
          validate={composeValidators(required, passwordValidator)}
        />
        <Button variant="primary" type="submit" styleType="link">
          GO
        </Button>
      </FormWrapper>
      <div className="softly-login__redirect">
        <p>Don't have an account yet?</p>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default LoginPage;
