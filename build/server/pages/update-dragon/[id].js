"use strict";
(() => {
var exports = {};
exports.id = 532;
exports.ids = [532];
exports.modules = {

/***/ 7353:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(901);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6502);
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6612);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8401);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_5__, _hooks__WEBPACK_IMPORTED_MODULE_6__]);
([_components__WEBPACK_IMPORTED_MODULE_5__, _hooks__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);











const getServerSideProps = async ctx => {
  const {
    '@dragonsChallenge.token': token
  } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)(ctx);
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

const UpdateDragonPage = () => {
  const {
    query: {
      id
    }
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    call: doCallUpdateDetails
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useUpdateDragon */ .v0)();
  const {
    call: doCallDragonDetails
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useGetDragonDetails */ .Yp)();
  const formRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: initalValues,
    1: setInitialValues
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    name: '',
    type: '',
    histories: ''
  });

  const resetForm = () => {
    var _formRef$current;

    formRef === null || formRef === void 0 ? void 0 : (_formRef$current = formRef.current) === null || _formRef$current === void 0 ? void 0 : _formRef$current.reset();
  };

  const doCallAPI = async dragon => {
    setIsLoading(true);
    const {
      data,
      error
    } = await doCallUpdateDetails(String(id), dragon);

    if (!error && data) {
      resetForm();
      setIsLoading(false);
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success('Seu dragão foi editado com sucesso!');
      await (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .fakeDelay */ .Em)(3500);
      next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/list-dragons');
    } else {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(error);
    }

    setIsLoading(false);
  };

  const handleSubmitUpdateDragon = async dragon => {
    try {
      formRef.current.setErrors({});
      await _validations__WEBPACK_IMPORTED_MODULE_7__/* .dragonFormSchema.validate */ .j.validate(dragon, {
        abortEarly: false
      });
      doCallAPI(dragon);
    } catch (err) {
      const validationErrors = {};

      if (err instanceof yup__WEBPACK_IMPORTED_MODULE_0__.ValidationError) {
        err.inner.forEach(error => {
          if (error.path) validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  };

  const getDragonDetails = async () => {
    const {
      data,
      error
    } = await doCallDragonDetails(String(id));

    if (!error && data) {
      setInitialValues({
        name: data.name,
        histories: data.histories,
        type: data.type
      });
    } else {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(error);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    getDragonDetails();
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .UpdateDragonTemplate */ .CA, {
    formRef: formRef,
    isLoading: isLoading,
    initalValues: initalValues,
    buttonName: "sign-in-button",
    buttonChildren: "Salvar altera\xE7\xF5es",
    textInputDragonType: "type",
    textInputDragonName: "name",
    textInputDragonHistory: "histories",
    textInputLabelDragonName: "Nome",
    textInputLabelDragonType: "Tipo",
    textInputLabelDragonHistory: "Descri\xE7\xE3o",
    handleSubmit: handleSubmitUpdateDragon
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateDragonPage);
});

/***/ }),

/***/ 6612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": () => (/* reexport */ dragonFormSchema)
});

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5609);
;// CONCATENATED MODULE: ./src/validations/dragon-form.ts

const dragonFormSchema = external_yup_.object().shape({
  name: external_yup_.string().min(3, 'Mínimo de 3 caracteres.').required('Por favor, preencha este campo.'),
  type: external_yup_.string().min(3, 'Mínimo de 3 caracteres.').required('Por favor, preencha este campo.'),
  histories: external_yup_.string().min(10, 'Mínimo de 5 caracteres.').required('Por favor, preencha este campo.')
});
;// CONCATENATED MODULE: ./src/validations/index.ts


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

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [400,578,565,901], () => (__webpack_exec__(7353)));
module.exports = __webpack_exports__;

})();