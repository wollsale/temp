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
eval("\n\n__webpack_require__(/*! ../sass/app.scss */ 1);\n\nfunction sleep(time) {\n    return new Promise(function (resolve) {\n        return setTimeout(resolve, time);\n    });\n}\n\nfunction bodyFade() {\n    var b = document.querySelector('body');\n\n    b.style.opacity = '0' ? b.style.opacity = '1' : b.style.opacity = '0';\n};\n\nsleep(1000).then(function () {\n    bodyFade();\n});\n\n(function stringSplit() {\n    var w = document.querySelectorAll('.letter__wrapper');\n\n    if (!w) {\n        return;\n    }var _a = w;\n\n    var _f = function _f(element) {\n        var c = element.textContent,\n            l = c.split('');\n\n        element.innerHTML = '<span class=\"letter__item\">' + l.join('</span><span class=\"letter__item\">') + '</span>';\n    };\n\n    for (var _i = 0; _i < _a.length; _i++) {\n        _f(_a[_i], _i, _a);\n    }\n\n    undefined;\n})();\n\nfunction lettersAnimate() {\n    var l = document.querySelectorAll('.letter__item');\n\n    for (var i = 0; i < l.length; i++) {\n        l[i].style.animation = 'wave .6s ' + i * 0.08 + 's forwards';\n    }\n};\n\nsleep(4000).then(function () {\n    lettersAnimate();\n});\n\n(function wordsAnimate() {\n    var w = document.querySelectorAll('.word');\n\n    var _loop = function _loop(i) {\n        var el = w[i];\n\n        sleep(1500 + i * 450).then(function () {\n            el.classList.add('word--is-animated');\n        });\n    };\n\n    for (var i = 0; i < w.length; i++) {\n        _loop(i);\n    }\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzPzExM2YiXSwibmFtZXMiOlsic2xlZXAiLCJ0aW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiYm9keUZhZGUiLCJiIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJvcGFjaXR5IiwidGhlbiIsInN0cmluZ1NwbGl0IiwidyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwibCIsInNwbGl0IiwiaW5uZXJIVE1MIiwiam9pbiIsImxldHRlcnNBbmltYXRlIiwiaSIsImxlbmd0aCIsImFuaW1hdGlvbiIsIndvcmRzQW5pbWF0ZSIsImVsIiwiY2xhc3NMaXN0IiwiYWRkIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZ0JDLElBQWhCLEVBQXNCO0FBQ2xCLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQ7QUFBQSxlQUFhQyxXQUFXRCxPQUFYLEVBQW9CRixJQUFwQixDQUFiO0FBQUEsS0FBWixDQUFQO0FBQ0g7O0FBR0QsU0FBU0ksUUFBVCxHQUFvQjtBQUNoQixRQUFJQyxJQUFJQyxTQUFTQyxhQUFULENBQXVCLE1BQXZCLENBQVI7O0FBRUFGLE1BQUVHLEtBQUYsQ0FBUUMsT0FBUixHQUFrQixNQUFNSixFQUFFRyxLQUFGLENBQVFDLE9BQVIsR0FBa0IsR0FBeEIsR0FBOEJKLEVBQUVHLEtBQUYsQ0FBUUMsT0FBUixHQUFrQixHQUFsRTtBQUNIOztBQUVEVixNQUFNLElBQU4sRUFBWVcsSUFBWixDQUFpQixZQUFNO0FBQ25CTjtBQUNILENBRkQ7O0FBT0EsQ0FBQyxTQUFTTyxXQUFULEdBQXVCO0FBQ3BCLFFBQUlDLElBQUlOLFNBQVNPLGdCQUFULENBQTBCLGtCQUExQixDQUFSOztBQUVBLFFBQUcsQ0FBQ0QsQ0FBSjtBQUFPO0FBQVAsS0FIb0IsU0FLcEJBLENBTG9COztBQUFBLGFBS1YscUJBQVc7QUFDakIsWUFBSUUsSUFBSUMsUUFBUUMsV0FBaEI7QUFBQSxZQUNJQyxJQUFJSCxFQUFFSSxLQUFGLENBQVEsRUFBUixDQURSOztBQUdBSCxnQkFBUUksU0FBUixHQUFvQixnQ0FBZ0NGLEVBQUVHLElBQUYsQ0FBTyxvQ0FBUCxDQUFoQyxHQUErRSxTQUFuRztBQUNILEtBVm1COztBQUFBO0FBQUE7QUFBQTs7QUFLcEI7QUFNSCxDQVhEOztBQWFBLFNBQVNDLGNBQVQsR0FBMEI7QUFDdEIsUUFBSUosSUFBSVgsU0FBU08sZ0JBQVQsQ0FBMEIsZUFBMUIsQ0FBUjs7QUFFQSxTQUFLLElBQUlTLElBQUksQ0FBYixFQUFnQkEsSUFBSUwsRUFBRU0sTUFBdEIsRUFBOEJELEdBQTlCLEVBQW1DO0FBQy9CTCxVQUFFSyxDQUFGLEVBQUtkLEtBQUwsQ0FBV2dCLFNBQVgsR0FBdUIsY0FBY0YsSUFBSSxJQUFsQixHQUF5QixZQUFoRDtBQUNIO0FBQ0o7O0FBRUR2QixNQUFNLElBQU4sRUFBWVcsSUFBWixDQUFpQixZQUFNO0FBQ25CVztBQUNILENBRkQ7O0FBVUEsQ0FBQyxTQUFTSSxZQUFULEdBQXdCO0FBQ3JCLFFBQUliLElBQUlOLFNBQVNPLGdCQUFULENBQTBCLE9BQTFCLENBQVI7O0FBRHFCLCtCQUdaUyxDQUhZO0FBSWpCLFlBQU1JLEtBQUtkLEVBQUVVLENBQUYsQ0FBWDs7QUFFQXZCLGNBQU0sT0FBT3VCLElBQUksR0FBakIsRUFBc0JaLElBQXRCLENBQTJCLFlBQU07QUFDN0JnQixlQUFHQyxTQUFILENBQWFDLEdBQWIsQ0FBaUIsbUJBQWpCO0FBQ0gsU0FGRDtBQU5pQjs7QUFHckIsU0FBSyxJQUFJTixJQUFJLENBQWIsRUFBZ0JBLElBQUlWLEVBQUVXLE1BQXRCLEVBQThCRCxHQUE5QixFQUFtQztBQUFBLGNBQTFCQSxDQUEwQjtBQU1sQztBQUNKLENBVkQiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc2Fzcy9hcHAuc2Nzcyc7XHJcblxyXG5mdW5jdGlvbiBzbGVlcCAodGltZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGJvZHlGYWRlKCkge1xyXG4gICAgbGV0IGIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuXHJcbiAgICBiLnN0eWxlLm9wYWNpdHkgPSAnMCcgPyBiLnN0eWxlLm9wYWNpdHkgPSAnMScgOiBiLnN0eWxlLm9wYWNpdHkgPSAnMCdcclxufTtcclxuXHJcbnNsZWVwKDEwMDApLnRoZW4oKCkgPT4ge1xyXG4gICAgYm9keUZhZGUoKVxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbihmdW5jdGlvbiBzdHJpbmdTcGxpdCgpIHtcclxuICAgIGxldCB3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxldHRlcl9fd3JhcHBlcicpXHJcblxyXG4gICAgaWYoIXcpIHJldHVyblxyXG5cclxuICAgIHcuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBsZXQgYyA9IGVsZW1lbnQudGV4dENvbnRlbnQsXHJcbiAgICAgICAgICAgIGwgPSBjLnNwbGl0KCcnKVxyXG5cclxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cImxldHRlcl9faXRlbVwiPicgKyBsLmpvaW4oJzwvc3Bhbj48c3BhbiBjbGFzcz1cImxldHRlcl9faXRlbVwiPicpICsgJzwvc3Bhbj4nXHJcbiAgICB9KTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGxldHRlcnNBbmltYXRlKCkge1xyXG4gICAgbGV0IGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGV0dGVyX19pdGVtJylcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsW2ldLnN0eWxlLmFuaW1hdGlvbiA9ICd3YXZlIC42cyAnICsgaSAqIDAuMDggKyAncyBmb3J3YXJkcydcclxuICAgIH1cclxufTtcclxuXHJcbnNsZWVwKDQwMDApLnRoZW4oKCkgPT4ge1xyXG4gICAgbGV0dGVyc0FuaW1hdGUoKVxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbihmdW5jdGlvbiB3b3Jkc0FuaW1hdGUoKSB7XHJcbiAgICBsZXQgdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53b3JkJylcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBlbCA9IHdbaV1cclxuXHJcbiAgICAgICAgc2xlZXAoMTUwMCArIGkgKiA0NTApLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCd3b3JkLS1pcy1hbmltYXRlZCcpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!******************************!*\
  !*** ./assets/sass/app.scss ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// removed by extract-text-webpack-plugin\n    if(false) {\n      // 1518770497620\n      var cssReload = require(\"../../node_modules/css-hot-loader/hotModuleReplacement.js\")(module.id, {\"fileMap\":\"{fileName}\"});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9hcHAuc2Nzcz8yMmM1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLHVHQUF1RyxZQUFZLFNBQVMsRUFBRTtBQUM5SDtBQUNBO0FBQ0EiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTUxODc3MDQ5NzYyMFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);