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

/***/ "./src/ui/featuredCard.jsx":
/*!*********************************!*\
  !*** ./src/ui/featuredCard.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/ui/image */ \"./src/ui/image.jsx\");\nvar _this = undefined;\n\n\n\n\nvar FeaturedCard = function(param) {\n    var article = param.article, _classes = param.classes, classes = _classes === void 0 ? \"\" : _classes;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/article/\".concat(article.attributes.slug),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            className: \"p-8 pb-32 col-span-2 bg-gray-200 rounded-[.5rem]\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"image-container h-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    image: article.attributes.image\n                }, void 0, false, {\n                    fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/featuredCard.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/featuredCard.jsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/featuredCard.jsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/featuredCard.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this);\n};\n_c = FeaturedCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeaturedCard);\nvar _c;\n$RefreshReg$(_c, \"FeaturedCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkvZmVhdHVyZWRDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUEwQjtBQUNHO0FBQ007QUFFbkMsSUFBTUcsWUFBWSxHQUFHLGdCQUErQjtRQUE1QkMsT0FBTyxTQUFQQSxPQUFPLG1CQUFFQyxPQUFPLEVBQVBBLE9BQU8seUJBQUcsRUFBRTtJQUMzQyxxQkFDRSw4REFBQ0osa0RBQUk7UUFBQ0ssSUFBSSxFQUFFLFdBQVUsQ0FBMEIsT0FBeEJGLE9BQU8sQ0FBQ0csVUFBVSxDQUFDQyxJQUFJLENBQUU7a0JBQy9DLDRFQUFDQyxHQUFDO1lBQUNDLFNBQVMsRUFBRyxrREFBZ0Q7c0JBQzdELDRFQUFDQyxLQUFHO2dCQUFDRCxTQUFTLEVBQUUsd0JBQXdCOzBCQUN0Qyw0RUFBQ1IsaURBQVM7b0JBQUNVLEtBQUssRUFBRVIsT0FBTyxDQUFDRyxVQUFVLENBQUNLLEtBQUs7Ozs7O3lCQUFJOzs7OztxQkFDMUM7Ozs7O2lCQUNKOzs7OzthQUNDLENBQ1A7QUFDSixDQUFDO0FBVktULEtBQUFBLFlBQVk7QUFZbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdWkvZmVhdHVyZWRDYXJkLmpzeD9jMThlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIkAvdWkvaW1hZ2VcIjtcblxuY29uc3QgRmVhdHVyZWRDYXJkID0gKHsgYXJ0aWNsZSwgY2xhc3NlcyA9IFwiXCIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9e2AvYXJ0aWNsZS8ke2FydGljbGUuYXR0cmlidXRlcy5zbHVnfWB9PlxuICAgICAgPGEgY2xhc3NOYW1lPXtgcC04IHBiLTMyIGNvbC1zcGFuLTIgYmctZ3JheS0yMDAgcm91bmRlZC1bLjVyZW1dYH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImltYWdlLWNvbnRhaW5lciBoLWZ1bGxcIn0+XG4gICAgICAgICAgPE5leHRJbWFnZSBpbWFnZT17YXJ0aWNsZS5hdHRyaWJ1dGVzLmltYWdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlZENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiTmV4dEltYWdlIiwiRmVhdHVyZWRDYXJkIiwiYXJ0aWNsZSIsImNsYXNzZXMiLCJocmVmIiwiYXR0cmlidXRlcyIsInNsdWciLCJhIiwiY2xhc3NOYW1lIiwiZGl2IiwiaW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ui/featuredCard.jsx\n"));

/***/ })

});