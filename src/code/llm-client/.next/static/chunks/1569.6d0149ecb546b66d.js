"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1569],{14347:function(e,t,r){r.d(t,{a:function(){return a}});var l=r(33390);function a(e,t){var r=e.append("foreignObject").attr("width","100000"),a=r.append("xhtml:div");a.attr("xmlns","http://www.w3.org/1999/xhtml");var o=t.label;switch(typeof o){case"function":a.insert(o);break;case"object":a.insert(function(){return o});break;default:a.html(o)}l.bg(a,t.labelStyle),a.style("display","inline-block"),a.style("white-space","nowrap");var n=a.node().getBoundingClientRect();return r.attr("width",n.width).attr("height",n.height),r}},33390:function(e,t,r){r.d(t,{$p:function(){return d},O1:function(){return n},WR:function(){return p},bF:function(){return o},bg:function(){return c}});var l=r(46316),a=r(4886);function o(e,t){return!!e.children(t).length}function n(e){return s(e.v)+":"+s(e.w)+":"+s(e.name)}var i=/:/g;function s(e){return e?String(e).replace(i,"\\:"):""}function c(e,t){t&&e.attr("style",t)}function d(e,t,r){t&&e.attr("class",t).attr("class",r+" "+e.attr("class"))}function p(e,t){var r=t.graph();if(l.Z(r)){var o=r.transition;if(a.Z(o))return o(e)}return e}},21569:function(e,t,r){r.d(t,{diagram:function(){return n}});var l=r(72987),a=r(51531),o=r(86742);r(7128),r(62437),r(89954),r(23764),r(86902),r(40458),r(27326);let n={parser:l.p,db:l.f,renderer:a.f,styles:a.a,init:e=>{e.flowchart||(e.flowchart={}),e.flowchart.arrowMarkerAbsolute=e.arrowMarkerAbsolute,(0,o.q)({flowchart:{arrowMarkerAbsolute:e.arrowMarkerAbsolute}}),a.f.setConf(e.flowchart),l.f.clear(),l.f.setGen("gen-2")}}},51531:function(e,t,r){r.d(t,{a:function(){return k},f:function(){return g}});var l=r(62437),a=r(7128),o=r(72987),n=r(86742),i=r(14702),s=r(14347),c=r(99616),d=r(41480),p=(e,t)=>c.Z.lang.round(d.Z.parse(e)[t]),b=r(58887);let u={},f=function(e,t,r,l,a,o){let i=l.select(`[id="${r}"]`),c=Object.keys(e);c.forEach(function(r){let l;let c=e[r],d="default";c.classes.length>0&&(d=c.classes.join(" ")),d+=" flowchart-label";let p=(0,n.k)(c.styles),b=void 0!==c.text?c.text:c.id;if(n.l.info("vertex",c,c.labelType),"markdown"===c.labelType)n.l.info("vertex",c,c.labelType);else if((0,n.n)((0,n.c)().flowchart.htmlLabels)){let e={label:b.replace(/fa[blrs]?:fa-[\w-]+/g,e=>`<i class='${e.replace(":"," ")}'></i>`)};(l=(0,s.a)(i,e).node()).parentNode.removeChild(l)}else{let e=a.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",p.labelStyle.replace("color:","fill:"));let t=b.split(n.e.lineBreakRegex);for(let r of t){let t=a.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=r,e.appendChild(t)}l=e}let u=0,f="";switch(c.type){case"round":u=5,f="rect";break;case"square":case"group":default:f="rect";break;case"diamond":f="question";break;case"hexagon":f="hexagon";break;case"odd":case"odd_right":f="rect_left_inv_arrow";break;case"lean_right":f="lean_right";break;case"lean_left":f="lean_left";break;case"trapezoid":f="trapezoid";break;case"inv_trapezoid":f="inv_trapezoid";break;case"circle":f="circle";break;case"ellipse":f="ellipse";break;case"stadium":f="stadium";break;case"subroutine":f="subroutine";break;case"cylinder":f="cylinder";break;case"doublecircle":f="doublecircle"}t.setNode(c.id,{labelStyle:p.labelStyle,shape:f,labelText:b,labelType:c.labelType,rx:u,ry:u,class:d,style:p.style,id:c.id,link:c.link,linkTarget:c.linkTarget,tooltip:o.db.getTooltip(c.id)||"",domId:o.db.lookUpDomId(c.id),haveCallback:c.haveCallback,width:"group"===c.type?500:void 0,dir:c.dir,type:c.type,props:c.props,padding:(0,n.c)().flowchart.padding}),n.l.info("setNode",{labelStyle:p.labelStyle,labelType:c.labelType,shape:f,labelText:b,rx:u,ry:u,class:d,style:p.style,id:c.id,domId:o.db.lookUpDomId(c.id),width:"group"===c.type?500:void 0,type:c.type,dir:c.dir,props:c.props,padding:(0,n.c)().flowchart.padding})})},w=function(e,t,r){let l,o;n.l.info("abc78 edges = ",e);let i=0,s={};if(void 0!==e.defaultStyle){let t=(0,n.k)(e.defaultStyle);l=t.style,o=t.labelStyle}e.forEach(function(r){i++;let c="L-"+r.start+"-"+r.end;void 0===s[c]?(s[c]=0,n.l.info("abc78 new entry",c,s[c])):(s[c]++,n.l.info("abc78 new entry",c,s[c]));let d=c+"-"+s[c];n.l.info("abc78 new link id to be used is",c,d,s[c]);let p="LS-"+r.start,b="LE-"+r.end,f={style:"",labelStyle:""};switch(f.minlen=r.length||1,"arrow_open"===r.type?f.arrowhead="none":f.arrowhead="normal",f.arrowTypeStart="arrow_open",f.arrowTypeEnd="arrow_open",r.type){case"double_arrow_cross":f.arrowTypeStart="arrow_cross";case"arrow_cross":f.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":f.arrowTypeStart="arrow_point";case"arrow_point":f.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":f.arrowTypeStart="arrow_circle";case"arrow_circle":f.arrowTypeEnd="arrow_circle"}let w="",h="";switch(r.stroke){case"normal":w="fill:none;",void 0!==l&&(w=l),void 0!==o&&(h=o),f.thickness="normal",f.pattern="solid";break;case"dotted":f.thickness="normal",f.pattern="dotted",f.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":f.thickness="thick",f.pattern="solid",f.style="stroke-width: 3.5px;fill:none;";break;case"invisible":f.thickness="invisible",f.pattern="solid",f.style="stroke-width: 0;fill:none;"}if(void 0!==r.style){let e=(0,n.k)(r.style);w=e.style,h=e.labelStyle}f.style=f.style+=w,f.labelStyle=f.labelStyle+=h,void 0!==r.interpolate?f.curve=(0,n.o)(r.interpolate,a.c_6):void 0!==e.defaultInterpolate?f.curve=(0,n.o)(e.defaultInterpolate,a.c_6):f.curve=(0,n.o)(u.curve,a.c_6),void 0===r.text?void 0!==r.style&&(f.arrowheadStyle="fill: #333"):(f.arrowheadStyle="fill: #333",f.labelpos="c"),f.labelType=r.labelType,f.label=r.text.replace(n.e.lineBreakRegex,"\n"),void 0===r.style&&(f.style=f.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),f.labelStyle=f.labelStyle.replace("color:","fill:"),f.id=d,f.classes="flowchart-link "+p+" "+b,t.setEdge(r.start,r.end,f,i)})},h=async function(e,t,r,s){let c,d;n.l.info("Drawing flowchart"),s.db.clear(),o.f.setGen("gen-2"),s.parser.parse(e);let p=s.db.getDirection();void 0===p&&(p="TD");let{securityLevel:b,flowchart:u}=(0,n.c)(),h=u.nodeSpacing||50,g=u.rankSpacing||50;"sandbox"===b&&(c=(0,a.Ys)("#i"+t));let y="sandbox"===b?(0,a.Ys)(c.nodes()[0].contentDocument.body):(0,a.Ys)("body"),k="sandbox"===b?c.nodes()[0].contentDocument:document,x=new l.k({multigraph:!0,compound:!0}).setGraph({rankdir:p,nodesep:h,ranksep:g,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),v=s.db.getSubGraphs();n.l.info("Subgraphs - ",v);for(let e=v.length-1;e>=0;e--)d=v[e],n.l.info("Subgraph - ",d),s.db.addVertex(d.id,{text:d.title,type:d.labelType},"group",void 0,d.classes,d.dir);let m=s.db.getVertices(),S=s.db.getEdges();n.l.info("Edges",S);let T=0;for(T=v.length-1;T>=0;T--){d=v[T],(0,a.td_)("cluster").append("text");for(let e=0;e<d.nodes.length;e++)n.l.info("Setting up subgraphs",d.nodes[e],d.id),x.setParent(d.nodes[e],d.id)}f(m,x,t,y,k,s),w(S,x);let _=y.select(`[id="${t}"]`),C=y.select("#"+t+" g");if(await (0,i.r)(C,x,["point","circle","cross"],"flowchart",t),n.u.insertTitle(_,"flowchartTitleText",u.titleTopMargin,s.db.getDiagramTitle()),(0,n.p)(x,_,u.diagramPadding,u.useMaxWidth),s.db.indexNodes("subGraph"+T),!u.htmlLabels){let e=k.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(let t of e){let e=t.getBBox(),r=k.createElementNS("http://www.w3.org/2000/svg","rect");r.setAttribute("rx",0),r.setAttribute("ry",0),r.setAttribute("width",e.width),r.setAttribute("height",e.height),t.insertBefore(r,t.firstChild)}}let $=Object.keys(m);$.forEach(function(e){let r=m[e];if(r.link){let l=(0,a.Ys)("#"+t+' [id="'+e+'"]');if(l){let e=k.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",r.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",r.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===b?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):r.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",r.linkTarget);let t=l.insert(function(){return e},":first-child"),a=l.select(".label-container");a&&t.append(function(){return a.node()});let o=l.select(".label");o&&t.append(function(){return o.node()})}}})},g={setConf:function(e){let t=Object.keys(e);for(let r of t)u[r]=e[r]},addVertices:f,addEdges:w,getClasses:function(e,t){n.l.info("Extracting classes"),t.db.clear();try{return t.parse(e),t.db.getClasses()}catch(e){return}},draw:h},y=(e,t)=>{let r=p(e,"r"),l=p(e,"g"),a=p(e,"b");return b.Z(r,l,a,t)},k=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${y(e.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`}}]);