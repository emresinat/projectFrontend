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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ OrdersSlug; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSP = true;\nfunction OrdersSlug() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), loading = ref1[0], setLoading = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), order = ref2[0], setOrder = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)().then(function(session) {\n            if (!session) {\n                router.replace(\"/login\");\n            } else {\n                setIsLoading(false);\n            }\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref;\n        setLoading(true);\n        fetch(\"/api/orders/\".concat(router === null || router === void 0 ? void 0 : (ref = router.query) === null || ref === void 0 ? void 0 : ref.slug[0])).then(function(res) {\n            return res.json();\n        }).then(function(res) {\n            setOrder(res);\n        }).catch(function(err) {\n            console.log(err);\n        }).finally(function() {\n            setLoading(false);\n        });\n    }, []);\n    var getOrder = function() {\n        if (!order || (order === null || order === void 0 ? void 0 : order.length) === 0) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"No order can be found with that id\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\[...slug].js\",\n                lineNumber: 38,\n                columnNumber: 14\n            }, _this);\n        } else {\n            var totalPrice = 0;\n            order === null || order === void 0 ? void 0 : order.forEach(function(product) {\n                totalPrice += product === null || product === void 0 ? void 0 : product.productPrice;\n            });\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().orderTable),\n                onClick: function(e) {\n                    router.push(\"orders/\".concat(order === null || order === void 0 ? void 0 : order.userOrderId));\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().orderHeader),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().orderHeaderItem),\n                                children: [\n                                    \"OrderId- \",\n                                    order === null || order === void 0 ? void 0 : order.userOderId\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\[...slug].js\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().orderHeaderItem),\n                                children: [\n                                    \"TotalPrice -\",\n                                    \" \",\n                                    order && (order === null || order === void 0 ? void 0 : order.length) !== 0 ? totalPrice : 0\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\[...slug].js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\[...slug].js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, _this),\n                    order === null || order === void 0 ? void 0 : order.map(function(product) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                marginTop: \"0.5rem\",\n                                textAlign: \"center\"\n                            },\n                            children: [\n                                product === null || product === void 0 ? void 0 : product.productName,\n                                \"-\",\n                                product === null || product === void 0 ? void 0 : product.productPrice,\n                                \"$\"\n                            ]\n                        }, product === null || product === void 0 ? void 0 : product.productName, true, {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\[...slug].js\",\n                            lineNumber: 55,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\[...slug].js\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, _this);\n        }\n    };\n    if (isLoading || loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().loading),\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\[...slug].js\",\n            lineNumber: 69,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().productTable),\n            children: getOrder()\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\[...slug].js\",\n            lineNumber: 74,\n            columnNumber: 8\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\mdp\\\\frontEndProject\\\\pages\\\\orders\\\\[...slug].js\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n};\n_s(OrdersSlug, \"DvRT+eVHxksP42aTHP2QBn+VSEM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = OrdersSlug;\nvar _c;\n$RefreshReg$(_c, \"OrdersSlug\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxhQUFQQSxPQUFPLFdBQWEsR0FBcEJBLEtBQUFBLENBQW9CLEdBQXBCQSxPQUFPLENBQUVlLFdBQVc7Ozs7aUNBSXJCLENBQ047b0JBQ0osQ0FBQyxDQUFDOzs7Ozs7cUJBQ0UsQ0FDTjtRQUNKLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSXhDLFNBQVMsSUFBSUUsT0FBTyxFQUFFO1FBQ3hCLHFCQUFPLDhEQUFDb0IsS0FBRztZQUFDSyxTQUFTLEVBQUVqQyx3RUFBYztzQkFBRSxZQUFVOzs7OztnQkFBTSxDQUFDO0lBQzFELENBQUM7SUFFRCxxQkFDRSw4REFBQzRCLEtBQUc7UUFBQ0ssU0FBUyxFQUFFakMsMEVBQWdCO2tCQUM3Qiw0RUFBQzRCLEtBQUc7WUFBQ0ssU0FBUyxFQUFFakMsNkVBQW1CO3NCQUFHMEIsUUFBUSxFQUFFOzs7OztnQkFBTzs7Ozs7WUFDcEQsQ0FDTjtBQUNKLENBQUM7R0F2RXVCckIsVUFBVTs7UUFHakJELGtEQUFTOzs7QUFIRkMsS0FBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9vcmRlcnMvWy4uLnNsdWddLmpzPzY3N2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcmRlcnNTbHVnKCkge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbb3JkZXIsIHNldE9yZGVyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0U2Vzc2lvbigpLnRoZW4oKHNlc3Npb24pID0+IHtcclxuICAgICAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvbG9naW5cIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIGZldGNoKGAvYXBpL29yZGVycy8ke3JvdXRlcj8ucXVlcnk/LnNsdWdbMF19YClcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldE9yZGVyKHJlcylcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBnZXRPcmRlciA9ICgpID0+IHtcclxuICAgIGlmICghb3JkZXIgfHwgb3JkZXI/Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gPGRpdj5ObyBvcmRlciBjYW4gYmUgZm91bmQgd2l0aCB0aGF0IGlkPC9kaXY+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHRvdGFsUHJpY2UgPSAwO1xyXG4gICAgICBvcmRlcj8uZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgIHRvdGFsUHJpY2UgKz0gcHJvZHVjdD8ucHJvZHVjdFByaWNlO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyVGFibGV9IG9uQ2xpY2s9e2UgPT4ge3JvdXRlci5wdXNoKGBvcmRlcnMvJHtvcmRlcj8udXNlck9yZGVySWR9YCl9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3JkZXJIZWFkZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVySGVhZGVySXRlbX0+T3JkZXJJZC0ge29yZGVyPy51c2VyT2RlcklkfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVySGVhZGVySXRlbX0+XHJcbiAgICAgICAgICAgICAgVG90YWxQcmljZSAte1wiIFwifVxyXG4gICAgICAgICAgICAgIHtvcmRlciAmJiBvcmRlcj8ubGVuZ3RoICE9PSAwID8gdG90YWxQcmljZSA6IDB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7b3JkZXI/Lm1hcCgocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGtleT17cHJvZHVjdD8ucHJvZHVjdE5hbWV9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMC41cmVtXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0Py5wcm9kdWN0TmFtZX0te3Byb2R1Y3Q/LnByb2R1Y3RQcmljZX0kXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoaXNMb2FkaW5nIHx8IGxvYWRpbmcpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmd9PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICB7PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0VGFibGV9PntnZXRPcmRlcigpfTwvZGl2Pn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxOiBjb250ZXh0LnJlcSB9KTtcclxuICBpZiAoIXNlc3Npb24pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgZGVzdGluYXRpb246IFwiL2xvZ2luXCIsXHJcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHNlc3Npb24sXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsInN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlUm91dGVyIiwiT3JkZXJzU2x1ZyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwib3JkZXIiLCJzZXRPcmRlciIsInRoZW4iLCJzZXNzaW9uIiwicmVwbGFjZSIsImZldGNoIiwicXVlcnkiLCJzbHVnIiwicmVzIiwianNvbiIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImZpbmFsbHkiLCJnZXRPcmRlciIsImxlbmd0aCIsImRpdiIsInRvdGFsUHJpY2UiLCJmb3JFYWNoIiwicHJvZHVjdCIsInByb2R1Y3RQcmljZSIsImNsYXNzTmFtZSIsIm9yZGVyVGFibGUiLCJvbkNsaWNrIiwiZSIsInB1c2giLCJ1c2VyT3JkZXJJZCIsIm9yZGVySGVhZGVyIiwib3JkZXJIZWFkZXJJdGVtIiwidXNlck9kZXJJZCIsIm1hcCIsInN0eWxlIiwibWFyZ2luVG9wIiwidGV4dEFsaWduIiwicHJvZHVjdE5hbWUiLCJjb250YWluZXIiLCJwcm9kdWN0VGFibGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/orders/[...slug].js\n"));

/***/ })

});