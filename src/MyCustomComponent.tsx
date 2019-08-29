import React from 'react';
import {connect, FormikContext, getIn} from 'formik';

type UserInputFormState = {
  [key: string]: string
}

interface FormikPartProps {
  formik: FormikContext<UserInputFormState>;
}

type OuterProps = {
  dataProps: {
    label: string,
  }
  stateConfig: {
    statePath: string
  }
};

type Props = OuterProps & FormikPartProps;

const getValue = (values: UserInputFormState, statePath: string): string => {
  const inputValue = getIn(values, statePath);
  return inputValue && inputValue.toString();
};

const MyCustomComponent: React.FunctionComponent<Props> = (props): JSX.Element => {
  const {dataProps, stateConfig, formik} = props;
  const {values, setFieldValue} = formik;

  const {label} = dataProps;
  const {statePath} = stateConfig;

  const value = getValue(values, statePath);

  function onChange(value: string): void {
    const items = value.split(',').map(it => it.trim());
    setFieldValue(statePath, items);
  }

  return (
    <div style={{border: '3px solid red'}}>
      <div>
        <label>{label}
          <input type='text' defaultValue={value} onChange={event => onChange(event.target.value)}/>
        </label>
      </div>
    </div>
  );
};

MyCustomComponent.displayName = 'MyCustomComponent';

export default connect<OuterProps>(MyCustomComponent);
