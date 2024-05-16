/**
 *
 * @param {*} value
 * @returns {boolean}
 * @example
 * isObject({}); // => true
 * isObject([]); // => true
 */
function isObject(value) {
    return value !== null && typeof value === 'object';
}

module.exports = isObject;