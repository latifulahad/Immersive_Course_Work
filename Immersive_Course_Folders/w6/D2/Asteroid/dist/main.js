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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nconst DEFAULTS = {\n    COLOR: '#505050',\n    RADIUS: 25,\n    SPEED: 5\n}\n\nfunction Asteroid(options) {\n    options = options || {};\n    options.pos = options.pos;\n    options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);\n    options.color = DEFAULTS.COLOR;\n    options.radius = DEFAULTS.RADIUS;\n    options.game = options.game; \n\n    MovingObject.call(this, options);\n}\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.prototype.isCollidedWith = function(otherObj) {\n    if(otherObj instanceof Ship) {\n        otherObj.relocate();\n    }\n}\n// const a = new Asteriod({ pos: [1, 2]}) //WORKS\n// console.log(a.pos)\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nfunction Bullet(options) {\n    options = options || {};\n    options.pos = options.pos;\n    options.vel = options.vel;\n    options.color = DEFAULTS.COLOR;\n    options.radius = DEFAULTS.RADIUS;\n    options.game = options.game;\n\n    MovingObject.call(this, options);\n}\n    \nUtil.inherits(Bullet, MovingObject);\nBullet.prototype.isWrappable = false;\n\nBullet.prototype.collideWith = function(ast) {\n    if(this.isCollidedWith(ast)) { this.game.remove(ast); }\n}\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\")\n\nfunction Game() {\n    this.asteroids = [];\n    this.ship = new Ship({ pos: this.randomPosition(), game: this });\n    this.bullets = [];\n}\n\nGame.DIM_X = 1000;\nGame.DIM_Y = 600;\nGame.NUM_ASTEROIDS = 10;\n\nGame.prototype.randomPosition = function() {\n    return [ Math.floor(Game.DIM_X * Math.random()), Math.floor(Game.DIM_Y * Math.random()) ];\n}\n// let a = new Game();\n// console.log(a.randomPosition()) //WORKS\n\nGame.prototype.addAsteroids = function() {\n    let loca = this.randomPosition();\n    const ast = new Asteroid({ pos: loca, game: this });\n    this.asteroids.push(ast);\n}\n\nGame.prototype.allObjects = function() {\n    return [].concat(this.asteroids, this.ship, this.bullets);\n}\n\nGame.prototype.moveObjects = function() {\n    this.allObjects().forEach(ele => { ele.move(); } )\n}\n\nGame.prototype.draw = function(ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    this.allObjects().forEach(ast => { ast.draw(ctx); } )\n} \n//In theory draw shouldn't wrk on ast, due to having different prototypes...but due to recursiveness MAYBE!\n\nGame.prototype.wrap = function(pos) {\n    let newPos = [pos[0], pos[1]];\n\n    for(let i = 0; i < 2; i++) {\n        if(i === 0 && pos[i] > 1000) { newPos[i] = 1; }\n        if(i === 0 && pos[i + 1] > 600) { newPos[i + 1] = 1; }\n    }    \n    return newPos;\n}\n// let a = new Game();\n// console.log(a.wrap([1001, 601])) //WORKS\n\nGame.prototype.checkCollisions = function() {\n    let objects = this.allObjects();\n\n    for(let i = 0; i < this.asteroids.length; i++) { \n        for(let j = i + 1; j < this.asteroids.length; j++) { \n            if(objects[i].isCollidedWith(objects[j])) { return \"COLLISION\"; }\n        }\n    }\n    \n}\n\nGame.prototype.remove = function(ast) {\n    if(ast instanceof Bullet) {\n        this.bullets.splice(this.bullets.indexOf(ast), 1);\n    } else if(ast instanceof Asteroid) {\n        this.asteroids.splice(this.asteroids.indexOf(ast), 1);\n    } else if(ast instanceof Ship) {\n        this.ship = undefined;\n    }\n}\n\nGame.prototype.step = function() {\n    this.moveObjects();\n    this.checkCollisions();\n}\n\nGame.prototype.isOutOfBounds = function(pos) {\n    if(pos[0] > 1000 || pos[1] > 600) { return true; }\n    return false;\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*An obj of this class ought to maintain the visual aspect of client-end inputs \nrelative to the autonomus movements of the other objects that are a part of the game obj. as well.\nAll activity is to be conducted from the Entrance file, using logic that resembles code from within the block of \nruby's if __FILE__ == $PROGRAM_NAME { ___ } \nthis obj's methods for visual representation.....\n*/\n\nfunction GameView(game, ctx) {\n    this.game = game;\n    this.ctx = ctx;\n}\n\nGameView.MOVES = {\n    w: [-1, 0],\n    a: [0, -1],\n    s: [1, 0],\n    d: [0, 1]\n}\n\nGameView.prototype.bindKeyHandlers = function () {\n    const ship = this.game.ship;\n\n    Object.keys(GameView.MOVES).forEach(k => {\n        const mvDir = GameView.MOVES[k];\n        key(k, function() { ship.power(mvDir); })\n    })\n\n    key(\"f\", function() { ship.fireBullet(); })\n}\n\nGameView.prototype.start = function() {\n    setInterval(() => { \n        this.bindKeyHandlers();\n        this.game.step();\n        this.game.draw(this.ctx);\n     }, 20);\n}\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const MovingObject = require(\"./moving_object.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n    const canvasEl = document.getElementById(\"game-canvas\");\n    canvasEl.width = Game.DIM_X;\n    canvasEl.height = Game.DIM_Y;\n    \n    const ctx = canvasEl.getContext(\"2d\");\n    const game = new Game();\n    // new GameView(game, ctx).start();\n})\n\n// window.MovingObject = MovingObject; //scopeTestRun\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nfunction MovingObject(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n    this.game = options.game;\n}\n\nMovingObject.prototype.isWrappable = true;\n\nMovingObject.prototype.move = function() {\n    const game = this.game;\n\n    let newPos = [(this.pos[0] += this.vel[0]), (this.pos[1] += this.vel[1])];\n    if(game.isOutOfBOunds(newPos)) {\n        if(this.isWrappable) { \n            this.pos = game.wrap(newPos); \n        } else {\n            game.remove(this);\n        }\n    }\n}\n\nMovingObject.prototype.isCollidedWith = function(otherObj) {\n    let disBtw = Util.dist(this.pos, otherObj.pos);\n    return disBtw < (this.radius + otherObj.radius);\n    }\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\nfunction randomColor() {\n    const hexDigits = \"0123456789ABCDEF\";\n\n    let color = \"#\";\n    for (let i = 0; i < 3; i++) {\n        color += hexDigits[Math.floor((Math.random() * 16))];\n    }\n\n    return color;\n}\n\nfunction Ship(options) {\n    options = options || {};\n    options.pos = options.pos;\n    options.vel = options.vel || [0, 0];\n    options.color = options.color || randomColor()\n    options.radius = Ship.RADIUS;\n    options.game = options.game;\n\n    MovingObject.call(this, options);\n}\n\nShip.radius = 15;\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.relocate = function() {\n    this.pos = this.game.randomPosition();\n    this.vel = [0, 0];\n}\n\nShip.prototype.power = function(impluse) {\n    this.vel = [(this.vel[0] + impluse[0]), (this.vel[1] + impluse[1])];\n}\n// let a = new Ship({ pos: [1, 2]})\n// a.power([2, 2]);\n// console.log(a.vel);\n\nShip.prototype.fireBullet = function() {\n    const blt = new Bullet({game: this.game, pos: this.pos, color: this.color, vel: this.vel}) \n    this.game.bullets.push(blt);\n}\n\nmodule.exports = Ship;\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits(childCl, parentCl) {\n        childCl.prototype = Object.create(parentCl.prototype);\n        childCl.prototype.constructor = childCl; \n    },\n    \n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    \n    dist(pos1, pos2) {\n        return Math.sqrt(\n            Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)\n        );\n    },\n\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n}\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });