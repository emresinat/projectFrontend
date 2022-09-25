"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/orders/[...slug]",{

/***/ "./pages/orders/[...slug].js":
/*!***********************************!*\
  !*** ./pages/orders/[...slug].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ OrdersSlug; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSP = true;\nfunction OrdersSlug() {\n    var _this = this;\n    var ref;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref1[0], setIsLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), loading = ref2[0], setLoading = ref2[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), order = ref3[0], setOrder = ref3[1];\n    var orderId = router === null || router === void 0 ? void 0 : (ref = router.query) === null || ref === void 0 ? void 0 : ref.slug[0];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)().then(function(session) {\n            if (!session) {\n                router.replace(\"/login\");\n            } else {\n                setIsLoading(false);\n            }\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref;\n        setLoading(true);\n        fetch(\"/api/orders/\".concat(router === null || router === void 0 ? void 0 : (ref = router.query) === null || ref === void 0 ? void 0 : ref.slug[0])).then(function(res) {\n            return res.json();\n        }).then(function(res) {\n            setOrder(res);\n        }).catch(function(err) {\n            console.log(err);\n        }).finally(function() {\n            setLoading(false);\n        });\n    }, []);\n    var getOrder = function() {\n        if (!order || (order === null || order === void 0 ? void 0 : order.length) === 0) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"No order can be found with that id\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\[...slug].js\",\n                lineNumber: 39,\n                columnNumber: 14\n            }, _this);\n        } else {\n            var totalPrice = 0;\n            order === null || order === void 0 ? void 0 : order.forEach(function(product) {\n                totalPrice += product === null || product === void 0 ? void 0 : product.productPrice;\n            });\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().orderTable),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().orderHeader),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().orderHeaderItem),\n                                children: [\n                                    \"OrderId- \",\n                                    order === null || order === void 0 ? void 0 : order.userOderId\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\[...slug].js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().orderHeaderItem),\n                                children: [\n                                    \"TotalPrice -\",\n                                    \" \",\n                                    order && (order === null || order === void 0 ? void 0 : order.length) !== 0 ? totalPrice : 0\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\[...slug].js\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\[...slug].js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, _this),\n                    order === null || order === void 0 ? void 0 : order.map(function(product) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                marginTop: \"0.5rem\",\n                                textAlign: \"center\"\n                            },\n                            children: [\n                                product === null || product === void 0 ? void 0 : product.productName,\n                                \"-\",\n                                product === null || product === void 0 ? void 0 : product.productPrice,\n                                \"$\"\n                            ]\n                        }, product === null || product === void 0 ? void 0 : product.productName, true, {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\[...slug].js\",\n                            lineNumber: 56,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\[...slug].js\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, _this);\n        }\n    };\n    if (isLoading || loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().loading),\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\[...slug].js\",\n            lineNumber: 70,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().productTable),\n            children: getOrder()\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\[...slug].js\",\n            lineNumber: 75,\n            columnNumber: 8\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\[...slug].js\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n};\n_s(OrdersSlug, \"DvRT+eVHxksP42aTHP2QBn+VSEM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = OrdersSlug;\nvar _c;\n$RefreshReg$(_c, \"OrdersSlug\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEQ7OzJCQUpPRCxPQUFPLGFBQVBBLE9BQU8sV0FBYSxHQUFwQkEsS0FBQUEsQ0FBb0IsR0FBcEJBLE9BQU8sQ0FBRVcsV0FBVzs7OztpQ0FJckIsQ0FDTjtvQkFDSixDQUFDLENBQUM7Ozs7OztxQkFDRSxDQUNOO1FBQ0osQ0FBQztJQUNILENBQUM7SUFFRCxJQUFJcEMsU0FBUyxJQUFJRSxPQUFPLEVBQUU7UUFDeEIscUJBQU8sOERBQUNvQixLQUFHO1lBQUNLLFNBQVMsRUFBRWxDLHdFQUFjO3NCQUFFLFlBQVU7Ozs7O2dCQUFNLENBQUM7SUFDMUQsQ0FBQztJQUVELHFCQUNFLDhEQUFDNkIsS0FBRztRQUFDSyxTQUFTLEVBQUVsQywwRUFBZ0I7a0JBQzdCLDRFQUFDNkIsS0FBRztZQUFDSyxTQUFTLEVBQUVsQyw2RUFBbUI7c0JBQUcyQixRQUFRLEVBQUU7Ozs7O2dCQUFPOzs7OztZQUNwRCxDQUNOO0FBQ0osQ0FBQztHQXhFdUJ0QixVQUFVOztRQUdqQkQsa0RBQVM7OztBQUhGQyxLQUFBQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL29yZGVycy9bLi4uc2x1Z10uanM/Njc3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9yZGVyc1NsdWcoKSB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtvcmRlciwgc2V0T3JkZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3Qgb3JkZXJJZCA9IHJvdXRlcj8ucXVlcnk/LnNsdWdbMF1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFNlc3Npb24oKS50aGVuKChzZXNzaW9uKSA9PiB7XHJcbiAgICAgIGlmICghc2Vzc2lvbikge1xyXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2xvZ2luXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBmZXRjaChgL2FwaS9vcmRlcnMvJHtyb3V0ZXI/LnF1ZXJ5Py5zbHVnWzBdfWApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRPcmRlcihyZXMpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3QgZ2V0T3JkZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAoIW9yZGVyIHx8IG9yZGVyPy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIDxkaXY+Tm8gb3JkZXIgY2FuIGJlIGZvdW5kIHdpdGggdGhhdCBpZDwvZGl2PjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCB0b3RhbFByaWNlID0gMDtcclxuICAgICAgb3JkZXI/LmZvckVhY2goKHByb2R1Y3QpID0+IHtcclxuICAgICAgICB0b3RhbFByaWNlICs9IHByb2R1Y3Q/LnByb2R1Y3RQcmljZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcmRlclRhYmxlfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3JkZXJIZWFkZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVySGVhZGVySXRlbX0+T3JkZXJJZC0ge29yZGVyPy51c2VyT2RlcklkfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVySGVhZGVySXRlbX0+XHJcbiAgICAgICAgICAgICAgVG90YWxQcmljZSAte1wiIFwifVxyXG4gICAgICAgICAgICAgIHtvcmRlciAmJiBvcmRlcj8ubGVuZ3RoICE9PSAwID8gdG90YWxQcmljZSA6IDB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7b3JkZXI/Lm1hcCgocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGtleT17cHJvZHVjdD8ucHJvZHVjdE5hbWV9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMC41cmVtXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0Py5wcm9kdWN0TmFtZX0te3Byb2R1Y3Q/LnByb2R1Y3RQcmljZX0kXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoaXNMb2FkaW5nIHx8IGxvYWRpbmcpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmd9PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICB7PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0VGFibGV9PntnZXRPcmRlcigpfTwvZGl2Pn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxOiBjb250ZXh0LnJlcSB9KTtcclxuICBpZiAoIXNlc3Npb24pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgZGVzdGluYXRpb246IFwiL2xvZ2luXCIsXHJcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHNlc3Npb24sXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsInN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlUm91dGVyIiwiT3JkZXJzU2x1ZyIsInJvdXRlciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib3JkZXIiLCJzZXRPcmRlciIsIm9yZGVySWQiLCJxdWVyeSIsInNsdWciLCJ0aGVuIiwic2Vzc2lvbiIsInJlcGxhY2UiLCJmZXRjaCIsInJlcyIsImpzb24iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJmaW5hbGx5IiwiZ2V0T3JkZXIiLCJsZW5ndGgiLCJkaXYiLCJ0b3RhbFByaWNlIiwiZm9yRWFjaCIsInByb2R1Y3QiLCJwcm9kdWN0UHJpY2UiLCJjbGFzc05hbWUiLCJvcmRlclRhYmxlIiwib3JkZXJIZWFkZXIiLCJvcmRlckhlYWRlckl0ZW0iLCJ1c2VyT2RlcklkIiwibWFwIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJ0ZXh0QWxpZ24iLCJwcm9kdWN0TmFtZSIsImNvbnRhaW5lciIsInByb2R1Y3RUYWJsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/orders/[...slug].js\n"));

/***/ })

});