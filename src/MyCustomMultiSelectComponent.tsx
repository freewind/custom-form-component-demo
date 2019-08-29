import React from 'react';
import {connect, FormikContext, getIn} from 'formik';

import './MyCustomMultiSelectComponent.pcss';

type UserInputFormState = {
  [key: string]: string
}

interface FormikPartProps {
  formik: FormikContext<UserInputFormState>;
}

type OuterProps = {
  dataProps: {
    legend: string,
    options: { label: string, value: string }[]
  }
  stateConfig: {
    statePath: string
  }
};

type Props = OuterProps & FormikPartProps;

const getValues = (values: UserInputFormState, statePath: string): string[] => {
  const inputValue = getIn(values, statePath);
  return inputValue || [];
};

const MyCustomMultiSelectComponent: React.FunctionComponent<Props> = (props): JSX.Element => {
  console.log("### MyCustomMultiSelectComponent.props", props);
  const {dataProps, stateConfig, formik} = props;
  const {values, setFieldValue} = formik;

  const {legend, options} = dataProps;
  const {statePath} = stateConfig;

  const initValues = getValues(values, statePath);
  console.log("### initValues", initValues);

  function onChange(selectedOptions: HTMLCollectionOf<HTMLOptionElement>): void {
    const selectedValues = Array.from(selectedOptions).map(it => it.value)
    setFieldValue(statePath, selectedValues);
  }

  return (
    <div className='MyCustomMultiSelectComponent--root'>
      <label>
        <div className='legend'>{legend}</div>
        <div className='body'>
          <img
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAuRJREFUeNrslUtrWlEQx8f3G218RCmpIohCgguNjRCQxEpbkEDSLPsF2nwBF+2ym2y6KJSWfAehkIB9mE1WihGMbUAjgulGbKJGYnxrMnPwSlq82WXXAxfuvd75nf/8Z+YouL6+hvtYQrindW9g8e2HSCQyuSeLOp3OgsFgeGo0Gt0qleoRvW82m7/Pz8+zeH2Xy+W/BALBJGZ7e3s6mFuDwUCOoNfLy8ubVqtV3mq1YDQaAUHEYvGCTCZbOD09fZFOp6NXV1ef8F3nTsVjqAyh78Lh8MpwOIT9/X24uLgAiURCUJBKpaDRaGBpaUlusVhe7u7uPsSN3+BvXV4wqhIplcotgpbLZUgkEmAymSAYDML8/DyDnp2dQSaTgXg8Dj6fD9bW1lYQvoW2fUDEcGrxut2uc3FxcQNVMyilbrPZYHV1FWZmZkAkEoHD4YD19XWYnZ2Fo6MjwOzA6/VuUCxvV2Dwk7m5OWUqlQKhUMgUnpycQCwWg52dHYhGo1Q8ZgtlQiufz9NmSr1e/5wXbDab/b1eD2q1GvOTFJL6ZDIJWEQIBAKgVqupW5glWERoNBosM9zoMa/HCoXC1O/3geB4z1QTnFrP6XSC3W6HYrHIPL68vGQZ0cYExtpY7uwK+ogugnJges5ms1CpVCCXy0G73Z5sfKvwfV4wBvxBFQ+oIMyncaBOp2MgAuJQALUhtzHZMY6t8HqMipKUHk4aS5/UcuBQKMQurAMbltub0jN6nuYFV6vVeKlUank8Hla88aQBTd7h4SHgpE2GhbOJ2q9QKLQw9isvGNPKY/AXUoD9PPGbwASl7qjX65NMXC4Xe6YYtCjPC0YVQ4R83NvbO9BqtSx1GgSyh1NInuLBBH6/n9mFU3dAMShgeGdX0Mzjh28x4BWq3nS73TIqFkEJzvl7fHzcpUMIv/387znBe7rhhy0c0fd4AP3AsX2GCv86NtFPOja/Yfo/qQbTluD/XxO3bgQYAEyyWhLmUJnTAAAAAElFTkSuQmCC'
          />
          <select multiple={true} onChange={event => onChange(event.target.selectedOptions)}
                  defaultValue={initValues}
                  className={`${getValues(values, statePath).length ? 'has-selection' : ''}`}
          >
            {options.map(({label, value}) => {
              return <option key={value} value={value}>{label}</option>
            })}
          </select>
        </div>
      </label>
    </div>
  );
};

MyCustomMultiSelectComponent.displayName = 'MyCustomMultiSelectComponent';

export default connect<OuterProps>(MyCustomMultiSelectComponent);
