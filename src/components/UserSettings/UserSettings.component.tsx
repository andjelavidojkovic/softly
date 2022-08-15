import React, { useCallback, useState } from 'react';
import api from '../../api';
import VectorArrow from '../../icons/VectorArrow.icon';
import Button from '../Button';
import FieldInput from '../fields/FieldInput';
import FieldSelect from '../fields/FieldSelect';
import FormWrapper from '../FormWrapper';
import Field from '../FormWrapper/components/Field';
import './UserSettings.style.scss';

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

type UserSettingsFormType = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  postCode: string;
  country: string;
};

type UserSettingsProps = {
  id: string;
};

const UserSettings: React.FC<UserSettingsProps> = (props) => {
  const { id } = props;
  const handleSubmit = useCallback(
    async (values: UserSettingsFormType) => {
      try {
        const { firstName, lastName, email, phoneNumber, postCode, country } =
          values;
        const response = await api.auth.userSetup(
          id,
          email,
          firstName,
          lastName,
          phoneNumber,
          postCode,
          country,
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    [id],
  );

  const [selected, setSelected] = useState('');

  return (
    <div className="user-settings">
      <p>info</p>
      <FormWrapper<UserSettingsFormType>
        className="user-settings__form"
        onSubmit={handleSubmit}
      >
        <div className="user-settings__form__field">
          <div className="user-settings__form__field__col">
            <Field name="firstName" component={FieldInput} label="First Name" />
            <Field name="lastName" component={FieldInput} label="Last Name" />
            <Field name="email" component={FieldInput} label="Email" />
          </div>
          <div className="user-settings__form__field__col">
            <Field
              name="phoneNumber"
              component={FieldInput}
              label="Phone No."
            />
            <Field
              name="postcode"
              component={FieldInput}
              label="Postcode"
              placeholder="8888"
            />
            <Field
              name="country"
              component={FieldSelect}
              label="Country"
              options={options}
              selected={selected}
              setSelected={setSelected}
              icon={<VectorArrow />}
              iconPosition="right"
            />
          </div>
        </div>

        <Button variant="primary" type="submit" styleType="outline">
          EDIT
        </Button>
      </FormWrapper>
    </div>
  );
};

export default UserSettings;
