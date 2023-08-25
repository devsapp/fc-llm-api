exports.id = 8973;
exports.ids = [8973];
exports.modules = {

/***/ 28973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  NewChat: () => (/* binding */ NewChat)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./app/constant.ts
var constant = __webpack_require__(14751);
// EXTERNAL MODULE: ./app/components/button.tsx
var components_button = __webpack_require__(69168);
// EXTERNAL MODULE: ./app/components/emoji.tsx + 1 modules
var emoji = __webpack_require__(6862);
// EXTERNAL MODULE: ./app/components/new-chat.module.scss
var new_chat_module = __webpack_require__(36012);
var new_chat_module_default = /*#__PURE__*/__webpack_require__.n(new_chat_module);
;// CONCATENATED MODULE: ./app/icons/left.svg
var _defs, _mask;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLeft = function SvgLeft(props) {
  return /*#__PURE__*/react_.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 16,
    height: 16,
    fill: "none"
  }, props), _defs || (_defs = /*#__PURE__*/react_.createElement("defs", null, /*#__PURE__*/react_.createElement("path", {
    id: "left_svg__a",
    d: "M0 0h16v16H0z"
  }))), /*#__PURE__*/react_.createElement("g", null, _mask || (_mask = /*#__PURE__*/react_.createElement("mask", {
    id: "left_svg__b",
    fill: "#fff"
  }, /*#__PURE__*/react_.createElement("use", {
    xlinkHref: "#left_svg__a"
  }))), /*#__PURE__*/react_.createElement("g", {
    mask: "url(#left_svg__b)"
  }, /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    d: "M4 8 0 4l4-4",
    transform: "translate(6.333 4)"
  }))));
};
/* harmony default export */ const left = (SvgLeft);
;// CONCATENATED MODULE: ./app/icons/lightning.svg
var lightning_mask, lightning_defs;
function lightning_extends() { lightning_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return lightning_extends.apply(this, arguments); }

var SvgLightning = function SvgLightning(props) {
  return /*#__PURE__*/react_.createElement("svg", lightning_extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 16,
    height: 16,
    fill: "none"
  }, props), /*#__PURE__*/react_.createElement("g", null, lightning_mask || (lightning_mask = /*#__PURE__*/react_.createElement("mask", {
    id: "lightning_svg__b",
    fill: "#fff"
  }, /*#__PURE__*/react_.createElement("use", {
    xlinkHref: "#lightning_svg__a"
  }))), /*#__PURE__*/react_.createElement("g", {
    mask: "url(#lightning_svg__b)"
  }, /*#__PURE__*/react_.createElement("path", {
    style: {
      fill: "#333",
      opacity: 1
    },
    d: "M2.248 8.852a.665.665 0 0 1-.172-.828l3.67-7a.664.664 0 0 1 .59-.357h6a.662.662 0 0 1 .634.46.669.669 0 0 1-.11.618l-2.822 3.592h3.629a.661.661 0 0 1 .605.387.663.663 0 0 1-.116.732l-8 8.66a.664.664 0 0 1-.893.078.66.66 0 0 1-.257-.441.66.66 0 0 1 .016-.26L6.472 9H2.666a.657.657 0 0 1-.42-.148zm1.52-1.185h3.569a.665.665 0 0 1 .644.836l-.986 3.74 5.148-5.573H8.667a.665.665 0 0 1-.63-.885.662.662 0 0 1 .105-.194L10.965 2H6.74z"
  }))), lightning_defs || (lightning_defs = /*#__PURE__*/react_.createElement("defs", null, /*#__PURE__*/react_.createElement("path", {
    id: "lightning_svg__a",
    d: "M0 0h16v16H0z"
  }))));
};
/* harmony default export */ const lightning = (SvgLightning);
// EXTERNAL MODULE: ./app/icons/eye.svg
var eye = __webpack_require__(32168);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/umd/react-router-dom.production.min.js
var react_router_dom_production_min = __webpack_require__(5666);
// EXTERNAL MODULE: ./app/store/mask.ts
var mask = __webpack_require__(27736);
// EXTERNAL MODULE: ./app/locales/index.ts + 17 modules
var locales = __webpack_require__(70663);
// EXTERNAL MODULE: ./app/store/index.ts + 2 modules
var store = __webpack_require__(87079);
// EXTERNAL MODULE: ./app/components/mask.tsx + 1 modules
var components_mask = __webpack_require__(99510);
// EXTERNAL MODULE: ./app/command.ts
var command = __webpack_require__(60170);
// EXTERNAL MODULE: ./app/components/ui-lib.tsx + 3 modules
var ui_lib = __webpack_require__(5129);
// EXTERNAL MODULE: ./app/masks/index.ts + 2 modules
var app_masks = __webpack_require__(20918);
;// CONCATENATED MODULE: ./app/components/new-chat.tsx

















function getIntersectionArea(aRect, bRect) {
    const xmin = Math.max(aRect.x, bRect.x);
    const xmax = Math.min(aRect.x + aRect.width, bRect.x + bRect.width);
    const ymin = Math.max(aRect.y, bRect.y);
    const ymax = Math.min(aRect.y + aRect.height, bRect.y + bRect.height);
    const width = xmax - xmin;
    const height = ymax - ymin;
    const intersectionArea = width < 0 || height < 0 ? 0 : width * height;
    return intersectionArea;
}
function MaskItem(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (new_chat_module_default()).mask,
        onClick: props.onClick,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_mask.MaskAvatar, {
                mask: props.mask
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (new_chat_module_default())["mask-name"] + " one-line",
                children: props.mask.name
            })
        ]
    });
}
function useMaskGroup(masks) {
    const [groups, setGroups] = (0,react_.useState)([]);
    (0,react_.useEffect)(()=>{
        const computeGroup = ()=>{
            const appBody = document.getElementById(constant/* SlotID */.ym.AppBody);
            if (!appBody || masks.length === 0) return;
            const rect = appBody.getBoundingClientRect();
            const maxWidth = rect.width;
            const maxHeight = rect.height * 0.6;
            const maskItemWidth = 120;
            const maskItemHeight = 50;
            const randomMask = ()=>masks[Math.floor(Math.random() * masks.length)];
            let maskIndex = 0;
            const nextMask = ()=>masks[maskIndex++ % masks.length];
            const rows = Math.ceil(maxHeight / maskItemHeight);
            const cols = Math.ceil(maxWidth / maskItemWidth);
            const newGroups = new Array(rows).fill(0).map((_, _i)=>new Array(cols).fill(0).map((_, j)=>j < 1 || j > cols - 2 ? randomMask() : nextMask()));
            setGroups(newGroups);
        };
        computeGroup();
        window.addEventListener("resize", computeGroup);
        return ()=>window.removeEventListener("resize", computeGroup);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return groups;
}
function NewChat() {
    const chatStore = (0,store/* useChatStore */.aK)();
    const maskStore = (0,mask/* useMaskStore */.Zy)();
    const masks = maskStore.getAll();
    const groups = useMaskGroup(masks);
    const navigate = (0,react_router_dom_production_min.useNavigate)();
    const config = (0,store/* useAppConfig */.MG)();
    const maskRef = (0,react_.useRef)(null);
    const { state } = (0,react_router_dom_production_min.useLocation)();
    const startChat = (mask)=>{
        setTimeout(()=>{
            chatStore.newSession(mask);
            navigate(constant/* Path */.y$.Chat);
        }, 10);
    };
    (0,command/* useCommand */.YZ)({
        mask: (id)=>{
            try {
                const mask = maskStore.get(id) ?? app_masks/* BUILTIN_MASK_STORE */.$n.get(id);
                startChat(mask ?? undefined);
            } catch  {
                console.error("[New Chat] failed to create chat from mask id=", id);
            }
        }
    });
    (0,react_.useEffect)(()=>{
        if (maskRef.current) {
            maskRef.current.scrollLeft = (maskRef.current.scrollWidth - maskRef.current.clientWidth) / 2;
        }
    }, [
        groups
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (new_chat_module_default())["new-chat"],
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (new_chat_module_default())["mask-header"],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(left, {}),
                        text: locales/* default */.ZP.NewChat.Return,
                        onClick: ()=>navigate(constant/* Path */.y$.Home)
                    }),
                    !state?.fromHome && /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                        text: locales/* default */.ZP.NewChat.NotShow,
                        onClick: async ()=>{
                            if (await (0,ui_lib/* showConfirm */.i0)(locales/* default */.ZP.NewChat.ConfirmNoShow)) {
                                startChat();
                                config.update((config)=>config.dontShowMaskSplashScreen = true);
                            }
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (new_chat_module_default())["mask-cards"],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (new_chat_module_default())["mask-card"],
                        children: /*#__PURE__*/ jsx_runtime_.jsx(emoji/* EmojiAvatar */.eL, {
                            avatar: "1f606",
                            size: 24
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (new_chat_module_default())["mask-card"],
                        children: /*#__PURE__*/ jsx_runtime_.jsx(emoji/* EmojiAvatar */.eL, {
                            avatar: "1f916",
                            size: 24
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (new_chat_module_default())["mask-card"],
                        children: /*#__PURE__*/ jsx_runtime_.jsx(emoji/* EmojiAvatar */.eL, {
                            avatar: "1f479",
                            size: 24
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (new_chat_module_default()).title,
                children: locales/* default */.ZP.NewChat.Title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (new_chat_module_default())["sub-title"],
                children: locales/* default */.ZP.NewChat.SubTitle
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (new_chat_module_default()).actions,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                        text: locales/* default */.ZP.NewChat.More,
                        onClick: ()=>navigate(constant/* Path */.y$.Masks),
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(eye/* default */.Z, {}),
                        bordered: true,
                        shadow: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                        text: locales/* default */.ZP.NewChat.Skip,
                        onClick: ()=>startChat(),
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(lightning, {}),
                        type: "primary",
                        shadow: true,
                        className: (new_chat_module_default()).skip
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (new_chat_module_default()).masks,
                ref: maskRef,
                children: groups.map((masks, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (new_chat_module_default())["mask-row"],
                        children: masks.map((mask, index)=>/*#__PURE__*/ jsx_runtime_.jsx(MaskItem, {
                                mask: mask,
                                onClick: ()=>startChat(mask)
                            }, index))
                    }, i))
            })
        ]
    });
}


/***/ }),

/***/ 36012:
/***/ ((module) => {

// Exports
module.exports = {
	"new-chat": "new-chat_new-chat__63RF3",
	"mask-header": "new-chat_mask-header__nBwht",
	"slide-in-from-top": "new-chat_slide-in-from-top__kKaCc",
	"mask-cards": "new-chat_mask-cards__W1FzL",
	"slide-in": "new-chat_slide-in__VIaHY",
	"mask-card": "new-chat_mask-card__EXvr1",
	"title": "new-chat_title__lfHL6",
	"sub-title": "new-chat_sub-title__qYtID",
	"actions": "new-chat_actions__ntcag",
	"skip": "new-chat_skip__js1_N",
	"masks": "new-chat_masks__ArNS9",
	"mask-row": "new-chat_mask-row__ZRTfV",
	"mask": "new-chat_mask__P5aBk",
	"mask-name": "new-chat_mask-name__AytPM"
};


/***/ })

};
;