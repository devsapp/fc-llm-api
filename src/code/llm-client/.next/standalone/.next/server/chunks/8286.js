"use strict";
exports.id = 8286;
exports.ids = [8286];
exports.modules = {

/***/ 8286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UK: () => (/* binding */ useChatCommand),
/* harmony export */   YZ: () => (/* binding */ useCommand),
/* harmony export */   x6: () => (/* binding */ ChatCommandPrefix)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9742);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6151);



function useCommand(commands = {}) {
    const [searchParams, setSearchParams] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let shouldUpdate = false;
        searchParams.forEach((param, name)=>{
            const commandName = name;
            if (typeof commands[commandName] === "function") {
                commands[commandName](param);
                searchParams.delete(name);
                shouldUpdate = true;
            }
        });
        if (shouldUpdate) {
            setSearchParams(searchParams);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        searchParams,
        commands
    ]);
}
const ChatCommandPrefix = ":";
function useChatCommand(commands = {}) {
    function extract(userInput) {
        return userInput.startsWith(ChatCommandPrefix) ? userInput.slice(1) : userInput;
    }
    function search(userInput) {
        const input = extract(userInput);
        const desc = _locales__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.Chat.Commands;
        return Object.keys(commands).filter((c)=>c.startsWith(input)).map((c)=>({
                title: desc[c],
                content: ChatCommandPrefix + c
            }));
    }
    function match(userInput) {
        const command = extract(userInput);
        const matched = typeof commands[command] === "function";
        return {
            matched,
            invoke: ()=>matched && commands[command](userInput)
        };
    }
    return {
        match,
        search
    };
}


/***/ })

};
;