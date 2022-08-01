import React, { useCallback } from 'react';
import Field from '../../components/FormWrapper/components/Field';
import Logo from '../../components/ImageComponents/Logo.icon';
import FormWrapper from '../../components/FormWrapper';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import axios from '../../axios';
import FieldInput from '../../components/fields/FieldInput';
import validators from '../../validators';
import { composeValidators } from '../../validators/general';
import './SignUp.style.scss';

type SignUpFormType = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

const required = validators.general.required('This field is required');

const emailValidator = validators.general.validateEmail('Email is not valid');

const pwdSpecialChar = validators.general.passwordSpecialChar(
  'Special character (!,@,#,$,%,^,&,*) is required',
);
const pwdLowerCaseChar = validators.general.passwordLowerCaseChar(
  'One lower case letter is required',
);
const pwdUpperCaseChar = validators.general.passwordUpperCaseChar(
  'One upper case letter is required',
);
const pwdNumber = validators.general.passwordNumber('One number is required');
const pwdLenght = validators.general.passwordLenght(
  'Minimal lenght of password must be 8 characters',
);
const nameValidator = validators.general.validateName('Name is nor valid.');

const LoginPage: React.FC = () => {
  const handleSubmit = useCallback(async (values: SignUpFormType) => {
    console.log(values);
    try {
      const response = await axios.post('/users/signup', {
        email: values.email,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
      });
      console.log(response);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="softly-login">
      <Logo width="210" height="150" />
      <p> LOGIN </p>
      <FormWrapper<SignUpFormType>
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
          validate={composeValidators(
            required,
            pwdSpecialChar,
            pwdLowerCaseChar,
            pwdUpperCaseChar,
            pwdNumber,
            pwdLenght,
          )}
        />
        <Field
          name="firstName"
          component={FieldInput}
          type="text"
          label="First Name"
          validate={composeValidators(required, nameValidator)}
        />
        <Field
          name="lastName"
          component={FieldInput}
          type="text"
          label="Last Name"
          validate={composeValidators(required, nameValidator)}
        />
        <Button variant="primary" type="submit" styleType="link">
          GO
        </Button>
      </FormWrapper>
      <div className="softly-login__redirect">
        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default LoginPage;
