"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 *
 * @param {*} value
 * @returns {boolean}
 * @example
 * isObject({}); // => true
 * isObject([]); // => true
 */
function isObject(value) {
  return value !== null && _typeof(value) === 'object';
}
module.exports = isObject;