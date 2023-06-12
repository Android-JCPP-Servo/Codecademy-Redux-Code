/**
 * If a function is pure, then it will always have the same outputs given the same inputs.
 */
const fs = require('fs');
const file = './data.txt';

const capitalizeMessage = (message) => {
    return message.toUpperCase();
}

const message = fs.readFileSync(file, 'utf8');
console.log(capitalizeMessage(message));