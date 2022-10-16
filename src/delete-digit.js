const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digitArr = String(n).split('');
  let max = 0;
  for (let i = 0; i < digitArr.length; i++) {
    const newDigitArr = digitArr.map(item => item);
    const current = newDigitArr.splice(i, 1);
    if (Number(newDigitArr.join('')) > max) {
      max = Number(newDigitArr.join(''));
    };
  };
  return max;
};


module.exports = {
  deleteDigit
};
