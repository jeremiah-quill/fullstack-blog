"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/ui/articles.jsx":
/*!*****************************!*\
  !*** ./src/ui/articles.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/ui/card */ \"./src/ui/card.jsx\");\nvar _this = undefined;\n\n\n\nvar Articles = function(param) {\n    var articles = param.articles;\n    // remove last item in array\n    var withoutLast = articles.slice(0, -1);\n    console.log(withoutLast);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-span-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        article: articles[0]\n                    }, void 0, false, {\n                        fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/articles.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/articles.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, _this),\n                withoutLast.map(function(article, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            article: article\n                        }, article.attributes.slug, false, {\n                            fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/articles.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/articles.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, _this);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/articles.jsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/articles.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, _this);\n};\n_c = Articles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Articles);\nvar _c;\n$RefreshReg$(_c, \"Articles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkvYXJ0aWNsZXMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUEwQjtBQUNHO0FBRTdCLElBQU1FLFFBQVEsR0FBRyxnQkFBa0I7UUFBZkMsUUFBUSxTQUFSQSxRQUFRO0lBQzFCLDRCQUE0QjtJQUM1QixJQUFNQyxXQUFXLEdBQUdELFFBQVEsQ0FBQ0UsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILFdBQVcsQ0FBQyxDQUFDO0lBQ3pCLHFCQUNFLDhEQUFDSSxLQUFHO2tCQUNGLDRFQUFDQSxLQUFHO1lBQUNDLFNBQVMsRUFBQyxxQkFBcUI7OzhCQUNsQyw4REFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLGVBQWU7OEJBQzVCLDRFQUFDUixnREFBSTt3QkFBQ1MsT0FBTyxFQUFFUCxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7Ozs2QkFBSTs7Ozs7eUJBQzFCO2dCQUNMQyxXQUFXLENBQUNPLEdBQUcsQ0FBQyxTQUFDRCxPQUFPLEVBQUVFLENBQUM7eUNBQzFCLDhEQUFDSixLQUFHO2tDQUNGLDRFQUFDUCxnREFBSTs0QkFBQ1MsT0FBTyxFQUFFQSxPQUFPOzJCQUFPQSxPQUFPLENBQUNHLFVBQVUsQ0FBQ0MsSUFBSTs7OztpQ0FBSTs7Ozs7NkJBQ3BEO2lCQUNQLENBQUM7Ozs7OztpQkFDRTs7Ozs7YUFDRixDQUNOO0FBQ0osQ0FBQztBQWxCS1osS0FBQUEsUUFBUTtBQW9CZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91aS9hcnRpY2xlcy5qc3g/NmUwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiQC91aS9jYXJkXCI7XG5cbmNvbnN0IEFydGljbGVzID0gKHsgYXJ0aWNsZXMgfSkgPT4ge1xuICAvLyByZW1vdmUgbGFzdCBpdGVtIGluIGFycmF5XG4gIGNvbnN0IHdpdGhvdXRMYXN0ID0gYXJ0aWNsZXMuc2xpY2UoMCwgLTEpO1xuICBjb25zb2xlLmxvZyh3aXRob3V0TGFzdCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLWZ1bGxcIj5cbiAgICAgICAgICA8Q2FyZCBhcnRpY2xlPXthcnRpY2xlc1swXX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt3aXRob3V0TGFzdC5tYXAoKGFydGljbGUsIGkpID0+IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPENhcmQgYXJ0aWNsZT17YXJ0aWNsZX0ga2V5PXthcnRpY2xlLmF0dHJpYnV0ZXMuc2x1Z30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsIkFydGljbGVzIiwiYXJ0aWNsZXMiLCJ3aXRob3V0TGFzdCIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImFydGljbGUiLCJtYXAiLCJpIiwiYXR0cmlidXRlcyIsInNsdWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ui/articles.jsx\n"));

/***/ })

});