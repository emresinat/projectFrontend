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
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/products/index.js":
/*!*************************************!*\
  !*** ./pages/api/products/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const query = req.query;\n    const url = `${process.env.BACKEND_URL}/products`;\n    if (req.method === \"GET\" || req.method === \"POST\") {\n        const method = req.method;\n        const inputData = req.body;\n        try {\n            const result = await axios__WEBPACK_IMPORTED_MODULE_0___default()({\n                method: method,\n                url,\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                ...inputData && {\n                    data: inputData\n                },\n                ...query && {\n                    params: query\n                }\n            });\n            res.status(result.status).json(result.data);\n            return;\n        } catch (err) {\n            res.status(err?.response?.status || 500).json({\n                status: \"error\",\n                error: err?.response?.data?.message || err.message\n            });\n            return;\n        }\n    } else {\n        res.status(405).json({\n            status: \"Method Not Allowed\"\n        });\n        return;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRTFCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0IsTUFBTUMsS0FBSyxHQUFHRixHQUFHLENBQUNFLEtBQUs7SUFDdkIsTUFBTUMsR0FBRyxHQUFHLENBQUMsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVcsQ0FBQyxTQUFTLENBQUM7SUFDakQsSUFBSU4sR0FBRyxDQUFDTyxNQUFNLEtBQUssS0FBSyxJQUFJUCxHQUFHLENBQUNPLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDakQsTUFBTUEsTUFBTSxHQUFHUCxHQUFHLENBQUNPLE1BQU07UUFDekIsTUFBTUMsU0FBUyxHQUFHUixHQUFHLENBQUNTLElBQUk7UUFFMUIsSUFBSTtZQUNGLE1BQU1DLE1BQU0sR0FBRyxNQUFNWiw0Q0FBSyxDQUFDO2dCQUN6QlMsTUFBTSxFQUFFQSxNQUFNO2dCQUNkSixHQUFHO2dCQUNIUSxPQUFPLEVBQUU7b0JBQ1AsY0FBYyxFQUFFLGtCQUFrQjtpQkFDbkM7Z0JBQ0QsR0FBSUgsU0FBUyxJQUFJO29CQUFFSSxJQUFJLEVBQUVKLFNBQVM7aUJBQUU7Z0JBQ3BDLEdBQUlOLEtBQUssSUFBSTtvQkFBRVcsTUFBTSxFQUFFWCxLQUFLO2lCQUFFO2FBQy9CLENBQUM7WUFDRkQsR0FBRyxDQUFDYSxNQUFNLENBQUNKLE1BQU0sQ0FBQ0ksTUFBTSxDQUFDLENBQUNDLElBQUksQ0FBQ0wsTUFBTSxDQUFDRSxJQUFJLENBQUMsQ0FBQztZQUM1QyxPQUFPO1FBQ1QsRUFBRSxPQUFPSSxHQUFHLEVBQUU7WUFDWmYsR0FBRyxDQUFDYSxNQUFNLENBQUNFLEdBQUcsRUFBRUMsUUFBUSxFQUFFSCxNQUFNLElBQUksR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFDNUNELE1BQU0sRUFBRSxPQUFPO2dCQUNmSSxLQUFLLEVBQUVGLEdBQUcsRUFBRUMsUUFBUSxFQUFFTCxJQUFJLEVBQUVPLE9BQU8sSUFBSUgsR0FBRyxDQUFDRyxPQUFPO2FBQ25ELENBQUMsQ0FBQztZQUNILE9BQU87UUFDVCxDQUFDO0lBQ0gsT0FBTztRQUNMbEIsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFRCxNQUFNLEVBQUUsb0JBQW9CO1NBQUUsQ0FBQyxDQUFDO1FBQ3ZELE9BQU87SUFDVCxDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlZixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0MS8uL3BhZ2VzL2FwaS9wcm9kdWN0cy9pbmRleC5qcz81OTczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgcXVlcnkgPSByZXEucXVlcnk7XHJcbiAgY29uc3QgdXJsID0gYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3Byb2R1Y3RzYDtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIiB8fCByZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgY29uc3QgbWV0aG9kID0gcmVxLm1ldGhvZDtcclxuICAgIGNvbnN0IGlucHV0RGF0YSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAuLi4oaW5wdXREYXRhICYmIHsgZGF0YTogaW5wdXREYXRhIH0pLFxyXG4gICAgICAgIC4uLihxdWVyeSAmJiB7IHBhcmFtczogcXVlcnkgfSksXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXMuc3RhdHVzKHJlc3VsdC5zdGF0dXMpLmpzb24ocmVzdWx0LmRhdGEpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmVzLnN0YXR1cyhlcnI/LnJlc3BvbnNlPy5zdGF0dXMgfHwgNTAwKS5qc29uKHtcclxuICAgICAgICBzdGF0dXM6IFwiZXJyb3JcIixcclxuICAgICAgICBlcnJvcjogZXJyPy5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZSB8fCBlcnIubWVzc2FnZSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBzdGF0dXM6IFwiTWV0aG9kIE5vdCBBbGxvd2VkXCIgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicXVlcnkiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiQkFDS0VORF9VUkwiLCJtZXRob2QiLCJpbnB1dERhdGEiLCJib2R5IiwicmVzdWx0IiwiaGVhZGVycyIsImRhdGEiLCJwYXJhbXMiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwicmVzcG9uc2UiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products/index.js"));
module.exports = __webpack_exports__;

})();