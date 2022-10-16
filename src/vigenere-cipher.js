const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 const alphabeth = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

 class VigenereCipheringMachine {
 
   constructor(notRevers = true) {
     this.direct = notRevers;
   }
 
   encrypt(string, key) {
     if (string === undefined || key === undefined) throw new Error('Incorrect arguments!');
 
     let crypt = [];
     const coding = (key.repeat(Math.ceil(string.length / key.length)).toUpperCase()).split('');
     for (let i = 0; i < string.length; i++) {
       if (alphabeth.indexOf(string.toUpperCase()[i]) !== -1) {
         crypt.push(alphabeth[(alphabeth.indexOf(string.toUpperCase()[i]) + alphabeth.indexOf(coding[i])) % 26]);
       } else {
         crypt.push(string[i]);
         coding.splice(i, 0, 'symbol');
       }
     }
     if (this.direct === true) {
       return crypt.join('');
     } else {
       return crypt.reverse().join('');
     };
   };
 
   decrypt(string, key) {
     if (string === undefined || key === undefined) throw new Error('Incorrect arguments!');
     let crypt = [];
     const coding = (key.repeat(Math.ceil(string.length / key.length)).toUpperCase()).split('');
     for (let i = 0; i < string.length; i++) {
       if (alphabeth.indexOf(string[i]) !== -1) {
         let symbString = alphabeth.indexOf(string[i]);
         let symbCodding = alphabeth.indexOf(coding[i]);
         if ((symbString - symbCodding) < 0) symbString = symbString + 26;
         crypt.push(alphabeth[symbString - symbCodding]);
       } else {
         crypt.push(string[i]);
         coding.splice(i, 0, 'symbol');
       }
     }
     if (this.direct === true) {
       return crypt.join('');
     } else {
       return crypt.reverse().join('');
     };
   };
 };

module.exports = {
  VigenereCipheringMachine
};
