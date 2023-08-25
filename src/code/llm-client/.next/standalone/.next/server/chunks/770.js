exports.id = 770;
exports.ids = [770];
exports.modules = {

/***/ 70770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Settings: () => (/* binding */ Settings)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./app/components/settings.module.scss
var settings_module = __webpack_require__(44157);
var settings_module_default = /*#__PURE__*/__webpack_require__.n(settings_module);
// EXTERNAL MODULE: ./app/icons/reload.svg
var reload = __webpack_require__(30841);
// EXTERNAL MODULE: ./app/icons/add.svg
var add = __webpack_require__(32263);
// EXTERNAL MODULE: ./app/icons/close.svg
var icons_close = __webpack_require__(26989);
// EXTERNAL MODULE: ./app/icons/copy.svg
var copy = __webpack_require__(81482);
// EXTERNAL MODULE: ./app/icons/clear.svg
var clear = __webpack_require__(17382);
// EXTERNAL MODULE: ./app/icons/three-dots.svg
var three_dots = __webpack_require__(39866);
// EXTERNAL MODULE: ./app/icons/edit.svg
var edit = __webpack_require__(9127);
// EXTERNAL MODULE: ./app/icons/eye.svg
var eye = __webpack_require__(32168);
// EXTERNAL MODULE: ./app/components/ui-lib.tsx + 3 modules
var ui_lib = __webpack_require__(5129);
// EXTERNAL MODULE: ./app/components/model-config.tsx
var model_config = __webpack_require__(98581);
// EXTERNAL MODULE: ./app/components/button.tsx
var components_button = __webpack_require__(69168);
// EXTERNAL MODULE: ./app/store/index.ts + 2 modules
var store = __webpack_require__(87079);
// EXTERNAL MODULE: ./app/locales/index.ts + 17 modules
var locales = __webpack_require__(70663);
// EXTERNAL MODULE: ./app/utils.ts
var utils = __webpack_require__(54289);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./app/constant.ts
var constant = __webpack_require__(14751);
// EXTERNAL MODULE: ./app/store/prompt.ts
var store_prompt = __webpack_require__(84143);
// EXTERNAL MODULE: ./app/components/error.tsx
var error = __webpack_require__(22969);
// EXTERNAL MODULE: ./app/components/input-range.tsx
var input_range = __webpack_require__(53937);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/umd/react-router-dom.production.min.js
var react_router_dom_production_min = __webpack_require__(5666);
// EXTERNAL MODULE: ./app/components/emoji.tsx + 1 modules
var emoji = __webpack_require__(6862);
// EXTERNAL MODULE: ./app/config/client.ts + 2 modules
var client = __webpack_require__(12730);
// EXTERNAL MODULE: ./node_modules/zustand/esm/index.mjs + 1 modules
var esm = __webpack_require__(99715);
// EXTERNAL MODULE: ./node_modules/zustand/esm/middleware.mjs
var middleware = __webpack_require__(48228);
;// CONCATENATED MODULE: ./app/store/sync.ts



const FILE = {
    root: "/chatgpt-next-web/"
};
const useSyncStore = (0,esm/* create */.Ue)()((0,middleware/* persist */.tJ)((set, get)=>({
        webDavConfig: {
            server: "",
            username: "",
            password: ""
        },
        lastSyncTime: 0,
        update (updater) {
            const config = {
                ...get().webDavConfig
            };
            updater(config);
            set({
                webDavConfig: config
            });
        },
        async check () {
            try {
                const res = await fetch(this.path(""), {
                    method: "PROFIND",
                    headers: this.headers()
                });
                console.log(res);
                return res.status === 207;
            } catch (e) {
                console.error("[Sync] ", e);
                return false;
            }
        },
        path (path) {
            let url = get().webDavConfig.server;
            if (!url.endsWith("/")) {
                url += "/";
            }
            if (path.startsWith("/")) {
                path = path.slice(1);
            }
            return url + path;
        },
        headers () {
            const auth = btoa([
                get().webDavConfig.username,
                get().webDavConfig.password
            ].join(":"));
            return {
                Authorization: `Basic ${auth}`
            };
        }
    }), {
    name: constant/* StoreKey */.KJ.Sync,
    version: 1
}));

// EXTERNAL MODULE: ./node_modules/nanoid/index.js + 1 modules
var nanoid = __webpack_require__(48350);
;// CONCATENATED MODULE: ./app/components/settings.tsx



























function EditPromptModal(props) {
    const promptStore = (0,store_prompt/* usePromptStore */.f)();
    const prompt = promptStore.get(props.id);
    return prompt ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "modal-mask",
        children: /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* Modal */.u_, {
            title: locales/* default */.ZP.Settings.Prompt.EditModal.Title,
            onClose: props.onClose,
            actions: [
                /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                    onClick: props.onClose,
                    text: locales/* default */.ZP.UI.Confirm,
                    bordered: true
                }, "")
            ],
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (settings_module_default())["edit-prompt-modal"],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        value: prompt.title,
                        readOnly: !prompt.isUser,
                        className: (settings_module_default())["edit-prompt-title"],
                        onInput: (e)=>promptStore.update(props.id, (prompt)=>prompt.title = e.currentTarget.value)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* Input */.II, {
                        value: prompt.content,
                        readOnly: !prompt.isUser,
                        className: (settings_module_default())["edit-prompt-content"],
                        rows: 10,
                        onInput: (e)=>promptStore.update(props.id, (prompt)=>prompt.content = e.currentTarget.value)
                    })
                ]
            })
        })
    }) : null;
}
function UserPromptModal(props) {
    const promptStore = (0,store_prompt/* usePromptStore */.f)();
    const userPrompts = promptStore.getUserPrompts();
    const builtinPrompts = store_prompt/* SearchService */.o.builtinPrompts;
    const allPrompts = userPrompts.concat(builtinPrompts);
    const [searchInput, setSearchInput] = (0,react_.useState)("");
    const [searchPrompts, setSearchPrompts] = (0,react_.useState)([]);
    const prompts = searchInput.length > 0 ? searchPrompts : allPrompts;
    const [editingPromptId, setEditingPromptId] = (0,react_.useState)();
    (0,react_.useEffect)(()=>{
        if (searchInput.length > 0) {
            const searchResult = store_prompt/* SearchService */.o.search(searchInput);
            setSearchPrompts(searchResult);
        } else {
            setSearchPrompts([]);
        }
    }, [
        searchInput
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "modal-mask",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* Modal */.u_, {
                title: locales/* default */.ZP.Settings.Prompt.Modal.Title,
                onClose: ()=>props.onClose?.(),
                actions: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                        onClick: ()=>promptStore.add({
                                id: (0,nanoid/* nanoid */.x0)(),
                                createdAt: Date.now(),
                                title: "Empty Prompt",
                                content: "Empty Prompt Content"
                            }),
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(add/* default */.Z, {}),
                        bordered: true,
                        text: locales/* default */.ZP.Settings.Prompt.Modal.Add
                    }, "add")
                ],
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (settings_module_default())["user-prompt-modal"],
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            className: (settings_module_default())["user-prompt-search"],
                            placeholder: locales/* default */.ZP.Settings.Prompt.Modal.Search,
                            value: searchInput,
                            onInput: (e)=>setSearchInput(e.currentTarget.value)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (settings_module_default())["user-prompt-list"],
                            children: prompts.map((v, _)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (settings_module_default())["user-prompt-item"],
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (settings_module_default())["user-prompt-header"],
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (settings_module_default())["user-prompt-title"],
                                                    children: v.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (settings_module_default())["user-prompt-content"] + " one-line",
                                                    children: v.content
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (settings_module_default())["user-prompt-buttons"],
                                            children: [
                                                v.isUser && /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(clear/* default */.Z, {}),
                                                    className: (settings_module_default())["user-prompt-button"],
                                                    onClick: ()=>promptStore.remove(v.id)
                                                }),
                                                v.isUser ? /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(edit/* default */.Z, {}),
                                                    className: (settings_module_default())["user-prompt-button"],
                                                    onClick: ()=>setEditingPromptId(v.id)
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(eye/* default */.Z, {}),
                                                    className: (settings_module_default())["user-prompt-button"],
                                                    onClick: ()=>setEditingPromptId(v.id)
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(copy/* default */.Z, {}),
                                                    className: (settings_module_default())["user-prompt-button"],
                                                    onClick: ()=>(0,utils/* copyToClipboard */.vQ)(v.content)
                                                })
                                            ]
                                        })
                                    ]
                                }, v.id ?? v.title))
                        })
                    ]
                })
            }),
            editingPromptId !== undefined && /*#__PURE__*/ jsx_runtime_.jsx(EditPromptModal, {
                id: editingPromptId,
                onClose: ()=>setEditingPromptId(undefined)
            })
        ]
    });
}
function DangerItems() {
    const chatStore = (0,store/* useChatStore */.aK)();
    const appConfig = (0,store/* useAppConfig */.MG)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_lib/* List */.aV, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                title: locales/* default */.ZP.Settings.Danger.Reset.Title,
                subTitle: locales/* default */.ZP.Settings.Danger.Reset.SubTitle,
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                    text: locales/* default */.ZP.Settings.Danger.Reset.Action,
                    onClick: async ()=>{
                        if (await (0,ui_lib/* showConfirm */.i0)(locales/* default */.ZP.Settings.Danger.Reset.Confirm)) {
                            appConfig.reset();
                        }
                    },
                    type: "danger"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                title: locales/* default */.ZP.Settings.Danger.Clear.Title,
                subTitle: locales/* default */.ZP.Settings.Danger.Clear.SubTitle,
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                    text: locales/* default */.ZP.Settings.Danger.Clear.Action,
                    onClick: async ()=>{
                        if (await (0,ui_lib/* showConfirm */.i0)(locales/* default */.ZP.Settings.Danger.Clear.Confirm)) {
                            chatStore.clearAllData();
                        }
                    },
                    type: "danger"
                })
            })
        ]
    });
}
function SyncItems() {
    const syncStore = useSyncStore();
    const webdav = syncStore.webDavConfig;
    // not ready: https://github.com/Yidadaa/ChatGPT-Next-Web/issues/920#issuecomment-1609866332
    return null;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_lib/* List */.aV, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                title: "上次同步：" + new Date().toLocaleString(),
                subTitle: "20 次对话，100 条消息，200 提示词，20 面具",
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                    icon: /*#__PURE__*/ jsx_runtime_.jsx(reload/* default */.Z, {}),
                    text: "同步",
                    onClick: ()=>{
                        syncStore.check().then(console.log);
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                title: "本地备份",
                subTitle: "20 次对话，100 条消息，200 提示词，20 面具"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                title: "Web Dav Server",
                subTitle: locales/* default */.ZP.Settings.AccessCode.SubTitle,
                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    value: webdav.server,
                    type: "text",
                    placeholder: "https://example.com",
                    onChange: (e)=>{
                        syncStore.update((config)=>config.server = e.currentTarget.value);
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                title: "Web Dav User Name",
                subTitle: "user name here",
                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    value: webdav.username,
                    type: "text",
                    placeholder: "username",
                    onChange: (e)=>{
                        syncStore.update((config)=>config.username = e.currentTarget.value);
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                title: "Web Dav Password",
                subTitle: "password here",
                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    value: webdav.password,
                    type: "text",
                    placeholder: "password",
                    onChange: (e)=>{
                        syncStore.update((config)=>config.password = e.currentTarget.value);
                    }
                })
            })
        ]
    });
}
function Settings() {
    const navigate = (0,react_router_dom_production_min.useNavigate)();
    const [showEmojiPicker, setShowEmojiPicker] = (0,react_.useState)(false);
    const config = (0,store/* useAppConfig */.MG)();
    const updateConfig = config.update;
    const updateStore = (0,store/* useUpdateStore */.u2)();
    const [checkingUpdate, setCheckingUpdate] = (0,react_.useState)(false);
    const currentVersion = updateStore.formatVersion(updateStore.version);
    const remoteId = updateStore.formatVersion(updateStore.remoteVersion);
    const hasNewVersion = currentVersion !== remoteId;
    const updateUrl = (0,client/* getClientConfig */.Z)()?.isApp ? constant/* RELEASE_URL */.cr : constant/* UPDATE_URL */.Cs;
    function checkUpdate(force = false) {
        setCheckingUpdate(true);
        updateStore.getLatestVersion(force).then(()=>{
            setCheckingUpdate(false);
        });
        console.log("[Update] local version ", updateStore.version);
        console.log("[Update] remote version ", updateStore.remoteVersion);
    }
    const usage = {
        used: updateStore.used,
        subscription: updateStore.subscription
    };
    const [loadingUsage, setLoadingUsage] = (0,react_.useState)(false);
    function checkUsage(force = false) {
        if (accessStore.hideBalanceQuery) {
            return;
        }
        setLoadingUsage(true);
        updateStore.updateUsage(force).finally(()=>{
            setLoadingUsage(false);
        });
    }
    const accessStore = (0,store/* useAccessStore */._X)();
    const enabledAccessControl = (0,react_.useMemo)(()=>accessStore.enabledAccessControl(), // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    const promptStore = (0,store_prompt/* usePromptStore */.f)();
    const builtinCount = store_prompt/* SearchService */.o.count.builtin;
    const customCount = promptStore.getUserPrompts().length ?? 0;
    const [shouldShowPromptModal, setShowPromptModal] = (0,react_.useState)(false);
    const showUsage = accessStore.isAuthorized();
    (0,react_.useEffect)(()=>{
        // checks per minutes
        checkUpdate();
        showUsage && checkUsage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react_.useEffect)(()=>{
        const keydownEvent = (e)=>{
            if (e.key === "Escape") {
                navigate(constant/* Path */.y$.Home);
            }
        };
        document.addEventListener("keydown", keydownEvent);
        return ()=>{
            document.removeEventListener("keydown", keydownEvent);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const clientConfig = (0,react_.useMemo)(()=>(0,client/* getClientConfig */.Z)(), []);
    const showAccessCode = enabledAccessControl && !clientConfig?.isApp;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(error/* ErrorBoundary */.S, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "window-header",
                "data-tauri-drag-region": true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "window-header-title",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "window-header-main-title",
                                children: locales/* default */.ZP.Settings.Title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "window-header-sub-title",
                                children: locales/* default */.ZP.Settings.SubTitle
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "window-actions",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "window-action-button"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "window-action-button"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "window-action-button",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_close/* default */.Z, {}),
                                    onClick: ()=>navigate(constant/* Path */.y$.Home),
                                    bordered: true
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (settings_module_default()).settings,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_lib/* List */.aV, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                                title: locales/* default */.ZP.Settings.Avatar,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* Popover */.J2, {
                                    onClose: ()=>setShowEmojiPicker(false),
                                    content: /*#__PURE__*/ jsx_runtime_.jsx(emoji/* AvatarPicker */.aR, {
                                        onEmojiClick: (avatar)=>{
                                            updateConfig((config)=>config.avatar = avatar);
                                            setShowEmojiPicker(false);
                                        }
                                    }),
                                    open: showEmojiPicker,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (settings_module_default()).avatar,
                                        onClick: ()=>setShowEmojiPicker(true),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(emoji/* Avatar */.qE, {
                                            avatar: config.avatar
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                                title: locales/* default */.ZP.Settings.Update.Version(currentVersion ?? "unknown"),
                                subTitle: checkingUpdate ? locales/* default */.ZP.Settings.Update.IsChecking : hasNewVersion ? locales/* default */.ZP.Settings.Update.FoundUpdate(remoteId ?? "ERROR") : locales/* default */.ZP.Settings.Update.IsLatest,
                                children: checkingUpdate ? /*#__PURE__*/ jsx_runtime_.jsx(three_dots/* default */.Z, {}) : hasNewVersion ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: updateUrl,
                                    target: "_blank",
                                    className: "link",
                                    children: locales/* default */.ZP.Settings.Update.GoToUpdate
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(reload/* default */.Z, {}),
                                    text: locales/* default */.ZP.Settings.Update.CheckUpdate,
                                    onClick: ()=>checkUpdate(true)
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                                title: locales/* default */.ZP.Settings.SendKey,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* Select */.Ph, {
                                    value: config.submitKey,
                                    onChange: (e)=>{
                                        updateConfig((config)=>config.submitKey = e.target.value);
                                    },
                                    children: Object.values(store/* SubmitKey */.mQ).map((v)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: v,
                                            children: v
                                        }, v))
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                                title: locales/* default */.ZP.Settings.Theme,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* Select */.Ph, {
                                    value: config.theme,
                                    onChange: (e)=>{
                                        updateConfig((config)=>config.theme = e.target.value);
                                    },
                                    children: Object.values(store/* Theme */.Q2).map((v)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: v,
                                            children: v
                                        }, v))
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                                title: locales/* default */.ZP.Settings.Lang.Name,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* Select */.Ph, {
                                    value: (0,locales/* getLang */.VQ)(),
                                    onChange: (e)=>{
                                        (0,locales/* changeLang */.t4)(e.target.value);
                                    },
                                    children: locales/* AllLangs */.DC.map((lang)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: lang,
                                            children: locales/* ALL_LANG_OPTIONS */.nW[lang]
                                        }, lang))
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                                title: locales/* default */.ZP.Settings.FontSize.Title,
                                subTitle: locales/* default */.ZP.Settings.FontSize.SubTitle,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(input_range/* InputRange */.O, {
                                    title: `${config.fontSize ?? 14}px`,
                                    value: config.fontSize,
                                    min: "12",
                                    max: "18",
                                    step: "1",
                                    onChange: (e)=>updateConfig((config)=>config.fontSize = Number.parseInt(e.currentTarget.value))
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                                title: locales/* default */.ZP.Settings.AutoGenerateTitle.Title,
                                subTitle: locales/* default */.ZP.Settings.AutoGenerateTitle.SubTitle,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "checkbox",
                                    checked: config.enableAutoGenerateTitle,
                                    onChange: (e)=>updateConfig((config)=>config.enableAutoGenerateTitle = e.currentTarget.checked)
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                                title: locales/* default */.ZP.Settings.SendPreviewBubble.Title,
                                subTitle: locales/* default */.ZP.Settings.SendPreviewBubble.SubTitle,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "checkbox",
                                    checked: config.sendPreviewBubble,
                                    onChange: (e)=>updateConfig((config)=>config.sendPreviewBubble = e.currentTarget.checked)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_lib/* List */.aV, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                                title: locales/* default */.ZP.Settings.Mask.Splash.Title,
                                subTitle: locales/* default */.ZP.Settings.Mask.Splash.SubTitle,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "checkbox",
                                    checked: !config.dontShowMaskSplashScreen,
                                    onChange: (e)=>updateConfig((config)=>config.dontShowMaskSplashScreen = !e.currentTarget.checked)
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                                title: locales/* default */.ZP.Settings.Mask.Builtin.Title,
                                subTitle: locales/* default */.ZP.Settings.Mask.Builtin.SubTitle,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "checkbox",
                                    checked: config.hideBuiltinMasks,
                                    onChange: (e)=>updateConfig((config)=>config.hideBuiltinMasks = e.currentTarget.checked)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_lib/* List */.aV, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                                title: locales/* default */.ZP.Settings.Prompt.Disable.Title,
                                subTitle: locales/* default */.ZP.Settings.Prompt.Disable.SubTitle,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "checkbox",
                                    checked: config.disablePromptHint,
                                    onChange: (e)=>updateConfig((config)=>config.disablePromptHint = e.currentTarget.checked)
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                                title: locales/* default */.ZP.Settings.Prompt.List,
                                subTitle: locales/* default */.ZP.Settings.Prompt.ListCount(builtinCount, customCount),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(edit/* default */.Z, {}),
                                    text: locales/* default */.ZP.Settings.Prompt.Edit,
                                    onClick: ()=>setShowPromptModal(true)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_lib/* List */.aV, {
                        children: [
                            showAccessCode ? /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                                title: locales/* default */.ZP.Settings.AccessCode.Title,
                                subTitle: locales/* default */.ZP.Settings.AccessCode.SubTitle,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* PasswordInput */.WU, {
                                    value: accessStore.accessCode,
                                    type: "text",
                                    placeholder: locales/* default */.ZP.Settings.AccessCode.Placeholder,
                                    onChange: (e)=>{
                                        accessStore.updateCode(e.currentTarget.value);
                                    }
                                })
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                                title: locales/* default */.ZP.Settings.CustomModel.Title,
                                subTitle: locales/* default */.ZP.Settings.CustomModel.SubTitle,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    value: config.customModels,
                                    placeholder: "chatglm2-6b,qwen,llama2",
                                    onChange: (e)=>config.update((config)=>config.customModels = e.currentTarget.value)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SyncItems, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* List */.aV, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(model_config/* ModelConfigList */.j, {
                            modelConfig: config.modelConfig,
                            updateConfig: (updater)=>{
                                const modelConfig = {
                                    ...config.modelConfig
                                };
                                updater(modelConfig);
                                config.update((config)=>config.modelConfig = modelConfig);
                            }
                        })
                    }),
                    shouldShowPromptModal && /*#__PURE__*/ jsx_runtime_.jsx(UserPromptModal, {
                        onClose: ()=>setShowPromptModal(false)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(DangerItems, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 44157:
/***/ ((module) => {

// Exports
module.exports = {
	"settings": "settings_settings__427bK",
	"avatar": "settings_avatar__jO3Wv",
	"edit-prompt-modal": "settings_edit-prompt-modal__iP1gi",
	"edit-prompt-title": "settings_edit-prompt-title__mq8os",
	"edit-prompt-content": "settings_edit-prompt-content__9i9Y_",
	"user-prompt-modal": "settings_user-prompt-modal__YWssH",
	"user-prompt-search": "settings_user-prompt-search__kskD_",
	"user-prompt-list": "settings_user-prompt-list__BrWRy",
	"user-prompt-item": "settings_user-prompt-item__kh_6Q",
	"user-prompt-header": "settings_user-prompt-header__MBMAf",
	"user-prompt-title": "settings_user-prompt-title__BpRs1",
	"user-prompt-content": "settings_user-prompt-content__CxL3R",
	"user-prompt-buttons": "settings_user-prompt-buttons__y5Hf_",
	"user-prompt-button": "settings_user-prompt-button__efhSx"
};


/***/ })

};
;