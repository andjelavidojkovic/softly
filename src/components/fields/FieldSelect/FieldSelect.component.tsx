import React from 'react';
import { FieldRenderProps } from '../../FormWrapper/components/Field/Field.components';

import Select from '../../Select';
import './FieldSelect.style.scss';

type GetComponentProps<T> = T extends React.FC<infer P> ? P : never;

type FieldSelectProps = GetComponentProps<typeof Select> &
  FieldRenderProps<string, HTMLInputElement>;

const FieldSelect: React.FC<FieldSelectProps> = (props) => {
  const {
    input: { onChange, value },
    ...rest
  } = props;

  return (
    <Select
      {...rest}
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />
  );
};

export default FieldSelect;
