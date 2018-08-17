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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../tpa-style-webpack-plugin/dist/runtime/constants.js":
/*!*************************************************************!*\
  !*** ../tpa-style-webpack-plugin/dist/runtime/constants.js ***!
  \*************************************************************/
/*! exports provided: IS_RTL_PARAM, directionMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_RTL_PARAM", function() { return IS_RTL_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directionMap", function() { return directionMap; });
var IS_RTL_PARAM = '__IS_RTL__';
var directionMap = {
    'START': { ltr: 'left', rtl: 'right' },
    'END': { ltr: 'right', rtl: 'left' },
    'STARTSIGN': { ltr: '-', rtl: '' },
    'ENDSIGN': { ltr: '', rtl: '-' },
    'DEG-START': { ltr: '0', rtl: '180' },
    'DEG-END': { ltr: '180', rtl: '0' },
    'DIR': { ltr: 'ltr', rtl: 'rtl' }
};

/***/ }),

/***/ "../tpa-style-webpack-plugin/dist/runtime/cssFunctions.js":
/*!****************************************************************!*\
  !*** ../tpa-style-webpack-plugin/dist/runtime/cssFunctions.js ***!
  \****************************************************************/
/*! exports provided: cssFunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssFunctions", function() { return cssFunctions; });
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ctrl/tinycolor */ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/public_api.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/utils */ "../tpa-style-webpack-plugin/dist/runtime/utils/utils.js");
/* harmony import */ var _utils_wixStyleFontUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/wixStyleFontUtils */ "../tpa-style-webpack-plugin/dist/runtime/utils/wixStyleFontUtils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "../tpa-style-webpack-plugin/dist/runtime/constants.js");
var __assign = undefined && undefined.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    return t;
};




var hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
var cssFunctions = {
    join: function (color1, strength1, color2, strength2) {
        color1 = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](color1).toRgb();
        color2 = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](color2).toRgb();
        //  todo: use strength
        //let color1strength = args[1];
        //let color2strength = args[3];
        var r = (color1.r / 255 + color2.r / 255) * 255;
        var g = (color1.g / 255 + color2.g / 255) * 255;
        var b = (color1.b / 255 + color2.b / 255) * 255;
        var a = (color1.a + color2.a) / 2;
        return new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__["TinyColor"]({ r: r, g: g, b: b, a: a }).toRgbString();
    },
    color: function (colorValue, tpaParams) {
        if (tpaParams.colors[colorValue]) {
            return tpaParams.colors[colorValue];
        }
        if (hexColorRegex.test(colorValue)) {
            return colorValue;
        } else if (colorValue) {
            var color = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](colorValue);
            if (color.isValid) {
                return color.toRgbString();
            } else {
                throw new Error("Unparsable color " + colorValue);
            }
        } else {
            return '';
        }
    },
    font: function (font, tpaParams) {
        var fontValue;
        if (typeof font === 'object') {
            fontValue = font;
        } else if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isJsonLike"])(font)) {
            var _a = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["parseJson"])(font),
                theme = _a.theme,
                overrides = __rest(_a, ["theme"]);
            fontValue = __assign({ style: '', variant: '', weight: '', stretch: '', size: '', lineHeight: '', family: [] }, tpaParams.fonts[theme], overrides);
        } else if (tpaParams.fonts[font]) {
            fontValue = tpaParams.fonts[font];
        } else {
            return font;
        }
        var fontCssValue = _utils_wixStyleFontUtils__WEBPACK_IMPORTED_MODULE_2__["wixStylesFontUtils"].toFontCssValue(fontValue);
        if (fontCssValue[fontCssValue.length - 1] === ';') {
            fontCssValue = fontCssValue.split(';')[0];
        }
        return fontCssValue;
    },
    opacity: function (color, opacity) {
        var oldColor = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](color);
        var newOpacity = oldColor.toRgb().a * opacity;
        return oldColor.setAlpha(newOpacity).toRgbString();
    },
    withoutOpacity: function (color) {
        return new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](color).setAlpha(1).toRgbString();
    },
    string: function (value) {
        return value;
    },
    darken: function (colorVal, darkenValue) {
        return new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](colorVal).brighten(-1 * darkenValue * 100).toRgbString();
    },
    number: function (value) {
        return +value;
    },
    underline: function (font) {
        return font && font.underline ? 'underline' : '';
    },
    unit: function (value, unit) {
        return "" + value + unit;
    },
    fallback: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var argsWithoutTPAParams = args.slice(0, -1);
        return argsWithoutTPAParams.filter(Boolean)[0];
    },
    direction: function (value, tpaParams) {
        var direction = tpaParams.booleans[_constants__WEBPACK_IMPORTED_MODULE_3__["IS_RTL_PARAM"]] ? 'rtl' : 'ltr';
        return _constants__WEBPACK_IMPORTED_MODULE_3__["directionMap"][value][direction];
    }
};

/***/ }),

/***/ "../tpa-style-webpack-plugin/dist/runtime/customSyntaxHelper.js":
/*!**********************************************************************!*\
  !*** ../tpa-style-webpack-plugin/dist/runtime/customSyntaxHelper.js ***!
  \**********************************************************************/
/*! exports provided: CustomSyntaxHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSyntaxHelper", function() { return CustomSyntaxHelper; });
var __assign = undefined && undefined.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var CustomSyntaxHelper = /** @class */function () {
    function CustomSyntaxHelper() {
        this.vars = {};
        this.customSyntaxStrs = [];
    }
    CustomSyntaxHelper.prototype.setVars = function (vars) {
        this.vars = __assign({}, vars);
    };
    CustomSyntaxHelper.prototype.setCustomSyntax = function (customSyntax) {
        this.customSyntaxStrs = customSyntax.slice();
    };
    CustomSyntaxHelper.prototype.getValue = function (varName) {
        return this.vars[varName];
    };
    return CustomSyntaxHelper;
}();


/***/ }),

/***/ "../tpa-style-webpack-plugin/dist/runtime/generateTPAParams.js":
/*!*********************************************************************!*\
  !*** ../tpa-style-webpack-plugin/dist/runtime/generateTPAParams.js ***!
  \*********************************************************************/
/*! exports provided: generateTPAParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTPAParams", function() { return generateTPAParams; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "../tpa-style-webpack-plugin/dist/runtime/utils/utils.js");
/* harmony import */ var _utils_wixStyleFontUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/wixStyleFontUtils */ "../tpa-style-webpack-plugin/dist/runtime/utils/wixStyleFontUtils.js");
/* harmony import */ var _utils_wixStylesColorUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/wixStylesColorUtils */ "../tpa-style-webpack-plugin/dist/runtime/utils/wixStylesColorUtils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "../tpa-style-webpack-plugin/dist/runtime/constants.js");
var __assign = undefined && undefined.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




function generateTPAParams(siteColors, siteTextPresets, styleParams, options) {
    var _a;
    var colorStyles = styleParams.colors;
    var fontStyles = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["pickBy"])(styleParams.fonts, _utils_wixStyleFontUtils__WEBPACK_IMPORTED_MODULE_1__["wixStylesFontUtils"].isValidFontParam);
    var numbers = styleParams.numbers || {};
    var colors = _utils_wixStylesColorUtils__WEBPACK_IMPORTED_MODULE_2__["wixStylesColorUtils"].getFullColorStyles({ colorStyles: colorStyles, siteColors: siteColors }) || {};
    var fonts = _utils_wixStyleFontUtils__WEBPACK_IMPORTED_MODULE_1__["wixStylesFontUtils"].getFullFontStyles({ fontStyles: fontStyles, siteTextPresets: siteTextPresets }) || {};
    var strings = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["pickBy"])(styleParams.fonts, _utils_wixStyleFontUtils__WEBPACK_IMPORTED_MODULE_1__["wixStylesFontUtils"].isStringHack);
    var booleans = __assign({}, styleParams.booleans, (_a = {}, _a[_constants__WEBPACK_IMPORTED_MODULE_3__["IS_RTL_PARAM"]] = options.isRTL, _a));
    return { colors: colors, fonts: fonts, numbers: numbers, strings: strings, booleans: booleans };
}

/***/ }),

/***/ "../tpa-style-webpack-plugin/dist/runtime/plugins.js":
/*!***********************************************************!*\
  !*** ../tpa-style-webpack-plugin/dist/runtime/plugins.js ***!
  \***********************************************************/
/*! exports provided: Plugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plugins", function() { return Plugins; });
var paramsRegex = /,(?![^(]*(?:\)|}))/g;
var Plugins = /** @class */function () {
    function Plugins() {
        this.resetPlugins();
    }
    Plugins.prototype.addCssFunction = function (funcName, func) {
        this.cssFunctions[funcName] = wrapWithValueProvider(func);
        this.updateRegex();
    };
    Plugins.prototype.addDeclarationReplacer = function (func) {
        this.declarationReplacers.push(func);
    };
    Plugins.prototype.resetPlugins = function () {
        this.cssFunctions = {};
        this.declarationReplacers = [];
        this.regex = undefined;
    };
    Plugins.prototype.isSupportedFunction = function (str) {
        return this.regex.test(str);
    };
    Plugins.prototype.getFunctionSignature = function (str) {
        var groups = this.regex.exec(str);
        if (groups) {
            return {
                funcName: groups[1],
                args: groups[2].split(paramsRegex)
            };
        }
        return null;
    };
    Plugins.prototype.updateRegex = function () {
        this.regex = new RegExp("(" + Object.keys(this.cssFunctions).join('|') + ")\\((.*)\\)");
    };
    return Plugins;
}();

function wrapWithValueProvider(fnToWrap) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return function (tpaParams) {
            return fnToWrap.apply(void 0, args.map(function (fn) {
                return fn(tpaParams);
            }).concat([tpaParams]));
        };
    };
}

/***/ }),

/***/ "../tpa-style-webpack-plugin/dist/runtime/processor.js":
/*!*************************************************************!*\
  !*** ../tpa-style-webpack-plugin/dist/runtime/processor.js ***!
  \*************************************************************/
/*! exports provided: processor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processor", function() { return processor; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "../tpa-style-webpack-plugin/dist/runtime/utils/utils.js");

function processor(_a, _b) {
    var part = _a.part,
        customSyntaxHelper = _a.customSyntaxHelper,
        tpaParams = _a.tpaParams;
    var plugins = _b.plugins;
    if (plugins.isSupportedFunction(part)) {
        var evaluationFunc = executeFunction(part, plugins, customSyntaxHelper);
        return evaluationFunc(tpaParams);
    }
    return part;
}
function executeFunction(value, plugins, customSyntaxHelper) {
    var _a;
    var functionSignature = plugins.getFunctionSignature(value);
    if (functionSignature) {
        return (_a = plugins.cssFunctions)[functionSignature.funcName].apply(_a, functionSignature.args.map(function (arg) {
            return executeFunction(arg.trim(), plugins, customSyntaxHelper);
        }));
    } else {
        return getVarOrPrimitiveValue(value, plugins, customSyntaxHelper);
    }
}
function getVarOrPrimitiveValue(varName, plugins, customSyntaxHelper) {
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isCssVar"])(varName)) {
        var varValue_1 = customSyntaxHelper.getValue(varName);
        var defaultVarValue = void 0;
        if (plugins.isSupportedFunction(varValue_1)) {
            defaultVarValue = executeFunction(varValue_1, plugins, customSyntaxHelper);
        } else {
            defaultVarValue = function () {
                return varValue_1;
            };
        }
        return getDefaultValueOrValueFromSettings(varName, defaultVarValue);
    }
    return function () {
        return varName;
    };
}
function getDefaultValueOrValueFromSettings(varName, defaultVarValue) {
    return function (tpaParams) {
        var varNameInSettings = varName.substring(2, varName.length);
        if (tpaParams.strings[varNameInSettings] && tpaParams.strings[varNameInSettings].value) {
            return tpaParams.strings[varNameInSettings].value;
        } else if (tpaParams.colors[varNameInSettings]) {
            return tpaParams.colors[varNameInSettings];
        } else if (tpaParams.fonts[varNameInSettings]) {
            return tpaParams.fonts[varNameInSettings];
        } else if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(tpaParams.numbers[varNameInSettings])) {
            return tpaParams.numbers[varNameInSettings];
        }
        //not found in settings
        return defaultVarValue(tpaParams);
    };
}

/***/ }),

/***/ "../tpa-style-webpack-plugin/dist/runtime/utils/utils.js":
/*!***************************************************************!*\
  !*** ../tpa-style-webpack-plugin/dist/runtime/utils/utils.js ***!
  \***************************************************************/
/*! exports provided: isCssVar, isJsonLike, parseJson, isNumber, forEach, pickBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCssVar", function() { return isCssVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJsonLike", function() { return isJsonLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseJson", function() { return parseJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickBy", function() { return pickBy; });
function isCssVar(key) {
    return key.indexOf('--') === 0;
}
function isJsonLike(value) {
    return typeof value === 'string' && value[0] === '{' && value.slice(-1) === '}';
}
function parseJson(strValue) {
    return strValue.slice(1, -1).split(',').reduce(function (json, current) {
        var _a = current.split(':'),
            key = _a[0],
            value = _a[1];
        json[key.trim()] = value.trim().replace(/^["|'](.*)["|']$/, '$1');
        return json;
    }, {});
}
function isNumber(value) {
    return typeof value === 'number';
}
function forEach(obj, iteratee) {
    Object.keys(obj).forEach(function (key) {
        return iteratee(obj[key], key);
    });
}
function pickBy(obj, predicate) {
    return Object.keys(obj || {}).reduce(function (result, key) {
        if (predicate(obj[key])) {
            result[key] = obj[key];
        }
        return result;
    }, {});
}

/***/ }),

/***/ "../tpa-style-webpack-plugin/dist/runtime/utils/wixStyleFontUtils.js":
/*!***************************************************************************!*\
  !*** ../tpa-style-webpack-plugin/dist/runtime/utils/wixStyleFontUtils.js ***!
  \***************************************************************************/
/*! exports provided: wixStylesFontUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wixStylesFontUtils", function() { return wixStylesFontUtils; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../tpa-style-webpack-plugin/dist/runtime/utils/utils.js");
/* harmony import */ var parse_css_font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! parse-css-font */ "../tpa-style-webpack-plugin/node_modules/parse-css-font/dist/index.js");
/* harmony import */ var parse_css_font__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(parse_css_font__WEBPACK_IMPORTED_MODULE_1__);
var __assign = undefined && undefined.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var wixStylesFontUtils = {
    getFullFontStyles: function (_a) {
        var fontStyles = _a.fontStyles,
            siteTextPresets = _a.siteTextPresets;
        var ret = {};
        // Fix color styles due to '.' to '-' conversion
        var fixedFontStyles = {};
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(fontStyles, function (v, k) {
            return fixedFontStyles[k.replace(/\./g, '-')] = v;
        });
        var parsedSiteTextPresets = {};
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(siteTextPresets, function (preset, key) {
            var presetValue = preset.value.replace(/^font\s*:\s*/, '');
            parsedSiteTextPresets[key] = __assign({}, parse_css_font__WEBPACK_IMPORTED_MODULE_1___default()(presetValue), { preset: key, editorKey: preset.editorKey }, preset.displayName ? { displayName: preset.displayName } : {});
        });
        var parsedFontStyles = {};
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(fixedFontStyles, function (value, key) {
            return parsedFontStyles[key] = parseWixStylesFont(value);
        });
        // Basic template colors
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(parsedSiteTextPresets, function (preset, key) {
            return ret[key] = parsedFontStyles[key] || preset;
        });
        // LIGHT/MEDIUM/STRONG
        ret.LIGHT = parse_css_font__WEBPACK_IMPORTED_MODULE_1___default()('12px HelveticaNeueW01-45Ligh');
        ret.MEDIUM = parse_css_font__WEBPACK_IMPORTED_MODULE_1___default()('12px HelveticaNeueW01-55Roma');
        ret.STRONG = parse_css_font__WEBPACK_IMPORTED_MODULE_1___default()('12px HelveticaNeueW01-65Medi');
        ret = __assign({}, ret, parsedFontStyles);
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(ret, function (font, key) {
            ret[key] = __assign({}, font, { supports: { uppercase: true } });
            if (['snellroundhandw', 'niconne'].some(function (fontName) {
                return font.family.indexOf(fontName) > -1;
            })) {
                ret[key].supports.uppercase = false;
            }
            if (ret[key].lineHeight === 'normal') {
                ret[key].lineHeight = '1.4em'; // Wix's normal line height is 1.4em...
            }
            if (ret[key].size === 'normal') {
                ret[key].size = '17px';
            }
        });
        return ret;
    },
    toFontCssValue: function (value) {
        var size = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(value.size) ? value.size + 'px' : value.size;
        var lineHeight = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(value.lineHeight) ? value.lineHeight + 'px' : value.lineHeight;
        return value.style + " " + value.variant + " " + value.weight + " " + size + "/" + lineHeight + " " + value.family.join(',');
    },
    isStringHack: function (fontParam) {
        return fontParam.fontStyleParam === false;
    },
    isValidFontParam: function (fontParam) {
        return fontParam.family !== undefined;
    }
};
function parseWixStylesFont(font) {
    var value = '';
    if (font.style.italic) {
        value = 'italic ';
    }
    if (font.style.bold) {
        value += 'bold ';
    }
    var size = font.size || 'normal';
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(size)) {
        size = size + "px";
    }
    var lineHeight = font.lineHeight || 'normal';
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(lineHeight)) {
        lineHeight = lineHeight + "px";
    }
    value += size + "/" + lineHeight + " ";
    value += font.cssFontFamily || font.family;
    var fontObj = __assign({}, parse_css_font__WEBPACK_IMPORTED_MODULE_1___default()(value));
    fontObj.underline = font.style && font.style.underline;
    return fontObj;
}

/***/ }),

/***/ "../tpa-style-webpack-plugin/dist/runtime/utils/wixStylesColorUtils.js":
/*!*****************************************************************************!*\
  !*** ../tpa-style-webpack-plugin/dist/runtime/utils/wixStylesColorUtils.js ***!
  \*****************************************************************************/
/*! exports provided: wixStylesColorUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wixStylesColorUtils", function() { return wixStylesColorUtils; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../tpa-style-webpack-plugin/dist/runtime/utils/utils.js");
var __assign = undefined && undefined.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var wixStylesColorUtils = {
    getFullColorStyles: function (_a) {
        var colorStyles = _a.colorStyles,
            siteColors = _a.siteColors;
        var returnValue = {};
        // Fix color styles due to '.' to '-' conversion
        var fixedColorStyles = {};
        for (var key in colorStyles) {
            fixedColorStyles[key.replace(/\./g, '-')] = colorStyles[key].value;
        }
        // Helper functions
        // Basic definitions
        returnValue.white = '#FFFFFF';
        returnValue.black = '#000000';
        // Basic template colors
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(siteColors, function (_a) {
            var reference = _a.reference,
                value = _a.value;
            returnValue[reference] = value;
        });
        returnValue = __assign({}, returnValue, fixedColorStyles);
        // Fix for a bug in a very specific template
        returnValue.background = (fixedColorStyles.background || {}).value || returnValue['color-1'] === '#FFFFFF' && returnValue['color-2'] === '#F4EFE1' ? returnValue['color-2'] : returnValue['color-1'];
        return returnValue;
    }
};

/***/ }),

/***/ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/conversion.js":
/*!*********************************************************************************!*\
  !*** ../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/conversion.js ***!
  \*********************************************************************************/
/*! exports provided: rgbToRgb, rgbToHsl, hslToRgb, rgbToHsv, hsvToRgb, rgbToHex, rgbaToHex, rgbaToArgbHex, convertDecimalToHex, convertHexToDecimal, parseIntFromHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToRgb", function() { return rgbToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHsl", function() { return rgbToHsl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslToRgb", function() { return hslToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHsv", function() { return rgbToHsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsvToRgb", function() { return hsvToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return rgbToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbaToHex", function() { return rgbaToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbaToArgbHex", function() { return rgbaToArgbHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDecimalToHex", function() { return convertDecimalToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertHexToDecimal", function() { return convertHexToDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseIntFromHex", function() { return parseIntFromHex; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/util.js");

function rgbToRgb(r, g, b) {
    return {
        r: Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(r, 255) * 255,
        g: Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(g, 255) * 255,
        b: Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(b, 255) * 255,
    };
}
function rgbToHsl(r, g, b) {
    r = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(r, 255);
    g = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(g, 255);
    b = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var s = 0;
    var l = (max + min) / 2;
    if (max === min) {
        h = s = 0;
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, l: l };
}
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(h, 360);
    s = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(s, 100);
    l = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(l, 100);
    function hue2rgb(p, q, t) {
        if (t < 0)
            t += 1;
        if (t > 1)
            t -= 1;
        if (t < 1 / 6) {
            return p + (q - p) * 6 * t;
        }
        if (t < 1 / 2) {
            return q;
        }
        if (t < 2 / 3) {
            return p + (q - p) * (2 / 3 - t) * 6;
        }
        return p;
    }
    if (s === 0) {
        r = g = b = l;
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHsv(r, g, b) {
    r = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(r, 255);
    g = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(g, 255);
    b = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0;
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}
function hsvToRgb(h, s, v) {
    h = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(h, 360) * 6;
    s = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(s, 100);
    v = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHex(r, g, b, allow3Char) {
    var hex = [
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(r).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(g).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(b).toString(16)),
    ];
    if (allow3Char &&
        hex[0].charAt(0) === hex[0].charAt(1) &&
        hex[1].charAt(0) === hex[1].charAt(1) &&
        hex[2].charAt(0) === hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(r).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(g).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(b).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(convertDecimalToHex(a)),
    ];
    if (allow4Char &&
        hex[0].charAt(0) === hex[0].charAt(1) &&
        hex[1].charAt(0) === hex[1].charAt(1) &&
        hex[2].charAt(0) === hex[2].charAt(1) &&
        hex[3].charAt(0) === hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join('');
}
function rgbaToArgbHex(r, g, b, a) {
    var hex = [
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(convertDecimalToHex(a)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(r).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(g).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(b).toString(16)),
    ];
    return hex.join('');
}
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
function parseIntFromHex(val) {
    return parseInt(val, 16);
}


/***/ }),

/***/ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/css-color-names.js":
/*!**************************************************************************************!*\
  !*** ../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/css-color-names.js ***!
  \**************************************************************************************/
/*! exports provided: names */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
var names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    gold: '#ffd700',
    goldenrod: '#daa520',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavender: '#e6e6fa',
    lavenderblush: '#fff0f5',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};


/***/ }),

/***/ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/format-input.js":
/*!***********************************************************************************!*\
  !*** ../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/format-input.js ***!
  \***********************************************************************************/
/*! exports provided: inputToRGB, stringInputToObject, isValidCSSUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputToRGB", function() { return inputToRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringInputToObject", function() { return stringInputToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidCSSUnit", function() { return isValidCSSUnit; });
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/conversion.js");
/* harmony import */ var _css_color_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-color-names */ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/css-color-names.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/util.js");



function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToRgb"])(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = Object(_util__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.s);
            v = Object(_util__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.v);
            rgb = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["hsvToRgb"])(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = Object(_util__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.s);
            l = Object(_util__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.l);
            rgb = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["hslToRgb"])(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        if (color.hasOwnProperty('a')) {
            a = color.a;
        }
    }
    a = Object(_util__WEBPACK_IMPORTED_MODULE_2__["boundAlpha"])(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a,
    };
}
var CSS_INTEGER = '[-\\+]?\\d+%?';
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
    rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
    hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
    hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
    hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
    hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    var named = false;
    if (_css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"][color]) {
        color = _css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"][color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    var match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1]),
            g: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2]),
            b: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3]),
            a: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["convertHexToDecimal"])(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1]),
            g: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2]),
            b: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1] + match[1]),
            g: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2] + match[2]),
            b: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3] + match[3]),
            a: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["convertHexToDecimal"])(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1] + match[1]),
            g: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2] + match[2]),
            b: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(String(color));
}


/***/ }),

/***/ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/from-ratio.js":
/*!*********************************************************************************!*\
  !*** ../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/from-ratio.js ***!
  \*********************************************************************************/
/*! exports provided: fromRatio, legacyRandom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRatio", function() { return fromRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "legacyRandom", function() { return legacyRandom; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/util.js");


function fromRatio(ratio, opts) {
    var newColor = {
        r: Object(_util__WEBPACK_IMPORTED_MODULE_1__["convertToPercentage"])(ratio.r),
        g: Object(_util__WEBPACK_IMPORTED_MODULE_1__["convertToPercentage"])(ratio.g),
        b: Object(_util__WEBPACK_IMPORTED_MODULE_1__["convertToPercentage"])(ratio.b),
    };
    if (ratio.a !== undefined) {
        newColor.a = +ratio.a;
    }
    return new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](newColor, opts);
}
function legacyRandom() {
    return new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"]({
        r: Math.random(),
        g: Math.random(),
        b: Math.random(),
    });
}


/***/ }),

/***/ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/index.js":
/*!****************************************************************************!*\
  !*** ../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/index.js ***!
  \****************************************************************************/
/*! exports provided: TinyColor, tinycolor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinyColor", function() { return TinyColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tinycolor", function() { return tinycolor; });
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/conversion.js");
/* harmony import */ var _css_color_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-color-names */ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/css-color-names.js");
/* harmony import */ var _format_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./format-input */ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/format-input.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/util.js");




var TinyColor = (function () {
    function TinyColor(color, opts) {
        if (color === void 0) { color = ''; }
        if (opts === void 0) { opts = {}; }
        if (color instanceof TinyColor) {
            return color;
        }
        this.originalInput = color;
        var rgb = Object(_format_input__WEBPACK_IMPORTED_MODULE_2__["inputToRGB"])(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = opts.format || rgb.format;
        this.gradientType = opts.gradientType;
        if (this.r < 1) {
            this.r = Math.round(this.r);
        }
        if (this.g < 1) {
            this.g = Math.round(this.g);
        }
        if (this.b < 1) {
            this.b = Math.round(this.b);
        }
        this.isValid = rgb.ok;
    }
    TinyColor.prototype.isDark = function () {
        return this.getBrightness() < 128;
    };
    TinyColor.prototype.isLight = function () {
        return !this.isDark();
    };
    TinyColor.prototype.getBrightness = function () {
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    };
    TinyColor.prototype.getLuminance = function () {
        var rgb = this.toRgb();
        var R;
        var G;
        var B;
        var RsRGB = rgb.r / 255;
        var GsRGB = rgb.g / 255;
        var BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
            R = RsRGB / 12.92;
        }
        else {
            R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        }
        if (GsRGB <= 0.03928) {
            G = GsRGB / 12.92;
        }
        else {
            G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        }
        if (BsRGB <= 0.03928) {
            B = BsRGB / 12.92;
        }
        else {
            B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    };
    TinyColor.prototype.setAlpha = function (alpha) {
        this.a = Object(_util__WEBPACK_IMPORTED_MODULE_3__["boundAlpha"])(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
    };
    TinyColor.prototype.toHsv = function () {
        var hsv = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHsv"])(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
    };
    TinyColor.prototype.toHsvString = function () {
        var hsv = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHsv"])(this.r, this.g, this.b);
        var h = Math.round(hsv.h * 360);
        var s = Math.round(hsv.s * 100);
        var v = Math.round(hsv.v * 100);
        return this.a === 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this.roundA + ")";
    };
    TinyColor.prototype.toHsl = function () {
        var hsl = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHsl"])(this.r, this.g, this.b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
    };
    TinyColor.prototype.toHslString = function () {
        var hsl = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHsl"])(this.r, this.g, this.b);
        var h = Math.round(hsl.h * 360);
        var s = Math.round(hsl.s * 100);
        var l = Math.round(hsl.l * 100);
        return this.a === 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this.roundA + ")";
    };
    TinyColor.prototype.toHex = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHex"])(this.r, this.g, this.b, allow3Char);
    };
    TinyColor.prototype.toHexString = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return '#' + this.toHex(allow3Char);
    };
    TinyColor.prototype.toHex8 = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbaToHex"])(this.r, this.g, this.b, this.a, allow4Char);
    };
    TinyColor.prototype.toHex8String = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return '#' + this.toHex8(allow4Char);
    };
    TinyColor.prototype.toRgb = function () {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a,
        };
    };
    TinyColor.prototype.toRgbString = function () {
        var r = Math.round(this.r);
        var g = Math.round(this.g);
        var b = Math.round(this.b);
        return this.a === 1 ? "rgb(" + r + ", " + g + ", " + b + ")" : "rgba(" + r + ", " + g + ", " + b + ", " + this.roundA + ")";
    };
    TinyColor.prototype.toPercentageRgb = function () {
        var fmt = function (x) { return Math.round(Object(_util__WEBPACK_IMPORTED_MODULE_3__["bound01"])(x, 255) * 100) + '%'; };
        return {
            r: fmt(this.r),
            g: fmt(this.g),
            b: fmt(this.b),
            a: this.a,
        };
    };
    TinyColor.prototype.toPercentageRgbString = function () {
        var rnd = function (x) { return Math.round(Object(_util__WEBPACK_IMPORTED_MODULE_3__["bound01"])(x, 255) * 100); };
        return this.a === 1
            ? "rgb(" + rnd(this.r) + "%, " + rnd(this.g) + "%, " + rnd(this.b) + "%)"
            : "rgba(" + rnd(this.r) + "%, " + rnd(this.g) + "%, " + rnd(this.b) + "%, " + this.roundA + ")";
    };
    TinyColor.prototype.toName = function () {
        if (this.a === 0) {
            return 'transparent';
        }
        if (this.a < 1) {
            return false;
        }
        var hex = '#' + Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHex"])(this.r, this.g, this.b, false);
        for (var _i = 0, _a = Object.keys(_css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"]); _i < _a.length; _i++) {
            var key = _a[_i];
            if (_css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"][key] === hex) {
                return key;
            }
        }
        return false;
    };
    TinyColor.prototype.toString = function (format) {
        var formatSet = !!format;
        format = format || this.format;
        var formattedString = false;
        var hasAlpha = this.a < 1 && this.a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith('hex') || format === 'name');
        if (needsAlphaFormat) {
            if (format === 'name' && this.a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === 'rgb') {
            formattedString = this.toRgbString();
        }
        if (format === 'prgb') {
            formattedString = this.toPercentageRgbString();
        }
        if (format === 'hex' || format === 'hex6') {
            formattedString = this.toHexString();
        }
        if (format === 'hex3') {
            formattedString = this.toHexString(true);
        }
        if (format === 'hex4') {
            formattedString = this.toHex8String(true);
        }
        if (format === 'hex8') {
            formattedString = this.toHex8String();
        }
        if (format === 'name') {
            formattedString = this.toName();
        }
        if (format === 'hsl') {
            formattedString = this.toHslString();
        }
        if (format === 'hsv') {
            formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
    };
    TinyColor.prototype.clone = function () {
        return new TinyColor(this.toString());
    };
    TinyColor.prototype.lighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l += amount / 100;
        hsl.l = Object(_util__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.l);
        return new TinyColor(hsl);
    };
    TinyColor.prototype.brighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var rgb = this.toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return new TinyColor(rgb);
    };
    TinyColor.prototype.darken = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l -= amount / 100;
        hsl.l = Object(_util__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.l);
        return new TinyColor(hsl);
    };
    TinyColor.prototype.tint = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('white', amount);
    };
    TinyColor.prototype.shade = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('black', amount);
    };
    TinyColor.prototype.desaturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s -= amount / 100;
        hsl.s = Object(_util__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.s);
        return new TinyColor(hsl);
    };
    TinyColor.prototype.saturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s += amount / 100;
        hsl.s = Object(_util__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.s);
        return new TinyColor(hsl);
    };
    TinyColor.prototype.greyscale = function () {
        return this.desaturate(100);
    };
    TinyColor.prototype.spin = function (amount) {
        var hsl = this.toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor(hsl);
    };
    TinyColor.prototype.mix = function (color, amount) {
        if (amount === void 0) { amount = 50; }
        var rgb1 = this.toRgb();
        var rgb2 = new TinyColor(color).toRgb();
        var p = amount / 100;
        var rgba = {
            r: (rgb2.r - rgb1.r) * p + rgb1.r,
            g: (rgb2.g - rgb1.g) * p + rgb1.g,
            b: (rgb2.b - rgb1.b) * p + rgb1.b,
            a: (rgb2.a - rgb1.a) * p + rgb1.a,
        };
        return new TinyColor(rgba);
    };
    TinyColor.prototype.analogous = function (results, slices) {
        if (results === void 0) { results = 6; }
        if (slices === void 0) { slices = 30; }
        var hsl = this.toHsl();
        var part = 360 / slices;
        var ret = [this];
        for (hsl.h = (hsl.h - ((part * results) >> 1) + 720) % 360; --results;) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(new TinyColor(hsl));
        }
        return ret;
    };
    TinyColor.prototype.complement = function () {
        var hsl = this.toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return new TinyColor(hsl);
    };
    TinyColor.prototype.monochromatic = function (results) {
        if (results === void 0) { results = 6; }
        var hsv = this.toHsv();
        var h = hsv.h;
        var s = hsv.s;
        var v = hsv.v;
        var res = [];
        var modification = 1 / results;
        while (results--) {
            res.push(new TinyColor({ h: h, s: s, v: v }));
            v = (v + modification) % 1;
        }
        return res;
    };
    TinyColor.prototype.splitcomplement = function () {
        var hsl = this.toHsl();
        var h = hsl.h;
        return [
            this,
            new TinyColor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
            new TinyColor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l }),
        ];
    };
    TinyColor.prototype.triad = function () {
        return this.polyad(3);
    };
    TinyColor.prototype.tetrad = function () {
        return this.polyad(4);
    };
    TinyColor.prototype.polyad = function (n) {
        var hsl = this.toHsl();
        var h = hsl.h;
        var result = [this];
        var increment = 360 / n;
        for (var i = 1; i < n; i++) {
            result.push(new TinyColor({ h: (h + i * increment) % 360, s: hsl.s, l: hsl.l }));
        }
        return result;
    };
    TinyColor.prototype.equals = function (color) {
        return this.toRgbString() === new TinyColor(color).toRgbString();
    };
    return TinyColor;
}());

function tinycolor(color, opts) {
    if (color === void 0) { color = ''; }
    if (opts === void 0) { opts = {}; }
    return new TinyColor(color, opts);
}


/***/ }),

/***/ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/public_api.js":
/*!*********************************************************************************!*\
  !*** ../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/public_api.js ***!
  \*********************************************************************************/
/*! exports provided: default, TinyColor, tinycolor, names, readability, isReadable, mostReadable, toMsFilter, fromRatio, legacyRandom, inputToRGB, stringInputToObject, isValidCSSUnit, random, bounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TinyColor", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tinycolor", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["tinycolor"]; });

/* harmony import */ var _css_color_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-color-names */ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/css-color-names.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "names", function() { return _css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"]; });

/* harmony import */ var _readability__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./readability */ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/readability.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readability", function() { return _readability__WEBPACK_IMPORTED_MODULE_2__["readability"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReadable", function() { return _readability__WEBPACK_IMPORTED_MODULE_2__["isReadable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mostReadable", function() { return _readability__WEBPACK_IMPORTED_MODULE_2__["mostReadable"]; });

/* harmony import */ var _to_ms_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./to-ms-filter */ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/to-ms-filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toMsFilter", function() { return _to_ms_filter__WEBPACK_IMPORTED_MODULE_3__["toMsFilter"]; });

/* harmony import */ var _from_ratio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./from-ratio */ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/from-ratio.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromRatio", function() { return _from_ratio__WEBPACK_IMPORTED_MODULE_4__["fromRatio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "legacyRandom", function() { return _from_ratio__WEBPACK_IMPORTED_MODULE_4__["legacyRandom"]; });

/* harmony import */ var _format_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./format-input */ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/format-input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inputToRGB", function() { return _format_input__WEBPACK_IMPORTED_MODULE_5__["inputToRGB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringInputToObject", function() { return _format_input__WEBPACK_IMPORTED_MODULE_5__["stringInputToObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidCSSUnit", function() { return _format_input__WEBPACK_IMPORTED_MODULE_5__["isValidCSSUnit"]; });

/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./random */ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/random.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "random", function() { return _random__WEBPACK_IMPORTED_MODULE_6__["random"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounds", function() { return _random__WEBPACK_IMPORTED_MODULE_6__["bounds"]; });









/* harmony default export */ __webpack_exports__["default"] = (_index__WEBPACK_IMPORTED_MODULE_0__["tinycolor"]);


/***/ }),

/***/ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/random.js":
/*!*****************************************************************************!*\
  !*** ../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/random.js ***!
  \*****************************************************************************/
/*! exports provided: random, bounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounds", function() { return bounds; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/index.js");

function random(options) {
    if (options === void 0) { options = {}; }
    if (options.count !== undefined && options.count !== null) {
        var totalColors = options.count;
        var colors = [];
        options.count = undefined;
        while (totalColors > colors.length) {
            options.count = null;
            if (options.seed) {
                options.seed += 1;
            }
            colors.push(random(options));
        }
        options.count = totalColors;
        return colors;
    }
    var h = pickHue(options.hue, options.seed);
    var s = pickSaturation(h, options);
    var v = pickBrightness(h, s, options);
    var res = { h: h, s: s, v: v };
    if (options.alpha !== undefined) {
        res.a = options.alpha;
    }
    return new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](res);
}
function pickHue(hue, seed) {
    var hueRange = getHueRange(hue);
    var res = randomWithin(hueRange, seed);
    if (res < 0) {
        res = 360 + res;
    }
    return res;
}
function pickSaturation(hue, options) {
    if (options.hue === 'monochrome') {
        return 0;
    }
    if (options.luminosity === 'random') {
        return randomWithin([0, 100], options.seed);
    }
    var saturationRange = getColorInfo(hue).saturationRange;
    var sMin = saturationRange[0];
    var sMax = saturationRange[1];
    switch (options.luminosity) {
        case 'bright':
            sMin = 55;
            break;
        case 'dark':
            sMin = sMax - 10;
            break;
        case 'light':
            sMax = 55;
            break;
    }
    return randomWithin([sMin, sMax], options.seed);
}
function pickBrightness(H, S, options) {
    var bMin = getMinimumBrightness(H, S);
    var bMax = 100;
    switch (options.luminosity) {
        case 'dark':
            bMax = bMin + 20;
            break;
        case 'light':
            bMin = (bMax + bMin) / 2;
            break;
        case 'random':
            bMin = 0;
            bMax = 100;
            break;
    }
    return randomWithin([bMin, bMax], options.seed);
}
function getMinimumBrightness(H, S) {
    var lowerBounds = getColorInfo(H).lowerBounds;
    for (var i = 0; i < lowerBounds.length - 1; i++) {
        var s1 = lowerBounds[i][0];
        var v1 = lowerBounds[i][1];
        var s2 = lowerBounds[i + 1][0];
        var v2 = lowerBounds[i + 1][1];
        if (S >= s1 && S <= s2) {
            var m = (v2 - v1) / (s2 - s1);
            var b = v1 - m * s1;
            return m * S + b;
        }
    }
    return 0;
}
function getHueRange(colorInput) {
    var num = parseInt(colorInput, 10);
    if (!Number.isNaN(num) && num < 360 && num > 0) {
        return [num, num];
    }
    if (typeof colorInput === 'string') {
        var namedColor = bounds.find(function (n) { return n.name === colorInput; });
        if (namedColor) {
            var color = defineColor(namedColor);
            if (color.hueRange) {
                return color.hueRange;
            }
        }
        var parsed = new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](colorInput);
        if (parsed.isValid) {
            var hue = parsed.toHsv().h;
            return [hue, hue];
        }
    }
    return [0, 360];
}
function getColorInfo(hue) {
    if (hue >= 334 && hue <= 360) {
        hue -= 360;
    }
    for (var _i = 0, bounds_1 = bounds; _i < bounds_1.length; _i++) {
        var bound = bounds_1[_i];
        var color = defineColor(bound);
        if (color.hueRange && hue >= color.hueRange[0] && hue <= color.hueRange[1]) {
            return color;
        }
    }
    throw Error('Color not found');
}
function randomWithin(range, seed) {
    if (seed === undefined) {
        return Math.floor(range[0] + Math.random() * (range[1] + 1 - range[0]));
    }
    else {
        var max = range[1] || 1;
        var min = range[0] || 0;
        seed = (seed * 9301 + 49297) % 233280;
        var rnd = seed / 233280.0;
        return Math.floor(min + rnd * (max - min));
    }
}
function defineColor(bound) {
    var sMin = bound.lowerBounds[0][0];
    var sMax = bound.lowerBounds[bound.lowerBounds.length - 1][0];
    var bMin = bound.lowerBounds[bound.lowerBounds.length - 1][1];
    var bMax = bound.lowerBounds[0][1];
    return {
        name: bound.name,
        hueRange: bound.hueRange,
        lowerBounds: bound.lowerBounds,
        saturationRange: [sMin, sMax],
        brightnessRange: [bMin, bMax],
    };
}
var bounds = [
    {
        name: 'monochrome',
        hueRange: null,
        lowerBounds: [[0, 0], [100, 0]],
    },
    {
        name: 'red',
        hueRange: [-26, 18],
        lowerBounds: [
            [20, 100],
            [30, 92],
            [40, 89],
            [50, 85],
            [60, 78],
            [70, 70],
            [80, 60],
            [90, 55],
            [100, 50],
        ],
    },
    {
        name: 'orange',
        hueRange: [19, 46],
        lowerBounds: [[20, 100], [30, 93], [40, 88], [50, 86], [60, 85], [70, 70], [100, 70]],
    },
    {
        name: 'yellow',
        hueRange: [47, 62],
        lowerBounds: [[25, 100], [40, 94], [50, 89], [60, 86], [70, 84], [80, 82], [90, 80], [100, 75]],
    },
    {
        name: 'green',
        hueRange: [63, 178],
        lowerBounds: [[30, 100], [40, 90], [50, 85], [60, 81], [70, 74], [80, 64], [90, 50], [100, 40]],
    },
    {
        name: 'blue',
        hueRange: [179, 257],
        lowerBounds: [
            [20, 100],
            [30, 86],
            [40, 80],
            [50, 74],
            [60, 60],
            [70, 52],
            [80, 44],
            [90, 39],
            [100, 35],
        ],
    },
    {
        name: 'purple',
        hueRange: [258, 282],
        lowerBounds: [
            [20, 100],
            [30, 87],
            [40, 79],
            [50, 70],
            [60, 65],
            [70, 59],
            [80, 52],
            [90, 45],
            [100, 42],
        ],
    },
    {
        name: 'pink',
        hueRange: [283, 334],
        lowerBounds: [[20, 100], [30, 90], [40, 86], [60, 84], [80, 80], [90, 75], [100, 73]],
    },
];


/***/ }),

/***/ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/readability.js":
/*!**********************************************************************************!*\
  !*** ../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/readability.js ***!
  \**********************************************************************************/
/*! exports provided: readability, isReadable, mostReadable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readability", function() { return readability; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReadable", function() { return isReadable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mostReadable", function() { return mostReadable; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/index.js");

function readability(color1, color2) {
    var c1 = new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](color1);
    var c2 = new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](color2);
    return ((Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) /
        (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05));
}
function isReadable(color1, color2, wcag2) {
    if (wcag2 === void 0) { wcag2 = { level: 'AA', size: 'small' }; }
    var readabilityLevel = readability(color1, color2);
    switch ((wcag2.level || 'AA') + (wcag2.size || 'small')) {
        case 'AAsmall':
        case 'AAAlarge':
            return readabilityLevel >= 4.5;
        case 'AAlarge':
            return readabilityLevel >= 3;
        case 'AAAsmall':
            return readabilityLevel >= 7;
    }
    return false;
}
function mostReadable(baseColor, colorList, args) {
    if (args === void 0) { args = { includeFallbackColors: false, level: 'AA', size: 'small' }; }
    var bestColor = null;
    var bestScore = 0;
    var includeFallbackColors = args.includeFallbackColors;
    var level = args.level;
    var size = args.size;
    for (var _i = 0, colorList_1 = colorList; _i < colorList_1.length; _i++) {
        var color = colorList_1[_i];
        var score = readability(baseColor, color);
        if (score > bestScore) {
            bestScore = score;
            bestColor = new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](color);
        }
    }
    if (isReadable(baseColor, bestColor, { level: level, size: size }) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors = false;
        return mostReadable(baseColor, ['#fff', '#000'], args);
    }
}


/***/ }),

/***/ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/to-ms-filter.js":
/*!***********************************************************************************!*\
  !*** ../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/to-ms-filter.js ***!
  \***********************************************************************************/
/*! exports provided: toMsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMsFilter", function() { return toMsFilter; });
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/conversion.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/index.js");


function toMsFilter(firstColor, secondColor) {
    var color = new _index__WEBPACK_IMPORTED_MODULE_1__["TinyColor"](firstColor);
    var hex8String = '#' + Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbaToArgbHex"])(color.r, color.g, color.b, color.a);
    var secondHex8String = hex8String;
    var gradientType = color.gradientType ? 'GradientType = 1, ' : '';
    if (secondColor) {
        var s = new _index__WEBPACK_IMPORTED_MODULE_1__["TinyColor"](secondColor);
        secondHex8String = '#' + Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbaToArgbHex"])(s.r, s.g, s.b, s.a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
}


/***/ }),

/***/ "../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/util.js":
/*!***************************************************************************!*\
  !*** ../tpa-style-webpack-plugin/node_modules/@ctrl/tinycolor/es/util.js ***!
  \***************************************************************************/
/*! exports provided: bound01, clamp01, isOnePointZero, isPercentage, boundAlpha, convertToPercentage, pad2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bound01", function() { return bound01; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp01", function() { return clamp01; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOnePointZero", function() { return isOnePointZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPercentage", function() { return isPercentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundAlpha", function() { return boundAlpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToPercentage", function() { return convertToPercentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pad2", function() { return pad2; });
function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    var processPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    if (processPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    if (max === 360) {
        n = (n < 0 ? n % max + max : n % max) / parseFloat(String(max));
    }
    else {
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
function clamp01(val) {
    return Math.min(1, Math.max(0, val));
}
function isOnePointZero(n) {
    return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
function isPercentage(n) {
    return typeof n === 'string' && n.indexOf('%') !== -1;
}
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
function convertToPercentage(n) {
    if (n <= 1) {
        return +n * 100 + '%';
    }
    return n;
}
function pad2(c) {
    return c.length === 1 ? '0' + c : '' + c;
}


/***/ }),

/***/ "../tpa-style-webpack-plugin/node_modules/css-font-size-keywords/index.json":
/*!**********************************************************************************!*\
  !*** ../tpa-style-webpack-plugin/node_modules/css-font-size-keywords/index.json ***!
  \**********************************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */
/***/ (function(module) {

module.exports = ["xx-small","x-small","small","medium","large","x-large","xx-large","larger","smaller"];

/***/ }),

/***/ "../tpa-style-webpack-plugin/node_modules/css-font-stretch-keywords/index.json":
/*!*************************************************************************************!*\
  !*** ../tpa-style-webpack-plugin/node_modules/css-font-stretch-keywords/index.json ***!
  \*************************************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */
/***/ (function(module) {

module.exports = ["normal","condensed","semi-condensed","extra-condensed","ultra-condensed","expanded","semi-expanded","extra-expanded","ultra-expanded"];

/***/ }),

/***/ "../tpa-style-webpack-plugin/node_modules/css-font-style-keywords/index.json":
/*!***********************************************************************************!*\
  !*** ../tpa-style-webpack-plugin/node_modules/css-font-style-keywords/index.json ***!
  \***********************************************************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = ["normal","italic","oblique"];

/***/ }),

/***/ "../tpa-style-webpack-plugin/node_modules/css-font-weight-keywords/index.json":
/*!************************************************************************************!*\
  !*** ../tpa-style-webpack-plugin/node_modules/css-font-weight-keywords/index.json ***!
  \************************************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, default */
/***/ (function(module) {

module.exports = ["normal","bold","bolder","lighter","100","200","300","400","500","600","700","800","900"];

/***/ }),

/***/ "../tpa-style-webpack-plugin/node_modules/css-global-keywords/index.json":
/*!*******************************************************************************!*\
  !*** ../tpa-style-webpack-plugin/node_modules/css-global-keywords/index.json ***!
  \*******************************************************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = ["inherit","initial","unset"];

/***/ }),

/***/ "../tpa-style-webpack-plugin/node_modules/css-list-helpers/dist/index.js":
/*!*******************************************************************************!*\
  !*** ../tpa-style-webpack-plugin/node_modules/css-list-helpers/dist/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Splits a CSS declaration value (shorthand) using provided separators
 * as the delimiters.
 */
function split(
/**
 * A CSS declaration value (shorthand).
 */
value, 
/**
 * Any number of separator characters used for splitting.
 */
separators, _a) {
    var _b = (_a === void 0 ? {} : _a).last, last = _b === void 0 ? false : _b;
    if (typeof value !== 'string') {
        throw new TypeError('expected a string');
    }
    if (!Array.isArray(separators)) {
        throw new TypeError('expected a string array of separators');
    }
    if (typeof last !== 'boolean') {
        throw new TypeError('expected a Boolean value for options.last');
    }
    var array = [];
    var current = '';
    var splitMe = false;
    var func = 0;
    var quote = false;
    var escape = false;
    for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
        var char = value_1[_i];
        if (quote) {
            if (escape) {
                escape = false;
            }
            else if (char === '\\') {
                escape = true;
            }
            else if (char === quote) {
                quote = false;
            }
        }
        else if (char === '"' || char === '\'') {
            quote = char;
        }
        else if (char === '(') {
            func += 1;
        }
        else if (char === ')') {
            if (func > 0) {
                func -= 1;
            }
        }
        else if (func === 0) {
            if (separators.indexOf(char) !== -1) {
                splitMe = true;
            }
        }
        if (splitMe) {
            if (current !== '') {
                array.push(current.trim());
            }
            current = '';
            splitMe = false;
        }
        else {
            current += char;
        }
    }
    if (last || current !== '') {
        array.push(current.trim());
    }
    return array;
}
exports.split = split;
/**
 * Splits a CSS declaration value (shorthand) using whitespace characters
 * as the delimiters.
 */
function splitBySpaces(
/**
 * A CSS declaration value (shorthand).
 */
value) {
    var spaces = [' ', '\n', '\t'];
    return split(value, spaces);
}
exports.splitBySpaces = splitBySpaces;
/**
 * Splits a CSS declaration value (shorthand) using commas as the delimiters.
 */
function splitByCommas(
/**
 * A CSS declaration value (shorthand).
 */
value) {
    var comma = ',';
    return split(value, [comma], { last: true });
}
exports.splitByCommas = splitByCommas;


/***/ }),

/***/ "../tpa-style-webpack-plugin/node_modules/css-system-font-keywords/index.json":
/*!************************************************************************************!*\
  !*** ../tpa-style-webpack-plugin/node_modules/css-system-font-keywords/index.json ***!
  \************************************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = ["caption","icon","menu","message-box","small-caption","status-bar"];

/***/ }),

/***/ "../tpa-style-webpack-plugin/node_modules/parse-css-font/dist/helpers.js":
/*!*******************************************************************************!*\
  !*** ../tpa-style-webpack-plugin/node_modules/parse-css-font/dist/helpers.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cssFontSizeKeywords = __webpack_require__(/*! css-font-size-keywords */ "../tpa-style-webpack-plugin/node_modules/css-font-size-keywords/index.json");
function isSize(value) {
    return /^[\d\.]/.test(value)
        || value.indexOf('/') !== -1
        || cssFontSizeKeywords.indexOf(value) !== -1;
}
exports.isSize = isSize;


/***/ }),

/***/ "../tpa-style-webpack-plugin/node_modules/parse-css-font/dist/index.js":
/*!*****************************************************************************!*\
  !*** ../tpa-style-webpack-plugin/node_modules/parse-css-font/dist/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var unquote = __webpack_require__(/*! unquote */ "../tpa-style-webpack-plugin/node_modules/unquote/index.js");
var globalKeywords = __webpack_require__(/*! css-global-keywords */ "../tpa-style-webpack-plugin/node_modules/css-global-keywords/index.json");
var systemFontKeywords = __webpack_require__(/*! css-system-font-keywords */ "../tpa-style-webpack-plugin/node_modules/css-system-font-keywords/index.json");
var fontWeightKeywords = __webpack_require__(/*! css-font-weight-keywords */ "../tpa-style-webpack-plugin/node_modules/css-font-weight-keywords/index.json");
var fontStyleKeywords = __webpack_require__(/*! css-font-style-keywords */ "../tpa-style-webpack-plugin/node_modules/css-font-style-keywords/index.json");
var fontStretchKeywords = __webpack_require__(/*! css-font-stretch-keywords */ "../tpa-style-webpack-plugin/node_modules/css-font-stretch-keywords/index.json");
var cssListHelpers = __webpack_require__(/*! css-list-helpers */ "../tpa-style-webpack-plugin/node_modules/css-list-helpers/dist/index.js");
var helpers = __webpack_require__(/*! ./helpers */ "../tpa-style-webpack-plugin/node_modules/parse-css-font/dist/helpers.js");
var errorPrefix = '[parse-css-font] ';
function parseCSSFont(value) {
    if (typeof value !== 'string') {
        throw new TypeError(errorPrefix + 'Expected a string.');
    }
    if (value === '') {
        throw error('Cannot parse an empty string.');
    }
    if (systemFontKeywords.indexOf(value) !== -1) {
        return { system: value };
    }
    var font = {
        lineHeight: 'normal',
        stretch: 'normal',
        style: 'normal',
        variant: 'normal',
        weight: 'normal',
    };
    var isLocked = false;
    var tokens = cssListHelpers.splitBySpaces(value);
    var token = tokens.shift();
    for (; !!token; token = tokens.shift()) {
        if (token === 'normal' || globalKeywords.indexOf(token) !== -1) {
            ['style', 'variant', 'weight', 'stretch'].forEach(function (prop) {
                font[prop] = token;
            });
            isLocked = true;
            continue;
        }
        if (fontWeightKeywords.indexOf(token) !== -1) {
            if (isLocked) {
                continue;
            }
            font.weight = token;
            continue;
        }
        if (fontStyleKeywords.indexOf(token) !== -1) {
            if (isLocked) {
                continue;
            }
            font.style = token;
            continue;
        }
        if (fontStretchKeywords.indexOf(token) !== -1) {
            if (isLocked) {
                continue;
            }
            font.stretch = token;
            continue;
        }
        if (helpers.isSize(token)) {
            var parts = cssListHelpers.split(token, ['/']);
            font.size = parts[0];
            if (!!parts[1]) {
                font.lineHeight = parseLineHeight(parts[1]);
            }
            else if (tokens[0] === '/') {
                tokens.shift();
                font.lineHeight = parseLineHeight(tokens.shift());
            }
            if (!tokens.length) {
                throw error('Missing required font-family.');
            }
            font.family = cssListHelpers.splitByCommas(tokens.join(' ')).map(unquote);
            return font;
        }
        if (font.variant !== 'normal') {
            throw error('Unknown or unsupported font token: ' + font.variant);
        }
        if (isLocked) {
            continue;
        }
        font.variant = token;
    }
    throw error('Missing required font-size.');
}
exports.default = parseCSSFont;
function error(message) {
    return new Error(errorPrefix + message);
}
function parseLineHeight(value) {
    var parsed = parseFloat(value);
    if (parsed.toString() === value) {
        return parsed;
    }
    return value;
}


/***/ }),

/***/ "../tpa-style-webpack-plugin/node_modules/unquote/index.js":
/*!*****************************************************************!*\
  !*** ../tpa-style-webpack-plugin/node_modules/unquote/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var reg = /[\'\"]/

module.exports = function unquote(str) {
  if (!str) {
    return ''
  }
  if (reg.test(str.charAt(0))) {
    str = str.substr(1)
  }
  if (reg.test(str.charAt(str.length - 1))) {
    str = str.substr(0, str.length - 1)
  }
  return str
}


/***/ }),

/***/ "../tpa-style-webpack-plugin/runtime.js":
/*!**********************************************!*\
  !*** ../tpa-style-webpack-plugin/runtime.js ***!
  \**********************************************/
/*! exports provided: getProcessedCss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProcessedCss", function() { return getProcessedCss; });
/* harmony import */ var _customSyntaxHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customSyntaxHelper */ "../tpa-style-webpack-plugin/dist/runtime/customSyntaxHelper.js");
/* harmony import */ var _generateTPAParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateTPAParams */ "../tpa-style-webpack-plugin/dist/runtime/generateTPAParams.js");
/* harmony import */ var _processor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./processor */ "../tpa-style-webpack-plugin/dist/runtime/processor.js");
/* harmony import */ var _cssFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cssFunctions */ "../tpa-style-webpack-plugin/dist/runtime/cssFunctions.js");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugins */ "../tpa-style-webpack-plugin/dist/runtime/plugins.js");
var __assign = undefined && undefined.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
var plugins = new _plugins__WEBPACK_IMPORTED_MODULE_4__["Plugins"]();
Object.keys(_cssFunctions__WEBPACK_IMPORTED_MODULE_3__["cssFunctions"]).forEach(function (funcName) {
    return plugins.addCssFunction(funcName, _cssFunctions__WEBPACK_IMPORTED_MODULE_3__["cssFunctions"][funcName]);
});
var defaultOptions = { isRTL: false };
function getProcessedCss(_a, options) {
    var siteColors = _a.siteColors,
        siteTextPresets = _a.siteTextPresets,
        styleParams = _a.styleParams;
    options = __assign({}, defaultOptions, options);
    var injectedData = {"cssVars":{"--bgColor":"\"color(color-7)\"","--titleFontStyle":"\"font({theme: 'Body-M', size: '30px'})\"","--buttonBackgroundColor":"\"color(color-8)\"","--buttonBorderColor":"\"color(color-16)\"","--buttonTextColor":"\"color(color-15)\"","--buttonTextFont":"\"font({theme: 'Body-M', size: '22px', weight: 'bold'})\"","--buttonBorderSize":"\"number(0)\"","--paragraphWidth":"\"number(50)\"","--buttonAlignment":"\"string(center)\""},"customSyntaxStrs":["\"font(--titleFontStyle)\"","\"underline(--titleFontStyle)\"","\"unit(--paragraphWidth, %)\"","\"color(color-7)\"","\"font({theme: 'Body-M', size: '30px'})\"","\"color(color-8)\"","\"color(color-16)\"","\"color(color-15)\"","\"font({theme: 'Body-M', size: '22px', weight: 'bold'})\"","\"number(0)\"","\"number(50)\"","\"string(center)\"","\"direction(DIR)\"","\"color(color-1)\"","\"color(--bgColor)\"","\"font(Title)\"","\"color(--buttonBackgroundColor)\"","\"font(--buttonTextFont)\"","\"underline(--buttonTextFont)\"","\"color(--buttonTextColor)\"","\"unit(--buttonBorderSize, px)\"","\"color(--buttonBorderColor)\"","\"unit(--buttonBorderSize, px)\"","\"string(--buttonAlignment)\"","\"direction(DEG-START)\""],"css":"\n\n__db5547__ h1 {\n  font: \"font(--titleFontStyle)\";text-decoration: \"underline(--titleFontStyle)\"; }\n\n__db5547__ p {\n  width: \"unit(--paragraphWidth, %)\"; }\n\n__db5547__ ._3RAvOJKyEOhhZalsG8I4bA {\n  --bgColor: \"color(color-7)\";\n  --titleFontStyle: \"font({theme: 'Body-M', size: '30px'})\";\n  --buttonBackgroundColor: \"color(color-8)\";\n  --buttonBorderColor: \"color(color-16)\";\n  --buttonTextColor: \"color(color-15)\";\n  --buttonTextFont: \"font({theme: 'Body-M', size: '22px', weight: 'bold'})\";\n  --buttonBorderSize: \"number(0)\";\n  --paragraphWidth: \"number(50)\";\n  --buttonAlignment: \"string(center)\";\n  direction: \"direction(DIR)\";\n  color: \"color(color-1)\";\n  background-color: \"color(--bgColor)\";\n  font: \"font(Title)\"; }\n\n__db5547__ ._3GPw6UCPY0DjaxYqquMgI8 {\n  background-color: \"color(--buttonBackgroundColor)\";\n  font: \"font(--buttonTextFont)\";text-decoration: \"underline(--buttonTextFont)\";\n  color: \"color(--buttonTextColor)\";\n  border: \"unit(--buttonBorderSize, px)\" solid \"color(--buttonBorderColor)\";\n  border-radius: \"unit(--buttonBorderSize, px)\";\n  text-align: \"string(--buttonAlignment)\";\n  transform: rotate(\"direction(DEG-START)\"deg); }"};
    if (!injectedData.css) {
        return '';
    }
    var prefixedCss = injectedData.css.replace(new RegExp('__db5547__', 'g'), options.prefixSelector ? "" + options.prefixSelector : '');
    var tpaParams = Object(_generateTPAParams__WEBPACK_IMPORTED_MODULE_1__["generateTPAParams"])(siteColors, siteTextPresets, styleParams, options);
    var customSyntaxHelper = new _customSyntaxHelper__WEBPACK_IMPORTED_MODULE_0__["CustomSyntaxHelper"]();
    customSyntaxHelper.setVars(injectedData.cssVars);
    customSyntaxHelper.setCustomSyntax(injectedData.customSyntaxStrs);
    return customSyntaxHelper.customSyntaxStrs.reduce(function (processedContent, part) {
        var newValue = Object(_processor__WEBPACK_IMPORTED_MODULE_2__["processor"])({
            part: part,
            customSyntaxHelper: customSyntaxHelper,
            tpaParams: tpaParams
        }, { plugins: plugins });
        return processedContent.replace(new RegExp(escapeRegExp(part), 'g'), newValue);
    }, prefixedCss);
}

/***/ }),

/***/ "./src/components/Main.jsx":
/*!*********************************!*\
  !*** ./src/components/Main.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Main = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var React = _interopRequireWildcard(_react);

var _Main = __webpack_require__(/*! ./Main.scss */ "./src/components/Main.scss");

var _Main2 = _interopRequireDefault(_Main);

var _runtime = __webpack_require__(/*! tpa-style-webpack-plugin/runtime */ "../tpa-style-webpack-plugin/runtime.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = exports.Main = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main(props) {
    _classCallCheck(this, Main);

    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

    _this.state = {
      isRTL: false
    };
    return _this;
  }

  _createClass(Main, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var a = performance.now();
      var options = Object.assign({ isRTL: this.state.isRTL }, this.props.prefix ? { prefixSelector: '.' + this.props.prefix } : {});

      var css = (0, _runtime.getProcessedCss)(this.props.style, options);
      console.log(performance.now() - a);
      console.log(css);
      return React.createElement(
        'div',
        { className: this.props.prefix },
        React.createElement(
          'style',
          null,
          css
        ),
        React.createElement(
          'div',
          { className: _Main2.default.root },
          React.createElement(
            'p',
            null,
            'This is a TEST!'
          ),
          React.createElement(
            'button',
            { className: _Main2.default.button, onClick: function onClick() {
                return _this2.setState({ isRTL: !_this2.state.isRTL });
              } },
            'test button'
          )
        )
      );
    }
  }]);

  return Main;
}(React.Component);

/***/ }),

/***/ "./src/components/Main.scss":
/*!**********************************!*\
  !*** ./src/components/Main.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"root":"_3RAvOJKyEOhhZalsG8I4bA","button":"_3GPw6UCPY0DjaxYqquMgI8"};

/***/ }),

/***/ "./src/fake-tpa-response.json":
/*!************************************!*\
  !*** ./src/fake-tpa-response.json ***!
  \************************************/
/*! exports provided: intent, callId, type, res, status, default */
/***/ (function(module) {

module.exports = {"intent":"TPA_RESPONSE","callId":1,"type":"appIsAlive","res":{"fonts":{"cssUrls":["https://static.parastorage.com/services/santa-resources/resources/viewer/user-site-fonts/v5/languages.css"],"imageSpriteUrl":"https://static.parastorage.com/services/santa-resources/resources/viewer/editorUI/fonts.v5.png","fontsMeta":[{"lang":"arabic","fonts":[{"displayName":"Ahmed Outline","fontFamily":"ahmedltw20-outlineregul","cdnName":"","genericFamily":"fantasy","provider":"monotype","characterSets":["arabic"],"permissions":"all","fallbacks":"","spriteIndex":185,"cssFontFamily":"ahmedltw20-outlineregul,fantasy"},{"displayName":"Amiri","fontFamily":"amiri","cdnName":"","genericFamily":"serif","provider":"open source","characterSets":["arabic"],"permissions":"all","fallbacks":"","spriteIndex":187,"cssFontFamily":"amiri,serif"},{"displayName":"Arabic Typesetting Regular","fontFamily":"arabictypesettingw23-re","cdnName":"","genericFamily":"serif","provider":"monotype","characterSets":["arabic"],"permissions":"all","fallbacks":"","spriteIndex":177,"cssFontFamily":"arabictypesettingw23-re,serif"},{"displayName":"Arial","fontFamily":"arial","cdnName":"","genericFamily":"sans-serif","provider":"system","characterSets":["latin","latin-ext","cyrillic","hebrew","arabic"],"permissions":"all","fallbacks":"ｍｓ ｐゴシック,ms pgothic,돋움,dotum,helvetica","spriteIndex":2,"cssFontFamily":"arial,\"ｍｓ ｐゴシック\",\"ms pgothic\",\"돋움\",dotum,helvetica,sans-serif"},{"displayName":"Arian","fontFamily":"arian-lt-w20-regular","cdnName":"","genericFamily":"sans-serif","provider":"monotype","characterSets":["arabic"],"permissions":"all","fallbacks":"","spriteIndex":180,"cssFontFamily":"arian-lt-w20-regular,sans-serif"},{"displayName":"Arian Light","fontFamily":"arian-lt-w20-light","cdnName":"","genericFamily":"sans-serif","provider":"monotype","characterSets":["arabic"],"permissions":"all","fallbacks":"","spriteIndex":179,"cssFontFamily":"arian-lt-w20-light,sans-serif"},{"displayName":"Courier New","fontFamily":"courier new","cdnName":"","genericFamily":"monospace","provider":"system","characterSets":["latin","latin-ext","cyrillic","hebrew","arabic"],"permissions":"all","fallbacks":"courier-ps-w01,courier-ps-w02,courier-ps-w10","spriteIndex":7,"cssFontFamily":"\"courier new\",courier-ps-w01,courier-ps-w02,courier-ps-w10,monospace"},{"displayName":"DIN Next Arabic","fontFamily":"dinnextltw23-ultralight","cdnName":"","genericFamily":"sans-serif","provider":"monotype","characterSets":["arabic"],"permissions":"all","fallbacks":"","spriteIndex":183,"cssFontFamily":"dinnextltw23-ultralight,sans-serif"},{"displayName":"Droid Naskh","fontFamily":"droid-naskh","cdnName":"","genericFamily":"serif","provider":"open source","characterSets":["arabic"],"permissions":"all","fallbacks":"","spriteIndex":188,"cssFontFamily":"droid-naskh,serif"},{"displayName":"Janna","fontFamily":"janna-lt-w20-regular","cdnName":"","genericFamily":"sans-serif","provider":"monotype","characterSets":["arabic"],"permissions":"all","fallbacks":"","spriteIndex":181,"cssFontFamily":"janna-lt-w20-regular,sans-serif"},{"displayName":"Kufi Regular","fontFamily":"kufi-lt-w20-regular","cdnName":"","genericFamily":"fantasy","provider":"monotype","characterSets":["arabic"],"permissions":"all","fallbacks":"","spriteIndex":186,"cssFontFamily":"kufi-lt-w20-regular,fantasy"},{"displayName":"Midan","fontFamily":"midan-w20","cdnName":"","genericFamily":"serif","provider":"monotype","characterSets":["arabic"],"permissions":"all","fallbacks":"","spriteIndex":178,"cssFontFamily":"midan-w20,serif"},{"displayName":"Neue Helvetica Arabic","fontFamily":"helveticaneueltw20-ligh","cdnName":"","genericFamily":"sans-serif","provider":"monotype","characterSets":["arabic"],"permissions":"all","fallbacks":"","spriteIndex":182,"cssFontFamily":"helveticaneueltw20-ligh,sans-serif"},{"displayName":"Tahoma","fontFamily":"tahoma","cdnName":"","genericFamily":"sans-serif","provider":"system","characterSets":["latin","latin-ext","hebrew","arabic"],"permissions":"all","fallbacks":"tahoma-w01-regular,tahoma-w02-regular,tahoma-w10-regular,tahoma-w15--regular,tahoma-w99-regular","spriteIndex":77,"cssFontFamily":"tahoma,tahoma-w01-regular,tahoma-w02-regular,tahoma-w10-regular,tahoma-w15--regular,tahoma-w99-regular,sans-serif"},{"displayName":"Tanseek Modern Light","fontFamily":"tanseekmodernw20-light","cdnName":"","genericFamily":"sans-serif","provider":"monotype","characterSets":["arabic"],"permissions":"all","fallbacks":"","spriteIndex":184,"cssFontFamily":"tanseekmodernw20-light,sans-serif"},{"displayName":"Times New Roman","fontFamily":"times new roman","cdnName":"","genericFamily":"serif","provider":"system","characterSets":["latin","latin-ext","cyrillic","hebrew","arabic"],"permissions":"all","fallbacks":"times","spriteIndex":81,"cssFontFamily":"\"times new roman\",times,serif"}]},{"lang":"hebrew","fonts":[{"displayName":"Adler","fontFamily":"adler-w26-regular","cdnName":"","genericFamily":"cursive","provider":"monotype","characterSets":["hebrew"],"permissions":"all","fallbacks":"","spriteIndex":161,"cssFontFamily":"adler-w26-regular,cursive"},{"displayName":"Alef","fontFamily":"alef-regular","cdnName":"","genericFamily":"sans-serif","provider":"open source","characterSets":["hebrew"],"permissions":"all","fallbacks":"","spriteIndex":159,"cssFontFamily":"alef-regular,sans-serif"},{"displayName":"Almoni DL Bold","fontFamily":"almoni-dl-aaa-700","cdnName":"","genericFamily":"sans-serif","provider":"open source","characterSets":["hebrew"],"permissions":"all","fallbacks":"","spriteIndex":173,"cssFontFamily":"almoni-dl-aaa-700,sans-serif"},{"displayName":"Almoni DL Light","fontFamily":"almoni-dl-aaa-300","cdnName":"","genericFamily":"sans-serif","provider":"open source","characterSets":["hebrew"],"permissions":"all","fallbacks":"","spriteIndex":171,"cssFontFamily":"almoni-dl-aaa-300,sans-serif"},{"displayName":"Almoni DL Regular","fontFamily":"almoni-dl-aaa-400","cdnName":"","genericFamily":"sans-serif","provider":"open source","characterSets":["hebrew"],"permissions":"all","fallbacks":"","spriteIndex":172,"cssFontFamily":"almoni-dl-aaa-400,sans-serif"},{"displayName":"Arial","fontFamily":"arial","cdnName":"","genericFamily":"sans-serif","provider":"system","characterSets":["latin","latin-ext","cyrillic","hebrew","arabic"],"permissions":"all","fallbacks":"ｍｓ ｐゴシック,ms pgothic,돋움,dotum,helvetica","spriteIndex":2,"cssFontFamily":"arial,\"ｍｓ ｐゴシック\",\"ms pgothic\",\"돋움\",dotum,helvetica,sans-serif"},{"displayName":"Asimon","fontFamily":"asimon-aaa-400","cdnName":"","genericFamily":"sans-serif","provider":"open source","characterSets":["hebrew"],"permissions":"all","fallbacks":"","spriteIndex":168,"cssFontFamily":"asimon-aaa-400,sans-serif"},{"displayName":"Atlas","fontFamily":"atlas-aaa-500","cdnName":"","genericFamily":"sans-serif","provider":"open source","characterSets":["hebrew"],"permissions":"all","fallbacks":"","spriteIndex":169,"cssFontFamily":"atlas-aaa-500,sans-serif"},{"displayName":"Chips","fontFamily":"chips-w26-normal","cdnName":"","genericFamily":"fantasy","provider":"monotype","characterSets":["hebrew"],"permissions":"all","fallbacks":"","spriteIndex":165,"cssFontFamily":"chips-w26-normal,fantasy"},{"displayName":"Courier New","fontFamily":"courier new","cdnName":"","genericFamily":"monospace","provider":"system","characterSets":["latin","latin-ext","cyrillic","hebrew","arabic"],"permissions":"all","fallbacks":"courier-ps-w01,courier-ps-w02,courier-ps-w10","spriteIndex":7,"cssFontFamily":"\"courier new\",courier-ps-w01,courier-ps-w02,courier-ps-w10,monospace"},{"displayName":"Frank Ruhl","fontFamily":"frank-ruhl-w26-regular","cdnName":"","genericFamily":"serif","provider":"monotype","characterSets":["hebrew"],"permissions":"all","fallbacks":"","spriteIndex":158,"cssFontFamily":"frank-ruhl-w26-regular,serif"},{"displayName":"Gulash","fontFamily":"gulash-w26-regular","cdnName":"","genericFamily":"cursive","provider":"monotype","characterSets":["hebrew"],"permissions":"all","fallbacks":"","spriteIndex":164,"cssFontFamily":"gulash-w26-regular,cursive"},{"displayName":"Longlife","fontFamily":"haim-arukeem-w26-medium","cdnName":"","genericFamily":"sans-serif","provider":"monotype","characterSets":["hebrew"],"permissions":"all","fallbacks":"","spriteIndex":162,"cssFontFamily":"haim-arukeem-w26-medium,sans-serif"},{"displayName":"Miriam","fontFamily":"miriam-w26-medium","cdnName":"","genericFamily":"serif","provider":"monotype","characterSets":["hebrew"],"permissions":"all","fallbacks":"","spriteIndex":160,"cssFontFamily":"miriam-w26-medium,serif"},{"displayName":"Mixtape","fontFamily":"mixtape-aaa-400","cdnName":"","genericFamily":"sans-serif","provider":"open source","characterSets":["hebrew"],"permissions":"all","fallbacks":"","spriteIndex":174,"cssFontFamily":"mixtape-aaa-400,sans-serif"},{"displayName":"Museum","fontFamily":"museum-aaa-400","cdnName":"","genericFamily":"sans-serif","provider":"open source","characterSets":["hebrew"],"permissions":"all","fallbacks":"","spriteIndex":175,"cssFontFamily":"museum-aaa-400,sans-serif"},{"displayName":"Nekudot Bold","fontFamily":"nekudot-w26-bold","cdnName":"","genericFamily":"fantasy","provider":"monotype","characterSets":["hebrew"],"permissions":"all","fallbacks":"","spriteIndex":166,"cssFontFamily":"nekudot-w26-bold,fantasy"},{"displayName":"Omes","fontFamily":"omes-aaa-400","cdnName":"","genericFamily":"cursive","provider":"open source","characterSets":["hebrew"],"permissions":"all","fallbacks":"","spriteIndex":170,"cssFontFamily":"omes-aaa-400,cursive"},{"displayName":"Open Sans Condensed","fontFamily":"opensanshebrewcondensed-regular","cdnName":"","genericFamily":"sans-serif","provider":"open source","characterSets":["hebrew"],"permissions":"all","fallbacks":"","spriteIndex":167,"cssFontFamily":"opensanshebrewcondensed-regular,sans-serif"},{"displayName":"Shabazi Bold","fontFamily":"shabazi-w26-bold","cdnName":"","genericFamily":"serif","provider":"monotype","characterSets":["hebrew"],"permissions":"all","fallbacks":"","spriteIndex":163,"cssFontFamily":"shabazi-w26-bold,serif"},{"displayName":"Suez One","fontFamily":"suez one","cdnName":"Suez+One","genericFamily":"serif","provider":"google","characterSets":["latin","latin-ext","hebrew"],"permissions":"all","fallbacks":"","spriteIndex":254,"cssFontFamily":"\"suez one\",serif"},{"displayName":"Tahoma","fontFamily":"tahoma","cdnName":"","genericFamily":"sans-serif","provider":"system","characterSets":["latin","latin-ext","hebrew","arabic"],"permissions":"all","fallbacks":"tahoma-w01-regular,tahoma-w02-regular,tahoma-w10-regular,tahoma-w15--regular,tahoma-w99-regular","spriteIndex":77,"cssFontFamily":"tahoma,tahoma-w01-regular,tahoma-w02-regular,tahoma-w10-regular,tahoma-w15--regular,tahoma-w99-regular,sans-serif"},{"displayName":"Times New Roman","fontFamily":"times new roman","cdnName":"","genericFamily":"serif","provider":"system","characterSets":["latin","latin-ext","cyrillic","hebrew","arabic"],"permissions":"all","fallbacks":"times","spriteIndex":81,"cssFontFamily":"\"times new roman\",times,serif"}]},{"lang":"latin","fonts":[{"displayName":"Adobe Caslon","fontFamily":"adobe-caslon-w01-smbd","cdnName":"","genericFamily":"serif","provider":"monotype","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":218,"cssFontFamily":"adobe-caslon-w01-smbd,serif"},{"displayName":"Amatic SC","fontFamily":"amatic sc","cdnName":"Amatic+SC","genericFamily":"cursive","provider":"google","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":154,"cssFontFamily":"\"amatic sc\",cursive"},{"displayName":"American Typewriter","fontFamily":"americantypwrteritcw01--731025","cdnName":"","genericFamily":"serif","provider":"monotype","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"americantypwrteritcw02--737091","spriteIndex":142,"cssFontFamily":"americantypwrteritcw01--731025,americantypwrteritcw02--737091,serif"},{"displayName":"Anton","fontFamily":"anton","cdnName":"Anton","genericFamily":"sans-serif","provider":"google","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"","spriteIndex":0,"cssFontFamily":"anton,sans-serif"},{"displayName":"Arial","fontFamily":"arial","cdnName":"","genericFamily":"sans-serif","provider":"system","characterSets":["latin","latin-ext","cyrillic","hebrew","arabic"],"permissions":"all","fallbacks":"ｍｓ ｐゴシック,ms pgothic,돋움,dotum,helvetica","spriteIndex":2,"cssFontFamily":"arial,\"ｍｓ ｐゴシック\",\"ms pgothic\",\"돋움\",dotum,helvetica,sans-serif"},{"displayName":"Arial Black","fontFamily":"arial black","cdnName":"","genericFamily":"sans-serif","provider":"system","characterSets":["latin","latin-ext","cyrillic"],"permissions":"all","fallbacks":"arial-w01-black,arial-w02-black,arial-w10 black","spriteIndex":12,"cssFontFamily":"\"arial black\",arial-w01-black,arial-w02-black,\"arial-w10 black\",sans-serif"},{"displayName":"August Bold","fontFamily":"august-bold","cdnName":"","genericFamily":"sans-serif","provider":"designers-fonts","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":264,"cssFontFamily":"august-bold,sans-serif"},{"displayName":"August Light","fontFamily":"august-light","cdnName":"","genericFamily":"sans-serif","provider":"designers-fonts","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":265,"cssFontFamily":"august-light,sans-serif"},{"displayName":"August Medium","fontFamily":"august-medium","cdnName":"","genericFamily":"sans-serif","provider":"designers-fonts","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":266,"cssFontFamily":"august-medium,sans-serif"},{"displayName":"Avenida","fontFamily":"avenida-w01","cdnName":"","genericFamily":"fantasy","provider":"monotype","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"avenida-w02","spriteIndex":112,"cssFontFamily":"avenida-w01,avenida-w02,fantasy"},{"displayName":"Avenir","fontFamily":"avenir-lt-w01_85-heavy1475544","cdnName":"","genericFamily":"sans-serif","provider":"monotype","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":215,"cssFontFamily":"avenir-lt-w01_85-heavy1475544,sans-serif"},{"displayName":"Avenir Light","fontFamily":"avenir-lt-w01_35-light1475496","cdnName":"","genericFamily":"sans-serif","provider":"monotype","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":216,"cssFontFamily":"avenir-lt-w01_35-light1475496,sans-serif"},{"displayName":"Barlow Extra Light","fontFamily":"barlow-extralight","cdnName":"Barlow","genericFamily":"sans-serif","provider":"google-self-hosted","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"barlow","spriteIndex":237,"cssFontFamily":"barlow-extralight,barlow,sans-serif"},{"displayName":"Barlow Medium","fontFamily":"barlow-medium","cdnName":"Barlow","genericFamily":"sans-serif","provider":"google-self-hosted","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"barlow","spriteIndex":239,"cssFontFamily":"barlow-medium,barlow,sans-serif"},{"displayName":"Basic","fontFamily":"basic","cdnName":"Basic","genericFamily":"sans-serif","provider":"google","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"","spriteIndex":15,"cssFontFamily":"basic,sans-serif"},{"displayName":"Belinda","fontFamily":"belinda-w00-regular","cdnName":"","genericFamily":"script","provider":"monotype","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":221,"cssFontFamily":"belinda-w00-regular,script"},{"displayName":"Bodoni Poster","fontFamily":"bodoni-w01-poster","cdnName":"","genericFamily":"fantasy","provider":"monotype","characterSets":["latin","cyrillic"],"permissions":"all","fallbacks":"bodoni-poster-w10","spriteIndex":108,"cssFontFamily":"bodoni-w01-poster,bodoni-poster-w10,fantasy"},{"displayName":"Braggadocio","fontFamily":"braggadocio-w01","cdnName":"","genericFamily":"fantasy","provider":"monotype","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":117,"cssFontFamily":"braggadocio-w01,fantasy"},{"displayName":"Brandon Grotesque","fontFamily":"brandon-grot-w01-light","cdnName":"","genericFamily":"sans-serif","provider":"monotype","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":214,"cssFontFamily":"brandon-grot-w01-light,sans-serif"},{"displayName":"Bree","fontFamily":"bree-w01-thin-oblique","cdnName":"","genericFamily":"sans-serif","provider":"monotype","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":210,"cssFontFamily":"bree-w01-thin-oblique,sans-serif"},{"displayName":"Caudex","fontFamily":"caudex","cdnName":"Caudex","genericFamily":"serif","provider":"google","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"","spriteIndex":17,"cssFontFamily":"caudex,serif"},{"displayName":"Chelsea Market","fontFamily":"chelsea market","cdnName":"Chelsea+Market","genericFamily":"fantasy","provider":"google","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":19,"cssFontFamily":"\"chelsea market\",fantasy"},{"displayName":"Cinzel","fontFamily":"cinzel","cdnName":"Cinzel","genericFamily":"serif","provider":"google","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":204,"cssFontFamily":"cinzel,serif"},{"displayName":"Clarendon LT","fontFamily":"clarendon-w01-medium-692107","cdnName":"","genericFamily":"serif","provider":"monotype","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"clarendon-w02-medium-693834","spriteIndex":138,"cssFontFamily":"clarendon-w01-medium-692107,clarendon-w02-medium-693834,serif"},{"displayName":"Comic Sans MS","fontFamily":"comic sans ms","cdnName":"","genericFamily":"cursive","provider":"system","characterSets":["latin","latin-ext","cyrillic"],"permissions":"all","fallbacks":"comic-sans-w01-regular,comic-sans-w02-regular,comic-sans-w10-regular","spriteIndex":20,"cssFontFamily":"\"comic sans ms\",comic-sans-w01-regular,comic-sans-w02-regular,comic-sans-w10-regular,cursive"},{"displayName":"Cookie","fontFamily":"cookie","cdnName":"Cookie","genericFamily":"cursive","provider":"google","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"","spriteIndex":148,"cssFontFamily":"cookie,cursive"},{"displayName":"Coquette","fontFamily":"coquette-w00-light","cdnName":"","genericFamily":"sans-serif","provider":"monotype","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"","spriteIndex":155,"cssFontFamily":"coquette-w00-light,sans-serif"},{"displayName":"Corben","fontFamily":"corben","cdnName":"Corben","genericFamily":"serif","provider":"google","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":23,"cssFontFamily":"corben,serif"},{"displayName":"Cormorant Garamond Light","fontFamily":"cormorantgaramond-light","cdnName":"Cormorant+Garamond","genericFamily":"serif","provider":"google-self-hosted","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"cormorant garamond","spriteIndex":245,"cssFontFamily":"cormorantgaramond-light,\"cormorant garamond\",serif"},{"displayName":"Cormorant Garamond Semi Bold","fontFamily":"cormorantgaramond-semibold","cdnName":"Cormorant+Garamond","genericFamily":"serif","provider":"google-self-hosted","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"cormorant garamond","spriteIndex":247,"cssFontFamily":"cormorantgaramond-semibold,\"cormorant garamond\",serif"},{"displayName":"Courier New","fontFamily":"courier new","cdnName":"","genericFamily":"monospace","provider":"system","characterSets":["latin","latin-ext","cyrillic","hebrew","arabic"],"permissions":"all","fallbacks":"courier-ps-w01,courier-ps-w02,courier-ps-w10","spriteIndex":7,"cssFontFamily":"\"courier new\",courier-ps-w01,courier-ps-w02,courier-ps-w10,monospace"},{"displayName":"DIN Neuzeit Grotesk","fontFamily":"dinneuzeitgroteskltw01-_812426","cdnName":"","genericFamily":"sans-serif","provider":"monotype","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":224,"cssFontFamily":"dinneuzeitgroteskltw01-_812426,sans-serif"},{"displayName":"DIN Next Light","fontFamily":"din-next-w01-light","cdnName":"","genericFamily":"sans-serif","provider":"monotype","characterSets":["latin","latin-ext","cyrillic"],"permissions":"all","fallbacks":"din-next-w02-light,din-next-w10-light","spriteIndex":121,"cssFontFamily":"din-next-w01-light,din-next-w02-light,din-next-w10-light,sans-serif"},{"displayName":"Damion","fontFamily":"damion","cdnName":"Damion","genericFamily":"cursive","provider":"google","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":253,"cssFontFamily":"damion,cursive"},{"displayName":"Dancing Script Regular","fontFamily":"dancingscript-regular","cdnName":"Dancing+Script","genericFamily":"cursive","provider":"google-self-hosted","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"dancing script","spriteIndex":251,"cssFontFamily":"dancingscript-regular,\"dancing script\",cursive"},{"displayName":"Droid Serif","fontFamily":"droid-serif-w01-regular","cdnName":"","genericFamily":"serif","provider":"monotype","characterSets":["latin","latin-ext","cyrillic"],"permissions":"all","fallbacks":"droid-serif-w02-regular,droid-serif-w10-regular","spriteIndex":135,"cssFontFamily":"droid-serif-w01-regular,droid-serif-w02-regular,droid-serif-w10-regular,serif"},{"displayName":"EB Garamond","fontFamily":"eb garamond","cdnName":"EB+Garamond","genericFamily":"serif","provider":"google","characterSets":["latin","latin-ext","cyrillic"],"permissions":"all","fallbacks":"","spriteIndex":24,"cssFontFamily":"\"eb garamond\",serif"},{"displayName":"Enriqueta","fontFamily":"enriqueta","cdnName":"Enriqueta","genericFamily":"serif","provider":"google","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"","spriteIndex":27,"cssFontFamily":"enriqueta,serif"},{"displayName":"Forum","fontFamily":"forum","cdnName":"Forum","genericFamily":"serif","provider":"google","characterSets":["latin","latin-ext","cyrillic"],"permissions":"all","fallbacks":"","spriteIndex":29,"cssFontFamily":"forum,serif"},{"displayName":"Fredericka the Great","fontFamily":"fredericka the great","cdnName":"Fredericka+the+Great","genericFamily":"fantasy","provider":"google","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":32,"cssFontFamily":"\"fredericka the great\",fantasy"},{"displayName":"Futura","fontFamily":"futura-lt-w01-book","cdnName":"","genericFamily":"sans-serif","provider":"monotype","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":212,"cssFontFamily":"futura-lt-w01-book,sans-serif"},{"displayName":"Futura Light","fontFamily":"futura-lt-w01-light","cdnName":"","genericFamily":"sans-serif","provider":"monotype","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":213,"cssFontFamily":"futura-lt-w01-light,sans-serif"},{"displayName":"Georgia","fontFamily":"georgia","cdnName":"","genericFamily":"serif","provider":"system","characterSets":["latin","latin-ext","cyrillic"],"permissions":"all","fallbacks":"palatino,book antiqua,palatino linotype","spriteIndex":33,"cssFontFamily":"georgia,palatino,\"book antiqua\",\"palatino linotype\",serif"},{"displayName":"Geotica Four Open","fontFamily":"geotica-w01-four-open","cdnName":"","genericFamily":"fantasy","provider":"monotype","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":115,"cssFontFamily":"geotica-w01-four-open,fantasy"},{"displayName":"Helvetica","fontFamily":"helvetica-w01-roman","cdnName":"","genericFamily":"sans-serif","provider":"monotype","characterSets":["latin","latin-ext","cyrillic"],"permissions":"all","fallbacks":"helvetica-w02-roman,helvetica-lt-w10-roman","spriteIndex":124,"cssFontFamily":"helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif"},{"displayName":"Helvetica Bold","fontFamily":"helvetica-w01-bold","cdnName":"","genericFamily":"sans-serif","provider":"monotype","characterSets":["latin","latin-ext","cyrillic"],"permissions":"all","fallbacks":"helvetica-w02-bold,helvetica-lt-w10-bold","spriteIndex":129,"cssFontFamily":"helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif"},{"displayName":"Helvetica Light","fontFamily":"helvetica-w01-light","cdnName":"","genericFamily":"sans-serif","provider":"monotype","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"helvetica-w02-light","spriteIndex":127,"cssFontFamily":"helvetica-w01-light,helvetica-w02-light,sans-serif"},{"displayName":"ITC Arecibo","fontFamily":"itc-arecibo-w01-regular","cdnName":"","genericFamily":"fantasy","provider":"monotype","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":111,"cssFontFamily":"itc-arecibo-w01-regular,fantasy"},{"displayName":"Impact","fontFamily":"impact","cdnName":"","genericFamily":"sans-serif","provider":"system","characterSets":["latin","latin-ext","cyrillic"],"permissions":"all","fallbacks":"impact-w01-2010,impact-w02-2010,impact-w10-2010","spriteIndex":36,"cssFontFamily":"impact,impact-w01-2010,impact-w02-2010,impact-w10-2010,sans-serif"},{"displayName":"Jockey One","fontFamily":"jockey one","cdnName":"Jockey+One","genericFamily":"sans-serif","provider":"google","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"","spriteIndex":39,"cssFontFamily":"\"jockey one\",sans-serif"},{"displayName":"Josefin Slab","fontFamily":"josefin slab","cdnName":"Josefin+Slab","genericFamily":"serif","provider":"google","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":41,"cssFontFamily":"\"josefin slab\",serif"},{"displayName":"Jura","fontFamily":"jura","cdnName":"Jura","genericFamily":"sans-serif","provider":"google","characterSets":["latin","latin-ext","cyrillic"],"permissions":"all","fallbacks":"","spriteIndex":42,"cssFontFamily":"jura,sans-serif"},{"displayName":"Kelly Slab","fontFamily":"kelly slab","cdnName":"Kelly+Slab","genericFamily":"fantasy","provider":"google","characterSets":["latin","latin-ext","cyrillic"],"permissions":"all","fallbacks":"","spriteIndex":45,"cssFontFamily":"\"kelly slab\",fantasy"},{"displayName":"Kepler","fontFamily":"kepler-w03-light-scd-cp","cdnName":"","genericFamily":"serif","provider":"monotype","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":219,"cssFontFamily":"kepler-w03-light-scd-cp,serif"},{"displayName":"Knedge Bold","fontFamily":"knedge-bold","cdnName":"","genericFamily":"serif","provider":"designers-fonts","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":267,"cssFontFamily":"knedge-bold,serif"},{"displayName":"Lato Light","fontFamily":"lato-light","cdnName":"Lato","genericFamily":"sans-serif","provider":"google-self-hosted","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"lato","spriteIndex":261,"cssFontFamily":"lato-light,lato,sans-serif"},{"displayName":"Libre Baskerville","fontFamily":"libre baskerville","cdnName":"Libre+Baskerville","genericFamily":"serif","provider":"google","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":207,"cssFontFamily":"\"libre baskerville\",serif"},{"displayName":"Linotype Didot","fontFamily":"didot-w01-italic","cdnName":"","genericFamily":"serif","provider":"monotype","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":217,"cssFontFamily":"didot-w01-italic,serif"},{"displayName":"Lobster","fontFamily":"lobster","cdnName":"Lobster","genericFamily":"cursive","provider":"google","characterSets":["latin","latin-ext","cyrillic"],"permissions":"all","fallbacks":"","spriteIndex":54,"cssFontFamily":"lobster,cursive"},{"displayName":"Lucida Console","fontFamily":"lucida console","cdnName":"","genericFamily":"monospace","provider":"system","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"lucida-console-w01","spriteIndex":48,"cssFontFamily":"\"lucida console\",lucida-console-w01,monospace"},{"displayName":"Lucida Sans Unicode","fontFamily":"lucida sans unicode","cdnName":"","genericFamily":"sans-serif","provider":"system","characterSets":["latin"],"permissions":"all","fallbacks":"lucida grande","spriteIndex":50,"cssFontFamily":"\"lucida sans unicode\",\"lucida grande\",sans-serif"},{"displayName":"Lulo Clean","fontFamily":"lulo-clean-w01-one-bold","cdnName":"","genericFamily":"sans-serif","provider":"monotype","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":211,"cssFontFamily":"lulo-clean-w01-one-bold,sans-serif"},{"displayName":"Marck Script","fontFamily":"marck script","cdnName":"Marck+Script","genericFamily":"cursive","provider":"google","characterSets":["latin","latin-ext","cyrillic"],"permissions":"all","fallbacks":"","spriteIndex":51,"cssFontFamily":"\"marck script\",cursive"},{"displayName":"Marzo","fontFamily":"marzo-w00-regular","cdnName":"","genericFamily":"fantasy","provider":"monotype","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":116,"cssFontFamily":"marzo-w00-regular,fantasy"},{"displayName":"Monoton","fontFamily":"monoton","cdnName":"Monoton","genericFamily":"fantasy","provider":"google","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"","spriteIndex":144,"cssFontFamily":"monoton,fantasy"},{"displayName":"Monotype Baskerville","fontFamily":"baskervillemtw01-smbdit","cdnName":"","genericFamily":"serif","provider":"monotype","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":220,"cssFontFamily":"baskervillemtw01-smbdit,serif"},{"displayName":"Mr De Haviland","fontFamily":"mr de haviland","cdnName":"Mr+De+Haviland","genericFamily":"cursive","provider":"google","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":57,"cssFontFamily":"\"mr de haviland\",cursive"},{"displayName":"Museo","fontFamily":"museo-w01-700","cdnName":"","genericFamily":"serif","provider":"monotype","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":140,"cssFontFamily":"museo-w01-700,serif"},{"displayName":"Museo Slab","fontFamily":"museo-slab-w01-100","cdnName":"","genericFamily":"serif","provider":"monotype","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":141,"cssFontFamily":"museo-slab-w01-100,serif"},{"displayName":"Niconne","fontFamily":"niconne","cdnName":"Niconne","genericFamily":"fantasy","provider":"google","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":58,"cssFontFamily":"niconne,fantasy"},{"displayName":"Nimbus Sans","fontFamily":"nimbus-sans-tw01con","cdnName":"","genericFamily":"sans-serif","provider":"monotype","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":132,"cssFontFamily":"nimbus-sans-tw01con,sans-serif"},{"displayName":"Noticia Text","fontFamily":"noticia text","cdnName":"Noticia+Text","genericFamily":"serif","provider":"google","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"","spriteIndex":59,"cssFontFamily":"\"noticia text\",serif"},{"displayName":"Open Sans","fontFamily":"open sans","cdnName":"","genericFamily":"sans-serif","provider":"open source","characterSets":["latin","latin-ext","cyrillic"],"permissions":"all","fallbacks":"","spriteIndex":61,"cssFontFamily":"\"open sans\",sans-serif"},{"displayName":"Open Sans Condensed","fontFamily":"open sans condensed","cdnName":"Open+Sans+Condensed:300","genericFamily":"sans-serif","provider":"google","characterSets":["latin","latin-ext","cyrillic"],"permissions":"all","fallbacks":"","spriteIndex":151,"cssFontFamily":"\"open sans condensed\",sans-serif"},{"displayName":"Oswald Extra Light","fontFamily":"oswald-extralight","cdnName":"Oswald","genericFamily":"sans-serif","provider":"google-self-hosted","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"oswald","spriteIndex":241,"cssFontFamily":"oswald-extralight,oswald,sans-serif"},{"displayName":"Oswald Medium","fontFamily":"oswald-medium","cdnName":"Oswald","genericFamily":"sans-serif","provider":"google-self-hosted","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"oswald","spriteIndex":243,"cssFontFamily":"oswald-medium,oswald,sans-serif"},{"displayName":"Overlock","fontFamily":"overlock","cdnName":"Overlock","genericFamily":"sans-serif","provider":"google","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":64,"cssFontFamily":"overlock,sans-serif"},{"displayName":"Pacifica Condensed","fontFamily":"pacifica-w00-condensed","cdnName":"","genericFamily":"fantasy","provider":"monotype","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":114,"cssFontFamily":"pacifica-w00-condensed,fantasy"},{"displayName":"Palatino Linotype","fontFamily":"palatino linotype","cdnName":"","genericFamily":"serif","provider":"system","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"","spriteIndex":65,"cssFontFamily":"\"palatino linotype\",serif"},{"displayName":"Patrick Hand","fontFamily":"patrick hand","cdnName":"Patrick+Hand","genericFamily":"cursive","provider":"google","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"","spriteIndex":67,"cssFontFamily":"\"patrick hand\",cursive"},{"displayName":"Peaches & Cream","fontFamily":"peaches-and-cream-regular-w00","cdnName":"","genericFamily":"script","provider":"monotype","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":223,"cssFontFamily":"peaches-and-cream-regular-w00,script"},{"displayName":"Play","fontFamily":"play","cdnName":"Play","genericFamily":"sans-serif","provider":"google","characterSets":["latin","latin-ext","cyrillic"],"permissions":"all","fallbacks":"","spriteIndex":69,"cssFontFamily":"play,sans-serif"},{"displayName":"Playfair Display","fontFamily":"playfair display","cdnName":"Playfair+Display","genericFamily":"serif","provider":"google","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":206,"cssFontFamily":"\"playfair display\",serif"},{"displayName":"Playfair Display Bold","fontFamily":"playfairdisplay-bold","cdnName":"Playfair+Display","genericFamily":"serif","provider":"google-self-hosted","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"playfair display","spriteIndex":249,"cssFontFamily":"playfairdisplay-bold,\"playfair display\",serif"},{"displayName":"Poppins Extra Light","fontFamily":"poppins-extralight","cdnName":"Poppins","genericFamily":"sans-serif","provider":"google-self-hosted","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"poppins","spriteIndex":233,"cssFontFamily":"poppins-extralight,poppins,sans-serif"},{"displayName":"Poppins Semi Bold","fontFamily":"poppins-semibold","cdnName":"Poppins","genericFamily":"sans-serif","provider":"google-self-hosted","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"poppins","spriteIndex":235,"cssFontFamily":"poppins-semibold,poppins,sans-serif"},{"displayName":"Proxima Nova","fontFamily":"proxima-n-w01-reg","cdnName":"","genericFamily":"sans-serif","provider":"monotype","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":209,"cssFontFamily":"proxima-n-w01-reg,sans-serif"},{"displayName":"Questrial","fontFamily":"questrial","cdnName":"Questrial","genericFamily":"sans-serif","provider":"google","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":263,"cssFontFamily":"questrial,sans-serif"},{"displayName":"Raleway","fontFamily":"raleway","cdnName":"Raleway","genericFamily":"sans-serif","provider":"google","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":150,"cssFontFamily":"raleway,sans-serif"},{"displayName":"Raleway Semi Bold","fontFamily":"raleway-semibold","cdnName":"Raleway","genericFamily":"sans-serif","provider":"google-self-hosted","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"raleway","spriteIndex":259,"cssFontFamily":"raleway-semibold,raleway,sans-serif"},{"displayName":"Reklame Script","fontFamily":"reklamescriptw00-medium","cdnName":"","genericFamily":"cursive","provider":"monotype","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"","spriteIndex":118,"cssFontFamily":"reklamescriptw00-medium,cursive"},{"displayName":"Roboto Bold","fontFamily":"roboto-bold","cdnName":"Roboto","genericFamily":"sans-serif","provider":"google-self-hosted","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"roboto","spriteIndex":227,"cssFontFamily":"roboto-bold,roboto,sans-serif"},{"displayName":"Roboto Thin","fontFamily":"roboto-thin","cdnName":"Roboto","genericFamily":"sans-serif","provider":"google-self-hosted","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"roboto","spriteIndex":225,"cssFontFamily":"roboto-thin,roboto,sans-serif"},{"displayName":"Rosewood","fontFamily":"rosewood-w01-regular","cdnName":"","genericFamily":"sans-serif","provider":"monotype","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":157,"cssFontFamily":"rosewood-w01-regular,sans-serif"},{"displayName":"Rozha One","fontFamily":"rozha one","cdnName":"Rozha+One","genericFamily":"serif","provider":"google","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"","spriteIndex":257,"cssFontFamily":"\"rozha one\",serif"},{"displayName":"Sacramento","fontFamily":"sacramento","cdnName":"Sacramento","genericFamily":"cursive","provider":"google","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"","spriteIndex":146,"cssFontFamily":"sacramento,cursive"},{"displayName":"Sail","fontFamily":"sail","cdnName":"Sail","genericFamily":"serif","provider":"google","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":205,"cssFontFamily":"sail,serif"},{"displayName":"Sarina","fontFamily":"sarina","cdnName":"Sarina","genericFamily":"cursive","provider":"google","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"","spriteIndex":72,"cssFontFamily":"sarina,cursive"},{"displayName":"Signika","fontFamily":"signika","cdnName":"Signika","genericFamily":"sans-serif","provider":"google","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"","spriteIndex":74,"cssFontFamily":"signika,sans-serif"},{"displayName":"Snell Roundhand","fontFamily":"snellroundhandw01-scrip","cdnName":"","genericFamily":"cursive","provider":"monotype","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":120,"cssFontFamily":"snellroundhandw01-scrip,cursive"},{"displayName":"Soho Condensed","fontFamily":"soho-w01-thin-condensed","cdnName":"","genericFamily":"serif","provider":"monotype","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"soho-w02-thin-condensed","spriteIndex":133,"cssFontFamily":"soho-w01-thin-condensed,soho-w02-thin-condensed,serif"},{"displayName":"Spinnaker","fontFamily":"spinnaker","cdnName":"Spinnaker","genericFamily":"sans-serif","provider":"google","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":76,"cssFontFamily":"spinnaker,sans-serif"},{"displayName":"Stencil","fontFamily":"stencil-w01-bold","cdnName":"","genericFamily":"fantasy","provider":"monotype","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":110,"cssFontFamily":"stencil-w01-bold,fantasy"},{"displayName":"Suez One","fontFamily":"suez one","cdnName":"Suez+One","genericFamily":"serif","provider":"google","characterSets":["latin","latin-ext","hebrew"],"permissions":"all","fallbacks":"","spriteIndex":254,"cssFontFamily":"\"suez one\",serif"},{"displayName":"Tahoma","fontFamily":"tahoma","cdnName":"","genericFamily":"sans-serif","provider":"system","characterSets":["latin","latin-ext","hebrew","arabic"],"permissions":"all","fallbacks":"tahoma-w01-regular,tahoma-w02-regular,tahoma-w10-regular,tahoma-w15--regular,tahoma-w99-regular","spriteIndex":77,"cssFontFamily":"tahoma,tahoma-w01-regular,tahoma-w02-regular,tahoma-w10-regular,tahoma-w15--regular,tahoma-w99-regular,sans-serif"},{"displayName":"Times New Roman","fontFamily":"times new roman","cdnName":"","genericFamily":"serif","provider":"system","characterSets":["latin","latin-ext","cyrillic","hebrew","arabic"],"permissions":"all","fallbacks":"times","spriteIndex":81,"cssFontFamily":"\"times new roman\",times,serif"},{"displayName":"Trend","fontFamily":"trend-sans-w00-four","cdnName":"","genericFamily":"sans-serif","provider":"monotype","characterSets":["latin"],"permissions":"all","fallbacks":"","spriteIndex":208,"cssFontFamily":"trend-sans-w00-four,sans-serif"},{"displayName":"Verdana","fontFamily":"verdana","cdnName":"","genericFamily":"sans-serif","provider":"system","characterSets":["latin","latin-ext","cyrillic"],"permissions":"all","fallbacks":"geneva","spriteIndex":86,"cssFontFamily":"verdana,geneva,sans-serif"},{"displayName":"Work Sans Extra Light","fontFamily":"worksans-extralight","cdnName":"Work+Sans","genericFamily":"sans-serif","provider":"google-self-hosted","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"work sans","spriteIndex":229,"cssFontFamily":"worksans-extralight,\"work sans\",sans-serif"},{"displayName":"Work Sans Semi Bold","fontFamily":"worksans-semibold","cdnName":"Work+Sans","genericFamily":"sans-serif","provider":"google-self-hosted","characterSets":["latin","latin-ext"],"permissions":"all","fallbacks":"work sans","spriteIndex":231,"cssFontFamily":"worksans-semibold,\"work sans\",sans-serif"}]}]},"siteTextPresets":{"Title":{"editorKey":"font_0","lineHeight":"1.4em","style":"italic","weight":"bold","size":"40px","fontFamily":"raleway","value":"font:italic normal bold 40px/1.4em raleway,sans-serif;"},"Menu":{"editorKey":"font_1","lineHeight":"1.4em","style":"normal","weight":"normal","size":"16px","fontFamily":"din-next-w01-light","value":"font:normal normal normal 16px/1.4em din-next-w01-light,din-next-w02-light,din-next-w10-light,sans-serif;"},"Page-title":{"editorKey":"font_2","lineHeight":"1.4em","style":"normal","weight":"normal","size":"46px","fontFamily":"futura-lt-w01-light","value":"font:normal normal normal 46px/1.4em futura-lt-w01-light,sans-serif;"},"Heading-XL":{"editorKey":"font_3","lineHeight":"1.4em","style":"italic","weight":"bold","size":"76px","fontFamily":"raleway","value":"font:italic normal bold 76px/1.4em raleway,sans-serif;"},"Heading-L":{"editorKey":"font_4","lineHeight":"1.4em","style":"italic","weight":"bold","size":"38px","fontFamily":"raleway","value":"font:italic normal bold 38px/1.4em raleway,sans-serif;"},"Heading-M":{"editorKey":"font_5","lineHeight":"1.4em","style":"normal","weight":"normal","size":"34px","fontFamily":"futura-lt-w01-light","value":"font:normal normal normal 34px/1.4em futura-lt-w01-light,sans-serif;"},"Heading-S":{"editorKey":"font_6","lineHeight":"1.4em","style":"normal","weight":"normal","size":"30px","fontFamily":"futura-lt-w01-light","value":"font:normal normal normal 30px/1.4em futura-lt-w01-light,sans-serif;"},"Body-L":{"editorKey":"font_7","lineHeight":"1.4em","style":"italic","weight":"bold","size":"20px","fontFamily":"raleway","value":"font:italic normal bold 20px/1.4em raleway,sans-serif;"},"Body-M":{"editorKey":"font_8","lineHeight":"1.4em","style":"normal","weight":"normal","size":"16px","fontFamily":"futura-lt-w01-book","value":"font:normal normal normal 16px/1.4em futura-lt-w01-book,sans-serif;"},"Body-S":{"editorKey":"font_9","lineHeight":"1.4em","style":"normal","weight":"normal","size":"14px","fontFamily":"futura-lt-w01-light","value":"font:normal normal normal 14px/1.4em futura-lt-w01-light,sans-serif;"},"Body-XS":{"editorKey":"font_10","lineHeight":"1.4em","style":"normal","weight":"normal","size":"12px","fontFamily":"din-next-w01-light","value":"font:normal normal normal 12px/1.4em din-next-w01-light,din-next-w02-light,din-next-w10-light,sans-serif;"}},"siteColors":[{"name":"color_1","value":"#FFFFFF"},{"name":"color_2","value":"#000000"},{"name":"color_3","value":"#ED1C24"},{"name":"color_4","value":"#0088CB"},{"name":"color_5","value":"#FFCB05"},{"name":"color_11","value":"#FFFFFF"},{"name":"color_12","value":"#F9F9F9"},{"name":"color_13","value":"#D4D4D2"},{"name":"color_14","value":"#636363"},{"name":"color_15","value":"#141414"},{"name":"color_16","value":"#B3CBF5"},{"name":"color_17","value":"#8CAEEB"},{"name":"color_18","value":"#2C6CE1"},{"name":"color_19","value":"#1D4896"},{"name":"color_20","value":"#0F244B"},{"name":"color_21","value":"#E6C1FF"},{"name":"color_22","value":"#D9A2FE"},{"name":"color_23","value":"#B446FE"},{"name":"color_24","value":"#782FA9"},{"name":"color_25","value":"#3C1755"},{"name":"color_26","value":"#FFE3AE"},{"name":"color_27","value":"#FFD586"},{"name":"color_28","value":"#FFAA0D"},{"name":"color_29","value":"#AA7109"},{"name":"color_30","value":"#553904"},{"name":"color_31","value":"#E5FAD1"},{"name":"color_32","value":"#CAE5AF"},{"name":"color_33","value":"#9BCB6C"},{"name":"color_34","value":"#4E6636"},{"name":"color_35","value":"#27331B"}],"style":{"colors":{},"numbers":{"cartWidgetIcon":2,"iconLink":1},"booleans":{},"fonts":{"buttonTextFont":{"fontStyleParam":true,"style":{"bold":false,"italic":false,"underline":true},"size":25,"preset":"Custom","family":"raleway-semibold","value":"font:normal normal normal 15px/18px raleway-semibold,raleway,sans-serif;"}},"googleFontsCssUrl":"//fonts.googleapis.com/css?family=Raleway:n,b,i,bi|&subset=hebrew,arabic,latin","uploadFontFaces":""},"isVisualFocusEnabled":false},"status":true};

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var ReactDOM = _interopRequireWildcard(_reactDom);

__webpack_require__(/*! ./style.scss */ "./src/style.scss");

var _Main = __webpack_require__(/*! ./components/Main */ "./src/components/Main.jsx");

var _fakeTpaResponse = __webpack_require__(/*! ./fake-tpa-response */ "./src/fake-tpa-response.json");

var _fakeTpaResponse2 = _interopRequireDefault(_fakeTpaResponse);

var _runtime = __webpack_require__(/*! ./runtime */ "./src/runtime.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(_runtime.xxx);
function promisfy(fn) {
  return new Promise(function (resolve, reject) {
    return fn(function (res) {
      return res ? resolve(res) : reject({});
    });
  });
}

Promise.all([promisfy(window.Wix.Styles.getSiteColors), promisfy(window.Wix.Styles.getSiteTextPresets), promisfy(window.Wix.Styles.getStyleParams)]).then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 3),
      siteColors = _ref2[0],
      siteTextPresets = _ref2[1],
      styleParams = _ref2[2];

  var root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);
  var secondStyle = JSON.parse(JSON.stringify(styleParams));

  secondStyle.colors.buttonBackgroundColor = {
    themeName: 'color-2',
    value: 'rgba(245,242,242,1)'
  };

  secondStyle.colors.bgColor = {
    themeName: 'color-9',
    value: 'rgba(100,100,100,1)'
  };

  ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(_Main.Main, { style: { siteColors: siteColors, siteTextPresets: siteTextPresets, styleParams: styleParams } }),
    React.createElement(_Main.Main, { style: { siteColors: siteColors, siteTextPresets: siteTextPresets, styleParams: secondStyle }, prefix: 'style-2' })
  ), root);
});

window.postMessage(JSON.stringify(_fakeTpaResponse2.default), '*');

/***/ }),

/***/ "./src/runtime.js":
/*!************************!*\
  !*** ./src/runtime.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var xxx = exports.xxx = 'xxx';

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=main.95fc493735534b1f807f.js.map