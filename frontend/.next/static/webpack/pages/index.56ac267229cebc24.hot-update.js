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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/ui/card */ \"./src/ui/card.jsx\");\nvar _this = undefined;\n\n\n\nvar Articles = function(param) {\n    var articles = param.articles, _classes = param.classes, classes = _classes === void 0 ? \"\" : _classes;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-6xl m-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-2 gap-5 grid-auto-flow\",\n            children: articles.map(function(article, i) {\n                return i === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: \"Latest article\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/articles.jsx\",\n                            lineNumber: 11,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            classes: \"row-span-2\",\n                            article: article,\n                            id: article.attributes.slug\n                        }, article.attributes.slug, false, {\n                            fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/articles.jsx\",\n                            lineNumber: 12,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    article: article,\n                    id: article.attributes.slug\n                }, article.attributes.slug, false, {\n                    fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/articles.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 13\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/articles.jsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/articles.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, _this);\n};\n_c = Articles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Articles);\nvar _c;\n$RefreshReg$(_c, \"Articles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkvYXJ0aWNsZXMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUEwQjtBQUNHO0FBRTdCLElBQU1FLFFBQVEsR0FBRyxnQkFBZ0M7UUFBN0JDLFFBQVEsU0FBUkEsUUFBUSxtQkFBRUMsT0FBTyxFQUFQQSxPQUFPLHlCQUFHLEVBQUU7SUFDeEMscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGtCQUFrQjtrQkFDL0IsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFDLHVDQUF1QztzQkFDbkRILFFBQVEsQ0FBQ0ksR0FBRyxDQUFDLFNBQUNDLE9BQU8sRUFBRUMsQ0FBQzt1QkFDdkJBLENBQUMsS0FBSyxDQUFDLGlCQUNMOztzQ0FDRSw4REFBQ0osS0FBRztzQ0FBQyxnQkFBYzs7Ozs7aUNBQU07c0NBQ3pCLDhEQUFDSixnREFBSTs0QkFDSEcsT0FBTyxFQUFFLFlBQVk7NEJBQ3JCSSxPQUFPLEVBQUVBLE9BQU87NEJBRWhCRSxFQUFFLEVBQUVGLE9BQU8sQ0FBQ0csVUFBVSxDQUFDQyxJQUFJOzJCQUR0QkosT0FBTyxDQUFDRyxVQUFVLENBQUNDLElBQUk7Ozs7aUNBRTVCOztnQ0FDRCxpQkFFSCw4REFBQ1gsZ0RBQUk7b0JBQUNPLE9BQU8sRUFBRUEsT0FBTztvQkFBZ0NFLEVBQUUsRUFBRUYsT0FBTyxDQUFDRyxVQUFVLENBQUNDLElBQUk7bUJBQXBESixPQUFPLENBQUNHLFVBQVUsQ0FBQ0MsSUFBSTs7Ozt5QkFBaUM7YUFDdEYsQ0FDRjs7Ozs7aUJBQ0c7Ozs7O2FBQ0YsQ0FDTjtBQUNKLENBQUM7QUF0QktWLEtBQUFBLFFBQVE7QUF3QmQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdWkvYXJ0aWNsZXMuanN4PzZlMGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIkAvdWkvY2FyZFwiO1xuXG5jb25zdCBBcnRpY2xlcyA9ICh7IGFydGljbGVzLCBjbGFzc2VzID0gXCJcIiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbS1hdXRvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTUgZ3JpZC1hdXRvLWZsb3dcIj5cbiAgICAgICAge2FydGljbGVzLm1hcCgoYXJ0aWNsZSwgaSkgPT5cbiAgICAgICAgICBpID09PSAwID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdj5MYXRlc3QgYXJ0aWNsZTwvZGl2PlxuICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgIGNsYXNzZXM9e1wicm93LXNwYW4tMlwifVxuICAgICAgICAgICAgICAgIGFydGljbGU9e2FydGljbGV9XG4gICAgICAgICAgICAgICAga2V5PXthcnRpY2xlLmF0dHJpYnV0ZXMuc2x1Z31cbiAgICAgICAgICAgICAgICBpZD17YXJ0aWNsZS5hdHRyaWJ1dGVzLnNsdWd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPENhcmQgYXJ0aWNsZT17YXJ0aWNsZX0ga2V5PXthcnRpY2xlLmF0dHJpYnV0ZXMuc2x1Z30gaWQ9e2FydGljbGUuYXR0cmlidXRlcy5zbHVnfSAvPlxuICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZXM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJkIiwiQXJ0aWNsZXMiLCJhcnRpY2xlcyIsImNsYXNzZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJhcnRpY2xlIiwiaSIsImlkIiwiYXR0cmlidXRlcyIsInNsdWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ui/articles.jsx\n"));

/***/ })

});