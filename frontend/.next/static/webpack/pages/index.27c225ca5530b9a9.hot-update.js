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

/***/ "./src/ui/card.jsx":
/*!*************************!*\
  !*** ./src/ui/card.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/ui/image */ \"./src/ui/image.jsx\");\nvar _this = undefined;\n\n\n\n\nvar Card = function(param) {\n    var article = param.article, _classes = param.classes, classes = _classes === void 0 ? \"\" : _classes;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/article/\".concat(article.attributes.slug),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            className: \"flex \".concat(classes),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"image-container h-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    image: article.attributes.image\n                }, void 0, false, {\n                    fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/card.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/card.jsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/card.jsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/card.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this);\n};\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkvY2FyZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDRztBQUNNO0FBRW5DLElBQU1HLElBQUksR0FBRyxnQkFBK0I7UUFBNUJDLE9BQU8sU0FBUEEsT0FBTyxtQkFBRUMsT0FBTyxFQUFQQSxPQUFPLHlCQUFHLEVBQUU7SUFDbkMscUJBQ0UsOERBQUNKLGtEQUFJO1FBQUNLLElBQUksRUFBRSxXQUFVLENBQTBCLE9BQXhCRixPQUFPLENBQUNHLFVBQVUsQ0FBQ0MsSUFBSSxDQUFFO2tCQUMvQyw0RUFBQ0MsR0FBQztZQUFDQyxTQUFTLEVBQUUsT0FBTSxDQUFVLE9BQVJMLE9BQU8sQ0FBRTtzQkFDN0IsNEVBQUNNLEtBQUc7Z0JBQUNELFNBQVMsRUFBRSx3QkFBd0I7MEJBQ3RDLDRFQUFDUixpREFBUztvQkFBQ1UsS0FBSyxFQUFFUixPQUFPLENBQUNHLFVBQVUsQ0FBQ0ssS0FBSzs7Ozs7eUJBQUk7Ozs7O3FCQUMxQzs7Ozs7aUJBQ0o7Ozs7O2FBQ0MsQ0FDUDtBQUNKLENBQUM7QUFWS1QsS0FBQUEsSUFBSTtBQVlWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL2NhcmQuanN4P2U0YzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiQC91aS9pbWFnZVwiO1xuXG5jb25zdCBDYXJkID0gKHsgYXJ0aWNsZSwgY2xhc3NlcyA9IFwiXCIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9e2AvYXJ0aWNsZS8ke2FydGljbGUuYXR0cmlidXRlcy5zbHVnfWB9PlxuICAgICAgPGEgY2xhc3NOYW1lPXtgZmxleCAke2NsYXNzZXN9YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImltYWdlLWNvbnRhaW5lciBoLWZ1bGxcIn0+XG4gICAgICAgICAgPE5leHRJbWFnZSBpbWFnZT17YXJ0aWNsZS5hdHRyaWJ1dGVzLmltYWdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIk5leHRJbWFnZSIsIkNhcmQiLCJhcnRpY2xlIiwiY2xhc3NlcyIsImhyZWYiLCJhdHRyaWJ1dGVzIiwic2x1ZyIsImEiLCJjbGFzc05hbWUiLCJkaXYiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ui/card.jsx\n"));

/***/ })

});