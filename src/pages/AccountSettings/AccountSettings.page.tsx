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
  console.log(id);

  return (
    <div className="account-settings">
      <Heading>Account Settings</Heading>
      <UserSettings id={id} />
      <PasswordReset />
      <ImageUpload />
    </div>
  );
};

export default AccountSettings;
