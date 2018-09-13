module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/chartActions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.randomize = exports.initialize = void 0;

var _lodash = _interopRequireDefault(__webpack_require__("lodash"));

var _charts = _interopRequireDefault(__webpack_require__("./constants/charts.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Add some generic data to display within the mostly used charts
 */
var initialize = function initialize(type) {
  if (_lodash.default.has(_charts.default, type)) {
    return _charts.default[type];
  }

  return {
    name: 'Unknown Chart',
    description: 'There was an error while loading the chart'
  };
};
/**
 * Randomizes the given input to create a different chart
 */


exports.initialize = initialize;

var randomize = function randomize(input) {
  return {
    foo: !input
  };
};

exports.randomize = randomize;
var _default = {
  initialize: initialize,
  randomize: randomize
};
exports.default = _default;

/***/ }),

/***/ "./actions/environmentActions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.changeEnvironment = void 0;

var _lodash = _interopRequireDefault(__webpack_require__("lodash"));

var _environments = __webpack_require__("./constants/environments.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var changeEnvironment = function changeEnvironment(store, env) {
  if (_lodash.default.isUndefined(env)) {
    return store.env;
  }

  return _environments.envs[env];
};

exports.changeEnvironment = changeEnvironment;
var _default = {
  changeEnvironment: changeEnvironment
};
exports.default = _default;

/***/ }),

/***/ "./components/molecules/DrawerContent/DrawerContent.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _link = _interopRequireDefault(__webpack_require__("next/link"));

var _List = _interopRequireDefault(__webpack_require__("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(__webpack_require__("@material-ui/core/ListItem"));

var _ListItemText = _interopRequireDefault(__webpack_require__("@material-ui/core/ListItemText"));

var _ListItemIcon = _interopRequireDefault(__webpack_require__("@material-ui/core/ListItemIcon"));

var _Divider = _interopRequireDefault(__webpack_require__("@material-ui/core/Divider"));

var _Home = _interopRequireDefault(__webpack_require__("@material-ui/icons/Home"));

var _Lock = _interopRequireDefault(__webpack_require__("@material-ui/icons/Lock"));

var _Close = _interopRequireDefault(__webpack_require__("@material-ui/icons/Close"));

var _PieChart = _interopRequireDefault(__webpack_require__("@material-ui/icons/PieChart"));

var _TableChart = _interopRequireDefault(__webpack_require__("@material-ui/icons/TableChart"));

var _ExitToApp = _interopRequireDefault(__webpack_require__("@material-ui/icons/ExitToApp"));

var _DrawerContent = _interopRequireDefault(__webpack_require__("./components/molecules/DrawerContent/DrawerContent.scss"));

var _jsxFileName = "/Projects/microservice_dashboard/test-domi/components/molecules/DrawerContent/DrawerContent.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DrawerContent = function DrawerContent(props) {
  return _react.default.createElement("div", {
    className: _DrawerContent.default.drawerContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react.default.createElement(_List.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react.default.createElement(_ListItem.default, {
    button: true,
    onClick: props.close,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react.default.createElement(_ListItemIcon.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react.default.createElement(_Close.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }))), _react.default.createElement(_link.default, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react.default.createElement(_ListItem.default, {
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react.default.createElement(_ListItemIcon.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react.default.createElement(_Home.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  })), _react.default.createElement(_ListItemText.default, {
    primary: "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }))), _react.default.createElement(_link.default, {
    href: "/overview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react.default.createElement(_ListItem.default, {
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react.default.createElement(_ListItemIcon.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react.default.createElement(_PieChart.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  })), _react.default.createElement(_ListItemText.default, {
    primary: "Overview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }))), _react.default.createElement(_link.default, {
    href: "/tables",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, _react.default.createElement(_ListItem.default, {
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, _react.default.createElement(_ListItemIcon.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, _react.default.createElement(_TableChart.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  })), _react.default.createElement(_ListItemText.default, {
    primary: "Tables",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }))), _react.default.createElement(_link.default, {
    href: "/secret",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, _react.default.createElement(_ListItem.default, {
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, _react.default.createElement(_ListItemIcon.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, _react.default.createElement(_Lock.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  })), _react.default.createElement(_ListItemText.default, {
    primary: "Protected Area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }))), _react.default.createElement(_Divider.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }), _react.default.createElement(_ListItem.default, {
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, _react.default.createElement(_ListItemIcon.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, _react.default.createElement(_ExitToApp.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  })), _react.default.createElement(_ListItemText.default, {
    primary: "Logout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }))));
};

DrawerContent.propTypes = {
  close: _propTypes.default.func
};
DrawerContent.defaultProps = {
  close: function close() {}
};
var _default = DrawerContent;
exports.default = _default;

/***/ }),

/***/ "./components/molecules/DrawerContent/DrawerContent.scss":
/***/ (function(module, exports) {

module.exports = {
	"drawerContent": "DrawerContent__drawerContent___3W7Jf"
};

/***/ }),

/***/ "./components/organisms/DefaultLayout/DefaultLayout.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _mobxReact = __webpack_require__("mobx-react");

var _mobxReactDevtools = _interopRequireWildcard(__webpack_require__("mobx-react-devtools"));

var _styles = __webpack_require__("@material-ui/core/styles");

var _red = _interopRequireDefault(__webpack_require__("@material-ui/core/colors/red"));

var _green = _interopRequireDefault(__webpack_require__("@material-ui/core/colors/green"));

var _rootStore = _interopRequireDefault(__webpack_require__("./store/rootStore.js"));

var _Header = _interopRequireDefault(__webpack_require__("./components/organisms/Header/Header.jsx"));

var _DefaultLayout = _interopRequireDefault(__webpack_require__("./components/organisms/DefaultLayout/DefaultLayout.scss"));

var _class,
    _temp,
    _jsxFileName = "/Projects/microservice_dashboard/test-domi/components/organisms/DefaultLayout/DefaultLayout.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _mobxReactDevtools.configureDevtool)({
  logFilter: function logFilter(change) {
    return change.type === 'action';
  }
});
var theme = (0, _styles.createMuiTheme)({
  palette: {
    primary: _red.default,
    secondary: _green.default
  }
});
var DefaultLayout = (_temp = _class =
/*#__PURE__*/
function (_Component) {
  _inherits(DefaultLayout, _Component);

  function DefaultLayout(props) {
    var _this;

    _classCallCheck(this, DefaultLayout);

    _this = _possibleConstructorReturn(this, (DefaultLayout.__proto__ || Object.getPrototypeOf(DefaultLayout)).call(this, props));

    _this.changeHandler = function (e) {
      _this.store.environment.changeEnv(e.target.value);
    };

    _this.store = (0, _rootStore.default)();
    return _this;
  }

  _createClass(DefaultLayout, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return _react.default.createElement(_mobxReact.Provider, {
        store: this.store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react.default.createElement(_styles.MuiThemeProvider, {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "development" === 'development' && _react.default.createElement(_mobxReactDevtools.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), _react.default.createElement("div", {
        className: _DefaultLayout.default.Container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react.default.createElement(_Header.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), _react.default.createElement("div", {
        className: _DefaultLayout.default.content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, children))));
    }
  }]);

  return DefaultLayout;
}(_react.Component), _class.propTypes = {
  children: _propTypes.default.node.isRequired
}, _temp);
var _default = DefaultLayout;
exports.default = _default;

/***/ }),

/***/ "./components/organisms/DefaultLayout/DefaultLayout.scss":
/***/ (function(module, exports) {

module.exports = {
	"Container": "DefaultLayout__Container___3jGgk",
	"content": "DefaultLayout__content___2aES_"
};

/***/ }),

/***/ "./components/organisms/Header/Header.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _mobxReact = __webpack_require__("mobx-react");

var _AppBar = _interopRequireDefault(__webpack_require__("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(__webpack_require__("@material-ui/core/Toolbar"));

var _Typography = _interopRequireDefault(__webpack_require__("@material-ui/core/Typography"));

var _IconButton = _interopRequireDefault(__webpack_require__("@material-ui/core/IconButton"));

var _Menu = _interopRequireDefault(__webpack_require__("@material-ui/icons/Menu"));

var _Drawer = _interopRequireDefault(__webpack_require__("@material-ui/core/Drawer"));

var _DrawerContent = _interopRequireDefault(__webpack_require__("./components/molecules/DrawerContent/DrawerContent.jsx"));

var _Header = _interopRequireDefault(__webpack_require__("./components/organisms/Header/Header.scss"));

var _dec,
    _class,
    _class2,
    _temp,
    _jsxFileName = "/Projects/microservice_dashboard/test-domi/components/organisms/Header/Header.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.toggleMenu = function () {
      _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    };

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_AppBar.default, {
        position: "static",
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react.default.createElement(_Toolbar.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react.default.createElement("div", {
        className: _Header.default.headerContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react.default.createElement("div", {
        className: _Header.default.leftWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react.default.createElement(_IconButton.default, {
        color: "inherit",
        "aria-label": "Menu",
        onClick: this.toggleMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react.default.createElement(_Menu.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      })), _react.default.createElement(_Typography.default, {
        variant: "title",
        color: "inherit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "Dashboard: ", this.props.store.environment.env)))), _react.default.createElement(_Drawer.default, {
        anchor: "left",
        open: this.state.isOpen,
        onClose: this.toggleMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react.default.createElement(_DrawerContent.default, {
        close: this.toggleMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      })));
    }
  }]);

  return Header;
}(_react.Component), _class2.propTypes = {
  store: _propTypes.default.object.isRequired
}, _temp)) || _class);
exports.default = Header;

/***/ }),

/***/ "./components/organisms/Header/Header.scss":
/***/ (function(module, exports) {

module.exports = {
	"headerContainer": "Header__headerContainer___t8M_e",
	"leftWrapper": "Header__leftWrapper___2a3_y"
};

/***/ }),

/***/ "./constants/charts.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.STACK = exports.DONUT = exports.LINE = exports.BAR = exports.PIE = exports.chartTypes = void 0;

var _victory = __webpack_require__("victory");

var chartTypes = {
  PIE: 'PIE',
  BAR: 'BAR',
  LINE: 'LINE',
  STACK: 'STACK',
  DONUT: 'DONUT'
};
exports.chartTypes = chartTypes;
var PIE = {
  name: 'Pie Chart',
  description: 'These are the ingredients for grandma\'s tasty apple pie',
  chart: _victory.VictoryPie,
  values: {
    data: [{
      y: 13,
      label: 'Flour'
    }, {
      y: 2,
      label: 'Salt'
    }, {
      y: 6,
      label: 'Butter'
    }, {
      y: 9,
      label: 'Water'
    }, {
      y: 22,
      label: 'Apples'
    }, {
      y: 3,
      label: 'Sugar'
    }],
    labelRadius: 135
  }
};
exports.PIE = PIE;
var BAR = {
  name: 'Bar Chart',
  description: 'What our developers think, if they hear something with bar..',
  chart: _victory.VictoryBar,
  scale: {
    domainPadding: 10,
    animate: {
      duration: 2000
    }
  },
  values: {
    data: [{
      x: 1,
      y: 28,
      label: 'Rum'
    }, {
      x: 2,
      y: 76,
      label: 'Beer'
    }, {
      x: 3,
      y: 52,
      label: 'Red Wine'
    }, {
      x: 4,
      y: 21,
      label: 'Absinth'
    }, {
      x: 5,
      y: 41,
      label: 'Whiskey'
    }]
  }
};
exports.BAR = BAR;
var LINE = {
  name: 'Line Chart',
  description: 'The number of people which downloaded this repository is OVER 9000!',
  chart: _victory.VictoryLine,
  scale: {
    animate: {
      duration: 2000
    }
  },
  values: {
    data: [{
      x: 'Jul',
      y: 430
    }, {
      x: 'Aug',
      y: 2750,
      label: 2750
    }, {
      x: 'Sep',
      y: 1363
    }, {
      x: 'Oct',
      y: 6320,
      label: 6320
    }, {
      x: 'Nov',
      y: 6582
    }, {
      x: 'Dec',
      y: 9001,
      label: 9001
    }]
  }
};
exports.LINE = LINE;
var DONUT = {
  name: 'Donut Chart',
  description: 'Probably Homer\'s all time favorite chart. Hmmm... Yummie!',
  chart: _victory.VictoryPie,
  values: {
    data: [{
      x: 1,
      y: 15,
      label: 'Maggie'
    }, {
      x: 2,
      y: 23,
      label: 'Lisa'
    }, {
      x: 3,
      y: 30,
      label: 'Bart'
    }, {
      x: 4,
      y: 35,
      label: 'Marge'
    }, {
      x: 5,
      y: 50,
      label: 'Homer'
    }],
    innerRadius: 50
  }
};
exports.DONUT = DONUT;
var STACK = {
  name: 'Stack Chart',
  description: 'Looks like the Swiss alps, somehow.',
  chart: _victory.VictoryArea,
  values: [[{
    x: 1,
    y: 15
  }, {
    x: 2,
    y: 23
  }, {
    x: 3,
    y: 30
  }, {
    x: 4,
    y: 35
  }, {
    x: 5,
    y: 50
  }, {
    x: 6,
    y: 42
  }], // eslint-disable-line
  [{
    x: 1,
    y: 35
  }, {
    x: 2,
    y: 63
  }, {
    x: 3,
    y: 63
  }, {
    x: 4,
    y: 38
  }, {
    x: 5,
    y: 24
  }, {
    x: 6,
    y: 12
  }], // eslint-disable-line
  [{
    x: 1,
    y: 25
  }, {
    x: 2,
    y: 10
  }, {
    x: 3,
    y: 5
  }, {
    x: 4,
    y: 34
  }, {
    x: 5,
    y: 49
  }, {
    x: 6,
    y: 45
  }]]
};
exports.STACK = STACK;
var _default = {
  PIE: PIE,
  BAR: BAR,
  LINE: LINE,
  DONUT: DONUT,
  STACK: STACK
};
exports.default = _default;

/***/ }),

/***/ "./constants/environments.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.envs = void 0;
var envs = {
  MSP_PROD: 'MSP_PROD',
  MSP_ACC: 'MSP_ACC',
  ID_PROD: 'ID_PROD',
  ID_ACC: 'ID_ACC'
};
exports.envs = envs;
var _default = envs;
exports.default = _default;

/***/ }),

/***/ "./constants/tables.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var tables = [{
  tableID: 'table1',
  name: 'Die erste generische Tabelle',
  head: [{
    title: 'Name',
    width: '10%'
  }, {
    title: 'Date' // width: '5%',

  }, {
    title: 'Location' // width: '5%',

  }, {
    title: 'Drink' // width: '5%',

  }, {
    title: 'Amount' // width: '5%',

  }, {
    title: 'Feedback',
    width: '60%'
  }],
  body: [{
    id: '1',
    name: 'Louis',
    date: "".concat(new Date().toLocaleDateString()),
    location: 'Maximus',
    drink: 'Beer',
    amount: '3',
    feedback: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' // eslint-disable-line

  }, {
    id: '2',
    name: 'Yves',
    date: "".concat(new Date().toLocaleDateString()),
    location: 'Office',
    drink: 'Tequila Shot',
    amount: '5',
    feedback: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' // eslint-disable-line

  }, {
    id: '3',
    name: 'Philipp',
    date: "".concat(new Date().toLocaleDateString()),
    location: 'Maximus',
    drink: 'Cola',
    amount: '1',
    feedback: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' // eslint-disable-line

  }, {
    id: '4',
    name: 'Kieran',
    date: "".concat(new Date().toLocaleDateString()),
    location: 'Maximus',
    drink: 'Beer',
    amount: '999',
    feedback: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' // eslint-disable-line

  }]
}, {
  tableID: 'table2',
  name: 'Die zweite generische Tabelle',
  description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  // eslint-disable-line
  head: [],
  body: [{
    id: '1',
    name: 'Louis',
    date: "".concat(new Date().toLocaleDateString()),
    location: 'Maximus',
    drink: 'Beer',
    amount: '3'
  }, {
    id: '2',
    name: 'Yves',
    date: "".concat(new Date().toLocaleDateString()),
    location: 'Office',
    drink: 'Tequila Shot',
    amount: '5'
  }, {
    id: '3',
    name: 'Philipp',
    date: "".concat(new Date().toLocaleDateString()),
    location: 'Maximus',
    drink: 'Cola',
    amount: '1'
  }, {
    id: '4',
    name: 'Kieran',
    date: "".concat(new Date().toLocaleDateString()),
    location: 'Maximus',
    drink: 'Beer',
    amount: 'Too much'
  }]
}];
var _default = tables;
exports.default = _default;

/***/ }),

/***/ "./pages/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Index = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _head = _interopRequireDefault(__webpack_require__("next/head"));

var _DefaultLayout = _interopRequireDefault(__webpack_require__("./components/organisms/DefaultLayout/DefaultLayout.jsx"));

var _jsxFileName = "/Projects/microservice_dashboard/test-domi/pages/index.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function Index() {
  return _react.default.createElement(_DefaultLayout.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react.default.createElement(_head.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react.default.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Dashboard - Home")), _react.default.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "It's me. Your brand new dashboard!"), _react.default.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Feel free to edit my pages and create new components."));
};

exports.Index = Index;
var _default = Index;
exports.default = _default;

/***/ }),

/***/ "./store/chartStore.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initStore;

var _mobx = __webpack_require__("mobx");

var _chartActions = __webpack_require__("./actions/chartActions.js");

var _charts = __webpack_require__("./constants/charts.js");

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Store = (_class = function Store() {
  _classCallCheck(this, Store);

  _initDefineProp(this, "pie", _descriptor, this);

  _initDefineProp(this, "bar", _descriptor2, this);

  _initDefineProp(this, "line", _descriptor3, this);

  _initDefineProp(this, "donut", _descriptor4, this);

  _initDefineProp(this, "stack", _descriptor5, this);

  _initDefineProp(this, "randomizeCharts", _descriptor6, this);

  this.pie = (0, _chartActions.initialize)(_charts.chartTypes.PIE);
  this.bar = (0, _chartActions.initialize)(_charts.chartTypes.BAR);
  this.line = (0, _chartActions.initialize)(_charts.chartTypes.LINE);
  this.donut = (0, _chartActions.initialize)(_charts.chartTypes.DONUT);
  this.stack = (0, _chartActions.initialize)(_charts.chartTypes.STACK);
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "pie", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "bar", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "line", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "donut", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "stack", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "randomizeCharts", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this = this;

    return function (input) {
      _this[input] = (0, _chartActions.randomize)(input);
    };
  }
})), _class);

function initStore() {
  return new Store();
}

/***/ }),

/***/ "./store/environmentStore.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initStore;

var _mobx = __webpack_require__("mobx");

var _environments = __webpack_require__("./constants/environments.js");

var _environmentActions = __webpack_require__("./actions/environmentActions.js");

var _desc, _value, _class, _descriptor, _descriptor2;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Store = (_class = function Store() {
  _classCallCheck(this, Store);

  _initDefineProp(this, "env", _descriptor, this);

  _initDefineProp(this, "changeEnv", _descriptor2, this);

  this.env = _environments.envs.MSP_PROD;
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "env", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "changeEnv", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this = this;

    return function (environment) {
      _this.env = (0, _environmentActions.changeEnvironment)(_this, environment);
    };
  }
})), _class);

function initStore() {
  return new Store();
}

/***/ }),

/***/ "./store/rootStore.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initStore;

var _environmentStore = _interopRequireDefault(__webpack_require__("./store/environmentStore.js"));

var _chartStore = _interopRequireDefault(__webpack_require__("./store/chartStore.js"));

var _tableStore = _interopRequireDefault(__webpack_require__("./store/tableStore.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initStore() {
  return {
    environment: new _environmentStore.default(),
    charts: new _chartStore.default(),
    tables: new _tableStore.default()
  };
}

/***/ }),

/***/ "./store/tableStore.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initStore;

var _mobx = __webpack_require__("mobx");

var _tables = _interopRequireDefault(__webpack_require__("./constants/tables.js"));

var _desc, _value, _class, _descriptor;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Store = (_class = function Store() {
  _classCallCheck(this, Store);

  _initDefineProp(this, "tables", _descriptor, this);

  this.tables = _tables.default;
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "tables", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
})), _class);

function initStore() {
  return new Store();
}

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.jsx");


/***/ }),

/***/ "@material-ui/core/AppBar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Divider":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/IconButton":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/List":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/colors/green":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/green");

/***/ }),

/***/ "@material-ui/core/colors/red":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/red");

/***/ }),

/***/ "@material-ui/core/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Close":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "@material-ui/icons/ExitToApp":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExitToApp");

/***/ }),

/***/ "@material-ui/icons/Home":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),

/***/ "@material-ui/icons/Lock":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Lock");

/***/ }),

/***/ "@material-ui/icons/Menu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/PieChart":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PieChart");

/***/ }),

/***/ "@material-ui/icons/TableChart":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/TableChart");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "mobx":
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "mobx-react":
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "mobx-react-devtools":
/***/ (function(module, exports) {

module.exports = require("mobx-react-devtools");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "victory":
/***/ (function(module, exports) {

module.exports = require("victory");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map