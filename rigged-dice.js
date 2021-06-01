const prompt = require('prompt-sync')();

const side = Number(prompt('How many sided die would you like to roll? '))
const rigged = Number(prompt('What number would you like to get? '))

var num = Math.floor(Math.random() * side )+1;

if(num !== rigged){
    num = Math.floor(Math.random() * side )+1;
    console.log(' You rolled', num);
}
else{
    console.log(' You rolled', num);
}