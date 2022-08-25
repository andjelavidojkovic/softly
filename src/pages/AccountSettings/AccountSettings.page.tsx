import React, { useContext } from 'react';
import Heading from '../../components/Heading';
import ImageUpload from '../../components/ImageUpload';
import PasswordReset from '../../components/PasswordReset';
import UserSettings from '../../components/UserSettings';
import LoginContext, {
  LoginContextProps,
} from '../../providers/General/Login.context';
import './AccountSettings.style.scss';

const AccountSettings = () => {
  const {
    user: { id },
  }: LoginContextProps = useContext(LoginContext);

  return (
    <div className="account-settings">
      <Heading className="account-settings__titles">Account Settings</Heading>
      <UserSettings id={id} />
      <div className="account-settings__col2">
        <PasswordReset />
        <ImageUpload />
      </div>
      <p>kyc status</p>
    </div>
  );
};

export default AccountSettings;
