"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./components/Input.tsx":
/*!******************************!*\
  !*** ./components/Input.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Input\": function() { return /* binding */ Input; },\n/* harmony export */   \"Selection\": function() { return /* binding */ Selection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Selection = function(param) {\n    var onValueChange = param.onValueChange, name = param.name, placeholder = param.placeholder, _value = param.value, value = _value === void 0 ? \"\" : _value, type = param.type;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n            onChange: function(e) {\n                return onValueChange(e.target.value);\n            },\n            name: name,\n            placeholder: placeholder,\n            value: value,\n            type: type\n        }, void 0, false, {\n            fileName: \"/home/joaopaulo/Desktop/Desafio Gama/Bootcamp-Gama/components/Input.tsx\",\n            lineNumber: 51,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/joaopaulo/Desktop/Desafio Gama/Bootcamp-Gama/components/Input.tsx\",\n        lineNumber: 50,\n        columnNumber: 7\n    }, _this);\n};\n_c = Selection;\nvar Input = function(param) {\n    var onValueChange = param.onValueChange, name = param.name, placeholder = param.placeholder, _value = param.value, value = _value === void 0 ? \"\" : _value, type = param.type, size = param.size, bgColor = param.bgColor, textColor = param.textColor, borderColor = param.borderColor, margin = param.margin, marginTop = param.marginTop, marginRight = param.marginRight, marginBottom = param.marginBottom, marginLeft = param.marginLeft;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        onChange: function(e) {\n            return onValueChange(e.target.value);\n        },\n        name: name,\n        placeholder: placeholder,\n        value: value,\n        type: type,\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"\".concat(borderColor, \"\\n         \").concat(bgColor, \"\\n         \").concat(textColor, \"\\n         \").concat(size, \"\\n         \").concat(margin, \"\\n         \").concat(marginTop, \"\\n         \").concat(marginRight, \"\\n         \").concat(marginBottom, \"\\n         \").concat(marginLeft, \"\\n         \").concat( true ? console.log(type) : 0, \"\\n         font-bold py-2 px-4 rounded \\n         shadow appearance-none border-2 \\n         text-gray-700\\n         mb-3\\n         leading-tight\\n         focus:outline-nonefirst-letter:focus:shadow-outline\"))\n    }, void 0, false, {\n        fileName: \"/home/joaopaulo/Desktop/Desafio Gama/Bootcamp-Gama/components/Input.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = Input;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\nvar _c, _c1;\n$RefreshReg$(_c, \"Selection\");\n$RefreshReg$(_c1, \"Input\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0lucHV0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBb0M7QUEwQzdCLElBQU1DLFNBQVMsR0FBRyxnQkFJRjtRQUpJQyxhQUFhLFNBQWJBLGFBQWEsRUFDdENDLElBQUksU0FBSkEsSUFBSSxFQUNKQyxXQUFXLFNBQVhBLFdBQVcsaUJBQ1hDLEtBQUssRUFBTEEsS0FBSyx1QkFBRyxFQUFFLFdBQ1ZDLElBQUksU0FBSkEsSUFBSTtJQUVGLHFCQUNFLDhEQUFDQyxLQUFHO2tCQUNGLDRFQUFDQyxRQUFNO1lBQ1BDLFFBQVEsRUFBRSxTQUFDQyxDQUFDO3VCQUFJUixhQUFhLENBQUNRLENBQUMsQ0FBQ0MsTUFBTSxDQUFDTixLQUFLLENBQUM7YUFBQTtZQUM3Q0YsSUFBSSxFQUFFQSxJQUFJO1lBQ1ZDLFdBQVcsRUFBRUEsV0FBVztZQUN4QkMsS0FBSyxFQUFFQSxLQUFLO1lBQ1pDLElBQUksRUFBRUEsSUFBSTs7Ozs7aUJBQUc7Ozs7O2FBRVQsQ0FDUDtDQUNKO0FBakJZTCxLQUFBQSxTQUFTO0FBbUJmLElBQU1XLEtBQUssR0FBRyxnQkFlSDtRQWRoQlYsYUFBYSxTQUFiQSxhQUFhLEVBQ2JDLElBQUksU0FBSkEsSUFBSSxFQUNKQyxXQUFXLFNBQVhBLFdBQVcsaUJBQ1hDLEtBQUssRUFBTEEsS0FBSyx1QkFBRyxFQUFFLFdBQ1ZDLElBQUksU0FBSkEsSUFBSSxFQUNKTyxJQUFJLFNBQUpBLElBQUksRUFDSkMsT0FBTyxTQUFQQSxPQUFPLEVBQ1BDLFNBQVMsU0FBVEEsU0FBUyxFQUNUQyxXQUFXLFNBQVhBLFdBQVcsRUFDWEMsTUFBTSxTQUFOQSxNQUFNLEVBQ05DLFNBQVMsU0FBVEEsU0FBUyxFQUNUQyxXQUFXLFNBQVhBLFdBQVcsRUFDWEMsWUFBWSxTQUFaQSxZQUFZLEVBQ1pDLFVBQVUsU0FBVkEsVUFBVTtJQUdWLHFCQUNFLDhEQUFDQyxPQUFLO1FBQ05iLFFBQVEsRUFBRSxTQUFDQyxDQUFDO21CQUFJUixhQUFhLENBQUNRLENBQUMsQ0FBQ0MsTUFBTSxDQUFDTixLQUFLLENBQUM7U0FBQTtRQUMzQ0YsSUFBSSxFQUFFQSxJQUFJO1FBQ1ZDLFdBQVcsRUFBRUEsV0FBVztRQUN4QkMsS0FBSyxFQUFFQSxLQUFLO1FBQ1pDLElBQUksRUFBRUEsSUFBSTtRQUNWaUIsU0FBUyxFQUFFdkIsaURBQVUsQ0FDbkIsRUFBQyxDQUNFYyxNQUFPLENBRFBFLFdBQVcsRUFBQyxhQUNkLENBQVUsQ0FDUkQsTUFBUyxDQURURCxPQUFPLEVBQUMsYUFDVixDQUFZLENBQ1ZELE1BQUksQ0FESkUsU0FBUyxFQUFDLGFBQ1osQ0FBTyxDQUNMRSxNQUFNLENBRE5KLElBQUksRUFBQyxhQUNQLENBQVMsQ0FDUEssTUFBUyxDQURURCxNQUFNLEVBQUMsYUFDVCxDQUFZLENBQ1ZFLE1BQVcsQ0FEWEQsU0FBUyxFQUFDLGFBQ1osQ0FBYyxDQUNaRSxNQUFZLENBRFpELFdBQVcsRUFBQyxhQUNkLENBQWUsQ0FDYkUsTUFBVSxDQURWRCxZQUFZLEVBQUMsYUFDZixDQUFhLENBQ1gsTUFBbUMsQ0FEbkNDLFVBQVUsRUFBQyxhQUNiLENBQXNDLE9BTWEsQ0FOakQsS0FBUyxHQUFLRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ25CLElBQUksQ0FBQyxHQUFFLENBQUUsRUFBQyxpTkFNYSxDQUFDLENBQ3REOzs7OzthQUNELENBQ0Y7Q0FDSDtBQTVDWU0sTUFBQUEsS0FBSztBQThDbEIsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0lucHV0LnRzeD83ZjFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbnR5cGUgaW5wdXRQcm9wcyA9IHtcbiAgb25WYWx1ZUNoYW5nZTogKGxvZ2luPywgcGFzcz8sIGVtYWlsPykgPT4gdm9pZDtcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB2YWx1ZT86IHN0cmluZztcbiAgdHlwZTogXCJ0ZXh0XCIgfCBcInBhc3N3b3JkXCIgfCBcImVtYWlsXCIgfCBcInNlbGVjdFwiIHwgdW5kZWZpbmVkO1xuICBzaXplOiBzdHJpbmc7XG4gIGJnQ29sb3I6IHN0cmluZztcbiAgdGV4dENvbG9yOiBzdHJpbmc7XG4gIGJvcmRlckNvbG9yOiBzdHJpbmc7XG4gIG1hcmdpbj86IHN0cmluZztcbiAgbWFyZ2luVG9wPzogc3RyaW5nO1xuICBtYXJnaW5SaWdodD86IHN0cmluZztcbiAgbWFyZ2luQm90dG9tPzogc3RyaW5nO1xuICBtYXJnaW5MZWZ0Pzogc3RyaW5nO1xuICBsb2dpbj86IHN0cmluZztcbiAgZW1haWw/OiBzdHJpbmc7XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xufTtcblxudHlwZSBzZWxlY3RQcm9wcyA9IHtcbiAgb25WYWx1ZUNoYW5nZTogKGxvZ2luPywgcGFzcz8sIGVtYWlsPykgPT4gdm9pZDtcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB2YWx1ZT86IHN0cmluZztcbiAgdHlwZTogXCJ0ZXh0XCIgfCBcInBhc3N3b3JkXCIgfCBcImVtYWlsXCIgfCBcInNlbGVjdFwiIHwgdW5kZWZpbmVkO1xuICBzaXplOiBzdHJpbmc7XG4gIGJnQ29sb3I6IHN0cmluZztcbiAgdGV4dENvbG9yOiBzdHJpbmc7XG4gIGJvcmRlckNvbG9yOiBzdHJpbmc7XG4gIG1hcmdpbj86IHN0cmluZztcbiAgbWFyZ2luVG9wPzogc3RyaW5nO1xuICBtYXJnaW5SaWdodD86IHN0cmluZztcbiAgbWFyZ2luQm90dG9tPzogc3RyaW5nO1xuICBtYXJnaW5MZWZ0Pzogc3RyaW5nO1xuICBsb2dpbj86IHN0cmluZztcbiAgZW1haWw/OiBzdHJpbmc7XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IFNlbGVjdGlvbiA9ICh7b25WYWx1ZUNoYW5nZSxcbiAgbmFtZSxcbiAgcGxhY2Vob2xkZXIsXG4gIHZhbHVlID0gXCJcIixcbiAgdHlwZX06c2VsZWN0UHJvcHMpID0+e1xuICBcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8c2VsZWN0IFxuICAgICAgICBvbkNoYW5nZT17KGUpID0+b25WYWx1ZUNoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICB0eXBlPXt0eXBlfS8+XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgY29uc3QgSW5wdXQgPSAoe1xuICBvblZhbHVlQ2hhbmdlLFxuICBuYW1lLFxuICBwbGFjZWhvbGRlcixcbiAgdmFsdWUgPSBcIlwiLFxuICB0eXBlLFxuICBzaXplLFxuICBiZ0NvbG9yLFxuICB0ZXh0Q29sb3IsXG4gIGJvcmRlckNvbG9yLFxuICBtYXJnaW4sXG4gIG1hcmdpblRvcCxcbiAgbWFyZ2luUmlnaHQsXG4gIG1hcmdpbkJvdHRvbSxcbiAgbWFyZ2luTGVmdCxcbn06IGlucHV0UHJvcHMpID0+IHtcbiAgXG4gIHJldHVybiAoXG4gICAgPGlucHV0IFxuICAgIG9uQ2hhbmdlPXsoZSkgPT5vblZhbHVlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIG5hbWU9e25hbWV9XG4gICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICB0eXBlPXt0eXBlfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICBgJHtib3JkZXJDb2xvcn1cbiAgICAgICAgICR7YmdDb2xvcn1cbiAgICAgICAgICR7dGV4dENvbG9yfVxuICAgICAgICAgJHtzaXplfVxuICAgICAgICAgJHttYXJnaW59XG4gICAgICAgICAke21hcmdpblRvcH1cbiAgICAgICAgICR7bWFyZ2luUmlnaHR9XG4gICAgICAgICAke21hcmdpbkJvdHRvbX1cbiAgICAgICAgICR7bWFyZ2luTGVmdH1cbiAgICAgICAgICR7KFwic2VsZWN0XCIpID8gKGNvbnNvbGUubG9nKHR5cGUpKTpcIlwifVxuICAgICAgICAgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIFxuICAgICAgICAgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXItMiBcbiAgICAgICAgIHRleHQtZ3JheS03MDBcbiAgICAgICAgIG1iLTNcbiAgICAgICAgIGxlYWRpbmctdGlnaHRcbiAgICAgICAgIGZvY3VzOm91dGxpbmUtbm9uZWZpcnN0LWxldHRlcjpmb2N1czpzaGFkb3ctb3V0bGluZWBcbiAgICAgICl9XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iXSwibmFtZXMiOlsiY2xhc3NOYW1lcyIsIlNlbGVjdGlvbiIsIm9uVmFsdWVDaGFuZ2UiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsInR5cGUiLCJkaXYiLCJzZWxlY3QiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJJbnB1dCIsInNpemUiLCJiZ0NvbG9yIiwidGV4dENvbG9yIiwiYm9yZGVyQ29sb3IiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJpbnB1dCIsImNsYXNzTmFtZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Input.tsx\n");

/***/ })

});