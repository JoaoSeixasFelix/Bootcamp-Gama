"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/userfavorites",{

/***/ "./components/MaterialUI/MenuList.tsx":
/*!********************************************!*\
  !*** ./components/MaterialUI/MenuList.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"restaurantDescription\": function() { return /* binding */ restaurantDescription; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Disclosure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Disclosure */ \"./components/MaterialUI/Disclosure.tsx\");\nvar _this = undefined;\n\n\n\n\nvar restaurantDescription = function(item) {\n    var list = item.points ? \"\" : \"list-item\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-center mb-6\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col min-w-fit border-solid border-2 border-gray-200 rounded-xl items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: item.picture\n                }, void 0, false, {\n                    fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"restaurant-description flex \".concat(item.points ? \"flex-col-reverse\" : \"\", \" items-center justify-between w-72\")),\n                    children: [\n                        item.points ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Disclosure__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 31\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 26\n                        }, _this) : \"\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"dish-description mt-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-base\",\n                                    children: item.restaurantName\n                                }, void 0, false, {\n                                    fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"user-points text-base text-emerald-400\",\n                                    children: item.points\n                                }, void 0, false, {\n                                    fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"model-plate \".concat(list, \" ml-4 text-zinc-500 text-xs\"),\n                                    children: item.plateModel\n                                }, void 0, false, {\n                                    fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"ml-0 text-zinc-500 text-xs\",\n                                    children: item.localization\n                                }, void 0, false, {\n                                    fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-light\",\n                                    children: item.validate\n                                }, void 0, false, {\n                                    fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: item.points ? \"\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: item.favIcon\n                            }, void 0, false, {\n                                fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 33\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (restaurantDescription);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hdGVyaWFsVUkvTWVudUxpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQW1DO0FBQ0o7QUFDUTtBQWFoQyxJQUFNRyxxQkFBcUIsR0FBRyxTQUFDQyxJQUFXLEVBQUs7SUFDcEQsSUFBTUMsSUFBSSxHQUFHRCxJQUFJLENBQUNFLE1BQU0sR0FBRyxFQUFFLEdBQUcsV0FBVztJQUUzQyxxQkFDRSw4REFBQ0MsS0FBRztRQUFDUCxTQUFTLEVBQUMsZ0RBQWdEO2tCQUM3RCw0RUFBQ08sS0FBRztZQUFDUCxTQUFTLEVBQUMsdUZBQXVGOzs4QkFDcEcsOERBQUNDLG1EQUFLO29CQUFDTyxHQUFHLEVBQUVKLElBQUksQ0FBQ0ssT0FBTzs7Ozs7eUJBQUk7OEJBRTVCLDhEQUFDRixLQUFHO29CQUFDUCxTQUFTLEVBQUVBLGlEQUFTLENBQUMsOEJBQTZCLENBQXdDLE1BQWtDLENBQXhFSSxJQUFJLENBQUNFLE1BQU0sR0FBRyxrQkFBa0IsR0FBRyxFQUFFLEVBQUMsb0NBQWtDLENBQUMsQ0FBQzs7d0JBRWhJRixJQUFJLENBQUNFLE1BQU0saUJBQUcsOERBQUNDLEtBQUc7c0NBQUMsNEVBQUNMLG1EQUFXOzs7O3FDQUFFOzs7OztpQ0FBTSxHQUFHLEVBQUU7c0NBRzdDLDhEQUFDSyxLQUFHOzRCQUFDUCxTQUFTLEVBQUMsdUJBQXVCOzs4Q0FFcEMsOERBQUNVLEdBQUM7b0NBQUNWLFNBQVMsRUFBQyxXQUFXOzhDQUFFSSxJQUFJLENBQUNPLGNBQWM7Ozs7O3lDQUFLOzhDQUVsRCw4REFBQ0QsR0FBQztvQ0FBQ1YsU0FBUyxFQUFDLHdDQUF3Qzs4Q0FDbERJLElBQUksQ0FBQ0UsTUFBTTs7Ozs7eUNBQ1Y7OENBRUosOERBQUNJLEdBQUM7b0NBQUNWLFNBQVMsRUFBRSxjQUFhLENBQU8sTUFBMkIsQ0FBaENLLElBQUksRUFBQyw2QkFBMkIsQ0FBQzs4Q0FDM0RELElBQUksQ0FBQ1EsVUFBVTs7Ozs7eUNBQ2Q7OENBRUosOERBQUNGLEdBQUM7b0NBQUNWLFNBQVMsRUFBQyw0QkFBNEI7OENBQUVJLElBQUksQ0FBQ1MsWUFBWTs7Ozs7eUNBQUs7OENBRWpFLDhEQUFDSCxHQUFDO29DQUFDVixTQUFTLEVBQUMsWUFBWTs4Q0FBRUksSUFBSSxDQUFDVSxRQUFROzs7Ozt5Q0FBSzs7Ozs7O2lDQUN6QztzQ0FFTiw4REFBQ1AsS0FBRztzQ0FDREgsSUFBSSxDQUFDRSxNQUFNLEdBQUcsRUFBRSxpQkFBRyw4REFBQ0wsbURBQUs7Z0NBQUNPLEdBQUcsRUFBRUosSUFBSSxDQUFDVyxPQUFPOzs7OztxQ0FBSTs7Ozs7aUNBQzVDOzs7Ozs7eUJBQ0Y7Ozs7OztpQkFDRjs7Ozs7YUFDRixDQUNOO0NBQ0gsQ0FBQztBQUVGLCtEQUFlWixxQkFBcUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01hdGVyaWFsVUkvTWVudUxpc3QudHN4Pzc1Y2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZSBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgRGlzY2xvdXN1cmUgZnJvbSBcIi4vRGlzY2xvc3VyZVwiO1xuXG50eXBlIFByb3BzID0ge1xuICBpdGVtPzogc3RyaW5nO1xuICBwb2ludHM/OiBzdHJpbmc7XG4gIHBpY3R1cmU/OiBzdHJpbmcgfCBvYmplY3QgfCBhbnk7XG4gIHJlc3RhdXJhbnROYW1lPzogc3RyaW5nO1xuICBwbGF0ZU1vZGVsPzogc3RyaW5nO1xuICBsb2NhbGl6YXRpb24/OiBzdHJpbmc7XG4gIHZhbGlkYXRlPzogc3RyaW5nO1xuICBmYXZJY29uPzogc3RyaW5nIHwgb2JqZWN0IHwgYW55O1xufTtcblxuZXhwb3J0IGNvbnN0IHJlc3RhdXJhbnREZXNjcmlwdGlvbiA9IChpdGVtOiBQcm9wcykgPT4ge1xuICBjb25zdCBsaXN0ID0gaXRlbS5wb2ludHMgPyBcIlwiIDogXCJsaXN0LWl0ZW1cIjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbWItNlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1pbi13LWZpdCBib3JkZXItc29saWQgYm9yZGVyLTIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQteGwgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0ucGljdHVyZX0gLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lKGByZXN0YXVyYW50LWRlc2NyaXB0aW9uIGZsZXggJHtpdGVtLnBvaW50cyA/IFwiZmxleC1jb2wtcmV2ZXJzZVwiIDogXCJcIn0gaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LTcyYCl9PlxuICAgICAgICAgIFxuICAgICAgICAgIHtpdGVtLnBvaW50cyA/IDxkaXY+PERpc2Nsb3VzdXJlLz48L2Rpdj4gOiBcIlwifVxuICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNoLWRlc2NyaXB0aW9uIG10LTJcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlXCI+e2l0ZW0ucmVzdGF1cmFudE5hbWV9PC9wPlxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1c2VyLXBvaW50cyB0ZXh0LWJhc2UgdGV4dC1lbWVyYWxkLTQwMFwiPlxuICAgICAgICAgICAgICB7aXRlbS5wb2ludHN9XG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YG1vZGVsLXBsYXRlICR7bGlzdH0gbWwtNCB0ZXh0LXppbmMtNTAwIHRleHQteHNgfT5cbiAgICAgICAgICAgICAge2l0ZW0ucGxhdGVNb2RlbH1cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMCB0ZXh0LXppbmMtNTAwIHRleHQteHNcIj57aXRlbS5sb2NhbGl6YXRpb259PC9wPlxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWxpZ2h0XCI+e2l0ZW0udmFsaWRhdGV9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtpdGVtLnBvaW50cyA/IFwiXCIgOiA8SW1hZ2Ugc3JjPXtpdGVtLmZhdkljb259IC8+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzdGF1cmFudERlc2NyaXB0aW9uO1xuIl0sIm5hbWVzIjpbImNsYXNzTmFtZSIsIkltYWdlIiwiRGlzY2xvdXN1cmUiLCJyZXN0YXVyYW50RGVzY3JpcHRpb24iLCJpdGVtIiwibGlzdCIsInBvaW50cyIsImRpdiIsInNyYyIsInBpY3R1cmUiLCJwIiwicmVzdGF1cmFudE5hbWUiLCJwbGF0ZU1vZGVsIiwibG9jYWxpemF0aW9uIiwidmFsaWRhdGUiLCJmYXZJY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MaterialUI/MenuList.tsx\n");

/***/ })

});