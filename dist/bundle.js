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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "http://cpo.internal/cpo/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../sass/app.scss */ 1);\n\n(function stringSplit() {\n    var w = document.querySelectorAll('.letter__wrapper');\n\n    if (!w) {\n        return;\n    }var _a = w;\n\n    var _f = function _f(element) {\n        var c = element.textContent,\n            l = c.split('');\n\n        element.innerHTML = '<span class=\"letter__item\">' + l.join('</span><span class=\"letter__item\">') + '</span>';\n    };\n\n    for (var _i = 0; _i < _a.length; _i++) {\n        _f(_a[_i], _i, _a);\n    }\n\n    undefined;\n})();\n\nfunction lettersAnimate() {\n    var l = document.querySelectorAll('.letter__item');\n\n    for (var i = 0; i < l.length; i++) {\n        l[i].style.animation = 'wave .6s ' + i * 0.08 + 's forwards';\n    }\n};\n\nfunction sleep(time) {\n    return new Promise(function (resolve) {\n        return setTimeout(resolve, time);\n    });\n}\n\nsleep(1000).then(function () {\n    lettersAnimate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzPzExM2YiXSwibmFtZXMiOlsic3RyaW5nU3BsaXQiLCJ3IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYyIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImwiLCJzcGxpdCIsImlubmVySFRNTCIsImpvaW4iLCJsZXR0ZXJzQW5pbWF0ZSIsImkiLCJsZW5ndGgiLCJzdHlsZSIsImFuaW1hdGlvbiIsInNsZWVwIiwidGltZSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInRoZW4iXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsQ0FBQyxTQUFTQSxXQUFULEdBQXVCO0FBQ3BCLFFBQUlDLElBQUlDLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixDQUFSOztBQUVBLFFBQUcsQ0FBQ0YsQ0FBSjtBQUFPO0FBQVAsS0FIb0IsU0FLcEJBLENBTG9COztBQUFBLGFBS1YscUJBQVc7QUFDakIsWUFBSUcsSUFBSUMsUUFBUUMsV0FBaEI7QUFBQSxZQUNJQyxJQUFJSCxFQUFFSSxLQUFGLENBQVEsRUFBUixDQURSOztBQUdBSCxnQkFBUUksU0FBUixHQUFvQixnQ0FBZ0NGLEVBQUVHLElBQUYsQ0FBTyxvQ0FBUCxDQUFoQyxHQUErRSxTQUFuRztBQUNILEtBVm1COztBQUFBO0FBQUE7QUFBQTs7QUFLcEI7QUFNSCxDQVhEOztBQWFBLFNBQVNDLGNBQVQsR0FBMEI7QUFDdEIsUUFBSUosSUFBSUwsU0FBU0MsZ0JBQVQsQ0FBMEIsZUFBMUIsQ0FBUjs7QUFFQSxTQUFLLElBQUlTLElBQUksQ0FBYixFQUFnQkEsSUFBSUwsRUFBRU0sTUFBdEIsRUFBOEJELEdBQTlCLEVBQW1DO0FBQy9CTCxVQUFFSyxDQUFGLEVBQUtFLEtBQUwsQ0FBV0MsU0FBWCxHQUF1QixjQUFjSCxJQUFJLElBQWxCLEdBQXlCLFlBQWhEO0FBQ0g7QUFDSjs7QUFHRCxTQUFTSSxLQUFULENBQWdCQyxJQUFoQixFQUFzQjtBQUNsQixXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFEO0FBQUEsZUFBYUMsV0FBV0QsT0FBWCxFQUFvQkYsSUFBcEIsQ0FBYjtBQUFBLEtBQVosQ0FBUDtBQUNIOztBQUVERCxNQUFNLElBQU4sRUFBWUssSUFBWixDQUFpQixZQUFNO0FBQ25CVjtBQUNILENBRkQiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc2Fzcy9hcHAuc2Nzcyc7XHJcblxyXG4oZnVuY3Rpb24gc3RyaW5nU3BsaXQoKSB7XHJcbiAgICBsZXQgdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sZXR0ZXJfX3dyYXBwZXInKVxyXG5cclxuICAgIGlmKCF3KSByZXR1cm5cclxuXHJcbiAgICB3LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgbGV0IGMgPSBlbGVtZW50LnRleHRDb250ZW50LFxyXG4gICAgICAgICAgICBsID0gYy5zcGxpdCgnJylcclxuXHJcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJsZXR0ZXJfX2l0ZW1cIj4nICsgbC5qb2luKCc8L3NwYW4+PHNwYW4gY2xhc3M9XCJsZXR0ZXJfX2l0ZW1cIj4nKSArICc8L3NwYW4+J1xyXG4gICAgfSk7XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBsZXR0ZXJzQW5pbWF0ZSgpIHtcclxuICAgIGxldCBsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxldHRlcl9faXRlbScpXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbFtpXS5zdHlsZS5hbmltYXRpb24gPSAnd2F2ZSAuNnMgJyArIGkgKiAwLjA4ICsgJ3MgZm9yd2FyZHMnXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gc2xlZXAgKHRpbWUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKSk7XHJcbn1cclxuXHJcbnNsZWVwKDEwMDApLnRoZW4oKCkgPT4ge1xyXG4gICAgbGV0dGVyc0FuaW1hdGUoKVxyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!******************************!*\
  !*** ./assets/sass/app.scss ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// removed by extract-text-webpack-plugin\n    if(false) {\n      // 1518644241113\n      var cssReload = require(\"../../node_modules/css-hot-loader/hotModuleReplacement.js\")(module.id, {\"fileMap\":\"{fileName}\"});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9hcHAuc2Nzcz8yMmM1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLHVHQUF1RyxZQUFZLFNBQVMsRUFBRTtBQUM5SDtBQUNBO0FBQ0EiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTUxODY0NDI0MTExM1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);