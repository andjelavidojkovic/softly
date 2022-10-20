import React from 'react';
import './AccountForms.style.scss';
import Logo from '../ImageComponents/Logo.icon';
import Input from '../Input';
import Checkbox from '../Checkbox';
import Button from '../Button';
import { Link } from 'react-router-dom';

type AccountFormsProps = {
  className?: string;
  heading: string;
};

const createPageCheckbox =
  'I hereby confirm that I have read and agree to the Terms&Conditions and Privacy Policy of Softly.';

const AccountForms: React.FC<AccountFormsProps> = (props) => {
  const { heading } = props;

  return (
    <div className="account-forms">
      <Logo width="210" height="150" />
      <p> {heading} </p>
      <form className="account-forms__form">
        <Input type="email" name="Email" />
        <Input type="password" name="Password" />
        <Input type="password" name="Repeat Password" />
        <div className="account-forms__form__checkbox">
          <Checkbox title={createPageCheckbox} />
        </div>
        <div className="account-forms__form__btn">
          <Button variant="primary" styleType="outline">
            GO
          </Button>
        </div>
        <div className="account-forms__login">
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default AccountForms;
