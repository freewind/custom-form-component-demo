'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var formik = require('formik');

var getValue = function (values, statePath) {
    var inputValue = formik.getIn(values, statePath);
    return inputValue && inputValue.toString();
};
var MyCustomComponent = function (props) {
    var dataProps = props.dataProps, stateProps = props.stateProps, formik = props.formik;
    var values = formik.values, setFieldValue = formik.setFieldValue;
    var label = dataProps.label;
    var statePath = stateProps.statePath;
    var value = getValue(values, statePath);
    function onChange(value) {
        setFieldValue(statePath, value);
    }
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement("label", null,
                label,
                React.createElement("input", { type: 'text', value: value, onChange: function (event) { return onChange(event.target.value); } }))),
        React.createElement("div", null,
            React.createElement("label", null,
                React.createElement("input", { type: 'radio', checked: true }),
                "Or"),
            React.createElement("label", null,
                React.createElement("input", { type: 'radio' }),
                "Not"))));
};
MyCustomComponent.displayName = 'MyCustomComponent';
var MyCustomComponent$1 = formik.connect(MyCustomComponent);

module.exports = MyCustomComponent$1;
