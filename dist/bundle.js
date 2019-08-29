'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var formik = require('formik');

var getValue = function (values, statePath) {
    var inputValue = formik.getIn(values, statePath);
    return inputValue && inputValue.toString();
};
var MyCustomComponent = function (props) {
    var dataProps = props.dataProps, stateConfig = props.stateConfig, formik = props.formik;
    var values = formik.values, setFieldValue = formik.setFieldValue;
    var label = dataProps.label;
    var statePath = stateConfig.statePath;
    var value = getValue(values, statePath);
    function onChange(value) {
        var items = value.split(',').map(function (it) { return it.trim(); });
        setFieldValue(statePath, items);
    }
    return (React.createElement("div", { style: { border: '3px solid red' } },
        React.createElement("div", null,
            React.createElement("label", null,
                label,
                React.createElement("input", { type: 'text', defaultValue: value, onChange: function (event) { return onChange(event.target.value); } })))));
};
MyCustomComponent.displayName = 'MyCustomComponent';
var MyCustomComponent$1 = formik.connect(MyCustomComponent);

module.exports = MyCustomComponent$1;
