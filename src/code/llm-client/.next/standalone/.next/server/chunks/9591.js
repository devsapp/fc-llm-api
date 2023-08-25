"use strict";
exports.id = 9591;
exports.ids = [9591];
exports.modules = {

/***/ 9591:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ drawBackgroundRect),
/* harmony export */   b: () => (/* binding */ drawEmbeddedImage),
/* harmony export */   c: () => (/* binding */ drawImage),
/* harmony export */   d: () => (/* binding */ drawRect),
/* harmony export */   e: () => (/* binding */ getTextObj),
/* harmony export */   f: () => (/* binding */ drawText),
/* harmony export */   g: () => (/* binding */ getNoteRect)
/* harmony export */ });
/* harmony import */ var _braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46535);
/* harmony import */ var _mermaid_768dc893_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64221);


const drawRect = (element, rectData) => {
  const rectElement = element.append("rect");
  rectElement.attr("x", rectData.x);
  rectElement.attr("y", rectData.y);
  rectElement.attr("fill", rectData.fill);
  rectElement.attr("stroke", rectData.stroke);
  rectElement.attr("width", rectData.width);
  rectElement.attr("height", rectData.height);
  rectData.rx !== void 0 && rectElement.attr("rx", rectData.rx);
  rectData.ry !== void 0 && rectElement.attr("ry", rectData.ry);
  if (rectData.attrs !== void 0) {
    for (const attrKey in rectData.attrs) {
      rectElement.attr(attrKey, rectData.attrs[attrKey]);
    }
  }
  rectData.class !== void 0 && rectElement.attr("class", rectData.class);
  return rectElement;
};
const drawBackgroundRect = (element, bounds) => {
  const rectData = {
    x: bounds.startx,
    y: bounds.starty,
    width: bounds.stopx - bounds.startx,
    height: bounds.stopy - bounds.starty,
    fill: bounds.fill,
    stroke: bounds.stroke,
    class: "rect"
  };
  const rectElement = drawRect(element, rectData);
  rectElement.lower();
};
const drawText = (element, textData) => {
  const nText = textData.text.replace(_mermaid_768dc893_js__WEBPACK_IMPORTED_MODULE_1__.J, " ");
  const textElem = element.append("text");
  textElem.attr("x", textData.x);
  textElem.attr("y", textData.y);
  textElem.attr("class", "legend");
  textElem.style("text-anchor", textData.anchor);
  textData.class !== void 0 && textElem.attr("class", textData.class);
  const tspan = textElem.append("tspan");
  tspan.attr("x", textData.x + textData.textMargin * 2);
  tspan.text(nText);
  return textElem;
};
const drawImage = (elem, x, y, link) => {
  const imageElement = elem.append("image");
  imageElement.attr("x", x);
  imageElement.attr("y", y);
  const sanitizedLink = (0,_braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_0__/* .sanitizeUrl */ .Nm)(link);
  imageElement.attr("xlink:href", sanitizedLink);
};
const drawEmbeddedImage = (element, x, y, link) => {
  const imageElement = element.append("use");
  imageElement.attr("x", x);
  imageElement.attr("y", y);
  const sanitizedLink = (0,_braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_0__/* .sanitizeUrl */ .Nm)(link);
  imageElement.attr("xlink:href", `#${sanitizedLink}`);
};
const getNoteRect = () => {
  const noteRectData = {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    fill: "#EDF2AE",
    stroke: "#666",
    anchor: "start",
    rx: 0,
    ry: 0
  };
  return noteRectData;
};
const getTextObj = () => {
  const testObject = {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    "text-anchor": "start",
    style: "#666",
    textMargin: 0,
    rx: 0,
    ry: 0,
    tspan: true
  };
  return testObject;
};



/***/ })

};
;