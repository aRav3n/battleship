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
      yToUse = Number(xToUse);
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

const colorInSpots = (player, playerAsString, classToAdd) => {
  const fleet = player.navalFleet;
  for (let i = 0; i < fleet.length; i++) {
    const shipLocation = fleet[i].location;
    for (let i = 0; i < shipLocation.length; i++) {
      const spot = shipLocation[i];
      const matchingId = `${spot}-${playerAsString}`;
      const spotInDOM = document.getElementById(matchingId);
      spotInDOM.classList.add(classToAdd);
    }
  }
};

const generateFireMissileMode = () => {
  const humanBoard = document.querySelector("#human");
  const computerBoard = document.querySelector("#computer");
};

const placeShip = (game, shipName, functionName, numberOfSpaces) => {
  const potentialSpotArray = document.querySelectorAll(".human-boardSpot");
  const instructionString = `Place your ${shipName} (${numberOfSpaces} spaces)`;
  const h1 = document.querySelector("h1");
  const button = document.querySelector("button");
  h1.innerHTML = instructionString;
  for (let i = 0; i < potentialSpotArray.length; i++) {
    const spot = potentialSpotArray[i];
    spot.addEventListener("click", () => {
      const spotId = spot.id;
      const orientation = button.id;
      const coordinateArrayXY = spotId.split("-")[0];
      functionName(true, coordinateArrayXY, orientation);
      colorInSpots(game.human, "human", "ship");
    });
  }
};

const placeCarrier = (game) => {
  placeShip(game, "carrier", game.placeCarrier, 5);
};

const generateShipPlacementMode = (game) => {
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

  placeCarrier(game);
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
        generateShipPlacementMode(game);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQSw0QkFBNEIsS0FBSyxHQUFHLGVBQWU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLFVBQVUsR0FBRyxnQkFBZ0I7QUFDdkU7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtCQUErQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVMb2dpYy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuYm9hcmRCaWcge1xuICBoZWlnaHQ6IG1pbig2MHZoLCA5MHZ3KTtcbn1cblxuLmJvYXJkU21hbGwge1xuICBoZWlnaHQ6IG1pbigxNXZoLCA0MHZ3KTtcbn1cblxuYm9keSxcbmJvZHkgPiBkaXYsXG5mb3JtLFxubGFiZWwge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24sXG5mb3JtLFxuaW5wdXQsXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGdhcDogMnZoO1xufVxuXG4jY29udGVudENvbnRhaW5lciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDV2bWluO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4uZ2FtZWJvYXJkIHtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgbWFyZ2luOiAxdmg7XG4gIHBhZGRpbmc6IDF2bWluO1xufVxuXG4uZ2FtZWJvYXJkID4gZGl2IHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMjI7XG59XG5cbi5nYW1lYm9hcmQgPiBkaXY6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNjY7XG59XG5cbi5nYW1lYm9hcmQgPiAuaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbn1cblxuLmdhbWVib2FyZCA+IC5taXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmdhbWVib2FyZCA+IC5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xufVxuXG4jZ2FtZWJvYXJkcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBDb3BwZXJwbGF0ZSwgUGFweXJ1cywgZmFudGFzeTtcbiAgZm9udC1zaXplOiAxMHZtaW47XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luOiAydmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTs7OztFQUlFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBOzs7O0VBSUUsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixRQUFRO0VBQ1Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ib2FyZEJpZyB7XFxuICBoZWlnaHQ6IG1pbig2MHZoLCA5MHZ3KTtcXG59XFxuXFxuLmJvYXJkU21hbGwge1xcbiAgaGVpZ2h0OiBtaW4oMTV2aCwgNDB2dyk7XFxufVxcblxcbmJvZHksXFxuYm9keSA+IGRpdixcXG5mb3JtLFxcbmxhYmVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uLFxcbmZvcm0sXFxuaW5wdXQsXFxubGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBnYXA6IDJ2aDtcXG59XFxuXFxuI2NvbnRlbnRDb250YWluZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDV2bWluO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgbWFyZ2luOiAxdmg7XFxuICBwYWRkaW5nOiAxdm1pbjtcXG59XFxuXFxuLmdhbWVib2FyZCA+IGRpdiB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMjI7XFxufVxcblxcbi5nYW1lYm9hcmQgPiBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjY2O1xcbn1cXG5cXG4uZ2FtZWJvYXJkID4gLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xcbn1cXG5cXG4uZ2FtZWJvYXJkID4gLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmdhbWVib2FyZCA+IC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICBib3JkZXItcmFkaXVzOiAyNSU7XFxufVxcblxcbiNnYW1lYm9hcmRzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogQ29wcGVycGxhdGUsIFBhcHlydXMsIGZhbnRhc3k7XFxuICBmb250LXNpemU6IDEwdm1pbjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW46IDJ2aDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxucCB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSW50TGVzc1RoYW4obnVtYmVyKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBudW1iZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpcEZhY3RvcnkobGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgbGVuZ3RoICE9PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBzaGlwID0gQXJyYXkobGVuZ3RoKTtcbiAgY29uc3Qgc2hpcExvY2F0aW9uID0gQXJyYXkobGVuZ3RoKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgc2hpcFtpXSA9IDA7XG4gIH1cblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3VtT2ZBcnJheSA9IHNoaXAucmVkdWNlKFxuICAgICAgKGFjY3VtdWxhdG9yLCBuZXdOdW1iZXIpID0+IGFjY3VtdWxhdG9yICsgbmV3TnVtYmVyLFxuICAgICAgMFxuICAgICk7XG4gICAgcmV0dXJuIHN1bU9mQXJyYXkgPT09IHNoaXAubGVuZ3RoO1xuICB9O1xuXG4gIGNvbnN0IGhpdCA9IChpbmRleCkgPT4ge1xuICAgIHNoaXBbaW5kZXhdID0gMTtcbiAgfTtcblxuICByZXR1cm4geyBzaGlwLCBoaXQsIGlzU3Vuaywgc2hpcExvY2F0aW9uIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1lYm9hcmRGYWN0b3J5KCkge1xuICBjb25zdCBtaXNzZWRIaXRzID0gW107XG4gIGNvbnN0IG5hdmFsRmxlZXQgPSBbXTtcbiAgY29uc3QgZ3JpZFNpemUgPSAxMDtcblxuICBjb25zdCBhYmxlVG9QbGFjZVRoaXNTaGlwID0gKGZsZWV0LCBuZXdTaGlwKSA9PiB7XG4gICAgY29uc3QgbmV3U2hpcExvY2F0aW9uID0gbmV3U2hpcC5sb2NhdGlvbjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZsZWV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBmbGVldFNoaXBMb2NhdGlvbiA9IGZsZWV0W2ldLmxvY2F0aW9uO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmbGVldFNoaXBMb2NhdGlvbi5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBmbGVldFNoaXBTcG90ID0gZmxlZXRTaGlwTG9jYXRpb25bal07XG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbmV3U2hpcExvY2F0aW9uLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgY29uc3QgbmV3U2hpcFNwb3QgPSBuZXdTaGlwTG9jYXRpb25ba107XG4gICAgICAgICAgaWYgKG5ld1NoaXBTcG90ID09PSBmbGVldFNoaXBTcG90KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKGxlbmd0aCwgeCwgeSwgb3JpZW50YXRpb24pID0+IHtcbiAgICBpZiAoXG4gICAgICB4ID4gOSB8fFxuICAgICAgeCA8IDAgfHxcbiAgICAgIHkgPiA5IHx8XG4gICAgICB5IDwgMCB8fFxuICAgICAgKHggKyAxKSAlIDEgIT09IDAgfHxcbiAgICAgICh5ICsgMSkgJSAxICE9PSAwXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7eH0sICR7eX0gaXMgbm90IGEgdmFsaWQgc2V0IG9mIGNvb3JkaW5hdGVzYCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcE9iamVjdCA9IHt9O1xuICAgIGxldCB4VG9Vc2UgPSB4O1xuICAgIGxldCB5VG9Vc2UgPSB5O1xuICAgIGNvbnN0IG5ld1NoaXAgPSBzaGlwRmFjdG9yeShsZW5ndGgpO1xuICAgIHNoaXBPYmplY3Quc2hpcCA9IG5ld1NoaXA7XG4gICAgaWYgKG9yaWVudGF0aW9uICE9PSBcImhcIiAmJiBvcmllbnRhdGlvbiAhPT0gXCJ2XCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vdCBhIHZhbGlkIG9yaWVudGF0aW9uLCBjYW4gb25seSBiZSAnaCcgb3IgJ3YnXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsb2NhdGlvbkFycmF5ID0gW107XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwidlwiICYmIHlUb1VzZSA+IGdyaWRTaXplIC0gbGVuZ3RoKSB7XG4gICAgICAgIHlUb1VzZSA9IGdyaWRTaXplIC0gbGVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcImhcIiAmJiB4VG9Vc2UgPiBncmlkU2l6ZSAtIGxlbmd0aCkge1xuICAgICAgICB4VG9Vc2UgPSBncmlkU2l6ZSAtIGxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHhUb1VzZSA9IE51bWJlcih4VG9Vc2UpO1xuICAgICAgeVRvVXNlID0gTnVtYmVyKHhUb1VzZSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRoaXNYID0geFRvVXNlICsgKG9yaWVudGF0aW9uID09PSBcImhcIiA/IGkgOiAwKTtcbiAgICAgICAgY29uc3QgdGhpc1kgPSB5VG9Vc2UgKyAob3JpZW50YXRpb24gPT09IFwidlwiID8gaSA6IDApO1xuICAgICAgICBjb25zdCBzcG90ID0gW107XG4gICAgICAgIHNwb3RbMF0gPSB0aGlzWDtcbiAgICAgICAgc3BvdFsxXSA9IHRoaXNZO1xuICAgICAgICBjb25zdCBzcG90U3RyaW5nID0gc3BvdC50b1N0cmluZygpO1xuICAgICAgICBsb2NhdGlvbkFycmF5LnB1c2goc3BvdFN0cmluZyk7XG4gICAgICB9XG5cbiAgICAgIHNoaXBPYmplY3QubG9jYXRpb24gPSBsb2NhdGlvbkFycmF5O1xuICAgICAgYWJsZVRvUGxhY2VUaGlzU2hpcChuYXZhbEZsZWV0LCBzaGlwT2JqZWN0KVxuICAgICAgICA/IG5hdmFsRmxlZXQucHVzaChzaGlwT2JqZWN0KVxuICAgICAgICA6IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFsbFNoaXBzQXJlU3VuayA9ICgpID0+IHtcbiAgICBsZXQgbnVtYmVyT2ZTaGlwc0hpdCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZhbEZsZWV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBuYXZhbFNoaXAgPSBuYXZhbEZsZWV0W2ldO1xuICAgICAgY29uc3Qgc2hpcEhpdEFycmF5ID0gbmF2YWxTaGlwLnNoaXAuc2hpcDtcbiAgICAgIGNvbnN0IG51bWJlck9mSGl0cyA9IHNoaXBIaXRBcnJheS5yZWR1Y2UoXG4gICAgICAgIChzdW0sIGN1cnJlbnRWYWx1ZSkgPT4gc3VtICsgY3VycmVudFZhbHVlLFxuICAgICAgICAwXG4gICAgICApO1xuICAgICAgbnVtYmVyT2ZIaXRzID09PSBzaGlwSGl0QXJyYXkubGVuZ3RoID8gbnVtYmVyT2ZTaGlwc0hpdCsrIDogbnVsbDtcbiAgICB9XG4gICAgaWYgKG51bWJlck9mU2hpcHNIaXQgPT09IG5hdmFsRmxlZXQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZUFycmF5WFkpID0+IHtcbiAgICBjb25zdCBoaXRDb29yZGluYXRlU3RyaW5nID0gY29vcmRpbmF0ZUFycmF5WFkudG9TdHJpbmcoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdmFsRmxlZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5hdmFsU2hpcCA9IG5hdmFsRmxlZXRbaV07XG4gICAgICBjb25zdCBzaGlwT2JqZWN0ID0gbmF2YWxTaGlwLnNoaXA7XG4gICAgICBjb25zdCBzaGlwTG9jYXRpb25BcnJheSA9IG5hdmFsU2hpcC5sb2NhdGlvbjtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExvY2F0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gc2hpcExvY2F0aW9uQXJyYXlbaV07XG4gICAgICAgIGlmIChoaXRDb29yZGluYXRlU3RyaW5nID09PSBzaGlwQ29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICBzaGlwT2JqZWN0LmhpdChpKTtcbiAgICAgICAgICBhbGxTaGlwc0FyZVN1bmsoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbWlzc2VkSGl0cy5wdXNoKGhpdENvb3JkaW5hdGVTdHJpbmcpO1xuICB9O1xuXG4gIHJldHVybiB7IG5hdmFsRmxlZXQsIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgbWlzc2VkSGl0cywgYWxsU2hpcHNBcmVTdW5rIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGF5ZXIobmFtZSkge1xuICBsZXQgaHVtYW5QbGF5ZXJUdXJuID0gdHJ1ZTtcblxuICBjb25zdCBodW1hbiA9IGdhbWVib2FyZEZhY3RvcnkoKTtcblxuICBjb25zdCBjb21wdXRlciA9IGdhbWVib2FyZEZhY3RvcnkoKTtcblxuICBjb25zdCBmaXJlTWlzc2lsZSA9IChjb29yZGluYXRlQXJyYXlYWSkgPT4ge1xuICAgIGxldCB0YXJnZXQ7XG4gICAgaHVtYW5QbGF5ZXJUdXJuID8gKHRhcmdldCA9IGNvbXB1dGVyKSA6ICh0YXJnZXQgPSBodW1hbik7XG4gICAgY29uc3QgeCA9IGNvb3JkaW5hdGVBcnJheVhZWzBdO1xuICAgIGNvbnN0IHkgPSBjb29yZGluYXRlQXJyYXlYWVsxXTtcbiAgICBjb25zdCBjb29yZGluYXRlU3RyaW5nID0gY29vcmRpbmF0ZUFycmF5WFkudG9TdHJpbmcoKTtcbiAgICBpZiAoXG4gICAgICB4ID4gOSB8fFxuICAgICAgeCA8IDAgfHxcbiAgICAgIHkgPiA5IHx8XG4gICAgICB5IDwgMCB8fFxuICAgICAgKHggKyAxKSAlIDEgIT09IDAgfHxcbiAgICAgICh5ICsgMSkgJSAxICE9PSAwXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7eH0sICR7eX0gaXMgbm90IGEgdmFsaWQgc2V0IG9mIGNvb3JkaW5hdGVzYCk7XG4gICAgfSBlbHNlIGlmICh0YXJnZXQubWlzc2VkSGl0cy5pbmNsdWRlcyhjb29yZGluYXRlU3RyaW5nKSkge1xuICAgICAgcmV0dXJuIFwidGhpcyBzcG90IGhhcyBhbHJlYWR5IGJlZW4gYXR0YWNrZWRcIjtcbiAgICB9XG5cbiAgICB0YXJnZXQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlQXJyYXlYWSk7XG4gICAgaHVtYW5QbGF5ZXJUdXJuID0gIWh1bWFuUGxheWVyVHVybjtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAocGxheWVyLCBjb29yZGluYXRlQXJyYXlYWSwgbGVuZ3RoLCBvcmllbnRhdGlvbikgPT4ge1xuICAgIGNvbnN0IGZsZWV0ID0gcGxheWVyLm5hdmFsRmxlZXQ7XG4gICAgY29uc3QgaW5pdGlhbEZsZWV0U2l6ZSA9IGZsZWV0Lmxlbmd0aDtcbiAgICBsZXQgeDtcbiAgICBsZXQgeTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb29yZGluYXRlQXJyYXlYWSkpIHtcbiAgICAgIHggPSBjb29yZGluYXRlQXJyYXlYWVswXTtcbiAgICAgIHkgPSBjb29yZGluYXRlQXJyYXlYWVsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYXJyYXlGcm9tU3RyaW5nID0gY29vcmRpbmF0ZUFycmF5WFkuc3BsaXQoXCIsXCIpO1xuICAgICAgeCA9IGFycmF5RnJvbVN0cmluZ1swXTtcbiAgICAgIHkgPSBhcnJheUZyb21TdHJpbmdbMV07XG4gICAgfVxuICAgIHBsYXllci5wbGFjZVNoaXAobGVuZ3RoLCB4LCB5LCBvcmllbnRhdGlvbik7XG4gICAgaWYgKGZsZWV0Lmxlbmd0aCA9PT0gaW5pdGlhbEZsZWV0U2l6ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBwbGFjZUNhcnJpZXIgPSAoZm9ySHVtYW5QbGF5ZXIsIGNvb3JkaW5hdGVBcnJheVhZLCBvcmllbnRhdGlvbikgPT4ge1xuICAgIGxldCBwbGF5ZXI7XG4gICAgZm9ySHVtYW5QbGF5ZXIgPyAocGxheWVyID0gaHVtYW4pIDogKHBsYXllciA9IGNvbXB1dGVyKTtcbiAgICBpZiAocGxhY2VTaGlwKHBsYXllciwgY29vcmRpbmF0ZUFycmF5WFksIDUsIG9yaWVudGF0aW9uKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBwbGFjZUJhdHRsZXNoaXAgPSAoZm9ySHVtYW5QbGF5ZXIsIGNvb3JkaW5hdGVBcnJheVhZLCBvcmllbnRhdGlvbikgPT4ge1xuICAgIGxldCBwbGF5ZXI7XG4gICAgZm9ySHVtYW5QbGF5ZXIgPyAocGxheWVyID0gaHVtYW4pIDogKHBsYXllciA9IGNvbXB1dGVyKTtcbiAgICBpZiAocGxhY2VTaGlwKHBsYXllciwgY29vcmRpbmF0ZUFycmF5WFksIDQsIG9yaWVudGF0aW9uKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBwbGFjZURlc3Ryb3llciA9IChmb3JIdW1hblBsYXllciwgY29vcmRpbmF0ZUFycmF5WFksIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgbGV0IHBsYXllcjtcbiAgICBmb3JIdW1hblBsYXllciA/IChwbGF5ZXIgPSBodW1hbikgOiAocGxheWVyID0gY29tcHV0ZXIpO1xuICAgIGlmIChwbGFjZVNoaXAocGxheWVyLCBjb29yZGluYXRlQXJyYXlYWSwgMywgb3JpZW50YXRpb24pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU3VibWFyaW5lID0gKGZvckh1bWFuUGxheWVyLCBjb29yZGluYXRlQXJyYXlYWSwgb3JpZW50YXRpb24pID0+IHtcbiAgICBsZXQgcGxheWVyO1xuICAgIGZvckh1bWFuUGxheWVyID8gKHBsYXllciA9IGh1bWFuKSA6IChwbGF5ZXIgPSBjb21wdXRlcik7XG4gICAgaWYgKHBsYWNlU2hpcChwbGF5ZXIsIGNvb3JkaW5hdGVBcnJheVhZLCAzLCBvcmllbnRhdGlvbikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VQYXRyb2xCb2F0ID0gKGZvckh1bWFuUGxheWVyLCBjb29yZGluYXRlQXJyYXlYWSwgb3JpZW50YXRpb24pID0+IHtcbiAgICBsZXQgcGxheWVyO1xuICAgIGZvckh1bWFuUGxheWVyID8gKHBsYXllciA9IGh1bWFuKSA6IChwbGF5ZXIgPSBjb21wdXRlcik7XG4gICAgaWYgKHBsYWNlU2hpcChwbGF5ZXIsIGNvb3JkaW5hdGVBcnJheVhZLCAyLCBvcmllbnRhdGlvbikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBmaXJlTWlzc2lsZSxcbiAgICBwbGFjZUNhcnJpZXIsXG4gICAgcGxhY2VCYXR0bGVzaGlwLFxuICAgIHBsYWNlRGVzdHJveWVyLFxuICAgIHBsYWNlU3VibWFyaW5lLFxuICAgIHBsYWNlUGF0cm9sQm9hdCxcbiAgICBuYW1lLFxuICAgIGh1bWFuLFxuICAgIGNvbXB1dGVyLFxuICB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtcbiAgZ2FtZWJvYXJkRmFjdG9yeSxcbiAgZ2V0UmFuZG9tSW50TGVzc1RoYW4sXG4gIHNoaXBGYWN0b3J5LFxuICBwbGF5ZXIsXG59IGZyb20gXCIuL2dhbWVMb2dpYy5qc1wiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBtYWtlRGl2cyA9ICh3aGljaEJvYXJkLCBwbGF5ZXJTdHJpbmcpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBjb25zdCB4ID0gajtcbiAgICAgIGNvbnN0IHkgPSBpO1xuICAgICAgY29uc3QgcG9zaXRpb25BcnJheSA9IFt4LCB5XS50b1N0cmluZygpO1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IGlkTmFtZSA9IGAke3Bvc2l0aW9uQXJyYXl9LSR7cGxheWVyU3RyaW5nfWA7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWROYW1lKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGAke3BsYXllclN0cmluZ30tYm9hcmRTcG90YCk7XG4gICAgICB3aGljaEJvYXJkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBpbml0aWFsaXplR2FtZSA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IGdhbWUgPSBwbGF5ZXIobmFtZSk7XG4gIHJldHVybiBnYW1lO1xufTtcblxuY29uc3QgY29sb3JJblNwb3RzID0gKHBsYXllciwgcGxheWVyQXNTdHJpbmcsIGNsYXNzVG9BZGQpID0+IHtcbiAgY29uc3QgZmxlZXQgPSBwbGF5ZXIubmF2YWxGbGVldDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmbGVldC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHNoaXBMb2NhdGlvbiA9IGZsZWV0W2ldLmxvY2F0aW9uO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExvY2F0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzcG90ID0gc2hpcExvY2F0aW9uW2ldO1xuICAgICAgY29uc3QgbWF0Y2hpbmdJZCA9IGAke3Nwb3R9LSR7cGxheWVyQXNTdHJpbmd9YDtcbiAgICAgIGNvbnN0IHNwb3RJbkRPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1hdGNoaW5nSWQpO1xuICAgICAgc3BvdEluRE9NLmNsYXNzTGlzdC5hZGQoY2xhc3NUb0FkZCk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBnZW5lcmF0ZUZpcmVNaXNzaWxlTW9kZSA9ICgpID0+IHtcbiAgY29uc3QgaHVtYW5Cb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaHVtYW5cIik7XG4gIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbXB1dGVyXCIpO1xufTtcblxuY29uc3QgcGxhY2VTaGlwID0gKGdhbWUsIHNoaXBOYW1lLCBmdW5jdGlvbk5hbWUsIG51bWJlck9mU3BhY2VzKSA9PiB7XG4gIGNvbnN0IHBvdGVudGlhbFNwb3RBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaHVtYW4tYm9hcmRTcG90XCIpO1xuICBjb25zdCBpbnN0cnVjdGlvblN0cmluZyA9IGBQbGFjZSB5b3VyICR7c2hpcE5hbWV9ICgke251bWJlck9mU3BhY2VzfSBzcGFjZXMpYDtcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIik7XG4gIGgxLmlubmVySFRNTCA9IGluc3RydWN0aW9uU3RyaW5nO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBvdGVudGlhbFNwb3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHNwb3QgPSBwb3RlbnRpYWxTcG90QXJyYXlbaV07XG4gICAgc3BvdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3Qgc3BvdElkID0gc3BvdC5pZDtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gYnV0dG9uLmlkO1xuICAgICAgY29uc3QgY29vcmRpbmF0ZUFycmF5WFkgPSBzcG90SWQuc3BsaXQoXCItXCIpWzBdO1xuICAgICAgZnVuY3Rpb25OYW1lKHRydWUsIGNvb3JkaW5hdGVBcnJheVhZLCBvcmllbnRhdGlvbik7XG4gICAgICBjb2xvckluU3BvdHMoZ2FtZS5odW1hbiwgXCJodW1hblwiLCBcInNoaXBcIik7XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHBsYWNlQ2FycmllciA9IChnYW1lKSA9PiB7XG4gIHBsYWNlU2hpcChnYW1lLCBcImNhcnJpZXJcIiwgZ2FtZS5wbGFjZUNhcnJpZXIsIDUpO1xufTtcblxuY29uc3QgZ2VuZXJhdGVTaGlwUGxhY2VtZW50TW9kZSA9IChnYW1lKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudENvbnRhaW5lclwiKTtcbiAgY29udGVudERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBnYW1lYm9hcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaHVtYW5Cb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZFwiLCBcImh1bWFuXCIpO1xuICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlkXCIsIFwiY29tcHV0ZXJcIik7XG4gIGdhbWVib2FyZHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJnYW1lYm9hcmRzXCIpO1xuICBodW1hbkJvYXJkLmNsYXNzTGlzdC5hZGQoXCJnYW1lYm9hcmRcIik7XG4gIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZChcImdhbWVib2FyZFwiKTtcbiAgaHVtYW5Cb2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImh1bWFuXCIpO1xuICBodW1hbkJvYXJkLmNsYXNzTGlzdC5hZGQoXCJib2FyZEJpZ1wiKTtcbiAgY29tcHV0ZXJCb2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbXB1dGVyXCIpO1xuICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdC5hZGQoXCJib2FyZFNtYWxsXCIpO1xuXG4gIG1ha2VEaXZzKGNvbXB1dGVyQm9hcmQsIFwiY29tcHV0ZXJcIik7XG4gIG1ha2VEaXZzKGh1bWFuQm9hcmQsIFwiaHVtYW5cIik7XG5cbiAgY29uc3QgaCA9IFwiSG9yaXpvbnRhbFwiO1xuICBjb25zdCB2ID0gXCJWZXJ0aWNhbFwiO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaFwiKTtcbiAgYnV0dG9uLmlubmVySFRNTCA9IGg7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPT09IGggPyAoYnV0dG9uLmlubmVySFRNTCA9IHYpIDogKGJ1dHRvbi5pbm5lckhUTUwgPSBoKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYnV0dG9uLmlubmVySFRNTFswXS50b0xvd2VyQ2FzZSgpKTtcbiAgfSk7XG5cbiAgZ2FtZWJvYXJkcy5hcHBlbmRDaGlsZChjb21wdXRlckJvYXJkKTtcbiAgZ2FtZWJvYXJkcy5hcHBlbmRDaGlsZChodW1hbkJvYXJkKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGdhbWVib2FyZHMpO1xuICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xuXG4gIHBsYWNlQ2FycmllcihnYW1lKTtcbn07XG5cbmNvbnN0IGRvbU1hbmlwdWxhdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gIGNvbnN0IGdlbmVyYXRlTWFpbkJvZHkgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkaW5nLmlubmVySFRNTCA9IFwiQkFUVExFU0hJUFwiO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRlbnRDb250YWluZXJcIik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcbiAgfTtcblxuICBjb25zdCBnZW5lcmF0ZU5hbWVHYXRoZXJpbmdGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRDb250YWluZXJcIik7XG4gICAgY29udGVudERpdi5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGNvbnN0IHRleHRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIHRleHRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuYW1lSW5wdXRcIik7XG4gICAgdGV4dExhYmVsLmlubmVySFRNTCA9IFwiV2hhdCdzIHlvdXIgbmFtZSwgc2FpbG9yP1wiO1xuXG4gICAgdGV4dElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hbWVJbnB1dFwiKTtcbiAgICB0ZXh0SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5hbWVJbnB1dFwiKTtcblxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIkRvIGJhdHRsZSFcIjtcblxuICAgIHRleHRMYWJlbC5hcHBlbmRDaGlsZCh0ZXh0SW5wdXQpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0ZXh0TGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSB0ZXh0SW5wdXQudmFsdWU7XG4gICAgICBpZiAobmFtZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZ2VuZXJhdGVOYW1lR2F0aGVyaW5nRm9ybSgpO1xuICAgICAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50Q29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCB3YXJuaW5nUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB3YXJuaW5nUC5pbm5lckhUTUwgPSBcIllvdXIgbmFtZSBjYW4ndCBiZSBibGFua1wiO1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHdhcm5pbmdQKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGdhbWUgPSBpbml0aWFsaXplR2FtZShuYW1lKTtcbiAgICAgICAgZ2VuZXJhdGVTaGlwUGxhY2VtZW50TW9kZShnYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBnZW5lcmF0ZU1haW5Cb2R5KCk7XG4gIGdlbmVyYXRlTmFtZUdhdGhlcmluZ0Zvcm0oKTtcbn07XG5cbmRvbU1hbmlwdWxhdGlvbigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9