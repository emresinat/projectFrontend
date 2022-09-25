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
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/users/index.js":
/*!**********************************!*\
  !*** ./pages/api/users/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const query = req.query;\n    const url = `${process.env.BACKEND_URL}/users`;\n    if (req.method === \"GET\" || req.method === \"POST\") {\n        const method = req.method;\n        const inputData = req.body;\n        try {\n            const result = await axios__WEBPACK_IMPORTED_MODULE_0___default()({\n                method: method,\n                url,\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                ...inputData && {\n                    data: inputData\n                },\n                ...query && {\n                    params: query\n                }\n            });\n            res.status(result.status).json({\n                status: \"success\",\n                data: result.data\n            });\n            return;\n        } catch (err) {\n            res.status(err?.response?.status || 500).json({\n                status: \"error\",\n                error: err?.response?.data?.message || err.message\n            });\n            return;\n        }\n    } else {\n        res.status(405).json({\n            status: \"Method Not Allowed\"\n        });\n        return;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRTFCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0IsTUFBTUMsS0FBSyxHQUFHRixHQUFHLENBQUNFLEtBQUs7SUFDdkIsTUFBTUMsR0FBRyxHQUFHLENBQUMsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFDOUMsSUFBSU4sR0FBRyxDQUFDTyxNQUFNLEtBQUssS0FBSyxJQUFJUCxHQUFHLENBQUNPLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDakQsTUFBTUEsTUFBTSxHQUFHUCxHQUFHLENBQUNPLE1BQU07UUFDekIsTUFBTUMsU0FBUyxHQUFHUixHQUFHLENBQUNTLElBQUk7UUFDMUIsSUFBSTtZQUNGLE1BQU1DLE1BQU0sR0FBRyxNQUFNWiw0Q0FBSyxDQUFDO2dCQUN6QlMsTUFBTSxFQUFFQSxNQUFNO2dCQUNkSixHQUFHO2dCQUNIUSxPQUFPLEVBQUU7b0JBQ1AsY0FBYyxFQUFFLGtCQUFrQjtpQkFDbkM7Z0JBQ0QsR0FBSUgsU0FBUyxJQUFJO29CQUFFSSxJQUFJLEVBQUVKLFNBQVM7aUJBQUU7Z0JBQ3BDLEdBQUlOLEtBQUssSUFBSTtvQkFBRVcsTUFBTSxFQUFFWCxLQUFLO2lCQUFFO2FBQy9CLENBQUM7WUFDRkQsR0FBRyxDQUFDYSxNQUFNLENBQUNKLE1BQU0sQ0FBQ0ksTUFBTSxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBQ0QsTUFBTSxFQUFFLFNBQVM7Z0JBQUVGLElBQUksRUFBRUYsTUFBTSxDQUFDRSxJQUFJO2FBQUMsQ0FBQyxDQUFDO1lBQ3ZFLE9BQU87UUFDVCxFQUFFLE9BQU9JLEdBQUcsRUFBRTtZQUNaZixHQUFHLENBQUNhLE1BQU0sQ0FBQ0UsR0FBRyxFQUFFQyxRQUFRLEVBQUVILE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUM1Q0QsTUFBTSxFQUFFLE9BQU87Z0JBQ2ZJLEtBQUssRUFBRUYsR0FBRyxFQUFFQyxRQUFRLEVBQUVMLElBQUksRUFBRU8sT0FBTyxJQUFJSCxHQUFHLENBQUNHLE9BQU87YUFDbkQsQ0FBQyxDQUFDO1lBQ0gsT0FBTztRQUNULENBQUM7SUFDSCxPQUFPO1FBQ0xsQixHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVELE1BQU0sRUFBRSxvQkFBb0I7U0FBRSxDQUFDLENBQUM7UUFDdkQsT0FBTztJQUNULENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVmLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QxLy4vcGFnZXMvYXBpL3VzZXJzL2luZGV4LmpzPzFkOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBjb25zdCBxdWVyeSA9IHJlcS5xdWVyeTtcclxuICBjb25zdCB1cmwgPSBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vdXNlcnNgO1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiIHx8IHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICBjb25zdCBtZXRob2QgPSByZXEubWV0aG9kO1xyXG4gICAgY29uc3QgaW5wdXREYXRhID0gcmVxLmJvZHk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLi4uKGlucHV0RGF0YSAmJiB7IGRhdGE6IGlucHV0RGF0YSB9KSxcclxuICAgICAgICAuLi4ocXVlcnkgJiYgeyBwYXJhbXM6IHF1ZXJ5IH0pLFxyXG4gICAgICB9KTtcclxuICAgICAgcmVzLnN0YXR1cyhyZXN1bHQuc3RhdHVzKS5qc29uKHtzdGF0dXM6ICdzdWNjZXNzJywgZGF0YTogcmVzdWx0LmRhdGF9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoZXJyPy5yZXNwb25zZT8uc3RhdHVzIHx8IDUwMCkuanNvbih7XHJcbiAgICAgICAgc3RhdHVzOiBcImVycm9yXCIsXHJcbiAgICAgICAgZXJyb3I6IGVycj8ucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2UgfHwgZXJyLm1lc3NhZ2UsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgc3RhdHVzOiBcIk1ldGhvZCBOb3QgQWxsb3dlZFwiIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInF1ZXJ5IiwidXJsIiwicHJvY2VzcyIsImVudiIsIkJBQ0tFTkRfVVJMIiwibWV0aG9kIiwiaW5wdXREYXRhIiwiYm9keSIsInJlc3VsdCIsImhlYWRlcnMiLCJkYXRhIiwicGFyYW1zIiwic3RhdHVzIiwianNvbiIsImVyciIsInJlc3BvbnNlIiwiZXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/index.js"));
module.exports = __webpack_exports__;

})();