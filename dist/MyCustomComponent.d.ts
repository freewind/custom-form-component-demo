import React from 'react';
import { FormikContext } from 'formik';
declare type UserInputFormState = {
    [key: string]: string;
};
interface FormikPartProps {
    formik: FormikContext<UserInputFormState>;
}
declare type OuterProps = {
    dataProps: {
        label: string;
    };
    stateProps: {
        statePath: string;
    };
};
declare type Props = OuterProps & FormikPartProps;
export declare const MyCustomComponent: React.FunctionComponent<Props>;
declare const _default: React.ComponentType<OuterProps>;
export default _default;
