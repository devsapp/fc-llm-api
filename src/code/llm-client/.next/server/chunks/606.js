"use strict";
exports.id = 606;
exports.ids = [606];
exports.modules = {

/***/ 80606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatItem: () => (/* binding */ ChatItem),
/* harmony export */   ChatList: () => (/* binding */ ChatList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_delete_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12670);
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89641);
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32470);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87079);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70663);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5666);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14751);
/* harmony import */ var _mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99510);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ui_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5129);











function ChatItem(props) {
    const draggableRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (props.selected && draggableRef.current) {
            draggableRef.current?.scrollIntoView({
                block: "center"
            });
        }
    }, [
        props.selected
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_8__/* .Draggable */ ._l, {
        draggableId: `${props.id}`,
        index: props.index,
        children: (provided)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_home_module_scss__WEBPACK_IMPORTED_MODULE_9___default()["chat-item"])} ${props.selected && (_home_module_scss__WEBPACK_IMPORTED_MODULE_9___default()["chat-item-selected"])}`,
                onClick: props.onClick,
                ref: (ele)=>{
                    draggableRef.current = ele;
                    provided.innerRef(ele);
                },
                ...provided.draggableProps,
                ...provided.dragHandleProps,
                title: `${props.title}\n${_locales__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP.ChatItem.ChatItemCount(props.count)}`,
                children: [
                    props.narrow ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_9___default()["chat-item-narrow"]),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_9___default()["chat-item-avatar"]) + " no-dark",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mask__WEBPACK_IMPORTED_MODULE_5__.MaskAvatar, {
                                    mask: props.mask
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_9___default()["chat-item-narrow-count"]),
                                children: props.count
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_9___default()["chat-item-title"]),
                                children: props.title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_9___default()["chat-item-info"]),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_9___default()["chat-item-count"]),
                                        children: _locales__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP.ChatItem.ChatItemCount(props.count)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_9___default()["chat-item-date"]),
                                        children: props.time
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_9___default()["chat-item-delete"]),
                        onClickCapture: props.onDelete,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_delete_svg__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                    })
                ]
            })
    });
}
function ChatList(props) {
    const [sessions, selectedIndex, selectSession, moveSession] = (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .useChatStore */ .aK)((state)=>[
            state.sessions,
            state.currentSessionIndex,
            state.selectSession,
            state.moveSession
        ]);
    const chatStore = (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .useChatStore */ .aK)();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useNavigate)();
    const onDragEnd = (result)=>{
        const { destination, source } = result;
        if (!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }
        moveSession(source.index, destination.index);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_8__/* .DragDropContext */ .Z5, {
        onDragEnd: onDragEnd,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_8__/* .Droppable */ .bK, {
            droppableId: "chat-list",
            children: (provided)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_9___default()["chat-list"]),
                    ref: provided.innerRef,
                    ...provided.droppableProps,
                    children: [
                        sessions.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChatItem, {
                                title: item.topic,
                                time: new Date(item.lastUpdate).toLocaleString(),
                                count: item.messages.length,
                                id: item.id,
                                index: i,
                                selected: i === selectedIndex,
                                onClick: ()=>{
                                    navigate(_constant__WEBPACK_IMPORTED_MODULE_4__/* .Path */ .y$.Chat);
                                    selectSession(i);
                                },
                                onDelete: async ()=>{
                                    if (!props.narrow || await (0,_ui_lib__WEBPACK_IMPORTED_MODULE_7__/* .showConfirm */ .i0)(_locales__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP.Home.DeleteChat)) {
                                        chatStore.deleteSession(i);
                                    }
                                },
                                narrow: props.narrow,
                                mask: item.mask
                            }, item.id)),
                        provided.placeholder
                    ]
                })
        })
    });
}


/***/ })

};
;