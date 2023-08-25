"use strict";
exports.id = 9450;
exports.ids = [9450];
exports.modules = {

/***/ 69450:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   diagram: () => (/* binding */ diagram)
/* harmony export */ });
/* harmony import */ var _styles_622362e4_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61646);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87686);
/* harmony import */ var dagre_d3_es_src_dagre_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49500);
/* harmony import */ var dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60741);
/* harmony import */ var _mermaid_768dc893_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64221);
/* harmony import */ var _svgDraw_70101091_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88472);
/* harmony import */ var ts_dedent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12905);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83689);
/* harmony import */ var _braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46535);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82059);















let idCache = {};
const padding = 20;
const getGraphId = function(label) {
  const foundEntry = Object.entries(idCache).find((entry) => entry[1].label === label);
  if (foundEntry) {
    return foundEntry[0];
  }
};
const insertMarkers = function(elem) {
  elem.append("defs").append("marker").attr("id", "extensionStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z");
  elem.append("defs").append("marker").attr("id", "extensionEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
  elem.append("defs").append("marker").attr("id", "compositionStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  elem.append("defs").append("marker").attr("id", "compositionEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  elem.append("defs").append("marker").attr("id", "aggregationStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  elem.append("defs").append("marker").attr("id", "aggregationEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  elem.append("defs").append("marker").attr("id", "dependencyStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z");
  elem.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
};
const draw = function(text, id, _version, diagObj) {
  const conf = (0,_mermaid_768dc893_js__WEBPACK_IMPORTED_MODULE_7__.c)().class;
  idCache = {};
  _mermaid_768dc893_js__WEBPACK_IMPORTED_MODULE_7__.l.info("Rendering diagram " + text);
  const securityLevel = (0,_mermaid_768dc893_js__WEBPACK_IMPORTED_MODULE_7__.c)().securityLevel;
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)("#i" + id);
  }
  const root = securityLevel === "sandbox" ? (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(sandboxElement.nodes()[0].contentDocument.body) : (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)("body");
  const diagram2 = root.select(`[id='${id}']`);
  insertMarkers(diagram2);
  const g = new dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_2__/* .Graph */ .k({
    multigraph: true
  });
  g.setGraph({
    isMultiGraph: true
  });
  g.setDefaultEdgeLabel(function() {
    return {};
  });
  const classes = diagObj.db.getClasses();
  const keys = Object.keys(classes);
  for (const key of keys) {
    const classDef = classes[key];
    const node = _svgDraw_70101091_js__WEBPACK_IMPORTED_MODULE_8__.s.drawClass(diagram2, classDef, conf, diagObj);
    idCache[node.id] = node;
    g.setNode(node.id, node);
    _mermaid_768dc893_js__WEBPACK_IMPORTED_MODULE_7__.l.info("Org height: " + node.height);
  }
  const relations = diagObj.db.getRelations();
  relations.forEach(function(relation) {
    _mermaid_768dc893_js__WEBPACK_IMPORTED_MODULE_7__.l.info(
      "tjoho" + getGraphId(relation.id1) + getGraphId(relation.id2) + JSON.stringify(relation)
    );
    g.setEdge(
      getGraphId(relation.id1),
      getGraphId(relation.id2),
      {
        relation
      },
      relation.title || "DEFAULT"
    );
  });
  const notes = diagObj.db.getNotes();
  notes.forEach(function(note) {
    _mermaid_768dc893_js__WEBPACK_IMPORTED_MODULE_7__.l.debug(`Adding note: ${JSON.stringify(note)}`);
    const node = _svgDraw_70101091_js__WEBPACK_IMPORTED_MODULE_8__.s.drawNote(diagram2, note, conf, diagObj);
    idCache[node.id] = node;
    g.setNode(node.id, node);
    if (note.class && note.class in classes) {
      g.setEdge(
        note.id,
        getGraphId(note.class),
        {
          relation: {
            id1: note.id,
            id2: note.class,
            relation: {
              type1: "none",
              type2: "none",
              lineType: 10
            }
          }
        },
        "DEFAULT"
      );
    }
  });
  (0,dagre_d3_es_src_dagre_index_js__WEBPACK_IMPORTED_MODULE_1__/* .layout */ .bK)(g);
  g.nodes().forEach(function(v) {
    if (v !== void 0 && g.node(v) !== void 0) {
      _mermaid_768dc893_js__WEBPACK_IMPORTED_MODULE_7__.l.debug("Node " + v + ": " + JSON.stringify(g.node(v)));
      root.select("#" + (diagObj.db.lookUpDomId(v) || v)).attr(
        "transform",
        "translate(" + (g.node(v).x - g.node(v).width / 2) + "," + (g.node(v).y - g.node(v).height / 2) + " )"
      );
    }
  });
  g.edges().forEach(function(e) {
    if (e !== void 0 && g.edge(e) !== void 0) {
      _mermaid_768dc893_js__WEBPACK_IMPORTED_MODULE_7__.l.debug("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(g.edge(e)));
      _svgDraw_70101091_js__WEBPACK_IMPORTED_MODULE_8__.s.drawEdge(diagram2, g.edge(e), g.edge(e).relation, conf, diagObj);
    }
  });
  const svgBounds = diagram2.node().getBBox();
  const width = svgBounds.width + padding * 2;
  const height = svgBounds.height + padding * 2;
  (0,_mermaid_768dc893_js__WEBPACK_IMPORTED_MODULE_7__.i)(diagram2, height, width, conf.useMaxWidth);
  const vBox = `${svgBounds.x - padding} ${svgBounds.y - padding} ${width} ${height}`;
  _mermaid_768dc893_js__WEBPACK_IMPORTED_MODULE_7__.l.debug(`viewBox ${vBox}`);
  diagram2.attr("viewBox", vBox);
};
const renderer = {
  draw
};
const diagram = {
  parser: _styles_622362e4_js__WEBPACK_IMPORTED_MODULE_9__.p,
  db: _styles_622362e4_js__WEBPACK_IMPORTED_MODULE_9__.d,
  renderer,
  styles: _styles_622362e4_js__WEBPACK_IMPORTED_MODULE_9__.s,
  init: (cnf) => {
    if (!cnf.class) {
      cnf.class = {};
    }
    cnf.class.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    _styles_622362e4_js__WEBPACK_IMPORTED_MODULE_9__.d.clear();
  }
};



/***/ })

};
;