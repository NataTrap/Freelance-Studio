/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.freelancers .freelancer-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 5px;\n}\n.freelancers .freelancer-tools {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 5px;\n}\n\n.sidebar .image i.fa {\n  color: white;\n  font-size: 34px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://freelance-studio/./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://freelance-studio/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://freelance-studio/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://freelance-studio/./src/styles/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://freelance-studio/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://freelance-studio/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://freelance-studio/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://freelance-studio/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://freelance-studio/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://freelance-studio/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   App: () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ \"./src/router.js\");\n\n\n\nclass App{\n    constructor() {\n        new _router__WEBPACK_IMPORTED_MODULE_1__.Router()\n    }\n}\n(new App());\n\n//# sourceURL=webpack://freelance-studio/./src/app.js?");

/***/ }),

/***/ "./src/components/auth/login.js":
/*!**************************************!*\
  !*** ./src/components/auth/login.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Login: () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/auth-utils */ \"./src/utils/auth-utils.js\");\n/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/http-utils */ \"./src/utils/http-utils.js\");\n\n\n\nclass Login{\n    constructor(openNewRoute) {\n        this.openNewRoute = openNewRoute\n\n        if (_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.getAuthInfo(_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.accessTokenKey)) {\n            return this.openNewRoute('/')\n        }\n\n        this.emailElement =  document.getElementById('email');\n        this.passwordElement =  document.getElementById('password');\n        this.rememberMeElement =  document.getElementById('remember-me');\n\n        document.getElementById(\"remember-me-wrapper\")\n            .addEventListener(\"click\", (e) => {\n                this.rememberMeElement.checked = !this.rememberMeElement.checked;\n            });\n\n                this.commonErrorElement = document.getElementById('common-error');\n       document.getElementById('process-button').addEventListener('click', this.login.bind(this));\n\n    }\n\n\n\n    validateForm () {\n        let isValid = true\n        if (this.emailElement.value && this.emailElement.value.match(/\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,6}/)) {\n            this.emailElement.classList.remove('is-invalid');\n        } else {\n            this.emailElement.classList.add('is-invalid');\n            isValid = false\n        }\n        if (this.passwordElement.value) {\n            this.passwordElement.classList.remove('is-invalid');\n        } else {\n            this.passwordElement.classList.add('is-invalid');\n            isValid = false\n        }\n        return isValid\n    }\n\n   async login() {\n       this.commonErrorElement.style.display = 'none'\n        if ( this.validateForm()) {\n\n            const result = await _utils_http_utils__WEBPACK_IMPORTED_MODULE_1__.HttpUtils.request('/login', 'POST', false, {\n                email: this.emailElement.value,\n                password: this.passwordElement.value,\n                rememberMe: this.rememberMeElement.checked,\n            })\n\n            console.log(result)\n\n            if (result.error || !result.response || (result.response && ( !result.response.accessToken || !result.response.refreshToken || !result.response.id || !result.response.name) )) {\n                this.commonErrorElement.style.display = 'block'\n                return;\n            }\n\n            _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.setAuthInfo(result.response.accessToken, result.response.refreshToken,{id: result.response.id, name: result.response.name} )\n\n\n            this.openNewRoute('/');\n        }\n\n    }\n}\n\n//# sourceURL=webpack://freelance-studio/./src/components/auth/login.js?");

/***/ }),

/***/ "./src/components/auth/logout.js":
/*!***************************************!*\
  !*** ./src/components/auth/logout.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Logout: () => (/* binding */ Logout)\n/* harmony export */ });\n/* harmony import */ var _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/auth-utils */ \"./src/utils/auth-utils.js\");\n/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/http-utils */ \"./src/utils/http-utils.js\");\n\n\n\nclass Logout{\n    constructor(openNewRoute) {\n        this.openNewRoute = openNewRoute\n\n        if (!_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.getAuthInfo(_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.accessTokenKey) || !_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.getAuthInfo(_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.refreshTokenKey) ) {\n            return this.openNewRoute('/login')\n        }\n\n        this.logout().then()\n\n    }\n\n\n   async logout() {\n        await _utils_http_utils__WEBPACK_IMPORTED_MODULE_1__.HttpUtils.request('/logout', 'POST', false, {\n           refreshToken: _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.getAuthInfo(_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.refreshTokenKey)\n       })\n\n\n          _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.removeAuthInfo()\n\n            this.openNewRoute('/login');\n        }\n}\n\n//# sourceURL=webpack://freelance-studio/./src/components/auth/logout.js?");

/***/ }),

/***/ "./src/components/auth/sign-up.js":
/*!****************************************!*\
  !*** ./src/components/auth/sign-up.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SignUp: () => (/* binding */ SignUp)\n/* harmony export */ });\n/* harmony import */ var _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/auth-utils */ \"./src/utils/auth-utils.js\");\n/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/http-utils */ \"./src/utils/http-utils.js\");\n\n\n\nclass SignUp {\n    constructor(openNewRoute) {\n\n        if (_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.getAuthInfo(_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.accessTokenKey)) {\n            return this.openNewRoute('/')\n        }\n        this.openNewRoute = openNewRoute\n        this.nameElement =  document.getElementById('name');\n        this.lastNameElement =  document.getElementById('last-name');\n        this.emailElement =  document.getElementById('email');\n        this.passwordElement =  document.getElementById('password');\n        this.passwordRepeatElement =  document.getElementById('repeat-password');\n        this.agreeElement =  document.getElementById('agree');\n        this.commonErrorElement = document.getElementById('common-error');\n\n        document.getElementById(\"remember-me-wrapper\")\n            .addEventListener(\"click\", (e) => {\n                this.agreeElement.checked = !this.agreeElement.checked;\n            });\n\n                document.getElementById('process-button').addEventListener('click', this.signUp.bind(this));\n    }\n\n    validateForm () {\n        let isValid = true;\n\n        if (this.nameElement.value) {\n            this.nameElement.classList.remove('is-invalid');\n        } else {\n            this.nameElement.classList.add('is-invalid');\n            isValid = false\n        }\n        if (this.lastNameElement.value) {\n            this.lastNameElement.classList.remove('is-invalid');\n        } else {\n            this.lastNameElement.classList.add('is-invalid');\n            isValid = false\n        }\n\n        if (this.emailElement.value && this.emailElement.value.match(/\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,6}/)) {\n            this.emailElement.classList.remove('is-invalid');\n        } else {\n            this.emailElement.classList.add('is-invalid');\n            isValid = false\n        }\n        if (this.passwordElement.value && this.passwordElement.value.match(/^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {\n            this.passwordElement.classList.remove('is-invalid');\n        } else {\n            this.passwordElement.classList.add('is-invalid');\n            isValid = false\n        }\n        if (this.passwordRepeatElement.value && this.passwordRepeatElement.value === this.passwordElement.value) {\n            this.passwordRepeatElement.classList.remove('is-invalid');\n        } else {\n            this.passwordRepeatElement.classList.add('is-invalid');\n            isValid = false\n        }\n        if (this.agreeElement.checked) {\n            this.agreeElement.classList.remove('is-invalid');\n        } else {\n            this.agreeElement.classList.add('is-invalid');\n            isValid = false\n        }\n        return isValid\n    }\n\n    async signUp() {\n        this.commonErrorElement.style.display = 'none'\n        if ( this.validateForm()) {\n\n            const result = await _utils_http_utils__WEBPACK_IMPORTED_MODULE_1__.HttpUtils.request('/signup', 'POST', false, {\n                name: this.nameElement.value,\n                lastName: this.lastNameElement.value,\n                email: this.emailElement.value,\n                password: this.passwordElement.value,\n            })\n\n\n            if (result.error || !result.response || (result.response && ( !result.response.accessToken || !result.response.refreshToken || !result.response.id || !result.response.name) )) {\n                this.commonErrorElement.style.display = 'block'\n                return;\n            }\n\n            _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.setAuthInfo(result.response.accessToken, result.response.refreshToken,{id: result.response.id, name: result.response.name} )\n            this.openNewRoute('/');\n        }\n\n    }\n}\n\n//# sourceURL=webpack://freelance-studio/./src/components/auth/sign-up.js?");

/***/ }),

/***/ "./src/components/dashboard.js":
/*!*************************************!*\
  !*** ./src/components/dashboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Dashboard: () => (/* binding */ Dashboard)\n/* harmony export */ });\nclass Dashboard {\n    constructor() {\n        console.log('dashboard')\n    }\n}\n\n//# sourceURL=webpack://freelance-studio/./src/components/dashboard.js?");

/***/ }),

/***/ "./src/components/freelancers/freelancers-list.js":
/*!********************************************************!*\
  !*** ./src/components/freelancers/freelancers-list.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FreelancersList: () => (/* binding */ FreelancersList)\n/* harmony export */ });\n/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/http-utils */ \"./src/utils/http-utils.js\");\n/* harmony import */ var _utils_auth_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/auth-utils */ \"./src/utils/auth-utils.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ \"./src/config/config.js\");\n\n\n\n\nclass FreelancersList {\n\n    constructor(openNewRoute) {\n        this.openNewRoute = openNewRoute\n        this.getFreelancers().then()\n\n    }\n\n\n    async getFreelancers() {\n        const result = await _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__.HttpUtils.request('/freelancers')\n        if (result.redirect) {\n            return this.openNewRoute(result.redirect)\n        }\n\n        if (result.error || !result.response || (result.response && (result.response.error || !result.response.freelancers))) {\n            return alert('Возникла ошибка при запросе фрилансеров. Обратитесь в поддержку')\n        }\n        this.showRecords(result.response.freelancers)\n    }\n\n    showRecords(freelancers) {\n        const recordsElement = document.getElementById('records');\n        for (let i = 0; i < freelancers.length; i++) {\n            const trElement = document.createElement('tr');\n            trElement.insertCell().innerText = i + 1;\n            trElement.insertCell().innerHTML = _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].host + freelancers[i].avatar ? '<img class=\"freelancer-avatar\" src = \"' + _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].host + freelancers[i].avatar + '\" alt = \"user Image\">' : '';\n            trElement.insertCell().innerText = freelancers[i].name + ' ' + freelancers[i].lastName;\n            trElement.insertCell().innerText = freelancers[i].email;\n\n            let levelHtml = null\n            switch (freelancers[i].level) {\n                case _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].freelancerLevels.junior:\n                    levelHtml = '<span class=\"badge badge-info\">Junior</span>'\n                    break\n\n                case _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].freelancerLevels.middle:\n                    levelHtml = '<span class=\"badge badge-warning\">Middle</span>'\n                    break\n\n                case _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].freelancerLevels.senior:\n                    levelHtml = '<span class=\"badge badge-success\">Senior</span>'\n                    break\n                default:\n                    levelHtml = '<span class=\"badge badge-secondary\">Unknown</span>'\n            }\n            trElement.insertCell().innerHTML = levelHtml;\n            trElement.insertCell().innerText = freelancers[i].education;\n            trElement.insertCell().innerText = freelancers[i].location;\n            trElement.insertCell().innerText = freelancers[i].skills;\n            trElement.insertCell().innerHTML = '<div class=\"freelancer-tools\">' +\n                '<a href=\"/freelancers/view?id=\"'+ freelancers[i].id +' class=\"fas fa-eye\"></a>' +\n                '<a href=\"/freelancers/edit?id=\"'+ freelancers[i].id +' class=\"fas fa-edit\"></a>' +\n                '<a href=\"/freelancers/delete?id=\"'+ freelancers[i].id +' class=\"fas fa-trash\"></a>' +\n                '</div>'\n\n\n            recordsElement.appendChild(trElement)\n        }\n    }\n}\n\n//# sourceURL=webpack://freelance-studio/./src/components/freelancers/freelancers-list.js?");

/***/ }),

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst host = ' http://localhost:3000'\nconst config = {\n    host: host,\n    api: host + '/api',\n    freelancerLevels: {\n        junior: 'junior',\n        middle: 'middle',\n        senior: 'senior',\n    },\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n//# sourceURL=webpack://freelance-studio/./src/config/config.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Router: () => (/* binding */ Router)\n/* harmony export */ });\n/* harmony import */ var _components_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dashboard */ \"./src/components/dashboard.js\");\n/* harmony import */ var _components_auth_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/auth/login */ \"./src/components/auth/login.js\");\n/* harmony import */ var _components_auth_sign_up__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auth/sign-up */ \"./src/components/auth/sign-up.js\");\n/* harmony import */ var _components_auth_logout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/auth/logout */ \"./src/components/auth/logout.js\");\n/* harmony import */ var _components_freelancers_freelancers_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/freelancers/freelancers-list */ \"./src/components/freelancers/freelancers-list.js\");\n/* harmony import */ var _utils_file_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/file-utils */ \"./src/utils/file-utils.js\");\n\n\n\n\n\n\n\nclass Router {\n    constructor() {\n        this.titlePageElement = document.getElementById('title');\n        this.contentPageElement = document.getElementById('content');\n        this.adminLteStyleElement = document.getElementById('adminlte_style');\n\n        this.initEvents();\n\n        this.routes = [\n            {\n                route: '/',\n                title: 'Дашборд',\n                filePathTemplate: '/templates/pages/dashboard.html',\n                useLayout: '/templates/layout.html',\n                load: () => {\n                    new _components_dashboard__WEBPACK_IMPORTED_MODULE_0__.Dashboard();\n                }\n            },\n            {\n                route: '/404',\n                title: 'Страница не найдена',\n                filePathTemplate: '/templates/pages/404.html',\n                useLayout: false,\n            },\n            {\n                route: '/login',\n                title: 'Авторизация',\n                filePathTemplate: '/templates/pages/auth/login.html',\n                useLayout: false,\n                load: () => {\n                    document.body.classList.add('login-page');\n                    document.body.style.height = '100vh'\n                    new _components_auth_login__WEBPACK_IMPORTED_MODULE_1__.Login(this.openNewRoute.bind(this));\n                },\n                unload: () => {\n                    document.body.classList.remove('login-page');\n                    document.body.style.height = 'auto'\n                },\n                styles: ['icheck-bootstrap.min.css']\n            },\n            {\n                route: '/sign-up',\n                title: 'Регистрация',\n                filePathTemplate: '/templates/pages/auth/sign-up.html',\n                useLayout: false,\n                load: () => {\n                    document.body.classList.add('register-page');\n                    document.body.style.height = '100vh'\n                    new _components_auth_sign_up__WEBPACK_IMPORTED_MODULE_2__.SignUp(this.openNewRoute.bind(this))\n                },\n                unload: () => {\n                    document.body.classList.remove('register-page');\n                    document.body.style.height = 'auto'\n                },\n                styles: ['icheck-bootstrap.min.css']\n            },\n            {\n                route: '/logout',\n                load: () => {\n                    new _components_auth_logout__WEBPACK_IMPORTED_MODULE_3__.Logout(this.openNewRoute.bind(this))\n                }\n            },\n            {\n                route: '/freelancers',\n                title: 'Фрилансеры',\n                filePathTemplate: '/templates/pages/freelancers/list.html',\n                useLayout: '/templates/layout.html',\n                load: () => {\n                    new _components_freelancers_freelancers_list__WEBPACK_IMPORTED_MODULE_4__.FreelancersList(this.openNewRoute.bind(this));\n                },\n                styles: ['dataTables.bootstrap4.min.css'],\n                scripts: [' jquery.dataTables.min.js', 'dataTables.bootstrap4.min.js']\n            }\n\n        ]\n    }\n\n    initEvents() {\n        window.addEventListener('DOMContentLoaded', this.activateRoute.bind(this));\n        window.addEventListener('popstate', this.activateRoute.bind(this));\n        document.addEventListener('click', this.clickHandler.bind(this));\n\n    }\n\n    async openNewRoute(url) {\n        const currentRoute = window.location.pathname;\n        history.pushState({}, '', url);\n        await this.activateRoute(null, currentRoute)\n    }\n\n   async clickHandler(e) {\n        e.preventDefault()\n\n        let element = null\n        if (e.target.nodeName === 'A') {\n            element = e.target\n        } else if (e.target.parentNode.nodeName === 'A') {\n            element = e.target.parentNode\n        }\n\n\n        if (element) {\n            e.preventDefault()\n            const url = element.href.replace(window.location.origin, '')\n            if (!url || url === '/#' || url.startsWith('javascript:void(0)')) {\n                return;\n            }\n\n          await this.openNewRoute(url)\n        }\n    }\n\n\n    async activateRoute(e, oldRoute = null) {\n        if (oldRoute) {\n            const currentRoute = this.routes.find(item => item.route === oldRoute);\n            if (currentRoute.styles && currentRoute.styles.length > 0) {\n                currentRoute.styles.forEach(style => {\n                    document.querySelector(`link[href='/css/${style}']`).remove()\n                })\n            }\n            if (currentRoute.scripts && currentRoute.scripts.length > 0) {\n                currentRoute.scripts.forEach(script => {\n                    document.querySelector(`script[src='/js/${script}']`).remove()\n                })\n            }\n            if (currentRoute.unload && typeof currentRoute.load === 'function') {\n                currentRoute.unload()\n            }\n        }\n\n        const urlRoute = window.location.pathname;\n        const newRoute = this.routes.find(item => item.route === urlRoute)\n\n\n        if (newRoute) {\n            if (newRoute.styles && newRoute.styles.length > 0) {\n                newRoute.styles.forEach(style => {\n                    const link = document.createElement('link');\n                    link.rel = 'stylesheet';\n                    link.href = '/css/' + style;\n                    document.head.insertBefore(link, this.adminLteStyleElement)\n                })\n            }\n\n            if (newRoute.scripts && newRoute.scripts.length > 0) {\n\n                for (const script of newRoute.scripts) {\n                   await _utils_file_utils__WEBPACK_IMPORTED_MODULE_5__.FileUtils.loadPageScript('/js' + script)\n                }\n\n\n            }\n\n            if (newRoute.title) {\n                this.titlePageElement.innerText = newRoute.title + ' | Freelance Studio'\n            }\n\n            if (newRoute.filePathTemplate) {\n                let contentBlock = this.contentPageElement\n                if (newRoute.useLayout) {\n                    this.contentPageElement.innerHTML = await fetch(newRoute.useLayout).then(response => response.text())\n                    contentBlock = document.getElementById('content-layout');\n                    document.body.classList.add('sidebar-mini');\n                    document.body.classList.add('layout-fixed');\n                } else {\n                    document.body.classList.remove('sidebar-mini');\n                    document.body.classList.remove('layout-fixed');\n                }\n                contentBlock.innerHTML = await fetch(newRoute.filePathTemplate).then(response => response.text())\n\n            }\n\n\n\n            if (newRoute.load && typeof newRoute.load === 'function') {\n                newRoute.load()\n            }\n        } else {\n            console.log(\"Not route Found\")\n            history.pushState({}, '', '/404');\n            await this.activateRoute()\n        }\n\n    }\n}\n\n//# sourceURL=webpack://freelance-studio/./src/router.js?");

/***/ }),

/***/ "./src/utils/auth-utils.js":
/*!*********************************!*\
  !*** ./src/utils/auth-utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthUtils: () => (/* binding */ AuthUtils)\n/* harmony export */ });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ \"./src/config/config.js\");\n\n\nclass AuthUtils {\n    static accessTokenKey = 'accessToken';\n    static refreshTokenKey = 'refreshToken';\n    static userInfoTokenKey = 'userInfo';\n\n\n    static setAuthInfo (accessToken, refreshToken, userInfo = null ) {\n        localStorage.setItem(this.accessTokenKey, accessToken);\n        localStorage.setItem(this.refreshTokenKey, refreshToken);\n        if (userInfo) {\n            localStorage.setItem(this.userInfoTokenKey, JSON.stringify(userInfo));\n        }\n\n    }\n\n    static removeAuthInfo () {\n        localStorage.removeItem(this.accessTokenKey);\n        localStorage.removeItem(this.refreshTokenKey);\n        localStorage.removeItem(this.userInfoTokenKey);\n\n    }\n\n    static getAuthInfo (key = null) {\n        if (key && [this.accessTokenKey, this.refreshTokenKey, this.userInfoTokenKey].includes(key)) {\n           return  localStorage.getItem(key)\n        }\n\n         else {\n            return {\n                [this.accessTokenKey]: localStorage.getItem(this.accessTokenKey),\n                [this.refreshTokenKey]: localStorage.getItem(this.refreshTokenKey),\n                [this.userInfoTokenKey]: localStorage.getItem(this.userInfoTokenKey),\n            }\n        }\n    }\n    static async updateRefreshToken () {\n        let result = false\n        const refreshToken = this.getAuthInfo(this.refreshTokenKey);\n        if (refreshToken) {\n           const response = await fetch(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api + '/refresh', {\n                method: 'POST',\n                headers: {\n                    'Content-type': 'application/json',\n                    'Accept': 'application/json'\n                },\n                body: JSON.stringify({refreshToken: refreshToken})\n           });\n            if (response && response.status === 200) {\n                const tokens = await response.json()\n                if (tokens && !tokens.error) {\n                    this.setAuthInfo(tokens.accessToken, tokens.refreshToken);\n                    result = true\n                }\n            }\n        }\n\n        if (!result) {\n            this.removeAuthInfo()\n        }\n\n        return result\n    }\n}\n\n\n//# sourceURL=webpack://freelance-studio/./src/utils/auth-utils.js?");

/***/ }),

/***/ "./src/utils/file-utils.js":
/*!*********************************!*\
  !*** ./src/utils/file-utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FileUtils: () => (/* binding */ FileUtils)\n/* harmony export */ });\nclass FileUtils {\n    static loadPageScript(src) {\n        return new Promise((resolve, reject) => {\n            const script = document.createElement('script');\n            script.src = src\n            script.onload = () => resolve('scripts loaded:' + src)\n            script.onerror= () => reject(new Error('Script load error for:' + src))\n\n            document.body.appendChild(script)\n        });\n    }\n}\n\n//# sourceURL=webpack://freelance-studio/./src/utils/file-utils.js?");

/***/ }),

/***/ "./src/utils/http-utils.js":
/*!*********************************!*\
  !*** ./src/utils/http-utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpUtils: () => (/* binding */ HttpUtils)\n/* harmony export */ });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ \"./src/config/config.js\");\n/* harmony import */ var _auth_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-utils */ \"./src/utils/auth-utils.js\");\n\n\n\nclass HttpUtils {\n\n    static async request (url, method = 'GET', useAuth = true, body = null) {\n\n        const result = {\n            error: false,\n            response: null\n        }\n        let token = null\n        const params = {\n            method: method,\n            headers: {\n                'Content-type': 'application/json',\n                'Accept': 'application/json',\n                'authorization': token\n            },\n\n        }\n\n        if (useAuth) {\n            token = _auth_utils__WEBPACK_IMPORTED_MODULE_1__.AuthUtils.getAuthInfo(_auth_utils__WEBPACK_IMPORTED_MODULE_1__.AuthUtils.accessTokenKey);\n            if (token) {\n                params.headers['authorization'] = token\n            }\n\n        }\n\n        if (body) {\n            params.body = JSON.stringify(body)\n        }\n\n        let response = null\n        try {\n            response = await fetch(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api + url, params);\n            result.response = await response.json()\n        } catch (e){\n            result.error = true;\n            return result;\n        }\n\n        if (response.status < 200 || response.status >= 300) {\n            result.error = true\n            if (useAuth && response.status === 401) {\n\n                if (!token) {\n                    // 1 Нет токена\n                 result.redirect = '/login'\n                } else {\n                    // 2 Токен устарел\n                   const updateTokenResult =  await _auth_utils__WEBPACK_IMPORTED_MODULE_1__.AuthUtils.updateRefreshToken();\n                   if (updateTokenResult) {\n                       // Делаем запрос повторно\n                       return this.request(url, method, useAuth, body)\n                   } else {\n                       result.redirect = '/login'\n                   }\n                }\n            }\n\n        }\n\n        return result\n\n    }\n}\n\n//# sourceURL=webpack://freelance-studio/./src/utils/http-utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;