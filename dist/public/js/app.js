(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Dynamic2 = require('./Dynamic.js');

var _Dynamic3 = _interopRequireDefault(_Dynamic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Animal = function (_Dynamic) {
	_inherits(Animal, _Dynamic);

	function Animal(name, screenId) {
		_classCallCheck(this, Animal);

		console.log('in Animal Object name:' + name);

		var _this = _possibleConstructorReturn(this, (Animal.__proto__ || Object.getPrototypeOf(Animal)).call(this, name));

		_this.dom = document.getElementById(screenId);

		_this.show();
		return _this;
	}

	return Animal;
}(_Dynamic3.default);

exports.default = Animal;

},{"./Dynamic.js":3}],2:[function(require,module,exports){
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

	function Cage(name, screenId) {
		_classCallCheck(this, Cage);

		console.log('in Cage name:' + name);

		// grab a cage from the dom

		var _this = _possibleConstructorReturn(this, (Cage.__proto__ || Object.getPrototypeOf(Cage)).call(this, name));

		_this.dom = document.getElementById(screenId);

		_this.show();

		return _this;
	} //end of constructor


	return Cage;
}(_Static3.default); //end of class


exports.default = Cage;

},{"./Static.js":11}],3:[function(require,module,exports){
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

},{"./gameObj.js":15}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

var _Zoo = require('./Zoo.js');

var _Zoo2 = _interopRequireDefault(_Zoo);

var _Trump = require('./Trump.js');

var _Trump2 = _interopRequireDefault(_Trump);

var _Player = require('./Player.js');

var _Player2 = _interopRequireDefault(_Player);

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

		_this.setBackgroundImage('img/screens/game-screen.png');

		return _this;
	} // end of constructor

	_createClass(GameScreen, [{
		key: 'build',
		value: function build() {

			console.log('building the game....');

			this.zoo = new _Zoo2.default('Funky Zoo');
			this.zoo.build();

			this.dom.appendChild(this.zoo.dom);

			this.trump = new _Trump2.default('Donald Presidentia Trump', 440, 245);

			this.player = new _Player2.default('myself', 500, 245, this.trump);
		}
	}]);

	return GameScreen;
}(_Screen3.default); // end of class


exports.default = GameScreen;

},{"./Player.js":7,"./Screen.js":9,"./Trump.js":12,"./Zoo.js":14}],5:[function(require,module,exports){
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

},{"./gameObj.js":15}],6:[function(require,module,exports){
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
		_this.setBackgroundImage('img/screens/loss-screen.png');

		_this.getStartButton();

		_this.getExitButton();

		return _this;
	} // end of constructor


	return LossScreen;
}(_Screen3.default); // end of class


exports.default = LossScreen;

},{"./Screen.js":9}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Dynamic2 = require('./Dynamic.js');

var _Dynamic3 = _interopRequireDefault(_Dynamic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_Dynamic) {
	_inherits(Player, _Dynamic);

	function Player(name, top, left, trump) {
		_classCallCheck(this, Player);

		console.log('in Player Object name:' + name);

		var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, name));

		_this.trump = trump;

		_this.dom = document.getElementById('player');

		_this.dom.style.top = top + 'px';
		_this.dom.style.left = left + 'px';

		document.addEventListener('keydown', function (event) {
			return _this.slew(event);
		}, false);

		document.addEventListener('keyup', function (event) {
			return _this.unkick(event);
		}, false);

		_this.checkForTrump();

		_this.show();

		return _this;
	}

	_createClass(Player, [{
		key: 'slew',
		value: function slew(event) {

			var currentX = parseInt(this.dom.style.left);
			var currentY = parseInt(this.dom.style.top);

			switch (event.keyCode) {

				case 37:
					//left arrow
					currentX -= 4;
					this.setPosition(currentY, currentX);
					break;

				case 39:
					//right arrow
					currentX += 4;
					this.setPosition(currentY, currentX);
					break;

				case 32:
					//space bar
					if (currentY < 496) return;
					currentY -= 4;
					this.setPosition(currentY, currentX);
					this.checkForTrump(currentY, currentX);
					break;
			}
		}
	}, {
		key: 'unkick',
		value: function unkick(event) {

			var currentX = parseInt(this.dom.style.left);
			var currentY = parseInt(this.dom.style.top);

			switch (event.keyCode) {
				case 32:
					//space bar
					currentY += 4;
					this.setPosition(currentY, currentX);
					break;

			}
		}
	}, {
		key: 'checkForTrump',
		value: function checkForTrump(top, left) {
			var trumpCurrentX = parseInt(this.trump.dom.style.left);
			var trumpCurrentY = parseInt(this.trump.dom.style.top);

			if (trumpCurrentY > 590 + 50 && trumpCurrentX > left && trumpCurrentX < left + 50) {

				trump.initPingPong();
			}
		}
	}]);

	return Player;
}(_Dynamic3.default);

exports.default = Player;

},{"./Dynamic.js":3}],8:[function(require,module,exports){
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

},{"./HUD.js":5}],9:[function(require,module,exports){
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

},{"./gameObj.js":15}],10:[function(require,module,exports){
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

		//set the background image

		_this.setBackgroundImage('img/screens/start-screen.png');

		//search for a 'start' button in the this.dom HTML markup. Note: will fail if no button present!

		_this.getStartButton();

		//wite up the Start button to load the GameScreen

		_this.startButton.addEventListener('click', function () {
			//alert('I am in screen:' + this.name );

			window.gameScreens['start'].hide(); //hide myself

			window.gameScreens['game'].show(); //show self

			window.gameScreens['game'].build(); //rebuild the game with all its obects
		});

		_this.getExitButton();

		return _this;
	} // end of constructor


	return StartScreen;
}(_Screen3.default); // end of class


exports.default = StartScreen;

},{"./Screen.js":9}],11:[function(require,module,exports){
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

},{"./gameObj.js":15}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Dynamic2 = require('./Dynamic.js');

var _Dynamic3 = _interopRequireDefault(_Dynamic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Trump = function (_Dynamic) {
	_inherits(Trump, _Dynamic);

	function Trump(name, top, left) {
		_classCallCheck(this, Trump);

		console.log('in Trump Object name:' + name);

		var _this = _possibleConstructorReturn(this, (Trump.__proto__ || Object.getPrototypeOf(Trump)).call(this, name));

		_this.dom = document.getElementById('trump');

		_this.dom.style.top = top + 'px';
		_this.dom.style.left = left + 'px';

		_this.initPingPong();

		_this.show();
		return _this;
	}

	_createClass(Trump, [{
		key: 'initPingPong',
		value: function initPingPong(isInit) {

			isInit = true;

			if (isInit == true) {

				console.log(" in pingpong");
			}
		}
	}, {
		key: 'startPingPong',
		value: function startPingPong() {

			console.log(" in startPingPong");
		}
	}]);

	return Trump;
}(_Dynamic3.default);

exports.default = Trump;

},{"./Dynamic.js":3}],13:[function(require,module,exports){
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

		_this.setBackgroundImage('img/screens/won-screen.png');

		_this.getStartButton();

		_this.getExitButton();

		return _this;
	} // end of constructor


	return WonScreen;
}(_Screen3.default); // end of class


exports.default = WonScreen;

},{"./Screen.js":9}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Static2 = require('./Static.js');

var _Static3 = _interopRequireDefault(_Static2);

var _Cage = require('./Cage.js');

var _Cage2 = _interopRequireDefault(_Cage);

var _Animal = require('./Animal.js');

var _Animal2 = _interopRequireDefault(_Animal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Zoo = function (_Static) {
	_inherits(Zoo, _Static);

	function Zoo(name) {
		_classCallCheck(this, Zoo);

		console.log('in Zoo');

		//grab a zoo
		var _this = _possibleConstructorReturn(this, (Zoo.__proto__ || Object.getPrototypeOf(Zoo)).call(this, name));

		_this.dom = document.createElement('div');

		return _this;
	} //end of constructor

	_createClass(Zoo, [{
		key: 'build',
		value: function build() {

			console.log('in zoo build');

			this.cages = [];

			this.cages.push(new _Cage2.default('Cage #1', 'cage1'));
			this.cages.push(new _Cage2.default('Cage #2', 'cage2'));
			this.cages.push(new _Cage2.default('Cage #3', 'cage3'));
			this.cages.push(new _Cage2.default('Cage #4', 'cage4'));

			this.animals = [];

			this.animals.push(new _Animal2.default('Angy Lion', 'lion'));
			this.animals.push(new _Animal2.default('Raging Tiger', 'tiger'));
			this.animals.push(new _Animal2.default('Mauling Bear', 'bear'));
			this.animals.push(new _Animal2.default('Rampaging Gorilla', 'gorilla'));
		}
	}]);

	return Zoo;
}(_Static3.default); //end of class


exports.default = Zoo;

},{"./Animal.js":1,"./Cage.js":2,"./Static.js":11}],15:[function(require,module,exports){
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

		//set the size of an object, in pexils.

	}, {
		key: 'setSize',
		value: function setSize(width, height) {

			this.dom.style.width = width + 'px';

			this.dom.style.height = height + 'px';
		}

		//set the position of an oject, relative to the enclosing screen object.

	}, {
		key: 'setPosition',
		value: function setPosition(top, left) {

			this.dom.style.top = top + 'px';

			this.dom.style.left = left + 'px';
		}
	}]);

	return gameObj;
}(); //end of class


exports.default = gameObj;

},{}],16:[function(require,module,exports){
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

//window.zoo = new Zoo('zoo object');
//window.cage = new Cage('cage object');


//start the game.....
window.startScreen.show();

//create a general object

//window.obj = new gameObj('donald trump');

//window.obj2 = new Screen('start Screen');

//window.ob3 = new HUD('game score');

},{"./Cage.js":2,"./Dynamic.js":3,"./GameScreen.js":4,"./HUD.js":5,"./LossScreen.js":6,"./Score.js":8,"./Screen.js":9,"./StartScreen.js":10,"./Static.js":11,"./WonScreen.js":13,"./Zoo.js":14,"./gameObj.js":15}]},{},[16])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0FuaW1hbC5qcyIsIm1vZHVsZXMvanMvQ2FnZS5qcyIsIm1vZHVsZXMvanMvRHluYW1pYy5qcyIsIm1vZHVsZXMvanMvR2FtZVNjcmVlbi5qcyIsIm1vZHVsZXMvanMvSFVELmpzIiwibW9kdWxlcy9qcy9Mb3NzU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9QbGF5ZXIuanMiLCJtb2R1bGVzL2pzL1Njb3JlLmpzIiwibW9kdWxlcy9qcy9TY3JlZW4uanMiLCJtb2R1bGVzL2pzL1N0YXJ0U2NyZWVuLmpzIiwibW9kdWxlcy9qcy9TdGF0aWMuanMiLCJtb2R1bGVzL2pzL1RydW1wLmpzIiwibW9kdWxlcy9qcy9Xb25TY3JlZW4uanMiLCJtb2R1bGVzL2pzL1pvby5qcyIsIm1vZHVsZXMvanMvZ2FtZU9iai5qcyIsIm1vZHVsZXMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0lBRXFCLE07OztBQUVwQixpQkFBYSxJQUFiLEVBQW1CLFFBQW5CLEVBQThCO0FBQUE7O0FBRTdCLFVBQVEsR0FBUixDQUFZLDJCQUEyQixJQUF2Qzs7QUFGNkIsOEdBSXRCLElBSnNCOztBQU03QixRQUFLLEdBQUwsR0FBVyxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBWDs7QUFFQSxRQUFLLElBQUw7QUFSNkI7QUFTN0I7Ozs7O2tCQVhtQixNOzs7Ozs7Ozs7QUNGckI7Ozs7Ozs7Ozs7OztJQUNxQixJOzs7QUFFcEIsZUFBYyxJQUFkLEVBQW9CLFFBQXBCLEVBQStCO0FBQUE7O0FBRTlCLFVBQVEsR0FBUixDQUFZLGtCQUFrQixJQUE5Qjs7QUFJQTs7QUFOOEIsMEdBSXZCLElBSnVCOztBQVE5QixRQUFLLEdBQUwsR0FBVyxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBWDs7QUFFQSxRQUFLLElBQUw7O0FBVjhCO0FBYTlCLEUsQ0FBQTs7OztxQkFHRDs7O2tCQWxCb0IsSTs7Ozs7Ozs7O0FDRHJCOzs7Ozs7Ozs7Ozs7SUFDcUIsTzs7O0FBRXBCLGtCQUFjLElBQWQsRUFBcUI7QUFBQTs7QUFFcEIsVUFBUSxHQUFSLENBQVksWUFBWjs7QUFGb0IsMkdBSWIsSUFKYTtBQUtwQixFLENBQUE7Ozs7c0JBR0Q7OztrQkFWb0IsTzs7Ozs7Ozs7Ozs7QUNEckI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQixVOzs7QUFFcEIscUJBQWMsSUFBZCxFQUFxQjtBQUFBOztBQUVwQixVQUFRLEdBQVIsQ0FBWSxlQUFaOztBQUZvQixzSEFHYixJQUhhOztBQUtwQixRQUFLLEdBQUwsR0FBVyxTQUFTLGNBQVQsQ0FBeUIsYUFBekIsQ0FBWDs7QUFFQSxRQUFLLGtCQUFMLENBQXlCLDZCQUF6Qjs7QUFQb0I7QUFTcEIsRSxDQUFDOzs7OzBCQUVPOztBQUVSLFdBQVEsR0FBUixDQUFhLHVCQUFiOztBQUVBLFFBQUssR0FBTCxHQUFXLGtCQUFTLFdBQVQsQ0FBWDtBQUNBLFFBQUssR0FBTCxDQUFTLEtBQVQ7O0FBRUEsUUFBSyxHQUFMLENBQVMsV0FBVCxDQUFzQixLQUFLLEdBQUwsQ0FBUyxHQUEvQjs7QUFFQSxRQUFLLEtBQUwsR0FBYSxvQkFBVywwQkFBWCxFQUF1QyxHQUF2QyxFQUE0QyxHQUE1QyxDQUFiOztBQUlBLFFBQUssTUFBTCxHQUFjLHFCQUFZLFFBQVosRUFBc0IsR0FBdEIsRUFBMkIsR0FBM0IsRUFBZ0MsS0FBSyxLQUFyQyxDQUFkO0FBR0E7Ozs7cUJBRUQ7OztrQkEvQm9CLFU7Ozs7Ozs7OztBQ0xyQjs7Ozs7Ozs7Ozs7O0lBQ3FCLEc7OztBQUVwQixjQUFhLElBQWIsRUFBb0I7QUFBQTs7QUFFbkIsVUFBUSxHQUFSLENBQVksUUFBWjs7QUFGbUIsbUdBSVosSUFKWTtBQU1uQixFLENBQUE7Ozs7c0JBSUQ7OztrQkFab0IsRzs7Ozs7Ozs7O0FDRHJCOzs7Ozs7Ozs7Ozs7SUFFcUIsVTs7O0FBRXBCLHFCQUFjLElBQWQsRUFBcUI7QUFBQTs7QUFFcEIsVUFBUSxHQUFSLENBQVksZUFBWjs7QUFGb0Isc0hBR2IsSUFIYTs7QUFLcEIsUUFBSyxHQUFMLEdBQVcsU0FBUyxjQUFULENBQXlCLGFBQXpCLENBQVg7QUFDQSxRQUFLLGtCQUFMLENBQXlCLDZCQUF6Qjs7QUFFQSxRQUFLLGNBQUw7O0FBRUEsUUFBSyxhQUFMOztBQVZvQjtBQVlwQixFLENBQUM7Ozs7cUJBR0Y7OztrQkFqQm9CLFU7Ozs7Ozs7Ozs7O0FDRnJCOzs7Ozs7Ozs7Ozs7SUFFcUIsTTs7O0FBRXBCLGlCQUFhLElBQWIsRUFBbUIsR0FBbkIsRUFBd0IsSUFBeEIsRUFBOEIsS0FBOUIsRUFBc0M7QUFBQTs7QUFFckMsVUFBUSxHQUFSLENBQVksMkJBQTJCLElBQXZDOztBQUZxQyw4R0FHOUIsSUFIOEI7O0FBS3JDLFFBQUssS0FBTCxHQUFhLEtBQWI7O0FBRUEsUUFBSyxHQUFMLEdBQVcsU0FBUyxjQUFULENBQXdCLFFBQXhCLENBQVg7O0FBRUEsUUFBSyxHQUFMLENBQVMsS0FBVCxDQUFlLEdBQWYsR0FBcUIsTUFBTSxJQUEzQjtBQUNBLFFBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSxJQUFmLEdBQXNCLE9BQU8sSUFBN0I7O0FBRUEsV0FBUyxnQkFBVCxDQUEwQixTQUExQixFQUFxQztBQUFBLFVBQVMsTUFBSyxJQUFMLENBQVUsS0FBVixDQUFUO0FBQUEsR0FBckMsRUFBZ0UsS0FBaEU7O0FBRUEsV0FBUyxnQkFBVCxDQUEwQixPQUExQixFQUFtQztBQUFBLFVBQVMsTUFBSyxNQUFMLENBQVksS0FBWixDQUFUO0FBQUEsR0FBbkMsRUFBZ0UsS0FBaEU7O0FBRUEsUUFBSyxhQUFMOztBQUVBLFFBQUssSUFBTDs7QUFsQnFDO0FBcUJyQzs7Ozt1QkFFSSxLLEVBQU87O0FBRVgsT0FBSSxXQUFXLFNBQVMsS0FBSyxHQUFMLENBQVMsS0FBVCxDQUFlLElBQXhCLENBQWY7QUFDQSxPQUFJLFdBQVcsU0FBUyxLQUFLLEdBQUwsQ0FBUyxLQUFULENBQWUsR0FBeEIsQ0FBZjs7QUFFQSxXQUFPLE1BQU0sT0FBYjs7QUFFQyxTQUFLLEVBQUw7QUFBUztBQUNSLGlCQUFZLENBQVo7QUFDQSxVQUFLLFdBQUwsQ0FBaUIsUUFBakIsRUFBMkIsUUFBM0I7QUFDQTs7QUFFRCxTQUFLLEVBQUw7QUFBUztBQUNSLGlCQUFZLENBQVo7QUFDQSxVQUFLLFdBQUwsQ0FBaUIsUUFBakIsRUFBMkIsUUFBM0I7QUFDQTs7QUFFRCxTQUFLLEVBQUw7QUFBUztBQUNQLFNBQUcsV0FBVyxHQUFkLEVBQW1CO0FBQ25CLGlCQUFZLENBQVo7QUFDQSxVQUFLLFdBQUwsQ0FBaUIsUUFBakIsRUFBMkIsUUFBM0I7QUFDQSxVQUFLLGFBQUwsQ0FBbUIsUUFBbkIsRUFBNkIsUUFBN0I7QUFDQTtBQWpCSDtBQW1CQTs7O3lCQUVNLEssRUFBTzs7QUFFYixPQUFJLFdBQVcsU0FBUyxLQUFLLEdBQUwsQ0FBUyxLQUFULENBQWUsSUFBeEIsQ0FBZjtBQUNBLE9BQUksV0FBVyxTQUFTLEtBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSxHQUF4QixDQUFmOztBQUVBLFdBQU8sTUFBTSxPQUFiO0FBQ0UsU0FBSyxFQUFMO0FBQVM7QUFDVCxpQkFBWSxDQUFaO0FBQ0EsVUFBSyxXQUFMLENBQWlCLFFBQWpCLEVBQTJCLFFBQTNCO0FBQ0E7O0FBSkY7QUFPQTs7O2dDQUVhLEcsRUFBSyxJLEVBQU07QUFDeEIsT0FBSSxnQkFBZ0IsU0FBUyxLQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsS0FBZixDQUFxQixJQUE5QixDQUFwQjtBQUNBLE9BQUksZ0JBQWdCLFNBQVMsS0FBSyxLQUFMLENBQVcsR0FBWCxDQUFlLEtBQWYsQ0FBcUIsR0FBOUIsQ0FBcEI7O0FBRUEsT0FBSSxnQkFBaUIsTUFBTSxFQUF2QixJQUE4QixnQkFBZ0IsSUFBOUMsSUFBc0QsZ0JBQWdCLE9BQU8sRUFBakYsRUFBcUY7O0FBRXBGLFVBQU0sWUFBTjtBQUNBO0FBRUQ7Ozs7OztrQkExRW1CLE07Ozs7Ozs7OztBQ0ZyQjs7Ozs7Ozs7Ozs7O0lBQ3FCLEs7OztBQUVwQixnQkFBYyxJQUFkLEVBQXFCO0FBQUE7O0FBRXBCLFVBQVEsR0FBUixDQUFZLFVBQVo7O0FBRm9CLDRHQUliLElBSmE7O0FBTXBCLFFBQUssR0FBTCxHQUFXLFNBQVMsY0FBVCxDQUF5QixZQUF6QixDQUFYOztBQU5vQjtBQVFwQixFLENBQUM7Ozs7a0JBR0Q7OztrQkFibUIsSzs7Ozs7Ozs7Ozs7QUNEckI7Ozs7Ozs7Ozs7OztJQUNxQixNOzs7QUFFcEIsaUJBQWMsSUFBZCxFQUFxQjtBQUFBOztBQUVwQixVQUFRLEdBQVIsQ0FBWSxXQUFaOztBQUZvQix5R0FJYixJQUphO0FBS3BCLEUsQ0FBQTs7OzttQ0FFZ0I7O0FBRWhCLFFBQUssV0FBTCxHQUFtQixLQUFLLEdBQUwsQ0FBUyxzQkFBVCxDQUFpQyxZQUFqQyxFQUFnRCxDQUFoRCxDQUFuQjtBQUlBOzs7a0NBRWU7O0FBRWYsUUFBSyxVQUFMLEdBQWtCLEtBQUssR0FBTCxDQUFTLHNCQUFULENBQWlDLFdBQWpDLEVBQStDLENBQS9DLENBQWxCO0FBRUE7Ozs7c0JBSUQ7OztrQkF6Qm9CLE07Ozs7Ozs7OztBQ0RyQjs7Ozs7Ozs7Ozs7O0lBRXFCLFc7OztBQUVwQixzQkFBYyxJQUFkLEVBQXFCO0FBQUE7O0FBQUEsd0hBRWIsSUFGYTs7QUFHcEIsVUFBUSxHQUFSLENBQVksZ0JBQVo7O0FBRUEsUUFBSyxHQUFMLEdBQVcsU0FBUyxjQUFULENBQXlCLGNBQXpCLENBQVg7O0FBRUE7O0FBRUEsUUFBSyxrQkFBTCxDQUF5Qiw4QkFBekI7O0FBRUE7O0FBRUEsUUFBSyxjQUFMOztBQUVBOztBQUVBLFFBQUssV0FBTCxDQUFpQixnQkFBakIsQ0FBa0MsT0FBbEMsRUFBMkMsWUFBTTtBQUNoRDs7QUFFQSxVQUFPLFdBQVAsQ0FBb0IsT0FBcEIsRUFBOEIsSUFBOUIsR0FIZ0QsQ0FHVjs7QUFFdEMsVUFBTyxXQUFQLENBQW9CLE1BQXBCLEVBQTZCLElBQTdCLEdBTGdELENBS1o7O0FBRXBDLFVBQU8sV0FBUCxDQUFvQixNQUFwQixFQUE2QixLQUE3QixHQVBnRCxDQU9WO0FBRXRDLEdBVEQ7O0FBV0EsUUFBSyxhQUFMOztBQTVCb0I7QUE4QnBCLEUsQ0FBQzs7OztxQkFLRjs7O2tCQXJDb0IsVzs7Ozs7Ozs7O0FDRnJCOzs7Ozs7Ozs7Ozs7SUFDcUIsTTs7O0FBRXBCLGlCQUFjLElBQWQsRUFBcUI7QUFBQTs7QUFFcEIsVUFBUSxHQUFSLENBQVksV0FBWjs7QUFGb0IseUdBSWIsSUFKYTtBQUtwQixFLENBQUE7Ozs7c0JBR0Q7OztrQkFWb0IsTTs7Ozs7Ozs7Ozs7QUNEckI7Ozs7Ozs7Ozs7OztJQUVxQixLOzs7QUFFcEIsZ0JBQWEsSUFBYixFQUFtQixHQUFuQixFQUF3QixJQUF4QixFQUErQjtBQUFBOztBQUU5QixVQUFRLEdBQVIsQ0FBWSwwQkFBMEIsSUFBdEM7O0FBRjhCLDRHQUl2QixJQUp1Qjs7QUFNOUIsUUFBSyxHQUFMLEdBQVcsU0FBUyxjQUFULENBQXdCLE9BQXhCLENBQVg7O0FBRUEsUUFBSyxHQUFMLENBQVMsS0FBVCxDQUFlLEdBQWYsR0FBcUIsTUFBTSxJQUEzQjtBQUNBLFFBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSxJQUFmLEdBQXNCLE9BQU8sSUFBN0I7O0FBRUEsUUFBSyxZQUFMOztBQUVBLFFBQUssSUFBTDtBQWI4QjtBQWM5Qjs7OzsrQkFFYSxNLEVBQVE7O0FBRXJCLFlBQVMsSUFBVDs7QUFFQSxPQUFHLFVBQVUsSUFBYixFQUFrQjs7QUFFakIsWUFBUSxHQUFSLENBQVksY0FBWjtBQUVBO0FBTUQ7OztrQ0FFZ0I7O0FBRWhCLFdBQVEsR0FBUixDQUFZLG1CQUFaO0FBRUE7Ozs7OztrQkF0Q21CLEs7Ozs7Ozs7OztBQ0ZyQjs7Ozs7Ozs7Ozs7O0lBRXFCLFM7OztBQUVwQixvQkFBYyxJQUFkLEVBQXFCO0FBQUE7O0FBRXBCLFVBQVEsR0FBUixDQUFZLGNBQVo7O0FBRm9CLG9IQUdiLElBSGE7O0FBS3BCLFFBQUssR0FBTCxHQUFXLFNBQVMsY0FBVCxDQUF5QixZQUF6QixDQUFYOztBQUVBLFFBQUssa0JBQUwsQ0FBeUIsNEJBQXpCOztBQUVBLFFBQUssY0FBTDs7QUFFQSxRQUFLLGFBQUw7O0FBWG9CO0FBYXBCLEUsQ0FBQzs7OztxQkFHRjs7O2tCQWxCb0IsUzs7Ozs7Ozs7Ozs7QUNGckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUIsRzs7O0FBRXBCLGNBQWMsSUFBZCxFQUFxQjtBQUFBOztBQUVwQixVQUFRLEdBQVIsQ0FBWSxRQUFaOztBQUlBO0FBTm9CLHdHQUliLElBSmE7O0FBT3BCLFFBQUssR0FBTCxHQUFXLFNBQVMsYUFBVCxDQUF3QixLQUF4QixDQUFYOztBQVBvQjtBQVVwQixFLENBQUE7Ozs7MEJBRU87O0FBRVAsV0FBUSxHQUFSLENBQVksY0FBWjs7QUFFQSxRQUFLLEtBQUwsR0FBYSxFQUFiOztBQUVBLFFBQUssS0FBTCxDQUFXLElBQVgsQ0FBaUIsbUJBQVUsU0FBVixFQUFvQixPQUFwQixDQUFqQjtBQUNBLFFBQUssS0FBTCxDQUFXLElBQVgsQ0FBaUIsbUJBQVUsU0FBVixFQUFvQixPQUFwQixDQUFqQjtBQUNBLFFBQUssS0FBTCxDQUFXLElBQVgsQ0FBaUIsbUJBQVUsU0FBVixFQUFxQixPQUFyQixDQUFqQjtBQUNBLFFBQUssS0FBTCxDQUFXLElBQVgsQ0FBaUIsbUJBQVUsU0FBVixFQUFxQixPQUFyQixDQUFqQjs7QUFJQSxRQUFLLE9BQUwsR0FBZSxFQUFmOztBQUVBLFFBQUssT0FBTCxDQUFhLElBQWIsQ0FBbUIscUJBQVksV0FBWixFQUF5QixNQUF6QixDQUFuQjtBQUNBLFFBQUssT0FBTCxDQUFhLElBQWIsQ0FBbUIscUJBQVksY0FBWixFQUE0QixPQUE1QixDQUFuQjtBQUNBLFFBQUssT0FBTCxDQUFhLElBQWIsQ0FBbUIscUJBQVksY0FBWixFQUE0QixNQUE1QixDQUFuQjtBQUNBLFFBQUssT0FBTCxDQUFhLElBQWIsQ0FBbUIscUJBQVksbUJBQVosRUFBaUMsU0FBakMsQ0FBbkI7QUFHQTs7OztxQkFHRDs7O2tCQXRDb0IsRzs7Ozs7Ozs7Ozs7OztJQ0hDLE87QUFFckIsa0JBQWEsSUFBYixFQUFvQjtBQUFBOztBQUVuQjs7QUFFQSxVQUFRLEdBQVIsQ0FBWSxZQUFaOztBQUVBLE9BQUssSUFBTCxHQUFZLElBQVo7QUFDQSxPQUFLLEVBQUwsR0FBVSxLQUFLLEtBQUwsRUFBVjtBQUlBLEUsQ0FBQTs7QUFFRDs7Ozs7OzswQkFLUTs7QUFFUCxVQUFPLEtBQUssRUFBWjtBQUNBOztBQUVEOzs7Ozs7OzRCQUtVOztBQUVULFVBQU8sS0FBSyxJQUFaO0FBRUE7OzswQkFFUyxPLEVBQVU7O0FBRW5CLFFBQUssSUFBTCxHQUFZLE9BQVo7QUFFQTs7QUFFRDs7Ozs7OzswQkFRVztBQUNKLE9BQUksSUFBSSxJQUFJLElBQUosR0FBVyxPQUFYLEVBQVI7QUFDQSxPQUFJLE9BQU8sV0FBUCxJQUFzQixPQUFPLE9BQU8sV0FBUCxDQUFtQixHQUExQixLQUFrQyxVQUE1RCxFQUF3RTtBQUNwRSxTQUFLLFlBQVksR0FBWixFQUFMLENBRG9FLENBQzVDO0FBQzNCO0FBQ0QsT0FBSSxPQUFPLHVDQUF1QyxPQUF2QyxDQUErQyxPQUEvQyxFQUF3RCxVQUFVLENBQVYsRUFBYTtBQUM1RSxRQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTCxLQUFjLEVBQW5CLElBQXVCLEVBQXZCLEdBQTRCLENBQXBDO0FBQ0EsUUFBSSxLQUFLLEtBQUwsQ0FBVyxJQUFFLEVBQWIsQ0FBSjtBQUNBLFdBQU8sQ0FBQyxLQUFHLEdBQUgsR0FBUyxDQUFULEdBQWMsSUFBRSxHQUFGLEdBQU0sR0FBckIsRUFBMkIsUUFBM0IsQ0FBb0MsRUFBcEMsQ0FBUDtBQUNILElBSlUsQ0FBWDtBQUtBLFVBQU8sSUFBUDtBQUNILEcsQ0FBQTs7Ozt5QkFFTzs7QUFFVixRQUFLLEdBQUwsQ0FBUyxLQUFULENBQWUsT0FBZixHQUF5QixPQUF6QjtBQUVBOzs7eUJBRU87O0FBRVAsUUFBSyxHQUFMLENBQVMsS0FBVCxDQUFlLE9BQWYsR0FBeUIsTUFBekI7QUFFQTs7O3FDQUVtQixPLEVBQVU7O0FBRTdCLFFBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSxlQUFmLEdBQWlDLFVBQVUsT0FBVixHQUFvQixJQUFyRDtBQUNBOzs7cUNBRW1CLE8sRUFBVTs7QUFFN0IsT0FBSSxNQUFNLElBQUksS0FBSixFQUFWOztBQUVBLE9BQUksR0FBSixHQUFVLE9BQVY7O0FBRUEsUUFBSyxHQUFMLENBQVMsV0FBVCxDQUFzQixHQUF0QjtBQUNBOztBQUVEOzs7OzBCQUNTLEssRUFBTyxNLEVBQVM7O0FBRXhCLFFBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSxLQUFmLEdBQXVCLFFBQVEsSUFBL0I7O0FBRUEsUUFBSyxHQUFMLENBQVMsS0FBVCxDQUFlLE1BQWYsR0FBd0IsU0FBUyxJQUFqQztBQUVBOztBQUVEOzs7OzhCQUNhLEcsRUFBSyxJLEVBQU07O0FBRXZCLFFBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSxHQUFmLEdBQXFCLE1BQU0sSUFBM0I7O0FBRUEsUUFBSyxHQUFMLENBQVMsS0FBVCxDQUFlLElBQWYsR0FBc0IsT0FBTyxJQUE3QjtBQUdBOzs7O0tBSUE7OztrQkE5R29CLE87Ozs7O0FDQ3RCOzs7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7Ozs7O0FBTkE7OztBQUpBO0FBVkE7QUFzQkEsUUFBUSxHQUFSLENBQVksZUFBWjs7QUFFQTs7O0FBTEE7OztBQWhCQTtBQXNCQSxPQUFPLFdBQVAsR0FBcUIsRUFBckI7O0FBRUEsT0FBTyxXQUFQLEdBQXFCLDBCQUFnQixlQUFoQixDQUFyQjtBQUNBLE9BQU8sV0FBUCxDQUFvQixPQUFwQixJQUFnQyxPQUFPLFdBQXZDOztBQUVBLE9BQU8sVUFBUCxHQUFvQix5QkFBZSxjQUFmLENBQXBCO0FBQ0EsT0FBTyxXQUFQLENBQW9CLE1BQXBCLElBQStCLE9BQU8sVUFBdEM7O0FBRUEsT0FBTyxTQUFQLEdBQW1CLHdCQUFjLGlCQUFkLENBQW5CO0FBQ0EsT0FBTyxXQUFQLENBQW9CLEtBQXBCLElBQThCLE9BQU8sU0FBckM7O0FBRUEsT0FBTyxVQUFQLEdBQW9CLHlCQUFlLGtCQUFmLENBQXBCO0FBQ0EsT0FBTyxXQUFQLENBQW9CLE1BQXBCLElBQStCLE9BQU8sVUFBdEM7O0FBRUEsT0FBTyxLQUFQLEdBQWUsb0JBQVUsbUJBQVYsQ0FBZjs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBLE9BQU8sV0FBUCxDQUFtQixJQUFuQjs7QUFPQTs7QUFFQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgRHluYW1pYyBmcm9tICcuL0R5bmFtaWMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYWwgZXh0ZW5kcyBEeW5hbWljIHtcblx0XG5cdGNvbnN0cnVjdG9yKCBuYW1lLCBzY3JlZW5JZCApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBBbmltYWwgT2JqZWN0IG5hbWU6JyArIG5hbWUpO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2NyZWVuSWQpO1xuXG5cdFx0dGhpcy5zaG93KCk7XG5cdH1cbn0iLCJpbXBvcnQgU3RhdGljIGZyb20gJy4vU3RhdGljLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhZ2UgZXh0ZW5kcyBTdGF0aWMge1xuXHRcblx0Y29uc3RydWN0b3IgKCBuYW1lLCBzY3JlZW5JZCApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBDYWdlIG5hbWU6JyArIG5hbWUgKTtcblxuXHRcdHN1cGVyKCBuYW1lICk7XG5cblx0XHQvLyBncmFiIGEgY2FnZSBmcm9tIHRoZSBkb21cblx0XHRcblx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNjcmVlbklkKTtcblxuXHRcdHRoaXMuc2hvdygpO1xuXG5cdFx0XG5cdH0vL2VuZCBvZiBjb25zdHJ1Y3RvclxuXG5cbn0vL2VuZCBvZiBjbGFzcyIsImltcG9ydCBnYW1lT2JqIGZyb20gJy4vZ2FtZU9iai5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljIGV4dGVuZHMgZ2FtZU9iaiB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gZHluYW1pYycpO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblx0fS8vZW5kIG9mIGNvbnN0cnVjdG9yXG5cblxufS8vZW5kIG9mIGNsYXNzIiwiaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5pbXBvcnQgWm9vIGZyb20gJy4vWm9vLmpzJztcbmltcG9ydCBUcnVtcCBmcm9tICcuL1RydW1wLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gR2FtZVNjcmVlbicpO1xuXHRcdHN1cGVyKCBuYW1lICk7XG5cblx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnZ2FtZS1zY3JlZW4nICk7XG5cblx0XHR0aGlzLnNldEJhY2tncm91bmRJbWFnZSggJ2ltZy9zY3JlZW5zL2dhbWUtc2NyZWVuLnBuZycgKTtcblxuXHR9IC8vIGVuZCBvZiBjb25zdHJ1Y3RvclxuXHRcblx0YnVpbGQgKCkge1xuXG5cdFx0Y29uc29sZS5sb2coICdidWlsZGluZyB0aGUgZ2FtZS4uLi4nICk7IFxuXG5cdFx0dGhpcy56b28gPSBuZXcgWm9vKCAnRnVua3kgWm9vJyApO1xuXHRcdHRoaXMuem9vLmJ1aWxkKCk7XG5cblx0XHR0aGlzLmRvbS5hcHBlbmRDaGlsZCggdGhpcy56b28uZG9tICk7XG5cblx0XHR0aGlzLnRydW1wID0gbmV3IFRydW1wKCAnRG9uYWxkIFByZXNpZGVudGlhIFRydW1wJywgNDQwLCAyNDUgKTtcblxuXHRcblxuXHRcdHRoaXMucGxheWVyID0gbmV3IFBsYXllciggJ215c2VsZicsIDUwMCwgMjQ1LCB0aGlzLnRydW1wKTtcblxuXG5cdH1cblxufS8vIGVuZCBvZiBjbGFzcyIsImltcG9ydCBnYW1lT2JqIGZyb20gJy4vZ2FtZU9iai5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIVUQgZXh0ZW5kcyBnYW1lT2Jqe1xuXHRcblx0Y29uc3RydWN0b3IoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gSFVEJyk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXG5cdH0vL2VuZCBvZiBjb25zdHJ1Y3RvclxuXG5cdFxuXG59Ly9lbmQgb2YgY2xhc3MiLCJpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9zc1NjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIExvc3NTY3JlZW4nKTtcblx0XHRzdXBlciggbmFtZSApO1xuXG5cdFx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2xvc3Mtc2NyZWVuJyApO1xuXHRcdHRoaXMuc2V0QmFja2dyb3VuZEltYWdlKCAnaW1nL3NjcmVlbnMvbG9zcy1zY3JlZW4ucG5nJyApO1xuXG5cdFx0dGhpcy5nZXRTdGFydEJ1dHRvbigpO1xuXG5cdFx0dGhpcy5nZXRFeGl0QnV0dG9uKCk7XG5cblx0fSAvLyBlbmQgb2YgY29uc3RydWN0b3Jcblx0XG5cbn0vLyBlbmQgb2YgY2xhc3MiLCJpbXBvcnQgRHluYW1pYyBmcm9tICcuL0R5bmFtaWMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBEeW5hbWljIHtcblx0XG5cdGNvbnN0cnVjdG9yKCBuYW1lLCB0b3AsIGxlZnQsIHRydW1wICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIFBsYXllciBPYmplY3QgbmFtZTonICsgbmFtZSk7XG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHRcdHRoaXMudHJ1bXAgPSB0cnVtcDtcblxuXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcicpO1xuXG5cdFx0dGhpcy5kb20uc3R5bGUudG9wID0gdG9wICsgJ3B4Jztcblx0XHR0aGlzLmRvbS5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XG5cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4gdGhpcy5zbGV3KGV2ZW50KSwgZmFsc2UpO1xuXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB0aGlzLnVua2ljayhldmVudCksIGZhbHNlKTtcblxuXHRcdHRoaXMuY2hlY2tGb3JUcnVtcCgpO1xuXG5cdFx0dGhpcy5zaG93KCk7XG5cblxuXHR9XG5cblx0c2xldyhldmVudCkge1xuXG5cdFx0bGV0IGN1cnJlbnRYID0gcGFyc2VJbnQodGhpcy5kb20uc3R5bGUubGVmdCk7XG5cdFx0bGV0IGN1cnJlbnRZID0gcGFyc2VJbnQodGhpcy5kb20uc3R5bGUudG9wKTtcblxuXHRcdHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG5cblx0XHRcdGNhc2UgMzc6IC8vbGVmdCBhcnJvd1xuXHRcdFx0XHRjdXJyZW50WCAtPSA0O1xuXHRcdFx0XHR0aGlzLnNldFBvc2l0aW9uKGN1cnJlbnRZLCBjdXJyZW50WCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM5OiAvL3JpZ2h0IGFycm93XG5cdFx0XHRcdGN1cnJlbnRYICs9IDQ7XG5cdFx0XHRcdHRoaXMuc2V0UG9zaXRpb24oY3VycmVudFksIGN1cnJlbnRYKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzI6IC8vc3BhY2UgYmFyXG5cdFx0XHRcdFx0aWYoY3VycmVudFkgPCA0OTYpIHJldHVybjtcblx0XHRcdFx0XHRjdXJyZW50WSAtPSA0O1xuXHRcdFx0XHRcdHRoaXMuc2V0UG9zaXRpb24oY3VycmVudFksIGN1cnJlbnRYKTtcblx0XHRcdFx0XHR0aGlzLmNoZWNrRm9yVHJ1bXAoY3VycmVudFksIGN1cnJlbnRYKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHR1bmtpY2soZXZlbnQpIHtcblxuXHRcdGxldCBjdXJyZW50WCA9IHBhcnNlSW50KHRoaXMuZG9tLnN0eWxlLmxlZnQpO1xuXHRcdGxldCBjdXJyZW50WSA9IHBhcnNlSW50KHRoaXMuZG9tLnN0eWxlLnRvcCk7XG5cblx0XHRzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xuXHRcdFx0XHRjYXNlIDMyOiAvL3NwYWNlIGJhclxuXHRcdFx0XHRjdXJyZW50WSArPSA0O1xuXHRcdFx0XHR0aGlzLnNldFBvc2l0aW9uKGN1cnJlbnRZLCBjdXJyZW50WCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0fVxuXHR9XG5cblx0Y2hlY2tGb3JUcnVtcCh0b3AsIGxlZnQpIHtcblx0XHRsZXQgdHJ1bXBDdXJyZW50WCA9IHBhcnNlSW50KHRoaXMudHJ1bXAuZG9tLnN0eWxlLmxlZnQpO1xuXHRcdGxldCB0cnVtcEN1cnJlbnRZID0gcGFyc2VJbnQodGhpcy50cnVtcC5kb20uc3R5bGUudG9wKTtcblxuXHRcdGlmICh0cnVtcEN1cnJlbnRZID4gKDU5MCArIDUwKSAmJiB0cnVtcEN1cnJlbnRYID4gbGVmdCAmJiB0cnVtcEN1cnJlbnRYIDwgbGVmdCArIDUwKSB7XG5cblx0XHRcdHRydW1wLmluaXRQaW5nUG9uZygpO1xuXHRcdH1cblxuXHR9XG59IiwiaW1wb3J0IEhVRCBmcm9tICcuL0hVRC5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSBleHRlbmRzIEhVRCB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIHNjb3JlJyk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXG5cdFx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2dhbWUtc2NvcmUnICk7XG5cblx0fSAvLyBlbmQgb2YgY29uc3RydWN0b3Jcblx0XG5cbn0gLy8gZW5kIG9mIGNsYXNzIiwiaW1wb3J0IGdhbWVPYmogZnJvbSAnLi9nYW1lT2JqLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmVlbiBleHRlbmRzIGdhbWVPYmoge1xuXHRcblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIHNjcmVlbicpO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblx0fS8vZW5kIG9mIGNvbnN0cnVjdG9yXG5cblx0Z2V0U3RhcnRCdXR0b24oKSB7XG5cblx0XHR0aGlzLnN0YXJ0QnV0dG9uID0gdGhpcy5kb20uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggJ2dhbWUtc3RhcnQnIClbMF07XG5cblx0XHRcblxuXHR9XG5cblx0Z2V0RXhpdEJ1dHRvbigpIHtcblxuXHRcdHRoaXMuZXhpdEJ1dHRvbiA9IHRoaXMuZG9tLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoICdnYW1lLWV4aXQnIClbMF07XG5cblx0fVxuXG5cdFxuXG59Ly9lbmQgb2YgY2xhc3MiLCJpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xuXG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdHN1cGVyKCBuYW1lICk7XG5cdFx0Y29uc29sZS5sb2coJ2luIFN0YXJ0U2NyZWVuJyk7XG5cblx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc3RhcnQtc2NyZWVuJyApO1xuXG5cdFx0Ly9zZXQgdGhlIGJhY2tncm91bmQgaW1hZ2VcblxuXHRcdHRoaXMuc2V0QmFja2dyb3VuZEltYWdlKCAnaW1nL3NjcmVlbnMvc3RhcnQtc2NyZWVuLnBuZycgKTtcblxuXHRcdC8vc2VhcmNoIGZvciBhICdzdGFydCcgYnV0dG9uIGluIHRoZSB0aGlzLmRvbSBIVE1MIG1hcmt1cC4gTm90ZTogd2lsbCBmYWlsIGlmIG5vIGJ1dHRvbiBwcmVzZW50IVxuXG5cdFx0dGhpcy5nZXRTdGFydEJ1dHRvbigpO1xuXG5cdFx0Ly93aXRlIHVwIHRoZSBTdGFydCBidXR0b24gdG8gbG9hZCB0aGUgR2FtZVNjcmVlblxuXG5cdFx0dGhpcy5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdC8vYWxlcnQoJ0kgYW0gaW4gc2NyZWVuOicgKyB0aGlzLm5hbWUgKTtcblxuXHRcdFx0d2luZG93LmdhbWVTY3JlZW5zWyAnc3RhcnQnIF0uaGlkZSgpOyAvL2hpZGUgbXlzZWxmXG5cblx0XHRcdHdpbmRvdy5nYW1lU2NyZWVuc1sgJ2dhbWUnIF0uc2hvdygpOy8vc2hvdyBzZWxmXG5cblx0XHRcdHdpbmRvdy5nYW1lU2NyZWVuc1sgJ2dhbWUnIF0uYnVpbGQoKTsgLy9yZWJ1aWxkIHRoZSBnYW1lIHdpdGggYWxsIGl0cyBvYmVjdHNcblxuXHRcdH0pO1xuXG5cdFx0dGhpcy5nZXRFeGl0QnV0dG9uKCk7XG5cblx0fSAvLyBlbmQgb2YgY29uc3RydWN0b3JcblxuXG5cdFxuXG59Ly8gZW5kIG9mIGNsYXNzIiwiaW1wb3J0IGdhbWVPYmogZnJvbSAnLi9nYW1lT2JqLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpYyBleHRlbmRzIGdhbWVPYmoge1xuXHRcblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIHN0YXRpYycpO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblx0fS8vZW5kIG9mIGNvbnN0cnVjdG9yXG5cblxufS8vZW5kIG9mIGNsYXNzIiwiaW1wb3J0IER5bmFtaWMgZnJvbSAnLi9EeW5hbWljLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJ1bXAgZXh0ZW5kcyBEeW5hbWljIHtcblx0XG5cdGNvbnN0cnVjdG9yKCBuYW1lLCB0b3AsIGxlZnQgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gVHJ1bXAgT2JqZWN0IG5hbWU6JyArIG5hbWUpO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RydW1wJyk7XG5cblx0XHR0aGlzLmRvbS5zdHlsZS50b3AgPSB0b3AgKyAncHgnO1xuXHRcdHRoaXMuZG9tLnN0eWxlLmxlZnQgPSBsZWZ0ICsgJ3B4JztcblxuXHRcdHRoaXMuaW5pdFBpbmdQb25nKCk7XG5cblx0XHR0aGlzLnNob3coKTtcblx0fVxuXG5cdGluaXRQaW5nUG9uZyAoaXNJbml0KSB7XG5cblx0XHRpc0luaXQgPSB0cnVlO1xuXG5cdFx0aWYoaXNJbml0ID09IHRydWUpe1xuXG5cdFx0XHRjb25zb2xlLmxvZyhcIiBpbiBwaW5ncG9uZ1wiKTtcblxuXHRcdH1cblx0XHRcblxuXG5cblxuXHR9XG5cblx0c3RhcnRQaW5nUG9uZyAoKSB7XG5cblx0XHRjb25zb2xlLmxvZyhcIiBpbiBzdGFydFBpbmdQb25nXCIpO1xuXG5cdH1cbn0iLCJpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29uU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gV29uU2NyZWVuJyk7XG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd3b24tc2NyZWVuJyApO1xuXG5cdFx0dGhpcy5zZXRCYWNrZ3JvdW5kSW1hZ2UoICdpbWcvc2NyZWVucy93b24tc2NyZWVuLnBuZycgKTtcblxuXHRcdHRoaXMuZ2V0U3RhcnRCdXR0b24oKTtcblxuXHRcdHRoaXMuZ2V0RXhpdEJ1dHRvbigpO1xuXG5cdH0gLy8gZW5kIG9mIGNvbnN0cnVjdG9yXG5cdFxuXG59Ly8gZW5kIG9mIGNsYXNzIiwiaW1wb3J0IFN0YXRpYyBmcm9tICcuL1N0YXRpYy5qcyc7XG5pbXBvcnQgQ2FnZSBmcm9tICcuL0NhZ2UuanMnO1xuaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab28gZXh0ZW5kcyBTdGF0aWMge1xuXHRcblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIFpvbycpO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHRcdC8vZ3JhYiBhIHpvb1xuXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcblxuXG5cdH0vL2VuZCBvZiBjb25zdHJ1Y3RvclxuXG5cdGJ1aWxkKCkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIHpvbyBidWlsZCcpO1xuXG5cdFx0dGhpcy5jYWdlcyA9IFtdO1xuXG5cdFx0dGhpcy5jYWdlcy5wdXNoKCBuZXcgQ2FnZSggJ0NhZ2UgIzEnLCdjYWdlMScgKSApO1xuXHRcdHRoaXMuY2FnZXMucHVzaCggbmV3IENhZ2UoICdDYWdlICMyJywnY2FnZTInICkgKTtcblx0XHR0aGlzLmNhZ2VzLnB1c2goIG5ldyBDYWdlKCAnQ2FnZSAjMycsICdjYWdlMycgKSApO1xuXHRcdHRoaXMuY2FnZXMucHVzaCggbmV3IENhZ2UoICdDYWdlICM0JywgJ2NhZ2U0JyApICk7XG5cblx0XHRcblxuXHRcdHRoaXMuYW5pbWFscyA9IFtdO1xuXG5cdFx0dGhpcy5hbmltYWxzLnB1c2goIG5ldyBBbmltYWwoICdBbmd5IExpb24nLCAnbGlvbicgKSApO1xuXHRcdHRoaXMuYW5pbWFscy5wdXNoKCBuZXcgQW5pbWFsKCAnUmFnaW5nIFRpZ2VyJywgJ3RpZ2VyJyApICk7XG5cdFx0dGhpcy5hbmltYWxzLnB1c2goIG5ldyBBbmltYWwoICdNYXVsaW5nIEJlYXInLCAnYmVhcicgKSApO1xuXHRcdHRoaXMuYW5pbWFscy5wdXNoKCBuZXcgQW5pbWFsKCAnUmFtcGFnaW5nIEdvcmlsbGEnLCAnZ29yaWxsYScgKSApO1xuXG5cblx0fVxuXG5cbn0vL2VuZCBvZiBjbGFzcyIsIiBleHBvcnQgZGVmYXVsdCBjbGFzcyBnYW1lT2JqIHtcblxuXHRjb25zdHJ1Y3RvciggbmFtZSApIHtcblxuXHRcdC8vaW5oZXJpdHMgZnJvbSBnZW5lcmljIEphdmFzY3JpcHQgT2JqZWN0O1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIGdhbWVPYmonKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5pZCA9IHRoaXMuc2V0SWQoKTtcblxuXHRcdFxuXG5cdH0vL2VuZCBvZiBjb25zdHJ1Y29yXG5cblx0LyoqXG5cdCogZ2V0IHRoZSBpZCBhc3NpZ25lZCB0byB0aGlzIG9iamVjdC5cblx0KiBAcmV0dXJucyBbc3RyaW5nXSB0aGUgbmFtZVxuXHQqL1xuXG5cdGdldElkKCkge1xuXG5cdFx0cmV0dXJuIHRoaXMuaWQ7XG5cdH1cblxuXHQvKiogXG5cdCogZ2V0IHRoZSBuYW1lIGFzc2lnbmVkIHRvIHRoaXMgb2JqZWN0XG5cdCogQHJldHVybnMgbmFtZVxuXHQqL1xuXG5cdGdldE5hbWUoKSB7XG5cblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xuXG5cdH1cblxuXHRzZXROYW1lICggbmV3TmFtZSApIHtcblxuXHRcdHRoaXMubmFtZSA9IG5ld05hbWU7XG5cblx0fVxuXG5cdC8qKiBcblxuXHQqZ2VuZXJhdGVzIGEgdW5pcXVlIGlkIGZvciBldmVyeSBnYW1lIG9ia2VjdFxuXHQqIEBsaW5rIHN0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDUwMzQvY3JlYWUtZ3VpZC11dWlkLWluLWphdmFzY3JpcHRcblxuXHQqL1xuXG5cblx0ICBzZXRJZCAoKSB7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UgJiYgdHlwZW9mIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgZCArPSBwZXJmb3JtYW5jZS5ub3coKTsgLy91c2UgaGlnaC1wcmVjaXNpb24gdGltZXIgaWYgYXZhaWxhYmxlXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICB2YXIgciA9IChkICsgTWF0aC5yYW5kb20oKSoxNiklMTYgfCAwO1xuICAgICAgICAgICAgZCA9IE1hdGguZmxvb3IoZC8xNik7XG4gICAgICAgICAgICByZXR1cm4gKGM9PSd4JyA/IHIgOiAociYweDN8MHg4KSkudG9TdHJpbmcoMTYpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHV1aWQ7XG4gICAgfS8vZW5kIG9mIHNldCBpZFxuXG4gICAgc2hvdyAoKSB7XG5cblx0XHR0aGlzLmRvbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuXHR9XG5cblx0aGlkZSAoKSB7XG5cblx0XHR0aGlzLmRvbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG5cdH1cblxuXHRzZXRCYWNrZ3JvdW5kSW1hZ2UoIGltZ1BhdGggKSB7XG5cblx0XHR0aGlzLmRvbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnXCIgKyBpbWdQYXRoICsgXCInKVwiO1xuXHR9XG5cblx0c2V0Rm9yZWdyb3VuZGltYWdlKCBpbWdQYXRoICkge1xuXG5cdFx0bGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuXG5cdFx0aW1nLnNyYyA9IGltZ1BhdGg7XG5cblx0XHR0aGlzLmRvbS5hcHBlbmRDaGlsZCggaW1nICk7XG5cdH1cblxuXHQvL3NldCB0aGUgc2l6ZSBvZiBhbiBvYmplY3QsIGluIHBleGlscy5cblx0c2V0U2l6ZSggd2lkdGgsIGhlaWdodCApIHtcblxuXHRcdHRoaXMuZG9tLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuXG5cdFx0dGhpcy5kb20uc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcblxuXHR9XG5cblx0Ly9zZXQgdGhlIHBvc2l0aW9uIG9mIGFuIG9qZWN0LCByZWxhdGl2ZSB0byB0aGUgZW5jbG9zaW5nIHNjcmVlbiBvYmplY3QuXG5cdHNldFBvc2l0aW9uKCB0b3AsIGxlZnQgKXtcblxuXHRcdHRoaXMuZG9tLnN0eWxlLnRvcCA9IHRvcCArICdweCc7XG5cblx0XHR0aGlzLmRvbS5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XG5cblxuXHR9XG5cblxuXG59IC8vZW5kIG9mIGNsYXNzIiwiLy9tYXN0ZSBvYmplY3QuXG5pbXBvcnQgZ2FtZU9iaiBmcm9tICcuL2dhbWVPYmouanMnO1xuXG4vL3NjcmVlbiBvYmplY3RzXG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcbmltcG9ydCBTdGFydFNjcmVlbiBmcm9tICcuL1N0YXJ0U2NyZWVuLmpzJztcbmltcG9ydCBHYW1lU2NyZWVuIGZyb20gJy4vR2FtZVNjcmVlbi5qcyc7XG5pbXBvcnQgV29uU2NyZWVuIGZyb20gJy4vV29uU2NyZWVuLmpzJztcbmltcG9ydCBMb3NzU2NyZWVuIGZyb20gJy4vTG9zc1NjcmVlbi5qcyc7XG5cbi8vaHVkIG9iamVjdFxuaW1wb3J0IEhVRCBmcm9tICcuL0hVRC5qcyc7XG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZS5qcyc7XG5cbi8vc3RhdGljIG9iamVjdFxuaW1wb3J0IFN0YXRpYyBmcm9tICcuL1N0YXRpYy5qcyc7XG5pbXBvcnQgWm9vIGZyb20gJy4vWm9vLmpzJztcbmltcG9ydCBDYWdlIGZyb20gJy4vQ2FnZS5qcyc7XG5cbi8vZHluYW1pYyBvYmplY3RcbmltcG9ydCBEeW5hbWljIGZyb20gJy4vRHluYW1pYy5qcyc7XG5cbmNvbnNvbGUubG9nKCdsb2FkaW5nIGdhbWUuJyk7XG5cbi8vZ2xvYmFsIHN0b3JhZ2Ugb2YgYWxsIHNjcmVlYnMgY3JlYXRlZFxud2luZG93LmdhbWVTY3JlZW5zID0gW107XG5cbndpbmRvdy5zdGFydFNjcmVlbiA9IG5ldyBTdGFydFNjcmVlbignWm9vS2lsbCBzdGFydCcpO1xud2luZG93LmdhbWVTY3JlZW5zWyAnc3RhcnQnIF0gPSB3aW5kb3cuc3RhcnRTY3JlZW47XG5cbndpbmRvdy5nYW1lU2NyZWVuID0gbmV3IEdhbWVTY3JlZW4oJ3pvb2tpbGwgR2FtZScpO1xud2luZG93LmdhbWVTY3JlZW5zWyAnZ2FtZScgXSA9IHdpbmRvdy5nYW1lU2NyZWVuO1xuXG53aW5kb3cud29uU2NyZWVuID0gbmV3IFdvblNjcmVlbignem9va2lsbCBZb3Ugd29uJyk7XG53aW5kb3cuZ2FtZVNjcmVlbnNbICd3b24nIF0gPSB3aW5kb3cud29uU2NyZWVuO1xuXG53aW5kb3cubG9zc1NjcmVlbiA9IG5ldyBMb3NzU2NyZWVuKCd6b29raWxsIFlvdSBsb3NzJyk7XG53aW5kb3cuZ2FtZVNjcmVlbnNbICdsb3NzJyBdID0gd2luZG93Lmxvc3NTY3JlZW47XG5cbndpbmRvdy5zY29yZSA9IG5ldyBTY29yZSgnZ2FtZSBzY29yZSBvYmplY3QnKTtcblxuXG4vL3dpbmRvdy56b28gPSBuZXcgWm9vKCd6b28gb2JqZWN0Jyk7XG4vL3dpbmRvdy5jYWdlID0gbmV3IENhZ2UoJ2NhZ2Ugb2JqZWN0Jyk7XG5cblxuLy9zdGFydCB0aGUgZ2FtZS4uLi4uXG53aW5kb3cuc3RhcnRTY3JlZW4uc2hvdygpO1xuXG5cblxuXG5cblxuLy9jcmVhdGUgYSBnZW5lcmFsIG9iamVjdFxuXG4vL3dpbmRvdy5vYmogPSBuZXcgZ2FtZU9iaignZG9uYWxkIHRydW1wJyk7XG5cbi8vd2luZG93Lm9iajIgPSBuZXcgU2NyZWVuKCdzdGFydCBTY3JlZW4nKTtcblxuLy93aW5kb3cub2IzID0gbmV3IEhVRCgnZ2FtZSBzY29yZScpO1xuXG5cbiJdfQ==
