"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/userhomepage",{

/***/ "./components/MaterialUI/MenuList.tsx":
/*!********************************************!*\
  !*** ./components/MaterialUI/MenuList.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"restaurantDescription\": function() { return /* binding */ restaurantDescription; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Disclosure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Disclosure */ \"./components/MaterialUI/Disclosure.tsx\");\nvar _this = undefined;\n\n\n\n\nvar restaurantDescription = function(item) {\n    var list = item.points ? \"\" : \"list-item\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center mb-6\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col border-solid border-2 border-gray-200 rounded-xl items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: item.picture\n                }, void 0, false, {\n                    fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"restaurant-description flex \".concat(item.points ? \"flex-col-reverse\" : \"\", \" justify-between w-72\")),\n                    children: [\n                        item.points ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-end h-36\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Disclosure__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 65\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 26\n                        }, _this) : \"\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"dish-description w-screen mt-2 justify-start items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-base\",\n                                    children: item.restaurantName\n                                }, void 0, false, {\n                                    fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"user-points text-base text-emerald-400\",\n                                    children: item.points\n                                }, void 0, false, {\n                                    fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"model-plate \".concat(list, \" ml-4 text-zinc-500 text-xs\"),\n                                    children: item.plateModel\n                                }, void 0, false, {\n                                    fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"ml-0 text-zinc-500 text-xs\",\n                                    children: item.localization\n                                }, void 0, false, {\n                                    fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-light\",\n                                    children: item.validate\n                                }, void 0, false, {\n                                    fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"dish-description mt-6 justify-center items-center\",\n                            children: item.points ? \"\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: item.favIcon\n                            }, void 0, false, {\n                                fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 33\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/joaopaulo/Desktop/Chefao/Bootcamp-Gama/components/MaterialUI/MenuList.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (restaurantDescription);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hdGVyaWFsVUkvTWVudUxpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQW1DO0FBQ0o7QUFDUTtBQWFoQyxJQUFNRyxxQkFBcUIsR0FBRyxTQUFDQyxJQUFXLEVBQUs7SUFDcEQsSUFBTUMsSUFBSSxHQUFHRCxJQUFJLENBQUNFLE1BQU0sR0FBRyxFQUFFLEdBQUcsV0FBVztJQUUzQyxxQkFDRSw4REFBQ0MsS0FBRztRQUFDUCxTQUFTLEVBQUMsdUNBQXVDO2tCQUNwRCw0RUFBQ08sS0FBRztZQUFDUCxTQUFTLEVBQUMsNkVBQTZFOzs4QkFDMUYsOERBQUNDLG1EQUFLO29CQUFDTyxHQUFHLEVBQUVKLElBQUksQ0FBQ0ssT0FBTzs7Ozs7eUJBQUk7OEJBRTVCLDhEQUFDRixLQUFHO29CQUFDUCxTQUFTLEVBQUVBLGlEQUFTLENBQUMsOEJBQTZCLENBQXdDLE1BQXFCLENBQTNESSxJQUFJLENBQUNFLE1BQU0sR0FBRyxrQkFBa0IsR0FBRyxFQUFFLEVBQUMsdUJBQXFCLENBQUMsQ0FBQzs7d0JBRW5IRixJQUFJLENBQUNFLE1BQU0saUJBQUcsOERBQUNDLEtBQUc7NEJBQUNQLFNBQVMsRUFBQyx1QkFBdUI7c0NBQUMsNEVBQUNFLG1EQUFXOzs7O3FDQUFFOzs7OztpQ0FBTSxHQUFHLEVBQUU7c0NBRy9FLDhEQUFDSyxLQUFHOzRCQUFDUCxTQUFTLEVBQUMsMkRBQTJEOzs4Q0FFeEUsOERBQUNVLEdBQUM7b0NBQUNWLFNBQVMsRUFBQyxXQUFXOzhDQUFFSSxJQUFJLENBQUNPLGNBQWM7Ozs7O3lDQUFLOzhDQUVsRCw4REFBQ0QsR0FBQztvQ0FBQ1YsU0FBUyxFQUFDLHdDQUF3Qzs4Q0FDbERJLElBQUksQ0FBQ0UsTUFBTTs7Ozs7eUNBQ1Y7OENBRUosOERBQUNJLEdBQUM7b0NBQUNWLFNBQVMsRUFBRSxjQUFhLENBQU8sTUFBMkIsQ0FBaENLLElBQUksRUFBQyw2QkFBMkIsQ0FBQzs4Q0FDM0RELElBQUksQ0FBQ1EsVUFBVTs7Ozs7eUNBQ2Q7OENBRUosOERBQUNGLEdBQUM7b0NBQUNWLFNBQVMsRUFBQyw0QkFBNEI7OENBQUVJLElBQUksQ0FBQ1MsWUFBWTs7Ozs7eUNBQUs7OENBRWpFLDhEQUFDSCxHQUFDO29DQUFDVixTQUFTLEVBQUMsWUFBWTs4Q0FBRUksSUFBSSxDQUFDVSxRQUFROzs7Ozt5Q0FBSzs7Ozs7O2lDQUN6QztzQ0FFTiw4REFBQ1AsS0FBRzs0QkFBQ1AsU0FBUyxFQUFFLG1EQUFtRDtzQ0FDaEVJLElBQUksQ0FBQ0UsTUFBTSxHQUFHLEVBQUUsaUJBQUcsOERBQUNMLG1EQUFLO2dDQUFDTyxHQUFHLEVBQUVKLElBQUksQ0FBQ1csT0FBTzs7Ozs7cUNBQUk7Ozs7O2lDQUM1Qzs7Ozs7O3lCQUNGOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ0YsQ0FDTjtDQUNILENBQUM7QUFFRiwrREFBZVoscUJBQXFCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXRlcmlhbFVJL01lbnVMaXN0LnRzeD83NWNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWUgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IERpc2Nsb3VzdXJlIGZyb20gXCIuL0Rpc2Nsb3N1cmVcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgaXRlbT86IHN0cmluZztcbiAgcG9pbnRzPzogc3RyaW5nO1xuICBwaWN0dXJlPzogc3RyaW5nIHwgb2JqZWN0IHwgYW55O1xuICByZXN0YXVyYW50TmFtZT86IHN0cmluZztcbiAgcGxhdGVNb2RlbD86IHN0cmluZztcbiAgbG9jYWxpemF0aW9uPzogc3RyaW5nO1xuICB2YWxpZGF0ZT86IHN0cmluZztcbiAgZmF2SWNvbj86IHN0cmluZyB8IG9iamVjdCB8IGFueTtcbn07XG5cbmV4cG9ydCBjb25zdCByZXN0YXVyYW50RGVzY3JpcHRpb24gPSAoaXRlbTogUHJvcHMpID0+IHtcbiAgY29uc3QgbGlzdCA9IGl0ZW0ucG9pbnRzID8gXCJcIiA6IFwibGlzdC1pdGVtXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG1iLTZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBib3JkZXItc29saWQgYm9yZGVyLTIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQteGwgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0ucGljdHVyZX0gLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lKGByZXN0YXVyYW50LWRlc2NyaXB0aW9uIGZsZXggJHtpdGVtLnBvaW50cyA/IFwiZmxleC1jb2wtcmV2ZXJzZVwiIDogXCJcIn0ganVzdGlmeS1iZXR3ZWVuIHctNzJgKX0+XG4gICAgICAgICAgXG4gICAgICAgICAge2l0ZW0ucG9pbnRzID8gPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIGgtMzZcIj48RGlzY2xvdXN1cmUvPjwvZGl2PiA6IFwiXCJ9XG4gICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc2gtZGVzY3JpcHRpb24gdy1zY3JlZW4gbXQtMiBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2VcIj57aXRlbS5yZXN0YXVyYW50TmFtZX08L3A+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInVzZXItcG9pbnRzIHRleHQtYmFzZSB0ZXh0LWVtZXJhbGQtNDAwXCI+XG4gICAgICAgICAgICAgIHtpdGVtLnBvaW50c31cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgbW9kZWwtcGxhdGUgJHtsaXN0fSBtbC00IHRleHQtemluYy01MDAgdGV4dC14c2B9PlxuICAgICAgICAgICAgICB7aXRlbS5wbGF0ZU1vZGVsfVxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0wIHRleHQtemluYy01MDAgdGV4dC14c1wiPntpdGVtLmxvY2FsaXphdGlvbn08L3A+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbGlnaHRcIj57aXRlbS52YWxpZGF0ZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkaXNoLWRlc2NyaXB0aW9uIG10LTYganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJ9PlxuICAgICAgICAgICAge2l0ZW0ucG9pbnRzID8gXCJcIiA6IDxJbWFnZSBzcmM9e2l0ZW0uZmF2SWNvbn0gLz59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXN0YXVyYW50RGVzY3JpcHRpb247XG4iXSwibmFtZXMiOlsiY2xhc3NOYW1lIiwiSW1hZ2UiLCJEaXNjbG91c3VyZSIsInJlc3RhdXJhbnREZXNjcmlwdGlvbiIsIml0ZW0iLCJsaXN0IiwicG9pbnRzIiwiZGl2Iiwic3JjIiwicGljdHVyZSIsInAiLCJyZXN0YXVyYW50TmFtZSIsInBsYXRlTW9kZWwiLCJsb2NhbGl6YXRpb24iLCJ2YWxpZGF0ZSIsImZhdkljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MaterialUI/MenuList.tsx\n");

/***/ })

});