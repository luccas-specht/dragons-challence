"use strict";
(() => {
var exports = {};
exports.id = 99;
exports.ids = [99];
exports.modules = {

/***/ 2824:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(901);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8401);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6502);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_3__, _hooks__WEBPACK_IMPORTED_MODULE_5__]);
([_components__WEBPACK_IMPORTED_MODULE_3__, _hooks__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);







const getServerSideProps = async ctx => {
  const {
    '@dragonsChallenge.token': token
  } = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)(ctx);
  if (!token) return {
    redirect: {
      destination: '/sign-in',
      permanent: false
    }
  };
  return {
    props: {}
  };
};

const ListDragonsPage = () => {
  const {
    call: callApiToList
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useListAllDragons */ .jy)();
  const {
    call: callApiToDelete
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useDeleteDragon */ .gz)();
  const {
    0: dragons,
    1: setDragons
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const handleDeleteDragon = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async dragonId => {
    const {
      data,
      error
    } = await callApiToDelete(dragonId);
    if (error && !data) react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(error);
    listDragons();
  }, []);

  const listDragons = async () => {
    setIsLoading(true);
    const {
      data,
      error
    } = await callApiToList();

    if (!error && data) {
      setDragons((0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .orderDragonsByName */ .xU)(data));
    } else {
      react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(error);
    }

    await (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .fakeDelay */ .Em)(500);
    setIsLoading(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    listDragons();
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .ListDragonsTemplate */ .D4, {
    dragons: dragons,
    isLoading: isLoading,
    onDeleteDragon: handleDeleteDragon
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListDragonsPage);
});

/***/ }),

/***/ 4937:
/***/ ((module) => {

module.exports = require("@unform/core");

/***/ }),

/***/ 3732:
/***/ ((module) => {

module.exports = require("@unform/web");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 5429:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 3053:
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 8866:
/***/ ((module) => {

module.exports = require("react-icons/gi");

/***/ }),

/***/ 4751:
/***/ ((module) => {

module.exports = require("react-icons/io");

/***/ }),

/***/ 2279:
/***/ ((module) => {

module.exports = require("react-outside-click-handler");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [400,578,565,901], () => (__webpack_exec__(2824)));
module.exports = __webpack_exports__;

})();