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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/ \\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed, \\nfigure, figcaption, footer, header, hgroup, \\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\tborder: 0;\\n\\tfont-size: 100%;\\n\\tfont: inherit;\\n\\tvertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure, \\nfooter, header, hgroup, menu, nav, section {\\n\\tdisplay: block;\\n}\\nbody {\\n\\tline-height: 1;\\n}\\nol, ul {\\n\\tlist-style: none;\\n}\\nblockquote, q {\\n\\tquotes: none;\\n}\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n\\tcontent: '';\\n\\tcontent: none;\\n}\\ntable {\\n\\tborder-collapse: collapse;\\n\\tborder-spacing: 0;\\n}\\n\\n\\n.header {\\n\\ndisplay: grid;\\nbackground: rgb(99,106,89);\\nbackground: linear-gradient(90deg, rgba(99,106,89,1) 0%, rgba(52,65,65,1) 100%);\\nheight: 10vh;\\n\\n}\\n.leftNav {\\ndisplay: flex;\\nbackground: rgb(253,202,104);\\nbackground: linear-gradient(185deg, rgba(253,202,104,1) 0%, rgba(141,75,38,1) 100%);\\nheight: 90vh;\\nwidth: 15vw;\\nalign-items: center;\\nflex-direction: column;\\n}\\n.rightNav {\\ndisplay: flex;\\nbackground: rgb(230,213,202);\\nbackground: linear-gradient(185deg, rgba(230,213,202,1) 0%, rgba(197,228,208,1) 100%);\\nheight: 90vh;\\nwidth: 85vw;\\nflex-direction: column;\\noverflow-y:auto\\n}\\n#main {\\n    display: flex;\\n\\n}\\n.leftHeader {\\n    margin-top: 5vh;\\n    height: 3vh;\\n}\\n.toDoContainer {\\n    display: flex;\\n    align-items: center;\\n    margin-top: 5vh;\\n    margin-left: 5vh;\\n\\n}\\n.statusButtonActive {\\n    height: 7vh;\\n    width: 40px;\\n    margin-right: 15px;\\n    background-color: #008f6f;\\n    border: 2px, solid #089b7a;\\n    border-radius: 4px;\\n\\n}\\n.statusButtonInactive {\\n    height: 7vh;\\n    width: 40px;\\n    margin-right: 15px;\\n    background-color: #9b3e08;\\n    border: 2px, solid #9b3e08;\\n    border-radius: 4px;\\n\\n}\\n\\n\\n.toDoTitle {\\n    font-size: x-large;\\n}\\n.toDoDueDate {\\n    font-size: small;\\n}\\n.seperator {\\n    border: 1px solid #888888;\\n    width: 85%;\\n}\\n.newToDo {\\n    position:absolute;right: 5%;bottom: 5%;\\n}\\n#newToDoButton {\\n    height: 50px;\\n    width: 50px;\\n    border-radius: 4px;\\n    border: none;\\n    background-color: #B36A5E;\\n}\\n\\n.popUp {\\n    animation: move 1s ease forwards;\\n    height: 70vh;\\n    width: 45vw;\\n    border-radius: 6px;\\n    transition-property: all;\\n    animation-iteration-count: 1;\\n}\\n@keyframes move {\\n    from {\\n        background-color: none;\\n        position: absolute; right: 10%; bottom: 10%\\n    }\\n    to {\\n        position: absolute; right: 20%; bottom: 10%;\\n        transform: translate(-10%, -10%);\\n        background-color: #B36A5E;\\n\\n    }\\n    \\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/CardCreator.js":
/*!****************************!*\
  !*** ./src/CardCreator.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projectsArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectsArray */ \"./src/projectsArray.js\");\n//This creates a new ToDo item\n\n\n\nfunction cardCreator(object) {\n    \n    const rightNav = document.querySelector('.rightNav')\n        const mainDiv = document.querySelector('#main')\n        rightNav.remove()\n\n        const newRightNav = document.createElement('div')\n        newRightNav.classList.add('rightNav')\n        mainDiv.appendChild(newRightNav)\n\n    object.forEach( (element, index) => {\n        let title = element.title\n        let description = element.description\n        let dueDate = element.dueDate\n        let priority = element.priority\n        let project = element.project\n\n        if (project != _projectsArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"].selectedProject) {\n            console.log(`${element.title} is not apart of the selected project`)\n            return;\n        }\n        console.log(`Running the forEach for ${element.title}`)\n// This section identifies the Right-hand section of the site, removes it each time the function is run and replaces it\n\n        \n        let container = document.createElement('div')\n        container.classList.add('toDoContainer')\n        newRightNav.appendChild(container)\n\n        let statusContainer = document.createElement('div')\n        container.appendChild(statusContainer)\n        statusContainer.classList.add('toDoStatus')\n\n        let statusButton = document.createElement('button')\n        statusContainer.appendChild(statusButton)\n        statusButton.classList.add('statusButtonActive')\n\n        let toDoContentContainer = document.createElement('div')\n        container.appendChild(toDoContentContainer)\n        toDoContentContainer.classList.add('toDoContent')\n\n        let toDoContentTitle = document.createElement('div')\n        let titleText = document.createTextNode(`${title}`)\n        toDoContentTitle.appendChild(titleText)\n        toDoContentTitle.classList.add('toDoTitle')\n\n        let toDoContentDescription  = document.createElement('div')\n        let descriptionText = document.createTextNode(`${description}`)\n        toDoContentDescription.classList.add('toDoDescription')\n\n        toDoContentDescription.appendChild(descriptionText)\n\n\n        let toDoContentDueDate  = document.createElement('div')\n        let dueDateText = document.createTextNode(`${dueDate}`)\n        toDoContentDueDate.appendChild(dueDateText)\n        toDoContentDueDate.classList.add('toDoDueDate')\n        \n        \n        toDoContentContainer.appendChild(toDoContentTitle)\n        toDoContentContainer.appendChild(toDoContentDescription)\n        toDoContentContainer.appendChild(toDoContentDueDate)\n\n\n\n        // This outputs both the key's name and the values of said key\n        // for (const [key, value] of Object.entries(element)) {\n            \n        //     console.log(`${key}: ${value}`);\n\n            \n        //   }\n              });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardCreator);\n\n//# sourceURL=webpack://to-do-list/./src/CardCreator.js?");

/***/ }),

/***/ "./src/arrayImport.js":
/*!****************************!*\
  !*** ./src/arrayImport.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _objectArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectArray.js */ \"./src/objectArray.js\");\n\n\nfunction arrayImport(object) {\n    _objectArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toDoArray.unshift(object)\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayImport);\n\n//# sourceURL=webpack://to-do-list/./src/arrayImport.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _objectCreatorImporter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ././objectCreatorImporter.js */ \"./src/objectCreatorImporter.js\");\n/* harmony import */ var _CardCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardCreator */ \"./src/CardCreator.js\");\n/* harmony import */ var _objectArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objectArray.js */ \"./src/objectArray.js\");\n/* harmony import */ var _arrayImport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./arrayImport.js */ \"./src/arrayImport.js\");\n/* harmony import */ var _projectsArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectsArray */ \"./src/projectsArray.js\");\n/* harmony import */ var _projectsDom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projectsDom */ \"./src/projectsDom.js\");\n\n\n\n\n\n\n\n// import Icon from './icon.png';\n\n_objectCreatorImporter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n;(0,_arrayImport_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_objectArray_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].toDoObjectOne)\n\n;(0,_CardCreator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_objectArray_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].toDoArray)\n\nconst toDoObjectTwo = new _objectArray_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ToDoConstructor('To Do List','I want to be a web developer','Jan, 1, 2024', 'High', 'Unassigned')\nconst toDoObjecto = new _objectArray_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ToDoConstructor('To Do List2','I want to be a web developer','Jan, 1, 2024', 'High', 'Unassigned')\nconst toDoObjectTw = new _objectArray_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ToDoConstructor('To Do List3','I want to be a web developer','Jan, 1, 2024', 'High', 'Unassigned')\nconst toDoObject1 = new _objectArray_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ToDoConstructor('To Do List4','I want to be a web developer','Jan, 1, 2024', 'High', 'Unassigned')\nconst toDoObject2 = new _objectArray_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ToDoConstructor('To Do List5','I want to be a web developer','Jan, 1, 2024', 'High', 'Unassigned')\nconst toDoObject3 = new _objectArray_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ToDoConstructor('To Do List6','I want to be a web developer','Jan, 1, 2024', 'High', 'Unassigned')\nconst toDoObject4 = new _objectArray_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ToDoConstructor('To Do List7','I want to be a web developer','Jan, 1, 2024', 'High', 'Unassigned')\nconst toDoObject5 = new _objectArray_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ToDoConstructor('To Do List8','I want to be a web developer','Jan, 1, 2024', 'High', 'Unassigned')\nconst toDoObject6 = new _objectArray_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ToDoConstructor('To Do List9','I want to be a web developer','Jan, 1, 2024', 'High', 'Unassigned')\n\n\n\n\n\n;(0,_arrayImport_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(toDoObjectTwo)\n;(0,_arrayImport_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(toDoObjecto)\n;(0,_arrayImport_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(toDoObjectTw)\n;(0,_arrayImport_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(toDoObject1)\n;(0,_arrayImport_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(toDoObject2)\n\n;(0,_arrayImport_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(toDoObjecto)\n;(0,_arrayImport_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(toDoObjectTw)\n;(0,_arrayImport_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(toDoObject1)\n;(0,_arrayImport_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(toDoObject2)\n\n;(0,_CardCreator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_objectArray_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].toDoArray)\n\n;(0,_projectsDom__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_projectsArray__WEBPACK_IMPORTED_MODULE_5__[\"default\"].projectsArray)\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/objectArray.js":
/*!****************************!*\
  !*** ./src/objectArray.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction ToDoConstructor(t,d,dd,p,pr) {\n    this.title = t\n    this.description = d\n    this.dueDate = dd\n    this.priority = p\n    this.project = pr\n}\nconst toDoObjectOne = new ToDoConstructor('Finish Odin Project','I want to be a web developer','Jan, 1, 2024', 'High', 'Unassigned')\n\nconst toDoArray = []\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({toDoArray, toDoObjectOne, ToDoConstructor});\n\n\n//# sourceURL=webpack://to-do-list/./src/objectArray.js?");

/***/ }),

/***/ "./src/objectCreatorImporter.js":
/*!**************************************!*\
  !*** ./src/objectCreatorImporter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addButton = document.getElementById(\"newToDoButton\").addEventListener(\"click\", toDoPopUp)\nconst mainDiv = document.getElementById(\"main\")\n// popup for adding new To Do Dom\nfunction toDoPopUp() {\n    let popUp = document.createElement('div')\n    popUp.classList.add('popUp')\n    mainDiv.appendChild(popUp)\n    popUp.classList.add('popUpTransition')\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({toDoPopUp});\n\n//# sourceURL=webpack://to-do-list/./src/objectCreatorImporter.js?");

/***/ }),

/***/ "./src/projectsArray.js":
/*!******************************!*\
  !*** ./src/projectsArray.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction ProjectsConstructor(c,t,d) {\n    this.color = c\n    this.title = t\n    this.deletable = d\n}\n\nconst projectsArray = []\n\nconst unAssigned = new ProjectsConstructor('purple','Unassigned','No')\nconst assigned = new ProjectsConstructor('blue','Assigned','yes')\n\nconst selectedProject = \"Unassigned\"\n\n\nprojectsArray.push(unAssigned)\nprojectsArray.push(assigned)\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({projectsArray, ProjectsConstructor, selectedProject});\n\n//# sourceURL=webpack://to-do-list/./src/projectsArray.js?");

/***/ }),

/***/ "./src/projectsDom.js":
/*!****************************!*\
  !*** ./src/projectsDom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projectsArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectsArray */ \"./src/projectsArray.js\");\n/* harmony import */ var _CardCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardCreator */ \"./src/CardCreator.js\");\n/* harmony import */ var _objectArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objectArray.js */ \"./src/objectArray.js\");\n\n\n\n\nfunction projectsDom(object) {\n    const leftList = document.getElementsByClassName('leftList')\n    const leftMain = document.getElementsByClassName('leftNav')\n    leftList[0].remove()\n\n    const newProjects = document.createElement('div')\n    newProjects.classList.add('leftList')\n    leftMain[0].appendChild(newProjects)\n    object.forEach((element, index) => {\n        let color = element.color\n        let title = element.title\n        let deletable = element.deletable\n\n        const project = document.createElement('div')\n        project.innerHTML = title\n        project.classList.add('projectTitle')\n        project.dataset.pi = index\n        project.addEventListener(\"click\", selectProject)\n\n        function selectProject() {\n            console.log('hi')\n            _projectsArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"].selectedProject = object[project.dataset.pi].title\n            console.log(_projectsArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"].selectedProject)\n            ;(0,_CardCreator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_objectArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].toDoArray)\n        }\n    \n        newProjects.appendChild(project)      \n    });\n}\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectsDom);\n\n//# sourceURL=webpack://to-do-list/./src/projectsDom.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;