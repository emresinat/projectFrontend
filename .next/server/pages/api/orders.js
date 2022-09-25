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
exports.id = "pages/api/orders";
exports.ids = ["pages/api/orders"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/orders/index.js":
/*!***********************************!*\
  !*** ./pages/api/orders/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const query = req.query;\n    const url = `${process.env.BACKEND_URL}/orders`;\n    if (req.method === \"GET\" || req.method === \"POST\") {\n        const method = req.method;\n        const inputData = req.body;\n        try {\n            const result = await axios__WEBPACK_IMPORTED_MODULE_0___default()({\n                method: method,\n                url,\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                ...inputData && {\n                    data: inputData\n                },\n                ...query && {\n                    params: query\n                }\n            });\n            res.status(result.status).json(result.data);\n            return;\n        } catch (err) {\n            res.status(err?.response?.status || 500).json({\n                status: \"error\",\n                error: err?.response?.data?.message || err.message\n            });\n            return;\n        }\n    } else {\n        res.status(405).json({\n            status: \"Method Not Allowed\"\n        });\n        return;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXJzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUUxQixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQy9CLE1BQU1DLEtBQUssR0FBR0YsR0FBRyxDQUFDRSxLQUFLO0lBQ3ZCLE1BQU1DLEdBQUcsR0FBRyxDQUFDLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXLENBQUMsT0FBTyxDQUFDO0lBQy9DLElBQUlOLEdBQUcsQ0FBQ08sTUFBTSxLQUFLLEtBQUssSUFBSVAsR0FBRyxDQUFDTyxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ2pELE1BQU1BLE1BQU0sR0FBR1AsR0FBRyxDQUFDTyxNQUFNO1FBQ3pCLE1BQU1DLFNBQVMsR0FBR1IsR0FBRyxDQUFDUyxJQUFJO1FBRTFCLElBQUk7WUFDRixNQUFNQyxNQUFNLEdBQUcsTUFBTVosNENBQUssQ0FBQztnQkFDekJTLE1BQU0sRUFBRUEsTUFBTTtnQkFDZEosR0FBRztnQkFDSFEsT0FBTyxFQUFFO29CQUNQLGNBQWMsRUFBRSxrQkFBa0I7aUJBQ25DO2dCQUNELEdBQUlILFNBQVMsSUFBSTtvQkFBRUksSUFBSSxFQUFFSixTQUFTO2lCQUFFO2dCQUNwQyxHQUFJTixLQUFLLElBQUk7b0JBQUVXLE1BQU0sRUFBRVgsS0FBSztpQkFBRTthQUMvQixDQUFDO1lBQ0ZELEdBQUcsQ0FBQ2EsTUFBTSxDQUFDSixNQUFNLENBQUNJLE1BQU0sQ0FBQyxDQUFDQyxJQUFJLENBQUNMLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLENBQUM7WUFDNUMsT0FBTztRQUNULEVBQUUsT0FBT0ksR0FBRyxFQUFFO1lBQ1pmLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDRSxHQUFHLEVBQUVDLFFBQVEsRUFBRUgsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQzVDRCxNQUFNLEVBQUUsT0FBTztnQkFDZkksS0FBSyxFQUFFRixHQUFHLEVBQUVDLFFBQVEsRUFBRUwsSUFBSSxFQUFFTyxPQUFPLElBQUlILEdBQUcsQ0FBQ0csT0FBTzthQUNuRCxDQUFDLENBQUM7WUFDSCxPQUFPO1FBQ1QsQ0FBQztJQUNILE9BQU87UUFDTGxCLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUQsTUFBTSxFQUFFLG9CQUFvQjtTQUFFLENBQUMsQ0FBQztRQUN2RCxPQUFPO0lBQ1QsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZWYsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdDEvLi9wYWdlcy9hcGkvb3JkZXJzL2luZGV4LmpzP2M1OTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBjb25zdCBxdWVyeSA9IHJlcS5xdWVyeTtcclxuICBjb25zdCB1cmwgPSBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vb3JkZXJzYDtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIiB8fCByZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgY29uc3QgbWV0aG9kID0gcmVxLm1ldGhvZDtcclxuICAgIGNvbnN0IGlucHV0RGF0YSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAuLi4oaW5wdXREYXRhICYmIHsgZGF0YTogaW5wdXREYXRhIH0pLFxyXG4gICAgICAgIC4uLihxdWVyeSAmJiB7IHBhcmFtczogcXVlcnkgfSksXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXMuc3RhdHVzKHJlc3VsdC5zdGF0dXMpLmpzb24ocmVzdWx0LmRhdGEpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmVzLnN0YXR1cyhlcnI/LnJlc3BvbnNlPy5zdGF0dXMgfHwgNTAwKS5qc29uKHtcclxuICAgICAgICBzdGF0dXM6IFwiZXJyb3JcIixcclxuICAgICAgICBlcnJvcjogZXJyPy5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZSB8fCBlcnIubWVzc2FnZSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBzdGF0dXM6IFwiTWV0aG9kIE5vdCBBbGxvd2VkXCIgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicXVlcnkiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiQkFDS0VORF9VUkwiLCJtZXRob2QiLCJpbnB1dERhdGEiLCJib2R5IiwicmVzdWx0IiwiaGVhZGVycyIsImRhdGEiLCJwYXJhbXMiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwicmVzcG9uc2UiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/orders/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/orders/index.js"));
module.exports = __webpack_exports__;

})();