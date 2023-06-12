/**
 * If a function is pure, then it will always have the same outputs given the same inputs.
 */

// BAD!!!
const fs = require('fs');
const file = './data.txt';

const capitalizeMessage = (file) => {
  const message = fs.readFileSync(file, 'utf8');
  return message.toUpperCase();
}

console.log(capitalizeMessage(file));

// GOOD!!!
const fs = require('fs');
const file = './data.txt';

const capitalizeMessage = (message) => {
    return message.toUpperCase();
}

const message = fs.readFileSync(file, 'utf8');
console.log(capitalizeMessage(message));