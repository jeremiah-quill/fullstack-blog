"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/article/[slug]",{

/***/ "./src/pages/article/[slug].jsx":
/*!**************************************!*\
  !*** ./src/pages/article/[slug].jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/ui/image */ \"./src/ui/image.jsx\");\n/* harmony import */ var _ui_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/ui/seo */ \"./src/ui/seo.jsx\");\n/* harmony import */ var _ui_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/ui/layout */ \"./src/ui/layout.jsx\");\n/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/media */ \"./src/lib/media.js\");\nvar _this = undefined;\n\n\n// import ReactMarkdown from \"markdown-to-jsx\";\n\n\n\n\n\nvar Article = function(param) {\n    var article = param.article, categories = param.categories;\n    var imageUrl = (0,_lib_media__WEBPACK_IMPORTED_MODULE_5__.getStrapiMedia)(article.attributes.image);\n    var seo = {\n        metaTitle: article.attributes.title,\n        metaDescription: article.attributes.description,\n        shareImage: article.attributes.image,\n        article: true\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        categories: categories.data,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_seo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                seo: seo\n            }, void 0, false, {\n                fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/pages/article/[slug].jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-6xl px-2 m-auto my-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: \"grid md:grid-cols-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col w-[60%]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex gap-2 items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"font-bold\",\n                                                children: article.attributes.category.data.attributes.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/pages/article/[slug].jsx\",\n                                                lineNumber: 29,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                format: \"MMM Do YYYY\",\n                                                children: article.attributes.published_at\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/pages/article/[slug].jsx\",\n                                                lineNumber: 30,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/pages/article/[slug].jsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-6xl grow\",\n                                        children: article.attributes.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/pages/article/[slug].jsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center gap-2\",\n                                        children: [\n                                            article.attributes.author.data.attributes.picture && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: (0,_lib_media__WEBPACK_IMPORTED_MODULE_5__.getStrapiMedia)(article.attributes.author.data.attributes.picture),\n                                                alt: article.attributes.author.data.attributes.picture.data.attributes.alternativeText,\n                                                style: {\n                                                    position: \"static\",\n                                                    borderRadius: \"20%\",\n                                                    height: 60\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/pages/article/[slug].jsx\",\n                                                lineNumber: 36,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"font-bold\",\n                                                        children: article.attributes.author.data.attributes.name\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/pages/article/[slug].jsx\",\n                                                        lineNumber: 50,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: \"blah blah blah\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/pages/article/[slug].jsx\",\n                                                        lineNumber: 51,\n                                                        columnNumber: 17\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/pages/article/[slug].jsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/pages/article/[slug].jsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/pages/article/[slug].jsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"image-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    image: article.attributes.image\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/pages/article/[slug].jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/pages/article/[slug].jsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/pages/article/[slug].jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-16\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            dangerouslySetInnerHTML: {\n                                __html: article.attributes.content\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/pages/article/[slug].jsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/pages/article/[slug].jsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/pages/article/[slug].jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jeremiahquill/Desktop/code/fullstack-blog/frontend/src/pages/article/[slug].jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_c = Article;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);\nvar _c;\n$RefreshReg$(_c, \"Article\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsQ0FBQ0MsS0FBSzs7Ozs7eUNBQUk7Ozs7O3FDQUN0Qzs7Ozs7OzZCQUNDO2tDQUNULDhEQUFDUSxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsT0FBTztrQ0FDcEIsNEVBQUNELEtBQUc7NEJBQUNtQix1QkFBdUIsRUFBRTtnQ0FBRUMsTUFBTSxFQUFFaEMsT0FBTyxDQUFDRyxVQUFVLENBQUM4QixPQUFPOzZCQUFFOzs7OztpQ0FBUTs7Ozs7NkJBQ3hFOzs7Ozs7cUJBQ0Y7Ozs7OzthQXVDQyxDQUNUO0FBQ0osQ0FBQztBQTVGS2xDLEtBQUFBLE9BQU87O0FBMEhiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FydGljbGUvW3NsdWddLmpzeD8wMzZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb21lbnQgZnJvbSBcInJlYWN0LW1vbWVudFwiO1xuLy8gaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcIm1hcmtkb3duLXRvLWpzeFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIkAvdWkvaW1hZ2VcIjtcblxuaW1wb3J0IFNlbyBmcm9tIFwiQC91aS9zZW9cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIkAvdWkvbGF5b3V0XCI7XG5cbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcbmltcG9ydCB7IGdldFN0cmFwaU1lZGlhIH0gZnJvbSBcIi4uLy4uL2xpYi9tZWRpYVwiO1xuXG5jb25zdCBBcnRpY2xlID0gKHsgYXJ0aWNsZSwgY2F0ZWdvcmllcyB9KSA9PiB7XG4gIGNvbnN0IGltYWdlVXJsID0gZ2V0U3RyYXBpTWVkaWEoYXJ0aWNsZS5hdHRyaWJ1dGVzLmltYWdlKTtcblxuICBjb25zdCBzZW8gPSB7XG4gICAgbWV0YVRpdGxlOiBhcnRpY2xlLmF0dHJpYnV0ZXMudGl0bGUsXG4gICAgbWV0YURlc2NyaXB0aW9uOiBhcnRpY2xlLmF0dHJpYnV0ZXMuZGVzY3JpcHRpb24sXG4gICAgc2hhcmVJbWFnZTogYXJ0aWNsZS5hdHRyaWJ1dGVzLmltYWdlLFxuICAgIGFydGljbGU6IHRydWUsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNhdGVnb3JpZXM9e2NhdGVnb3JpZXMuZGF0YX0+XG4gICAgICA8U2VvIHNlbz17c2VvfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgcHgtMiBtLWF1dG8gbXktMTZcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctWzYwJV1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPnthcnRpY2xlLmF0dHJpYnV0ZXMuY2F0ZWdvcnkuZGF0YS5hdHRyaWJ1dGVzLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgPE1vbWVudCBmb3JtYXQ9XCJNTU0gRG8gWVlZWVwiPnthcnRpY2xlLmF0dHJpYnV0ZXMucHVibGlzaGVkX2F0fTwvTW9tZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgZ3Jvd1wiPnthcnRpY2xlLmF0dHJpYnV0ZXMudGl0bGV9PC9oMT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICB7YXJ0aWNsZS5hdHRyaWJ1dGVzLmF1dGhvci5kYXRhLmF0dHJpYnV0ZXMucGljdHVyZSAmJiAoXG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXtnZXRTdHJhcGlNZWRpYShhcnRpY2xlLmF0dHJpYnV0ZXMuYXV0aG9yLmRhdGEuYXR0cmlidXRlcy5waWN0dXJlKX1cbiAgICAgICAgICAgICAgICAgIGFsdD17XG4gICAgICAgICAgICAgICAgICAgIGFydGljbGUuYXR0cmlidXRlcy5hdXRob3IuZGF0YS5hdHRyaWJ1dGVzLnBpY3R1cmUuZGF0YS5hdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgICAgICAgLmFsdGVybmF0aXZlVGV4dFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwic3RhdGljXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMCVcIixcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MCxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPnthcnRpY2xlLmF0dHJpYnV0ZXMuYXV0aG9yLmRhdGEuYXR0cmlidXRlcy5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+YmxhaCBibGFoIGJsYWg8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImltYWdlLWNvbnRhaW5lclwifT5cbiAgICAgICAgICAgIDxJbWFnZSBpbWFnZT17YXJ0aWNsZS5hdHRyaWJ1dGVzLmltYWdlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xNlwiPlxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBhcnRpY2xlLmF0dHJpYnV0ZXMuY29udGVudCB9fT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctM3hsIG0tYXV0byBteS0xNlwiPlxuICAgICAgICA8SW1hZ2UgaW1hZ2U9e2FydGljbGUuYXR0cmlidXRlcy5pbWFnZX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xNlwiPlxuICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYXJ0aWNsZS5hdHRyaWJ1dGVzLmNvbnRlbnQgfX0+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJteS04XCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2FydGljbGUuYXR0cmlidXRlcy5hdXRob3IuZGF0YS5hdHRyaWJ1dGVzLnBpY3R1cmUgJiYgKFxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e2dldFN0cmFwaU1lZGlhKGFydGljbGUuYXR0cmlidXRlcy5hdXRob3IuZGF0YS5hdHRyaWJ1dGVzLnBpY3R1cmUpfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e1xuICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuYXR0cmlidXRlcy5hdXRob3IuZGF0YS5hdHRyaWJ1dGVzLnBpY3R1cmUuZGF0YS5hdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWx0ZXJuYXRpdmVUZXh0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJzdGF0aWNcIixcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstd2lkdGgtZXhwYW5kXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidWstbWFyZ2luLXJlbW92ZS1ib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgIEJ5IHthcnRpY2xlLmF0dHJpYnV0ZXMuYXV0aG9yLmRhdGEuYXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1ay10ZXh0LW1ldGEgdWstbWFyZ2luLXJlbW92ZS10b3BcIj5cbiAgICAgICAgICAgICAgICAgIDxNb21lbnQgZm9ybWF0PVwiTU1NIERvIFlZWVlcIj57YXJ0aWNsZS5hdHRyaWJ1dGVzLnB1Ymxpc2hlZF9hdH08L01vbWVudD5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+ICovfVxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBhcnRpY2xlc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2FydGljbGVzXCIsIHsgZmllbGRzOiBbXCJzbHVnXCJdIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IGFydGljbGVzUmVzLmRhdGEubWFwKChhcnRpY2xlKSA9PiAoe1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHNsdWc6IGFydGljbGUuYXR0cmlidXRlcy5zbHVnLFxuICAgICAgfSxcbiAgICB9KSksXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBhcnRpY2xlc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2FydGljbGVzXCIsIHtcbiAgICBmaWx0ZXJzOiB7XG4gICAgICBzbHVnOiBwYXJhbXMuc2x1ZyxcbiAgICB9LFxuICAgIHBvcHVsYXRlOiBbXCJpbWFnZVwiLCBcImNhdGVnb3J5XCIsIFwiYXV0aG9yLnBpY3R1cmVcIl0sXG4gIH0pO1xuICBjb25zdCBjYXRlZ29yaWVzUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvY2F0ZWdvcmllc1wiKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGFydGljbGU6IGFydGljbGVzUmVzLmRhdGFbMF0sIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXNSZXMgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlO1xuIl0sIm5hbWVzIjpbIk1vbWVudCIsIlJlYWN0TWFya2Rvd24iLCJJbWFnZSIsIlNlbyIsIkxheW91dCIsImdldFN0cmFwaU1lZGlhIiwiQXJ0aWNsZSIsImFydGljbGUiLCJjYXRlZ29yaWVzIiwiaW1hZ2VVcmwiLCJhdHRyaWJ1dGVzIiwiaW1hZ2UiLCJzZW8iLCJtZXRhVGl0bGUiLCJ0aXRsZSIsIm1ldGFEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwic2hhcmVJbWFnZSIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJoMiIsImNhdGVnb3J5IiwibmFtZSIsImZvcm1hdCIsInB1Ymxpc2hlZF9hdCIsImgxIiwiYXV0aG9yIiwicGljdHVyZSIsImltZyIsInNyYyIsImFsdCIsImFsdGVybmF0aXZlVGV4dCIsInN0eWxlIiwicG9zaXRpb24iLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/article/[slug].jsx\n"));

/***/ })

});