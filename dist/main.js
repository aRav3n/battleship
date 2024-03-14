/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.boardBig {
  height: min(60vh, 90vw);
}

.boardSmall {
  height: min(15vh, 40vw);
}

body,
body > div,
form,
label {
  display: grid;
  justify-content: center;
  justify-items: center;
}

button,
form,
input,
label {
  font-size: 1.5rem;
  text-align: center;
  gap: 2vh;
}

#contentContainer {
  align-items: center;
  align-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 5vmin;
  justify-content: center;
  justify-items: center;
}

.gameboard {
  aspect-ratio: 1 / 1;
  background-color: gray;
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  margin: 1vh;
  padding: 1vmin;
}

.gameboard > div {
  border-radius: 50%;
  background-color: #ffffff22;
}

.gameboard > div:hover {
  background-color: #ffffff66;
}

.gameboard > .hit {
  background-color: #ff0000;
}

.gameboard > .miss {
  background-color: #ffffff;
}

.gameboard > .ship {
  background-color: #000000;
  border-radius: 25%;
}

#gameboards {
  display: grid;
  justify-items: center;
  margin: 0;
  padding: 0;
}

h1 {
  font-family: Copperplate, Papyrus, fantasy;
  font-size: 10vmin;
  font-weight: bold;
  justify-self: center;
  margin: 2vh;
  text-align: center;
}

p {
  font-size: 3rem;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;;;;EAIE,aAAa;EACb,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;;;;EAIE,iBAAiB;EACjB,kBAAkB;EAClB,QAAQ;AACV;;AAEA;EACE,mBAAmB;EACnB,qBAAqB;EACrB,aAAa;EACb,eAAe;EACf,UAAU;EACV,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,sBAAsB;EACtB,aAAa;EACb,QAAQ;EACR,sCAAsC;EACtC,mCAAmC;EACnC,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,0CAA0C;EAC1C,iBAAiB;EACjB,iBAAiB;EACjB,oBAAoB;EACpB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB","sourcesContent":[".boardBig {\n  height: min(60vh, 90vw);\n}\n\n.boardSmall {\n  height: min(15vh, 40vw);\n}\n\nbody,\nbody > div,\nform,\nlabel {\n  display: grid;\n  justify-content: center;\n  justify-items: center;\n}\n\nbutton,\nform,\ninput,\nlabel {\n  font-size: 1.5rem;\n  text-align: center;\n  gap: 2vh;\n}\n\n#contentContainer {\n  align-items: center;\n  align-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5vmin;\n  justify-content: center;\n  justify-items: center;\n}\n\n.gameboard {\n  aspect-ratio: 1 / 1;\n  background-color: gray;\n  display: grid;\n  gap: 1px;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  margin: 1vh;\n  padding: 1vmin;\n}\n\n.gameboard > div {\n  border-radius: 50%;\n  background-color: #ffffff22;\n}\n\n.gameboard > div:hover {\n  background-color: #ffffff66;\n}\n\n.gameboard > .hit {\n  background-color: #ff0000;\n}\n\n.gameboard > .miss {\n  background-color: #ffffff;\n}\n\n.gameboard > .ship {\n  background-color: #000000;\n  border-radius: 25%;\n}\n\n#gameboards {\n  display: grid;\n  justify-items: center;\n  margin: 0;\n  padding: 0;\n}\n\nh1 {\n  font-family: Copperplate, Papyrus, fantasy;\n  font-size: 10vmin;\n  font-weight: bold;\n  justify-self: center;\n  margin: 2vh;\n  text-align: center;\n}\n\np {\n  font-size: 3rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/gameLogic.js":
/*!**************************!*\
  !*** ./src/gameLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameboardFactory: () => (/* binding */ gameboardFactory),
/* harmony export */   getRandomIntLessThan: () => (/* binding */ getRandomIntLessThan),
/* harmony export */   player: () => (/* binding */ player),
/* harmony export */   shipFactory: () => (/* binding */ shipFactory)
/* harmony export */ });
function getRandomIntLessThan(number) {
  return Math.floor(Math.random() * number);
}

function shipFactory(length) {
  if (typeof length !== "number") {
    return null;
  }

  const ship = Array(length);
  const shipLocation = Array(length);

  for (let i = 0; i < length; i++) {
    ship[i] = 0;
  }

  const isSunk = () => {
    const sumOfArray = ship.reduce(
      (accumulator, newNumber) => accumulator + newNumber,
      0
    );
    return sumOfArray === ship.length;
  };

  const hit = (index) => {
    ship[index] = 1;
  };

  return { ship, hit, isSunk, shipLocation };
}

function gameboardFactory() {
  const missedHits = [];
  const navalFleet = [];
  const gridSize = 10;

  const ableToPlaceThisShip = (fleet, newShip) => {
    const newShipLocation = newShip.location;
    for (let i = 0; i < fleet.length; i++) {
      const fleetShipLocation = fleet[i].location;
      for (let j = 0; j < fleetShipLocation.length; j++) {
        const fleetShipSpot = fleetShipLocation[j];
        for (let k = 0; k < newShipLocation.length; k++) {
          const newShipSpot = newShipLocation[k];
          if (newShipSpot === fleetShipSpot) {
            return false;
          }
        }
      }
    }

    return true;
  };

  const placeShip = (length, x, y, orientation) => {
    if (
      x > 9 ||
      x < 0 ||
      y > 9 ||
      y < 0 ||
      (x + 1) % 1 !== 0 ||
      (y + 1) % 1 !== 0
    ) {
      throw new Error(`${x}, ${y} is not a valid set of coordinates`);
    }

    const shipObject = {};
    let xToUse = x;
    let yToUse = y;
    const newShip = shipFactory(length);
    shipObject.ship = newShip;
    if (orientation !== "h" && orientation !== "v") {
      throw new Error("not a valid orientation, can only be 'h' or 'v'");
    } else {
      const locationArray = [];
      if (orientation === "v" && yToUse > gridSize - length) {
        yToUse = gridSize - length;
      }
      if (orientation === "h" && xToUse > gridSize - length) {
        xToUse = gridSize - length;
      }
      xToUse = Number(xToUse);
      yToUse = Number(yToUse);
      for (let i = 0; i < length; i++) {
        const thisX = xToUse + (orientation === "h" ? i : 0);
        const thisY = yToUse + (orientation === "v" ? i : 0);
        const spot = [];
        spot[0] = thisX;
        spot[1] = thisY;
        const spotString = spot.toString();
        locationArray.push(spotString);
      }

      shipObject.location = locationArray;
      ableToPlaceThisShip(navalFleet, shipObject)
        ? navalFleet.push(shipObject)
        : null;
    }
  };

  const allShipsAreSunk = () => {
    let numberOfShipsHit = 0;
    for (let i = 0; i < navalFleet.length; i++) {
      const navalShip = navalFleet[i];
      const shipHitArray = navalShip.ship.ship;
      const numberOfHits = shipHitArray.reduce(
        (sum, currentValue) => sum + currentValue,
        0
      );
      numberOfHits === shipHitArray.length ? numberOfShipsHit++ : null;
    }
    if (numberOfShipsHit === navalFleet.length) {
      return true;
    }
    return false;
  };

  const receiveAttack = (coordinateArrayXY) => {
    const hitCoordinateString = coordinateArrayXY.toString();
    for (let i = 0; i < navalFleet.length; i++) {
      const navalShip = navalFleet[i];
      const shipObject = navalShip.ship;
      const shipLocationArray = navalShip.location;
      for (let i = 0; i < shipLocationArray.length; i++) {
        const shipCoordinates = shipLocationArray[i];
        if (hitCoordinateString === shipCoordinates) {
          shipObject.hit(i);
          allShipsAreSunk();
          return;
        }
      }
    }
    missedHits.push(hitCoordinateString);
  };

  return { navalFleet, placeShip, receiveAttack, missedHits, allShipsAreSunk };
}

function player(name) {
  let humanPlayerTurn = true;

  const human = gameboardFactory();

  const computer = gameboardFactory();

  const fireMissile = (coordinateArrayXY) => {
    let target;
    humanPlayerTurn ? (target = computer) : (target = human);
    const x = coordinateArrayXY[0];
    const y = coordinateArrayXY[1];
    const coordinateString = coordinateArrayXY.toString();
    if (
      x > 9 ||
      x < 0 ||
      y > 9 ||
      y < 0 ||
      (x + 1) % 1 !== 0 ||
      (y + 1) % 1 !== 0
    ) {
      throw new Error(`${x}, ${y} is not a valid set of coordinates`);
    } else if (target.missedHits.includes(coordinateString)) {
      return "this spot has already been attacked";
    }

    target.receiveAttack(coordinateArrayXY);
    humanPlayerTurn = !humanPlayerTurn;
  };

  const placeShip = (player, coordinateArrayXY, length, orientation) => {
    const fleet = player.navalFleet;
    const initialFleetSize = fleet.length;
    let x;
    let y;
    if (Array.isArray(coordinateArrayXY)) {
      x = coordinateArrayXY[0];
      y = coordinateArrayXY[1];
    } else {
      const arrayFromString = coordinateArrayXY.split(",");
      x = arrayFromString[0];
      y = arrayFromString[1];
    }
    player.placeShip(length, x, y, orientation);
    if (fleet.length === initialFleetSize) {
      return false;
    }
    return true;
  };

  const placeCarrier = (forHumanPlayer, coordinateArrayXY, orientation) => {
    let player;
    forHumanPlayer ? (player = human) : (player = computer);
    if (placeShip(player, coordinateArrayXY, 5, orientation)) {
      return true;
    }
    return false;
  };

  const placeBattleship = (forHumanPlayer, coordinateArrayXY, orientation) => {
    let player;
    forHumanPlayer ? (player = human) : (player = computer);
    if (placeShip(player, coordinateArrayXY, 4, orientation)) {
      return true;
    }
    return false;
  };

  const placeDestroyer = (forHumanPlayer, coordinateArrayXY, orientation) => {
    let player;
    forHumanPlayer ? (player = human) : (player = computer);
    if (placeShip(player, coordinateArrayXY, 3, orientation)) {
      return true;
    }
    return false;
  };

  const placeSubmarine = (forHumanPlayer, coordinateArrayXY, orientation) => {
    let player;
    forHumanPlayer ? (player = human) : (player = computer);
    if (placeShip(player, coordinateArrayXY, 3, orientation)) {
      return true;
    }
    return false;
  };

  const placePatrolBoat = (forHumanPlayer, coordinateArrayXY, orientation) => {
    let player;
    forHumanPlayer ? (player = human) : (player = computer);
    if (placeShip(player, coordinateArrayXY, 2, orientation)) {
      return true;
    }
    return false;
  };

  return {
    fireMissile,
    placeCarrier,
    placeBattleship,
    placeDestroyer,
    placeSubmarine,
    placePatrolBoat,
    name,
    human,
    computer,
  };
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameLogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLogic.js */ "./src/gameLogic.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




const makeDivs = (whichBoard, playerString) => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const x = j;
      const y = i;
      const positionArray = [x, y].toString();
      const div = document.createElement("div");
      const idName = `${positionArray}-${playerString}`;
      div.setAttribute("id", idName);
      div.classList.add(`${playerString}-boardSpot`);
      whichBoard.appendChild(div);
    }
  }
};

const initializeGame = (name) => {
  const game = (0,_gameLogic_js__WEBPACK_IMPORTED_MODULE_0__.player)(name);
  return game;
};

const colorInShips = (player, playerAsString) => {
  const fleet = player.navalFleet;
  const shipToColor = fleet.length - 1;
  const shipLocation = fleet[shipToColor].location;

  for (let i = 0; i < shipLocation.length; i++) {
    const spot = shipLocation[i];
    const matchingId = `${spot}-${playerAsString}`;
    const spotInDOM = document.getElementById(matchingId);

    spotInDOM.classList.add("ship");
  }
  return;
};

const generateFireMissileMode = () => {
  const humanBoard = document.querySelector("#human");
  const computerBoard = document.querySelector("#computer");
};

const placeShip = (game) => {
  const arrayOfShipsInGame = [];
  const generateShipObject = (shipName, functionName, numberOfSpaces) => {
    arrayOfShipsInGame.push({ shipName, functionName, numberOfSpaces });
  };
  generateShipObject("carrier", game.placeCarrier, 5);
  generateShipObject("battleship", game.placeBattleship, 4);
  generateShipObject("destroyer", game.placeDestroyer, 3);
  generateShipObject("submarine", game.placeSubmarine, 3);
  generateShipObject("patrol boat", game.placePatrolBoat, 2);

  const updateDom = () => {
    const fleetLength = game.human.navalFleet.length;
    if (fleetLength < arrayOfShipsInGame.length) {
      const currentShip = arrayOfShipsInGame[fleetLength];
      const shipName = currentShip.shipName;
      const numberOfSpaces = currentShip.numberOfSpaces;
      const instructionString = `Place your ${shipName} (${numberOfSpaces} spaces)`;
      const h1 = document.querySelector("h1");
      h1.innerHTML = instructionString;
    }
  };

  updateDom();

  const button = document.querySelector("button");
  const potentialSpotArray = document.querySelectorAll(".human-boardSpot");
  for (let i = 0; i < potentialSpotArray.length; i++) {
    const spot = potentialSpotArray[i];

    spot.addEventListener("click", () => {
      const fleetLength = game.human.navalFleet.length;
      const currentShip = arrayOfShipsInGame[fleetLength];
      const functionName = currentShip.functionName;
      const spotId = spot.id;
      const orientation = button.id;
      const coordinateArrayXY = spotId.split("-")[0];
      functionName(true, coordinateArrayXY, orientation);
      colorInShips(game.human, "human");

      updateDom();

      return;
    });
  }
};

const humanShipPlacementMode = (game) => {
  const body = document.querySelector("body");
  const contentDiv = document.querySelector("#contentContainer");
  contentDiv.innerHTML = "";
  const gameboards = document.createElement("div");
  const humanBoard = document.createElement("id", "human");
  const computerBoard = document.createElement("id", "computer");
  gameboards.setAttribute("id", "gameboards");
  humanBoard.classList.add("gameboard");
  computerBoard.classList.add("gameboard");
  humanBoard.setAttribute("id", "human");
  humanBoard.classList.add("boardBig");
  computerBoard.setAttribute("id", "computer");
  computerBoard.classList.add("boardSmall");

  makeDivs(computerBoard, "computer");
  makeDivs(humanBoard, "human");

  const h = "Horizontal";
  const v = "Vertical";
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.setAttribute("id", "h");
  button.innerHTML = h;
  button.addEventListener("click", () => {
    button.innerHTML === h ? (button.innerHTML = v) : (button.innerHTML = h);
    button.setAttribute("id", button.innerHTML[0].toLowerCase());
  });

  gameboards.appendChild(computerBoard);
  gameboards.appendChild(humanBoard);
  contentDiv.appendChild(button);
  contentDiv.appendChild(gameboards);
  body.appendChild(contentDiv);

  placeShip(game);
};

const domManipulation = () => {
  const body = document.querySelector("body");

  const generateMainBody = () => {
    const heading = document.createElement("h1");
    heading.innerHTML = "BATTLESHIP";
    body.appendChild(heading);
    const contentContainer = document.createElement("div");
    contentContainer.setAttribute("id", "contentContainer");
    body.appendChild(contentContainer);
  };

  const generateNameGatheringForm = () => {
    const contentDiv = document.querySelector("#contentContainer");
    contentDiv.innerHTML = "";

    const form = document.createElement("form");
    const textLabel = document.createElement("label");
    const textInput = document.createElement("input");
    const button = document.createElement("button");

    textLabel.setAttribute("for", "nameInput");
    textLabel.innerHTML = "What's your name, sailor?";

    textInput.setAttribute("type", "text");
    textInput.setAttribute("id", "nameInput");
    textInput.setAttribute("name", "nameInput");

    button.setAttribute("type", "button");
    button.innerHTML = "Do battle!";

    textLabel.appendChild(textInput);

    form.appendChild(textLabel);
    form.appendChild(button);

    contentDiv.appendChild(form);

    button.addEventListener("click", () => {
      const name = textInput.value;
      if (name.length === 0) {
        generateNameGatheringForm();
        const contentDiv = document.querySelector("#contentContainer");
        const warningP = document.createElement("p");
        warningP.innerHTML = "Your name can't be blank";
        contentDiv.appendChild(warningP);
      } else {
        const game = initializeGame(name);
        humanShipPlacementMode(game);
      }
    });
  };

  generateMainBody();
  generateNameGatheringForm();
};

domManipulation();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IseUJBQXlCO0FBQzNDO0FBQ0EsMEJBQTBCLEtBQUssR0FBRyxlQUFlO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix3Q0FBd0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxVQUFVLEdBQUcsZ0JBQWdCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsK0JBQStCO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUxvZ2ljLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5ib2FyZEJpZyB7XG4gIGhlaWdodDogbWluKDYwdmgsIDkwdncpO1xufVxuXG4uYm9hcmRTbWFsbCB7XG4gIGhlaWdodDogbWluKDE1dmgsIDQwdncpO1xufVxuXG5ib2R5LFxuYm9keSA+IGRpdixcbmZvcm0sXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbmJ1dHRvbixcbmZvcm0sXG5pbnB1dCxcbmxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZ2FwOiAydmg7XG59XG5cbiNjb250ZW50Q29udGFpbmVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogNXZtaW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5nYW1lYm9hcmQge1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDFweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICBtYXJnaW46IDF2aDtcbiAgcGFkZGluZzogMXZtaW47XG59XG5cbi5nYW1lYm9hcmQgPiBkaXYge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYyMjtcbn1cblxuLmdhbWVib2FyZCA+IGRpdjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY2Njtcbn1cblxuLmdhbWVib2FyZCA+IC5oaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xufVxuXG4uZ2FtZWJvYXJkID4gLm1pc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZ2FtZWJvYXJkID4gLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiAyNSU7XG59XG5cbiNnYW1lYm9hcmRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6IENvcHBlcnBsYXRlLCBQYXB5cnVzLCBmYW50YXN5O1xuICBmb250LXNpemU6IDEwdm1pbjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBtYXJnaW46IDJ2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOzs7O0VBSUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7Ozs7RUFJRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGVBQWU7RUFDZixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFFBQVE7RUFDUixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJvYXJkQmlnIHtcXG4gIGhlaWdodDogbWluKDYwdmgsIDkwdncpO1xcbn1cXG5cXG4uYm9hcmRTbWFsbCB7XFxuICBoZWlnaHQ6IG1pbigxNXZoLCA0MHZ3KTtcXG59XFxuXFxuYm9keSxcXG5ib2R5ID4gZGl2LFxcbmZvcm0sXFxubGFiZWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5idXR0b24sXFxuZm9ybSxcXG5pbnB1dCxcXG5sYWJlbCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGdhcDogMnZoO1xcbn1cXG5cXG4jY29udGVudENvbnRhaW5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogNXZtaW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDFweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBtYXJnaW46IDF2aDtcXG4gIHBhZGRpbmc6IDF2bWluO1xcbn1cXG5cXG4uZ2FtZWJvYXJkID4gZGl2IHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYyMjtcXG59XFxuXFxuLmdhbWVib2FyZCA+IGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNjY7XFxufVxcblxcbi5nYW1lYm9hcmQgPiAuaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XFxufVxcblxcbi5nYW1lYm9hcmQgPiAubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uZ2FtZWJvYXJkID4gLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcXG59XFxuXFxuI2dhbWVib2FyZHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtZmFtaWx5OiBDb3BwZXJwbGF0ZSwgUGFweXJ1cywgZmFudGFzeTtcXG4gIGZvbnQtc2l6ZTogMTB2bWluO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbjogMnZoO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5wIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnRMZXNzVGhhbihudW1iZXIpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG51bWJlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGlwRmFjdG9yeShsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiBsZW5ndGggIT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHNoaXAgPSBBcnJheShsZW5ndGgpO1xuICBjb25zdCBzaGlwTG9jYXRpb24gPSBBcnJheShsZW5ndGgpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBzaGlwW2ldID0gMDtcbiAgfVxuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICBjb25zdCBzdW1PZkFycmF5ID0gc2hpcC5yZWR1Y2UoXG4gICAgICAoYWNjdW11bGF0b3IsIG5ld051bWJlcikgPT4gYWNjdW11bGF0b3IgKyBuZXdOdW1iZXIsXG4gICAgICAwXG4gICAgKTtcbiAgICByZXR1cm4gc3VtT2ZBcnJheSA9PT0gc2hpcC5sZW5ndGg7XG4gIH07XG5cbiAgY29uc3QgaGl0ID0gKGluZGV4KSA9PiB7XG4gICAgc2hpcFtpbmRleF0gPSAxO1xuICB9O1xuXG4gIHJldHVybiB7IHNoaXAsIGhpdCwgaXNTdW5rLCBzaGlwTG9jYXRpb24gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVib2FyZEZhY3RvcnkoKSB7XG4gIGNvbnN0IG1pc3NlZEhpdHMgPSBbXTtcbiAgY29uc3QgbmF2YWxGbGVldCA9IFtdO1xuICBjb25zdCBncmlkU2l6ZSA9IDEwO1xuXG4gIGNvbnN0IGFibGVUb1BsYWNlVGhpc1NoaXAgPSAoZmxlZXQsIG5ld1NoaXApID0+IHtcbiAgICBjb25zdCBuZXdTaGlwTG9jYXRpb24gPSBuZXdTaGlwLmxvY2F0aW9uO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmxlZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGZsZWV0U2hpcExvY2F0aW9uID0gZmxlZXRbaV0ubG9jYXRpb247XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZsZWV0U2hpcExvY2F0aW9uLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGZsZWV0U2hpcFNwb3QgPSBmbGVldFNoaXBMb2NhdGlvbltqXTtcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBuZXdTaGlwTG9jYXRpb24ubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICBjb25zdCBuZXdTaGlwU3BvdCA9IG5ld1NoaXBMb2NhdGlvbltrXTtcbiAgICAgICAgICBpZiAobmV3U2hpcFNwb3QgPT09IGZsZWV0U2hpcFNwb3QpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAobGVuZ3RoLCB4LCB5LCBvcmllbnRhdGlvbikgPT4ge1xuICAgIGlmIChcbiAgICAgIHggPiA5IHx8XG4gICAgICB4IDwgMCB8fFxuICAgICAgeSA+IDkgfHxcbiAgICAgIHkgPCAwIHx8XG4gICAgICAoeCArIDEpICUgMSAhPT0gMCB8fFxuICAgICAgKHkgKyAxKSAlIDEgIT09IDBcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHt4fSwgJHt5fSBpcyBub3QgYSB2YWxpZCBzZXQgb2YgY29vcmRpbmF0ZXNgKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaGlwT2JqZWN0ID0ge307XG4gICAgbGV0IHhUb1VzZSA9IHg7XG4gICAgbGV0IHlUb1VzZSA9IHk7XG4gICAgY29uc3QgbmV3U2hpcCA9IHNoaXBGYWN0b3J5KGxlbmd0aCk7XG4gICAgc2hpcE9iamVjdC5zaGlwID0gbmV3U2hpcDtcbiAgICBpZiAob3JpZW50YXRpb24gIT09IFwiaFwiICYmIG9yaWVudGF0aW9uICE9PSBcInZcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm90IGEgdmFsaWQgb3JpZW50YXRpb24sIGNhbiBvbmx5IGJlICdoJyBvciAndidcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxvY2F0aW9uQXJyYXkgPSBbXTtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2XCIgJiYgeVRvVXNlID4gZ3JpZFNpemUgLSBsZW5ndGgpIHtcbiAgICAgICAgeVRvVXNlID0gZ3JpZFNpemUgLSBsZW5ndGg7XG4gICAgICB9XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaFwiICYmIHhUb1VzZSA+IGdyaWRTaXplIC0gbGVuZ3RoKSB7XG4gICAgICAgIHhUb1VzZSA9IGdyaWRTaXplIC0gbGVuZ3RoO1xuICAgICAgfVxuICAgICAgeFRvVXNlID0gTnVtYmVyKHhUb1VzZSk7XG4gICAgICB5VG9Vc2UgPSBOdW1iZXIoeVRvVXNlKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGhpc1ggPSB4VG9Vc2UgKyAob3JpZW50YXRpb24gPT09IFwiaFwiID8gaSA6IDApO1xuICAgICAgICBjb25zdCB0aGlzWSA9IHlUb1VzZSArIChvcmllbnRhdGlvbiA9PT0gXCJ2XCIgPyBpIDogMCk7XG4gICAgICAgIGNvbnN0IHNwb3QgPSBbXTtcbiAgICAgICAgc3BvdFswXSA9IHRoaXNYO1xuICAgICAgICBzcG90WzFdID0gdGhpc1k7XG4gICAgICAgIGNvbnN0IHNwb3RTdHJpbmcgPSBzcG90LnRvU3RyaW5nKCk7XG4gICAgICAgIGxvY2F0aW9uQXJyYXkucHVzaChzcG90U3RyaW5nKTtcbiAgICAgIH1cblxuICAgICAgc2hpcE9iamVjdC5sb2NhdGlvbiA9IGxvY2F0aW9uQXJyYXk7XG4gICAgICBhYmxlVG9QbGFjZVRoaXNTaGlwKG5hdmFsRmxlZXQsIHNoaXBPYmplY3QpXG4gICAgICAgID8gbmF2YWxGbGVldC5wdXNoKHNoaXBPYmplY3QpXG4gICAgICAgIDogbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWxsU2hpcHNBcmVTdW5rID0gKCkgPT4ge1xuICAgIGxldCBudW1iZXJPZlNoaXBzSGl0ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdmFsRmxlZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5hdmFsU2hpcCA9IG5hdmFsRmxlZXRbaV07XG4gICAgICBjb25zdCBzaGlwSGl0QXJyYXkgPSBuYXZhbFNoaXAuc2hpcC5zaGlwO1xuICAgICAgY29uc3QgbnVtYmVyT2ZIaXRzID0gc2hpcEhpdEFycmF5LnJlZHVjZShcbiAgICAgICAgKHN1bSwgY3VycmVudFZhbHVlKSA9PiBzdW0gKyBjdXJyZW50VmFsdWUsXG4gICAgICAgIDBcbiAgICAgICk7XG4gICAgICBudW1iZXJPZkhpdHMgPT09IHNoaXBIaXRBcnJheS5sZW5ndGggPyBudW1iZXJPZlNoaXBzSGl0KysgOiBudWxsO1xuICAgIH1cbiAgICBpZiAobnVtYmVyT2ZTaGlwc0hpdCA9PT0gbmF2YWxGbGVldC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZGluYXRlQXJyYXlYWSkgPT4ge1xuICAgIGNvbnN0IGhpdENvb3JkaW5hdGVTdHJpbmcgPSBjb29yZGluYXRlQXJyYXlYWS50b1N0cmluZygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2YWxGbGVldC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbmF2YWxTaGlwID0gbmF2YWxGbGVldFtpXTtcbiAgICAgIGNvbnN0IHNoaXBPYmplY3QgPSBuYXZhbFNoaXAuc2hpcDtcbiAgICAgIGNvbnN0IHNoaXBMb2NhdGlvbkFycmF5ID0gbmF2YWxTaGlwLmxvY2F0aW9uO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTG9jYXRpb25BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBzaGlwTG9jYXRpb25BcnJheVtpXTtcbiAgICAgICAgaWYgKGhpdENvb3JkaW5hdGVTdHJpbmcgPT09IHNoaXBDb29yZGluYXRlcykge1xuICAgICAgICAgIHNoaXBPYmplY3QuaGl0KGkpO1xuICAgICAgICAgIGFsbFNoaXBzQXJlU3VuaygpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBtaXNzZWRIaXRzLnB1c2goaGl0Q29vcmRpbmF0ZVN0cmluZyk7XG4gIH07XG5cbiAgcmV0dXJuIHsgbmF2YWxGbGVldCwgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBtaXNzZWRIaXRzLCBhbGxTaGlwc0FyZVN1bmsgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllcihuYW1lKSB7XG4gIGxldCBodW1hblBsYXllclR1cm4gPSB0cnVlO1xuXG4gIGNvbnN0IGh1bWFuID0gZ2FtZWJvYXJkRmFjdG9yeSgpO1xuXG4gIGNvbnN0IGNvbXB1dGVyID0gZ2FtZWJvYXJkRmFjdG9yeSgpO1xuXG4gIGNvbnN0IGZpcmVNaXNzaWxlID0gKGNvb3JkaW5hdGVBcnJheVhZKSA9PiB7XG4gICAgbGV0IHRhcmdldDtcbiAgICBodW1hblBsYXllclR1cm4gPyAodGFyZ2V0ID0gY29tcHV0ZXIpIDogKHRhcmdldCA9IGh1bWFuKTtcbiAgICBjb25zdCB4ID0gY29vcmRpbmF0ZUFycmF5WFlbMF07XG4gICAgY29uc3QgeSA9IGNvb3JkaW5hdGVBcnJheVhZWzFdO1xuICAgIGNvbnN0IGNvb3JkaW5hdGVTdHJpbmcgPSBjb29yZGluYXRlQXJyYXlYWS50b1N0cmluZygpO1xuICAgIGlmIChcbiAgICAgIHggPiA5IHx8XG4gICAgICB4IDwgMCB8fFxuICAgICAgeSA+IDkgfHxcbiAgICAgIHkgPCAwIHx8XG4gICAgICAoeCArIDEpICUgMSAhPT0gMCB8fFxuICAgICAgKHkgKyAxKSAlIDEgIT09IDBcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHt4fSwgJHt5fSBpcyBub3QgYSB2YWxpZCBzZXQgb2YgY29vcmRpbmF0ZXNgKTtcbiAgICB9IGVsc2UgaWYgKHRhcmdldC5taXNzZWRIaXRzLmluY2x1ZGVzKGNvb3JkaW5hdGVTdHJpbmcpKSB7XG4gICAgICByZXR1cm4gXCJ0aGlzIHNwb3QgaGFzIGFscmVhZHkgYmVlbiBhdHRhY2tlZFwiO1xuICAgIH1cblxuICAgIHRhcmdldC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVBcnJheVhZKTtcbiAgICBodW1hblBsYXllclR1cm4gPSAhaHVtYW5QbGF5ZXJUdXJuO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChwbGF5ZXIsIGNvb3JkaW5hdGVBcnJheVhZLCBsZW5ndGgsIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgY29uc3QgZmxlZXQgPSBwbGF5ZXIubmF2YWxGbGVldDtcbiAgICBjb25zdCBpbml0aWFsRmxlZXRTaXplID0gZmxlZXQubGVuZ3RoO1xuICAgIGxldCB4O1xuICAgIGxldCB5O1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNvb3JkaW5hdGVBcnJheVhZKSkge1xuICAgICAgeCA9IGNvb3JkaW5hdGVBcnJheVhZWzBdO1xuICAgICAgeSA9IGNvb3JkaW5hdGVBcnJheVhZWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhcnJheUZyb21TdHJpbmcgPSBjb29yZGluYXRlQXJyYXlYWS5zcGxpdChcIixcIik7XG4gICAgICB4ID0gYXJyYXlGcm9tU3RyaW5nWzBdO1xuICAgICAgeSA9IGFycmF5RnJvbVN0cmluZ1sxXTtcbiAgICB9XG4gICAgcGxheWVyLnBsYWNlU2hpcChsZW5ndGgsIHgsIHksIG9yaWVudGF0aW9uKTtcbiAgICBpZiAoZmxlZXQubGVuZ3RoID09PSBpbml0aWFsRmxlZXRTaXplKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlQ2FycmllciA9IChmb3JIdW1hblBsYXllciwgY29vcmRpbmF0ZUFycmF5WFksIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgbGV0IHBsYXllcjtcbiAgICBmb3JIdW1hblBsYXllciA/IChwbGF5ZXIgPSBodW1hbikgOiAocGxheWVyID0gY29tcHV0ZXIpO1xuICAgIGlmIChwbGFjZVNoaXAocGxheWVyLCBjb29yZGluYXRlQXJyYXlYWSwgNSwgb3JpZW50YXRpb24pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlQmF0dGxlc2hpcCA9IChmb3JIdW1hblBsYXllciwgY29vcmRpbmF0ZUFycmF5WFksIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgbGV0IHBsYXllcjtcbiAgICBmb3JIdW1hblBsYXllciA/IChwbGF5ZXIgPSBodW1hbikgOiAocGxheWVyID0gY29tcHV0ZXIpO1xuICAgIGlmIChwbGFjZVNoaXAocGxheWVyLCBjb29yZGluYXRlQXJyYXlYWSwgNCwgb3JpZW50YXRpb24pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlRGVzdHJveWVyID0gKGZvckh1bWFuUGxheWVyLCBjb29yZGluYXRlQXJyYXlYWSwgb3JpZW50YXRpb24pID0+IHtcbiAgICBsZXQgcGxheWVyO1xuICAgIGZvckh1bWFuUGxheWVyID8gKHBsYXllciA9IGh1bWFuKSA6IChwbGF5ZXIgPSBjb21wdXRlcik7XG4gICAgaWYgKHBsYWNlU2hpcChwbGF5ZXIsIGNvb3JkaW5hdGVBcnJheVhZLCAzLCBvcmllbnRhdGlvbikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTdWJtYXJpbmUgPSAoZm9ySHVtYW5QbGF5ZXIsIGNvb3JkaW5hdGVBcnJheVhZLCBvcmllbnRhdGlvbikgPT4ge1xuICAgIGxldCBwbGF5ZXI7XG4gICAgZm9ySHVtYW5QbGF5ZXIgPyAocGxheWVyID0gaHVtYW4pIDogKHBsYXllciA9IGNvbXB1dGVyKTtcbiAgICBpZiAocGxhY2VTaGlwKHBsYXllciwgY29vcmRpbmF0ZUFycmF5WFksIDMsIG9yaWVudGF0aW9uKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVBhdHJvbEJvYXQgPSAoZm9ySHVtYW5QbGF5ZXIsIGNvb3JkaW5hdGVBcnJheVhZLCBvcmllbnRhdGlvbikgPT4ge1xuICAgIGxldCBwbGF5ZXI7XG4gICAgZm9ySHVtYW5QbGF5ZXIgPyAocGxheWVyID0gaHVtYW4pIDogKHBsYXllciA9IGNvbXB1dGVyKTtcbiAgICBpZiAocGxhY2VTaGlwKHBsYXllciwgY29vcmRpbmF0ZUFycmF5WFksIDIsIG9yaWVudGF0aW9uKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGZpcmVNaXNzaWxlLFxuICAgIHBsYWNlQ2FycmllcixcbiAgICBwbGFjZUJhdHRsZXNoaXAsXG4gICAgcGxhY2VEZXN0cm95ZXIsXG4gICAgcGxhY2VTdWJtYXJpbmUsXG4gICAgcGxhY2VQYXRyb2xCb2F0LFxuICAgIG5hbWUsXG4gICAgaHVtYW4sXG4gICAgY29tcHV0ZXIsXG4gIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge1xuICBnYW1lYm9hcmRGYWN0b3J5LFxuICBnZXRSYW5kb21JbnRMZXNzVGhhbixcbiAgc2hpcEZhY3RvcnksXG4gIHBsYXllcixcbn0gZnJvbSBcIi4vZ2FtZUxvZ2ljLmpzXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IG1ha2VEaXZzID0gKHdoaWNoQm9hcmQsIHBsYXllclN0cmluZykgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGNvbnN0IHggPSBqO1xuICAgICAgY29uc3QgeSA9IGk7XG4gICAgICBjb25zdCBwb3NpdGlvbkFycmF5ID0gW3gsIHldLnRvU3RyaW5nKCk7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgaWROYW1lID0gYCR7cG9zaXRpb25BcnJheX0tJHtwbGF5ZXJTdHJpbmd9YDtcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZE5hbWUpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYCR7cGxheWVyU3RyaW5nfS1ib2FyZFNwb3RgKTtcbiAgICAgIHdoaWNoQm9hcmQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGluaXRpYWxpemVHYW1lID0gKG5hbWUpID0+IHtcbiAgY29uc3QgZ2FtZSA9IHBsYXllcihuYW1lKTtcbiAgcmV0dXJuIGdhbWU7XG59O1xuXG5jb25zdCBjb2xvckluU2hpcHMgPSAocGxheWVyLCBwbGF5ZXJBc1N0cmluZykgPT4ge1xuICBjb25zdCBmbGVldCA9IHBsYXllci5uYXZhbEZsZWV0O1xuICBjb25zdCBzaGlwVG9Db2xvciA9IGZsZWV0Lmxlbmd0aCAtIDE7XG4gIGNvbnN0IHNoaXBMb2NhdGlvbiA9IGZsZWV0W3NoaXBUb0NvbG9yXS5sb2NhdGlvbjtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMb2NhdGlvbi5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHNwb3QgPSBzaGlwTG9jYXRpb25baV07XG4gICAgY29uc3QgbWF0Y2hpbmdJZCA9IGAke3Nwb3R9LSR7cGxheWVyQXNTdHJpbmd9YDtcbiAgICBjb25zdCBzcG90SW5ET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtYXRjaGluZ0lkKTtcblxuICAgIHNwb3RJbkRPTS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgfVxuICByZXR1cm47XG59O1xuXG5jb25zdCBnZW5lcmF0ZUZpcmVNaXNzaWxlTW9kZSA9ICgpID0+IHtcbiAgY29uc3QgaHVtYW5Cb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaHVtYW5cIik7XG4gIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbXB1dGVyXCIpO1xufTtcblxuY29uc3QgcGxhY2VTaGlwID0gKGdhbWUpID0+IHtcbiAgY29uc3QgYXJyYXlPZlNoaXBzSW5HYW1lID0gW107XG4gIGNvbnN0IGdlbmVyYXRlU2hpcE9iamVjdCA9IChzaGlwTmFtZSwgZnVuY3Rpb25OYW1lLCBudW1iZXJPZlNwYWNlcykgPT4ge1xuICAgIGFycmF5T2ZTaGlwc0luR2FtZS5wdXNoKHsgc2hpcE5hbWUsIGZ1bmN0aW9uTmFtZSwgbnVtYmVyT2ZTcGFjZXMgfSk7XG4gIH07XG4gIGdlbmVyYXRlU2hpcE9iamVjdChcImNhcnJpZXJcIiwgZ2FtZS5wbGFjZUNhcnJpZXIsIDUpO1xuICBnZW5lcmF0ZVNoaXBPYmplY3QoXCJiYXR0bGVzaGlwXCIsIGdhbWUucGxhY2VCYXR0bGVzaGlwLCA0KTtcbiAgZ2VuZXJhdGVTaGlwT2JqZWN0KFwiZGVzdHJveWVyXCIsIGdhbWUucGxhY2VEZXN0cm95ZXIsIDMpO1xuICBnZW5lcmF0ZVNoaXBPYmplY3QoXCJzdWJtYXJpbmVcIiwgZ2FtZS5wbGFjZVN1Ym1hcmluZSwgMyk7XG4gIGdlbmVyYXRlU2hpcE9iamVjdChcInBhdHJvbCBib2F0XCIsIGdhbWUucGxhY2VQYXRyb2xCb2F0LCAyKTtcblxuICBjb25zdCB1cGRhdGVEb20gPSAoKSA9PiB7XG4gICAgY29uc3QgZmxlZXRMZW5ndGggPSBnYW1lLmh1bWFuLm5hdmFsRmxlZXQubGVuZ3RoO1xuICAgIGlmIChmbGVldExlbmd0aCA8IGFycmF5T2ZTaGlwc0luR2FtZS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gYXJyYXlPZlNoaXBzSW5HYW1lW2ZsZWV0TGVuZ3RoXTtcbiAgICAgIGNvbnN0IHNoaXBOYW1lID0gY3VycmVudFNoaXAuc2hpcE5hbWU7XG4gICAgICBjb25zdCBudW1iZXJPZlNwYWNlcyA9IGN1cnJlbnRTaGlwLm51bWJlck9mU3BhY2VzO1xuICAgICAgY29uc3QgaW5zdHJ1Y3Rpb25TdHJpbmcgPSBgUGxhY2UgeW91ciAke3NoaXBOYW1lfSAoJHtudW1iZXJPZlNwYWNlc30gc3BhY2VzKWA7XG4gICAgICBjb25zdCBoMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKTtcbiAgICAgIGgxLmlubmVySFRNTCA9IGluc3RydWN0aW9uU3RyaW5nO1xuICAgIH1cbiAgfTtcblxuICB1cGRhdGVEb20oKTtcblxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xuICBjb25zdCBwb3RlbnRpYWxTcG90QXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmh1bWFuLWJvYXJkU3BvdFwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3RlbnRpYWxTcG90QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzcG90ID0gcG90ZW50aWFsU3BvdEFycmF5W2ldO1xuXG4gICAgc3BvdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgZmxlZXRMZW5ndGggPSBnYW1lLmh1bWFuLm5hdmFsRmxlZXQubGVuZ3RoO1xuICAgICAgY29uc3QgY3VycmVudFNoaXAgPSBhcnJheU9mU2hpcHNJbkdhbWVbZmxlZXRMZW5ndGhdO1xuICAgICAgY29uc3QgZnVuY3Rpb25OYW1lID0gY3VycmVudFNoaXAuZnVuY3Rpb25OYW1lO1xuICAgICAgY29uc3Qgc3BvdElkID0gc3BvdC5pZDtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gYnV0dG9uLmlkO1xuICAgICAgY29uc3QgY29vcmRpbmF0ZUFycmF5WFkgPSBzcG90SWQuc3BsaXQoXCItXCIpWzBdO1xuICAgICAgZnVuY3Rpb25OYW1lKHRydWUsIGNvb3JkaW5hdGVBcnJheVhZLCBvcmllbnRhdGlvbik7XG4gICAgICBjb2xvckluU2hpcHMoZ2FtZS5odW1hbiwgXCJodW1hblwiKTtcblxuICAgICAgdXBkYXRlRG9tKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgaHVtYW5TaGlwUGxhY2VtZW50TW9kZSA9IChnYW1lKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudENvbnRhaW5lclwiKTtcbiAgY29udGVudERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBnYW1lYm9hcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaHVtYW5Cb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZFwiLCBcImh1bWFuXCIpO1xuICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlkXCIsIFwiY29tcHV0ZXJcIik7XG4gIGdhbWVib2FyZHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJnYW1lYm9hcmRzXCIpO1xuICBodW1hbkJvYXJkLmNsYXNzTGlzdC5hZGQoXCJnYW1lYm9hcmRcIik7XG4gIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZChcImdhbWVib2FyZFwiKTtcbiAgaHVtYW5Cb2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImh1bWFuXCIpO1xuICBodW1hbkJvYXJkLmNsYXNzTGlzdC5hZGQoXCJib2FyZEJpZ1wiKTtcbiAgY29tcHV0ZXJCb2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbXB1dGVyXCIpO1xuICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdC5hZGQoXCJib2FyZFNtYWxsXCIpO1xuXG4gIG1ha2VEaXZzKGNvbXB1dGVyQm9hcmQsIFwiY29tcHV0ZXJcIik7XG4gIG1ha2VEaXZzKGh1bWFuQm9hcmQsIFwiaHVtYW5cIik7XG5cbiAgY29uc3QgaCA9IFwiSG9yaXpvbnRhbFwiO1xuICBjb25zdCB2ID0gXCJWZXJ0aWNhbFwiO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaFwiKTtcbiAgYnV0dG9uLmlubmVySFRNTCA9IGg7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPT09IGggPyAoYnV0dG9uLmlubmVySFRNTCA9IHYpIDogKGJ1dHRvbi5pbm5lckhUTUwgPSBoKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYnV0dG9uLmlubmVySFRNTFswXS50b0xvd2VyQ2FzZSgpKTtcbiAgfSk7XG5cbiAgZ2FtZWJvYXJkcy5hcHBlbmRDaGlsZChjb21wdXRlckJvYXJkKTtcbiAgZ2FtZWJvYXJkcy5hcHBlbmRDaGlsZChodW1hbkJvYXJkKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGdhbWVib2FyZHMpO1xuICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xuXG4gIHBsYWNlU2hpcChnYW1lKTtcbn07XG5cbmNvbnN0IGRvbU1hbmlwdWxhdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gIGNvbnN0IGdlbmVyYXRlTWFpbkJvZHkgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkaW5nLmlubmVySFRNTCA9IFwiQkFUVExFU0hJUFwiO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRlbnRDb250YWluZXJcIik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcbiAgfTtcblxuICBjb25zdCBnZW5lcmF0ZU5hbWVHYXRoZXJpbmdGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRDb250YWluZXJcIik7XG4gICAgY29udGVudERpdi5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGNvbnN0IHRleHRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIHRleHRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuYW1lSW5wdXRcIik7XG4gICAgdGV4dExhYmVsLmlubmVySFRNTCA9IFwiV2hhdCdzIHlvdXIgbmFtZSwgc2FpbG9yP1wiO1xuXG4gICAgdGV4dElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hbWVJbnB1dFwiKTtcbiAgICB0ZXh0SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5hbWVJbnB1dFwiKTtcblxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIkRvIGJhdHRsZSFcIjtcblxuICAgIHRleHRMYWJlbC5hcHBlbmRDaGlsZCh0ZXh0SW5wdXQpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0ZXh0TGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSB0ZXh0SW5wdXQudmFsdWU7XG4gICAgICBpZiAobmFtZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZ2VuZXJhdGVOYW1lR2F0aGVyaW5nRm9ybSgpO1xuICAgICAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50Q29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCB3YXJuaW5nUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB3YXJuaW5nUC5pbm5lckhUTUwgPSBcIllvdXIgbmFtZSBjYW4ndCBiZSBibGFua1wiO1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHdhcm5pbmdQKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGdhbWUgPSBpbml0aWFsaXplR2FtZShuYW1lKTtcbiAgICAgICAgaHVtYW5TaGlwUGxhY2VtZW50TW9kZShnYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBnZW5lcmF0ZU1haW5Cb2R5KCk7XG4gIGdlbmVyYXRlTmFtZUdhdGhlcmluZ0Zvcm0oKTtcbn07XG5cbmRvbU1hbmlwdWxhdGlvbigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9