module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _FadeThroughComponent = __webpack_require__(3);

	var _FadeThroughComponent2 = _interopRequireDefault(_FadeThroughComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FadeThroughContainer = function (_React$Component) {
	  _inherits(FadeThroughContainer, _React$Component);

	  function FadeThroughContainer() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, FadeThroughContainer);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(FadeThroughContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      activeIndex: 0
	    }, _temp), _possibleConstructorReturn(_this, _ret);
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
	}(_react2.default.Component);

	FadeThroughContainer.propTypes = {
	  width: _react2.default.PropTypes.string.isRequired,
	  height: _react2.default.PropTypes.string.isRequired,
	  delay: _react2.default.PropTypes.number.isRequired
	};
	exports.default = FadeThroughContainer;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _FadeThroughChild = __webpack_require__(4);

	var _FadeThroughChild2 = _interopRequireDefault(_FadeThroughChild);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FadeThroughComponent = function (_React$Component) {
	  _inherits(FadeThroughComponent, _React$Component);

	  function FadeThroughComponent() {
	    _classCallCheck(this, FadeThroughComponent);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FadeThroughComponent).apply(this, arguments));
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
	}(_react2.default.Component);

	FadeThroughComponent.defaultProps = {
	  activeIndex: 0
	};
	exports.default = FadeThroughComponent;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(2);

	var FadeThroughChild = module.exports = React.createClass({

	  displayName: "FadeThroughChild",

	  render: function render() {
	    return React.createElement(
	      "div",
	      { style: this.props.style },
	      this.props.children
	    );
	  }

	});

/***/ }
/******/ ]);