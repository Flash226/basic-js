const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(el) {
    el === undefined ? this.chain.push('( )') : this.chain.push(`( ${el} )`);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position >= this.chain.length || position <= 0) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    };
    this.chain.splice((position - 1), 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chainRes = this.chain.join('~~');
    this.chain = [];
    return chainRes;
  }
};

module.exports = {
  chainMaker
};
