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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/ui/image */ \"./src/ui/image.jsx\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\nvar Card = function(param) {\n    var article = param.article, _classes = param.classes, classes = _classes === void 0 ? \"\" : _classes;\n    return(// <Link href={`/article/${article.attributes.slug}`}>\n    //   <a className={`flex ${classes}`}>\n    //     <div className={\"image-container h-full\"}>\n    //       <NextImage image={article.attributes.image} />\n    //     </div>\n    //   </a>\n    // </Link>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/article/\".concat(article.attributes.slug),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"block no-underline text-inherit grow\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"image-container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            image: article.attributes.image\n                        }, void 0, false, {\n                            fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/card.jsx\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/card.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/card.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/card.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold mb-8\",\n                        children: article.attributes.title\n                    }, void 0, false, {\n                        fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/card.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                format: \"MMM Do YYYY\",\n                                children: article.attributes.published_at\n                            }, void 0, false, {\n                                fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/card.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"flex gap-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"list-none py-2 px-6 rounded-[45px] bg-[dodgerblue] text-white\",\n                                        children: \"test\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/card.jsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"list-none py-2 px-6 rounded-[45px] bg-[dodgerblue] text-white\",\n                                        children: \"test\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/card.jsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/card.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/card.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/card.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/ui/card.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, _this));\n};\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkvY2FyZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUNHO0FBQ007QUFDRDtBQUVsQyxJQUFNSSxJQUFJLEdBQUcsZ0JBQStCO1FBQTVCQyxPQUFPLFNBQVBBLE9BQU8sbUJBQUVDLE9BQU8sRUFBUEEsT0FBTyx5QkFBRyxFQUFFO0lBQ25DLE9BQ0Usc0RBQXNEO0lBQ3RELHNDQUFzQztJQUN0QyxpREFBaUQ7SUFDakQsdURBQXVEO0lBQ3ZELGFBQWE7SUFDYixTQUFTO0lBQ1QsVUFBVTtrQkFDViw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsZUFBZTs7MEJBQzVCLDhEQUFDUCxrREFBSTtnQkFBQ1EsSUFBSSxFQUFFLFdBQVUsQ0FBMEIsT0FBeEJKLE9BQU8sQ0FBQ0ssVUFBVSxDQUFDQyxJQUFJLENBQUU7MEJBQy9DLDRFQUFDQyxHQUFDO29CQUFDSixTQUFTLEVBQUcsc0NBQW9DOzhCQUNqRCw0RUFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFLGlCQUFpQjtrQ0FDL0IsNEVBQUNOLGlEQUFTOzRCQUFDVyxLQUFLLEVBQUVSLE9BQU8sQ0FBQ0ssVUFBVSxDQUFDRyxLQUFLOzs7OztpQ0FBSTs7Ozs7NkJBQzFDOzs7Ozt5QkFDSjs7Ozs7cUJBQ0M7MEJBQ1AsOERBQUNOLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxLQUFLOztrQ0FDbEIsOERBQUNNLElBQUU7d0JBQUNOLFNBQVMsRUFBQyx5QkFBeUI7a0NBQUVILE9BQU8sQ0FBQ0ssVUFBVSxDQUFDSyxLQUFLOzs7Ozs2QkFBTTtrQ0FDdkUsOERBQUNSLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxtQ0FBbUM7OzBDQUNoRCw4REFBQ0wscURBQU07Z0NBQUNhLE1BQU0sRUFBQyxhQUFhOzBDQUFFWCxPQUFPLENBQUNLLFVBQVUsQ0FBQ08sWUFBWTs7Ozs7cUNBQVU7MENBQ3ZFLDhEQUFDQyxJQUFFO2dDQUFDVixTQUFTLEVBQUMsWUFBWTs7a0RBQ3hCLDhEQUFDVyxJQUFFO3dDQUFDWCxTQUFTLEVBQUMsK0RBQStEO2tEQUFDLE1BQUk7Ozs7OzZDQUFLO2tEQUN2Riw4REFBQ1csSUFBRTt3Q0FBQ1gsU0FBUyxFQUFDLCtEQUErRDtrREFBQyxNQUFJOzs7Ozs2Q0FBSzs7Ozs7O3FDQUNwRjs7Ozs7OzZCQUNEOzs7Ozs7cUJBQ0Y7Ozs7OzthQUNGLEVBQ047QUFDSixDQUFDO0FBN0JLSixLQUFBQSxJQUFJO0FBK0JWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL2NhcmQuanN4P2U0YzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiQC91aS9pbWFnZVwiO1xuaW1wb3J0IE1vbWVudCBmcm9tIFwicmVhY3QtbW9tZW50XCI7XG5cbmNvbnN0IENhcmQgPSAoeyBhcnRpY2xlLCBjbGFzc2VzID0gXCJcIiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgLy8gPExpbmsgaHJlZj17YC9hcnRpY2xlLyR7YXJ0aWNsZS5hdHRyaWJ1dGVzLnNsdWd9YH0+XG4gICAgLy8gICA8YSBjbGFzc05hbWU9e2BmbGV4ICR7Y2xhc3Nlc31gfT5cbiAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9e1wiaW1hZ2UtY29udGFpbmVyIGgtZnVsbFwifT5cbiAgICAvLyAgICAgICA8TmV4dEltYWdlIGltYWdlPXthcnRpY2xlLmF0dHJpYnV0ZXMuaW1hZ2V9IC8+XG4gICAgLy8gICAgIDwvZGl2PlxuICAgIC8vICAgPC9hPlxuICAgIC8vIDwvTGluaz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgIDxMaW5rIGhyZWY9e2AvYXJ0aWNsZS8ke2FydGljbGUuYXR0cmlidXRlcy5zbHVnfWB9PlxuICAgICAgICA8YSBjbGFzc05hbWU9e2BibG9jayBuby11bmRlcmxpbmUgdGV4dC1pbmhlcml0IGdyb3dgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJpbWFnZS1jb250YWluZXJcIn0+XG4gICAgICAgICAgICA8TmV4dEltYWdlIGltYWdlPXthcnRpY2xlLmF0dHJpYnV0ZXMuaW1hZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC04XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItOFwiPnthcnRpY2xlLmF0dHJpYnV0ZXMudGl0bGV9PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8TW9tZW50IGZvcm1hdD1cIk1NTSBEbyBZWVlZXCI+e2FydGljbGUuYXR0cmlidXRlcy5wdWJsaXNoZWRfYXR9PC9Nb21lbnQ+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZ2FwLTVcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LW5vbmUgcHktMiBweC02IHJvdW5kZWQtWzQ1cHhdIGJnLVtkb2RnZXJibHVlXSB0ZXh0LXdoaXRlXCI+dGVzdDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ub25lIHB5LTIgcHgtNiByb3VuZGVkLVs0NXB4XSBiZy1bZG9kZ2VyYmx1ZV0gdGV4dC13aGl0ZVwiPnRlc3Q8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIk5leHRJbWFnZSIsIk1vbWVudCIsIkNhcmQiLCJhcnRpY2xlIiwiY2xhc3NlcyIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJhdHRyaWJ1dGVzIiwic2x1ZyIsImEiLCJpbWFnZSIsImgxIiwidGl0bGUiLCJmb3JtYXQiLCJwdWJsaXNoZWRfYXQiLCJ1bCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ui/card.jsx\n"));

/***/ })

});