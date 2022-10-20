import React from 'react';
import Button from './components/Button';
import Heading from './components/Heading';
import Input from './components/Input';
import './SellingForm.style.scss';
import LinearArrow from './components/ImageComponents/LinearArrow.icon';

const SellingForm = () => {
  return (
    <div className="login-page">
      <Heading className="login-page__heading"> Selling Form </Heading>
      <p className="login-page__text">
        We will need your details so our team can consider your submission and
        get in touch if we need more information.
      </p>
      <form className="login-page__login-form">
        <div className="login-page__login-form__row">
          <Input
            iconPosition="right"
            name="Title of Asset"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <Input
            iconPosition="right"
            name="Email"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <Input
            iconPosition="right"
            name="Postcode"
            placeholder="8888"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </div>
        <div className="login-page__login-form__row">
          <Input
            iconPosition="right"
            name="Last Name"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <Input
            iconPosition="right"
            name="Phone No."
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <Input
            iconPosition="right"
            name="Country"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </div>
        <div className="login-page__login-form__btn">
          <Button variant="primary" icon={<LinearArrow />} iconPosition="left">
            BACK
          </Button>
          <Button variant="primary" styleType="outline">
            CONTINUE
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SellingForm;
