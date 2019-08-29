'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var formik = require('formik');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".MyCustomMultiSelectComponent--root {\n\n  .legend {\n    font-family: latoRegular, verdana, sans-serif;\n    font-size: 13px;\n    font-weight: 400;\n  }\n\n  .body {\n\n    display: flex;\n    align-items: start;\n\n    img {\n    }\n\n    select {\n      font-family: verdana, sans-serif;\n      font-size: 11px;\n      font-stretch: 100%;\n\n      &.has-selection {\n        background-color: rgb(211, 226, 249);\n      }\n\n      option {\n        font-family: Arial;\n        font-size: 13px;\n        font-stretch: 100%;\n      }\n    }\n  }\n\n}\n";
styleInject(css);

var getValues = function (values, statePath) {
    var inputValue = formik.getIn(values, statePath);
    return inputValue || [];
};
var MyCustomMultiSelectComponent = function (props) {
    console.log("### MyCustomMultiSelectComponent.props", props);
    var dataProps = props.dataProps, stateConfig = props.stateConfig, formik = props.formik;
    var values = formik.values, setFieldValue = formik.setFieldValue;
    var legend = dataProps.legend, options = dataProps.options;
    var statePath = stateConfig.statePath;
    var initValues = getValues(values, statePath);
    console.log("### initValues", initValues);
    function onChange(selectedOptions) {
        var selectedValues = Array.from(selectedOptions).map(function (it) { return it.value; });
        setFieldValue(statePath, selectedValues);
    }
    return (React.createElement("div", { className: 'MyCustomMultiSelectComponent--root' },
        React.createElement("label", null,
            React.createElement("div", { className: 'legend' }, legend),
            React.createElement("div", { className: 'body' },
                React.createElement("img", { src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAuRJREFUeNrslUtrWlEQx8f3G218RCmpIohCgguNjRCQxEpbkEDSLPsF2nwBF+2ym2y6KJSWfAehkIB9mE1WihGMbUAjgulGbKJGYnxrMnPwSlq82WXXAxfuvd75nf/8Z+YouL6+hvtYQrindW9g8e2HSCQyuSeLOp3OgsFgeGo0Gt0qleoRvW82m7/Pz8+zeH2Xy+W/BALBJGZ7e3s6mFuDwUCOoNfLy8ubVqtV3mq1YDQaAUHEYvGCTCZbOD09fZFOp6NXV1ef8F3nTsVjqAyh78Lh8MpwOIT9/X24uLgAiURCUJBKpaDRaGBpaUlusVhe7u7uPsSN3+BvXV4wqhIplcotgpbLZUgkEmAymSAYDML8/DyDnp2dQSaTgXg8Dj6fD9bW1lYQvoW2fUDEcGrxut2uc3FxcQNVMyilbrPZYHV1FWZmZkAkEoHD4YD19XWYnZ2Fo6MjwOzA6/VuUCxvV2Dwk7m5OWUqlQKhUMgUnpycQCwWg52dHYhGo1Q8ZgtlQiufz9NmSr1e/5wXbDab/b1eD2q1GvOTFJL6ZDIJWEQIBAKgVqupW5glWERoNBosM9zoMa/HCoXC1O/3geB4z1QTnFrP6XSC3W6HYrHIPL68vGQZ0cYExtpY7uwK+ogugnJges5ms1CpVCCXy0G73Z5sfKvwfV4wBvxBFQ+oIMyncaBOp2MgAuJQALUhtzHZMY6t8HqMipKUHk4aS5/UcuBQKMQurAMbltub0jN6nuYFV6vVeKlUank8Hla88aQBTd7h4SHgpE2GhbOJ2q9QKLQw9isvGNPKY/AXUoD9PPGbwASl7qjX65NMXC4Xe6YYtCjPC0YVQ4R83NvbO9BqtSx1GgSyh1NInuLBBH6/n9mFU3dAMShgeGdX0Mzjh28x4BWq3nS73TIqFkEJzvl7fHzcpUMIv/387znBe7rhhy0c0fd4AP3AsX2GCv86NtFPOja/Yfo/qQbTluD/XxO3bgQYAEyyWhLmUJnTAAAAAElFTkSuQmCC' }),
                React.createElement("select", { multiple: true, onChange: function (event) { return onChange(event.target.selectedOptions); }, defaultValue: initValues, className: "" + (getValues(values, statePath).length ? 'has-selection' : '') }, options.map(function (_a) {
                    var label = _a.label, value = _a.value;
                    return React.createElement("option", { key: value, value: value }, label);
                }))))));
};
MyCustomMultiSelectComponent.displayName = 'MyCustomMultiSelectComponent';
var MyCustomMultiSelectComponent$1 = formik.connect(MyCustomMultiSelectComponent);

module.exports = MyCustomMultiSelectComponent$1;
