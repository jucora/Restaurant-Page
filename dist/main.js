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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../images/couple.jpg */ \"./src/images/couple.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../images/chef.jpeg */ \"./src/images/chef.jpeg\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../images/contact.jpg */ \"./src/images/contact.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../images/user.png */ \"./src/images/user.png\");\nvar ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../images/email.png */ \"./src/images/email.png\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);\n// Module\nexports.push([module.i, \"* {\\r\\n  box-sizing: border-box;\\r\\n  font-family: sans-serif;\\r\\n  margin: 0;\\r\\n  list-style: none;\\r\\n  padding: 0;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.content {\\r\\n  margin: auto;\\r\\n  position: relative;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.row {\\r\\n  clear: both;\\r\\n  display: table;\\r\\n  margin: auto;\\r\\n  position: relative;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n[class*=\\\"col-\\\"] {\\r\\n  /*border: 1px solid black;*/\\r\\n  float: left;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background: #282828;\\r\\n}\\r\\n\\r\\n/****************HEADER*****************/\\r\\nheader {\\r\\n  background: #511845;\\r\\n}\\r\\n#logo {\\r\\n  color: #ff5733;\\r\\n  font-family: Cambria;\\r\\n  font-size: 40px;\\r\\n}\\r\\n#logo:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\nheader nav ul {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\nheader nav ul li {\\r\\n  float: left;\\r\\n  font-family: arial;\\r\\n  font-size: 28px;\\r\\n  margin-top: 10px;\\r\\n  padding: 0 20px;\\r\\n  color: #ff5733;\\r\\n  text-decoration: none;\\r\\n}\\r\\nheader nav ul li:hover {\\r\\n  cursor: pointer;\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\nheader nav ul li a {\\r\\n}\\r\\n/****************END HEADER*****************/\\r\\n\\r\\n/****************SLIDE*****************/\\r\\n.slide {\\r\\n  height: 800px;\\r\\n  margin: auto;\\r\\n}\\r\\n#slide1 {\\r\\n  text-align: center;\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-size: 100%;\\r\\n  background-repeat: no-repeat;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  align-items: flex-end;\\r\\n}\\r\\n#slide2 {\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  background-size: 100%;\\r\\n  background-repeat: no-repeat;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  align-items: flex-end;\\r\\n  text-align: center;\\r\\n}\\r\\n.slide h3 {\\r\\n  color: white;\\r\\n  font-family: Cambria;\\r\\n  font-size: 37px;\\r\\n  height: 40px;\\r\\n}\\r\\n\\r\\n.slide p {\\r\\n  color: white;\\r\\n  font-size: 24px;\\r\\n  margin: auto;\\r\\n  text-align: center;\\r\\n  width: 60%;\\r\\n}\\r\\n.slide button {\\r\\n  background: #c70039;\\r\\n  border-radius: 10px;\\r\\n  border-width: 0;\\r\\n  color: white;\\r\\n  font-family: Arial;\\r\\n  font-size: 28px;\\r\\n  height: 55px;\\r\\n  padding: 5px 20px;\\r\\n}\\r\\n.slide button:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n/****************END SLIDE*****************/\\r\\n\\r\\n/****************SECTION 1*****************/\\r\\nsection {\\r\\n  background: #511845;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n#section1 h2 {\\r\\n  color: white;\\r\\n  font-family: Cambria;\\r\\n  font-size: 37px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#section1 p {\\r\\n  color: white;\\r\\n  font-family: arial;\\r\\n  font-size: 24px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#section1 div img {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n/*SECTION 2*/\\r\\n#section2 article {\\r\\n  border: 1px solid black;\\r\\n  background-color: #900c3f;\\r\\n  border-radius: 10px 10px 0 0;\\r\\n  color: white;\\r\\n  min-height: 900px;\\r\\n\\r\\n  transition: background-color 0.3s ease-in-out;\\r\\n}\\r\\n#section2 article:hover {\\r\\n  background-color: black;\\r\\n}\\r\\n#section2 article h2 {\\r\\n  text-align: center;\\r\\n  font-family: Cambria;\\r\\n  font-size: 37px;\\r\\n  margin-top: 22px;\\r\\n}\\r\\n#section2 article img {\\r\\n  border-radius: 25%;\\r\\n  width: 100%;\\r\\n}\\r\\n.itemsPrices {\\r\\n  text-align: center;\\r\\n}\\r\\n.items {\\r\\n  font-family: tahoma;\\r\\n  font-size: 17px;\\r\\n}\\r\\n.items li {\\r\\n  font-size: 24px;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n.prices {\\r\\n  float: left;\\r\\n  font-family: tahoma;\\r\\n  font-size: 17px;\\r\\n}\\r\\n.prices li {\\r\\n  font-size: 24px;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n/*SECTION 3*/\\r\\n/*section 3*/\\r\\n\\r\\n#section3 {\\r\\n  min-height: 100vh;\\r\\n}\\r\\n\\r\\n#section3 article h1 {\\r\\n  font-family: \\\"Kaushan Script\\\", cursive;\\r\\n  font-size: 40px;\\r\\n  margin: 20px;\\r\\n}\\r\\n#section3 aside {\\r\\n  margin-top: 60px;\\r\\n  -webkit-box-shadow: 20px 28px 20px 2px rgba(0, 0, 0, 0.7);\\r\\n  -moz-box-shadow: 20px 28px 20px 2px rgba(0, 0, 0, 0.7);\\r\\n  box-shadow: 20px 28px 20px 2px rgba(0, 0, 0, 0.7);\\r\\n\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: cover;\\r\\n  background-position: center;\\r\\n\\r\\n  padding: 10%;\\r\\n}\\r\\n#section3 aside#right h1 {\\r\\n  line-height: 50px;\\r\\n  text-align: center;\\r\\n  background: #900c3f;\\r\\n  color: white;\\r\\n  margin-bottom: 5px;\\r\\n}\\r\\n\\r\\n#section3 aside#right input {\\r\\n  color: white;\\r\\n  width: 100%;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n#section3 aside#right input[type=\\\"text\\\"] {\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n  background-position: right;\\r\\n  background-size: contain;\\r\\n}\\r\\n\\r\\n#section3 aside#right input[type=\\\"email\\\"] {\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n  background-position: right;\\r\\n  background-size: contain;\\r\\n}\\r\\n\\r\\n#section3 aside#right input[type=\\\"submit\\\"] {\\r\\n  background: #ff5733;\\r\\n  border: 0;\\r\\n}\\r\\n\\r\\n/****************FOOTER*****************/\\r\\nfooter {\\r\\n  background: #c70039;\\r\\n  color: white;\\r\\n  height: 150px;\\r\\n  margin: auto;\\r\\n  padding-top: 66px;\\r\\n  text-align: center;\\r\\n}\\r\\n/****************END FOOTER*****************/\\r\\n\\r\\n/***************RESPONSIVE******************/\\r\\n\\r\\n/*LARGE (lg) from 1200px */\\r\\n\\r\\n@media (min-width: 1200px) {\\r\\n  .col-lg-12 {\\r\\n    width: 100%;\\r\\n  }\\r\\n  .col-lg-11 {\\r\\n    width: 91.66666667%;\\r\\n  }\\r\\n  .col-lg-10 {\\r\\n    width: 83.33333333%;\\r\\n  }\\r\\n  .col-lg-9 {\\r\\n    width: 75%;\\r\\n  }\\r\\n  .col-lg-8 {\\r\\n    width: 66.66666667%;\\r\\n  }\\r\\n  .col-lg-7 {\\r\\n    width: 58.33333333%;\\r\\n  }\\r\\n  .col-lg-6 {\\r\\n    width: 50%;\\r\\n  }\\r\\n  .col-lg-5 {\\r\\n    width: 41.66666667%;\\r\\n  }\\r\\n  .col-lg-4 {\\r\\n    width: 33.33333333%;\\r\\n  }\\r\\n  .col-lg-3 {\\r\\n    width: 25%;\\r\\n  }\\r\\n  .col-lg-2 {\\r\\n    width: 16.66666667%;\\r\\n  }\\r\\n  .col-lg-1 {\\r\\n    width: 8.33333333%;\\r\\n  }\\r\\n  .col-lg-0 {\\r\\n    display: none;\\r\\n  }\\r\\n}\\r\\n\\r\\n/*MEDIUM (md) from 992px */\\r\\n\\r\\n@media (max-width: 1199px) and (min-width: 992px) {\\r\\n  .col-md-12 {\\r\\n    width: 100%;\\r\\n  }\\r\\n  .col-md-11 {\\r\\n    width: 91.66666667%;\\r\\n  }\\r\\n  .col-md-10 {\\r\\n    width: 83.33333333%;\\r\\n  }\\r\\n  .col-md-9 {\\r\\n    width: 75%;\\r\\n  }\\r\\n  .col-md-8 {\\r\\n    width: 66.66666667%;\\r\\n  }\\r\\n  .col-md-7 {\\r\\n    width: 58.33333333%;\\r\\n  }\\r\\n  .col-md-6 {\\r\\n    width: 50%;\\r\\n  }\\r\\n  .col-md-5 {\\r\\n    width: 41.66666667%;\\r\\n  }\\r\\n  .col-md-4 {\\r\\n    width: 33.33333333%;\\r\\n  }\\r\\n  .col-md-3 {\\r\\n    width: 25%;\\r\\n  }\\r\\n  .col-md-2 {\\r\\n    width: 16.66666667%;\\r\\n  }\\r\\n  .col-md-1 {\\r\\n    width: 8.33333333%;\\r\\n  }\\r\\n  .col-md-0 {\\r\\n    display: none;\\r\\n  }\\r\\n  .slide {\\r\\n    height: 655px;\\r\\n  }\\r\\n}\\r\\n\\r\\n/*SMALL(sm) from 768px*/\\r\\n\\r\\n@media (max-width: 991px) and (min-width: 768px) {\\r\\n  .col-sm-12 {\\r\\n    width: 100%;\\r\\n  }\\r\\n  .col-sm-11 {\\r\\n    width: 91.66666667%;\\r\\n  }\\r\\n  .col-sm-10 {\\r\\n    width: 83.33333333%;\\r\\n  }\\r\\n  .col-sm-9 {\\r\\n    width: 75%;\\r\\n  }\\r\\n  .col-sm-8 {\\r\\n    width: 66.66666667%;\\r\\n  }\\r\\n  .col-sm-7 {\\r\\n    width: 58.33333333%;\\r\\n  }\\r\\n  .col-sm-6 {\\r\\n    width: 50%;\\r\\n  }\\r\\n  .col-sm-5 {\\r\\n    width: 41.66666667%;\\r\\n  }\\r\\n  .col-sm-4 {\\r\\n    width: 33.33333333%;\\r\\n  }\\r\\n  .col-sm-3 {\\r\\n    width: 25%;\\r\\n  }\\r\\n  .col-sm-2 {\\r\\n    width: 16.66666667%;\\r\\n  }\\r\\n  .col-sm-1 {\\r\\n    width: 8.33333333%;\\r\\n  }\\r\\n  .col-sm-0 {\\r\\n    display: none;\\r\\n  }\\r\\n  #logo {\\r\\n    text-align: center;\\r\\n  }\\r\\n\\r\\n  #section1 h2 {\\r\\n    text-align: center;\\r\\n  }\\r\\n  #section1 p {\\r\\n    text-align: center;\\r\\n  }\\r\\n\\r\\n  .slide {\\r\\n    height: 490px;\\r\\n  }\\r\\n  #section2 article {\\r\\n    min-height: 600px;\\r\\n  }\\r\\n  #section2 article img {\\r\\n    display: block;\\r\\n    margin: auto;\\r\\n    width: 50%;\\r\\n  }\\r\\n}\\r\\n/*EXTRA SMALL(xs)*/\\r\\n\\r\\n@media (max-width: 767px) {\\r\\n  .col-xs-12 {\\r\\n    width: 100%;\\r\\n  }\\r\\n  .col-xs-11 {\\r\\n    width: 91.66666667%;\\r\\n  }\\r\\n  .col-xs-10 {\\r\\n    width: 83.33333333%;\\r\\n  }\\r\\n  .col-xs-9 {\\r\\n    width: 75%;\\r\\n  }\\r\\n  .col-xs-8 {\\r\\n    width: 66.66666667%;\\r\\n  }\\r\\n  .col-xs-7 {\\r\\n    width: 58.33333333%;\\r\\n  }\\r\\n  .col-xs-6 {\\r\\n    width: 50%;\\r\\n  }\\r\\n  .col-xs-5 {\\r\\n    width: 41.66666667%;\\r\\n  }\\r\\n  .col-xs-4 {\\r\\n    width: 33.33333333%;\\r\\n  }\\r\\n  .col-xs-3 {\\r\\n    width: 25%;\\r\\n  }\\r\\n  .col-xs-2 {\\r\\n    width: 16.66666667%;\\r\\n  }\\r\\n  .col-xs-1 {\\r\\n    width: 8.33333333%;\\r\\n  }\\r\\n  .col-xs-0 {\\r\\n    display: none;\\r\\n  }\\r\\n  #logo {\\r\\n    text-align: center;\\r\\n  }\\r\\n\\r\\n  #section1 h2 {\\r\\n    text-align: center;\\r\\n  }\\r\\n  #section1 p {\\r\\n    font-size: 18px;\\r\\n    text-align: center;\\r\\n  }\\r\\n  #slide1 {\\r\\n    display: none;\\r\\n  }\\r\\n  #slide2 {\\r\\n    display: none;\\r\\n  }\\r\\n  #section2 article {\\r\\n    min-height: 250px;\\r\\n  }\\r\\n  #section2 article img {\\r\\n    display: block;\\r\\n    margin: auto;\\r\\n    width: 50%;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/images/chef.jpeg":
/*!******************************!*\
  !*** ./src/images/chef.jpeg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"babbad3a86128c5823f94c9f17a696dc.jpeg\");\n\n//# sourceURL=webpack:///./src/images/chef.jpeg?");

/***/ }),

/***/ "./src/images/contact.jpg":
/*!********************************!*\
  !*** ./src/images/contact.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9ae91ac5e7def47d73a2685c35888993.jpg\");\n\n//# sourceURL=webpack:///./src/images/contact.jpg?");

/***/ }),

/***/ "./src/images/couple.jpg":
/*!*******************************!*\
  !*** ./src/images/couple.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"468e05555471ed044452779260dddc38.jpg\");\n\n//# sourceURL=webpack:///./src/images/couple.jpg?");

/***/ }),

/***/ "./src/images/email.png":
/*!******************************!*\
  !*** ./src/images/email.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b1169f3d542f52af3fa409acb59ae35c.png\");\n\n//# sourceURL=webpack:///./src/images/email.png?");

/***/ }),

/***/ "./src/images/user.png":
/*!*****************************!*\
  !*** ./src/images/user.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fc5fd80ccf2b70b3cb62e8fdf2873379.png\");\n\n//# sourceURL=webpack:///./src/images/user.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/home */ \"./src/js/home.js\");\n\r\n\r\n__webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", Object(_js_home__WEBPACK_IMPORTED_MODULE_0__[\"createHome\"])());\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/*! exports provided: createContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createContact\", function() { return createContact; });\n/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove */ \"./src/js/remove.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/js/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/js/footer.js\");\n\r\n\r\n\r\n\r\nconst createContact = () => {\r\n  Object(_remove__WEBPACK_IMPORTED_MODULE_0__[\"removePage\"])();\r\n  Object(_header__WEBPACK_IMPORTED_MODULE_1__[\"createHeader\"])();\r\n  let section = document.createElement(\"section\");\r\n  section.setAttribute(\"id\", \"section3\");\r\n  section.innerHTML =\r\n    \"<div class='col-lg-0 col-md-0 col-sm-0 col-xs-0'></div>\" +\r\n    \"<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>\" +\r\n    \"<aside id='right'>\" +\r\n    \"<form>\" +\r\n    \"<h1>Contact us!</h1>\" +\r\n    \"<input type='text' placeholder='User' />\" +\r\n    \"<input type='email' placeholder='Email' />\" +\r\n    \"<input type='submit' value='Send' />\" +\r\n    \"</form>\" +\r\n    \"</aside>\" +\r\n    \"</div>\" +\r\n    \"<div class='col-lg-0 col-md-0 col-sm-0 col-xs-0'></div>;\";\r\n  document.querySelector(\"#content\").appendChild(section);\r\n  Object(_footer__WEBPACK_IMPORTED_MODULE_2__[\"createFooter\"])();\r\n};\r\n\n\n//# sourceURL=webpack:///./src/js/contact.js?");

/***/ }),

/***/ "./src/js/footer.js":
/*!**************************!*\
  !*** ./src/js/footer.js ***!
  \**************************/
/*! exports provided: createFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createFooter\", function() { return createFooter; });\nconst createFooter = () => {\r\n  let footer = document.createElement(\"footer\");\r\n  footer.classList.add(\"row\");\r\n  footer.textContent =\r\n    \"Created by Julian Belmonte | @copyright - All rights reserved\";\r\n  document.getElementById(\"content\").appendChild(footer);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/js/footer.js?");

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/*! exports provided: createHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createHeader\", function() { return createHeader; });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/js/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/js/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/js/contact.js\");\n\r\n\r\n\r\nconst createHeader = () => {\r\n  let header = document.createElement(\"header\");\r\n  header.classList.add(\"row\");\r\n  header.innerHTML =\r\n    \"<div class='col-lg-8 col-md-8 col-sm-12 col-xs-12' id='logo'>Love Restaurant</div>\" +\r\n    \"<nav>\" +\r\n    \"<ul>\" +\r\n    \"<li class='col-lg-1 col-md-1 col-sm-4 col-xs-12' id='home'>Home</li>\" +\r\n    \"<li class='col-lg-1 col-md-1 col-sm-4 col-xs-12' id='menu'>Menu</li>\" +\r\n    \"<li class='col-lg-1 col-md-1 col-sm-4 col-xs-12' id ='contact'>Contact</li>\" +\r\n    \"</ul>\" +\r\n    \"</nav>\";\r\n  document.getElementById(\"content\").appendChild(header);\r\n  document.querySelector(\"#home\").addEventListener(\"click\", _home__WEBPACK_IMPORTED_MODULE_0__[\"createHome\"]);\r\n  document.querySelector(\"#menu\").addEventListener(\"click\", _menu__WEBPACK_IMPORTED_MODULE_1__[\"createMenu\"]);\r\n  document.querySelector(\"#contact\").addEventListener(\"click\", _contact__WEBPACK_IMPORTED_MODULE_2__[\"createContact\"]);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/js/header.js?");

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/*! exports provided: createHome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createHome\", function() { return createHome; });\n/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove */ \"./src/js/remove.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/js/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/js/footer.js\");\n\r\n\r\n\r\n\r\nconst createHome = () => {\r\n  Object(_remove__WEBPACK_IMPORTED_MODULE_0__[\"removePage\"])();\r\n  Object(_header__WEBPACK_IMPORTED_MODULE_1__[\"createHeader\"])();\r\n  /* SLIDE 1*/\r\n  const slide = document.createElement(\"div\");\r\n  slide.classList.add(\"slide\", \"row\");\r\n  slide.setAttribute(\"id\", \"slide1\");\r\n  let slideCol = document.createElement(\"div\");\r\n  slideCol.classList.add(\"col-lg-12\");\r\n  slideCol.innerHTML =\r\n    \"<h3>The Best Tasting Experience</h3>\" +\r\n    \"<br />\" +\r\n    \"<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\" +\r\n    \"<br />\" +\r\n    \"<button>Contact us!</button>\";\r\n  slide.appendChild(slideCol);\r\n\r\n  /*SECTION1*/\r\n  let section = document.createElement(\"section\");\r\n  section.setAttribute(\"id\", \"section1\");\r\n  section.classList.add(\"row\");\r\n  section.innerHTML =\r\n    \"<div class='col-lg-7 col-md-12 col-sm-12 col-xs-12'>\" +\r\n    \"<br />\" +\r\n    \"<h2>A very special place!</h2>\" +\r\n    \"<br />\" +\r\n    \"<p>Discover Delicious Greek Dishes and Desserts</p>\" +\r\n    \" <br /><br />\" +\r\n    \"<p>“...once you walk in past the mouth watering pastries you'll find yourself thinking you've teleported to a Greek island!”</p>\" +\r\n    \"<br />\" +\r\n    \"<p>“I came here during the day so I can imagine how romantic it feels during the evening. The decor simply stunning.”</p>\" +\r\n    \"</div>\" +\r\n    \"<div class='col-lg-5 col-md-12 col-sm-12 col-xs-12'><img src='../src/images/dish.jpeg' alt='' /></div>\";\r\n\r\n  document.getElementById(\"content\").appendChild(slide),\r\n    document.getElementById(\"content\").appendChild(section);\r\n  Object(_footer__WEBPACK_IMPORTED_MODULE_2__[\"createFooter\"])();\r\n};\r\n\n\n//# sourceURL=webpack:///./src/js/home.js?");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/*! exports provided: createMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createMenu\", function() { return createMenu; });\n/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove */ \"./src/js/remove.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/js/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/js/footer.js\");\n\r\n\r\n\r\n\r\nconst createMenu = () => {\r\n  Object(_remove__WEBPACK_IMPORTED_MODULE_0__[\"removePage\"])();\r\n  /* SLIDE 2*/\r\n  Object(_header__WEBPACK_IMPORTED_MODULE_1__[\"createHeader\"])();\r\n  let slide = document.createElement(\"div\");\r\n  slide.classList.add(\"row\", \"slide\");\r\n  slide.setAttribute(\"id\", \"slide2\");\r\n  slide.innerHTML =\r\n    \"<div class='col-lg-12'>\" +\r\n    \"<h3>The Best Tasting Experience</h3>\" +\r\n    \"<br />\" +\r\n    \"<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\" +\r\n    \"<br />\" +\r\n    \"<button>Contact us!</button>\" +\r\n    \"</div>\";\r\n\r\n  /*SECTION 2*/\r\n  let section = document.createElement(\"section\");\r\n  section.classList.add(\"row\");\r\n  section.setAttribute(\"id\", \"section2\");\r\n  section.innerHTML =\r\n    \"<article class='col-lg-4 col-md-4 col-sm-12'>\" +\r\n    \"<h2>Appetizers</h2>\" +\r\n    \"<br />\" +\r\n    \"<img src='../src/images/appetizers.jpeg' alt='' />\" +\r\n    \"<div class='row'>\" +\r\n    \"<ul class='items col-lg-12 col-md-12 col-sm-12 col-xs-12 itemsPrices'>\" +\r\n    \"<li>Savory Party Bread</li>\" +\r\n    \"<li>$10.00</li>\" +\r\n    \"<li>Orange-Glazed Meatballs</li>\" +\r\n    \"<li>$20.00</li>\" +\r\n    \"<li>Chicken Parmesan Slider Bake</li>\" +\r\n    \"<li>$15.00</li>\" +\r\n    \"<li>Grilled Tomato-Peach Pizza</li>\" +\r\n    \"<li>$30.00</li>\" +\r\n    \"</ul>\" +\r\n    \"</div>\" +\r\n    \"</article>\" +\r\n    \"<article class='col-lg-4 col-md-4 col-sm-12'>\" +\r\n    \"<h2>Main</h2>\" +\r\n    \"<br />\" +\r\n    \"<img src='../src/images/main.jpeg' alt='' />\" +\r\n    \"<div class='row'>\" +\r\n    \"<ul class='items col-lg-12 col-md-12 col-sm-12 col-xs-12 itemsPrices'>\" +\r\n    \"<li>Vegetable Lovers' Fried Rice</li>\" +\r\n    \"<li>$10.00</li>\" +\r\n    \"<li>Cardamom Maple Salmon</li>\" +\r\n    \"<li>$20.00</li>\" +\r\n    \"<li>Beef Stroganoff with Ground Beef</li>\" +\r\n    \"<li>$15.00</li>\" +\r\n    \"<li>Keto Turkey-Stuffed Peppers</li>\" +\r\n    \"<li>$30.00</li>\" +\r\n    \"</ul>\" +\r\n    \"</div>\" +\r\n    \"</article>\" +\r\n    \"<article class='col-lg-4 col-md-4 col-sm-12'>\" +\r\n    \"<h2>Desserts</h2>\" +\r\n    \"<br />\" +\r\n    \"<img src='../src/images/desserts.jpeg' alt='' />\" +\r\n    \"<div class='row'>\" +\r\n    \"<ul class='items col-lg-12 col-md-12 col-sm-12 col-xs-12 itemsPrices'>\" +\r\n    \"<li>Triple Chocolate Roll Cake</li>\" +\r\n    \"<li>$10.00</li>\" +\r\n    \"<li>Sheet Pan Apple Crisp</li>\" +\r\n    \"<li>$20.00</li>\" +\r\n    \"<li>Apple Pie by Grandma Ople</li>\" +\r\n    \"<li>$15.00</li>\" +\r\n    \"<li>Chantal's New York Cheesecake</li>\" +\r\n    \"<li>$30.00</li>\" +\r\n    \"</ul>\" +\r\n    \"</div>\" +\r\n    \"</article>\";\r\n  document.getElementById(\"content\").appendChild(slide);\r\n  document.getElementById(\"content\").appendChild(section);\r\n  Object(_footer__WEBPACK_IMPORTED_MODULE_2__[\"createFooter\"])();\r\n};\r\n\n\n//# sourceURL=webpack:///./src/js/menu.js?");

/***/ }),

/***/ "./src/js/remove.js":
/*!**************************!*\
  !*** ./src/js/remove.js ***!
  \**************************/
/*! exports provided: removePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removePage\", function() { return removePage; });\nconst removePage = () => {\r\n  document.querySelector(\"#content\").innerHTML = \"\";\r\n};\r\n\n\n//# sourceURL=webpack:///./src/js/remove.js?");

/***/ })

/******/ });