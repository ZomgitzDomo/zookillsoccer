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

	function Animal(name) {
		_classCallCheck(this, Animal);

		console.log('in Animal Object name:' + name);

		return _possibleConstructorReturn(this, (Animal.__proto__ || Object.getPrototypeOf(Animal)).call(this, name));
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

	function Cage(name) {
		_classCallCheck(this, Cage);

		console.log('in Cage name:' + name);

		// grab a cage from the dom
		var _this = _possibleConstructorReturn(this, (Cage.__proto__ || Object.getPrototypeOf(Cage)).call(this, name));

		_this.dom = document.createElement('div');

		_this.setBackgroundImage('img/areas/cage.png');
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

			this.trump = new _Trump2.default('Donald Presidentia Trump');

			this.player = new _Player2.default('myself');
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

var _Dynamic2 = require('./Dynamic.js');

var _Dynamic3 = _interopRequireDefault(_Dynamic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_Dynamic) {
	_inherits(Player, _Dynamic);

	function Player(name) {
		_classCallCheck(this, Player);

		console.log('in Player Object name:' + name);
		return _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, name));
	}

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
			alert('I am in screen:' + _this.name);

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

var _Dynamic2 = require('./Dynamic.js');

var _Dynamic3 = _interopRequireDefault(_Dynamic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Trump = function (_Dynamic) {
	_inherits(Trump, _Dynamic);

	function Trump(name) {
		_classCallCheck(this, Trump);

		console.log('in Trump Object name:' + name);

		return _possibleConstructorReturn(this, (Trump.__proto__ || Object.getPrototypeOf(Trump)).call(this, name));
	}

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

			this.cages.push(new _Cage2.default('Cage #1'));
			this.cages.push(new _Cage2.default('Cage #2'));
			this.cages.push(new _Cage2.default('Cage #3'));
			this.cages.push(new _Cage2.default('Cage #4'));

			for (var i = 0; i < this.cages.length; i++) {

				this.dom.appendChild(this.cages[i].dom);
			}

			this.animals = [];

			this.animals.push(new _Animal2.default('lion'));
			this.animals.push(new _Animal2.default('tiger'));
			this.animals.push(new _Animal2.default('bear'));
			this.animals.push(new _Animal2.default('gorilla'));
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

window.zoo = new _Zoo2.default('zoo object');
window.cage = new _Cage2.default('cage object');

//start the game.....
window.startScreen.show();

//create a general object

//window.obj = new gameObj('donald trump');

//window.obj2 = new Screen('start Screen');

//window.ob3 = new HUD('game score');

},{"./Cage.js":2,"./Dynamic.js":3,"./GameScreen.js":4,"./HUD.js":5,"./LossScreen.js":6,"./Score.js":8,"./Screen.js":9,"./StartScreen.js":10,"./Static.js":11,"./WonScreen.js":13,"./Zoo.js":14,"./gameObj.js":15}]},{},[16])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0FuaW1hbC5qcyIsIm1vZHVsZXMvanMvQ2FnZS5qcyIsIm1vZHVsZXMvanMvRHluYW1pYy5qcyIsIm1vZHVsZXMvanMvR2FtZVNjcmVlbi5qcyIsIm1vZHVsZXMvanMvSFVELmpzIiwibW9kdWxlcy9qcy9Mb3NzU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9QbGF5ZXIuanMiLCJtb2R1bGVzL2pzL1Njb3JlLmpzIiwibW9kdWxlcy9qcy9TY3JlZW4uanMiLCJtb2R1bGVzL2pzL1N0YXJ0U2NyZWVuLmpzIiwibW9kdWxlcy9qcy9TdGF0aWMuanMiLCJtb2R1bGVzL2pzL1RydW1wLmpzIiwibW9kdWxlcy9qcy9Xb25TY3JlZW4uanMiLCJtb2R1bGVzL2pzL1pvby5qcyIsIm1vZHVsZXMvanMvZ2FtZU9iai5qcyIsIm1vZHVsZXMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0lBRXFCLE07OztBQUVwQixpQkFBYSxJQUFiLEVBQW9CO0FBQUE7O0FBRW5CLFVBQVEsR0FBUixDQUFZLDJCQUEyQixJQUF2Qzs7QUFGbUIseUdBSVosSUFKWTtBQUtuQjs7Ozs7a0JBUG1CLE07Ozs7Ozs7OztBQ0ZyQjs7Ozs7Ozs7Ozs7O0lBQ3FCLEk7OztBQUVwQixlQUFjLElBQWQsRUFBcUI7QUFBQTs7QUFFcEIsVUFBUSxHQUFSLENBQVksa0JBQWtCLElBQTlCOztBQUlBO0FBTm9CLDBHQUliLElBSmE7O0FBT3BCLFFBQUssR0FBTCxHQUFXLFNBQVMsYUFBVCxDQUF3QixLQUF4QixDQUFYOztBQUVBLFFBQUssa0JBQUwsQ0FBeUIsb0JBQXpCO0FBVG9CO0FBVXBCLEUsQ0FBQTs7OztxQkFHRDs7O2tCQWZvQixJOzs7Ozs7Ozs7QUNEckI7Ozs7Ozs7Ozs7OztJQUNxQixPOzs7QUFFcEIsa0JBQWMsSUFBZCxFQUFxQjtBQUFBOztBQUVwQixVQUFRLEdBQVIsQ0FBWSxZQUFaOztBQUZvQiwyR0FJYixJQUphO0FBS3BCLEUsQ0FBQTs7OztzQkFHRDs7O2tCQVZvQixPOzs7Ozs7Ozs7OztBQ0RyQjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCLFU7OztBQUVwQixxQkFBYyxJQUFkLEVBQXFCO0FBQUE7O0FBRXBCLFVBQVEsR0FBUixDQUFZLGVBQVo7O0FBRm9CLHNIQUdiLElBSGE7O0FBS3BCLFFBQUssR0FBTCxHQUFXLFNBQVMsY0FBVCxDQUF5QixhQUF6QixDQUFYOztBQUVBLFFBQUssa0JBQUwsQ0FBeUIsNkJBQXpCOztBQVBvQjtBQVNwQixFLENBQUM7Ozs7MEJBRU87O0FBRVIsV0FBUSxHQUFSLENBQWEsdUJBQWI7O0FBRUEsUUFBSyxHQUFMLEdBQVcsa0JBQVMsV0FBVCxDQUFYO0FBQ0EsUUFBSyxHQUFMLENBQVMsS0FBVDs7QUFFQSxRQUFLLEdBQUwsQ0FBUyxXQUFULENBQXNCLEtBQUssR0FBTCxDQUFTLEdBQS9COztBQUVBLFFBQUssS0FBTCxHQUFhLG9CQUFXLDBCQUFYLENBQWI7O0FBRUEsUUFBSyxNQUFMLEdBQWMscUJBQVksUUFBWixDQUFkO0FBQ0E7Ozs7cUJBRUQ7OztrQkEzQm9CLFU7Ozs7Ozs7OztBQ0xyQjs7Ozs7Ozs7Ozs7O0lBQ3FCLEc7OztBQUVwQixjQUFhLElBQWIsRUFBb0I7QUFBQTs7QUFFbkIsVUFBUSxHQUFSLENBQVksUUFBWjs7QUFGbUIsbUdBSVosSUFKWTtBQU1uQixFLENBQUE7Ozs7c0JBSUQ7OztrQkFab0IsRzs7Ozs7Ozs7O0FDRHJCOzs7Ozs7Ozs7Ozs7SUFFcUIsVTs7O0FBRXBCLHFCQUFjLElBQWQsRUFBcUI7QUFBQTs7QUFFcEIsVUFBUSxHQUFSLENBQVksZUFBWjs7QUFGb0Isc0hBR2IsSUFIYTs7QUFLcEIsUUFBSyxHQUFMLEdBQVcsU0FBUyxjQUFULENBQXlCLGFBQXpCLENBQVg7QUFDQSxRQUFLLGtCQUFMLENBQXlCLDZCQUF6Qjs7QUFFQSxRQUFLLGNBQUw7O0FBRUEsUUFBSyxhQUFMOztBQVZvQjtBQVlwQixFLENBQUM7Ozs7cUJBR0Y7OztrQkFqQm9CLFU7Ozs7Ozs7OztBQ0ZyQjs7Ozs7Ozs7Ozs7O0lBRXFCLE07OztBQUVwQixpQkFBYSxJQUFiLEVBQW9CO0FBQUE7O0FBRW5CLFVBQVEsR0FBUixDQUFZLDJCQUEyQixJQUF2QztBQUZtQix5R0FHWixJQUhZO0FBSW5COzs7OztrQkFObUIsTTs7Ozs7Ozs7O0FDRnJCOzs7Ozs7Ozs7Ozs7SUFDcUIsSzs7O0FBRXBCLGdCQUFjLElBQWQsRUFBcUI7QUFBQTs7QUFFcEIsVUFBUSxHQUFSLENBQVksVUFBWjs7QUFGb0IsNEdBSWIsSUFKYTs7QUFNcEIsUUFBSyxHQUFMLEdBQVcsU0FBUyxjQUFULENBQXlCLFlBQXpCLENBQVg7O0FBTm9CO0FBUXBCLEUsQ0FBQzs7OztrQkFHRDs7O2tCQWJtQixLOzs7Ozs7Ozs7OztBQ0RyQjs7Ozs7Ozs7Ozs7O0lBQ3FCLE07OztBQUVwQixpQkFBYyxJQUFkLEVBQXFCO0FBQUE7O0FBRXBCLFVBQVEsR0FBUixDQUFZLFdBQVo7O0FBRm9CLHlHQUliLElBSmE7QUFLcEIsRSxDQUFBOzs7O21DQUVnQjs7QUFFaEIsUUFBSyxXQUFMLEdBQW1CLEtBQUssR0FBTCxDQUFTLHNCQUFULENBQWlDLFlBQWpDLEVBQWdELENBQWhELENBQW5CO0FBSUE7OztrQ0FFZTs7QUFFZixRQUFLLFVBQUwsR0FBa0IsS0FBSyxHQUFMLENBQVMsc0JBQVQsQ0FBaUMsV0FBakMsRUFBK0MsQ0FBL0MsQ0FBbEI7QUFFQTs7OztzQkFJRDs7O2tCQXpCb0IsTTs7Ozs7Ozs7O0FDRHJCOzs7Ozs7Ozs7Ozs7SUFFcUIsVzs7O0FBRXBCLHNCQUFjLElBQWQsRUFBcUI7QUFBQTs7QUFBQSx3SEFFYixJQUZhOztBQUdwQixVQUFRLEdBQVIsQ0FBWSxnQkFBWjs7QUFFQSxRQUFLLEdBQUwsR0FBVyxTQUFTLGNBQVQsQ0FBeUIsY0FBekIsQ0FBWDs7QUFFQTs7QUFFQSxRQUFLLGtCQUFMLENBQXlCLDhCQUF6Qjs7QUFFQTs7QUFFQSxRQUFLLGNBQUw7O0FBRUE7O0FBRUEsUUFBSyxXQUFMLENBQWlCLGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQyxZQUFNO0FBQ2hELFNBQU0sb0JBQW9CLE1BQUssSUFBL0I7O0FBRUEsVUFBTyxXQUFQLENBQW9CLE9BQXBCLEVBQThCLElBQTlCLEdBSGdELENBR1Y7O0FBRXRDLFVBQU8sV0FBUCxDQUFvQixNQUFwQixFQUE2QixJQUE3QixHQUxnRCxDQUtaOztBQUVwQyxVQUFPLFdBQVAsQ0FBb0IsTUFBcEIsRUFBNkIsS0FBN0IsR0FQZ0QsQ0FPVjtBQUV0QyxHQVREOztBQVdBLFFBQUssYUFBTDs7QUE1Qm9CO0FBOEJwQixFLENBQUM7Ozs7cUJBS0Y7OztrQkFyQ29CLFc7Ozs7Ozs7OztBQ0ZyQjs7Ozs7Ozs7Ozs7O0lBQ3FCLE07OztBQUVwQixpQkFBYyxJQUFkLEVBQXFCO0FBQUE7O0FBRXBCLFVBQVEsR0FBUixDQUFZLFdBQVo7O0FBRm9CLHlHQUliLElBSmE7QUFLcEIsRSxDQUFBOzs7O3NCQUdEOzs7a0JBVm9CLE07Ozs7Ozs7OztBQ0RyQjs7Ozs7Ozs7Ozs7O0lBRXFCLEs7OztBQUVwQixnQkFBYSxJQUFiLEVBQW9CO0FBQUE7O0FBRW5CLFVBQVEsR0FBUixDQUFZLDBCQUEwQixJQUF0Qzs7QUFGbUIsdUdBSVosSUFKWTtBQUtuQjs7Ozs7a0JBUG1CLEs7Ozs7Ozs7OztBQ0ZyQjs7Ozs7Ozs7Ozs7O0lBRXFCLFM7OztBQUVwQixvQkFBYyxJQUFkLEVBQXFCO0FBQUE7O0FBRXBCLFVBQVEsR0FBUixDQUFZLGNBQVo7O0FBRm9CLG9IQUdiLElBSGE7O0FBS3BCLFFBQUssR0FBTCxHQUFXLFNBQVMsY0FBVCxDQUF5QixZQUF6QixDQUFYOztBQUVBLFFBQUssa0JBQUwsQ0FBeUIsNEJBQXpCOztBQUVBLFFBQUssY0FBTDs7QUFFQSxRQUFLLGFBQUw7O0FBWG9CO0FBYXBCLEUsQ0FBQzs7OztxQkFHRjs7O2tCQWxCb0IsUzs7Ozs7Ozs7Ozs7QUNGckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUIsRzs7O0FBRXBCLGNBQWMsSUFBZCxFQUFxQjtBQUFBOztBQUVwQixVQUFRLEdBQVIsQ0FBWSxRQUFaOztBQUlBO0FBTm9CLHdHQUliLElBSmE7O0FBT3BCLFFBQUssR0FBTCxHQUFXLFNBQVMsYUFBVCxDQUF3QixLQUF4QixDQUFYOztBQVBvQjtBQVVwQixFLENBQUE7Ozs7MEJBRU87QUFDUCxXQUFRLEdBQVIsQ0FBWSxjQUFaOztBQUVBLFFBQUssS0FBTCxHQUFhLEVBQWI7O0FBRUEsUUFBSyxLQUFMLENBQVcsSUFBWCxDQUFpQixtQkFBVSxTQUFWLENBQWpCO0FBQ0EsUUFBSyxLQUFMLENBQVcsSUFBWCxDQUFpQixtQkFBVSxTQUFWLENBQWpCO0FBQ0EsUUFBSyxLQUFMLENBQVcsSUFBWCxDQUFpQixtQkFBVSxTQUFWLENBQWpCO0FBQ0EsUUFBSyxLQUFMLENBQVcsSUFBWCxDQUFpQixtQkFBVSxTQUFWLENBQWpCOztBQUVBLFFBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxLQUFLLEtBQUwsQ0FBVyxNQUEvQixFQUF1QyxHQUF2QyxFQUE2Qzs7QUFFNUMsU0FBSyxHQUFMLENBQVMsV0FBVCxDQUFzQixLQUFLLEtBQUwsQ0FBVyxDQUFYLEVBQWMsR0FBcEM7QUFDQTs7QUFFRCxRQUFLLE9BQUwsR0FBZSxFQUFmOztBQUVBLFFBQUssT0FBTCxDQUFhLElBQWIsQ0FBbUIscUJBQVksTUFBWixDQUFuQjtBQUNBLFFBQUssT0FBTCxDQUFhLElBQWIsQ0FBbUIscUJBQVksT0FBWixDQUFuQjtBQUNBLFFBQUssT0FBTCxDQUFhLElBQWIsQ0FBbUIscUJBQVksTUFBWixDQUFuQjtBQUNBLFFBQUssT0FBTCxDQUFhLElBQWIsQ0FBbUIscUJBQVksU0FBWixDQUFuQjtBQUdBOzs7O3FCQUdEOzs7a0JBeENvQixHOzs7Ozs7Ozs7Ozs7O0lDSEMsTztBQUVyQixrQkFBYSxJQUFiLEVBQW9CO0FBQUE7O0FBRW5COztBQUVBLFVBQVEsR0FBUixDQUFZLFlBQVo7O0FBRUEsT0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLE9BQUssRUFBTCxHQUFVLEtBQUssS0FBTCxFQUFWO0FBSUEsRSxDQUFBOztBQUVEOzs7Ozs7OzBCQUtROztBQUVQLFVBQU8sS0FBSyxFQUFaO0FBQ0E7O0FBRUQ7Ozs7Ozs7NEJBS1U7O0FBRVQsVUFBTyxLQUFLLElBQVo7QUFFQTs7OzBCQUVTLE8sRUFBVTs7QUFFbkIsUUFBSyxJQUFMLEdBQVksT0FBWjtBQUVBOztBQUVEOzs7Ozs7OzBCQVFXO0FBQ0osT0FBSSxJQUFJLElBQUksSUFBSixHQUFXLE9BQVgsRUFBUjtBQUNBLE9BQUksT0FBTyxXQUFQLElBQXNCLE9BQU8sT0FBTyxXQUFQLENBQW1CLEdBQTFCLEtBQWtDLFVBQTVELEVBQXdFO0FBQ3BFLFNBQUssWUFBWSxHQUFaLEVBQUwsQ0FEb0UsQ0FDNUM7QUFDM0I7QUFDRCxPQUFJLE9BQU8sdUNBQXVDLE9BQXZDLENBQStDLE9BQS9DLEVBQXdELFVBQVUsQ0FBVixFQUFhO0FBQzVFLFFBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFMLEtBQWMsRUFBbkIsSUFBdUIsRUFBdkIsR0FBNEIsQ0FBcEM7QUFDQSxRQUFJLEtBQUssS0FBTCxDQUFXLElBQUUsRUFBYixDQUFKO0FBQ0EsV0FBTyxDQUFDLEtBQUcsR0FBSCxHQUFTLENBQVQsR0FBYyxJQUFFLEdBQUYsR0FBTSxHQUFyQixFQUEyQixRQUEzQixDQUFvQyxFQUFwQyxDQUFQO0FBQ0gsSUFKVSxDQUFYO0FBS0EsVUFBTyxJQUFQO0FBQ0gsRyxDQUFBOzs7O3lCQUVPOztBQUVWLFFBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSxPQUFmLEdBQXlCLE9BQXpCO0FBRUE7Ozt5QkFFTzs7QUFFUCxRQUFLLEdBQUwsQ0FBUyxLQUFULENBQWUsT0FBZixHQUF5QixNQUF6QjtBQUVBOzs7cUNBRW1CLE8sRUFBVTs7QUFFN0IsUUFBSyxHQUFMLENBQVMsS0FBVCxDQUFlLGVBQWYsR0FBaUMsVUFBVSxPQUFWLEdBQW9CLElBQXJEO0FBQ0E7OztxQ0FFbUIsTyxFQUFVOztBQUU3QixPQUFJLE1BQU0sSUFBSSxLQUFKLEVBQVY7O0FBRUEsT0FBSSxHQUFKLEdBQVUsT0FBVjs7QUFFQSxRQUFLLEdBQUwsQ0FBUyxXQUFULENBQXNCLEdBQXRCO0FBQ0E7O0FBRUQ7Ozs7MEJBQ1MsSyxFQUFPLE0sRUFBUzs7QUFFeEIsUUFBSyxHQUFMLENBQVMsS0FBVCxDQUFlLEtBQWYsR0FBdUIsUUFBUSxJQUEvQjs7QUFFQSxRQUFLLEdBQUwsQ0FBUyxLQUFULENBQWUsTUFBZixHQUF3QixTQUFTLElBQWpDO0FBRUE7O0FBRUQ7Ozs7OEJBQ2EsRyxFQUFLLEksRUFBTTs7QUFFdkIsUUFBSyxHQUFMLENBQVMsS0FBVCxDQUFlLEdBQWYsR0FBcUIsTUFBTSxJQUEzQjs7QUFFQSxRQUFLLEdBQUwsQ0FBUyxLQUFULENBQWUsSUFBZixHQUFzQixPQUFPLElBQTdCO0FBR0E7Ozs7S0FJQTs7O2tCQTlHb0IsTzs7Ozs7QUNDdEI7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7Ozs7QUFOQTs7O0FBSkE7QUFWQTtBQXNCQSxRQUFRLEdBQVIsQ0FBWSxlQUFaOztBQUVBOzs7QUFMQTs7O0FBaEJBO0FBc0JBLE9BQU8sV0FBUCxHQUFxQixFQUFyQjs7QUFFQSxPQUFPLFdBQVAsR0FBcUIsMEJBQWdCLGVBQWhCLENBQXJCO0FBQ0EsT0FBTyxXQUFQLENBQW9CLE9BQXBCLElBQWdDLE9BQU8sV0FBdkM7O0FBRUEsT0FBTyxVQUFQLEdBQW9CLHlCQUFlLGNBQWYsQ0FBcEI7QUFDQSxPQUFPLFdBQVAsQ0FBb0IsTUFBcEIsSUFBK0IsT0FBTyxVQUF0Qzs7QUFFQSxPQUFPLFNBQVAsR0FBbUIsd0JBQWMsaUJBQWQsQ0FBbkI7QUFDQSxPQUFPLFdBQVAsQ0FBb0IsS0FBcEIsSUFBOEIsT0FBTyxTQUFyQzs7QUFFQSxPQUFPLFVBQVAsR0FBb0IseUJBQWUsa0JBQWYsQ0FBcEI7QUFDQSxPQUFPLFdBQVAsQ0FBb0IsTUFBcEIsSUFBK0IsT0FBTyxVQUF0Qzs7QUFFQSxPQUFPLEtBQVAsR0FBZSxvQkFBVSxtQkFBVixDQUFmOztBQUdBLE9BQU8sR0FBUCxHQUFhLGtCQUFRLFlBQVIsQ0FBYjtBQUNBLE9BQU8sSUFBUCxHQUFjLG1CQUFTLGFBQVQsQ0FBZDs7QUFHQTtBQUNBLE9BQU8sV0FBUCxDQUFtQixJQUFuQjs7QUFPQTs7QUFFQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgRHluYW1pYyBmcm9tICcuL0R5bmFtaWMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYWwgZXh0ZW5kcyBEeW5hbWljIHtcblx0XG5cdGNvbnN0cnVjdG9yKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIEFuaW1hbCBPYmplY3QgbmFtZTonICsgbmFtZSk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXHR9XG59IiwiaW1wb3J0IFN0YXRpYyBmcm9tICcuL1N0YXRpYy5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWdlIGV4dGVuZHMgU3RhdGljIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBDYWdlIG5hbWU6JyArIG5hbWUgKTtcblxuXHRcdHN1cGVyKCBuYW1lICk7XG5cblx0XHQvLyBncmFiIGEgY2FnZSBmcm9tIHRoZSBkb21cblx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG5cblx0XHR0aGlzLnNldEJhY2tncm91bmRJbWFnZSggJ2ltZy9hcmVhcy9jYWdlLnBuZycgKTtcblx0fS8vZW5kIG9mIGNvbnN0cnVjdG9yXG5cblxufS8vZW5kIG9mIGNsYXNzIiwiaW1wb3J0IGdhbWVPYmogZnJvbSAnLi9nYW1lT2JqLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWMgZXh0ZW5kcyBnYW1lT2JqIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBkeW5hbWljJyk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXHR9Ly9lbmQgb2YgY29uc3RydWN0b3JcblxuXG59Ly9lbmQgb2YgY2xhc3MiLCJpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcbmltcG9ydCBab28gZnJvbSAnLi9ab28uanMnO1xuaW1wb3J0IFRydW1wIGZyb20gJy4vVHJ1bXAuanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xuXG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBHYW1lU2NyZWVuJyk7XG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdnYW1lLXNjcmVlbicgKTtcblxuXHRcdHRoaXMuc2V0QmFja2dyb3VuZEltYWdlKCAnaW1nL3NjcmVlbnMvZ2FtZS1zY3JlZW4ucG5nJyApO1xuXG5cdH0gLy8gZW5kIG9mIGNvbnN0cnVjdG9yXG5cdFxuXHRidWlsZCAoKSB7XG5cblx0XHRjb25zb2xlLmxvZyggJ2J1aWxkaW5nIHRoZSBnYW1lLi4uLicgKTsgXG5cblx0XHR0aGlzLnpvbyA9IG5ldyBab28oICdGdW5reSBab28nICk7XG5cdFx0dGhpcy56b28uYnVpbGQoKTtcblxuXHRcdHRoaXMuZG9tLmFwcGVuZENoaWxkKCB0aGlzLnpvby5kb20gKTtcblxuXHRcdHRoaXMudHJ1bXAgPSBuZXcgVHJ1bXAoICdEb25hbGQgUHJlc2lkZW50aWEgVHJ1bXAnICk7XG5cblx0XHR0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoICdteXNlbGYnICk7XG5cdH1cblxufS8vIGVuZCBvZiBjbGFzcyIsImltcG9ydCBnYW1lT2JqIGZyb20gJy4vZ2FtZU9iai5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIVUQgZXh0ZW5kcyBnYW1lT2Jqe1xuXHRcblx0Y29uc3RydWN0b3IoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gSFVEJyk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXG5cdH0vL2VuZCBvZiBjb25zdHJ1Y3RvclxuXG5cdFxuXG59Ly9lbmQgb2YgY2xhc3MiLCJpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9zc1NjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIExvc3NTY3JlZW4nKTtcblx0XHRzdXBlciggbmFtZSApO1xuXG5cdFx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2xvc3Mtc2NyZWVuJyApO1xuXHRcdHRoaXMuc2V0QmFja2dyb3VuZEltYWdlKCAnaW1nL3NjcmVlbnMvbG9zcy1zY3JlZW4ucG5nJyApO1xuXG5cdFx0dGhpcy5nZXRTdGFydEJ1dHRvbigpO1xuXG5cdFx0dGhpcy5nZXRFeGl0QnV0dG9uKCk7XG5cblx0fSAvLyBlbmQgb2YgY29uc3RydWN0b3Jcblx0XG5cbn0vLyBlbmQgb2YgY2xhc3MiLCJpbXBvcnQgRHluYW1pYyBmcm9tICcuL0R5bmFtaWMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBEeW5hbWljIHtcblx0XG5cdGNvbnN0cnVjdG9yKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIFBsYXllciBPYmplY3QgbmFtZTonICsgbmFtZSk7XG5cdFx0c3VwZXIoIG5hbWUgKTtcblx0fVxufSIsImltcG9ydCBIVUQgZnJvbSAnLi9IVUQuanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUgZXh0ZW5kcyBIVUQge1xuXG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBzY29yZScpO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdnYW1lLXNjb3JlJyApO1xuXG5cdH0gLy8gZW5kIG9mIGNvbnN0cnVjdG9yXG5cdFxuXG59IC8vIGVuZCBvZiBjbGFzcyIsImltcG9ydCBnYW1lT2JqIGZyb20gJy4vZ2FtZU9iai5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JlZW4gZXh0ZW5kcyBnYW1lT2JqIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBzY3JlZW4nKTtcblxuXHRcdHN1cGVyKCBuYW1lICk7XG5cdH0vL2VuZCBvZiBjb25zdHJ1Y3RvclxuXG5cdGdldFN0YXJ0QnV0dG9uKCkge1xuXG5cdFx0dGhpcy5zdGFydEJ1dHRvbiA9IHRoaXMuZG9tLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoICdnYW1lLXN0YXJ0JyApWzBdO1xuXG5cdFx0XG5cblx0fVxuXG5cdGdldEV4aXRCdXR0b24oKSB7XG5cblx0XHR0aGlzLmV4aXRCdXR0b24gPSB0aGlzLmRvbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCAnZ2FtZS1leGl0JyApWzBdO1xuXG5cdH1cblxuXHRcblxufS8vZW5kIG9mIGNsYXNzIiwiaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0U2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXHRcdGNvbnNvbGUubG9nKCdpbiBTdGFydFNjcmVlbicpO1xuXG5cdFx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3N0YXJ0LXNjcmVlbicgKTtcblxuXHRcdC8vc2V0IHRoZSBiYWNrZ3JvdW5kIGltYWdlXG5cblx0XHR0aGlzLnNldEJhY2tncm91bmRJbWFnZSggJ2ltZy9zY3JlZW5zL3N0YXJ0LXNjcmVlbi5wbmcnICk7XG5cblx0XHQvL3NlYXJjaCBmb3IgYSAnc3RhcnQnIGJ1dHRvbiBpbiB0aGUgdGhpcy5kb20gSFRNTCBtYXJrdXAuIE5vdGU6IHdpbGwgZmFpbCBpZiBubyBidXR0b24gcHJlc2VudCFcblxuXHRcdHRoaXMuZ2V0U3RhcnRCdXR0b24oKTtcblxuXHRcdC8vd2l0ZSB1cCB0aGUgU3RhcnQgYnV0dG9uIHRvIGxvYWQgdGhlIEdhbWVTY3JlZW5cblxuXHRcdHRoaXMuc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRhbGVydCgnSSBhbSBpbiBzY3JlZW46JyArIHRoaXMubmFtZSApO1xuXG5cdFx0XHR3aW5kb3cuZ2FtZVNjcmVlbnNbICdzdGFydCcgXS5oaWRlKCk7IC8vaGlkZSBteXNlbGZcblxuXHRcdFx0d2luZG93LmdhbWVTY3JlZW5zWyAnZ2FtZScgXS5zaG93KCk7Ly9zaG93IHNlbGZcblxuXHRcdFx0d2luZG93LmdhbWVTY3JlZW5zWyAnZ2FtZScgXS5idWlsZCgpOyAvL3JlYnVpbGQgdGhlIGdhbWUgd2l0aCBhbGwgaXRzIG9iZWN0c1xuXG5cdFx0fSk7XG5cblx0XHR0aGlzLmdldEV4aXRCdXR0b24oKTtcblxuXHR9IC8vIGVuZCBvZiBjb25zdHJ1Y3RvclxuXG5cblx0XG5cbn0vLyBlbmQgb2YgY2xhc3MiLCJpbXBvcnQgZ2FtZU9iaiBmcm9tICcuL2dhbWVPYmouanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGljIGV4dGVuZHMgZ2FtZU9iaiB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gc3RhdGljJyk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXHR9Ly9lbmQgb2YgY29uc3RydWN0b3JcblxuXG59Ly9lbmQgb2YgY2xhc3MiLCJpbXBvcnQgRHluYW1pYyBmcm9tICcuL0R5bmFtaWMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcnVtcCBleHRlbmRzIER5bmFtaWMge1xuXHRcblx0Y29uc3RydWN0b3IoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gVHJ1bXAgT2JqZWN0IG5hbWU6JyArIG5hbWUpO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblx0fVxufSIsImltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb25TY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xuXG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBXb25TY3JlZW4nKTtcblx0XHRzdXBlciggbmFtZSApO1xuXG5cdFx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3dvbi1zY3JlZW4nICk7XG5cblx0XHR0aGlzLnNldEJhY2tncm91bmRJbWFnZSggJ2ltZy9zY3JlZW5zL3dvbi1zY3JlZW4ucG5nJyApO1xuXG5cdFx0dGhpcy5nZXRTdGFydEJ1dHRvbigpO1xuXG5cdFx0dGhpcy5nZXRFeGl0QnV0dG9uKCk7XG5cblx0fSAvLyBlbmQgb2YgY29uc3RydWN0b3Jcblx0XG5cbn0vLyBlbmQgb2YgY2xhc3MiLCJpbXBvcnQgU3RhdGljIGZyb20gJy4vU3RhdGljLmpzJztcbmltcG9ydCBDYWdlIGZyb20gJy4vQ2FnZS5qcyc7XG5pbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvbyBleHRlbmRzIFN0YXRpYyB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gWm9vJyk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXG5cdFx0Ly9ncmFiIGEgem9vXG5cdFx0dGhpcy5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuXG5cblx0fS8vZW5kIG9mIGNvbnN0cnVjdG9yXG5cblx0YnVpbGQoKSB7XG5cdFx0Y29uc29sZS5sb2coJ2luIHpvbyBidWlsZCcpO1xuXG5cdFx0dGhpcy5jYWdlcyA9IFtdO1xuXG5cdFx0dGhpcy5jYWdlcy5wdXNoKCBuZXcgQ2FnZSggJ0NhZ2UgIzEnICkgKTtcblx0XHR0aGlzLmNhZ2VzLnB1c2goIG5ldyBDYWdlKCAnQ2FnZSAjMicgKSApO1xuXHRcdHRoaXMuY2FnZXMucHVzaCggbmV3IENhZ2UoICdDYWdlICMzJyApICk7XG5cdFx0dGhpcy5jYWdlcy5wdXNoKCBuZXcgQ2FnZSggJ0NhZ2UgIzQnICkgKTtcblxuXHRcdGZvciggbGV0IGkgPSAwOyBpIDwgdGhpcy5jYWdlcy5sZW5ndGg7IGkrKyApIHtcblxuXHRcdFx0dGhpcy5kb20uYXBwZW5kQ2hpbGQoIHRoaXMuY2FnZXNbaV0uZG9tKTtcblx0XHR9XG5cblx0XHR0aGlzLmFuaW1hbHMgPSBbXTtcblxuXHRcdHRoaXMuYW5pbWFscy5wdXNoKCBuZXcgQW5pbWFsKCAnbGlvbicgKSApO1xuXHRcdHRoaXMuYW5pbWFscy5wdXNoKCBuZXcgQW5pbWFsKCAndGlnZXInICkgKTtcblx0XHR0aGlzLmFuaW1hbHMucHVzaCggbmV3IEFuaW1hbCggJ2JlYXInICkgKTtcblx0XHR0aGlzLmFuaW1hbHMucHVzaCggbmV3IEFuaW1hbCggJ2dvcmlsbGEnICkgKTtcblxuXG5cdH1cblxuXG59Ly9lbmQgb2YgY2xhc3MiLCIgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ2FtZU9iaiB7XG5cblx0Y29uc3RydWN0b3IoIG5hbWUgKSB7XG5cblx0XHQvL2luaGVyaXRzIGZyb20gZ2VuZXJpYyBKYXZhc2NyaXB0IE9iamVjdDtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBnYW1lT2JqJyk7XG5cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuaWQgPSB0aGlzLnNldElkKCk7XG5cblx0XHRcblxuXHR9Ly9lbmQgb2YgY29uc3RydWNvclxuXG5cdC8qKlxuXHQqIGdldCB0aGUgaWQgYXNzaWduZWQgdG8gdGhpcyBvYmplY3QuXG5cdCogQHJldHVybnMgW3N0cmluZ10gdGhlIG5hbWVcblx0Ki9cblxuXHRnZXRJZCgpIHtcblxuXHRcdHJldHVybiB0aGlzLmlkO1xuXHR9XG5cblx0LyoqIFxuXHQqIGdldCB0aGUgbmFtZSBhc3NpZ25lZCB0byB0aGlzIG9iamVjdFxuXHQqIEByZXR1cm5zIG5hbWVcblx0Ki9cblxuXHRnZXROYW1lKCkge1xuXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcblxuXHR9XG5cblx0c2V0TmFtZSAoIG5ld05hbWUgKSB7XG5cblx0XHR0aGlzLm5hbWUgPSBuZXdOYW1lO1xuXG5cdH1cblxuXHQvKiogXG5cblx0KmdlbmVyYXRlcyBhIHVuaXF1ZSBpZCBmb3IgZXZlcnkgZ2FtZSBvYmtlY3Rcblx0KiBAbGluayBzdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2NyZWFlLWd1aWQtdXVpZC1pbi1qYXZhc2NyaXB0XG5cblx0Ki9cblxuXG5cdCAgc2V0SWQgKCkge1xuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlICYmIHR5cGVvZiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGQgKz0gcGVyZm9ybWFuY2Uubm93KCk7IC8vdXNlIGhpZ2gtcHJlY2lzaW9uIHRpbWVyIGlmIGF2YWlsYWJsZVxuICAgICAgICB9XG4gICAgICAgIHZhciB1dWlkID0gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgdmFyIHIgPSAoZCArIE1hdGgucmFuZG9tKCkqMTYpJTE2IHwgMDtcbiAgICAgICAgICAgIGQgPSBNYXRoLmZsb29yKGQvMTYpO1xuICAgICAgICAgICAgcmV0dXJuIChjPT0neCcgPyByIDogKHImMHgzfDB4OCkpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1dWlkO1xuICAgIH0vL2VuZCBvZiBzZXQgaWRcblxuICAgIHNob3cgKCkge1xuXG5cdFx0dGhpcy5kb20uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cblx0fVxuXG5cdGhpZGUgKCkge1xuXG5cdFx0dGhpcy5kb20uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuXHR9XG5cblx0c2V0QmFja2dyb3VuZEltYWdlKCBpbWdQYXRoICkge1xuXG5cdFx0dGhpcy5kb20uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ1wiICsgaW1nUGF0aCArIFwiJylcIjtcblx0fVxuXG5cdHNldEZvcmVncm91bmRpbWFnZSggaW1nUGF0aCApIHtcblxuXHRcdGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcblxuXHRcdGltZy5zcmMgPSBpbWdQYXRoO1xuXG5cdFx0dGhpcy5kb20uYXBwZW5kQ2hpbGQoIGltZyApO1xuXHR9XG5cblx0Ly9zZXQgdGhlIHNpemUgb2YgYW4gb2JqZWN0LCBpbiBwZXhpbHMuXG5cdHNldFNpemUoIHdpZHRoLCBoZWlnaHQgKSB7XG5cblx0XHR0aGlzLmRvbS5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcblxuXHRcdHRoaXMuZG9tLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cblx0fVxuXG5cdC8vc2V0IHRoZSBwb3NpdGlvbiBvZiBhbiBvamVjdCwgcmVsYXRpdmUgdG8gdGhlIGVuY2xvc2luZyBzY3JlZW4gb2JqZWN0LlxuXHRzZXRQb3NpdGlvbiggdG9wLCBsZWZ0ICl7XG5cblx0XHR0aGlzLmRvbS5zdHlsZS50b3AgPSB0b3AgKyAncHgnO1xuXG5cdFx0dGhpcy5kb20uc3R5bGUubGVmdCA9IGxlZnQgKyAncHgnO1xuXG5cblx0fVxuXG5cblxufSAvL2VuZCBvZiBjbGFzcyIsIi8vbWFzdGUgb2JqZWN0LlxuaW1wb3J0IGdhbWVPYmogZnJvbSAnLi9nYW1lT2JqLmpzJztcblxuLy9zY3JlZW4gb2JqZWN0c1xuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5pbXBvcnQgU3RhcnRTY3JlZW4gZnJvbSAnLi9TdGFydFNjcmVlbi5qcyc7XG5pbXBvcnQgR2FtZVNjcmVlbiBmcm9tICcuL0dhbWVTY3JlZW4uanMnO1xuaW1wb3J0IFdvblNjcmVlbiBmcm9tICcuL1dvblNjcmVlbi5qcyc7XG5pbXBvcnQgTG9zc1NjcmVlbiBmcm9tICcuL0xvc3NTY3JlZW4uanMnO1xuXG4vL2h1ZCBvYmplY3RcbmltcG9ydCBIVUQgZnJvbSAnLi9IVUQuanMnO1xuaW1wb3J0IFNjb3JlIGZyb20gJy4vU2NvcmUuanMnO1xuXG4vL3N0YXRpYyBvYmplY3RcbmltcG9ydCBTdGF0aWMgZnJvbSAnLi9TdGF0aWMuanMnO1xuaW1wb3J0IFpvbyBmcm9tICcuL1pvby5qcyc7XG5pbXBvcnQgQ2FnZSBmcm9tICcuL0NhZ2UuanMnO1xuXG4vL2R5bmFtaWMgb2JqZWN0XG5pbXBvcnQgRHluYW1pYyBmcm9tICcuL0R5bmFtaWMuanMnO1xuXG5jb25zb2xlLmxvZygnbG9hZGluZyBnYW1lLicpO1xuXG4vL2dsb2JhbCBzdG9yYWdlIG9mIGFsbCBzY3JlZWJzIGNyZWF0ZWRcbndpbmRvdy5nYW1lU2NyZWVucyA9IFtdO1xuXG53aW5kb3cuc3RhcnRTY3JlZW4gPSBuZXcgU3RhcnRTY3JlZW4oJ1pvb0tpbGwgc3RhcnQnKTtcbndpbmRvdy5nYW1lU2NyZWVuc1sgJ3N0YXJ0JyBdID0gd2luZG93LnN0YXJ0U2NyZWVuO1xuXG53aW5kb3cuZ2FtZVNjcmVlbiA9IG5ldyBHYW1lU2NyZWVuKCd6b29raWxsIEdhbWUnKTtcbndpbmRvdy5nYW1lU2NyZWVuc1sgJ2dhbWUnIF0gPSB3aW5kb3cuZ2FtZVNjcmVlbjtcblxud2luZG93LndvblNjcmVlbiA9IG5ldyBXb25TY3JlZW4oJ3pvb2tpbGwgWW91IHdvbicpO1xud2luZG93LmdhbWVTY3JlZW5zWyAnd29uJyBdID0gd2luZG93LndvblNjcmVlbjtcblxud2luZG93Lmxvc3NTY3JlZW4gPSBuZXcgTG9zc1NjcmVlbignem9va2lsbCBZb3UgbG9zcycpO1xud2luZG93LmdhbWVTY3JlZW5zWyAnbG9zcycgXSA9IHdpbmRvdy5sb3NzU2NyZWVuO1xuXG53aW5kb3cuc2NvcmUgPSBuZXcgU2NvcmUoJ2dhbWUgc2NvcmUgb2JqZWN0Jyk7XG5cblxud2luZG93LnpvbyA9IG5ldyBab28oJ3pvbyBvYmplY3QnKTtcbndpbmRvdy5jYWdlID0gbmV3IENhZ2UoJ2NhZ2Ugb2JqZWN0Jyk7XG5cblxuLy9zdGFydCB0aGUgZ2FtZS4uLi4uXG53aW5kb3cuc3RhcnRTY3JlZW4uc2hvdygpO1xuXG5cblxuXG5cblxuLy9jcmVhdGUgYSBnZW5lcmFsIG9iamVjdFxuXG4vL3dpbmRvdy5vYmogPSBuZXcgZ2FtZU9iaignZG9uYWxkIHRydW1wJyk7XG5cbi8vd2luZG93Lm9iajIgPSBuZXcgU2NyZWVuKCdzdGFydCBTY3JlZW4nKTtcblxuLy93aW5kb3cub2IzID0gbmV3IEhVRCgnZ2FtZSBzY29yZScpO1xuXG5cbiJdfQ==
