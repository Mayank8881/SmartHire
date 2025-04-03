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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=D%3A%5CNextJS%5CSmartHire%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNextJS%5CSmartHire&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=D%3A%5CNextJS%5CSmartHire%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNextJS%5CSmartHire&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_NextJS_SmartHire_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"D:\\\\NextJS\\\\SmartHire\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: D_NextJS_SmartHire_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDTmV4dEpTJTVDU21hcnRIaXJlJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1EJTNBJTVDTmV4dEpTJTVDU21hcnRIaXJlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNjO0FBQzNGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc21hcnRoaXJlLz9jZWQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXE5leHRKU1xcXFxTbWFydEhpcmVcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcTmV4dEpTXFxcXFNtYXJ0SGlyZVxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=D%3A%5CNextJS%5CSmartHire%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNextJS%5CSmartHire&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/user */ \"(rsc)/./models/user.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_4__);\n// import { connectDB } from \"@/lib/mongodb\";\n// import User from \"@/models/user\";\n// import { startSession } from \"mongoose\";\n// import NextAuth from \"next-auth\";\n// import CredentialsProvider from \"next-auth/providers/credentials\"\n// import bcrypt from \"bcryptjs\"\n// export const authOptions={\n//     providers:[\n//         CredentialsProvider({\n//             name:\"credentials\",\n//             credentials:{},\n//             async authorize(credentials){\n//                 const {email,password}=credentials;\n//                 try {\n//                     await connectDB();\n//                     const user=await User.findOne({email})\n//                     if(!user){\n//                         return null;\n//                     }\n//                     const passwordmatch=await bcrypt.compare(password,user.password)\n//                     if(!passwordmatch){\n//                         return null;\n//                     }\n//                     return user;\n//                 } catch (error) {\n//                     console.log(\"Errorrr \",error)\n//                 }\n//             }\n//         }),\n//     ],\n//     session: {\n//         strategy: \"jwt\",\n//         maxAge: 30*60, // Session expires in 30 min\n//         updateAge: 15 * 60, // Extend session every 15 minutes\n//       },\n//         secret:process.env.NEXTAUTH_SECRET,\n//         pages:{\n//             signIn:\"/sign-in\"\n//         }\n// }\n// const handler=NextAuth(authOptions);\n// export {handler as GET,handler as POST};\n\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            name: \"credentials\",\n            credentials: {},\n            async authorize (credentials) {\n                const { email, password } = credentials;\n                try {\n                    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectDB)();\n                    const user = await _models_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n                        email\n                    });\n                    if (!user) {\n                        return null;\n                    }\n                    const passwordMatch = await bcryptjs__WEBPACK_IMPORTED_MODULE_4___default().compare(password, user.password);\n                    if (!passwordMatch) {\n                        return null;\n                    }\n                    return user;\n                } catch (error) {\n                    console.log(\"Error \", error);\n                    return null;\n                }\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 60,\n        updateAge: 15 * 60\n    },\n    secret: process.env.NEXTAUTH_SECRET,\n    pages: {\n        signIn: \"/sign-in\"\n    },\n    callbacks: {\n        async redirect ({ url, baseUrl }) {\n            // Redirect to /ResumeLanding after successful login\n            if (url === \"/\") {\n                return `${baseUrl}/ResumeLanding`;\n            }\n            // For other URLs, proceed with the intended destination\n            return url.startsWith(baseUrl) ? url : baseUrl;\n        }\n    }\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_2___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTZDO0FBQzdDLG9DQUFvQztBQUNwQywyQ0FBMkM7QUFDM0Msb0NBQW9DO0FBQ3BDLG9FQUFvRTtBQUNwRSxnQ0FBZ0M7QUFFaEMsNkJBQTZCO0FBQzdCLGtCQUFrQjtBQUNsQixnQ0FBZ0M7QUFDaEMsa0NBQWtDO0FBQ2xDLDhCQUE4QjtBQUU5Qiw0Q0FBNEM7QUFDNUMsc0RBQXNEO0FBQ3RELHdCQUF3QjtBQUN4Qix5Q0FBeUM7QUFDekMsNkRBQTZEO0FBRTdELGlDQUFpQztBQUNqQyx1Q0FBdUM7QUFDdkMsd0JBQXdCO0FBRXhCLHVGQUF1RjtBQUN2RiwwQ0FBMEM7QUFDMUMsdUNBQXVDO0FBQ3ZDLHdCQUF3QjtBQUN4QixtQ0FBbUM7QUFDbkMsb0NBQW9DO0FBQ3BDLG9EQUFvRDtBQUNwRCxvQkFBb0I7QUFDcEIsZ0JBQWdCO0FBQ2hCLGNBQWM7QUFDZCxTQUFTO0FBQ1QsaUJBQWlCO0FBQ2pCLDJCQUEyQjtBQUMzQixzREFBc0Q7QUFDdEQsaUVBQWlFO0FBQ2pFLFdBQVc7QUFFWCw4Q0FBOEM7QUFDOUMsa0JBQWtCO0FBQ2xCLGdDQUFnQztBQUNoQyxZQUFZO0FBQ1osSUFBSTtBQUVKLHVDQUF1QztBQUN2QywyQ0FBMkM7QUFFRDtBQUNUO0FBQ0E7QUFDaUM7QUFDcEM7QUFFdkIsTUFBTUssY0FBYztJQUN2QkMsV0FBVztRQUNQSCwyRUFBbUJBLENBQUM7WUFDaEJJLE1BQU07WUFDTkMsYUFBYSxDQUFDO1lBQ2QsTUFBTUMsV0FBVUQsV0FBVztnQkFDdkIsTUFBTSxFQUFFRSxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHSDtnQkFDNUIsSUFBSTtvQkFDQSxNQUFNUix1REFBU0E7b0JBQ2YsTUFBTVksT0FBTyxNQUFNWCxvREFBSUEsQ0FBQ1ksT0FBTyxDQUFDO3dCQUFFSDtvQkFBTTtvQkFFeEMsSUFBSSxDQUFDRSxNQUFNO3dCQUNQLE9BQU87b0JBQ1g7b0JBRUEsTUFBTUUsZ0JBQWdCLE1BQU1WLHVEQUFjLENBQUNPLFVBQVVDLEtBQUtELFFBQVE7b0JBQ2xFLElBQUksQ0FBQ0csZUFBZTt3QkFDaEIsT0FBTztvQkFDWDtvQkFDQSxPQUFPRjtnQkFDWCxFQUFFLE9BQU9JLE9BQU87b0JBQ1pDLFFBQVFDLEdBQUcsQ0FBQyxVQUFVRjtvQkFDdEIsT0FBTztnQkFDWDtZQUNKO1FBQ0o7S0FDSDtJQUNERyxTQUFTO1FBQ0xDLFVBQVU7UUFDVkMsUUFBUSxLQUFLO1FBQ2JDLFdBQVcsS0FBSztJQUNwQjtJQUNBQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7SUFDbkNDLE9BQU87UUFDSEMsUUFBUTtJQUNaO0lBQ0FDLFdBQVc7UUFDUCxNQUFNQyxVQUFTLEVBQUVDLEdBQUcsRUFBRUMsT0FBTyxFQUFFO1lBQzNCLG9EQUFvRDtZQUNwRCxJQUFJRCxRQUFRLEtBQUs7Z0JBQ2IsT0FBTyxDQUFDLEVBQUVDLFFBQVEsY0FBYyxDQUFDO1lBQ3JDO1lBQ0Esd0RBQXdEO1lBQ3hELE9BQU9ELElBQUlFLFVBQVUsQ0FBQ0QsV0FBV0QsTUFBTUM7UUFDM0M7SUFDSjtBQUNKLEVBQUU7QUFFRixNQUFNRSxVQUFVaEMsZ0RBQVFBLENBQUNHO0FBQ2tCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc21hcnRoaXJlLy4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanM/ZGExYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBjb25uZWN0REIgfSBmcm9tIFwiQC9saWIvbW9uZ29kYlwiO1xyXG4vLyBpbXBvcnQgVXNlciBmcm9tIFwiQC9tb2RlbHMvdXNlclwiO1xyXG4vLyBpbXBvcnQgeyBzdGFydFNlc3Npb24gfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuLy8gaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuLy8gaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIlxyXG4vLyBpbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiXHJcblxyXG4vLyBleHBvcnQgY29uc3QgYXV0aE9wdGlvbnM9e1xyXG4vLyAgICAgcHJvdmlkZXJzOltcclxuLy8gICAgICAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuLy8gICAgICAgICAgICAgbmFtZTpcImNyZWRlbnRpYWxzXCIsXHJcbi8vICAgICAgICAgICAgIGNyZWRlbnRpYWxzOnt9LFxyXG5cclxuLy8gICAgICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKXtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IHtlbWFpbCxwYXNzd29yZH09Y3JlZGVudGlhbHM7XHJcbi8vICAgICAgICAgICAgICAgICB0cnkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXI9YXdhaXQgVXNlci5maW5kT25lKHtlbWFpbH0pXHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGlmKCF1c2VyKXtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXNzd29yZG1hdGNoPWF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLHVzZXIucGFzc3dvcmQpXHJcbi8vICAgICAgICAgICAgICAgICAgICAgaWYoIXBhc3N3b3JkbWF0Y2gpe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbi8vICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3JyciBcIixlcnJvcilcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH0pLFxyXG4vLyAgICAgXSxcclxuLy8gICAgIHNlc3Npb246IHtcclxuLy8gICAgICAgICBzdHJhdGVneTogXCJqd3RcIixcclxuLy8gICAgICAgICBtYXhBZ2U6IDMwKjYwLCAvLyBTZXNzaW9uIGV4cGlyZXMgaW4gMzAgbWluXHJcbi8vICAgICAgICAgdXBkYXRlQWdlOiAxNSAqIDYwLCAvLyBFeHRlbmQgc2Vzc2lvbiBldmVyeSAxNSBtaW51dGVzXHJcbi8vICAgICAgIH0sXHJcbiAgICAgIFxyXG4vLyAgICAgICAgIHNlY3JldDpwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXHJcbi8vICAgICAgICAgcGFnZXM6e1xyXG4vLyAgICAgICAgICAgICBzaWduSW46XCIvc2lnbi1pblwiXHJcbi8vICAgICAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBoYW5kbGVyPU5leHRBdXRoKGF1dGhPcHRpb25zKTtcclxuLy8gZXhwb3J0IHtoYW5kbGVyIGFzIEdFVCxoYW5kbGVyIGFzIFBPU1R9O1xyXG5cclxuaW1wb3J0IHsgY29ubmVjdERCIH0gZnJvbSBcIkAvbGliL21vbmdvZGJcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIkAvbW9kZWxzL3VzZXJcIjtcclxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICAgICAgICBuYW1lOiBcImNyZWRlbnRpYWxzXCIsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiB7fSxcclxuICAgICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gY3JlZGVudGlhbHM7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbCB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFzc3dvcmRNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhc3N3b3JkTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIFwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgIF0sXHJcbiAgICBzZXNzaW9uOiB7XHJcbiAgICAgICAgc3RyYXRlZ3k6IFwiand0XCIsXHJcbiAgICAgICAgbWF4QWdlOiAzMCAqIDYwLCBcclxuICAgICAgICB1cGRhdGVBZ2U6IDE1ICogNjAsIFxyXG4gICAgfSxcclxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxyXG4gICAgcGFnZXM6IHtcclxuICAgICAgICBzaWduSW46IFwiL3NpZ24taW5cIixcclxuICAgIH0sXHJcbiAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICBhc3luYyByZWRpcmVjdCh7IHVybCwgYmFzZVVybCB9KSB7XHJcbiAgICAgICAgICAgIC8vIFJlZGlyZWN0IHRvIC9SZXN1bWVMYW5kaW5nIGFmdGVyIHN1Y2Nlc3NmdWwgbG9naW5cclxuICAgICAgICAgICAgaWYgKHVybCA9PT0gXCIvXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHtiYXNlVXJsfS9SZXN1bWVMYW5kaW5nYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBGb3Igb3RoZXIgVVJMcywgcHJvY2VlZCB3aXRoIHRoZSBpbnRlbmRlZCBkZXN0aW5hdGlvblxyXG4gICAgICAgICAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgoYmFzZVVybCkgPyB1cmwgOiBiYXNlVXJsO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcclxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9O1xyXG4iXSwibmFtZXMiOlsiY29ubmVjdERCIiwiVXNlciIsIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsImJjcnlwdCIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiYXV0aG9yaXplIiwiZW1haWwiLCJwYXNzd29yZCIsInVzZXIiLCJmaW5kT25lIiwicGFzc3dvcmRNYXRjaCIsImNvbXBhcmUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJtYXhBZ2UiLCJ1cGRhdGVBZ2UiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwicGFnZXMiLCJzaWduSW4iLCJjYWxsYmFja3MiLCJyZWRpcmVjdCIsInVybCIsImJhc2VVcmwiLCJzdGFydHNXaXRoIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = async ()=>{\n    //if already connected\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections)[0].readyState) {\n        return (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);\n    }\n    //new connection\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\n        });\n        console.log(\"Connected to DB\");\n        return (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);\n    } catch (error) {\n        console.log(\"Error connecting to MongoDB:\", error);\n        throw new Error(\"Failed to connect to the database\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFekIsTUFBTUMsWUFBWTtJQUVyQixzQkFBc0I7SUFDeEIsSUFBSUQsNkRBQW9CLENBQUMsRUFBRSxDQUFDRyxVQUFVLEVBQUU7UUFDdEMsT0FBT0gsNERBQW1CO0lBQzVCO0lBQ0UsZ0JBQWdCO0lBQ2xCLElBQUk7UUFDRixNQUFNQSx1REFBZ0IsQ0FBQ00sUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUU7UUFHaEQ7UUFDQUMsUUFBUUMsR0FBRyxDQUFDO1FBQ1osT0FBT1YsNERBQW1CO0lBQzVCLEVBQUUsT0FBT1csT0FBTztRQUNkRixRQUFRQyxHQUFHLENBQUMsZ0NBQWdDQztRQUM1QyxNQUFNLElBQUlDLE1BQU07SUFDbEI7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc21hcnRoaXJlLy4vbGliL21vbmdvZGIuanM/ZDkyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbm5lY3REQiA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAvL2lmIGFscmVhZHkgY29ubmVjdGVkXHJcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpIHtcclxuICAgIHJldHVybiBtb25nb29zZS5jb25uZWN0aW9uO1xyXG4gIH1cclxuICAgIC8vbmV3IGNvbm5lY3Rpb25cclxuICB0cnkge1xyXG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSwge1xyXG4gICAgICAvLyB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgIC8vIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBEQicpO1xyXG4gICAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3Rpb247XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKCdFcnJvciBjb25uZWN0aW5nIHRvIE1vbmdvREI6JywgZXJyb3IpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY29ubmVjdCB0byB0aGUgZGF0YWJhc2UnKTtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3REQiIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.js\n");

/***/ }),

/***/ "(rsc)/./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true\n    },\n    password: {\n        type: String,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvdXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0Q7QUFFbEQsTUFBTUcsYUFBVyxJQUFJRCw0Q0FBTUEsQ0FBQztJQUN4QkUsTUFBSztRQUNEQyxNQUFLQztRQUNMQyxVQUFTO0lBQ2I7SUFDQUMsT0FBTTtRQUNGSCxNQUFLQztRQUNMQyxVQUFTO0lBQ2I7SUFDQUUsVUFBUztRQUNMSixNQUFLQztRQUNMQyxVQUFTO0lBQ2I7QUFDQSxHQUFFO0lBQUNHLFlBQVc7QUFBSTtBQUd0QixNQUFNQyxPQUFLViw0Q0FBTUEsQ0FBQ1UsSUFBSSxJQUFJWCxxREFBYyxDQUFDLFFBQU9HO0FBQ2hELGlFQUFlUSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc21hcnRoaXJlLy4vbW9kZWxzL3VzZXIuanM/NjU5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgLHttb2RlbHMsIFNjaGVtYX0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCB1c2VyU2NoZW1hPW5ldyBTY2hlbWEoe1xyXG4gICAgbmFtZTp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfSxcclxuICAgIGVtYWlsOntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWVcclxuICAgIH1cclxuICAgIH0se3RpbWVzdGFtcHM6dHJ1ZX1cclxuKVxyXG5cclxuY29uc3QgVXNlcj1tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJcIix1c2VyU2NoZW1hKVxyXG5leHBvcnQgZGVmYXVsdCBVc2VyOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsIm1vZGVscyIsIlNjaGVtYSIsInVzZXJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJwYXNzd29yZCIsInRpbWVzdGFtcHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/user.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/bcryptjs","vendor-chunks/preact","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=D%3A%5CNextJS%5CSmartHire%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNextJS%5CSmartHire&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();