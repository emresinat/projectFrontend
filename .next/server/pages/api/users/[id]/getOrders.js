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
exports.id = "pages/api/users/[id]/getOrders";
exports.ids = ["pages/api/users/[id]/getOrders"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/users/[id]/getOrders/index.js":
/*!*************************************************!*\
  !*** ./pages/api/users/[id]/getOrders/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const id = req.query.id;\n    delete req.query.id;\n    const query = req.query;\n    const url = `${process.env.BACKEND_URL}/users/${id}/getOrders`;\n    if (req.method === \"GET\") {\n        const method = req.method;\n        try {\n            const result = await axios__WEBPACK_IMPORTED_MODULE_0___default()({\n                method: method,\n                url,\n                ...query && {\n                    params: query\n                }\n            });\n            res.status(result.status).json(result.data);\n            return;\n        } catch (err) {\n            res.status(err?.response?.status || 500).json({\n                status: \"error\",\n                error: err?.response?.data?.message || err.message,\n                data: err?.response?.data?.data,\n                errorCode: err?.response?.data?.errorCode\n            });\n            return;\n        }\n    } else {\n        res.status(405).json({\n            status: \"Method Not Allowed\"\n        });\n        return;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvW2lkXS9nZXRPcmRlcnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRTFCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0IsTUFBTUMsRUFBRSxHQUFHRixHQUFHLENBQUNHLEtBQUssQ0FBQ0QsRUFBRTtJQUN2QixPQUFPRixHQUFHLENBQUNHLEtBQUssQ0FBQ0QsRUFBRSxDQUFDO0lBQ3BCLE1BQU1DLEtBQUssR0FBR0gsR0FBRyxDQUFDRyxLQUFLO0lBQ3ZCLE1BQU1DLEdBQUcsR0FBRyxDQUFDLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXLENBQUMsT0FBTyxFQUFFTCxFQUFFLENBQUMsVUFBVSxDQUFDO0lBQzlELElBQUlGLEdBQUcsQ0FBQ1EsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN4QixNQUFNQSxNQUFNLEdBQUdSLEdBQUcsQ0FBQ1EsTUFBTTtRQUN6QixJQUFJO1lBQ0YsTUFBTUMsTUFBTSxHQUFHLE1BQU1YLDRDQUFLLENBQUM7Z0JBQ3pCVSxNQUFNLEVBQUVBLE1BQU07Z0JBQ2RKLEdBQUc7Z0JBQ0gsR0FBSUQsS0FBSyxJQUFJO29CQUFFTyxNQUFNLEVBQUVQLEtBQUs7aUJBQUU7YUFDL0IsQ0FBQztZQUNGRixHQUFHLENBQUNVLE1BQU0sQ0FBQ0YsTUFBTSxDQUFDRSxNQUFNLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSCxNQUFNLENBQUNJLElBQUksQ0FBQyxDQUFDO1lBQzVDLE9BQU87UUFDVCxFQUFFLE9BQU9DLEdBQUcsRUFBRTtZQUNaYixHQUFHLENBQUNVLE1BQU0sQ0FBQ0csR0FBRyxFQUFFQyxRQUFRLEVBQUVKLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUM1Q0QsTUFBTSxFQUFFLE9BQU87Z0JBQ2ZLLEtBQUssRUFBRUYsR0FBRyxFQUFFQyxRQUFRLEVBQUVGLElBQUksRUFBRUksT0FBTyxJQUFJSCxHQUFHLENBQUNHLE9BQU87Z0JBQ2xESixJQUFJLEVBQUVDLEdBQUcsRUFBRUMsUUFBUSxFQUFFRixJQUFJLEVBQUVBLElBQUk7Z0JBQy9CSyxTQUFTLEVBQUVKLEdBQUcsRUFBRUMsUUFBUSxFQUFFRixJQUFJLEVBQUVLLFNBQVM7YUFDMUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTztRQUNULENBQUM7SUFDSCxPQUFPO1FBQ0xqQixHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVELE1BQU0sRUFBRSxvQkFBb0I7U0FBRSxDQUFDLENBQUM7UUFDdkQsT0FBTztJQUNULENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVaLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QxLy4vcGFnZXMvYXBpL3VzZXJzL1tpZF0vZ2V0T3JkZXJzL2luZGV4LmpzPzdlOTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IGlkID0gcmVxLnF1ZXJ5LmlkO1xyXG4gIGRlbGV0ZSByZXEucXVlcnkuaWQ7XHJcbiAgY29uc3QgcXVlcnkgPSByZXEucXVlcnk7XHJcbiAgY29uc3QgdXJsID0gYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3VzZXJzLyR7aWR9L2dldE9yZGVyc2A7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcclxuICAgIGNvbnN0IG1ldGhvZCA9IHJlcS5tZXRob2Q7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIC4uLihxdWVyeSAmJiB7IHBhcmFtczogcXVlcnkgfSksXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXMuc3RhdHVzKHJlc3VsdC5zdGF0dXMpLmpzb24ocmVzdWx0LmRhdGEpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmVzLnN0YXR1cyhlcnI/LnJlc3BvbnNlPy5zdGF0dXMgfHwgNTAwKS5qc29uKHtcclxuICAgICAgICBzdGF0dXM6IFwiZXJyb3JcIixcclxuICAgICAgICBlcnJvcjogZXJyPy5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZSB8fCBlcnIubWVzc2FnZSxcclxuICAgICAgICBkYXRhOiBlcnI/LnJlc3BvbnNlPy5kYXRhPy5kYXRhLFxyXG4gICAgICAgIGVycm9yQ29kZTogZXJyPy5yZXNwb25zZT8uZGF0YT8uZXJyb3JDb2RlLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IHN0YXR1czogXCJNZXRob2QgTm90IEFsbG93ZWRcIiB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbImF4aW9zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImlkIiwicXVlcnkiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiQkFDS0VORF9VUkwiLCJtZXRob2QiLCJyZXN1bHQiLCJwYXJhbXMiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImVyciIsInJlc3BvbnNlIiwiZXJyb3IiLCJtZXNzYWdlIiwiZXJyb3JDb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/[id]/getOrders/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/[id]/getOrders/index.js"));
module.exports = __webpack_exports__;

})();