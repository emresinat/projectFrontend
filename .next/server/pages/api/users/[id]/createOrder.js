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
exports.id = "pages/api/users/[id]/createOrder";
exports.ids = ["pages/api/users/[id]/createOrder"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/users/[id]/createOrder/index.js":
/*!***************************************************!*\
  !*** ./pages/api/users/[id]/createOrder/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const id = req.query.id;\n    delete req.query.id;\n    const query = req.query;\n    const url = `${process.env.BACKEND_URL}/users/${id}/createOrder`;\n    if (req.method === \"POST\") {\n        const method = req.method;\n        const inputData = req.body;\n        try {\n            const result = await axios__WEBPACK_IMPORTED_MODULE_0___default()({\n                method: method,\n                url,\n                ...inputData && {\n                    data: inputData\n                },\n                ...query && {\n                    params: query\n                }\n            });\n            res.status(result.status).json(result.data);\n            return;\n        } catch (err) {\n            res.status(err?.response?.status || 500).json({\n                status: \"error\",\n                error: err?.response?.data?.message || err.message,\n                data: err?.response?.data?.data,\n                errorCode: err?.response?.data?.errorCode\n            });\n            return;\n        }\n    } else {\n        res.status(405).json({\n            status: \"Method Not Allowed\"\n        });\n        return;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvW2lkXS9jcmVhdGVPcmRlci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFFMUIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMvQixNQUFNQyxFQUFFLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSyxDQUFDRCxFQUFFO0lBQ3ZCLE9BQU9GLEdBQUcsQ0FBQ0csS0FBSyxDQUFDRCxFQUFFLENBQUM7SUFDcEIsTUFBTUMsS0FBSyxHQUFHSCxHQUFHLENBQUNHLEtBQUs7SUFDdkIsTUFBTUMsR0FBRyxHQUFHLENBQUMsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVcsQ0FBQyxPQUFPLEVBQUVMLEVBQUUsQ0FBQyxZQUFZLENBQUM7SUFDaEUsSUFBSUYsR0FBRyxDQUFDUSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE1BQU1BLE1BQU0sR0FBR1IsR0FBRyxDQUFDUSxNQUFNO1FBQ3pCLE1BQU1DLFNBQVMsR0FBR1QsR0FBRyxDQUFDVSxJQUFJO1FBQzFCLElBQUk7WUFDRixNQUFNQyxNQUFNLEdBQUcsTUFBTWIsNENBQUssQ0FBQztnQkFDekJVLE1BQU0sRUFBRUEsTUFBTTtnQkFDZEosR0FBRztnQkFDSCxHQUFJSyxTQUFTLElBQUk7b0JBQUVHLElBQUksRUFBRUgsU0FBUztpQkFBRTtnQkFDcEMsR0FBSU4sS0FBSyxJQUFJO29CQUFFVSxNQUFNLEVBQUVWLEtBQUs7aUJBQUU7YUFDL0IsQ0FBQztZQUNGRixHQUFHLENBQUNhLE1BQU0sQ0FBQ0gsTUFBTSxDQUFDRyxNQUFNLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSixNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFDO1lBQzVDLE9BQU87UUFDVCxFQUFFLE9BQU9JLEdBQUcsRUFBRTtZQUNaZixHQUFHLENBQUNhLE1BQU0sQ0FBQ0UsR0FBRyxFQUFFQyxRQUFRLEVBQUVILE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUM1Q0QsTUFBTSxFQUFFLE9BQU87Z0JBQ2ZJLEtBQUssRUFBRUYsR0FBRyxFQUFFQyxRQUFRLEVBQUVMLElBQUksRUFBRU8sT0FBTyxJQUFJSCxHQUFHLENBQUNHLE9BQU87Z0JBQ2xEUCxJQUFJLEVBQUVJLEdBQUcsRUFBRUMsUUFBUSxFQUFFTCxJQUFJLEVBQUVBLElBQUk7Z0JBQy9CUSxTQUFTLEVBQUVKLEdBQUcsRUFBRUMsUUFBUSxFQUFFTCxJQUFJLEVBQUVRLFNBQVM7YUFDMUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTztRQUNULENBQUM7SUFDSCxPQUFPO1FBQ0xuQixHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVELE1BQU0sRUFBRSxvQkFBb0I7U0FBRSxDQUFDLENBQUM7UUFDdkQsT0FBTztJQUNULENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVmLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QxLy4vcGFnZXMvYXBpL3VzZXJzL1tpZF0vY3JlYXRlT3JkZXIvaW5kZXguanM/NGNjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgaWQgPSByZXEucXVlcnkuaWQ7XHJcbiAgZGVsZXRlIHJlcS5xdWVyeS5pZDtcclxuICBjb25zdCBxdWVyeSA9IHJlcS5xdWVyeTtcclxuICBjb25zdCB1cmwgPSBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vdXNlcnMvJHtpZH0vY3JlYXRlT3JkZXJgO1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgY29uc3QgbWV0aG9kID0gcmVxLm1ldGhvZDtcclxuICAgIGNvbnN0IGlucHV0RGF0YSA9IHJlcS5ib2R5O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICAuLi4oaW5wdXREYXRhICYmIHsgZGF0YTogaW5wdXREYXRhIH0pLFxyXG4gICAgICAgIC4uLihxdWVyeSAmJiB7IHBhcmFtczogcXVlcnkgfSksXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXMuc3RhdHVzKHJlc3VsdC5zdGF0dXMpLmpzb24ocmVzdWx0LmRhdGEpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmVzLnN0YXR1cyhlcnI/LnJlc3BvbnNlPy5zdGF0dXMgfHwgNTAwKS5qc29uKHtcclxuICAgICAgICBzdGF0dXM6IFwiZXJyb3JcIixcclxuICAgICAgICBlcnJvcjogZXJyPy5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZSB8fCBlcnIubWVzc2FnZSxcclxuICAgICAgICBkYXRhOiBlcnI/LnJlc3BvbnNlPy5kYXRhPy5kYXRhLFxyXG4gICAgICAgIGVycm9yQ29kZTogZXJyPy5yZXNwb25zZT8uZGF0YT8uZXJyb3JDb2RlLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IHN0YXR1czogXCJNZXRob2QgTm90IEFsbG93ZWRcIiB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbImF4aW9zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImlkIiwicXVlcnkiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiQkFDS0VORF9VUkwiLCJtZXRob2QiLCJpbnB1dERhdGEiLCJib2R5IiwicmVzdWx0IiwiZGF0YSIsInBhcmFtcyIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJyZXNwb25zZSIsImVycm9yIiwibWVzc2FnZSIsImVycm9yQ29kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/[id]/createOrder/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/[id]/createOrder/index.js"));
module.exports = __webpack_exports__;

})();