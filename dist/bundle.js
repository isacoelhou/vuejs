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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/App.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/App.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  data: function data() {\n    return {\n      resultado: '00:00:00',\n      timer: null,\n      segundos: 0\n    };\n  },\n  methods: {\n    startTimer: function startTimer() {\n      var _this = this;\n      this.timer = setInterval(function () {\n        _this.segundos++;\n        _this.resultado = _this.cria(_this.segundos);\n      }, 1000);\n    },\n    pauseTimer: function pauseTimer() {\n      clearInterval(this.timer);\n    },\n    resetTimer: function resetTimer() {\n      clearInterval(this.timer);\n      this.segundos = 0;\n      this.resultado = '00:00:00';\n    },\n    cria: function cria(segundos) {\n      var data = new Date(segundos * 1000);\n      return data.toLocaleTimeString('pt-BR', {\n        hour12: false,\n        timeZone: 'UTC'\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B4%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\nvar _hoisted_1 = /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\"h1\", {\n  \"class\": \"mt-4\"\n}, \"Timer\", -1 /* HOISTED */);\nvar _hoisted_2 = {\n  \"class\": \"resultado display-4\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\"div\", null, [_hoisted_1, Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\"p\", _hoisted_2, Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())($data.resultado), 1 /* TEXT */), Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\"button\", {\n    \"class\": \"btn btn-primary init\",\n    onClick: _cache[0] || (_cache[0] = function () {\n      return $options.startTimer && $options.startTimer.apply($options, arguments);\n    })\n  }, \"Iniciar\"), Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\"button\", {\n    \"class\": \"btn btn-primary pause\",\n    onClick: _cache[1] || (_cache[1] = function () {\n      return $options.pauseTimer && $options.pauseTimer.apply($options, arguments);\n    })\n  }, \"Pausar\"), Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\"button\", {\n    \"class\": \"btn btn-primary res\",\n    onClick: _cache[2] || (_cache[2] = function () {\n      return $options.resetTimer && $options.resetTimer.apply($options, arguments);\n    })\n  }, \"Reiniciar\")]);\n}\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B4%5D.use%5B0%5D");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n\n\nnew Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({\n  render: function render(h) {\n    return h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  }\n}).$mount('#app');\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// runtime helper for setting properties on components\n// in a tree-shakable way\nexports[\"default\"] = (sfc, props) => {\n    const target = sfc.__vccOpts || sfc;\n    for (const [key, val] of props) {\n        target[key] = val;\n    }\n    return target;\n};\n\n\n//# sourceURL=webpack:///./node_modules/vue-loader/dist/exportHelper.js?");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90 */ \"./src/App.vue?vue&type=template&id=7ba5bd90\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./src/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js":
/*!*********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90":
/*!***************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./App.vue?vue&type=template&id=7ba5bd90 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90\");\n\n\n//# sourceURL=webpack:///./src/App.vue?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;