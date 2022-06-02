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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api */ \"./services/api.ts\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst AuthProvider = ({ children  })=>{\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const isAuthenticated = !!user;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { \"fidplus.token\": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_4__.parseCookies)();\n        if (token) {\n        //Recover info passing token to backend\n        }\n    }, []);\n    const signIn = async ({ email , password  })=>{\n        const { token , client  } = await _services_api__WEBPACK_IMPORTED_MODULE_3__.api.get(\"/login/client\", {\n            email,\n            password\n        });\n        (0,nookies__WEBPACK_IMPORTED_MODULE_4__.setCookie)(undefined, \"fidplus.token\", token, {\n            maxAge: 60 * 60 * 24 // 1 dia\n        });\n        setUser(client);\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/userhomepage\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            signIn,\n            isAuthenticated\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/joaopaulo/Desktop/Chefao/Chefao V12/Bootcamp-Gama/contexts/AuthContext.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9BdXRoQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEyRDtBQUMzQjtBQUVLO0FBQ2E7QUEwQjNDLE1BQU1PLFdBQVcsaUJBQUdQLG9EQUFhLENBQUMsRUFBRSxDQUFvQjtBQUV4RCxNQUFNUSxZQUFZLEdBQUcsQ0FBQyxFQUFDQyxRQUFRLEdBQUMsR0FBSztJQUMxQyxNQUFNLEVBakNSLEdBaUNVQyxJQUFJLEdBakNkLEdBaUNnQkMsT0FBTyxNQUFJVCwrQ0FBUSxDQUFjLElBQUksQ0FBQztJQUVwRCxNQUFNVSxlQUFlLEdBQUcsQ0FBQyxDQUFDRixJQUFJO0lBRTlCVCxnREFBUyxDQUFDLElBQU07UUFDZCxNQUFNLEVBQUUsZUFBZSxFQUFFWSxLQUFLLEdBQUUsR0FBR1IscURBQVksRUFBRTtRQUNqRCxJQUFHUSxLQUFLLEVBQUM7UUFDUCx1Q0FBdUM7U0FDeEM7S0FDRixFQUFDLEVBQUUsQ0FBQztJQUVMLE1BQU1DLE1BQU0sR0FBRyxPQUFPLEVBQUNDLEtBQUssR0FBRUMsUUFBUSxHQUFhLEdBQUs7UUFDcEQsTUFBTSxFQUFDSCxLQUFLLEdBQUVJLE1BQU0sR0FBQyxHQUFHLE1BQU1iLGtEQUFPLENBQUMsZUFBZSxFQUFFO1lBQ3JEVyxLQUFLO1lBQ0xDLFFBQVE7U0FDVCxDQUFDO1FBQ0ZWLGtEQUFTLENBQUNhLFNBQVMsRUFBRSxlQUFlLEVBQUNOLEtBQUssRUFBRTtZQUMxQ08sTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVE7U0FDOUIsQ0FBQztRQUVGVCxPQUFPLENBQUNNLE1BQU0sQ0FBQztRQUVmZCx1REFBVyxDQUFDLGVBQWUsQ0FBQztLQUUvQjtJQUVELHFCQUNFLDhEQUFDSSxXQUFXLENBQUNlLFFBQVE7UUFBQ0MsS0FBSyxFQUFFO1lBQUNiLElBQUk7WUFBRUksTUFBTTtZQUFFRixlQUFlO1NBQUM7a0JBQ3pESCxRQUFROzs7OztpQkFDWSxDQUN4QjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FtYS1hY2FkZW15Ly4vY29udGV4dHMvQXV0aENvbnRleHQudHN4PzZkODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpJ1xuaW1wb3J0IHsgcGFyc2VDb29raWVzLCBzZXRDb29raWUgfSBmcm9tIFwibm9va2llc1wiO1xuXG50eXBlIFVzZXIgPSB7XG4gICAgaWQ6IG51bWJlcixcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0ZW1haWw6IHN0cmluZyxcblx0XHRwYXNzd29yZDogc3RyaW5nLFxuXHRcdHR5cGU6IG51bWJlcixcblx0XHRpbWdfdXJsOiBzdHJpbmcsXG5cdFx0Y3JlYXRlZEF0OiBzdHJpbmcsXG5cdFx0dXBkYXRlZEF0OiBzdHJpbmdcbn1cblxudHlwZSBTaWduSW5EYXRhID0ge1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDpzdHJpbmdcbiAgaWQ/OiAwIHwgMVxufVxuXG50eXBlIEF1dGhDb250ZXh0VHlwZSA9IHtcbiAgdXNlcjogVXNlciB8IG51bGwsXG4gIHNpZ25JbjogKGRhdGE6IFNpZ25JbkRhdGEpID0+IFByb21pc2U8dm9pZD4sXG4gIGlzQXV0aGVudGljYXRlZDogYm9vbGVhblxufVxuXG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQXV0aENvbnRleHRUeXBlKVxuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgY29uc3QgWyB1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXIgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSAhIXVzZXI7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7ICdmaWRwbHVzLnRva2VuJzogdG9rZW4gfSA9IHBhcnNlQ29va2llcygpO1xuICAgIGlmKHRva2VuKXtcbiAgICAgIC8vUmVjb3ZlciBpbmZvIHBhc3NpbmcgdG9rZW4gdG8gYmFja2VuZFxuICAgIH1cbiAgfSxbXSlcblxuICBjb25zdCBzaWduSW4gPSBhc3luYyAoe2VtYWlsICxwYXNzd29yZH06IFNpZ25JbkRhdGEpID0+IHtcbiAgICAgIGNvbnN0IHt0b2tlbiwgY2xpZW50fSA9IGF3YWl0IGFwaS5nZXQoXCIvbG9naW4vY2xpZW50XCIsIHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgfSlcbiAgICAgIHNldENvb2tpZSh1bmRlZmluZWQsICdmaWRwbHVzLnRva2VuJyx0b2tlbiwge1xuICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAvLyAxIGRpYVxuICAgICAgfSlcblxuICAgICAgc2V0VXNlcihjbGllbnQpXG5cbiAgICAgIFJvdXRlci5wdXNoKCcvdXNlcmhvbWVwYWdlJylcbiAgXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3VzZXIsIHNpZ25JbiwgaXNBdXRoZW50aWNhdGVkfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSb3V0ZXIiLCJhcGkiLCJwYXJzZUNvb2tpZXMiLCJzZXRDb29raWUiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ0b2tlbiIsInNpZ25JbiIsImVtYWlsIiwicGFzc3dvcmQiLCJjbGllbnQiLCJnZXQiLCJ1bmRlZmluZWQiLCJtYXhBZ2UiLCJwdXNoIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/AuthContext.tsx\n");

/***/ }),

/***/ "./services/api.ts":
/*!*************************!*\
  !*** ./services/api.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst { \"nextauth.token\": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)();\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"\"\n});\nif (token) {\n    api.defaults.headers[\"Authorization\"] = `Bearer ${token}`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUNBO0FBQ2E7QUFFdkMsTUFBTSxFQUFFLGdCQUFnQixFQUFFRyxLQUFLLEdBQUUsR0FBR0QscURBQVksRUFBRTtBQUUzQyxNQUFNRSxHQUFHLEdBQUdKLG1EQUFZLENBQUM7SUFDOUJNLE9BQU8sRUFBRSxFQUFFO0NBQ1osQ0FBQyxDQUFDO0FBRUgsSUFBSUgsS0FBSyxFQUFFO0lBQ1RDLEdBQUcsQ0FBQ0csUUFBUSxDQUFDQyxPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUVMLEtBQUssQ0FBQyxDQUFDLENBQUM7Q0FDM0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1hLWFjYWRlbXkvLi9zZXJ2aWNlcy9hcGkudHM/NGJlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xuXG5jb25zdCB7IFwibmV4dGF1dGgudG9rZW5cIjogdG9rZW4gfSA9IHBhcnNlQ29va2llcygpO1xuXG5leHBvcnQgY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogXCJcIixcbn0pO1xuXG5pZiAodG9rZW4pIHtcbiAgYXBpLmRlZmF1bHRzLmhlYWRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gYEJlYXJlciAke3Rva2VufWA7XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJSZWFjdCIsInBhcnNlQ29va2llcyIsInRva2VuIiwiYXBpIiwiY3JlYXRlIiwiYmFzZVVSTCIsImRlZmF1bHRzIiwiaGVhZGVycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/api.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/AuthContext */ \"./contexts/AuthContext.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Fig+\"\n                }, void 0, false, {\n                    fileName: \"/home/joaopaulo/Desktop/Chefao/Chefao V12/Bootcamp-Gama/src/pages/_app.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/joaopaulo/Desktop/Chefao/Chefao V12/Bootcamp-Gama/src/pages/_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__.AuthProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/joaopaulo/Desktop/Chefao/Chefao V12/Bootcamp-Gama/src/pages/_app.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/joaopaulo/Desktop/Chefao/Chefao V12/Bootcamp-Gama/src/pages/_app.tsx\",\n                lineNumber: 13,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQytCO0FBQ0c7QUFDd0I7QUFDN0I7QUFFN0IsU0FBU0UsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDakQscUJBQ0U7OzBCQUNBLDhEQUFDSCxrREFBSTswQkFDTCw0RUFBQ0ksT0FBSzs4QkFBQyxNQUFJOzs7Ozt3QkFBUTs7Ozs7b0JBQ1o7MEJBQ1AsOERBQUNMLCtEQUFZOzBCQUNYLDRFQUFDRyxTQUFTO29CQUFFLEdBQUdDLFNBQVM7Ozs7O3dCQUFJOzs7OztvQkFDZjs7b0JBQ1osQ0FDSDtDQUNIO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dhbWEtYWNhZGVteS8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFwidGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvQXV0aENvbnRleHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPEhlYWQ+XG4gICAgPHRpdGxlPkZpZys8L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJBdXRoUHJvdmlkZXIiLCJIZWFkIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

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