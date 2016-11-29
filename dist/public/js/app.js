(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Static2 = require('./Static.js');

var _Static3 = _interopRequireDefault(_Static2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cage = function (_Static) {
	_inherits(Cage, _Static);

	function Cage(name) {
		_classCallCheck(this, Cage);

		console.log('in Cage');

		return _possibleConstructorReturn(this, (Cage.__proto__ || Object.getPrototypeOf(Cage)).call(this, name));
	} //end of constructor


	return Cage;
}(_Static3.default); //end of class


exports.default = Cage;

},{"./Static.js":9}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _gameObj2 = require('./gameObj.js');

var _gameObj3 = _interopRequireDefault(_gameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dynamic = function (_gameObj) {
	_inherits(Dynamic, _gameObj);

	function Dynamic(name) {
		_classCallCheck(this, Dynamic);

		console.log('in dynamic');

		return _possibleConstructorReturn(this, (Dynamic.__proto__ || Object.getPrototypeOf(Dynamic)).call(this, name));
	} //end of constructor


	return Dynamic;
}(_gameObj3.default); //end of class


exports.default = Dynamic;

},{"./gameObj.js":12}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameScreen = function (_Screen) {
	_inherits(GameScreen, _Screen);

	function GameScreen(name) {
		_classCallCheck(this, GameScreen);

		console.log('in GameScreen');

		var _this = _possibleConstructorReturn(this, (GameScreen.__proto__ || Object.getPrototypeOf(GameScreen)).call(this, name));

		_this.dom = document.getElementById('game-screen');

		return _this;
	} // end of constructor


	return GameScreen;
}(_Screen3.default); // end of class


exports.default = GameScreen;

},{"./Screen.js":7}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _gameObj2 = require('./gameObj.js');

var _gameObj3 = _interopRequireDefault(_gameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HUD = function (_gameObj) {
	_inherits(HUD, _gameObj);

	function HUD(name) {
		_classCallCheck(this, HUD);

		console.log('in HUD');

		return _possibleConstructorReturn(this, (HUD.__proto__ || Object.getPrototypeOf(HUD)).call(this, name));
	} //end of constructor


	return HUD;
}(_gameObj3.default); //end of class


exports.default = HUD;

},{"./gameObj.js":12}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LossScreen = function (_Screen) {
	_inherits(LossScreen, _Screen);

	function LossScreen(name) {
		_classCallCheck(this, LossScreen);

		console.log('in LossScreen');

		var _this = _possibleConstructorReturn(this, (LossScreen.__proto__ || Object.getPrototypeOf(LossScreen)).call(this, name));

		_this.dom = document.getElementById('loss-screen');

		_this.getStartButton();

		_this.getExitButton();

		return _this;
	} // end of constructor


	return LossScreen;
}(_Screen3.default); // end of class


exports.default = LossScreen;

},{"./Screen.js":7}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _HUD2 = require('./HUD.js');

var _HUD3 = _interopRequireDefault(_HUD2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Score = function (_HUD) {
	_inherits(Score, _HUD);

	function Score(name) {
		_classCallCheck(this, Score);

		console.log('in score');

		var _this = _possibleConstructorReturn(this, (Score.__proto__ || Object.getPrototypeOf(Score)).call(this, name));

		_this.dom = document.getElementById('game-score');

		return _this;
	} // end of constructor


	return Score;
}(_HUD3.default); // end of class


exports.default = Score;

},{"./HUD.js":4}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gameObj2 = require('./gameObj.js');

var _gameObj3 = _interopRequireDefault(_gameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Screen = function (_gameObj) {
	_inherits(Screen, _gameObj);

	function Screen(name) {
		_classCallCheck(this, Screen);

		console.log('in screen');

		return _possibleConstructorReturn(this, (Screen.__proto__ || Object.getPrototypeOf(Screen)).call(this, name));
	} //end of constructor

	_createClass(Screen, [{
		key: 'getStartButton',
		value: function getStartButton() {

			this.startButton = this.dom.getElementsByClassName('game-start')[0];
		}
	}, {
		key: 'getExitButton',
		value: function getExitButton() {

			this.exitButton = this.dom.getElementsByClassName('game-exit')[0];
		}
	}]);

	return Screen;
}(_gameObj3.default); //end of class


exports.default = Screen;

},{"./gameObj.js":12}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StartScreen = function (_Screen) {
	_inherits(StartScreen, _Screen);

	function StartScreen(name) {
		_classCallCheck(this, StartScreen);

		var _this = _possibleConstructorReturn(this, (StartScreen.__proto__ || Object.getPrototypeOf(StartScreen)).call(this, name));

		console.log('in StartScreen');

		_this.dom = document.getElementById('start-screen');

		_this.getStartButton();

		_this.startButton.addEventListener('click', function () {
			alert('I am in screen:' + this.name);

			window.gameScreens['start'].hide(); //hide myself

			window.gameScreens['game'].show(); //show self
		});

		_this.getExitButton();

		return _this;
	} // end of constructor


	return StartScreen;
}(_Screen3.default); // end of class


exports.default = StartScreen;

},{"./Screen.js":7}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _gameObj2 = require('./gameObj.js');

var _gameObj3 = _interopRequireDefault(_gameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Static = function (_gameObj) {
	_inherits(Static, _gameObj);

	function Static(name) {
		_classCallCheck(this, Static);

		console.log('in static');

		return _possibleConstructorReturn(this, (Static.__proto__ || Object.getPrototypeOf(Static)).call(this, name));
	} //end of constructor


	return Static;
}(_gameObj3.default); //end of class


exports.default = Static;

},{"./gameObj.js":12}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WonScreen = function (_Screen) {
	_inherits(WonScreen, _Screen);

	function WonScreen(name) {
		_classCallCheck(this, WonScreen);

		console.log('in WonScreen');

		var _this = _possibleConstructorReturn(this, (WonScreen.__proto__ || Object.getPrototypeOf(WonScreen)).call(this, name));

		_this.dom = document.getElementById('won-screen');

		_this.getStartButton();

		_this.getExitButton();

		return _this;
	} // end of constructor


	return WonScreen;
}(_Screen3.default); // end of class


exports.default = WonScreen;

},{"./Screen.js":7}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Static2 = require('./Static.js');

var _Static3 = _interopRequireDefault(_Static2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Zoo = function (_Static) {
	_inherits(Zoo, _Static);

	function Zoo(name) {
		_classCallCheck(this, Zoo);

		console.log('in Zoo');

		return _possibleConstructorReturn(this, (Zoo.__proto__ || Object.getPrototypeOf(Zoo)).call(this, name));
	} //end of constructor


	return Zoo;
}(_Static3.default); //end of class


exports.default = Zoo;

},{"./Static.js":9}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gameObj = function () {
	function gameObj(name) {
		_classCallCheck(this, gameObj);

		//inherits from generic Javascript Object;

		console.log('in gameObj');

		this.name = name;
		this.id = this.setId();
	} //end of construcor

	/**
 * get the id assigned to this object.
 * @returns [string] the name
 */

	_createClass(gameObj, [{
		key: 'getId',
		value: function getId() {

			return this.id;
		}

		/** 
  * get the name assigned to this object
  * @returns name
  */

	}, {
		key: 'getName',
		value: function getName() {

			return this.name;
		}
	}, {
		key: 'setName',
		value: function setName(newName) {

			this.name = newName;
		}

		/** 
  	*generates a unique id for every game obkect
  * @link stackoverflow.com/questions/105034/creae-guid-uuid-in-javascript
  	*/

	}, {
		key: 'setId',
		value: function setId() {
			var d = new Date().getTime();
			if (window.performance && typeof window.performance.now === "function") {
				d += performance.now(); //use high-precision timer if available
			}
			var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				var r = (d + Math.random() * 16) % 16 | 0;
				d = Math.floor(d / 16);
				return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
			});
			return uuid;
		} //end of set id

	}, {
		key: 'show',
		value: function show() {

			this.dom.style.display = 'block';
		}
	}, {
		key: 'hide',
		value: function hide() {

			this.dom.style.display = 'none';
		}
	}, {
		key: 'setBackgroundImage',
		value: function setBackgroundImage(imgPath) {

			this.dom.style.backgroundImage = "url('" + imgPath + "')";
		}
	}, {
		key: 'setForegroundimage',
		value: function setForegroundimage(imgPath) {

			var img = new Image();

			img.src = imgPath;

			this.dom.appendChild(img);
		}
	}]);

	return gameObj;
}(); //end of class


exports.default = gameObj;

},{}],13:[function(require,module,exports){
'use strict';

var _gameObj = require('./gameObj.js');

var _gameObj2 = _interopRequireDefault(_gameObj);

var _Screen = require('./Screen.js');

var _Screen2 = _interopRequireDefault(_Screen);

var _StartScreen = require('./StartScreen.js');

var _StartScreen2 = _interopRequireDefault(_StartScreen);

var _GameScreen = require('./GameScreen.js');

var _GameScreen2 = _interopRequireDefault(_GameScreen);

var _WonScreen = require('./WonScreen.js');

var _WonScreen2 = _interopRequireDefault(_WonScreen);

var _LossScreen = require('./LossScreen.js');

var _LossScreen2 = _interopRequireDefault(_LossScreen);

var _HUD = require('./HUD.js');

var _HUD2 = _interopRequireDefault(_HUD);

var _Score = require('./Score.js');

var _Score2 = _interopRequireDefault(_Score);

var _Static = require('./Static.js');

var _Static2 = _interopRequireDefault(_Static);

var _Zoo = require('./Zoo.js');

var _Zoo2 = _interopRequireDefault(_Zoo);

var _Cage = require('./Cage.js');

var _Cage2 = _interopRequireDefault(_Cage);

var _Dynamic = require('./Dynamic.js');

var _Dynamic2 = _interopRequireDefault(_Dynamic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//static object


//hud object
//maste object.
console.log('loading game.');

//global storage of all screebs created


//dynamic object


//screen objects
window.gameScreens = [];

window.startScreen = new _StartScreen2.default('ZooKill start');
window.gameScreens['start'] = window.startScreen;
window.gameScreen = new _GameScreen2.default('zookill Game');
window.gameScreens['game'] = window.gameScreen;

window.wonScreen = new _WonScreen2.default('zookill You won');
window.gameScreens['won'] = window.wonScreen;
window.lossScreen = new _LossScreen2.default('zookill You loss');
window.gameScreens['loss'] = window.lossScreen;

window.score = new _Score2.default('game score object');

window.zoo = new _Zoo2.default('zoo object');
window.cage = new _Cage2.default('cage object');

//start the game.....
window.startScreen.show();

//create a general object

//window.obj = new gameObj('donald trump');

//window.obj2 = new Screen('start Screen');

//window.ob3 = new HUD('game score');

},{"./Cage.js":1,"./Dynamic.js":2,"./GameScreen.js":3,"./HUD.js":4,"./LossScreen.js":5,"./Score.js":6,"./Screen.js":7,"./StartScreen.js":8,"./Static.js":9,"./WonScreen.js":10,"./Zoo.js":11,"./gameObj.js":12}]},{},[13])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0NhZ2UuanMiLCJtb2R1bGVzL2pzL0R5bmFtaWMuanMiLCJtb2R1bGVzL2pzL0dhbWVTY3JlZW4uanMiLCJtb2R1bGVzL2pzL0hVRC5qcyIsIm1vZHVsZXMvanMvTG9zc1NjcmVlbi5qcyIsIm1vZHVsZXMvanMvU2NvcmUuanMiLCJtb2R1bGVzL2pzL1NjcmVlbi5qcyIsIm1vZHVsZXMvanMvU3RhcnRTY3JlZW4uanMiLCJtb2R1bGVzL2pzL1N0YXRpYy5qcyIsIm1vZHVsZXMvanMvV29uU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9ab28uanMiLCJtb2R1bGVzL2pzL2dhbWVPYmouanMiLCJtb2R1bGVzL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztJQUNxQixJOzs7QUFFcEIsZUFBYyxJQUFkLEVBQXFCO0FBQUE7O0FBRXBCLFVBQVEsR0FBUixDQUFZLFNBQVo7O0FBRm9CLHFHQUliLElBSmE7QUFLcEIsRSxDQUFBOzs7O3FCQUdEOzs7a0JBVm9CLEk7Ozs7Ozs7OztBQ0RyQjs7Ozs7Ozs7Ozs7O0lBQ3FCLE87OztBQUVwQixrQkFBYyxJQUFkLEVBQXFCO0FBQUE7O0FBRXBCLFVBQVEsR0FBUixDQUFZLFlBQVo7O0FBRm9CLDJHQUliLElBSmE7QUFLcEIsRSxDQUFBOzs7O3NCQUdEOzs7a0JBVm9CLE87Ozs7Ozs7OztBQ0RyQjs7Ozs7Ozs7Ozs7O0lBRXFCLFU7OztBQUVwQixxQkFBYyxJQUFkLEVBQXFCO0FBQUE7O0FBRXBCLFVBQVEsR0FBUixDQUFZLGVBQVo7O0FBRm9CLHNIQUdiLElBSGE7O0FBS3BCLFFBQUssR0FBTCxHQUFXLFNBQVMsY0FBVCxDQUF5QixhQUF6QixDQUFYOztBQUxvQjtBQU9wQixFLENBQUM7Ozs7cUJBR0Y7OztrQkFab0IsVTs7Ozs7Ozs7O0FDRnJCOzs7Ozs7Ozs7Ozs7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OztBQUVBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBTdGF0aWMgZnJvbSAnLi9TdGF0aWMuanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FnZSBleHRlbmRzIFN0YXRpYyB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gQ2FnZScpO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblx0fS8vZW5kIG9mIGNvbnN0cnVjdG9yXG5cblxufS8vZW5kIG9mIGNsYXNzIiwiaW1wb3J0IGdhbWVPYmogZnJvbSAnLi9nYW1lT2JqLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWMgZXh0ZW5kcyBnYW1lT2JqIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBkeW5hbWljJyk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXHR9Ly9lbmQgb2YgY29uc3RydWN0b3JcblxuXG59Ly9lbmQgb2YgY2xhc3MiLCJpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIEdhbWVTY3JlZW4nKTtcblx0XHRzdXBlciggbmFtZSApO1xuXG5cdFx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2dhbWUtc2NyZWVuJyApO1xuXG5cdH0gLy8gZW5kIG9mIGNvbnN0cnVjdG9yXG5cdFxuXG59Ly8gZW5kIG9mIGNsYXNzIiwiaW1wb3J0IGdhbWVPYmogZnJvbSAnLi9nYW1lT2JqLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhVRCBleHRlbmRzIGdhbWVPYmp7XG5cdFxuXHRjb25zdHJ1Y3RvciggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBIVUQnKTtcblxuXHRcdHN1cGVyKCBuYW1lICk7XG5cblx0fS8vZW5kIG9mIGNvbnN0cnVjdG9yXG5cblx0XG5cbn0vL2VuZCBvZiBjbGFzcyIsImltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb3NzU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gTG9zc1NjcmVlbicpO1xuXHRcdHN1cGVyKCBuYW1lICk7XG5cblx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbG9zcy1zY3JlZW4nICk7XG5cblx0XHR0aGlzLmdldFN0YXJ0QnV0dG9uKCk7XG5cblx0XHR0aGlzLmdldEV4aXRCdXR0b24oKTtcblxuXHR9IC8vIGVuZCBvZiBjb25zdHJ1Y3RvclxuXHRcblxufS8vIGVuZCBvZiBjbGFzcyIsImltcG9ydCBIVUQgZnJvbSAnLi9IVUQuanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUgZXh0ZW5kcyBIVUQge1xuXG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBzY29yZScpO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdnYW1lLXNjb3JlJyApO1xuXG5cdH0gLy8gZW5kIG9mIGNvbnN0cnVjdG9yXG5cdFxuXG59IC8vIGVuZCBvZiBjbGFzcyIsImltcG9ydCBnYW1lT2JqIGZyb20gJy4vZ2FtZU9iai5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JlZW4gZXh0ZW5kcyBnYW1lT2JqIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBzY3JlZW4nKTtcblxuXHRcdHN1cGVyKCBuYW1lICk7XG5cdH0vL2VuZCBvZiBjb25zdHJ1Y3RvclxuXG5cdGdldFN0YXJ0QnV0dG9uKCkge1xuXG5cdFx0dGhpcy5zdGFydEJ1dHRvbiA9IHRoaXMuZG9tLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoICdnYW1lLXN0YXJ0JyApWzBdO1xuXG5cdFx0XG5cblx0fVxuXG5cdGdldEV4aXRCdXR0b24oKSB7XG5cblx0XHR0aGlzLmV4aXRCdXR0b24gPSB0aGlzLmRvbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCAnZ2FtZS1leGl0JyApWzBdO1xuXG5cdH1cblxuXHRcblxufS8vZW5kIG9mIGNsYXNzIiwiaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0U2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXHRcdGNvbnNvbGUubG9nKCdpbiBTdGFydFNjcmVlbicpO1xuXG5cdFx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3N0YXJ0LXNjcmVlbicgKTtcblxuXHRcdHRoaXMuZ2V0U3RhcnRCdXR0b24oKTtcblxuXHRcdHRoaXMuc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdGFsZXJ0KCdJIGFtIGluIHNjcmVlbjonICsgdGhpcy5uYW1lICk7XG5cblx0XHRcdHdpbmRvdy5nYW1lU2NyZWVuc1sgJ3N0YXJ0JyBdLmhpZGUoKTsgLy9oaWRlIG15c2VsZlxuXG5cdFx0XHR3aW5kb3cuZ2FtZVNjcmVlbnNbICdnYW1lJyBdLnNob3coKTsvL3Nob3cgc2VsZlxuXG5cdFx0fSk7XG5cblx0XHR0aGlzLmdldEV4aXRCdXR0b24oKTtcblxuXHR9IC8vIGVuZCBvZiBjb25zdHJ1Y3RvclxuXG5cblx0XG5cbn0vLyBlbmQgb2YgY2xhc3MiLCJpbXBvcnQgZ2FtZU9iaiBmcm9tICcuL2dhbWVPYmouanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGljIGV4dGVuZHMgZ2FtZU9iaiB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gc3RhdGljJyk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXHR9Ly9lbmQgb2YgY29uc3RydWN0b3JcblxuXG59Ly9lbmQgb2YgY2xhc3MiLCJpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29uU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gV29uU2NyZWVuJyk7XG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd3b24tc2NyZWVuJyApO1xuXG5cdFx0dGhpcy5nZXRTdGFydEJ1dHRvbigpO1xuXG5cdFx0dGhpcy5nZXRFeGl0QnV0dG9uKCk7XG5cblx0fSAvLyBlbmQgb2YgY29uc3RydWN0b3Jcblx0XG5cbn0vLyBlbmQgb2YgY2xhc3MiLCJpbXBvcnQgU3RhdGljIGZyb20gJy4vU3RhdGljLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvbyBleHRlbmRzIFN0YXRpYyB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gWm9vJyk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXHR9Ly9lbmQgb2YgY29uc3RydWN0b3JcblxuXG59Ly9lbmQgb2YgY2xhc3MiLCIgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ2FtZU9iaiB7XG5cblx0Y29uc3RydWN0b3IoIG5hbWUgKSB7XG5cblx0XHQvL2luaGVyaXRzIGZyb20gZ2VuZXJpYyBKYXZhc2NyaXB0IE9iamVjdDtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBnYW1lT2JqJyk7XG5cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuaWQgPSB0aGlzLnNldElkKCk7XG5cblx0XHRcblxuXHR9Ly9lbmQgb2YgY29uc3RydWNvclxuXG5cdC8qKlxuXHQqIGdldCB0aGUgaWQgYXNzaWduZWQgdG8gdGhpcyBvYmplY3QuXG5cdCogQHJldHVybnMgW3N0cmluZ10gdGhlIG5hbWVcblx0Ki9cblxuXHRnZXRJZCgpIHtcblxuXHRcdHJldHVybiB0aGlzLmlkO1xuXHR9XG5cblx0LyoqIFxuXHQqIGdldCB0aGUgbmFtZSBhc3NpZ25lZCB0byB0aGlzIG9iamVjdFxuXHQqIEByZXR1cm5zIG5hbWVcblx0Ki9cblxuXHRnZXROYW1lKCkge1xuXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcblxuXHR9XG5cblx0c2V0TmFtZSAoIG5ld05hbWUgKSB7XG5cblx0XHR0aGlzLm5hbWUgPSBuZXdOYW1lO1xuXG5cdH1cblxuXHQvKiogXG5cblx0KmdlbmVyYXRlcyBhIHVuaXF1ZSBpZCBmb3IgZXZlcnkgZ2FtZSBvYmtlY3Rcblx0KiBAbGluayBzdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2NyZWFlLWd1aWQtdXVpZC1pbi1qYXZhc2NyaXB0XG5cblx0Ki9cblxuXG5cdCAgc2V0SWQgKCkge1xuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlICYmIHR5cGVvZiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGQgKz0gcGVyZm9ybWFuY2Uubm93KCk7IC8vdXNlIGhpZ2gtcHJlY2lzaW9uIHRpbWVyIGlmIGF2YWlsYWJsZVxuICAgICAgICB9XG4gICAgICAgIHZhciB1dWlkID0gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgdmFyIHIgPSAoZCArIE1hdGgucmFuZG9tKCkqMTYpJTE2IHwgMDtcbiAgICAgICAgICAgIGQgPSBNYXRoLmZsb29yKGQvMTYpO1xuICAgICAgICAgICAgcmV0dXJuIChjPT0neCcgPyByIDogKHImMHgzfDB4OCkpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1dWlkO1xuICAgIH0vL2VuZCBvZiBzZXQgaWRcblxuICAgIHNob3cgKCkge1xuXG5cdFx0dGhpcy5kb20uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cblx0fVxuXG5cdGhpZGUgKCkge1xuXG5cdFx0dGhpcy5kb20uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuXHR9XG5cblx0c2V0QmFja2dyb3VuZEltYWdlKCBpbWdQYXRoICkge1xuXG5cdFx0dGhpcy5kb20uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ1wiICsgaW1nUGF0aCArIFwiJylcIjtcblx0fVxuXG5cdHNldEZvcmVncm91bmRpbWFnZSggaW1nUGF0aCApIHtcblxuXHRcdGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcblxuXHRcdGltZy5zcmMgPSBpbWdQYXRoO1xuXG5cdFx0dGhpcy5kb20uYXBwZW5kQ2hpbGQoIGltZyApO1xuXHR9XG5cblxuXG59IC8vZW5kIG9mIGNsYXNzIiwiLy9tYXN0ZSBvYmplY3QuXG5pbXBvcnQgZ2FtZU9iaiBmcm9tICcuL2dhbWVPYmouanMnO1xuXG4vL3NjcmVlbiBvYmplY3RzXG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcbmltcG9ydCBTdGFydFNjcmVlbiBmcm9tICcuL1N0YXJ0U2NyZWVuLmpzJztcbmltcG9ydCBHYW1lU2NyZWVuIGZyb20gJy4vR2FtZVNjcmVlbi5qcyc7XG5pbXBvcnQgV29uU2NyZWVuIGZyb20gJy4vV29uU2NyZWVuLmpzJztcbmltcG9ydCBMb3NzU2NyZWVuIGZyb20gJy4vTG9zc1NjcmVlbi5qcyc7XG5cbi8vaHVkIG9iamVjdFxuaW1wb3J0IEhVRCBmcm9tICcuL0hVRC5qcyc7XG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZS5qcyc7XG5cbi8vc3RhdGljIG9iamVjdFxuaW1wb3J0IFN0YXRpYyBmcm9tICcuL1N0YXRpYy5qcyc7XG5pbXBvcnQgWm9vIGZyb20gJy4vWm9vLmpzJztcbmltcG9ydCBDYWdlIGZyb20gJy4vQ2FnZS5qcyc7XG5cbi8vZHluYW1pYyBvYmplY3RcbmltcG9ydCBEeW5hbWljIGZyb20gJy4vRHluYW1pYy5qcyc7XG5cbmNvbnNvbGUubG9nKCdsb2FkaW5nIGdhbWUuJyk7XG5cbi8vZ2xvYmFsIHN0b3JhZ2Ugb2YgYWxsIHNjcmVlYnMgY3JlYXRlZFxud2luZG93LmdhbWVTY3JlZW5zID0gW107XG5cbndpbmRvdy5zdGFydFNjcmVlbiA9IG5ldyBTdGFydFNjcmVlbignWm9vS2lsbCBzdGFydCcpO1xud2luZG93LmdhbWVTY3JlZW5zWyAnc3RhcnQnIF0gPSB3aW5kb3cuc3RhcnRTY3JlZW47XG53aW5kb3cuZ2FtZVNjcmVlbiA9IG5ldyBHYW1lU2NyZWVuKCd6b29raWxsIEdhbWUnKTtcbndpbmRvdy5nYW1lU2NyZWVuc1sgJ2dhbWUnIF0gPSB3aW5kb3cuZ2FtZVNjcmVlbjtcblxud2luZG93LndvblNjcmVlbiA9IG5ldyBXb25TY3JlZW4oJ3pvb2tpbGwgWW91IHdvbicpO1xud2luZG93LmdhbWVTY3JlZW5zWyAnd29uJyBdID0gd2luZG93LndvblNjcmVlbjtcbndpbmRvdy5sb3NzU2NyZWVuID0gbmV3IExvc3NTY3JlZW4oJ3pvb2tpbGwgWW91IGxvc3MnKTtcbndpbmRvdy5nYW1lU2NyZWVuc1sgJ2xvc3MnIF0gPSB3aW5kb3cubG9zc1NjcmVlbjtcblxud2luZG93LnNjb3JlID0gbmV3IFNjb3JlKCdnYW1lIHNjb3JlIG9iamVjdCcpO1xuXG5cbndpbmRvdy56b28gPSBuZXcgWm9vKCd6b28gb2JqZWN0Jyk7XG53aW5kb3cuY2FnZSA9IG5ldyBDYWdlKCdjYWdlIG9iamVjdCcpO1xuXG5cbi8vc3RhcnQgdGhlIGdhbWUuLi4uLlxud2luZG93LnN0YXJ0U2NyZWVuLnNob3coKTtcblxuXG5cblxuXG5cbi8vY3JlYXRlIGEgZ2VuZXJhbCBvYmplY3RcblxuLy93aW5kb3cub2JqID0gbmV3IGdhbWVPYmooJ2RvbmFsZCB0cnVtcCcpO1xuXG4vL3dpbmRvdy5vYmoyID0gbmV3IFNjcmVlbignc3RhcnQgU2NyZWVuJyk7XG5cbi8vd2luZG93Lm9iMyA9IG5ldyBIVUQoJ2dhbWUgc2NvcmUnKTtcblxuXG4iXX0=
