'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FadeThroughChild = require('./FadeThroughChild');

var _FadeThroughChild2 = _interopRequireDefault(_FadeThroughChild);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FadeThroughComponent = function (_Component) {
  _inherits(FadeThroughComponent, _Component);

  function FadeThroughComponent() {
    _classCallCheck(this, FadeThroughComponent);

    return _possibleConstructorReturn(this, (FadeThroughComponent.__proto__ || Object.getPrototypeOf(FadeThroughComponent)).apply(this, arguments));
  }

  _createClass(FadeThroughComponent, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var inactiveStyle = {
        position: 'absolute',
        transition: 'opacity 3s',
        opacity: '0'
      };

      var activeStyle = {
        position: 'absolute',
        transition: 'opacity 3s',
        opacity: '1'
      };

      return _react2.default.createElement(
        'div',
        null,
        this.props.children.map(function (child, index) {
          return _react2.default.createElement(
            _FadeThroughChild2.default,
            {
              key: 'fade-through-child' + index,
              style: index === _this2.props.activeIndex ? activeStyle : inactiveStyle
            },
            child
          );
        })
      );
    }
  }]);

  return FadeThroughComponent;
}(_react.Component);

exports.default = FadeThroughComponent;


FadeThroughComponent.defaultProps = {
  activeIndex: 0
};