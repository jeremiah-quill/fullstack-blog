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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/ui/image */ \"./src/ui/image.jsx\");\nvar _this = undefined;\n\n\n\n\nvar Card = function(param) {\n    var article = param.article, _xClassNames = param.xClassNames, xClassNames = _xClassNames === void 0 ? \"\" : _xClassNames;\n    console.log(\"hi\");\n    console.log(article);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/article/\".concat(article.attributes.slug),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            className: \"max-w-6xl m-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                image: article.attributes.image\n            }, void 0, false, {\n                fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/card.jsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/card.jsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/card.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, _this);\n};\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkvY2FyZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDRztBQUNNO0FBRW5DLElBQU1HLElBQUksR0FBRyxnQkFBbUM7UUFBaENDLE9BQU8sU0FBUEEsT0FBTyx1QkFBRUMsV0FBVyxFQUFYQSxXQUFXLDZCQUFHLEVBQUU7SUFDdkNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsT0FBTyxDQUFDLENBQUM7SUFDckIscUJBQ0UsOERBQUNILGtEQUFJO1FBQUNPLElBQUksRUFBRSxXQUFVLENBQTBCLE9BQXhCSixPQUFPLENBQUNLLFVBQVUsQ0FBQ0MsSUFBSSxDQUFFO2tCQUMvQyw0RUFBQ0MsR0FBQztZQUFDQyxTQUFTLEVBQUcsa0JBQWdCO3NCQUM3Qiw0RUFBQ1YsaURBQVM7Z0JBQUNXLEtBQUssRUFBRVQsT0FBTyxDQUFDSyxVQUFVLENBQUNJLEtBQUs7Ozs7O3FCQUFJOzs7OztpQkFjNUM7Ozs7O2FBQ0MsQ0FDUDtBQUNKLENBQUM7QUF2QktWLEtBQUFBLElBQUk7QUF5QlYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdWkvY2FyZC5qc3g/ZTRjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTmV4dEltYWdlIGZyb20gXCJAL3VpL2ltYWdlXCI7XG5cbmNvbnN0IENhcmQgPSAoeyBhcnRpY2xlLCB4Q2xhc3NOYW1lcyA9IFwiXCIgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhcImhpXCIpO1xuICBjb25zb2xlLmxvZyhhcnRpY2xlKTtcbiAgcmV0dXJuIChcbiAgICA8TGluayBocmVmPXtgL2FydGljbGUvJHthcnRpY2xlLmF0dHJpYnV0ZXMuc2x1Z31gfT5cbiAgICAgIDxhIGNsYXNzTmFtZT17YG1heC13LTZ4bCBtLWF1dG9gfT5cbiAgICAgICAgPE5leHRJbWFnZSBpbWFnZT17YXJ0aWNsZS5hdHRyaWJ1dGVzLmltYWdlfSAvPlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPE5leHRJbWFnZSBpbWFnZT17YXJ0aWNsZS5hdHRyaWJ1dGVzLmltYWdlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8cCBpZD1cImNhdGVnb3J5XCIgY2xhc3NOYW1lPVwidWstdGV4dC11cHBlcmNhc2VcIj5cbiAgICAgICAgICAgICAge2FydGljbGUuYXR0cmlidXRlcy5jYXRlZ29yeS5kYXRhLmF0dHJpYnV0ZXMubmFtZX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGlkPVwidGl0bGVcIiBjbGFzc05hbWU9XCJ1ay10ZXh0LWxhcmdlXCI+XG4gICAgICAgICAgICAgIHthcnRpY2xlLmF0dHJpYnV0ZXMudGl0bGV9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIk5leHRJbWFnZSIsIkNhcmQiLCJhcnRpY2xlIiwieENsYXNzTmFtZXMiLCJjb25zb2xlIiwibG9nIiwiaHJlZiIsImF0dHJpYnV0ZXMiLCJzbHVnIiwiYSIsImNsYXNzTmFtZSIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ui/card.jsx\n"));

/***/ })

});