import React from 'react';
import Heading from '../../components/Heading';
import Select from '../../components/Select';
import './AccountSettings.style.scss';

const options = [
  {
    value: 'serbia',
    label: 'Serbia',
  },
  {
    value: 'turkey',
    label: 'Turkey',
  },
  {
    value: 'spain',
    label: 'Spain',
  },
  {
    value: 'russia',
    label: 'Russia',
  },
  {
    value: 'norway',
    label: 'Norway',
  },
];

const AccountSettings = () => {
  return (
    <div className="account-settings">
      <Heading>Account Settings</Heading>
      <p className="account-settings__subtitle">info</p>
      <Select label="Country" options={options} />
      <div>
        <h3>profile photo</h3>
      </div>
    </div>
  );
};

export default AccountSettings;
