"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/userpagepoints",{

/***/ "./components/MaterialUI/MenuList.tsx":
/*!********************************************!*\
  !*** ./components/MaterialUI/MenuList.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"restaurantDescription\": function() { return /* binding */ restaurantDescription; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Disclosure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Disclosure */ \"./components/MaterialUI/Disclosure.tsx\");\nvar _this = undefined;\n\n\n\n\nvar restaurantDescription = function(item) {\n    var list = item.points ? \"\" : \"list-item\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-center mb-6\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex border-solid border-2 border-gray-200 rounded-xl items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: item.picture\n                }, void 0, false, {\n                    fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"restaurant-description flex \".concat(item.points ? \"flex-col-reverse\" : \"\", \" justify-between w-72\")),\n                    children: [\n                        item.points ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Disclosure__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 49\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 26\n                        }, _this) : \"\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"dish-description mt-2 justify-start items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-base\",\n                                    children: item.restaurantName\n                                }, void 0, false, {\n                                    fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"user-points text-base text-emerald-400\",\n                                    children: item.points\n                                }, void 0, false, {\n                                    fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"model-plate \".concat(list, \" ml-4 text-zinc-500 text-xs\"),\n                                    children: item.plateModel\n                                }, void 0, false, {\n                                    fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"ml-0 text-zinc-500 text-xs\",\n                                    children: item.localization\n                                }, void 0, false, {\n                                    fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-light\",\n                                    children: item.validate\n                                }, void 0, false, {\n                                    fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: item.points ? \"\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: item.favIcon,\n                                className: \"dish-description mt-2 justify-center items-center\"\n                            }, void 0, false, {\n                                fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 33\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (restaurantDescription);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hdGVyaWFsVUkvTWVudUxpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQW1DO0FBQ0o7QUFDUTtBQWFoQyxJQUFNRyxxQkFBcUIsR0FBRyxTQUFDQyxJQUFXLEVBQUs7SUFDcEQsSUFBTUMsSUFBSSxHQUFHRCxJQUFJLENBQUNFLE1BQU0sR0FBRyxFQUFFLEdBQUcsV0FBVztJQUUzQyxxQkFDRSw4REFBQ0MsS0FBRztRQUFDUCxTQUFTLEVBQUMsZ0RBQWdEO2tCQUM3RCw0RUFBQ08sS0FBRztZQUFDUCxTQUFTLEVBQUMsb0VBQW9FOzs4QkFDakYsOERBQUNDLG1EQUFLO29CQUFDTyxHQUFHLEVBQUVKLElBQUksQ0FBQ0ssT0FBTzs7Ozs7eUJBQUk7OEJBRTVCLDhEQUFDRixLQUFHO29CQUFDUCxTQUFTLEVBQUVBLGlEQUFTLENBQUMsOEJBQTZCLENBQXdDLE1BQXFCLENBQTNESSxJQUFJLENBQUNFLE1BQU0sR0FBRyxrQkFBa0IsR0FBRyxFQUFFLEVBQUMsdUJBQXFCLENBQUMsQ0FBQzs7d0JBRW5IRixJQUFJLENBQUNFLE1BQU0saUJBQUcsOERBQUNDLEtBQUc7NEJBQUNQLFNBQVMsRUFBQyxPQUFPO3NDQUFDLDRFQUFDRSxtREFBVzs7OztxQ0FBRTs7Ozs7aUNBQU0sR0FBRyxFQUFFO3NDQUcvRCw4REFBQ0ssS0FBRzs0QkFBQ1AsU0FBUyxFQUFDLGtEQUFrRDs7OENBRS9ELDhEQUFDVSxHQUFDO29DQUFDVixTQUFTLEVBQUMsV0FBVzs4Q0FBRUksSUFBSSxDQUFDTyxjQUFjOzs7Ozt5Q0FBSzs4Q0FFbEQsOERBQUNELEdBQUM7b0NBQUNWLFNBQVMsRUFBQyx3Q0FBd0M7OENBQ2xESSxJQUFJLENBQUNFLE1BQU07Ozs7O3lDQUNWOzhDQUVKLDhEQUFDSSxHQUFDO29DQUFDVixTQUFTLEVBQUUsY0FBYSxDQUFPLE1BQTJCLENBQWhDSyxJQUFJLEVBQUMsNkJBQTJCLENBQUM7OENBQzNERCxJQUFJLENBQUNRLFVBQVU7Ozs7O3lDQUNkOzhDQUVKLDhEQUFDRixHQUFDO29DQUFDVixTQUFTLEVBQUMsNEJBQTRCOzhDQUFFSSxJQUFJLENBQUNTLFlBQVk7Ozs7O3lDQUFLOzhDQUVqRSw4REFBQ0gsR0FBQztvQ0FBQ1YsU0FBUyxFQUFDLFlBQVk7OENBQUVJLElBQUksQ0FBQ1UsUUFBUTs7Ozs7eUNBQUs7Ozs7OztpQ0FDekM7c0NBRU4sOERBQUNQLEtBQUc7c0NBQ0RILElBQUksQ0FBQ0UsTUFBTSxHQUFHLEVBQUUsaUJBQUcsOERBQUNMLG1EQUFLO2dDQUFDTyxHQUFHLEVBQUVKLElBQUksQ0FBQ1csT0FBTztnQ0FBRWYsU0FBUyxFQUFFLG1EQUFtRDs7Ozs7cUNBQUc7Ozs7O2lDQUMzRzs7Ozs7O3lCQUNGOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ0YsQ0FDTjtDQUNILENBQUM7QUFFRiwrREFBZUcscUJBQXFCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXRlcmlhbFVJL01lbnVMaXN0LnRzeD83NWNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWUgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IERpc2Nsb3VzdXJlIGZyb20gXCIuL0Rpc2Nsb3N1cmVcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgaXRlbT86IHN0cmluZztcbiAgcG9pbnRzPzogc3RyaW5nO1xuICBwaWN0dXJlPzogc3RyaW5nIHwgb2JqZWN0IHwgYW55O1xuICByZXN0YXVyYW50TmFtZT86IHN0cmluZztcbiAgcGxhdGVNb2RlbD86IHN0cmluZztcbiAgbG9jYWxpemF0aW9uPzogc3RyaW5nO1xuICB2YWxpZGF0ZT86IHN0cmluZztcbiAgZmF2SWNvbj86IHN0cmluZyB8IG9iamVjdCB8IGFueTtcbn07XG5cbmV4cG9ydCBjb25zdCByZXN0YXVyYW50RGVzY3JpcHRpb24gPSAoaXRlbTogUHJvcHMpID0+IHtcbiAgY29uc3QgbGlzdCA9IGl0ZW0ucG9pbnRzID8gXCJcIiA6IFwibGlzdC1pdGVtXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG1iLTZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBib3JkZXItc29saWQgYm9yZGVyLTIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQteGwgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0ucGljdHVyZX0gLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lKGByZXN0YXVyYW50LWRlc2NyaXB0aW9uIGZsZXggJHtpdGVtLnBvaW50cyA/IFwiZmxleC1jb2wtcmV2ZXJzZVwiIDogXCJcIn0ganVzdGlmeS1iZXR3ZWVuIHctNzJgKX0+XG4gICAgICAgICAgXG4gICAgICAgICAge2l0ZW0ucG9pbnRzID8gPGRpdiBjbGFzc05hbWU9XCJmbGV4IFwiPjxEaXNjbG91c3VyZS8+PC9kaXY+IDogXCJcIn1cbiAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzaC1kZXNjcmlwdGlvbiBtdC0yIGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPntpdGVtLnJlc3RhdXJhbnROYW1lfTwvcD5cblxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidXNlci1wb2ludHMgdGV4dC1iYXNlIHRleHQtZW1lcmFsZC00MDBcIj5cbiAgICAgICAgICAgICAge2l0ZW0ucG9pbnRzfVxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Btb2RlbC1wbGF0ZSAke2xpc3R9IG1sLTQgdGV4dC16aW5jLTUwMCB0ZXh0LXhzYH0+XG4gICAgICAgICAgICAgIHtpdGVtLnBsYXRlTW9kZWx9XG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTAgdGV4dC16aW5jLTUwMCB0ZXh0LXhzXCI+e2l0ZW0ubG9jYWxpemF0aW9ufTwvcD5cblxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1saWdodFwiPntpdGVtLnZhbGlkYXRlfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7aXRlbS5wb2ludHMgPyBcIlwiIDogPEltYWdlIHNyYz17aXRlbS5mYXZJY29ufSBjbGFzc05hbWU9e1wiZGlzaC1kZXNjcmlwdGlvbiBtdC0yIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwifS8+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzdGF1cmFudERlc2NyaXB0aW9uO1xuIl0sIm5hbWVzIjpbImNsYXNzTmFtZSIsIkltYWdlIiwiRGlzY2xvdXN1cmUiLCJyZXN0YXVyYW50RGVzY3JpcHRpb24iLCJpdGVtIiwibGlzdCIsInBvaW50cyIsImRpdiIsInNyYyIsInBpY3R1cmUiLCJwIiwicmVzdGF1cmFudE5hbWUiLCJwbGF0ZU1vZGVsIiwibG9jYWxpemF0aW9uIiwidmFsaWRhdGUiLCJmYXZJY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MaterialUI/MenuList.tsx\n");

/***/ })

});