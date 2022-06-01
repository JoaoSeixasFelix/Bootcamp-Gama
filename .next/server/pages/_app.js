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

/***/ "./contexts/AuthContext.tsx":
/*!**********************************!*\
  !*** ./contexts/AuthContext.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_pages_api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/pages/api/api */ \"./src/pages/api/api.ts\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst AuthProvider = ({ children  })=>{\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const isAuthenticated = !!user;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { \"fidplus.token\": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_4__.parseCookies)();\n        if (token) {\n        //Recover info passing token to backend\n        }\n    }, []);\n    const signIn = async ({ email , password  })=>{\n        const { token , client  } = await _src_pages_api_api__WEBPACK_IMPORTED_MODULE_3__.api.get(\"/login/client\", {\n            email,\n            password\n        });\n        (0,nookies__WEBPACK_IMPORTED_MODULE_4__.setCookie)(undefined, \"fidplus.token\", token, {\n            maxAge: 60 * 60 * 24 // 1 dia\n        });\n        setUser(client);\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/userhomepage\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            signIn,\n            isAuthenticated\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/joaopaulo/Desktop/Chefao Final - Deply/Bootcamp-Gama/contexts/AuthContext.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9BdXRoQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEyRDtBQUMzQjtBQUVVO0FBQ1E7QUEwQjNDLE1BQU1PLFdBQVcsaUJBQUdQLG9EQUFhLENBQUMsRUFBRSxDQUFvQjtBQUV4RCxNQUFNUSxZQUFZLEdBQUcsQ0FBQyxFQUFDQyxRQUFRLEdBQUMsR0FBSztJQUMxQyxNQUFNLEVBakNSLEdBaUNVQyxJQUFJLEdBakNkLEdBaUNnQkMsT0FBTyxNQUFJVCwrQ0FBUSxDQUFjLElBQUksQ0FBQztJQUVwRCxNQUFNVSxlQUFlLEdBQUcsQ0FBQyxDQUFDRixJQUFJO0lBRTlCVCxnREFBUyxDQUFDLElBQU07UUFDZCxNQUFNLEVBQUUsZUFBZSxFQUFFWSxLQUFLLEdBQUUsR0FBR1IscURBQVksRUFBRTtRQUNqRCxJQUFHUSxLQUFLLEVBQUM7UUFDUCx1Q0FBdUM7U0FDeEM7S0FDRixFQUFDLEVBQUUsQ0FBQztJQUVMLE1BQU1DLE1BQU0sR0FBRyxPQUFPLEVBQUNDLEtBQUssR0FBRUMsUUFBUSxHQUFhLEdBQUs7UUFDcEQsTUFBTSxFQUFDSCxLQUFLLEdBQUVJLE1BQU0sR0FBQyxHQUFHLE1BQU1iLHVEQUFPLENBQUMsZUFBZSxFQUFFO1lBQ3JEVyxLQUFLO1lBQ0xDLFFBQVE7U0FDVCxDQUFDO1FBQ0ZWLGtEQUFTLENBQUNhLFNBQVMsRUFBRSxlQUFlLEVBQUNOLEtBQUssRUFBRTtZQUMxQ08sTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVE7U0FDOUIsQ0FBQztRQUVGVCxPQUFPLENBQUNNLE1BQU0sQ0FBQztRQUVmZCx1REFBVyxDQUFDLGVBQWUsQ0FBQztLQUUvQjtJQUVELHFCQUNFLDhEQUFDSSxXQUFXLENBQUNlLFFBQVE7UUFBQ0MsS0FBSyxFQUFFO1lBQUNiLElBQUk7WUFBRUksTUFBTTtZQUFFRixlQUFlO1NBQUM7a0JBQ3pESCxRQUFROzs7OztpQkFDWSxDQUN4QjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FtYS1hY2FkZW15Ly4vY29udGV4dHMvQXV0aENvbnRleHQudHN4PzZkODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vc3JjL3BhZ2VzL2FwaS9hcGknXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMsIHNldENvb2tpZSB9IGZyb20gXCJub29raWVzXCI7XG5cbnR5cGUgVXNlciA9IHtcbiAgICBpZDogbnVtYmVyLFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHRlbWFpbDogc3RyaW5nLFxuXHRcdHBhc3N3b3JkOiBzdHJpbmcsXG5cdFx0dHlwZTogbnVtYmVyLFxuXHRcdGltZ191cmw6IHN0cmluZyxcblx0XHRjcmVhdGVkQXQ6IHN0cmluZyxcblx0XHR1cGRhdGVkQXQ6IHN0cmluZ1xufVxuXG50eXBlIFNpZ25JbkRhdGEgPSB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOnN0cmluZ1xuICBpZD86IDAgfCAxXG59XG5cbnR5cGUgQXV0aENvbnRleHRUeXBlID0ge1xuICB1c2VyOiBVc2VyIHwgbnVsbCxcbiAgc2lnbkluOiAoZGF0YTogU2lnbkluRGF0YSkgPT4gUHJvbWlzZTx2b2lkPixcbiAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuXG59XG5cblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBBdXRoQ29udGV4dFR5cGUpXG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xuICBjb25zdCBbIHVzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9ICEhdXNlcjtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgJ2ZpZHBsdXMudG9rZW4nOiB0b2tlbiB9ID0gcGFyc2VDb29raWVzKCk7XG4gICAgaWYodG9rZW4pe1xuICAgICAgLy9SZWNvdmVyIGluZm8gcGFzc2luZyB0b2tlbiB0byBiYWNrZW5kXG4gICAgfVxuICB9LFtdKVxuXG4gIGNvbnN0IHNpZ25JbiA9IGFzeW5jICh7ZW1haWwgLHBhc3N3b3JkfTogU2lnbkluRGF0YSkgPT4ge1xuICAgICAgY29uc3Qge3Rva2VuLCBjbGllbnR9ID0gYXdhaXQgYXBpLmdldChcIi9sb2dpbi9jbGllbnRcIiwge1xuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KVxuICAgICAgc2V0Q29va2llKHVuZGVmaW5lZCwgJ2ZpZHBsdXMudG9rZW4nLHRva2VuLCB7XG4gICAgICAgIG1heEFnZTogNjAgKiA2MCAqIDI0IC8vIDEgZGlhXG4gICAgICB9KVxuXG4gICAgICBzZXRVc2VyKGNsaWVudClcblxuICAgICAgUm91dGVyLnB1c2goJy91c2VyaG9tZXBhZ2UnKVxuICBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7dXNlciwgc2lnbkluLCBpc0F1dGhlbnRpY2F0ZWR9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApXG59Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJvdXRlciIsImFwaSIsInBhcnNlQ29va2llcyIsInNldENvb2tpZSIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImlzQXV0aGVudGljYXRlZCIsInRva2VuIiwic2lnbkluIiwiZW1haWwiLCJwYXNzd29yZCIsImNsaWVudCIsImdldCIsInVuZGVmaW5lZCIsIm1heEFnZSIsInB1c2giLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/AuthContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/AuthContext */ \"./contexts/AuthContext.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Fig+\"\n                }, void 0, false, {\n                    fileName: \"/home/joaopaulo/Desktop/Chefao Final - Deply/Bootcamp-Gama/src/pages/_app.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/joaopaulo/Desktop/Chefao Final - Deply/Bootcamp-Gama/src/pages/_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__.AuthProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/joaopaulo/Desktop/Chefao Final - Deply/Bootcamp-Gama/src/pages/_app.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/joaopaulo/Desktop/Chefao Final - Deply/Bootcamp-Gama/src/pages/_app.tsx\",\n                lineNumber: 13,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQytCO0FBQ0c7QUFDd0I7QUFDN0I7QUFFN0IsU0FBU0UsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDakQscUJBQ0U7OzBCQUNBLDhEQUFDSCxrREFBSTswQkFDTCw0RUFBQ0ksT0FBSzs4QkFBQyxNQUFJOzs7Ozt3QkFBUTs7Ozs7b0JBQ1o7MEJBQ1AsOERBQUNMLCtEQUFZOzBCQUNYLDRFQUFDRyxTQUFTO29CQUFFLEdBQUdDLFNBQVM7Ozs7O3dCQUFJOzs7OztvQkFDZjs7b0JBQ1osQ0FDSDtDQUNIO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dhbWEtYWNhZGVteS8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFwidGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvQXV0aENvbnRleHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPEhlYWQ+XG4gICAgPHRpdGxlPkZpZys8L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJBdXRoUHJvdmlkZXIiLCJIZWFkIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/pages/api/api.ts":
/*!******************************!*\
  !*** ./src/pages/api/api.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst { \"nextauth.token\": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)();\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"http://localhost:3333\"\n});\nif (token) {\n    api.defaults.headers[\"Authorization\"] = `Bearer ${token}`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2FwaS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUNhO0FBRXRDLE1BQU0sRUFBQyxnQkFBZ0IsRUFBRUUsS0FBSyxHQUFDLEdBQUdELHFEQUFZLEVBQUU7QUFFekMsTUFBTUUsR0FBRyxHQUFHSCxtREFBWSxDQUFDO0lBQzlCSyxPQUFPLEVBQUUsdUJBQXVCO0NBQ2pDLENBQUM7QUFFRixJQUFHSCxLQUFLLEVBQUU7SUFDUkMsR0FBRyxDQUFDRyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRUwsS0FBSyxDQUFDLENBQUM7Q0FDMUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1hLWFjYWRlbXkvLi9zcmMvcGFnZXMvYXBpL2FwaS50cz84ZmY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gJ25vb2tpZXMnXG5cbmNvbnN0IHsnbmV4dGF1dGgudG9rZW4nOiB0b2tlbn0gPSBwYXJzZUNvb2tpZXMoKVxuXG5leHBvcnQgY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMydcbn0pXG5cbmlmKHRva2VuKSB7XG4gIGFwaS5kZWZhdWx0cy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YFxufSJdLCJuYW1lcyI6WyJheGlvcyIsInBhcnNlQ29va2llcyIsInRva2VuIiwiYXBpIiwiY3JlYXRlIiwiYmFzZVVSTCIsImRlZmF1bHRzIiwiaGVhZGVycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/api/api.ts\n");

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