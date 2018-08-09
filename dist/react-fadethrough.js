(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactFadethrough"] = factory(require("react"));
	else
		root["ReactFadethrough"] = factory(root["react"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Fadethrough = __webpack_require__(1);

var _Fadethrough2 = _interopRequireDefault(_Fadethrough);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Fadethrough2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fadethrough = function (_Component) {
  _inherits(Fadethrough, _Component);

  function Fadethrough(props) {
    _classCallCheck(this, Fadethrough);

    var _this = _possibleConstructorReturn(this, (Fadethrough.__proto__ || Object.getPrototypeOf(Fadethrough)).call(this, props));

    var activeIndex = 0;
    var interval = _this.props.interval || 3000;

    _this.state = {
      activeIndex: activeIndex,
      interval: interval
    };

    _this.next = _this.next.bind(_this);
    return _this;
  }

  _createClass(Fadethrough, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.interval = setInterval(this.next, this.state.interval);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.state.interval);
    }
  }, {
    key: 'next',
    value: function next() {
      var i = (this.state.activeIndex + 1) % this.props.children.length;
      this.setState(function (prevState) {
        return { activeIndex: i || 0 };
      });
      console.log(i);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var containerStyle = {
        width: this.props.width || '100%',
        height: this.props.height || '100%',
        position: 'relative',
        overflow: 'hidden'
      };

      var inactiveStyle = {
        position: 'absolute',
        transition: 'opacity 2s',
        opacity: '0'
      };

      var activeStyle = {
        position: 'absolute',
        transition: 'opacity 2s',
        width: '100%',
        height: '100%'
      };

      return _react2.default.createElement(
        'div',
        { style: containerStyle },
        this.props.children.map(function (child, index) {
          return _react2.default.createElement(
            'div',
            {
              key: 'fadethrough-item' + index,
              style: index === _this2.state.activeIndex ? activeStyle : inactiveStyle
            },
            child
          );
        })
      );
    }
  }]);

  return Fadethrough;
}(_react.Component);

exports.default = Fadethrough;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ })
/******/ ]);
});