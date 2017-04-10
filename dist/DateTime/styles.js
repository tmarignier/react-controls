"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const BaseDateComponent = (props) => {
    const { className } = props;
    return React.createElement("div", { className: className, style: { marginBottom: "3px" } },
        React.createElement("input", { type: 'text', className: "form-control" }),
        React.createElement("span", { className: "input-group-addon" },
            React.createElement("span", { className: "glyphicon glyphicon-calendar" })));
};
const base = props => styled_components_1.css `
`;
const error = props => styled_components_1.css `
>input {
  border : 1px solid red;
}
`;
exports.BaseDateStyle = styled_components_1.default(BaseDateComponent) `
${(props) => base(props)}
${(props) => props.hasError ? error(props) : styled_components_1.css ``}
`;
class UpDateTimeStyle extends React.Component {
    render() {
        const _a = this.props, { children } = _a, rest = __rest(_a, ["children"]);
        return (React.createElement(exports.BaseDateStyle, Object.assign({}, rest), children));
    }
}
UpDateTimeStyle.defaultProps = {
    hasError: false,
    onChange: (value) => { },
    isNuallble: false,
};
exports.default = UpDateTimeStyle;
//# sourceMappingURL=styles.js.map