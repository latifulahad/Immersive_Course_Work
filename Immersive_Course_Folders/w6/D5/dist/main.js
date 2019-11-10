/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DomNodeCollection {\n    constructor(nds) {\n        this.nodes = nds;\n    }\n    \n    on(evtTitle, callB) {\n        this.nodes.forEach(nd => {\n            nd.addEventListener(evtTitle, callB);\n            if (nd[`mainEvents-${evtTitle}`] === \"undefined\") { nd[`mainEvents-${evtTitle}`] = []; }\n            nd[`mainEvents-${evtTitle}`].push(callB);\n        });\n    }\n\n    off(evtTitle) {\n        this.nodes.forEach(nd => {\n            if (nd[`mainEvents-${evtTitle}`]) {\n                nd[`mainEvents-${evtTitle}`].forEach(callB => {\n                    nd.removeEventListener(evtTitle, callB);\n                })\n                nd[`mainEvents-${evtTitle}`] = [];\n            }\n        });\n    }\n    \n    html(arg) {\n        if(arg) {\n            this.nodes.forEach(nd => { nd.innerHTML = arg; })\n        } else {\n            return this.nodes[0].innerHTML;\n        }\n    }\n\n    empty() {\n        this.nodes.forEach(nd => { nd.html = \"\"; })\n    }\n\n    append(arg) {\n        this.nodes.forEach(nd => {\n            arg.forEach(potenNd => { nd.innerHTML = potenNd.outerHMTL; })\n        })\n    }\n\n    attr(atTitle, val) {\n        if(typeof val === 'string') {\n            this.nodes[0].setAttribute(atTitle, val);\n        } else {\n            return this.nodes[0].getAttribute(atTitle);\n        }\n    }\n\n    addClass(arg) {\n        this.nodes[0].className = arg; \n    }\n\n    removeClass() {\n        this.nodes[0].className = \"\";\n    }\n\n    children() {\n        const ans = [];\n\n        this.nodes.forEach(nd => {\n            const potenNds = nd.children;\n            potenNds.forEach(babeNd => { ans.push(babeNd); })\n        })\n\n        return new DomNodeCollection(ans);\n    }\n\n    parent() {\n        const ans = [];\n        this.nodes.forEach(nd => { ans.push(nd.parentElement); })\n        return new DomNodeCollection(ans);\n    }\n\n    remove() {\n        this.nodes.forEach(nd => { nd.parentElement.removeChild(nd); });\n    }\n\n}\n\nmodule.exports = DomNodeCollection;\n\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DomNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nconst funcs = [];\nlet docStatus = false;\n\nwindow.$l = (arg) => {\n    switch (typeof arg) {\n    case 'object': \n        return new DomNodeCollection([arg]);\n    case 'function':\n        if(docStatus === false) {\n            funcs.push(arg);\n        } else {\n           return arg();\n        }\n    case 'string':\n        const elmts = document.querySelectorAll(arg);\n        const nodeColl = Array.from(elmts);\n        return new DomNodeCollection(nodeColl);\n    }\n }\n\n\n document.addEventListener(\"DOMContentLoaded\", () => {\n     docStatus = true;\n    funcs.forEach(func => { func(); })\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });