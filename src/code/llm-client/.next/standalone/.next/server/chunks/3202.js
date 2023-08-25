"use strict";
exports.id = 3202;
exports.ids = [3202];
exports.modules = {

/***/ 17382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _defs, _mask;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgClear = function SvgClear(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 16,
    height: 16,
    fill: "none"
  }, props), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    id: "clear_svg__a",
    d: "M0 0h16v16H0z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", null, _mask || (_mask = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("mask", {
    id: "clear_svg__b",
    fill: "#fff"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
    xlinkHref: "#clear_svg__a"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    mask: "url(#clear_svg__b)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(2.667 5)",
    d: "M1 9.67h8.67l1-9.67H0l1 9.67Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(6.667 8.334)",
    d: "M0 0v3.33"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(9.334 8.333)",
    d: "M0 0v3.33"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(4 1)",
    d: "m0 4 5.44-4L8 4"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgClear);

/***/ }),

/***/ 84143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ usePromptStore),
/* harmony export */   o: () => (/* binding */ SearchService)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99715);
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48228);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96613);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70663);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14751);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48350);






const SearchService = {
    ready: false,
    builtinEngine: new (fuse_js__WEBPACK_IMPORTED_MODULE_2___default())([], {
        keys: [
            "title"
        ]
    }),
    userEngine: new (fuse_js__WEBPACK_IMPORTED_MODULE_2___default())([], {
        keys: [
            "title"
        ]
    }),
    count: {
        builtin: 0
    },
    allPrompts: [],
    builtinPrompts: [],
    init (builtinPrompts, userPrompts) {
        if (this.ready) {
            return;
        }
        this.allPrompts = userPrompts.concat(builtinPrompts);
        this.builtinPrompts = builtinPrompts.slice();
        this.builtinEngine.setCollection(builtinPrompts);
        this.userEngine.setCollection(userPrompts);
        this.ready = true;
    },
    remove (id) {
        this.userEngine.remove((doc)=>doc.id === id);
    },
    add (prompt) {
        this.userEngine.add(prompt);
    },
    search (text) {
        const userResults = this.userEngine.search(text);
        const builtinResults = this.builtinEngine.search(text);
        return userResults.concat(builtinResults).map((v)=>v.item);
    }
};
const usePromptStore = (0,zustand__WEBPACK_IMPORTED_MODULE_3__/* .create */ .Ue)()((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_4__/* .persist */ .tJ)((set, get)=>({
        counter: 0,
        latestId: 0,
        prompts: {},
        add (prompt) {
            const prompts = get().prompts;
            prompt.id = (0,nanoid__WEBPACK_IMPORTED_MODULE_5__/* .nanoid */ .x0)();
            prompt.isUser = true;
            prompt.createdAt = Date.now();
            prompts[prompt.id] = prompt;
            set(()=>({
                    latestId: prompt.id,
                    prompts: prompts
                }));
            return prompt.id;
        },
        get (id) {
            const targetPrompt = get().prompts[id];
            if (!targetPrompt) {
                return SearchService.builtinPrompts.find((v)=>v.id === id);
            }
            return targetPrompt;
        },
        remove (id) {
            const prompts = get().prompts;
            delete prompts[id];
            SearchService.remove(id);
            set(()=>({
                    prompts,
                    counter: get().counter + 1
                }));
        },
        getUserPrompts () {
            const userPrompts = Object.values(get().prompts ?? {});
            userPrompts.sort((a, b)=>b.id && a.id ? b.createdAt - a.createdAt : 0);
            return userPrompts;
        },
        update (id, updater) {
            const prompt = get().prompts[id] ?? {
                title: "",
                content: "",
                id
            };
            SearchService.remove(id);
            updater(prompt);
            const prompts = get().prompts;
            prompts[id] = prompt;
            set(()=>({
                    prompts
                }));
            SearchService.add(prompt);
        },
        search (text) {
            if (text.length === 0) {
                // return all rompts
                return get().getUserPrompts().concat(SearchService.builtinPrompts);
            }
            return SearchService.search(text);
        }
    }), {
    name: _constant__WEBPACK_IMPORTED_MODULE_1__/* .StoreKey */ .KJ.Prompt,
    version: 3,
    migrate (state, version) {
        const newState = JSON.parse(JSON.stringify(state));
        if (version < 3) {
            Object.values(newState.prompts).forEach((p)=>p.id = (0,nanoid__WEBPACK_IMPORTED_MODULE_5__/* .nanoid */ .x0)());
        }
        return newState;
    },
    onRehydrateStorage (state) {
        const PROMPT_URL = "./prompts.json";
        fetch(PROMPT_URL).then((res)=>res.json()).then((res)=>{
            let fetchPrompts = [
                res.en,
                res.cn
            ];
            if ((0,_locales__WEBPACK_IMPORTED_MODULE_0__/* .getLang */ .VQ)() === "cn") {
                fetchPrompts = fetchPrompts.reverse();
            }
            const builtinPrompts = fetchPrompts.map((promptList)=>{
                return promptList.map(([title, content])=>({
                        id: (0,nanoid__WEBPACK_IMPORTED_MODULE_5__/* .nanoid */ .x0)(),
                        title,
                        content,
                        createdAt: Date.now()
                    }));
            });
            const userPrompts = usePromptStore.getState().getUserPrompts() ?? [];
            const allPromptsForSearch = builtinPrompts.reduce((pre, cur)=>pre.concat(cur), []).filter((v)=>!!v.title && !!v.content);
            SearchService.count.builtin = res.en.length + res.cn.length;
            SearchService.init(allPromptsForSearch, userPrompts);
        });
    }
}));


/***/ })

};
;