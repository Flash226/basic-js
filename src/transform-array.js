const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr) === false) throw new Error("'arr' parameter must be an instance of the Array!");

  let newArray = arr.map(item => item);

  let changes = 0;

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === '--discard-next') {
      if (i !== newArray.length - 1) {
        newArray.splice(i, 2);
        i = i - 1;
        changes = i;
      } else {
        newArray.splice(i, 1);
      };
    } else if (newArray[i] === '--discard-prev') {
      if (i > 0 && i - 1 !== changes) {
        newArray.splice(i - 1, 2);
      } else {
        newArray.splice(i, 1);
      };
    } else if (newArray[i] === '--double-next') {
      if (i !== newArray.length - 1) {
        newArray.splice(i, 1, newArray[i + 1]);
        changes = i;
      } else {
        newArray.splice(i, 1);
      };
    } else if (newArray[i] === '--double-prev') {
      if (i === 0 || i - 1 === changes) {
        newArray.splice(i, 1);
        i = i - 1;
      } else if (i > 0) {
        newArray.splice(i, 1, newArray[i - 1]);
        changes = i;
      };
    };
  };
  return newArray;
};


module.exports = {
  transform
};
