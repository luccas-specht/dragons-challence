"use strict";
exports.id = 565;
exports.ids = [565];
exports.modules = {

/***/ 6573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "nn": () => (/* reexport */ ADMIN_USER),
  "Ic": () => (/* reexport */ DEFAULT_DRAGONS_AVATAR),
  "EN": () => (/* reexport */ DRAGONS_URLS),
  "WU": () => (/* reexport */ HTTP_METHODS)
});

;// CONCATENATED MODULE: ./src/constants/api/http-methods.ts
let HTTP_METHODS;

(function (HTTP_METHODS) {
  HTTP_METHODS["POST"] = "POST";
  HTTP_METHODS["GET"] = "GET";
  HTTP_METHODS["PUT"] = "PUT";
  HTTP_METHODS["DEL"] = "DELETE";
})(HTTP_METHODS || (HTTP_METHODS = {}));
;// CONCATENATED MODULE: ./src/constants/api/dragons-URLs.ts
let DRAGONS_URLS;

(function (DRAGONS_URLS) {
  DRAGONS_URLS["BASE_URL"] = "dragon";
})(DRAGONS_URLS || (DRAGONS_URLS = {}));
;// CONCATENATED MODULE: ./src/constants/api/index.ts


;// CONCATENATED MODULE: ./public/images/default-dragon-drampa.jpg
/* harmony default export */ const default_dragon_drampa = ({"src":"/_next/static/media/default-dragon-drampa.eaf04857.jpg","height":475,"width":475,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAALoh/8QAGhAAAwEAAwAAAAAAAAAAAAAAAgMEQgASIf/aAAgBAQABPwCGqcGmLgpc9gKBqqQxaPbWR9Eh5//EABgRAAIDAAAAAAAAAAAAAAAAAAESAAIR/9oACAECAQE/AHtpDGf/xAAXEQEAAwAAAAAAAAAAAAAAAAACAAEh/9oACAEDAQE/ACCayf/Z"});
;// CONCATENATED MODULE: ./public/images/default-dragon-altaria.jpg
/* harmony default export */ const default_dragon_altaria = ({"src":"/_next/static/media/default-dragon-altaria.6c60f1e9.jpg","height":475,"width":475,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAALQPL//EAB4QAAICAAcAAAAAAAAAAAAAAAIDAQQABRETMTJB/9oACAEBAAE/ADfldkYdWshLbK1uUJdtsvdCkeYjH//EABoRAQACAwEAAAAAAAAAAAAAAAEDEQACISL/2gAIAQIBAT8Al2Y0Bvzfc//EABoRAAICAwAAAAAAAAAAAAAAAAECABESIcH/2gAIAQMBAT8AWiXGI03Ln//Z"});
;// CONCATENATED MODULE: ./public/images/default-dragon-druddigon.jpg
/* harmony default export */ const default_dragon_druddigon = ({"src":"/_next/static/media/default-dragon-druddigon.08c92624.jpg","height":475,"width":475,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAiDD/AP/EABsQAQACAgMAAAAAAAAAAAAAAAMBAgQSAAVC/9oACAEBAAE/AH6DMhlIMNrMlZ8RF0Kk6b8//8QAGREAAgMBAAAAAAAAAAAAAAAAAQIAERIh/9oACAECAQE/ANMAtMRyf//EABoRAQEAAgMAAAAAAAAAAAAAAAIBAAMhMbL/2gAIAQMBAT8Ap1NtPUUqu+T5sz//2Q=="});
;// CONCATENATED MODULE: ./public/images/default-dragon-hydreigon.jpg
/* harmony default export */ const default_dragon_hydreigon = ({"src":"/_next/static/media/default-dragon-hydreigon.20625f86.jpg","height":475,"width":475,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAIYo/wD/xAAcEAEBAAEFAQAAAAAAAAAAAAABAhEAAxMUIjL/2gAIAQEAAT8AZjsJtURfKDl85oPrX//EABkRAAIDAQAAAAAAAAAAAAAAAAECABESIf/aAAgBAgEBPwCl0wyOT//EABkRAQACAwAAAAAAAAAAAAAAAAEAEQIDMf/aAAgBAwEBPwDZeKU9Bn//2Q=="});
;// CONCATENATED MODULE: ./public/images/default-dragon-charizard.png
/* harmony default export */ const default_dragon_charizard = ({"src":"/_next/static/media/default-dragon-charizard.2ec6e71f.png","height":475,"width":475,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA3ElEQVR42mNobGpgZkAD8TW1jCC6p6aUiQEEdsYxiO2r9NI/1xuzeF9zpBNI7D8DAyMDCLTXVhgn9Uz9H1XbvuZyk2nE2VafIgbTfKWkirqzHVOmijAU5uclGU5YGBtW1XRwX0v0wfvTY06X5mWe8G7oe59S09IFN+pmAUPAh2N9797cWPR/R7mf78e9OUlH56UVMoDApvKQ2adbQ/7f3df1//KB/v+XJsRsP7gk2/X/nTphBhBY1pZtu39K5Zx1c8uMZ5eHaB/qL6guSa6HSC7tzmJkwAEurMpjAgBem1ynovU38AAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/constants/utils/default-dragons-avatar.tsx





const DEFAULT_DRAGONS_AVATAR = [default_dragon_drampa, default_dragon_altaria, default_dragon_druddigon, default_dragon_hydreigon, default_dragon_charizard];
;// CONCATENATED MODULE: ./src/constants/utils/index.ts

;// CONCATENATED MODULE: ./src/constants/access/admin-user.ts
const ADMIN_USER = {
  nickname: 'Luccas Specht',
  password: 'Senh4S#c8t4*'
};
;// CONCATENATED MODULE: ./src/constants/access/index.ts

;// CONCATENATED MODULE: ./src/constants/index.ts




/***/ }),

/***/ 5190:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* reexport safe */ _logged_In_user__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   "_": () => (/* reexport safe */ _logged_In_user__WEBPACK_IMPORTED_MODULE_0__._)
/* harmony export */ });
/* harmony import */ var _logged_In_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_logged_In_user__WEBPACK_IMPORTED_MODULE_0__]);
_logged_In_user__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

});

/***/ }),

/***/ 136:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ LoggedInUserContext),
/* harmony export */   "_": () => (/* binding */ LoggedInUserProvider)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6502);
/* harmony import */ var _public_images_this_person_does_not_exists_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9072);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks__WEBPACK_IMPORTED_MODULE_3__]);
_hooks__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






const LoggedInUserContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});
const LoggedInUserProvider = ({
  children
}) => {
  const {
    call
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useSignInRequest */ .Ch)();
  const cookieExpiriesInTwoHours = 60 * 60 * 2;
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const {
      '@dragonsChallenge.token': token
    } = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)();

    if (token) {
      setUser({
        nickname: 'Luccas Specht',
        avatarUrl: _public_images_this_person_does_not_exists_jpg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
      });
    }
  }, []);

  const login = async data => {
    const {
      token,
      user
    } = await call(data);
    (0,nookies__WEBPACK_IMPORTED_MODULE_1__.setCookie)(undefined, '@dragonsChallenge.token', token, {
      maxAge: cookieExpiriesInTwoHours
    });
    setUser(user);
    next_router__WEBPACK_IMPORTED_MODULE_0___default().push('/list-dragons');
  };

  const logOut = async () => {
    setUser(null);
    (0,nookies__WEBPACK_IMPORTED_MODULE_1__.destroyCookie)(null, '@dragonsChallenge.token');
    next_router__WEBPACK_IMPORTED_MODULE_0___default().push('/sign-in');
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(LoggedInUserContext.Provider, {
    value: {
      user,
      login,
      logOut
    },
    children: children
  });
};
});

/***/ }),

/***/ 2514:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* reexport safe */ _post_authentication__WEBPACK_IMPORTED_MODULE_0__.C)
/* harmony export */ });
/* harmony import */ var _post_authentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1784);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_post_authentication__WEBPACK_IMPORTED_MODULE_0__]);
_post_authentication__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

});

/***/ }),

/***/ 1784:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useSignInRequest)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6555);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8401);
/* harmony import */ var _public_images_this_person_does_not_exists_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9072);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_0__]);
uuid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const useSignInRequest = () => {
  const doCallAPI = async data => {
    await (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .fakeDelay */ .Em)();
    return {
      token: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
      user: {
        nickname: data.nickname,
        avatarUrl: _public_images_this_person_does_not_exists_jpg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
      }
    };
  };

  return {
    call: doCallAPI
  };
};
});

/***/ }),

/***/ 5101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O": () => (/* reexport */ useCreateUser)
});

// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(8401);
;// CONCATENATED MODULE: ./src/hooks/api/create-user/use-create-user.ts

const useCreateUser = () => {
  const doCallCreateUserAPi = async data => {
    await (0,utils/* fakeDelay */.Em)();
  };

  return {
    callAPI: doCallCreateUserAPi
  };
};
;// CONCATENATED MODULE: ./src/hooks/api/create-user/index.ts


/***/ }),

/***/ 2007:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ch": () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   "O2": () => (/* reexport safe */ _create_user__WEBPACK_IMPORTED_MODULE_1__.O),
/* harmony export */   "Qz": () => (/* reexport safe */ _use_dragons__WEBPACK_IMPORTED_MODULE_2__.Qz),
/* harmony export */   "gz": () => (/* reexport safe */ _use_dragons__WEBPACK_IMPORTED_MODULE_2__.gz),
/* harmony export */   "Yp": () => (/* reexport safe */ _use_dragons__WEBPACK_IMPORTED_MODULE_2__.Yp),
/* harmony export */   "jy": () => (/* reexport safe */ _use_dragons__WEBPACK_IMPORTED_MODULE_2__.jy),
/* harmony export */   "v0": () => (/* reexport safe */ _use_dragons__WEBPACK_IMPORTED_MODULE_2__.v0)
/* harmony export */ });
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2514);
/* harmony import */ var _create_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5101);
/* harmony import */ var _use_dragons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9060);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth__WEBPACK_IMPORTED_MODULE_0__]);
_auth__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



});

/***/ }),

/***/ 9060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Qz": () => (/* reexport */ useCreateDragon),
  "gz": () => (/* reexport */ useDeleteDragon),
  "Yp": () => (/* reexport */ useGetDragonDetails),
  "jy": () => (/* reexport */ useListAllDragons),
  "v0": () => (/* reexport */ useUpdateDragon)
});

// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(8401);
// EXTERNAL MODULE: ./src/constants/index.ts + 12 modules
var constants = __webpack_require__(6573);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/services/useAxios/api.ts

const useAxiosMockApi = () => external_axios_default().create({
  baseURL: 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/'
});
;// CONCATENATED MODULE: ./src/services/index.ts

;// CONCATENATED MODULE: ./src/hooks/api/use-requests/use-axios-request.tsx



const useAxiosRequest = ({
  url = ''
}) => {
  const {
    request
  } = useAxiosMockApi();

  const callAPI = async axiosConfig => {
    try {
      const {
        data
      } = await request(axiosConfig);
      return {
        data,
        error: null
      };
    } catch (error) {
      var _response$data;

      const {
        message,
        response
      } = error;
      return {
        data: null,
        error: (_response$data = response === null || response === void 0 ? void 0 : response.data) !== null && _response$data !== void 0 ? _response$data : message
      };
    }
  };

  return {
    post: async ({
      route = '',
      data = {}
    }) => callAPI({
      url: (0,utils/* buildURL */.KV)(url, route),
      method: constants/* HTTP_METHODS.POST */.WU.POST,
      data
    }),
    get: async ({
      route = '',
      params = {}
    }) => callAPI({
      url: (0,utils/* buildURL */.KV)(url, route),
      method: constants/* HTTP_METHODS.GET */.WU.GET,
      params
    }),
    put: async ({
      route = '',
      data = {}
    }) => callAPI({
      url: (0,utils/* buildURL */.KV)(url, route),
      method: constants/* HTTP_METHODS.PUT */.WU.PUT,
      data
    }),
    del: async ({
      route = ''
    }) => callAPI({
      url: (0,utils/* buildURL */.KV)(url, route),
      method: constants/* HTTP_METHODS.DEL */.WU.DEL
    })
  };
};
;// CONCATENATED MODULE: ./src/hooks/api/use-requests/index.ts

;// CONCATENATED MODULE: ./src/hooks/api/use-dragons/use-delete-dragon.tsx



const useDeleteDragon = () => {
  const {
    del
  } = useAxiosRequest({
    url: constants/* DRAGONS_URLS.BASE_URL */.EN.BASE_URL
  });

  const doCallApi = async dragonId => {
    const {
      data,
      error
    } = await del({
      route: (0,utils/* buildURL */.KV)('', dragonId)
    });
    return {
      data,
      error
    };
  };

  return {
    call: doCallApi
  };
};
;// CONCATENATED MODULE: ./src/hooks/api/use-dragons/use-create-dragon.tsx


const useCreateDragon = () => {
  const {
    post
  } = useAxiosRequest({
    url: constants/* DRAGONS_URLS.BASE_URL */.EN.BASE_URL
  });

  const doCallApi = async dragonProperties => {
    const {
      data,
      error
    } = await post({
      data: dragonProperties
    });
    return {
      data,
      error
    };
  };

  return {
    call: doCallApi
  };
};
;// CONCATENATED MODULE: ./src/hooks/api/use-dragons/use-update-dragon.tsx



const useUpdateDragon = () => {
  const {
    put
  } = useAxiosRequest({
    url: constants/* DRAGONS_URLS.BASE_URL */.EN.BASE_URL
  });

  const doCallApi = async (dragonId, dragonProperties) => {
    const {
      data,
      error
    } = await put({
      route: (0,utils/* buildURL */.KV)('', dragonId),
      data: dragonProperties
    });
    return {
      data,
      error
    };
  };

  return {
    call: doCallApi
  };
};
;// CONCATENATED MODULE: ./src/hooks/api/use-dragons/use-list-dragons.tsx


const useListAllDragons = () => {
  const {
    get
  } = useAxiosRequest({
    url: constants/* DRAGONS_URLS.BASE_URL */.EN.BASE_URL
  });
  return {
    call: async () => get({})
  };
};
;// CONCATENATED MODULE: ./src/hooks/api/use-dragons/use-get-dragon-details.tsx



const useGetDragonDetails = () => {
  const {
    get
  } = useAxiosRequest({
    url: constants/* DRAGONS_URLS.BASE_URL */.EN.BASE_URL
  });

  const doCallApi = async dragonId => {
    const {
      data,
      error
    } = await get({
      route: (0,utils/* buildURL */.KV)('', dragonId)
    });
    return {
      data,
      error
    };
  };

  return {
    call: doCallApi
  };
};
;// CONCATENATED MODULE: ./src/hooks/api/use-dragons/index.ts






/***/ }),

/***/ 6502:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aF": () => (/* reexport safe */ _use_logged_in_user__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   "Qz": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_1__.Qz),
/* harmony export */   "O2": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_1__.O2),
/* harmony export */   "gz": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_1__.gz),
/* harmony export */   "Yp": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_1__.Yp),
/* harmony export */   "jy": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_1__.jy),
/* harmony export */   "Ch": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_1__.Ch),
/* harmony export */   "v0": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_1__.v0)
/* harmony export */ });
/* harmony import */ var _use_logged_in_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8547);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2007);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_1__, _use_logged_in_user__WEBPACK_IMPORTED_MODULE_0__]);
([_api__WEBPACK_IMPORTED_MODULE_1__, _use_logged_in_user__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


});

/***/ }),

/***/ 8547:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useUser)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5190);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts__WEBPACK_IMPORTED_MODULE_1__]);
_contexts__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


const useUser = () => {
  const ERROR_MESSAGE = '"LoggedInUserContext" should be used with "LoggedInUserProvider"';
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts__WEBPACK_IMPORTED_MODULE_1__/* .LoggedInUserContext */ .A);
  if (!context) throw new Error(ERROR_MESSAGE);
  return context;
};
});

/***/ }),

/***/ 8401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "KV": () => (/* reexport */ buildURL),
  "Em": () => (/* reexport */ fakeDelay),
  "p6": () => (/* reexport */ formatDate),
  "lY": () => (/* reexport */ getARandomDragonAvatar),
  "xU": () => (/* reexport */ orderDragonsByName)
});

;// CONCATENATED MODULE: ./src/utils/buidURLs.ts
const buildURL = (url, route) => {
  const urlArray = Array.isArray(route) ? [url, ...route] : [url, route];
  return urlArray.join('/');
};
;// CONCATENATED MODULE: ./src/utils/fake-delay-request.ts
const fakeDelay = (amount = 1500) => new Promise(resolve => setTimeout(resolve, amount));
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
;// CONCATENATED MODULE: ./src/utils/date.ts

external_moment_default().locale('pt-br');
const formatDate = (date, format = 'DD/MM/yyyy') => external_moment_default()(date).format(format);
;// CONCATENATED MODULE: ./src/utils/array.ts
const orderDragonsByName = array => array.sort((previousElement, nextElement) => previousElement.name.localeCompare(nextElement.name));
// EXTERNAL MODULE: ./src/constants/index.ts + 12 modules
var constants = __webpack_require__(6573);
;// CONCATENATED MODULE: ./src/utils/random.ts

const getARandomDragonAvatar = (array = constants/* DEFAULT_DRAGONS_AVATAR */.Ic) => {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
};
;// CONCATENATED MODULE: ./src/utils/index.ts






/***/ }),

/***/ 9072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/this-person-does-not-exists.de2ccc28.jpg","height":1024,"width":1024,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAABf/aAAwDAQACEAMQAAAAgBaX/8QAHBAAAwABBQAAAAAAAAAAAAAAAQIEEQADISNi/9oACAEBAAE/AN6KeWZXYd5OXZgQx84J4Gv/xAAWEQADAAAAAAAAAAAAAAAAAAAAMTL/2gAIAQIBAT8Apn//xAAXEQADAQAAAAAAAAAAAAAAAAAAARFB/9oACAEDAQE/AHFIsP/Z"});

/***/ })

};
;