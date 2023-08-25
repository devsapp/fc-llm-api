"use strict";
exports.id = 9246;
exports.ids = [9246];
exports.modules = {

/***/ 9246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Markdown: () => (/* binding */ Markdown),
/* harmony export */   MarkdownContent: () => (/* binding */ MarkdownContent),
/* harmony export */   Mermaid: () => (/* binding */ Mermaid),
/* harmony export */   PreCode: () => (/* binding */ PreCode)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69931);
/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32289);
/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remark_math__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11052);
/* harmony import */ var remark_breaks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(95902);
/* harmony import */ var rehype_katex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(91905);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(43126);
/* harmony import */ var rehype_highlight__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(24742);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54289);
/* harmony import */ var mermaid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64221);
/* harmony import */ var _icons_three_dots_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39866);
/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2787);
/* harmony import */ var _ui_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5129);















function Mermaid(props) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const [hasError, setHasError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (props.code && ref.current) {
            mermaid__WEBPACK_IMPORTED_MODULE_6__.N.run({
                nodes: [
                    ref.current
                ],
                suppressErrors: true
            }).catch((e)=>{
                setHasError(true);
                console.error("[Mermaid] ", e.message);
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props.code
    ]);
    function viewSvgInNewWindow() {
        const svg = ref.current?.querySelector("svg");
        if (!svg) return;
        const text = new XMLSerializer().serializeToString(svg);
        const blob = new Blob([
            text
        ], {
            type: "image/svg+xml"
        });
        (0,_ui_lib__WEBPACK_IMPORTED_MODULE_5__/* .showImageModal */ .vi)(URL.createObjectURL(blob));
    }
    if (hasError) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "no-dark mermaid",
        style: {
            cursor: "pointer",
            overflow: "auto"
        },
        ref: ref,
        onClick: ()=>viewSvgInNewWindow(),
        children: props.code
    });
}
function PreCode(props) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const refText = ref.current?.innerText;
    const [mermaidCode, setMermaidCode] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const renderMermaid = (0,use_debounce__WEBPACK_IMPORTED_MODULE_7__/* .useDebouncedCallback */ .y1)(()=>{
        if (!ref.current) return;
        const mermaidDom = ref.current.querySelector("code.language-mermaid");
        if (mermaidDom) {
            setMermaidCode(mermaidDom.innerText);
        }
    }, 600);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setTimeout(renderMermaid, 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        refText
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            mermaidCode.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Mermaid, {
                code: mermaidCode
            }, mermaidCode),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("pre", {
                ref: ref,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "copy-code-button",
                        onClick: ()=>{
                            if (ref.current) {
                                const code = ref.current.innerText;
                                (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .copyToClipboard */ .vQ)(code);
                            }
                        }
                    }),
                    props.children
                ]
            })
        ]
    });
}
function _MarkDownContent(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_8__/* .ReactMarkdown */ .D, {
        remarkPlugins: [
            remark_math__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
            remark_gfm__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
            remark_breaks__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z
        ],
        rehypePlugins: [
            rehype_katex__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
            [
                rehype_highlight__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
                {
                    detect: false,
                    ignoreMissing: true
                }
            ]
        ],
        components: {
            pre: PreCode,
            p: (pProps)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    ...pProps,
                    dir: "auto"
                }),
            a: (aProps)=>{
                const href = aProps.href || "";
                const isInternal = /^\/#/i.test(href);
                const target = isInternal ? "_self" : aProps.target ?? "_blank";
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    ...aProps,
                    target: target
                });
            }
        },
        children: props.content
    });
}
const MarkdownContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().memo(_MarkDownContent);
function Markdown(props) {
    const mdRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "markdown-body",
        style: {
            fontSize: `${props.fontSize ?? 14}px`
        },
        ref: mdRef,
        onContextMenu: props.onContextMenu,
        onDoubleClickCapture: props.onDoubleClickCapture,
        children: props.loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_three_dots_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MarkdownContent, {
            content: props.content
        })
    });
}


/***/ })

};
;