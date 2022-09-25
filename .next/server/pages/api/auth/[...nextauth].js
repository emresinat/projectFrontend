"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hashPassword\": () => (/* binding */ hashPassword),\n/* harmony export */   \"verifyPassword\": () => (/* binding */ verifyPassword)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function hashPassword(password) {\n    const hashedPassword = (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 10);\n    return hashedPassword;\n}\nasync function verifyPassword(password, hashedPassword) {\n    const isVerified = (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.compare)(password, hashedPassword);\n    return isVerified;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlDO0FBRWxDLGVBQWVFLFlBQVksQ0FBQ0MsUUFBUSxFQUFFO0lBQ3pDLE1BQU1DLGNBQWMsR0FBR0osOENBQUksQ0FBQ0csUUFBUSxFQUFDLEVBQUUsQ0FBQztJQUN4QyxPQUFPQyxjQUFjLENBQUM7QUFDMUIsQ0FBQztBQUVNLGVBQWVDLGNBQWMsQ0FBQ0YsUUFBUSxFQUFFQyxjQUFjLEVBQUU7SUFDM0QsTUFBTUUsVUFBVSxHQUFHTCxpREFBTyxDQUFDRSxRQUFRLEVBQUVDLGNBQWMsQ0FBQztJQUNwRCxPQUFPRSxVQUFVLENBQUM7QUFDdEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QxLy4vbGliL2F1dGguanM/Mjg3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYXNoLCBjb21wYXJlIH0gZnJvbSBcImJjcnlwdGpzXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFzaFBhc3N3b3JkKHBhc3N3b3JkKSB7XHJcbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGhhc2gocGFzc3dvcmQsMTApO1xyXG4gICAgcmV0dXJuIGhhc2hlZFBhc3N3b3JkO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5UGFzc3dvcmQocGFzc3dvcmQsIGhhc2hlZFBhc3N3b3JkKSB7XHJcbiAgICBjb25zdCBpc1ZlcmlmaWVkID0gY29tcGFyZShwYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpO1xyXG4gICAgcmV0dXJuIGlzVmVyaWZpZWQ7XHJcbn1cclxuIl0sIm5hbWVzIjpbImhhc2giLCJjb21wYXJlIiwiaGFzaFBhc3N3b3JkIiwicGFzc3dvcmQiLCJoYXNoZWRQYXNzd29yZCIsInZlcmlmeVBhc3N3b3JkIiwiaXNWZXJpZmllZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/auth.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/auth */ \"(api)/./lib/auth.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    callbacks: {\n        async jwt ({ token , user , account , profile , isNewUser  }) {\n            if (user) {\n                token.id = user.id;\n            }\n            return token;\n        },\n        async session ({ session , user , token  }) {\n            session.user.id = token.id;\n            return session;\n        }\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            async authorize (credentials) {\n                const url = `${process.env.BACKEND_URL}/users`;\n                const result = await fetch(url);\n                const users = await result.json();\n                const user = users?.find((user)=>user?.email === credentials.email);\n                if (!user) {\n                    throw new Error(\"User not found!\");\n                }\n                const isValid = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.verifyPassword)(credentials.password, user.password);\n                if (!isValid) {\n                    throw new Error(\"Password is not valid!\");\n                }\n                return {\n                    ...user\n                };\n            }\n        }), \n    ],\n    secret: \"hyJaWM98GoaKsxHnhybgwtp10Ogs9jeHGgmApQMbV5Q=\"\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpQztBQUNpQztBQUNmO0FBQ25ELGlFQUFlQSxnREFBUSxDQUFDO0lBQ3RCRyxTQUFTLEVBQUU7UUFDVCxNQUFNQyxHQUFHLEVBQUMsRUFBRUMsS0FBSyxHQUFFQyxJQUFJLEdBQUVDLE9BQU8sR0FBRUMsT0FBTyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtZQUN0RCxJQUFHSCxJQUFJLEVBQUU7Z0JBQ1BELEtBQUssQ0FBQ0ssRUFBRSxHQUFHSixJQUFJLENBQUNJLEVBQUU7WUFDcEIsQ0FBQztZQUNELE9BQU9MLEtBQUssQ0FBQztRQUNmLENBQUM7UUFDRCxNQUFNTSxPQUFPLEVBQUMsRUFBRUEsT0FBTyxHQUFFTCxJQUFJLEdBQUVELEtBQUssR0FBRSxFQUFFO1lBQ3RDTSxPQUFPLENBQUNMLElBQUksQ0FBQ0ksRUFBRSxHQUFHTCxLQUFLLENBQUNLLEVBQUU7WUFDMUIsT0FBT0MsT0FBTyxDQUFDO1FBQ2pCLENBQUM7S0FDRjtJQUNEQSxPQUFPLEVBQUU7UUFDUEMsUUFBUSxFQUFFLEtBQUs7S0FDaEI7SUFDREMsU0FBUyxFQUFFO1FBQ1RaLHNFQUFtQixDQUFDO1lBQ2xCLE1BQU1hLFNBQVMsRUFBQ0MsV0FBVyxFQUFFO2dCQUMzQixNQUFNQyxHQUFHLEdBQUcsQ0FBQyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDLE1BQU0sQ0FBQztnQkFDOUMsTUFBTUMsTUFBTSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0wsR0FBRyxDQUFDO2dCQUMvQixNQUFNTSxLQUFLLEdBQUcsTUFBTUYsTUFBTSxDQUFDRyxJQUFJLEVBQUU7Z0JBQ2pDLE1BQU1qQixJQUFJLEdBQUdnQixLQUFLLEVBQUVFLElBQUksQ0FBQyxDQUFDbEIsSUFBSSxHQUFLQSxJQUFJLEVBQUVtQixLQUFLLEtBQUtWLFdBQVcsQ0FBQ1UsS0FBSyxDQUFDO2dCQUNyRSxJQUFJLENBQUNuQixJQUFJLEVBQUU7b0JBQ1QsTUFBTSxJQUFJb0IsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBQ0QsTUFBTUMsT0FBTyxHQUFHLE1BQU16Qix5REFBYyxDQUNsQ2EsV0FBVyxDQUFDYSxRQUFRLEVBQ3BCdEIsSUFBSSxDQUFDc0IsUUFBUSxDQUNkO2dCQUVELElBQUksQ0FBQ0QsT0FBTyxFQUFFO29CQUNaLE1BQU0sSUFBSUQsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBQ0QsT0FBTztvQkFBQyxHQUFHcEIsSUFBSTtpQkFBQyxDQUFDO1lBQ25CLENBQUM7U0FDRixDQUFDO0tBQ0g7SUFDRHVCLE1BQU0sRUFBRSw4Q0FBOEM7Q0FDdkQsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdDEvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcclxuaW1wb3J0IHsgdmVyaWZ5UGFzc3dvcmQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2F1dGhcIjtcclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIsIGFjY291bnQsIHByb2ZpbGUsIGlzTmV3VXNlciB9KSB7XHJcbiAgICAgIGlmKHVzZXIpIHtcclxuICAgICAgICB0b2tlbi5pZCA9IHVzZXIuaWRcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHVzZXIsIHRva2VuIH0pIHtcclxuICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWRcclxuICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgc3RyYXRlZ3k6IFwiand0XCIsXHJcbiAgfSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vdXNlcnNgO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCByZXN1bHQuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSB1c2Vycz8uZmluZCgodXNlcikgPT4gdXNlcj8uZW1haWwgPT09IGNyZWRlbnRpYWxzLmVtYWlsKTtcclxuICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVzZXIgbm90IGZvdW5kIVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IHZlcmlmeVBhc3N3b3JkKFxyXG4gICAgICAgICAgY3JlZGVudGlhbHMucGFzc3dvcmQsXHJcbiAgICAgICAgICB1c2VyLnBhc3N3b3JkXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXNzd29yZCBpcyBub3QgdmFsaWQhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gey4uLnVzZXJ9O1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBzZWNyZXQ6IFwiaHlKYVdNOThHb2FLc3hIbmh5Ymd3dHAxME9nczlqZUhHZ21BcFFNYlY1UT1cIixcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJ2ZXJpZnlQYXNzd29yZCIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwidXNlciIsImFjY291bnQiLCJwcm9maWxlIiwiaXNOZXdVc2VyIiwiaWQiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJwcm92aWRlcnMiLCJhdXRob3JpemUiLCJjcmVkZW50aWFscyIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJCQUNLRU5EX1VSTCIsInJlc3VsdCIsImZldGNoIiwidXNlcnMiLCJqc29uIiwiZmluZCIsImVtYWlsIiwiRXJyb3IiLCJpc1ZhbGlkIiwicGFzc3dvcmQiLCJzZWNyZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();