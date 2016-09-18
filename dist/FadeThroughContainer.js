'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FadeThroughComponent = require('./FadeThroughComponent');

var _FadeThroughComponent2 = _interopRequireDefault(_FadeThroughComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FadeThroughContainer = function (_Component) {
  _inherits(FadeThroughContainer, _Component);

  function FadeThroughContainer(props) {
    _classCallCheck(this, FadeThroughContainer);

    var _this = _possibleConstructorReturn(this, (FadeThroughContainer.__proto__ || Object.getPrototypeOf(FadeThroughContainer)).call(this, props));

    _this.state = { activeIndex: 0 };
    return _this;
  }

  _createClass(FadeThroughContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.interval = setInterval(this.next(), this.props.delay);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: 'next',
    value: function next() {
      var _this2 = this;

      return function () {
        _this2.setState({ activeIndex: _this2.state.activeIndex + 1 });
        if (_this2.state.activeIndex === _this2.props.children.length) _this2.setState({ activeIndex: 0 });
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var style = {
        width: this.props.width,
        height: this.props.height
      };
      return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement(
          _FadeThroughComponent2.default,
          {
            activeIndex: this.state.activeIndex,
            delay: this.props.delay
          },
          this.props.children
        )
      );
    }
  }]);

  return FadeThroughContainer;
}(_react.Component);

exports.default = FadeThroughContainer;


FadeThroughContainer.propTypes = {
  width: _react2.default.PropTypes.string.isRequired,
  height: _react2.default.PropTypes.string.isRequired,
  delay: _react2.default.PropTypes.number.isRequired
};