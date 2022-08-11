import React, { useCallback } from 'react';
import api from '../../api';
import Button from '../Button';
import FieldInput from '../fields/FieldInput';
import FormWrapper from '../FormWrapper';
import Field from '../FormWrapper/components/Field';
import './PasswordReset.style.scss';

type PasswordResetFormType = {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

const PasswordReset = () => {
  const handleSubmit = useCallback(async (values: PasswordResetFormType) => {
    try {
      const { oldPassword, newPassword, confirmNewPassword } = values;
      const response = await api.auth.passwordReset(
        oldPassword,
        newPassword,
        confirmNewPassword,
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="password-repeat">
      <p>password reset</p>
      <FormWrapper<PasswordResetFormType>
        className="password-repeat__form"
        onSubmit={handleSubmit}
      >
        <div className="password-repeat__form__fields">
          <Field
            name="oldPassword"
            component={FieldInput}
            label="Current Password"
          />
          <Field
            name="newPassword"
            component={FieldInput}
            label="New Password"
          />
          <Field
            name="confirmNewPassword"
            component={FieldInput}
            label="Repeat New Password"
          />
        </div>

        <Button variant="primary" type="submit" styleType="outline">
          CONFIRM
        </Button>
      </FormWrapper>
    </div>
  );
};

export default PasswordReset;
