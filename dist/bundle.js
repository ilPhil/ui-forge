'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('react-proptypes'));

var AlertComponent = function AlertComponent(_ref) {
  var _ref$message = _ref.message,
      message = _ref$message === void 0 ? 'this is an alert' : _ref$message;
  return React.createElement("div", null, React.createElement("span", null, message));
};

AlertComponent.propTypes = {
  message: PropTypes.string
};

var Ciccio = function Ciccio() {
  return React.createElement("p", null, "Sono ciccio");
};

exports.Alert = AlertComponent;
exports.Ciccio = Ciccio;
