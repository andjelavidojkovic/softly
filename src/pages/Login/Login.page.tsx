import React, { useCallback, useState } from 'react';
import Button from '../../components/Button';
import FieldInput from '../../components/fields/FieldInput';
import FormWrapper from '../../components/FormWrapper';
import Field from '../../components/FormWrapper/components/Field';
import validators from '../../validators';
import axios from '../../axios';
import Logo from '../../components/ImageComponents/Logo.icon';

import './Login.styles.scss';
import { Link } from 'react-router-dom';
import { AxiosError } from 'axios';
import utils from '../../utils';
import Toast from '../../components/Toast';

type LoginFormType = {
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const [errorMessageFromServer, setErrorMessageFromServer] = useState('');

  const handleSubmit = useCallback(async (values: LoginFormType) => {
    console.log(values);
    try {
      const response = await axios.post('/users/signin', {
        email: values.email,
        password: values.password,
      });
      console.log(response);
      const accessToken = response.data.accessToken;
      console.log(accessToken);
      localStorage.setItem('token', accessToken);
    } catch (error) {
      console.log(error);
      setErrorMessageFromServer(utils.getStringError(error as AxiosError));
      const errorMessage = utils.getStringError(error as AxiosError);
      console.log(errorMessage);
    }
  }, []);

  return (
    <div className="softly-login">
      {errorMessageFromServer && (
        <Toast message={errorMessageFromServer} type="error"></Toast>
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
          validate={
            // validators.general.emptyInput() &&
            validators.general.validateEmail('Email is not valid')
          }
        />
        <Field
          name="password"
          component={FieldInput}
          type="password"
          label="Password"
          // validate={
          //   validators.general.emptyInput() &&
          //   validators.general.validatePassword('Password is not valid')
          // }
        />
        <Button variant="primary" type="submit" styleType="link">
          GO
        </Button>
      </FormWrapper>
      {/* <Toast message="error" type="error"></Toast> */}
      <div className="softly-login__redirect">
        <p>Don't have an account yet?</p>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default LoginPage;
