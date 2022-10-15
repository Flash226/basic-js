const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== result[result.length - 1]) {
      result.push(1);
      result.push(str[i]);
    } else {
      result[result.length - 2]++;
    };
  };
  return result.filter(item => item !== 1).join('');
}

module.exports = {
  encodeLine
};
