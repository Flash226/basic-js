const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    if (typeof (str) !== 'string') str = String(str);
    if (options.addition !== undefined && typeof (options.addition) !== 'string') options.addition = String(options.addition);
    if (options.separator === undefined) options.separator = '+';
    if (options.additionSeparator === undefined) options.additionSeparator = '|';
    if (options.repeatTimes === undefined) options.repeatTimes = 1;
    if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
    const oneStr = [];
    const repeatStr = [];

    if (typeof (options.addition) === 'string' || typeof (options.addition) === 'object') {
        for (let i = 0; i < options.additionRepeatTimes; i++) {
            repeatStr.push(options.addition);
        };
    };
    for (let i = 0; i < options.repeatTimes; i++) {
        if (typeof (options.addition) === 'string' || typeof (options.addition) === 'object') {
            oneStr.push(`${str}${repeatStr.join(options.additionSeparator)}`);
            console.log(str);
        } else {
            oneStr.push(`${str}`);
        };
    };
    return oneStr.join(`${options.separator}`);
}

module.exports = {
    repeater
};
