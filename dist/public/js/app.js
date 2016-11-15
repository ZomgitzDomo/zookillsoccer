(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gameObj = function gameObj(name) {
	_classCallCheck(this, gameObj);

	console.log('in gameObj');

	this.name = name;
};

exports.default = gameObj;

},{}],2:[function(require,module,exports){
'use strict';

var _gameObj = require('./gameObj');

var _gameObj2 = _interopRequireDefault(_gameObj);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('loading game.');

},{"./gameObj":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL2dhbWVPYmouanMiLCJtb2R1bGVzL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7SUNBcUIsTyxHQUVwQixpQkFBYSxJQUFiLEVBQW9CO0FBQUE7O0FBRW5CLFNBQVEsR0FBUixDQUFZLFlBQVo7O0FBRUEsTUFBSyxJQUFMLEdBQVksSUFBWjtBQUNBLEM7O2tCQVBtQixPOzs7OztBQ0FyQjs7Ozs7O0FBRUEsUUFBUSxHQUFSLENBQVksZUFBWiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBnYW1lT2JqIHtcblxuXHRjb25zdHJ1Y3RvciggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBnYW1lT2JqJyk7XG5cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHR9XG5cblxuXG59IiwiaW1wb3J0IGdhbWVPYmogZnJvbSAnLi9nYW1lT2JqJztcblxuY29uc29sZS5sb2coJ2xvYWRpbmcgZ2FtZS4nKTtcblxuIl19
