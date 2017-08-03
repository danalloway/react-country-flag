(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactCountryFlag"] = factory(require("React"));
	else
		root["ReactCountryFlag"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _detectEmojiSupport = __webpack_require__(7);

var _detectEmojiSupport2 = _interopRequireDefault(_detectEmojiSupport);

var _countryEmoji = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactCountryFlag = function (_PureComponent) {
    _inherits(ReactCountryFlag, _PureComponent);

    function ReactCountryFlag() {
        _classCallCheck(this, ReactCountryFlag);

        return _possibleConstructorReturn(this, (ReactCountryFlag.__proto__ || Object.getPrototypeOf(ReactCountryFlag)).apply(this, arguments));
    }

    _createClass(ReactCountryFlag, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                code = _props.code,
                svg = _props.svg;


            return (0, _detectEmojiSupport2.default)() && !svg ? _react2.default.createElement(
                'span',
                null,
                (0, _countryEmoji.flag)(code)
            ) : _react2.default.createElement('span', {
                style: {
                    position: 'relative',
                    display: 'inline-block',
                    width: '1.3333333333em',
                    height: '1em',
                    backgroundImage: 'url(\'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.8.0/flags/4x3/' + code.toLowerCase() + '.svg\')',
                    backgroundPosition: '50%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    fontSize: '1em',
                    lineHeight: '1em'
                }
            });
        }
    }]);

    return ReactCountryFlag;
}(_react.PureComponent);

ReactCountryFlag.propTypes = {
    code: _propTypes2.default.string.isRequired,
    svg: _propTypes2.default.bool.isRequired
};

ReactCountryFlag.defaultProps = {
    svg: false
};

exports.default = ReactCountryFlag;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(3)();
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(4);
var invariant = __webpack_require__(5);
var ReactPropTypesSecret = __webpack_require__(6);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function() {
    var pixelRatio = window.devicePixelRatio || 1;
    var offset = 12 * pixelRatio;
    var node = window.document.createElement('canvas');

    var ctx = node.getContext('2d');
    ctx.fillStyle = '#f00';
    ctx.textBaseline = 'top';
    ctx.font = '32px Arial';
    ctx.fillText('\ud83d\udc28', 0, 0); // U+1F428 KOALA

    return ctx.getImageData(offset, offset, 1, 1).data[0] !== 0;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const {flag, name, code} = __webpack_require__(9);

module.exports = {flag, name, code};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const countries = __webpack_require__(10);

const MAGIC_NUMBER = 127462 - 65;

const CODE_RE = /^[a-z]{2}$/i;
const NAME_RE = /^.{2,}$/;
const FLAG_RE = /\uD83C[\uDDE6-\uDDFF]/;

function fuzzyCompare(str, name) {
  name = name.toLowerCase();

  // cases like:
  //    "Vatican" <-> "Holy See (Vatican City State)"
  //    "Russia"  <-> "Russian Federation"
  if (name.indexOf(str) !== -1 || str.indexOf(name) !== -1) {
    return true;
  }

  // cases like:
  // "British Virgin Islands" <-> "Virgin Islands, British"
  // "Republic of Moldova"    <-> "Moldova, Republic of"
  if (name.indexOf(',') !== -1) {
    const reversedName = name.split(', ').reverse().join(' ');
    if (reversedName.indexOf(str) !== -1 || str.indexOf(reversedName) !== -1) {
      return true;
    }
  }

  return false;
}

function isCode(code) {
  code = code.toUpperCase();

  return countries[code] ? code : undefined;
}

function nameToCode(name) {
  if (!name || !NAME_RE.test(name)) {
    return;
  }

  name = name.trim().toLowerCase();

  // look for exact match
  // NOTE: normal loop to terminate ASAP
  for (const code in countries) {
    if ({}.hasOwnProperty.call(countries, code)) {
      let names = countries[code];

      if (!Array.isArray(names)) {
        names = [names];
      }

      for (const n of names) {
        if (n.toLowerCase() === name) {
          return code;
        }
      }
    }
  }

  // look for inexact match
  // NOTE: .filter() to aggregate all matches
  const matches = Object.keys(countries)
    .filter(code => {
      let names = countries[code];

      if (!Array.isArray(names)) {
        names = [names];
      }

      for (const n of names) {
        if (fuzzyCompare(name, n)) {
          return true;
        }
      }

      return false;
    });

  // return only when exactly one match was found
  //   prevents cases like "United"
  if (matches.length === 1) {
    return matches[0];
  }

  return;
}

function codeToName(code) {
  if (!code || !CODE_RE.test(code)) {
    return;
  }

  const names = countries[code.toUpperCase()];
  if (Array.isArray(names)) {
    return names[0];
  }

  return names;
}

function codeToFlag(code) {
  if (!code || !CODE_RE.test(code)) {
    return;
  }

  code = isCode(code);
  if (!code) {
    return;
  }

  return String.fromCodePoint(...[...code].map(c => MAGIC_NUMBER + c.charCodeAt()));
}

function flagToCode(flag) {
  if (!flag || !FLAG_RE.test(flag)) {
    return;
  }

  return isCode([...flag].map(c => c.codePointAt(0) - MAGIC_NUMBER).map(c => String.fromCharCode(c)).join(''));
}

// takes either emoji or full name
function code(input) {
  return flagToCode(input) || nameToCode(input);
}

// takes either code or full name
function flag(input) {
  if (!CODE_RE.test(input) || input === 'UK') {
    input = nameToCode(input);
  }

  return codeToFlag(input);
}

// takes either emoji or code
function name(input) {
  if (FLAG_RE.test(input)) {
    input = flagToCode(input);
  }

  return codeToName(input);
}

module.exports = {
  MAGIC_NUMBER,

  CODE_RE,
  NAME_RE,
  FLAG_RE,

  code,
  flag,
  name,

  isCode,
  fuzzyCompare,

  codeToName,
  codeToFlag,
  nameToCode,
  flagToCode
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {"AD":"Andorra","AE":["United Arab Emirates","UAE"],"AF":"Afghanistan","AG":"Antigua and Barbuda","AI":"Anguilla","AL":"Albania","AM":"Armenia","AN":"Netherlands Antilles","AO":"Angola","AQ":"Antarctica","AR":"Argentina","AS":"American Samoa","AT":"Austria","AU":"Australia","AW":"Aruba","AX":"Åland Islands","AZ":"Azerbaijan","BA":"Bosnia and Herzegovina","BB":"Barbados","BD":"Bangladesh","BE":"Belgium","BF":"Burkina Faso","BG":"Bulgaria","BH":"Bahrain","BI":"Burundi","BJ":"Benin","BM":"Bermuda","BN":"Brunei Darussalam","BO":"Bolivia","BR":"Brazil","BS":"Bahamas","BT":"Bhutan","BV":"Bouvet Island","BW":"Botswana","BY":"Belarus","BZ":"Belize","CA":"Canada","CC":"Cocos (Keeling) Islands","CD":"Congo, The Democratic Republic of the","CF":"Central African Republic","CG":"Congo","CH":"Switzerland","CI":"Cote D'Ivoire","CK":"Cook Islands","CL":"Chile","CM":"Cameroon","CN":"China","CO":"Colombia","CR":"Costa Rica","CU":"Cuba","CV":"Cape Verde","CX":"Christmas Island","CY":"Cyprus","CZ":"Czech Republic","DE":"Germany","DJ":"Djibouti","DK":"Denmark","DM":"Dominica","DO":"Dominican Republic","DZ":"Algeria","EC":"Ecuador","EE":"Estonia","EG":"Egypt","EH":"Western Sahara","ER":"Eritrea","ES":"Spain","ET":"Ethiopia","EU":"European Union","FI":"Finland","FJ":"Fiji","FK":"Falkland Islands (Malvinas)","FM":"Micronesia, Federated States of","FO":"Faroe Islands","FR":"France","GA":"Gabon","GB":["United Kingdom","UK"],"GD":"Grenada","GE":"Georgia","GF":"French Guiana","GG":"Guernsey","GH":"Ghana","GI":"Gibraltar","GL":"Greenland","GM":"Gambia","GN":"Guinea","GP":"Guadeloupe","GQ":"Equatorial Guinea","GR":"Greece","GS":"South Georgia and the South Sandwich Islands","GT":"Guatemala","GU":"Guam","GW":"Guinea-Bissau","GY":"Guyana","HK":"Hong Kong","HM":"Heard Island and Mcdonald Islands","HN":"Honduras","HR":"Croatia","HT":"Haiti","HU":"Hungary","ID":"Indonesia","IE":"Ireland","IL":"Israel","IM":"Isle of Man","IN":"India","IO":"British Indian Ocean Territory","IQ":"Iraq","IR":"Iran, Islamic Republic Of","IS":"Iceland","IT":"Italy","JE":"Jersey","JM":"Jamaica","JO":"Jordan","JP":"Japan","KE":"Kenya","KG":"Kyrgyzstan","KH":"Cambodia","KI":"Kiribati","KM":"Comoros","KN":"Saint Kitts and Nevis","KP":["Democratic People's Republic of Korea","North Korea"],"KR":["Korea, Republic of","South Korea"],"KW":"Kuwait","KY":"Cayman Islands","KZ":"Kazakhstan","LA":"Lao People's Democratic Republic","LB":"Lebanon","LC":"Saint Lucia","LI":"Liechtenstein","LK":"Sri Lanka","LR":"Liberia","LS":"Lesotho","LT":"Lithuania","LU":"Luxembourg","LV":"Latvia","LY":"Libyan Arab Jamahiriya","MA":"Morocco","MC":"Monaco","MD":"Moldova, Republic of","ME":"Montenegro","MG":"Madagascar","MH":"Marshall Islands","MK":"Macedonia, The Former Yugoslav Republic of","ML":"Mali","MM":["Myanmar","Burma"],"MN":"Mongolia","MO":"Macao","MP":"Northern Mariana Islands","MQ":"Martinique","MR":"Mauritania","MS":"Montserrat","MT":"Malta","MU":"Mauritius","MV":"Maldives","MW":"Malawi","MX":"Mexico","MY":"Malaysia","MZ":"Mozambique","NA":"Namibia","NC":"New Caledonia","NE":"Niger","NF":"Norfolk Island","NG":"Nigeria","NI":"Nicaragua","NL":"Netherlands","NO":"Norway","NP":"Nepal","NR":"Nauru","NU":"Niue","NZ":"New Zealand","OM":"Oman","PA":"Panama","PE":"Peru","PF":"French Polynesia","PG":"Papua New Guinea","PH":"Philippines","PK":"Pakistan","PL":"Poland","PM":"Saint Pierre and Miquelon","PN":"Pitcairn","PR":"Puerto Rico","PS":["Palestinian Territory, Occupied","Palestine"],"PT":"Portugal","PW":"Palau","PY":"Paraguay","QA":"Qatar","RE":"Reunion","RO":"Romania","RS":"Serbia","RU":"Russian Federation","RW":"Rwanda","SA":"Saudi Arabia","SB":"Solomon Islands","SC":"Seychelles","SD":"Sudan","SE":"Sweden","SG":"Singapore","SH":"Saint Helena","SI":"Slovenia","SJ":"Svalbard and Jan Mayen","SK":"Slovakia","SL":"Sierra Leone","SM":"San Marino","SN":"Senegal","SO":"Somalia","SR":"Suriname","ST":"Sao Tome and Principe","SV":"El Salvador","SY":"Syrian Arab Republic","SZ":"Swaziland","TC":"Turks and Caicos Islands","TD":"Chad","TF":"French Southern Territories","TG":"Togo","TH":"Thailand","TJ":"Tajikistan","TK":"Tokelau","TL":"Timor-Leste","TM":"Turkmenistan","TN":"Tunisia","TO":"Tonga","TR":"Turkey","TT":"Trinidad and Tobago","TV":"Tuvalu","TW":"Taiwan","TZ":"Tanzania, United Republic of","UA":"Ukraine","UG":"Uganda","UM":"United States Minor Outlying Islands","US":["United States","USA"],"UY":"Uruguay","UZ":"Uzbekistan","VA":"Holy See (Vatican City State)","VC":"Saint Vincent and the Grenadines","VE":"Venezuela","VG":"Virgin Islands, British","VI":"Virgin Islands, U.S.","VN":"Viet Nam","VU":"Vanuatu","WF":"Wallis and Futuna","WS":"Samoa","XK":"Kosovo","YE":"Yemen","YT":"Mayotte","ZA":"South Africa","ZM":"Zambia","ZW":"Zimbabwe"}

/***/ })
/******/ ]);
});
//# sourceMappingURL=react-country-flag.js.map