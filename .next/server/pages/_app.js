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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/api/api */ \"./pages/api/api.ts\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst AuthProvider = ({ children  })=>{\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const isAuthenticated = !!user;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { \"fidplus.token\": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_4__.parseCookies)();\n        if (token) {\n        //Recover info passing token to backend\n        }\n    }, []);\n    const signIn = async ({ email , password  })=>{\n        const { token , client  } = await _pages_api_api__WEBPACK_IMPORTED_MODULE_3__.api.get(\"/login/client\", {\n            email,\n            password\n        });\n        (0,nookies__WEBPACK_IMPORTED_MODULE_4__.setCookie)(undefined, \"fidplus.token\", token, {\n            maxAge: 60 * 60 * 24 // 1 dia\n        });\n        setUser(client);\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/userhomepage\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            signIn,\n            isAuthenticated\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/pedrohenriquevigatorosaes/Desktop/joaonext/teste/Bootcamp-Gama/contexts/AuthContext.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9BdXRoQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEyRDtBQUMzQjtBQUVNO0FBQ1k7QUEwQjNDLE1BQU1PLFdBQVcsaUJBQUdQLG9EQUFhLENBQUMsRUFBRSxDQUFvQjtBQUV4RCxNQUFNUSxZQUFZLEdBQUcsQ0FBQyxFQUFDQyxRQUFRLEdBQUMsR0FBSztJQUMxQyxNQUFNLEVBakNSLEdBaUNVQyxJQUFJLEdBakNkLEdBaUNnQkMsT0FBTyxNQUFJVCwrQ0FBUSxDQUFjLElBQUksQ0FBQztJQUVwRCxNQUFNVSxlQUFlLEdBQUcsQ0FBQyxDQUFDRixJQUFJO0lBRTlCVCxnREFBUyxDQUFDLElBQU07UUFDZCxNQUFNLEVBQUUsZUFBZSxFQUFFWSxLQUFLLEdBQUUsR0FBR1IscURBQVksRUFBRTtRQUNqRCxJQUFHUSxLQUFLLEVBQUM7UUFDUCx1Q0FBdUM7U0FDeEM7S0FDRixFQUFDLEVBQUUsQ0FBQztJQUVMLE1BQU1DLE1BQU0sR0FBRyxPQUFPLEVBQUNDLEtBQUssR0FBRUMsUUFBUSxHQUFhLEdBQUs7UUFDcEQsTUFBTSxFQUFDSCxLQUFLLEdBQUVJLE1BQU0sR0FBQyxHQUFHLE1BQU1iLG1EQUFPLENBQUMsZUFBZSxFQUFFO1lBQ3JEVyxLQUFLO1lBQ0xDLFFBQVE7U0FDVCxDQUFDO1FBQ0ZWLGtEQUFTLENBQUNhLFNBQVMsRUFBRSxlQUFlLEVBQUNOLEtBQUssRUFBRTtZQUMxQ08sTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVE7U0FDOUIsQ0FBQztRQUVGVCxPQUFPLENBQUNNLE1BQU0sQ0FBQztRQUVmZCx1REFBVyxDQUFDLGVBQWUsQ0FBQztLQUUvQjtJQUVELHFCQUNFLDhEQUFDSSxXQUFXLENBQUNlLFFBQVE7UUFBQ0MsS0FBSyxFQUFFO1lBQUNiLElBQUk7WUFBRUksTUFBTTtZQUFFRixlQUFlO1NBQUM7a0JBQ3pESCxRQUFROzs7OztpQkFDWSxDQUN4QjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FtYS1hY2FkZW15Ly4vY29udGV4dHMvQXV0aENvbnRleHQudHN4PzZkODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vcGFnZXMvYXBpL2FwaSdcbmltcG9ydCB7IHBhcnNlQ29va2llcywgc2V0Q29va2llIH0gZnJvbSBcIm5vb2tpZXNcIjtcblxudHlwZSBVc2VyID0ge1xuICAgIGlkOiBudW1iZXIsXG5cdFx0bmFtZTogc3RyaW5nLFxuXHRcdGVtYWlsOiBzdHJpbmcsXG5cdFx0cGFzc3dvcmQ6IHN0cmluZyxcblx0XHR0eXBlOiBudW1iZXIsXG5cdFx0aW1nX3VybDogc3RyaW5nLFxuXHRcdGNyZWF0ZWRBdDogc3RyaW5nLFxuXHRcdHVwZGF0ZWRBdDogc3RyaW5nXG59XG5cbnR5cGUgU2lnbkluRGF0YSA9IHtcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6c3RyaW5nXG4gIGlkPzogMCB8IDFcbn1cblxudHlwZSBBdXRoQ29udGV4dFR5cGUgPSB7XG4gIHVzZXI6IFVzZXIgfCBudWxsLFxuICBzaWduSW46IChkYXRhOiBTaWduSW5EYXRhKSA9PiBQcm9taXNlPHZvaWQ+LFxuICBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW5cbn1cblxuXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIEF1dGhDb250ZXh0VHlwZSlcblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PiB7XG4gIGNvbnN0IFsgdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gISF1c2VyO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyAnZmlkcGx1cy50b2tlbic6IHRva2VuIH0gPSBwYXJzZUNvb2tpZXMoKTtcbiAgICBpZih0b2tlbil7XG4gICAgICAvL1JlY292ZXIgaW5mbyBwYXNzaW5nIHRva2VuIHRvIGJhY2tlbmRcbiAgICB9XG4gIH0sW10pXG5cbiAgY29uc3Qgc2lnbkluID0gYXN5bmMgKHtlbWFpbCAscGFzc3dvcmR9OiBTaWduSW5EYXRhKSA9PiB7XG4gICAgICBjb25zdCB7dG9rZW4sIGNsaWVudH0gPSBhd2FpdCBhcGkuZ2V0KFwiL2xvZ2luL2NsaWVudFwiLCB7XG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0pXG4gICAgICBzZXRDb29raWUodW5kZWZpbmVkLCAnZmlkcGx1cy50b2tlbicsdG9rZW4sIHtcbiAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgLy8gMSBkaWFcbiAgICAgIH0pXG5cbiAgICAgIHNldFVzZXIoY2xpZW50KVxuXG4gICAgICBSb3V0ZXIucHVzaCgnL3VzZXJob21lcGFnZScpXG4gIFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3t1c2VyLCBzaWduSW4sIGlzQXV0aGVudGljYXRlZH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn0iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUm91dGVyIiwiYXBpIiwicGFyc2VDb29raWVzIiwic2V0Q29va2llIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiaXNBdXRoZW50aWNhdGVkIiwidG9rZW4iLCJzaWduSW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiY2xpZW50IiwiZ2V0IiwidW5kZWZpbmVkIiwibWF4QWdlIiwicHVzaCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/AuthContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./contexts/AuthContext.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Fig+\"\n                }, void 0, false, {\n                    fileName: \"/Users/pedrohenriquevigatorosaes/Desktop/joaonext/teste/Bootcamp-Gama/pages/_app.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pedrohenriquevigatorosaes/Desktop/joaonext/teste/Bootcamp-Gama/pages/_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__.AuthProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/pedrohenriquevigatorosaes/Desktop/joaonext/teste/Bootcamp-Gama/pages/_app.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pedrohenriquevigatorosaes/Desktop/joaonext/teste/Bootcamp-Gama/pages/_app.tsx\",\n                lineNumber: 13,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDK0I7QUFDRztBQUNxQjtBQUMxQjtBQUU3QixTQUFTRSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxxQkFDRTs7MEJBQ0EsOERBQUNILGtEQUFJOzBCQUNMLDRFQUFDSSxPQUFLOzhCQUFDLE1BQUk7Ozs7O3dCQUFROzs7OztvQkFDWjswQkFDUCw4REFBQ0wsK0RBQVk7MEJBQ1gsNEVBQUNHLFNBQVM7b0JBQUUsR0FBR0MsU0FBUzs7Ozs7d0JBQUk7Ozs7O29CQUNmOztvQkFDWixDQUNIO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FtYS1hY2FkZW15Ly4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBcInRhaWx3aW5kY3NzL3RhaWx3aW5kLmNzc1wiO1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHRzL0F1dGhDb250ZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxIZWFkPlxuICAgIDx0aXRsZT5GaWcrPC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gICAgPEF1dGhQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0F1dGhQcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiSGVhZCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./pages/api/api.ts":
/*!**************************!*\
  !*** ./pages/api/api.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst { \"nextauth.token\": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)();\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"http://localhost:3333\"\n});\nif (token) {\n    api.defaults.headers[\"Authorization\"] = `Bearer ${token}`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlCO0FBQ2E7QUFFdEMsTUFBTSxFQUFDLGdCQUFnQixFQUFFRSxLQUFLLEdBQUMsR0FBR0QscURBQVksRUFBRTtBQUV6QyxNQUFNRSxHQUFHLEdBQUdILG1EQUFZLENBQUM7SUFDOUJLLE9BQU8sRUFBRSx1QkFBdUI7Q0FDakMsQ0FBQztBQUVGLElBQUdILEtBQUssRUFBRTtJQUNSQyxHQUFHLENBQUNHLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFTCxLQUFLLENBQUMsQ0FBQztDQUMxRCIsInNvdXJjZXMiOlsid2VicGFjazovL2dhbWEtYWNhZGVteS8uL3BhZ2VzL2FwaS9hcGkudHM/ODVjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tICdub29raWVzJ1xuXG5jb25zdCB7J25leHRhdXRoLnRva2VuJzogdG9rZW59ID0gcGFyc2VDb29raWVzKClcblxuZXhwb3J0IGNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6ICdodHRwOi8vbG9jYWxob3N0OjMzMzMnXG59KVxuXG5pZih0b2tlbikge1xuICBhcGkuZGVmYXVsdHMuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWBcbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJwYXJzZUNvb2tpZXMiLCJ0b2tlbiIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiLCJkZWZhdWx0cyIsImhlYWRlcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/api.ts\n");

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();