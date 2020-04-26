var assert = require('assert');
var isFacepalm = require('./');

assert(isFacepalm(null) === false);
assert(isFacepalm("facepalm") === false);
assert(isFacepalm("😉") === false);
assert(isFacepalm("🤦🏽‍♂️") === true);
assert(isFacepalm("🤦‍♀️") === true);
assert(isFacepalm("🤦🏿") === true);
assert(isFacepalm("2020") === false);

console.log("Tests passed. Ready to find 🤦");
