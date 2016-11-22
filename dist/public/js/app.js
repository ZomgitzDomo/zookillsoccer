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

		return _possibleConstructorReturn(this, (Score.__proto__ || Object.getPrototypeOf(Score)).call(this, name));
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
		key: 'show',
		value: function show() {

			this.dom.style.display = 'block';
		}
	}, {
		key: 'hide',
		value: function hide() {

			this.dom.style.display = 'none';
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

//dynamic object


//screen objects


window.startScreen = new _StartScreen2.default('ZooKill start');
window.gameScreen = new _GameScreen2.default('zookill Game');

window.wonScreen = new _WonScreen2.default('zookill You won');
window.lossScreen = new _LossScreen2.default('zookill You loss');

window.score = new _Score2.default('game score object');

window.zoo = new _Zoo2.default('zoo object');
window.cage = new _Cage2.default('cage object');

//create a general object

//window.obj = new gameObj('donald trump');

//window.obj2 = new Screen('start Screen');

//window.ob3 = new HUD('game score');

},{"./Cage.js":1,"./Dynamic.js":2,"./GameScreen.js":3,"./HUD.js":4,"./LossScreen.js":5,"./Score.js":6,"./Screen.js":7,"./StartScreen.js":8,"./Static.js":9,"./WonScreen.js":10,"./Zoo.js":11,"./gameObj.js":12}]},{},[13])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0NhZ2UuanMiLCJtb2R1bGVzL2pzL0R5bmFtaWMuanMiLCJtb2R1bGVzL2pzL0dhbWVTY3JlZW4uanMiLCJtb2R1bGVzL2pzL0hVRC5qcyIsIm1vZHVsZXMvanMvTG9zc1NjcmVlbi5qcyIsIm1vZHVsZXMvanMvU2NvcmUuanMiLCJtb2R1bGVzL2pzL1NjcmVlbi5qcyIsIm1vZHVsZXMvanMvU3RhcnRTY3JlZW4uanMiLCJtb2R1bGVzL2pzL1N0YXRpYy5qcyIsIm1vZHVsZXMvanMvV29uU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9ab28uanMiLCJtb2R1bGVzL2pzL2dhbWVPYmouanMiLCJtb2R1bGVzL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztJQUNxQixJOzs7QUFFcEIsZUFBYyxJQUFkLEVBQXFCO0FBQUE7O0FBRXBCLFVBQVEsR0FBUixDQUFZLFNBQVo7O0FBRm9CLHFHQUliLElBSmE7QUFLcEIsRSxDQUFBOzs7O3FCQUdEOzs7a0JBVm9CLEk7Ozs7Ozs7OztBQ0RyQjs7Ozs7Ozs7Ozs7O0lBQ3FCLE87OztBQUVwQixrQkFBYyxJQUFkLEVBQXFCO0FBQUE7O0FBRXBCLFVBQVEsR0FBUixDQUFZLFlBQVo7O0FBRm9CLDJHQUliLElBSmE7QUFLcEIsRSxDQUFBOzs7O3NCQUdEOzs7a0JBVm9CLE87Ozs7Ozs7OztBQ0RyQjs7Ozs7Ozs7Ozs7O0lBRXFCLFU7OztBQUVwQixxQkFBYyxJQUFkLEVBQXFCO0FBQUE7O0FBRXBCLFVBQVEsR0FBUixDQUFZLGVBQVo7O0FBRm9CLHNIQUdiLElBSGE7O0FBS3BCLFFBQUssR0FBTCxHQUFXLFNBQVMsY0FBVCxDQUF5QixhQUF6QixDQUFYOztBQUxvQjtBQU9wQixFLENBQUM7Ozs7cUJBR0Y7OztrQkFab0IsVTs7Ozs7Ozs7O0FDRnJCOzs7Ozs7Ozs7Ozs7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QTVELEVBQXdFO0FBQ3BFLFNBQUssWUFBWSxHQUFaLEVBQUwsQ0FEb0UsQ0FDNUM7QUFDM0I7QUFDRCxPQUFJLE9BQU8sdUNBQXVDLE9BQXZDLENBQStDLE9BQS9DLEVBQXdELFVBQVUsQ0FBVixFQUFhO0FBQzVFLFFBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFMLEtBQWMsRUFBbkIsSUFBdUIsRUFBdkIsR0FBNEIsQ0FBcEM7QUFDQSxRQUFJLEtBQUssS0FBTCxDQUFXLElBQUUsRUFBYixDQUFKO0FBQ0EsV0FBTyxDQUFDLEtBQUcsR0FBSCxHQUFTLENBQVQsR0FBYyxJQUFFLEdBQUYsR0FBTSxHQUFyQixFQUEyQixRQUEzQixDQUFvQyxFQUFwQyxDQUFQO0FBQ0gsSUFKVSxDQUFYO0FBS0EsVUFBTyxJQUFQO0FBQ0gsRyxDQUFBOzs7Ozs7S0FJSDs7O2tCQWpFb0IsTzs7Ozs7QUNDdEI7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7Ozs7QUFOQTs7O0FBSkE7QUFWQTtBQXNCQSxRQUFRLEdBQVIsQ0FBWSxlQUFaOztBQUhBOzs7QUFoQkE7OztBQXFCQSxPQUFPLFdBQVAsR0FBcUIsMEJBQWdCLGVBQWhCLENBQXJCO0FBQ0EsT0FBTyxVQUFQLEdBQW9CLHlCQUFlLGNBQWYsQ0FBcEI7O0FBRUEsT0FBTyxTQUFQLEdBQW1CLHdCQUFjLGlCQUFkLENBQW5CO0FBQ0EsT0FBTyxVQUFQLEdBQW9CLHlCQUFlLGtCQUFmLENBQXBCOztBQUVBLE9BQU8sS0FBUCxHQUFlLG9CQUFVLG1CQUFWLENBQWY7O0FBR0EsT0FBTyxHQUFQLEdBQWEsa0JBQVEsWUFBUixDQUFiO0FBQ0EsT0FBTyxJQUFQLEdBQWMsbUJBQVMsYUFBVCxDQUFkOztBQU9BOztBQUVBOztBQUVBOztBQUVBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBTdGF0aWMgZnJvbSAnLi9TdGF0aWMuanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FnZSBleHRlbmRzIFN0YXRpYyB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gQ2FnZScpO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblx0fS8vZW5kIG9mIGNvbnN0cnVjdG9yXG5cblxufS8vZW5kIG9mIGNsYXNzIiwiaW1wb3J0IGdhbWVPYmogZnJvbSAnLi9nYW1lT2JqLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWMgZXh0ZW5kcyBnYW1lT2JqIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBkeW5hbWljJyk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXHR9Ly9lbmQgb2YgY29uc3RydWN0b3JcblxuXG59Ly9lbmQgb2YgY2xhc3MiLCJpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIEdhbWVTY3JlZW4nKTtcblx0XHRzdXBlciggbmFtZSApO1xuXG5cdFx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2dhbWUtc2NyZWVuJyApO1xuXG5cdH0gLy8gZW5kIG9mIGNvbnN0cnVjdG9yXG5cdFxuXG59Ly8gZW5kIG9mIGNsYXNzIiwiaW1wb3J0IGdhbWVPYmogZnJvbSAnLi9nYW1lT2JqLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhVRCBleHRlbmRzIGdhbWVPYmp7XG5cdFxuXHRjb25zdHJ1Y3RvciggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBIVUQnKTtcblxuXHRcdHN1cGVyKCBuYW1lICk7XG5cblx0fS8vZW5kIG9mIGNvbnN0cnVjdG9yXG5cbn0vL2VuZCBvZiBjbGFzcyIsImltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb3NzU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gTG9zc1NjcmVlbicpO1xuXHRcdHN1cGVyKCBuYW1lICk7XG5cblx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbG9zcy1zY3JlZW4nICk7XG5cblx0fSAvLyBlbmQgb2YgY29uc3RydWN0b3Jcblx0XG5cbn0vLyBlbmQgb2YgY2xhc3MiLCJpbXBvcnQgSFVEIGZyb20gJy4vSFVELmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlIGV4dGVuZHMgSFVEIHtcblxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gc2NvcmUnKTtcblxuXHRcdHN1cGVyKCBuYW1lICk7XG5cblx0fSAvLyBlbmQgb2YgY29uc3RydWN0b3Jcblx0XG5cbn0gLy8gZW5kIG9mIGNsYXNzIiwiaW1wb3J0IGdhbWVPYmogZnJvbSAnLi9nYW1lT2JqLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmVlbiBleHRlbmRzIGdhbWVPYmoge1xuXHRcblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIHNjcmVlbicpO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblx0fS8vZW5kIG9mIGNvbnN0cnVjdG9yXG5cblx0c2hvdyAoKSB7XG5cblx0XHR0aGlzLmRvbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuXHR9XG5cblx0aGlkZSAoKSB7XG5cblx0XHR0aGlzLmRvbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG5cdH1cblxufS8vZW5kIG9mIGNsYXNzIiwiaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0U2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXHRcdGNvbnNvbGUubG9nKCdpbiBTdGFydFNjcmVlbicpO1xuXG5cdFx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3N0YXJ0LXNjcmVlbicgKTtcblxuXHR9IC8vIGVuZCBvZiBjb25zdHJ1Y3RvclxuXHRcblxufS8vIGVuZCBvZiBjbGFzcyIsImltcG9ydCBnYW1lT2JqIGZyb20gJy4vZ2FtZU9iai5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aWMgZXh0ZW5kcyBnYW1lT2JqIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBzdGF0aWMnKTtcblxuXHRcdHN1cGVyKCBuYW1lICk7XG5cdH0vL2VuZCBvZiBjb25zdHJ1Y3RvclxuXG5cbn0vL2VuZCBvZiBjbGFzcyIsImltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb25TY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xuXG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBXb25TY3JlZW4nKTtcblx0XHRzdXBlciggbmFtZSApO1xuXG5cdFx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3dvbi1zY3JlZW4nICk7XG5cblx0fSAvLyBlbmQgb2YgY29uc3RydWN0b3Jcblx0XG5cbn0vLyBlbmQgb2YgY2xhc3MiLCJpbXBvcnQgU3RhdGljIGZyb20gJy4vU3RhdGljLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvbyBleHRlbmRzIFN0YXRpYyB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gWm9vJyk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXHR9Ly9lbmQgb2YgY29uc3RydWN0b3JcblxuXG59Ly9lbmQgb2YgY2xhc3MiLCIgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ2FtZU9iaiB7XG5cblx0Y29uc3RydWN0b3IoIG5hbWUgKSB7XG5cblx0XHQvL2luaGVyaXRzIGZyb20gZ2VuZXJpYyBKYXZhc2NyaXB0IE9iamVjdDtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBnYW1lT2JqJyk7XG5cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuaWQgPSB0aGlzLnNldElkKCk7XG5cblx0XHRcblxuXHR9Ly9lbmQgb2YgY29uc3RydWNvclxuXG5cdC8qKlxuXHQqIGdldCB0aGUgaWQgYXNzaWduZWQgdG8gdGhpcyBvYmplY3QuXG5cdCogQHJldHVybnMgW3N0cmluZ10gdGhlIG5hbWVcblx0Ki9cblxuXHRnZXRJZCgpIHtcblxuXHRcdHJldHVybiB0aGlzLmlkO1xuXHR9XG5cblx0LyoqIFxuXHQqIGdldCB0aGUgbmFtZSBhc3NpZ25lZCB0byB0aGlzIG9iamVjdFxuXHQqIEByZXR1cm5zIG5hbWVcblx0Ki9cblxuXHRnZXROYW1lKCkge1xuXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcblxuXHR9XG5cblx0c2V0TmFtZSAoIG5ld05hbWUgKSB7XG5cblx0XHR0aGlzLm5hbWUgPSBuZXdOYW1lO1xuXG5cdH1cblxuXHQvKiogXG5cblx0KmdlbmVyYXRlcyBhIHVuaXF1ZSBpZCBmb3IgZXZlcnkgZ2FtZSBvYmtlY3Rcblx0KiBAbGluayBzdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2NyZWFlLWd1aWQtdXVpZC1pbi1qYXZhc2NyaXB0XG5cblx0Ki9cblxuXG5cdCAgc2V0SWQgKCkge1xuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlICYmIHR5cGVvZiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGQgKz0gcGVyZm9ybWFuY2Uubm93KCk7IC8vdXNlIGhpZ2gtcHJlY2lzaW9uIHRpbWVyIGlmIGF2YWlsYWJsZVxuICAgICAgICB9XG4gICAgICAgIHZhciB1dWlkID0gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgdmFyIHIgPSAoZCArIE1hdGgucmFuZG9tKCkqMTYpJTE2IHwgMDtcbiAgICAgICAgICAgIGQgPSBNYXRoLmZsb29yKGQvMTYpO1xuICAgICAgICAgICAgcmV0dXJuIChjPT0neCcgPyByIDogKHImMHgzfDB4OCkpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1dWlkO1xuICAgIH0vL2VuZCBvZiBzZXQgaWRcblxuXG5cbn0gLy9lbmQgb2YgY2xhc3MiLCIvL21hc3RlIG9iamVjdC5cbmltcG9ydCBnYW1lT2JqIGZyb20gJy4vZ2FtZU9iai5qcyc7XG5cbi8vc2NyZWVuIG9iamVjdHNcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuaW1wb3J0IFN0YXJ0U2NyZWVuIGZyb20gJy4vU3RhcnRTY3JlZW4uanMnO1xuaW1wb3J0IEdhbWVTY3JlZW4gZnJvbSAnLi9HYW1lU2NyZWVuLmpzJztcbmltcG9ydCBXb25TY3JlZW4gZnJvbSAnLi9Xb25TY3JlZW4uanMnO1xuaW1wb3J0IExvc3NTY3JlZW4gZnJvbSAnLi9Mb3NzU2NyZWVuLmpzJztcblxuLy9odWQgb2JqZWN0XG5pbXBvcnQgSFVEIGZyb20gJy4vSFVELmpzJztcbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlLmpzJztcblxuLy9zdGF0aWMgb2JqZWN0XG5pbXBvcnQgU3RhdGljIGZyb20gJy4vU3RhdGljLmpzJztcbmltcG9ydCBab28gZnJvbSAnLi9ab28uanMnO1xuaW1wb3J0IENhZ2UgZnJvbSAnLi9DYWdlLmpzJztcblxuLy9keW5hbWljIG9iamVjdFxuaW1wb3J0IER5bmFtaWMgZnJvbSAnLi9EeW5hbWljLmpzJztcblxuY29uc29sZS5sb2coJ2xvYWRpbmcgZ2FtZS4nKTtcblxud2luZG93LnN0YXJ0U2NyZWVuID0gbmV3IFN0YXJ0U2NyZWVuKCdab29LaWxsIHN0YXJ0Jyk7XG53aW5kb3cuZ2FtZVNjcmVlbiA9IG5ldyBHYW1lU2NyZWVuKCd6b29raWxsIEdhbWUnKTtcblxud2luZG93LndvblNjcmVlbiA9IG5ldyBXb25TY3JlZW4oJ3pvb2tpbGwgWW91IHdvbicpO1xud2luZG93Lmxvc3NTY3JlZW4gPSBuZXcgTG9zc1NjcmVlbignem9va2lsbCBZb3UgbG9zcycpO1xuXG53aW5kb3cuc2NvcmUgPSBuZXcgU2NvcmUoJ2dhbWUgc2NvcmUgb2JqZWN0Jyk7XG5cblxud2luZG93LnpvbyA9IG5ldyBab28oJ3pvbyBvYmplY3QnKTtcbndpbmRvdy5jYWdlID0gbmV3IENhZ2UoJ2NhZ2Ugb2JqZWN0Jyk7XG5cblxuXG5cblxuXG4vL2NyZWF0ZSBhIGdlbmVyYWwgb2JqZWN0XG5cbi8vd2luZG93Lm9iaiA9IG5ldyBnYW1lT2JqKCdkb25hbGQgdHJ1bXAnKTtcblxuLy93aW5kb3cub2JqMiA9IG5ldyBTY3JlZW4oJ3N0YXJ0IFNjcmVlbicpO1xuXG4vL3dpbmRvdy5vYjMgPSBuZXcgSFVEKCdnYW1lIHNjb3JlJyk7XG5cblxuIl19
