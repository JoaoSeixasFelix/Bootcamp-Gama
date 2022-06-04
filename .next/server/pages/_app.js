/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/AuthContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/AuthContext.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst AuthProvider = ({ children  })=>{\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const isAuthenticated = !!user;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { \"fidplus.token\": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_4__.parseCookies)();\n        if (token) {\n        //Recover info passing token to backend\n        }\n    }, []);\n    const signIn = async ({ email , password  })=>{\n        const { token , client  } = await _services_api__WEBPACK_IMPORTED_MODULE_3__.api.get(\"/login/client\", {\n            email,\n            password\n        });\n        (0,nookies__WEBPACK_IMPORTED_MODULE_4__.setCookie)(undefined, \"fidplus.token\", token, {\n            maxAge: 60 * 60 * 24 // 1 dia\n        });\n        setUser(client);\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/userhomepage\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            signIn,\n            isAuthenticated\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/joaopaulo/Desktop/Chefao/Chefao V20/Bootcamp-Gama/src/contexts/AuthContext.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMkQ7QUFDM0I7QUFFSztBQUNhO0FBMEIzQyxNQUFNTyxXQUFXLGlCQUFHUCxvREFBYSxDQUFDLEVBQUUsQ0FBb0I7QUFFeEQsTUFBTVEsWUFBWSxHQUFHLENBQUMsRUFBQ0MsUUFBUSxHQUFDLEdBQUs7SUFDMUMsTUFBTSxFQWpDUixHQWlDVUMsSUFBSSxHQWpDZCxHQWlDZ0JDLE9BQU8sTUFBSVQsK0NBQVEsQ0FBYyxJQUFJLENBQUM7SUFFcEQsTUFBTVUsZUFBZSxHQUFHLENBQUMsQ0FBQ0YsSUFBSTtJQUU5QlQsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsTUFBTSxFQUFFLGVBQWUsRUFBRVksS0FBSyxHQUFFLEdBQUdSLHFEQUFZLEVBQUU7UUFDakQsSUFBR1EsS0FBSyxFQUFDO1FBQ1AsdUNBQXVDO1NBQ3hDO0tBQ0YsRUFBQyxFQUFFLENBQUM7SUFFTCxNQUFNQyxNQUFNLEdBQUcsT0FBTyxFQUFDQyxLQUFLLEdBQUVDLFFBQVEsR0FBYSxHQUFLO1FBQ3BELE1BQU0sRUFBQ0gsS0FBSyxHQUFFSSxNQUFNLEdBQUMsR0FBRyxNQUFNYixrREFBTyxDQUFDLGVBQWUsRUFBRTtZQUNyRFcsS0FBSztZQUNMQyxRQUFRO1NBQ1QsQ0FBQztRQUNGVixrREFBUyxDQUFDYSxTQUFTLEVBQUUsZUFBZSxFQUFDTixLQUFLLEVBQUU7WUFDMUNPLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRO1NBQzlCLENBQUM7UUFFRlQsT0FBTyxDQUFDTSxNQUFNLENBQUM7UUFFZmQsdURBQVcsQ0FBQyxlQUFlLENBQUM7S0FFL0I7SUFFRCxxQkFDRSw4REFBQ0ksV0FBVyxDQUFDZSxRQUFRO1FBQUNDLEtBQUssRUFBRTtZQUFDYixJQUFJO1lBQUVJLE1BQU07WUFBRUYsZUFBZTtTQUFDO2tCQUN6REgsUUFBUTs7Ozs7aUJBQ1ksQ0FDeEI7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2dhbWEtYWNhZGVteS8uL3NyYy9jb250ZXh0cy9BdXRoQ29udGV4dC50c3g/MWZhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcGknXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMsIHNldENvb2tpZSB9IGZyb20gXCJub29raWVzXCI7XG5cbnR5cGUgVXNlciA9IHtcbiAgICBpZDogbnVtYmVyLFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHRlbWFpbDogc3RyaW5nLFxuXHRcdHBhc3N3b3JkOiBzdHJpbmcsXG5cdFx0dHlwZTogbnVtYmVyLFxuXHRcdGltZ191cmw6IHN0cmluZyxcblx0XHRjcmVhdGVkQXQ6IHN0cmluZyxcblx0XHR1cGRhdGVkQXQ6IHN0cmluZ1xufVxuXG50eXBlIFNpZ25JbkRhdGEgPSB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOnN0cmluZ1xuICBpZD86IDAgfCAxXG59XG5cbnR5cGUgQXV0aENvbnRleHRUeXBlID0ge1xuICB1c2VyOiBVc2VyIHwgbnVsbCxcbiAgc2lnbkluOiAoZGF0YTogU2lnbkluRGF0YSkgPT4gUHJvbWlzZTx2b2lkPixcbiAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuXG59XG5cblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBBdXRoQ29udGV4dFR5cGUpXG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xuICBjb25zdCBbIHVzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9ICEhdXNlcjtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgJ2ZpZHBsdXMudG9rZW4nOiB0b2tlbiB9ID0gcGFyc2VDb29raWVzKCk7XG4gICAgaWYodG9rZW4pe1xuICAgICAgLy9SZWNvdmVyIGluZm8gcGFzc2luZyB0b2tlbiB0byBiYWNrZW5kXG4gICAgfVxuICB9LFtdKVxuXG4gIGNvbnN0IHNpZ25JbiA9IGFzeW5jICh7ZW1haWwgLHBhc3N3b3JkfTogU2lnbkluRGF0YSkgPT4ge1xuICAgICAgY29uc3Qge3Rva2VuLCBjbGllbnR9ID0gYXdhaXQgYXBpLmdldChcIi9sb2dpbi9jbGllbnRcIiwge1xuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KVxuICAgICAgc2V0Q29va2llKHVuZGVmaW5lZCwgJ2ZpZHBsdXMudG9rZW4nLHRva2VuLCB7XG4gICAgICAgIG1heEFnZTogNjAgKiA2MCAqIDI0IC8vIDEgZGlhXG4gICAgICB9KVxuXG4gICAgICBzZXRVc2VyKGNsaWVudClcblxuICAgICAgUm91dGVyLnB1c2goJy91c2VyaG9tZXBhZ2UnKVxuICBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7dXNlciwgc2lnbkluLCBpc0F1dGhlbnRpY2F0ZWR9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApXG59Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJvdXRlciIsImFwaSIsInBhcnNlQ29va2llcyIsInNldENvb2tpZSIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImlzQXV0aGVudGljYXRlZCIsInRva2VuIiwic2lnbkluIiwiZW1haWwiLCJwYXNzd29yZCIsImNsaWVudCIsImdldCIsInVuZGVmaW5lZCIsIm1heEFnZSIsInB1c2giLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./src/contexts/AuthContext.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Fig+\"\n                }, void 0, false, {\n                    fileName: \"/home/joaopaulo/Desktop/Chefao/Chefao V20/Bootcamp-Gama/src/pages/_app.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/joaopaulo/Desktop/Chefao/Chefao V20/Bootcamp-Gama/src/pages/_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__.AuthProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/joaopaulo/Desktop/Chefao/Chefao V20/Bootcamp-Gama/src/pages/_app.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/joaopaulo/Desktop/Chefao/Chefao V20/Bootcamp-Gama/src/pages/_app.tsx\",\n                lineNumber: 13,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQytCO0FBQ0c7QUFDcUI7QUFDMUI7QUFFN0IsU0FBU0UsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDakQscUJBQ0U7OzBCQUNBLDhEQUFDSCxrREFBSTswQkFDTCw0RUFBQ0ksT0FBSzs4QkFBQyxNQUFJOzs7Ozt3QkFBUTs7Ozs7b0JBQ1o7MEJBQ1AsOERBQUNMLCtEQUFZOzBCQUNYLDRFQUFDRyxTQUFTO29CQUFFLEdBQUdDLFNBQVM7Ozs7O3dCQUFJOzs7OztvQkFDZjs7b0JBQ1osQ0FDSDtDQUNIO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dhbWEtYWNhZGVteS8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFwidGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dHMvQXV0aENvbnRleHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPEhlYWQ+XG4gICAgPHRpdGxlPkZpZys8L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJBdXRoUHJvdmlkZXIiLCJIZWFkIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst { \"nextauth.token\": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)();\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"http://localhost:3333\"\n});\nif (token) {\n    api.defaults.headers[\"Authorization\"] = `Bearer ${token}`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDQTtBQUNhO0FBRXZDLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRUcsS0FBSyxHQUFFLEdBQUdELHFEQUFZLEVBQUU7QUFFM0MsTUFBTUUsR0FBRyxHQUFHSixtREFBWSxDQUFDO0lBQzlCTSxPQUFPLEVBQUUsdUJBQXVCO0NBQ2pDLENBQUMsQ0FBQztBQUVILElBQUlILEtBQUssRUFBRTtJQUNUQyxHQUFHLENBQUNHLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFTCxLQUFLLENBQUMsQ0FBQyxDQUFDO0NBQzNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FtYS1hY2FkZW15Ly4vc3JjL3NlcnZpY2VzL2FwaS50cz85NTZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gXCJub29raWVzXCI7XG5cbmNvbnN0IHsgXCJuZXh0YXV0aC50b2tlblwiOiB0b2tlbiB9ID0gcGFyc2VDb29raWVzKCk7XG5cbmV4cG9ydCBjb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzMzM1wiLFxufSk7XG5cbmlmICh0b2tlbikge1xuICBhcGkuZGVmYXVsdHMuaGVhZGVyc1tcIkF1dGhvcml6YXRpb25cIl0gPSBgQmVhcmVyICR7dG9rZW59YDtcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsIlJlYWN0IiwicGFyc2VDb29raWVzIiwidG9rZW4iLCJhcGkiLCJjcmVhdGUiLCJiYXNlVVJMIiwiZGVmYXVsdHMiLCJoZWFkZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();