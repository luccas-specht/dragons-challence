"use strict";
exports.id = 767;
exports.ids = [767];
exports.modules = {

/***/ 3767:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(178);
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6502);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6573);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(901);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_7__, _hooks__WEBPACK_IMPORTED_MODULE_5__]);
([_components__WEBPACK_IMPORTED_MODULE_7__, _hooks__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);











const getServerSideProps = async ctx => {
  const {
    '@dragonsChallenge.token': token
  } = (0,nookies__WEBPACK_IMPORTED_MODULE_4__.parseCookies)(ctx);
  if (token) return {
    redirect: {
      destination: '/list-dragons',
      permanent: false
    }
  };
  return {
    props: {}
  };
};

const SignInPage = () => {
  const {
    login
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useUser */ .aF)();
  const formRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const signInWithGoogle = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_icons_fc__WEBPACK_IMPORTED_MODULE_2__.FcGoogle, {}), " Entre com Google"]
  });

  const signInWithFacebook = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaFacebook, {
      color: "#3b5998"
    }), " Entre com Facebook"]
  });

  const authButtons = [{
    buttonId: 'sign-in-with-google',
    buttonName: 'sign-in-with-google',
    buttonChildren: signInWithGoogle()
  }, {
    buttonId: 'sign-in-with-facebook',
    buttonName: 'sign-in-with-facebook',
    buttonChildren: signInWithFacebook()
  }];
  const schema = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
    nickname: yup__WEBPACK_IMPORTED_MODULE_0__.string().equals([_constants__WEBPACK_IMPORTED_MODULE_6__/* .ADMIN_USER.nickname */ .nn.nickname], 'Usuário ou apelido não corresponde ao Usuário Admin.'),
    password: yup__WEBPACK_IMPORTED_MODULE_0__.string().equals([_constants__WEBPACK_IMPORTED_MODULE_6__/* .ADMIN_USER.password */ .nn.password], 'Senha não corresponde ao Usuário Admin.')
  });

  const doCallAPI = async data => {
    setIsLoading(true);
    await login(data);
    setIsLoading(false);
  };

  const handleSignIn = async data => {
    try {
      formRef.current.setErrors({});
      await schema.validate(data, {
        abortEarly: false
      });
      doCallAPI(data);
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

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components__WEBPACK_IMPORTED_MODULE_7__/* .SignInTemplate */ .gb, {
    formRef: formRef,
    isLoading: isLoading,
    authButtons: authButtons,
    linkTo: "/sign-up",
    linkText: "Criar Conta",
    buttonName: "sign-in-button",
    textInputName: "nickname",
    buttonChildren: "Entrar",
    textInputLabel: "Usu\xE1rio ou apelido",
    passwordInputLabel: "Senha",
    passwordInputName: "password",
    handleSignIn: handleSignIn
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignInPage);
});

/***/ })

};
;