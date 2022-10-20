import React, { useMemo } from 'react';
import { FieldRenderProps } from '../../FormWrapper/components/Field/Field.components';

import Input from '../../Input';
import './FieldInput.styles.scss';
import ErrorIcon from '../../../icons/Error.icon';

type GetComponentProps<T> = T extends React.FC<infer P> ? P : never;

type FieldInputProps = GetComponentProps<typeof Input> &
  FieldRenderProps<string, HTMLInputElement>;

const FieldInput: React.FC<FieldInputProps> = (props) => {
  const {
    input: { onChange, value },
    meta: { error, touched },
    ...rest
  } = props;

  const hasError = useMemo(() => error && touched, [error, touched]);

  return (
    <Input
      {...rest}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      errorMessage={error}
      error={hasError}
      icon={<ErrorIcon width="24" height="24" />}
      iconPosition="right"
    />
  );
};

export default FieldInput;
