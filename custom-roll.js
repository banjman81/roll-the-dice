const prompt = require('prompt-sync')();

const side = Number(prompt('How many sided die would you like to roll? '))

var num = Math.ceil(Math.random() * side );

console.log(' You rolled', num);