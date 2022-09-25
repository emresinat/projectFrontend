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
exports.id = "pages/api/products/[id]";
exports.ids = ["pages/api/products/[id]"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/products/[id].js":
/*!************************************!*\
  !*** ./pages/api/products/[id].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const id = req.query.id;\n    delete req.query.id;\n    const query = req.query;\n    const url = `${process.env.BACKEND_URL}/products/${id}`;\n    if (req.method === \"GET\" || req.method === \"DELETE\" || req.method === \"PUT\") {\n        const method = req.method;\n        const inputData = req.body;\n        try {\n            const result = await axios__WEBPACK_IMPORTED_MODULE_0___default()({\n                method: method,\n                url,\n                ...inputData && {\n                    data: inputData\n                },\n                ...query && {\n                    params: query\n                }\n            });\n            res.status(result.status).json(result.data);\n            return;\n        } catch (err) {\n            res.status(err?.response?.status || 500).json({\n                status: \"error\",\n                error: err?.response?.data?.message || err.message,\n                data: err?.response?.data?.data,\n                errorCode: err?.response?.data?.errorCode\n            });\n            return;\n        }\n    } else {\n        res.status(405).json({\n            status: \"Method Not Allowed\"\n        });\n        return;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFFMUIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMvQixNQUFNQyxFQUFFLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSyxDQUFDRCxFQUFFO0lBQ3ZCLE9BQU9GLEdBQUcsQ0FBQ0csS0FBSyxDQUFDRCxFQUFFLENBQUM7SUFDcEIsTUFBTUMsS0FBSyxHQUFHSCxHQUFHLENBQUNHLEtBQUs7SUFDdkIsTUFBTUMsR0FBRyxHQUFHLENBQUMsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVcsQ0FBQyxVQUFVLEVBQUVMLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELElBQ0VGLEdBQUcsQ0FBQ1EsTUFBTSxLQUFLLEtBQUssSUFDcEJSLEdBQUcsQ0FBQ1EsTUFBTSxLQUFLLFFBQVEsSUFDdkJSLEdBQUcsQ0FBQ1EsTUFBTSxLQUFLLEtBQUssRUFDcEI7UUFDQSxNQUFNQSxNQUFNLEdBQUdSLEdBQUcsQ0FBQ1EsTUFBTTtRQUN6QixNQUFNQyxTQUFTLEdBQUdULEdBQUcsQ0FBQ1UsSUFBSTtRQUUxQixJQUFJO1lBQ0YsTUFBTUMsTUFBTSxHQUFHLE1BQU1iLDRDQUFLLENBQUM7Z0JBQ3pCVSxNQUFNLEVBQUVBLE1BQU07Z0JBQ2RKLEdBQUc7Z0JBQ0gsR0FBSUssU0FBUyxJQUFJO29CQUFFRyxJQUFJLEVBQUVILFNBQVM7aUJBQUU7Z0JBQ3BDLEdBQUlOLEtBQUssSUFBSTtvQkFBRVUsTUFBTSxFQUFFVixLQUFLO2lCQUFFO2FBQy9CLENBQUM7WUFDRkYsR0FBRyxDQUFDYSxNQUFNLENBQUNILE1BQU0sQ0FBQ0csTUFBTSxDQUFDLENBQUNDLElBQUksQ0FBQ0osTUFBTSxDQUFDQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxPQUFPO1FBQ1QsRUFBRSxPQUFPSSxHQUFHLEVBQUU7WUFDWmYsR0FBRyxDQUFDYSxNQUFNLENBQUNFLEdBQUcsRUFBRUMsUUFBUSxFQUFFSCxNQUFNLElBQUksR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFDNUNELE1BQU0sRUFBRSxPQUFPO2dCQUNmSSxLQUFLLEVBQUVGLEdBQUcsRUFBRUMsUUFBUSxFQUFFTCxJQUFJLEVBQUVPLE9BQU8sSUFBSUgsR0FBRyxDQUFDRyxPQUFPO2dCQUNsRFAsSUFBSSxFQUFFSSxHQUFHLEVBQUVDLFFBQVEsRUFBRUwsSUFBSSxFQUFFQSxJQUFJO2dCQUMvQlEsU0FBUyxFQUFFSixHQUFHLEVBQUVDLFFBQVEsRUFBRUwsSUFBSSxFQUFFUSxTQUFTO2FBQzFDLENBQUMsQ0FBQztZQUNILE9BQU87UUFDVCxDQUFDO0lBQ0gsT0FBTztRQUNMbkIsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFRCxNQUFNLEVBQUUsb0JBQW9CO1NBQUUsQ0FBQyxDQUFDO1FBQ3ZELE9BQU87SUFDVCxDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlZixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0MS8uL3BhZ2VzL2FwaS9wcm9kdWN0cy9baWRdLmpzPzgyZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IGlkID0gcmVxLnF1ZXJ5LmlkO1xyXG4gIGRlbGV0ZSByZXEucXVlcnkuaWQ7XHJcbiAgY29uc3QgcXVlcnkgPSByZXEucXVlcnk7XHJcbiAgY29uc3QgdXJsID0gYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3Byb2R1Y3RzLyR7aWR9YDtcclxuICBpZiAoXHJcbiAgICByZXEubWV0aG9kID09PSBcIkdFVFwiIHx8XHJcbiAgICByZXEubWV0aG9kID09PSBcIkRFTEVURVwiIHx8XHJcbiAgICByZXEubWV0aG9kID09PSBcIlBVVFwiXHJcbiAgKSB7XHJcbiAgICBjb25zdCBtZXRob2QgPSByZXEubWV0aG9kO1xyXG4gICAgY29uc3QgaW5wdXREYXRhID0gcmVxLmJvZHk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICAuLi4oaW5wdXREYXRhICYmIHsgZGF0YTogaW5wdXREYXRhIH0pLFxyXG4gICAgICAgIC4uLihxdWVyeSAmJiB7IHBhcmFtczogcXVlcnkgfSksXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXMuc3RhdHVzKHJlc3VsdC5zdGF0dXMpLmpzb24ocmVzdWx0LmRhdGEpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmVzLnN0YXR1cyhlcnI/LnJlc3BvbnNlPy5zdGF0dXMgfHwgNTAwKS5qc29uKHtcclxuICAgICAgICBzdGF0dXM6IFwiZXJyb3JcIixcclxuICAgICAgICBlcnJvcjogZXJyPy5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZSB8fCBlcnIubWVzc2FnZSxcclxuICAgICAgICBkYXRhOiBlcnI/LnJlc3BvbnNlPy5kYXRhPy5kYXRhLFxyXG4gICAgICAgIGVycm9yQ29kZTogZXJyPy5yZXNwb25zZT8uZGF0YT8uZXJyb3JDb2RlLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IHN0YXR1czogXCJNZXRob2QgTm90IEFsbG93ZWRcIiB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpZCIsInF1ZXJ5IiwidXJsIiwicHJvY2VzcyIsImVudiIsIkJBQ0tFTkRfVVJMIiwibWV0aG9kIiwiaW5wdXREYXRhIiwiYm9keSIsInJlc3VsdCIsImRhdGEiLCJwYXJhbXMiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwicmVzcG9uc2UiLCJlcnJvciIsIm1lc3NhZ2UiLCJlcnJvckNvZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products/[id].js"));
module.exports = __webpack_exports__;

})();