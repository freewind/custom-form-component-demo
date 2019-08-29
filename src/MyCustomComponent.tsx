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
  stateProps: {
    statePath: string
  }
};

type Props = OuterProps & FormikPartProps;

const getValue = (values: UserInputFormState, statePath: string): string => {
  const inputValue = getIn(values, statePath);
  return inputValue && inputValue.toString();
};

const MyCustomComponent: React.FunctionComponent<Props> = (props): JSX.Element => {
  const {dataProps, stateProps, formik} = props;
  const {values, setFieldValue} = formik;

  const {label} = dataProps;
  const {statePath} = stateProps;

  const value = getValue(values, statePath);

  function onChange(value: string): void {
    setFieldValue(statePath, value);
  }

  return (
    <div>
      <div>
        <label>{label}
          <input type='text' value={value} onChange={event => onChange(event.target.value)}/>
        </label>
      </div>
      <div>
        <label><input type='radio' checked={true}/>Or</label>
        <label><input type='radio'/>Not</label>
      </div>
    </div>
  );
};

MyCustomComponent.displayName = 'MyCustomComponent';

export default connect<OuterProps>(MyCustomComponent);
