const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(arr) {
  const symbols = [];
  if (arr === null || arr === undefined) return false;
  for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) === 'string' && arr[i].length > 0) {
      if (arr[i].slice(0, 1) !== ' ') {
      symbols.push(arr[i].slice(0, 1).toUpperCase());
      } else {
        for (let j = 0; j < arr[i].length; j++) {
          if (arr[i].slice(j + 1, j + 2) !== ' ') {
            symbols.push(arr[i].slice(j + 1, j + 2).toUpperCase());
            break;
          };
        };
      };
    };
  };
  return symbols.sort().join('');
};

module.exports = {
  createDreamTeam
};
