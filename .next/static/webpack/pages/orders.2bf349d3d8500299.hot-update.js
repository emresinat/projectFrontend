"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/orders",{

/***/ "./pages/orders/index.js":
/*!*******************************!*\
  !*** ./pages/orders/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Orders; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSP = true;\nfunction Orders() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), loading = ref1[0], setLoading = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), session = ref2[0], setSession = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), orders = ref3[0], setOrders = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)().then(function(session) {\n            if (!session) {\n                router.replace(\"/login\");\n            } else {\n                setSession(session);\n                setIsLoading(false);\n            }\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref;\n        if ((ref = session.user) === null || ref === void 0 ? void 0 : ref.id) {\n            setLoading(true);\n            fetch(\"api/orders\").then(function(res) {\n                return res.json();\n            }).then(function(res) {\n                if (!res || (res === null || res === void 0 ? void 0 : res.length) === 0) {\n                    setOrders(null);\n                } else {\n                    var orders = res.reduce(function(orders, item) {\n                        var order = orders[item.userOrderId] || [];\n                        order.push(item);\n                        orders[item.userOrderId] = order;\n                        return orders;\n                    }, {});\n                    setOrders(orders);\n                }\n            }).catch(function(err) {\n                console.log(err);\n            }).finally(function() {\n                setLoading(false);\n            });\n        }\n    }, [\n        session.user\n    ]);\n    var getOrders = function() {\n        if (!orders) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"No orders can be found\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\index.js\",\n                lineNumber: 52,\n                columnNumber: 14\n            }, _this);\n        } else {\n            var orderIds = Object.keys(orders);\n            return orderIds === null || orderIds === void 0 ? void 0 : orderIds.map(function(orderId) {\n                var orderProducts = orders[orderId];\n                var totalPrice = 0;\n                orderProducts === null || orderProducts === void 0 ? void 0 : orderProducts.forEach(function(product) {\n                    totalPrice += product === null || product === void 0 ? void 0 : product.productPrice;\n                });\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().orderTable),\n                    onClick: function(e) {\n                        router.push(\"orders/\".concat(orderId));\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().orderHeader),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().orderHeaderItem),\n                                    children: [\n                                        \"OrderId- \",\n                                        orderId\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\index.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().orderHeaderItem),\n                                    children: [\n                                        \"TotalPrice -\",\n                                        \" \",\n                                        orderProducts && (orderProducts === null || orderProducts === void 0 ? void 0 : orderProducts.length) !== 0 ? totalPrice : 0\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\index.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\index.js\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, _this),\n                        orderProducts === null || orderProducts === void 0 ? void 0 : orderProducts.map(function(product) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    marginTop: \"0.5rem\",\n                                    textAlign: \"center\"\n                                },\n                                children: [\n                                    product === null || product === void 0 ? void 0 : product.productName,\n                                    \"-\",\n                                    product === null || product === void 0 ? void 0 : product.productPrice,\n                                    \"$\"\n                                ]\n                            }, \"\".concat(product === null || product === void 0 ? void 0 : product.productName, \"-\").concat(orderId), true, {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\index.js\",\n                                lineNumber: 78,\n                                columnNumber: 17\n                            }, _this);\n                        })\n                    ]\n                }, orderId, true, {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\index.js\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, _this);\n            });\n        }\n    };\n    if (isLoading || loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().loading),\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\index.js\",\n            lineNumber: 93,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().productTable),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().productTableHeader),\n                        children: \"All Orders\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\index.js\",\n                        lineNumber: 101,\n                        columnNumber: 13\n                    }, this),\n                    getOrders()\n                ]\n            }, void 0, true)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\index.js\",\n            lineNumber: 99,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\index.js\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, this);\n};\n_s(Orders, \"1LGFhVm4VOXE9qBcm6wd/SD0DYc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Orders;\nvar _c;\n$RefreshReg$(_c, \"Orders\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztnQkFBTSxDQUFDO0lBQzFELENBQUM7SUFFRCxxQkFDRSw4REFBQ2lDLEtBQUc7UUFBQ1csU0FBUyxFQUFFNUMsMEVBQWdCO2tCQUU1Qiw0RUFBQ2lDLEtBQUc7WUFBQ1csU0FBUyxFQUFFNUMsNkVBQW1CO3NCQUNqQzs7a0NBQ0UsOERBQUNpQyxLQUFHO3dCQUFDVyxTQUFTLEVBQUU1QyxtRkFBeUI7a0NBQUUsWUFBVTs7Ozs7NEJBQU07b0JBQzFEZ0MsU0FBUyxFQUFFOzs0QkFDWDs7Ozs7Z0JBQ0M7Ozs7O1lBRUosQ0FDTjtBQUNKLENBQUM7R0F0R3VCNUIsTUFBTTs7UUFHYkQsa0RBQVM7OztBQUhGQyxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL29yZGVycy9pbmRleC5qcz8xMjJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9yZGVycygpIHtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3Nlc3Npb24sIHNldFNlc3Npb25dID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtvcmRlcnMsIHNldE9yZGVyc10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFNlc3Npb24oKS50aGVuKChzZXNzaW9uKSA9PiB7XHJcbiAgICAgIGlmICghc2Vzc2lvbikge1xyXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2xvZ2luXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFNlc3Npb24oc2Vzc2lvbik7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNlc3Npb24udXNlcj8uaWQpIHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgZmV0Y2goYGFwaS9vcmRlcnNgKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgaWYgKCFyZXMgfHwgcmVzPy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgc2V0T3JkZXJzKG51bGwpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgb3JkZXJzID0gcmVzLnJlZHVjZSgob3JkZXJzLCBpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgb3JkZXIgPSBvcmRlcnNbaXRlbS51c2VyT3JkZXJJZF0gfHwgW107XHJcbiAgICAgICAgICAgICAgb3JkZXIucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICBvcmRlcnNbaXRlbS51c2VyT3JkZXJJZF0gPSBvcmRlcjtcclxuICAgICAgICAgICAgICByZXR1cm4gb3JkZXJzO1xyXG4gICAgICAgICAgICB9LCB7fSk7XHJcbiAgICAgICAgICAgIHNldE9yZGVycyhvcmRlcnMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbc2Vzc2lvbi51c2VyXSk7XHJcbiAgY29uc3QgZ2V0T3JkZXJzID0gKCkgPT4ge1xyXG4gICAgaWYgKCFvcmRlcnMpIHtcclxuICAgICAgcmV0dXJuIDxkaXY+Tm8gb3JkZXJzIGNhbiBiZSBmb3VuZDwvZGl2PjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG9yZGVySWRzID0gT2JqZWN0LmtleXMob3JkZXJzKTtcclxuICAgICAgcmV0dXJuIG9yZGVySWRzPy5tYXAoKG9yZGVySWQpID0+IHtcclxuICAgICAgICBjb25zdCBvcmRlclByb2R1Y3RzID0gb3JkZXJzW29yZGVySWRdO1xyXG4gICAgICAgIGxldCB0b3RhbFByaWNlID0gMDtcclxuICAgICAgICBvcmRlclByb2R1Y3RzPy5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgICB0b3RhbFByaWNlICs9IHByb2R1Y3Q/LnByb2R1Y3RQcmljZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBrZXk9e29yZGVySWR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyVGFibGV9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goYG9yZGVycy8ke29yZGVySWR9YCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3JkZXJIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3JkZXJIZWFkZXJJdGVtfT5PcmRlcklkLSB7b3JkZXJJZH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVySGVhZGVySXRlbX0+XHJcbiAgICAgICAgICAgICAgICBUb3RhbFByaWNlIC17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7b3JkZXJQcm9kdWN0cyAmJiBvcmRlclByb2R1Y3RzPy5sZW5ndGggIT09IDAgPyB0b3RhbFByaWNlIDogMH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtvcmRlclByb2R1Y3RzPy5tYXAoKHByb2R1Y3QpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2Ake3Byb2R1Y3Q/LnByb2R1Y3ROYW1lfS0ke29yZGVySWR9YH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjAuNXJlbVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3Byb2R1Y3Q/LnByb2R1Y3ROYW1lfS17cHJvZHVjdD8ucHJvZHVjdFByaWNlfSRcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZyB8fCBsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkaW5nfT5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAge1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdFRhYmxlfT5cclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdFRhYmxlSGVhZGVyfT5BbGwgT3JkZXJzPC9kaXY+XHJcbiAgICAgICAgICAgIHtnZXRPcmRlcnMoKX1cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcTogY29udGV4dC5yZXEgfSk7XHJcbiAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uOiBcIi9sb2dpblwiLFxyXG4gICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiBzZXNzaW9uLFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIk9yZGVycyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwic2Vzc2lvbiIsInNldFNlc3Npb24iLCJvcmRlcnMiLCJzZXRPcmRlcnMiLCJ0aGVuIiwicmVwbGFjZSIsInVzZXIiLCJpZCIsImZldGNoIiwicmVzIiwianNvbiIsImxlbmd0aCIsInJlZHVjZSIsIml0ZW0iLCJvcmRlciIsInVzZXJPcmRlcklkIiwicHVzaCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImZpbmFsbHkiLCJnZXRPcmRlcnMiLCJkaXYiLCJvcmRlcklkcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJvcmRlcklkIiwib3JkZXJQcm9kdWN0cyIsInRvdGFsUHJpY2UiLCJmb3JFYWNoIiwicHJvZHVjdCIsInByb2R1Y3RQcmljZSIsImNsYXNzTmFtZSIsIm9yZGVyVGFibGUiLCJvbkNsaWNrIiwiZSIsIm9yZGVySGVhZGVyIiwib3JkZXJIZWFkZXJJdGVtIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJ0ZXh0QWxpZ24iLCJwcm9kdWN0TmFtZSIsImNvbnRhaW5lciIsInByb2R1Y3RUYWJsZSIsInByb2R1Y3RUYWJsZUhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/orders/index.js\n"));

/***/ })

});