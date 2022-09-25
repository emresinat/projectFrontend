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
exports.id = "pages/api/orders/[id]";
exports.ids = ["pages/api/orders/[id]"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/orders/[id].js":
/*!**********************************!*\
  !*** ./pages/api/orders/[id].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const id = req.query.id;\n    delete req.query.id;\n    const query = req.query;\n    const url = `${process.env.BACKEND_URL}/orders/${id}`;\n    if (req.method === \"GET\") {\n        const method = req.method;\n        try {\n            const result = await axios__WEBPACK_IMPORTED_MODULE_0___default()({\n                method: method,\n                url,\n                ...query && {\n                    params: query\n                }\n            });\n            res.status(result.status).json(result.data);\n            return;\n        } catch (err) {\n            res.status(err?.response?.status || 500).json({\n                status: \"error\",\n                error: err?.response?.data?.message || err.message,\n                data: err?.response?.data?.data,\n                errorCode: err?.response?.data?.errorCode\n            });\n            return;\n        }\n    } else {\n        res.status(405).json({\n            status: \"Method Not Allowed\"\n        });\n        return;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXJzL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRTFCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0IsTUFBTUMsRUFBRSxHQUFHRixHQUFHLENBQUNHLEtBQUssQ0FBQ0QsRUFBRTtJQUN2QixPQUFPRixHQUFHLENBQUNHLEtBQUssQ0FBQ0QsRUFBRSxDQUFDO0lBQ3BCLE1BQU1DLEtBQUssR0FBR0gsR0FBRyxDQUFDRyxLQUFLO0lBQ3ZCLE1BQU1DLEdBQUcsR0FBRyxDQUFDLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXLENBQUMsUUFBUSxFQUFFTCxFQUFFLENBQUMsQ0FBQztJQUNyRCxJQUFJRixHQUFHLENBQUNRLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEIsTUFBTUEsTUFBTSxHQUFHUixHQUFHLENBQUNRLE1BQU07UUFFekIsSUFBSTtZQUNGLE1BQU1DLE1BQU0sR0FBRyxNQUFNWCw0Q0FBSyxDQUFDO2dCQUN6QlUsTUFBTSxFQUFFQSxNQUFNO2dCQUNkSixHQUFHO2dCQUNILEdBQUlELEtBQUssSUFBSTtvQkFBRU8sTUFBTSxFQUFFUCxLQUFLO2lCQUFFO2FBQy9CLENBQUM7WUFDRkYsR0FBRyxDQUFDVSxNQUFNLENBQUNGLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLENBQUNDLElBQUksQ0FBQ0gsTUFBTSxDQUFDSSxJQUFJLENBQUMsQ0FBQztZQUM1QyxPQUFPO1FBQ1QsRUFBRSxPQUFPQyxHQUFHLEVBQUU7WUFDWmIsR0FBRyxDQUFDVSxNQUFNLENBQUNHLEdBQUcsRUFBRUMsUUFBUSxFQUFFSixNQUFNLElBQUksR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFDNUNELE1BQU0sRUFBRSxPQUFPO2dCQUNmSyxLQUFLLEVBQUVGLEdBQUcsRUFBRUMsUUFBUSxFQUFFRixJQUFJLEVBQUVJLE9BQU8sSUFBSUgsR0FBRyxDQUFDRyxPQUFPO2dCQUNsREosSUFBSSxFQUFFQyxHQUFHLEVBQUVDLFFBQVEsRUFBRUYsSUFBSSxFQUFFQSxJQUFJO2dCQUMvQkssU0FBUyxFQUFFSixHQUFHLEVBQUVDLFFBQVEsRUFBRUYsSUFBSSxFQUFFSyxTQUFTO2FBQzFDLENBQUMsQ0FBQztZQUNILE9BQU87UUFDVCxDQUFDO0lBQ0gsT0FBTztRQUNMakIsR0FBRyxDQUFDVSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFRCxNQUFNLEVBQUUsb0JBQW9CO1NBQUUsQ0FBQyxDQUFDO1FBQ3ZELE9BQU87SUFDVCxDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlWixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0MS8uL3BhZ2VzL2FwaS9vcmRlcnMvW2lkXS5qcz9hZTVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBjb25zdCBpZCA9IHJlcS5xdWVyeS5pZDtcclxuICBkZWxldGUgcmVxLnF1ZXJ5LmlkO1xyXG4gIGNvbnN0IHF1ZXJ5ID0gcmVxLnF1ZXJ5O1xyXG4gIGNvbnN0IHVybCA9IGAke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9vcmRlcnMvJHtpZH1gO1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICBjb25zdCBtZXRob2QgPSByZXEubWV0aG9kO1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIC4uLihxdWVyeSAmJiB7IHBhcmFtczogcXVlcnkgfSksXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXMuc3RhdHVzKHJlc3VsdC5zdGF0dXMpLmpzb24ocmVzdWx0LmRhdGEpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmVzLnN0YXR1cyhlcnI/LnJlc3BvbnNlPy5zdGF0dXMgfHwgNTAwKS5qc29uKHtcclxuICAgICAgICBzdGF0dXM6IFwiZXJyb3JcIixcclxuICAgICAgICBlcnJvcjogZXJyPy5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZSB8fCBlcnIubWVzc2FnZSxcclxuICAgICAgICBkYXRhOiBlcnI/LnJlc3BvbnNlPy5kYXRhPy5kYXRhLFxyXG4gICAgICAgIGVycm9yQ29kZTogZXJyPy5yZXNwb25zZT8uZGF0YT8uZXJyb3JDb2RlLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IHN0YXR1czogXCJNZXRob2QgTm90IEFsbG93ZWRcIiB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpZCIsInF1ZXJ5IiwidXJsIiwicHJvY2VzcyIsImVudiIsIkJBQ0tFTkRfVVJMIiwibWV0aG9kIiwicmVzdWx0IiwicGFyYW1zIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJlcnIiLCJyZXNwb25zZSIsImVycm9yIiwibWVzc2FnZSIsImVycm9yQ29kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/orders/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/orders/[id].js"));
module.exports = __webpack_exports__;

})();