(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var logger = require('./logger');
logger.log("Hurray it Works :)!");

},{"./logger":2}],2:[function(require,module,exports){
module.exports = {
    log: function(string) {
        if (console) console.log(string);
    }
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2FybG9cXE9uZURyaXZlXFxEb2N1bWVudG9zXFxHaXRodWJcXG1hc3RlclxcZnJvbnRlbmQtd29ya2Zsb3ctd2l0aC1ndWxwLWphZGUtLS1saXZlcmVsb2FkXFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9jYXJsby9PbmVEcml2ZS9Eb2N1bWVudG9zL0dpdGh1Yi9tYXN0ZXIvZnJvbnRlbmQtd29ya2Zsb3ctd2l0aC1ndWxwLWphZGUtLS1saXZlcmVsb2FkL3NyYy9qcy9mYWtlXzk1NTljNTlhLmpzIiwiQzovVXNlcnMvY2FybG8vT25lRHJpdmUvRG9jdW1lbnRvcy9HaXRodWIvbWFzdGVyL2Zyb250ZW5kLXdvcmtmbG93LXdpdGgtZ3VscC1qYWRlLS0tbGl2ZXJlbG9hZC9zcmMvanMvbG9nZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgbG9nZ2VyID0gcmVxdWlyZSgnLi9sb2dnZXInKTtcclxubG9nZ2VyLmxvZyhcIkh1cnJheSBpdCBXb3JrcyA6KSFcIik7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgbG9nOiBmdW5jdGlvbihzdHJpbmcpIHtcclxuICAgICAgICBpZiAoY29uc29sZSkgY29uc29sZS5sb2coc3RyaW5nKTtcclxuICAgIH1cclxufTtcclxuIl19
