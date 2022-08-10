import React from 'react';
import './Wallet.style.scss';
import Heading from '../../components/Heading';
import Button from '../../components/Button';

const Wallet = () => {
  return (
    <div className="wallet">
      <div>
        <Heading>Wallet</Heading>
        <Button variant="primary" styleType="fill"></Button>
        <div className="wallet__add-btn">
          <Button variant="add">+</Button>Add Wallet
        </div>
      </div>
      <div className="wallet__balance">
        <p>balance</p>
        <div className="wallet__balance-amount"> $200 </div>
      </div>
    </div>
  );
};

export default Wallet;
