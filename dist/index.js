"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var getInRange = function getInRange(percent, min, max) {
  return percent * (max - min) + min;
};

var useHeaderScroll = function useHeaderScroll(_ref) {
  var min = _ref.min,
      max = _ref.max,
      _ref$target = _ref.target,
      target = _ref$target === void 0 ? window : _ref$target,
      endOffset = _ref.endOffset;
  var lastScrollPosition = (0, _react.useRef)(0);
  var tick = (0, _react.useRef)(false);

  var _useState = (0, _react.useState)(max),
      _useState2 = _slicedToArray(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  var calcHeight = (0, _react.useCallback)(function () {
    lastScrollPosition.current = target.scrollY;

    if (!tick.current) {
      window.requestAnimationFrame(function () {
        var percent = 1 - Math.min(1, lastScrollPosition.current / endOffset);
        setHeight(getInRange(percent, min, max));
        tick.current = false;
      });
      tick.current = true;
    }
  }, [min, max, endOffset, target]);
  (0, _react.useEffect)(function () {
    target.addEventListener("scroll", calcHeight, false);
    return function () {
      return target.removeEventListener("scroll", calcHeight);
    };
  }, [target, calcHeight]);
  return height;
};

var _default = useHeaderScroll;
exports["default"] = _default;