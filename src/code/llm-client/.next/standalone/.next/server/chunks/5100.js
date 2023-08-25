exports.id = 5100;
exports.ids = [5100];
exports.modules = {

/***/ 83674:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.applyStyle = void 0;
function applyStyle(node, options) {
    var style = node.style;
    if (options.backgroundColor) {
        style.backgroundColor = options.backgroundColor;
    }
    if (options.width) {
        style.width = "".concat(options.width, "px");
    }
    if (options.height) {
        style.height = "".concat(options.height, "px");
    }
    var manual = options.style;
    if (manual != null) {
        Object.keys(manual).forEach(function (key) {
            style[key] = manual[key];
        });
    }
    return node;
}
exports.applyStyle = applyStyle;
//# sourceMappingURL=apply-style.js.map

/***/ }),

/***/ 91078:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cloneNode = void 0;
var clone_pseudos_1 = __webpack_require__(63460);
var util_1 = __webpack_require__(8586);
var mimes_1 = __webpack_require__(25686);
var dataurl_1 = __webpack_require__(92793);
function cloneCanvasElement(canvas) {
    return __awaiter(this, void 0, void 0, function () {
        var dataURL;
        return __generator(this, function (_a) {
            dataURL = canvas.toDataURL();
            if (dataURL === 'data:,') {
                return [2 /*return*/, canvas.cloneNode(false)];
            }
            return [2 /*return*/, (0, util_1.createImage)(dataURL)];
        });
    });
}
function cloneVideoElement(video, options) {
    return __awaiter(this, void 0, void 0, function () {
        var canvas, ctx, dataURL_1, poster, contentType, dataURL;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (video.currentSrc) {
                        canvas = document.createElement('canvas');
                        ctx = canvas.getContext('2d');
                        canvas.width = video.clientWidth;
                        canvas.height = video.clientHeight;
                        ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                        dataURL_1 = canvas.toDataURL();
                        return [2 /*return*/, (0, util_1.createImage)(dataURL_1)];
                    }
                    poster = video.poster;
                    contentType = (0, mimes_1.getMimeType)(poster);
                    return [4 /*yield*/, (0, dataurl_1.resourceToDataURL)(poster, contentType, options)];
                case 1:
                    dataURL = _a.sent();
                    return [2 /*return*/, (0, util_1.createImage)(dataURL)];
            }
        });
    });
}
function cloneIFrameElement(iframe) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 3, , 4]);
                    if (!((_a = iframe === null || iframe === void 0 ? void 0 : iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.body)) return [3 /*break*/, 2];
                    return [4 /*yield*/, cloneNode(iframe.contentDocument.body, {}, true)];
                case 1: return [2 /*return*/, (_c.sent())];
                case 2: return [3 /*break*/, 4];
                case 3:
                    _b = _c.sent();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/, iframe.cloneNode(false)];
            }
        });
    });
}
function cloneSingleNode(node, options) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if ((0, util_1.isInstanceOfElement)(node, HTMLCanvasElement)) {
                return [2 /*return*/, cloneCanvasElement(node)];
            }
            if ((0, util_1.isInstanceOfElement)(node, HTMLVideoElement)) {
                return [2 /*return*/, cloneVideoElement(node, options)];
            }
            if ((0, util_1.isInstanceOfElement)(node, HTMLIFrameElement)) {
                return [2 /*return*/, cloneIFrameElement(node)];
            }
            return [2 /*return*/, node.cloneNode(false)];
        });
    });
}
var isSlotElement = function (node) {
    return node.tagName != null && node.tagName.toUpperCase() === 'SLOT';
};
function cloneChildren(nativeNode, clonedNode, options) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var children;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    children = [];
                    if (isSlotElement(nativeNode) && nativeNode.assignedNodes) {
                        children = (0, util_1.toArray)(nativeNode.assignedNodes());
                    }
                    else if ((0, util_1.isInstanceOfElement)(nativeNode, HTMLIFrameElement) &&
                        ((_a = nativeNode.contentDocument) === null || _a === void 0 ? void 0 : _a.body)) {
                        children = (0, util_1.toArray)(nativeNode.contentDocument.body.childNodes);
                    }
                    else {
                        children = (0, util_1.toArray)(((_b = nativeNode.shadowRoot) !== null && _b !== void 0 ? _b : nativeNode).childNodes);
                    }
                    if (children.length === 0 ||
                        (0, util_1.isInstanceOfElement)(nativeNode, HTMLVideoElement)) {
                        return [2 /*return*/, clonedNode];
                    }
                    return [4 /*yield*/, children.reduce(function (deferred, child) {
                            return deferred
                                .then(function () { return cloneNode(child, options); })
                                .then(function (clonedChild) {
                                if (clonedChild) {
                                    clonedNode.appendChild(clonedChild);
                                }
                            });
                        }, Promise.resolve())];
                case 1:
                    _c.sent();
                    return [2 /*return*/, clonedNode];
            }
        });
    });
}
function cloneCSSStyle(nativeNode, clonedNode) {
    var targetStyle = clonedNode.style;
    if (!targetStyle) {
        return;
    }
    var sourceStyle = window.getComputedStyle(nativeNode);
    if (sourceStyle.cssText) {
        targetStyle.cssText = sourceStyle.cssText;
        targetStyle.transformOrigin = sourceStyle.transformOrigin;
    }
    else {
        (0, util_1.toArray)(sourceStyle).forEach(function (name) {
            var value = sourceStyle.getPropertyValue(name);
            if (name === 'font-size' && value.endsWith('px')) {
                var reducedFont = Math.floor(parseFloat(value.substring(0, value.length - 2))) - 0.1;
                value = "".concat(reducedFont, "px");
            }
            if ((0, util_1.isInstanceOfElement)(nativeNode, HTMLIFrameElement) &&
                name === 'display' &&
                value === 'inline') {
                value = 'block';
            }
            if (name === 'd' && clonedNode.getAttribute('d')) {
                value = "path(".concat(clonedNode.getAttribute('d'), ")");
            }
            targetStyle.setProperty(name, value, sourceStyle.getPropertyPriority(name));
        });
    }
}
function cloneInputValue(nativeNode, clonedNode) {
    if ((0, util_1.isInstanceOfElement)(nativeNode, HTMLTextAreaElement)) {
        clonedNode.innerHTML = nativeNode.value;
    }
    if ((0, util_1.isInstanceOfElement)(nativeNode, HTMLInputElement)) {
        clonedNode.setAttribute('value', nativeNode.value);
    }
}
function cloneSelectValue(nativeNode, clonedNode) {
    if ((0, util_1.isInstanceOfElement)(nativeNode, HTMLSelectElement)) {
        var clonedSelect = clonedNode;
        var selectedOption = Array.from(clonedSelect.children).find(function (child) { return nativeNode.value === child.getAttribute('value'); });
        if (selectedOption) {
            selectedOption.setAttribute('selected', '');
        }
    }
}
function decorate(nativeNode, clonedNode) {
    if ((0, util_1.isInstanceOfElement)(clonedNode, Element)) {
        cloneCSSStyle(nativeNode, clonedNode);
        (0, clone_pseudos_1.clonePseudoElements)(nativeNode, clonedNode);
        cloneInputValue(nativeNode, clonedNode);
        cloneSelectValue(nativeNode, clonedNode);
    }
    return clonedNode;
}
function ensureSVGSymbols(clone, options) {
    return __awaiter(this, void 0, void 0, function () {
        var uses, processedDefs, i, use, id, exist, definition, _a, _b, nodes, ns, svg, defs, i;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    uses = clone.querySelectorAll ? clone.querySelectorAll('use') : [];
                    if (uses.length === 0) {
                        return [2 /*return*/, clone];
                    }
                    processedDefs = {};
                    i = 0;
                    _c.label = 1;
                case 1:
                    if (!(i < uses.length)) return [3 /*break*/, 4];
                    use = uses[i];
                    id = use.getAttribute('xlink:href');
                    if (!id) return [3 /*break*/, 3];
                    exist = clone.querySelector(id);
                    definition = document.querySelector(id);
                    if (!(!exist && definition && !processedDefs[id])) return [3 /*break*/, 3];
                    // eslint-disable-next-line no-await-in-loop
                    _a = processedDefs;
                    _b = id;
                    return [4 /*yield*/, cloneNode(definition, options, true)];
                case 2:
                    // eslint-disable-next-line no-await-in-loop
                    _a[_b] = (_c.sent());
                    _c.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    nodes = Object.values(processedDefs);
                    if (nodes.length) {
                        ns = 'http://www.w3.org/1999/xhtml';
                        svg = document.createElementNS(ns, 'svg');
                        svg.setAttribute('xmlns', ns);
                        svg.style.position = 'absolute';
                        svg.style.width = '0';
                        svg.style.height = '0';
                        svg.style.overflow = 'hidden';
                        svg.style.display = 'none';
                        defs = document.createElementNS(ns, 'defs');
                        svg.appendChild(defs);
                        for (i = 0; i < nodes.length; i++) {
                            defs.appendChild(nodes[i]);
                        }
                        clone.appendChild(svg);
                    }
                    return [2 /*return*/, clone];
            }
        });
    });
}
function cloneNode(node, options, isRoot) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!isRoot && options.filter && !options.filter(node)) {
                return [2 /*return*/, null];
            }
            return [2 /*return*/, Promise.resolve(node)
                    .then(function (clonedNode) { return cloneSingleNode(clonedNode, options); })
                    .then(function (clonedNode) { return cloneChildren(node, clonedNode, options); })
                    .then(function (clonedNode) { return decorate(node, clonedNode); })
                    .then(function (clonedNode) { return ensureSVGSymbols(clonedNode, options); })];
        });
    });
}
exports.cloneNode = cloneNode;
//# sourceMappingURL=clone-node.js.map

/***/ }),

/***/ 63460:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.clonePseudoElements = void 0;
var util_1 = __webpack_require__(8586);
function formatCSSText(style) {
    var content = style.getPropertyValue('content');
    return "".concat(style.cssText, " content: '").concat(content.replace(/'|"/g, ''), "';");
}
function formatCSSProperties(style) {
    return (0, util_1.toArray)(style)
        .map(function (name) {
        var value = style.getPropertyValue(name);
        var priority = style.getPropertyPriority(name);
        return "".concat(name, ": ").concat(value).concat(priority ? ' !important' : '', ";");
    })
        .join(' ');
}
function getPseudoElementStyle(className, pseudo, style) {
    var selector = ".".concat(className, ":").concat(pseudo);
    var cssText = style.cssText
        ? formatCSSText(style)
        : formatCSSProperties(style);
    return document.createTextNode("".concat(selector, "{").concat(cssText, "}"));
}
function clonePseudoElement(nativeNode, clonedNode, pseudo) {
    var style = window.getComputedStyle(nativeNode, pseudo);
    var content = style.getPropertyValue('content');
    if (content === '' || content === 'none') {
        return;
    }
    var className = (0, util_1.uuid)();
    try {
        clonedNode.className = "".concat(clonedNode.className, " ").concat(className);
    }
    catch (err) {
        return;
    }
    var styleElement = document.createElement('style');
    styleElement.appendChild(getPseudoElementStyle(className, pseudo, style));
    clonedNode.appendChild(styleElement);
}
function clonePseudoElements(nativeNode, clonedNode) {
    clonePseudoElement(nativeNode, clonedNode, ':before');
    clonePseudoElement(nativeNode, clonedNode, ':after');
}
exports.clonePseudoElements = clonePseudoElements;
//# sourceMappingURL=clone-pseudos.js.map

/***/ }),

/***/ 92793:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resourceToDataURL = exports.fetchAsDataURL = exports.makeDataUrl = exports.isDataUrl = void 0;
function getContentFromDataUrl(dataURL) {
    return dataURL.split(/,/)[1];
}
function isDataUrl(url) {
    return url.search(/^(data:)/) !== -1;
}
exports.isDataUrl = isDataUrl;
function makeDataUrl(content, mimeType) {
    return "data:".concat(mimeType, ";base64,").concat(content);
}
exports.makeDataUrl = makeDataUrl;
function fetchAsDataURL(url, init, process) {
    return __awaiter(this, void 0, void 0, function () {
        var res, blob;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url, init)];
                case 1:
                    res = _a.sent();
                    if (res.status === 404) {
                        throw new Error("Resource \"".concat(res.url, "\" not found"));
                    }
                    return [4 /*yield*/, res.blob()];
                case 2:
                    blob = _a.sent();
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var reader = new FileReader();
                            reader.onerror = reject;
                            reader.onloadend = function () {
                                try {
                                    resolve(process({ res: res, result: reader.result }));
                                }
                                catch (error) {
                                    reject(error);
                                }
                            };
                            reader.readAsDataURL(blob);
                        })];
            }
        });
    });
}
exports.fetchAsDataURL = fetchAsDataURL;
var cache = {};
function getCacheKey(url, contentType, includeQueryParams) {
    var key = url.replace(/\?.*/, '');
    if (includeQueryParams) {
        key = url;
    }
    // font resource
    if (/ttf|otf|eot|woff2?/i.test(key)) {
        key = key.replace(/.*\//, '');
    }
    return contentType ? "[".concat(contentType, "]").concat(key) : key;
}
function resourceToDataURL(resourceUrl, contentType, options) {
    return __awaiter(this, void 0, void 0, function () {
        var cacheKey, dataURL, content, error_1, msg;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cacheKey = getCacheKey(resourceUrl, contentType, options.includeQueryParams);
                    if (cache[cacheKey] != null) {
                        return [2 /*return*/, cache[cacheKey]];
                    }
                    // ref: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
                    if (options.cacheBust) {
                        // eslint-disable-next-line no-param-reassign
                        resourceUrl += (/\?/.test(resourceUrl) ? '&' : '?') + new Date().getTime();
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetchAsDataURL(resourceUrl, options.fetchRequestInit, function (_a) {
                            var res = _a.res, result = _a.result;
                            if (!contentType) {
                                // eslint-disable-next-line no-param-reassign
                                contentType = res.headers.get('Content-Type') || '';
                            }
                            return getContentFromDataUrl(result);
                        })];
                case 2:
                    content = _a.sent();
                    dataURL = makeDataUrl(content, contentType);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    dataURL = options.imagePlaceholder || '';
                    msg = "Failed to fetch resource: ".concat(resourceUrl);
                    if (error_1) {
                        msg = typeof error_1 === 'string' ? error_1 : error_1.message;
                    }
                    if (msg) {
                        console.warn(msg);
                    }
                    return [3 /*break*/, 4];
                case 4:
                    cache[cacheKey] = dataURL;
                    return [2 /*return*/, dataURL];
            }
        });
    });
}
exports.resourceToDataURL = resourceToDataURL;
//# sourceMappingURL=dataurl.js.map

/***/ }),

/***/ 91267:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.embedImages = void 0;
var embed_resources_1 = __webpack_require__(9578);
var util_1 = __webpack_require__(8586);
var dataurl_1 = __webpack_require__(92793);
var mimes_1 = __webpack_require__(25686);
function embedProp(propName, node, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var propValue, cssString;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    propValue = (_a = node.style) === null || _a === void 0 ? void 0 : _a.getPropertyValue(propName);
                    if (!propValue) return [3 /*break*/, 2];
                    return [4 /*yield*/, (0, embed_resources_1.embedResources)(propValue, null, options)];
                case 1:
                    cssString = _b.sent();
                    node.style.setProperty(propName, cssString, node.style.getPropertyPriority(propName));
                    return [2 /*return*/, true];
                case 2: return [2 /*return*/, false];
            }
        });
    });
}
function embedBackground(clonedNode, options) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, embedProp('background', clonedNode, options)];
                case 1:
                    if (!!(_a.sent())) return [3 /*break*/, 3];
                    return [4 /*yield*/, embedProp('background-image', clonedNode, options)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [4 /*yield*/, embedProp('mask', clonedNode, options)];
                case 4:
                    if (!!(_a.sent())) return [3 /*break*/, 6];
                    return [4 /*yield*/, embedProp('mask-image', clonedNode, options)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
}
function embedImageNode(clonedNode, options) {
    return __awaiter(this, void 0, void 0, function () {
        var isImageElement, url, dataURL;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isImageElement = (0, util_1.isInstanceOfElement)(clonedNode, HTMLImageElement);
                    if (!(isImageElement && !(0, dataurl_1.isDataUrl)(clonedNode.src)) &&
                        !((0, util_1.isInstanceOfElement)(clonedNode, SVGImageElement) &&
                            !(0, dataurl_1.isDataUrl)(clonedNode.href.baseVal))) {
                        return [2 /*return*/];
                    }
                    url = isImageElement ? clonedNode.src : clonedNode.href.baseVal;
                    return [4 /*yield*/, (0, dataurl_1.resourceToDataURL)(url, (0, mimes_1.getMimeType)(url), options)];
                case 1:
                    dataURL = _a.sent();
                    return [4 /*yield*/, new Promise(function (resolve, reject) {
                            clonedNode.onload = resolve;
                            clonedNode.onerror = reject;
                            var image = clonedNode;
                            if (image.decode) {
                                image.decode = resolve;
                            }
                            if (image.loading === 'lazy') {
                                image.loading = 'eager';
                            }
                            if (isImageElement) {
                                clonedNode.srcset = '';
                                clonedNode.src = dataURL;
                            }
                            else {
                                clonedNode.href.baseVal = dataURL;
                            }
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function embedChildren(clonedNode, options) {
    return __awaiter(this, void 0, void 0, function () {
        var children, deferreds;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    children = (0, util_1.toArray)(clonedNode.childNodes);
                    deferreds = children.map(function (child) { return embedImages(child, options); });
                    return [4 /*yield*/, Promise.all(deferreds).then(function () { return clonedNode; })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function embedImages(clonedNode, options) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(0, util_1.isInstanceOfElement)(clonedNode, Element)) return [3 /*break*/, 4];
                    return [4 /*yield*/, embedBackground(clonedNode, options)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, embedImageNode(clonedNode, options)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, embedChildren(clonedNode, options)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.embedImages = embedImages;
//# sourceMappingURL=embed-images.js.map

/***/ }),

/***/ 9578:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.embedResources = exports.shouldEmbed = exports.embed = exports.parseURLs = void 0;
var util_1 = __webpack_require__(8586);
var mimes_1 = __webpack_require__(25686);
var dataurl_1 = __webpack_require__(92793);
var URL_REGEX = /url\((['"]?)([^'"]+?)\1\)/g;
var URL_WITH_FORMAT_REGEX = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g;
var FONT_SRC_REGEX = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function toRegex(url) {
    // eslint-disable-next-line no-useless-escape
    var escaped = url.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
    return new RegExp("(url\\(['\"]?)(".concat(escaped, ")(['\"]?\\))"), 'g');
}
function parseURLs(cssText) {
    var urls = [];
    cssText.replace(URL_REGEX, function (raw, quotation, url) {
        urls.push(url);
        return raw;
    });
    return urls.filter(function (url) { return !(0, dataurl_1.isDataUrl)(url); });
}
exports.parseURLs = parseURLs;
function embed(cssText, resourceURL, baseURL, options, getContentFromUrl) {
    return __awaiter(this, void 0, void 0, function () {
        var resolvedURL, contentType, dataURL, content, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    resolvedURL = baseURL ? (0, util_1.resolveUrl)(resourceURL, baseURL) : resourceURL;
                    contentType = (0, mimes_1.getMimeType)(resourceURL);
                    dataURL = void 0;
                    if (!getContentFromUrl) return [3 /*break*/, 2];
                    return [4 /*yield*/, getContentFromUrl(resolvedURL)];
                case 1:
                    content = _a.sent();
                    dataURL = (0, dataurl_1.makeDataUrl)(content, contentType);
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, (0, dataurl_1.resourceToDataURL)(resolvedURL, contentType, options)];
                case 3:
                    dataURL = _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/, cssText.replace(toRegex(resourceURL), "$1".concat(dataURL, "$3"))];
                case 5:
                    error_1 = _a.sent();
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/, cssText];
            }
        });
    });
}
exports.embed = embed;
function filterPreferredFontFormat(str, _a) {
    var preferredFontFormat = _a.preferredFontFormat;
    return !preferredFontFormat
        ? str
        : str.replace(FONT_SRC_REGEX, function (match) {
            // eslint-disable-next-line no-constant-condition
            while (true) {
                var _a = URL_WITH_FORMAT_REGEX.exec(match) || [], src = _a[0], format = _a[2];
                if (!format) {
                    return '';
                }
                if (format === preferredFontFormat) {
                    return "src: ".concat(src, ";");
                }
            }
        });
}
function shouldEmbed(url) {
    return url.search(URL_REGEX) !== -1;
}
exports.shouldEmbed = shouldEmbed;
function embedResources(cssText, baseUrl, options) {
    return __awaiter(this, void 0, void 0, function () {
        var filteredCSSText, urls;
        return __generator(this, function (_a) {
            if (!shouldEmbed(cssText)) {
                return [2 /*return*/, cssText];
            }
            filteredCSSText = filterPreferredFontFormat(cssText, options);
            urls = parseURLs(filteredCSSText);
            return [2 /*return*/, urls.reduce(function (deferred, url) {
                    return deferred.then(function (css) { return embed(css, url, baseUrl, options); });
                }, Promise.resolve(filteredCSSText))];
        });
    });
}
exports.embedResources = embedResources;
//# sourceMappingURL=embed-resources.js.map

/***/ }),

/***/ 7291:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.embedWebFonts = exports.getWebFontCSS = void 0;
var util_1 = __webpack_require__(8586);
var dataurl_1 = __webpack_require__(92793);
var embed_resources_1 = __webpack_require__(9578);
var cssFetchCache = {};
function fetchCSS(url) {
    return __awaiter(this, void 0, void 0, function () {
        var cache, res, cssText;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cache = cssFetchCache[url];
                    if (cache != null) {
                        return [2 /*return*/, cache];
                    }
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.text()];
                case 2:
                    cssText = _a.sent();
                    cache = { url: url, cssText: cssText };
                    cssFetchCache[url] = cache;
                    return [2 /*return*/, cache];
            }
        });
    });
}
function embedFonts(data, options) {
    return __awaiter(this, void 0, void 0, function () {
        var cssText, regexUrl, fontLocs, loadFonts;
        var _this = this;
        return __generator(this, function (_a) {
            cssText = data.cssText;
            regexUrl = /url\(["']?([^"')]+)["']?\)/g;
            fontLocs = cssText.match(/url\([^)]+\)/g) || [];
            loadFonts = fontLocs.map(function (loc) { return __awaiter(_this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    url = loc.replace(regexUrl, '$1');
                    if (!url.startsWith('https://')) {
                        url = new URL(url, data.url).href;
                    }
                    return [2 /*return*/, (0, dataurl_1.fetchAsDataURL)(url, options.fetchRequestInit, function (_a) {
                            var result = _a.result;
                            cssText = cssText.replace(loc, "url(".concat(result, ")"));
                            return [loc, result];
                        })];
                });
            }); });
            return [2 /*return*/, Promise.all(loadFonts).then(function () { return cssText; })];
        });
    });
}
function parseCSS(source) {
    if (source == null) {
        return [];
    }
    var result = [];
    var commentsRegex = /(\/\*[\s\S]*?\*\/)/gi;
    // strip out comments
    var cssText = source.replace(commentsRegex, '');
    // eslint-disable-next-line prefer-regex-literals
    var keyframesRegex = new RegExp('((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})', 'gi');
    // eslint-disable-next-line no-constant-condition
    while (true) {
        var matches = keyframesRegex.exec(cssText);
        if (matches === null) {
            break;
        }
        result.push(matches[0]);
    }
    cssText = cssText.replace(keyframesRegex, '');
    var importRegex = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi;
    // to match css & media queries together
    var combinedCSSRegex = '((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]' +
        '*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})';
    // unified regex
    var unifiedRegex = new RegExp(combinedCSSRegex, 'gi');
    // eslint-disable-next-line no-constant-condition
    while (true) {
        var matches = importRegex.exec(cssText);
        if (matches === null) {
            matches = unifiedRegex.exec(cssText);
            if (matches === null) {
                break;
            }
            else {
                importRegex.lastIndex = unifiedRegex.lastIndex;
            }
        }
        else {
            unifiedRegex.lastIndex = importRegex.lastIndex;
        }
        result.push(matches[0]);
    }
    return result;
}
function getCSSRules(styleSheets, options) {
    return __awaiter(this, void 0, void 0, function () {
        var ret, deferreds;
        return __generator(this, function (_a) {
            ret = [];
            deferreds = [];
            // First loop inlines imports
            styleSheets.forEach(function (sheet) {
                if ('cssRules' in sheet) {
                    try {
                        (0, util_1.toArray)(sheet.cssRules || []).forEach(function (item, index) {
                            if (item.type === CSSRule.IMPORT_RULE) {
                                var importIndex_1 = index + 1;
                                var url = item.href;
                                var deferred = fetchCSS(url)
                                    .then(function (metadata) { return embedFonts(metadata, options); })
                                    .then(function (cssText) {
                                    return parseCSS(cssText).forEach(function (rule) {
                                        try {
                                            sheet.insertRule(rule, rule.startsWith('@import')
                                                ? (importIndex_1 += 1)
                                                : sheet.cssRules.length);
                                        }
                                        catch (error) {
                                            console.error('Error inserting rule from remote css', {
                                                rule: rule,
                                                error: error,
                                            });
                                        }
                                    });
                                })
                                    .catch(function (e) {
                                    console.error('Error loading remote css', e.toString());
                                });
                                deferreds.push(deferred);
                            }
                        });
                    }
                    catch (e) {
                        var inline_1 = styleSheets.find(function (a) { return a.href == null; }) || document.styleSheets[0];
                        if (sheet.href != null) {
                            deferreds.push(fetchCSS(sheet.href)
                                .then(function (metadata) { return embedFonts(metadata, options); })
                                .then(function (cssText) {
                                return parseCSS(cssText).forEach(function (rule) {
                                    inline_1.insertRule(rule, sheet.cssRules.length);
                                });
                            })
                                .catch(function (err) {
                                console.error('Error loading remote stylesheet', err);
                            }));
                        }
                        console.error('Error inlining remote css file', e);
                    }
                }
            });
            return [2 /*return*/, Promise.all(deferreds).then(function () {
                    // Second loop parses rules
                    styleSheets.forEach(function (sheet) {
                        if ('cssRules' in sheet) {
                            try {
                                (0, util_1.toArray)(sheet.cssRules || []).forEach(function (item) {
                                    ret.push(item);
                                });
                            }
                            catch (e) {
                                console.error("Error while reading CSS rules from ".concat(sheet.href), e);
                            }
                        }
                    });
                    return ret;
                })];
        });
    });
}
function getWebFontRules(cssRules) {
    return cssRules
        .filter(function (rule) { return rule.type === CSSRule.FONT_FACE_RULE; })
        .filter(function (rule) { return (0, embed_resources_1.shouldEmbed)(rule.style.getPropertyValue('src')); });
}
function parseWebFontRules(node, options) {
    return __awaiter(this, void 0, void 0, function () {
        var styleSheets, cssRules;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (node.ownerDocument == null) {
                        throw new Error('Provided element is not within a Document');
                    }
                    styleSheets = (0, util_1.toArray)(node.ownerDocument.styleSheets);
                    return [4 /*yield*/, getCSSRules(styleSheets, options)];
                case 1:
                    cssRules = _a.sent();
                    return [2 /*return*/, getWebFontRules(cssRules)];
            }
        });
    });
}
function getWebFontCSS(node, options) {
    return __awaiter(this, void 0, void 0, function () {
        var rules, cssTexts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, parseWebFontRules(node, options)];
                case 1:
                    rules = _a.sent();
                    return [4 /*yield*/, Promise.all(rules.map(function (rule) {
                            var baseUrl = rule.parentStyleSheet ? rule.parentStyleSheet.href : null;
                            return (0, embed_resources_1.embedResources)(rule.cssText, baseUrl, options);
                        }))];
                case 2:
                    cssTexts = _a.sent();
                    return [2 /*return*/, cssTexts.join('\n')];
            }
        });
    });
}
exports.getWebFontCSS = getWebFontCSS;
function embedWebFonts(clonedNode, options) {
    return __awaiter(this, void 0, void 0, function () {
        var cssText, _a, _b, styleNode, sytleContent;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!(options.fontEmbedCSS != null)) return [3 /*break*/, 1];
                    _a = options.fontEmbedCSS;
                    return [3 /*break*/, 5];
                case 1:
                    if (!options.skipFonts) return [3 /*break*/, 2];
                    _b = null;
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, getWebFontCSS(clonedNode, options)];
                case 3:
                    _b = _c.sent();
                    _c.label = 4;
                case 4:
                    _a = _b;
                    _c.label = 5;
                case 5:
                    cssText = _a;
                    if (cssText) {
                        styleNode = document.createElement('style');
                        sytleContent = document.createTextNode(cssText);
                        styleNode.appendChild(sytleContent);
                        if (clonedNode.firstChild) {
                            clonedNode.insertBefore(styleNode, clonedNode.firstChild);
                        }
                        else {
                            clonedNode.appendChild(styleNode);
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.embedWebFonts = embedWebFonts;
//# sourceMappingURL=embed-webfonts.js.map

/***/ }),

/***/ 5779:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFontEmbedCSS = exports.toBlob = exports.toJpeg = exports.toPng = exports.toPixelData = exports.toCanvas = exports.toSvg = void 0;
var clone_node_1 = __webpack_require__(91078);
var embed_images_1 = __webpack_require__(91267);
var apply_style_1 = __webpack_require__(83674);
var embed_webfonts_1 = __webpack_require__(7291);
var util_1 = __webpack_require__(8586);
function toSvg(node, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var _a, width, height, clonedNode, datauri;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = (0, util_1.getImageSize)(node, options), width = _a.width, height = _a.height;
                    return [4 /*yield*/, (0, clone_node_1.cloneNode)(node, options, true)];
                case 1:
                    clonedNode = (_b.sent());
                    return [4 /*yield*/, (0, embed_webfonts_1.embedWebFonts)(clonedNode, options)];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, (0, embed_images_1.embedImages)(clonedNode, options)];
                case 3:
                    _b.sent();
                    (0, apply_style_1.applyStyle)(clonedNode, options);
                    return [4 /*yield*/, (0, util_1.nodeToDataURL)(clonedNode, width, height)];
                case 4:
                    datauri = _b.sent();
                    return [2 /*return*/, datauri];
            }
        });
    });
}
exports.toSvg = toSvg;
function toCanvas(node, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var _a, width, height, svg, img, canvas, context, ratio, canvasWidth, canvasHeight;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = (0, util_1.getImageSize)(node, options), width = _a.width, height = _a.height;
                    return [4 /*yield*/, toSvg(node, options)];
                case 1:
                    svg = _b.sent();
                    return [4 /*yield*/, (0, util_1.createImage)(svg)];
                case 2:
                    img = _b.sent();
                    canvas = document.createElement('canvas');
                    context = canvas.getContext('2d');
                    ratio = options.pixelRatio || (0, util_1.getPixelRatio)();
                    canvasWidth = options.canvasWidth || width;
                    canvasHeight = options.canvasHeight || height;
                    canvas.width = canvasWidth * ratio;
                    canvas.height = canvasHeight * ratio;
                    if (!options.skipAutoScale) {
                        (0, util_1.checkCanvasDimensions)(canvas);
                    }
                    canvas.style.width = "".concat(canvasWidth);
                    canvas.style.height = "".concat(canvasHeight);
                    if (options.backgroundColor) {
                        context.fillStyle = options.backgroundColor;
                        context.fillRect(0, 0, canvas.width, canvas.height);
                    }
                    context.drawImage(img, 0, 0, canvas.width, canvas.height);
                    return [2 /*return*/, canvas];
            }
        });
    });
}
exports.toCanvas = toCanvas;
function toPixelData(node, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var _a, width, height, canvas, ctx;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = (0, util_1.getImageSize)(node, options), width = _a.width, height = _a.height;
                    return [4 /*yield*/, toCanvas(node, options)];
                case 1:
                    canvas = _b.sent();
                    ctx = canvas.getContext('2d');
                    return [2 /*return*/, ctx.getImageData(0, 0, width, height).data];
            }
        });
    });
}
exports.toPixelData = toPixelData;
function toPng(node, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var canvas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, toCanvas(node, options)];
                case 1:
                    canvas = _a.sent();
                    return [2 /*return*/, canvas.toDataURL()];
            }
        });
    });
}
exports.toPng = toPng;
function toJpeg(node, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var canvas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, toCanvas(node, options)];
                case 1:
                    canvas = _a.sent();
                    return [2 /*return*/, canvas.toDataURL('image/jpeg', options.quality || 1)];
            }
        });
    });
}
exports.toJpeg = toJpeg;
function toBlob(node, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var canvas, blob;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, toCanvas(node, options)];
                case 1:
                    canvas = _a.sent();
                    return [4 /*yield*/, (0, util_1.canvasToBlob)(canvas)];
                case 2:
                    blob = _a.sent();
                    return [2 /*return*/, blob];
            }
        });
    });
}
exports.toBlob = toBlob;
function getFontEmbedCSS(node, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, (0, embed_webfonts_1.getWebFontCSS)(node, options)];
        });
    });
}
exports.getFontEmbedCSS = getFontEmbedCSS;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 25686:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMimeType = void 0;
var WOFF = 'application/font-woff';
var JPEG = 'image/jpeg';
var mimes = {
    woff: WOFF,
    woff2: WOFF,
    ttf: 'application/font-truetype',
    eot: 'application/vnd.ms-fontobject',
    png: 'image/png',
    jpg: JPEG,
    jpeg: JPEG,
    gif: 'image/gif',
    tiff: 'image/tiff',
    svg: 'image/svg+xml',
    webp: 'image/webp',
};
function getExtension(url) {
    var match = /\.([^./]*?)$/g.exec(url);
    return match ? match[1] : '';
}
function getMimeType(url) {
    var extension = getExtension(url).toLowerCase();
    return mimes[extension] || '';
}
exports.getMimeType = getMimeType;
//# sourceMappingURL=mimes.js.map

/***/ }),

/***/ 8586:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isInstanceOfElement = exports.nodeToDataURL = exports.svgToDataURL = exports.createImage = exports.canvasToBlob = exports.checkCanvasDimensions = exports.getPixelRatio = exports.getImageSize = exports.toArray = exports.delay = exports.uuid = exports.resolveUrl = void 0;
function resolveUrl(url, baseUrl) {
    // url is absolute already
    if (url.match(/^[a-z]+:\/\//i)) {
        return url;
    }
    // url is absolute already, without protocol
    if (url.match(/^\/\//)) {
        return window.location.protocol + url;
    }
    // dataURI, mailto:, tel:, etc.
    if (url.match(/^[a-z]+:/i)) {
        return url;
    }
    var doc = document.implementation.createHTMLDocument();
    var base = doc.createElement('base');
    var a = doc.createElement('a');
    doc.head.appendChild(base);
    doc.body.appendChild(a);
    if (baseUrl) {
        base.href = baseUrl;
    }
    a.href = url;
    return a.href;
}
exports.resolveUrl = resolveUrl;
exports.uuid = (function () {
    // generate uuid for className of pseudo elements.
    // We should not use GUIDs, otherwise pseudo elements sometimes cannot be captured.
    var counter = 0;
    // ref: http://stackoverflow.com/a/6248722/2519373
    var random = function () {
        // eslint-disable-next-line no-bitwise
        return "0000".concat(((Math.random() * Math.pow(36, 4)) << 0).toString(36)).slice(-4);
    };
    return function () {
        counter += 1;
        return "u".concat(random()).concat(counter);
    };
})();
function delay(ms) {
    return function (args) {
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(args); }, ms);
        });
    };
}
exports.delay = delay;
function toArray(arrayLike) {
    var arr = [];
    for (var i = 0, l = arrayLike.length; i < l; i++) {
        arr.push(arrayLike[i]);
    }
    return arr;
}
exports.toArray = toArray;
function px(node, styleProperty) {
    var win = node.ownerDocument.defaultView || window;
    var val = win.getComputedStyle(node).getPropertyValue(styleProperty);
    return val ? parseFloat(val.replace('px', '')) : 0;
}
function getNodeWidth(node) {
    var leftBorder = px(node, 'border-left-width');
    var rightBorder = px(node, 'border-right-width');
    return node.clientWidth + leftBorder + rightBorder;
}
function getNodeHeight(node) {
    var topBorder = px(node, 'border-top-width');
    var bottomBorder = px(node, 'border-bottom-width');
    return node.clientHeight + topBorder + bottomBorder;
}
function getImageSize(targetNode, options) {
    if (options === void 0) { options = {}; }
    var width = options.width || getNodeWidth(targetNode);
    var height = options.height || getNodeHeight(targetNode);
    return { width: width, height: height };
}
exports.getImageSize = getImageSize;
function getPixelRatio() {
    var ratio;
    var FINAL_PROCESS;
    try {
        FINAL_PROCESS = process;
    }
    catch (e) {
        // pass
    }
    var val = FINAL_PROCESS && FINAL_PROCESS.env
        ? FINAL_PROCESS.env.devicePixelRatio
        : null;
    if (val) {
        ratio = parseInt(val, 10);
        if (Number.isNaN(ratio)) {
            ratio = 1;
        }
    }
    return ratio || window.devicePixelRatio || 1;
}
exports.getPixelRatio = getPixelRatio;
// @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas#maximum_canvas_size
var canvasDimensionLimit = 16384;
function checkCanvasDimensions(canvas) {
    if (canvas.width > canvasDimensionLimit ||
        canvas.height > canvasDimensionLimit) {
        if (canvas.width > canvasDimensionLimit &&
            canvas.height > canvasDimensionLimit) {
            if (canvas.width > canvas.height) {
                canvas.height *= canvasDimensionLimit / canvas.width;
                canvas.width = canvasDimensionLimit;
            }
            else {
                canvas.width *= canvasDimensionLimit / canvas.height;
                canvas.height = canvasDimensionLimit;
            }
        }
        else if (canvas.width > canvasDimensionLimit) {
            canvas.height *= canvasDimensionLimit / canvas.width;
            canvas.width = canvasDimensionLimit;
        }
        else {
            canvas.width *= canvasDimensionLimit / canvas.height;
            canvas.height = canvasDimensionLimit;
        }
    }
}
exports.checkCanvasDimensions = checkCanvasDimensions;
function canvasToBlob(canvas, options) {
    if (options === void 0) { options = {}; }
    if (canvas.toBlob) {
        return new Promise(function (resolve) {
            canvas.toBlob(resolve, options.type ? options.type : 'image/png', options.quality ? options.quality : 1);
        });
    }
    return new Promise(function (resolve) {
        var binaryString = window.atob(canvas
            .toDataURL(options.type ? options.type : undefined, options.quality ? options.quality : undefined)
            .split(',')[1]);
        var len = binaryString.length;
        var binaryArray = new Uint8Array(len);
        for (var i = 0; i < len; i += 1) {
            binaryArray[i] = binaryString.charCodeAt(i);
        }
        resolve(new Blob([binaryArray], {
            type: options.type ? options.type : 'image/png',
        }));
    });
}
exports.canvasToBlob = canvasToBlob;
function createImage(url) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.decode = function () { return resolve(img); };
        img.onload = function () { return resolve(img); };
        img.onerror = reject;
        img.crossOrigin = 'anonymous';
        img.decoding = 'async';
        img.src = url;
    });
}
exports.createImage = createImage;
function svgToDataURL(svg) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, Promise.resolve()
                    .then(function () { return new XMLSerializer().serializeToString(svg); })
                    .then(encodeURIComponent)
                    .then(function (html) { return "data:image/svg+xml;charset=utf-8,".concat(html); })];
        });
    });
}
exports.svgToDataURL = svgToDataURL;
function nodeToDataURL(node, width, height) {
    return __awaiter(this, void 0, void 0, function () {
        var xmlns, svg, foreignObject;
        return __generator(this, function (_a) {
            xmlns = 'http://www.w3.org/2000/svg';
            svg = document.createElementNS(xmlns, 'svg');
            foreignObject = document.createElementNS(xmlns, 'foreignObject');
            svg.setAttribute('width', "".concat(width));
            svg.setAttribute('height', "".concat(height));
            svg.setAttribute('viewBox', "0 0 ".concat(width, " ").concat(height));
            foreignObject.setAttribute('width', '100%');
            foreignObject.setAttribute('height', '100%');
            foreignObject.setAttribute('x', '0');
            foreignObject.setAttribute('y', '0');
            foreignObject.setAttribute('externalResourcesRequired', 'true');
            svg.appendChild(foreignObject);
            foreignObject.appendChild(node);
            return [2 /*return*/, svgToDataURL(svg)];
        });
    });
}
exports.nodeToDataURL = nodeToDataURL;
var isInstanceOfElement = function (node, instance) {
    if (node instanceof instance)
        return true;
    var nodePrototype = Object.getPrototypeOf(node);
    if (nodePrototype === null)
        return false;
    return (nodePrototype.constructor.name === instance.name ||
        (0, exports.isInstanceOfElement)(nodePrototype, instance));
};
exports.isInstanceOfElement = isInstanceOfElement;
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 73380:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "Image", ({
    enumerable: true,
    get: function() {
        return Image;
    }
}));
const _interop_require_default = __webpack_require__(82147);
const _interop_require_wildcard = __webpack_require__(4009);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(18038));
const _reactdom = __webpack_require__(98704);
const _head = /*#__PURE__*/ _interop_require_default._(__webpack_require__(66864));
const _getimgprops = __webpack_require__(1830);
const _imageconfig = __webpack_require__(52210);
const _imageconfigcontext = __webpack_require__(35359);
const _warnonce = __webpack_require__(98658);
const _routercontext = __webpack_require__(17160);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(35246));
// This is replaced by webpack define plugin
const configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false};
if (true) {
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized) {
    const src = img == null ? void 0 : img.src;
    if (!img || img["data-loaded-src"] === src) {
        return;
    }
    img["data-loaded-src"] = src;
    const p = "decode" in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder !== "empty") {
            setBlurComplete(true);
        }
        if (onLoadRef == null ? void 0 : onLoadRef.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event("load");
            Object.defineProperty(event, "target", {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current({
                ...event,
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            });
        }
        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
            onLoadingCompleteRef.current(img);
        }
        if (false) {}
    });
}
function getDynamicProps(fetchPriority) {
    const [majorStr, minorStr] = _react.version.split(".");
    const major = parseInt(majorStr, 10);
    const minor = parseInt(minorStr, 10);
    if (major > 18 || major === 18 && minor >= 3) {
        // In React 18.3.0 or newer, we must use camelCase
        // prop to avoid "Warning: Invalid DOM property".
        // See https://github.com/facebook/react/pull/25927
        return {
            fetchPriority
        };
    }
    // In React 18.2.0 or older, we must use lowercase prop
    // to avoid "Warning: Invalid DOM property".
    return {
        fetchpriority: fetchPriority
    };
}
const ImageElement = /*#__PURE__*/ (0, _react.forwardRef)((param, forwardedRef)=>{
    let { src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, onLoad, onError, ...rest } = param;
    return /*#__PURE__*/ _react.default.createElement("img", {
        ...rest,
        ...getDynamicProps(fetchPriority),
        // It's intended to keep `loading` before `src` because React updates
        // props in order which causes Safari/Firefox to not lazy load properly.
        // See https://github.com/facebook/react/issues/25883
        loading: loading,
        width: width,
        height: height,
        decoding: decoding,
        "data-nimg": fill ? "fill" : "1",
        className: className,
        style: style,
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        sizes: sizes,
        srcSet: srcSet,
        src: src,
        ref: (0, _react.useCallback)((img)=>{
            if (forwardedRef) {
                if (typeof forwardedRef === "function") forwardedRef(img);
                else if (typeof forwardedRef === "object") {
                    // @ts-ignore - .current is read only it's usually assigned by react internally
                    forwardedRef.current = img;
                }
            }
            if (!img) {
                return;
            }
            if (onError) {
                // If the image has an error before react hydrates, then the error is lost.
                // The workaround is to wait until the image is mounted which is after hydration,
                // then we set the src again to trigger the error handler (if there was an error).
                // eslint-disable-next-line no-self-assign
                img.src = img.src;
            }
            if (false) {}
            if (img.complete) {
                handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
            }
        }, [
            src,
            placeholder,
            onLoadRef,
            onLoadingCompleteRef,
            setBlurComplete,
            onError,
            unoptimized,
            forwardedRef
        ]),
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder !== "empty") {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    });
});
function ImagePreload(param) {
    let { isAppRouter, imgAttributes } = param;
    const opts = {
        as: "image",
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: imgAttributes.crossOrigin,
        referrerPolicy: imgAttributes.referrerPolicy,
        ...getDynamicProps(imgAttributes.fetchPriority)
    };
    if (isAppRouter && _reactdom.preload) {
        // See https://github.com/facebook/react/pull/26940
        (0, _reactdom.preload)(imgAttributes.src, opts);
        return null;
    }
    return /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement("link", {
        key: "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
        rel: "preload",
        // Note how we omit the `href` attribute, as it would only be relevant
        // for browsers that do not support `imagesrcset`, and in those cases
        // it would cause the incorrect image to be preloaded.
        //
        // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
        href: imgAttributes.srcSet ? undefined : imgAttributes.src,
        ...opts
    }));
}
const Image = /*#__PURE__*/ (0, _react.forwardRef)((props, forwardedRef)=>{
    const pagesRouter = (0, _react.useContext)(_routercontext.RouterContext);
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const configContext = (0, _react.useContext)(_imageconfigcontext.ImageConfigContext);
    const config = (0, _react.useMemo)(()=>{
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        return {
            ...c,
            allSizes,
            deviceSizes
        };
    }, [
        configContext
    ]);
    const { onLoad, onLoadingComplete } = props;
    const onLoadRef = (0, _react.useRef)(onLoad);
    (0, _react.useEffect)(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
    (0, _react.useEffect)(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
    const [showAltText, setShowAltText] = (0, _react.useState)(false);
    const { props: imgAttributes, meta: imgMeta } = (0, _getimgprops.getImgProps)(props, {
        defaultLoader: _imageloader.default,
        imgConf: config,
        blurComplete,
        showAltText
    });
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(ImageElement, {
        ...imgAttributes,
        unoptimized: imgMeta.unoptimized,
        placeholder: imgMeta.placeholder,
        fill: imgMeta.fill,
        onLoadRef: onLoadRef,
        onLoadingCompleteRef: onLoadingCompleteRef,
        setBlurComplete: setBlurComplete,
        setShowAltText: setShowAltText,
        ref: forwardedRef
    }), imgMeta.priority ? /*#__PURE__*/ _react.default.createElement(ImagePreload, {
        isAppRouter: isAppRouter,
        imgAttributes: imgAttributes
    }) : null);
});
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image-component.js.map


/***/ }),

/***/ 80489:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    unstable_getImgProps: function() {
        return unstable_getImgProps;
    }
});
const _interop_require_default = __webpack_require__(82147);
const _getimgprops = __webpack_require__(1830);
const _warnonce = __webpack_require__(98658);
const _imagecomponent = __webpack_require__(73380);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(35246));
const unstable_getImgProps = (imgProps)=>{
    (0, _warnonce.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false}
    });
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
};
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map


/***/ }),

/***/ 35246:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
function defaultLoader(param) {
    let { config, src, width, quality } = param;
    if (false) {}
    return config.path + "?url=" + encodeURIComponent(src) + "&w=" + width + "&q=" + (quality || 75) + ( false ? 0 : "");
}
// We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js
defaultLoader.__next_img_default = true;
const _default = defaultLoader; //# sourceMappingURL=image-loader.js.map


/***/ }),

/***/ 52451:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(80489)


/***/ }),

/***/ 2787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y1: () => (/* binding */ c)
/* harmony export */ });
/* unused harmony exports useDebounce, useThrottledCallback */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function c(u,e,c){var i=this,a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),v=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(u),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!0);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){d.current=u},[u]);var g=!e&&0!==e&&"undefined"!=typeof window;if("function"!=typeof u)throw new TypeError("Expected a function");e=+e||0;var w=!!(c=c||{}).leading,s=!("trailing"in c)||!!c.trailing,x="maxWait"in c,y=x?Math.max(+c.maxWait||0,e):null;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){return p.current=!0,function(){p.current=!1}},[]);var h=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){var r=function(r){var n=l.current,t=m.current;return l.current=m.current=null,o.current=r,v.current=d.current.apply(t,n)},n=function(r,n){g&&cancelAnimationFrame(f.current),f.current=g?requestAnimationFrame(r):setTimeout(r,n)},t=function(r){if(!p.current)return!1;var n=r-a.current;return!a.current||n>=e||n<0||x&&r-o.current>=y},u=function(n){return f.current=null,s&&l.current?r(n):(l.current=m.current=null,v.current)},c=function r(){var c=Date.now();if(t(c))return u(c);if(p.current){var i=e-(c-a.current),f=x?Math.min(i,y-(c-o.current)):i;n(r,f)}},h=function(){var u=Date.now(),d=t(u);if(l.current=[].slice.call(arguments),m.current=i,a.current=u,d){if(!f.current&&p.current)return o.current=a.current,n(c,e),w?r(a.current):v.current;if(x)return n(c,e),r(a.current)}return f.current||n(c,e),v.current};return h.cancel=function(){f.current&&(g?cancelAnimationFrame(f.current):clearTimeout(f.current)),o.current=0,l.current=a.current=m.current=f.current=null},h.isPending=function(){return!!f.current},h.flush=function(){return f.current?u(Date.now()):v.current},h},[w,x,e,y,s,g]);return h}function i(r,n){return r===n}function a(r){return"function"==typeof r?function(){return r}:r}function o(n,t,o){var f,l,m=o&&o.equalityFn||i,v=(f=e(a(n)),l=f[1],[f[0],u(function(r){return l(a(r))},[])]),d=v[0],p=v[1],g=c(u(function(r){return p(r)},[p]),t,o),w=r(n);return m(w.current,n)||(g(n),w.current=n),[d,g]}function f(r,n,t){var u=void 0===t?{}:t,e=u.leading,i=u.trailing;return c(r,n,{maxWait:n,leading:void 0===e||e,trailing:void 0===i||i})}
//# sourceMappingURL=index.module.js.map


/***/ })

};
;