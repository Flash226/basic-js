const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const constanIndices = [];
  arr.forEach((item, index) => {
    if (item === -1) {
      constanIndices.push(index);
    }
  });
  const sortedArr = arr
    .filter((item) => item !== -1)
    .sort((a, b) => a - b);
  
  for (let i = 0; i < constanIndices.length; i += 1) {
    sortedArr.splice(constanIndices[i], 0, -1);
  }

  return sortedArr;
}

module.exports = {
  sortByHeight
};
