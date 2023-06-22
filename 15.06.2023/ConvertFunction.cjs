//import promptSync from 'prompt-sync';
//let prompt = promptSync();
const prompt = require('prompt-sync')();
function Convert(){
let distanceKM = prompt ("How many Kilometers do you want to convert into Miles?");
let distanceMile = distanceKM * 0.621371 +' Miles';
console.log(distanceMile);
};
Convert();

