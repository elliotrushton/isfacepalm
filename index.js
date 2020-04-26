module.exports = isFacepalm;
module.exports.default = isFacepalm;

function isFacepalm(str) {
    return ["🤦", "🤦🏻", "🤦🏼", "🤦🏽", "🤦🏾","🤦🏿","🤦‍♀️","🤦🏻‍♀️","🤦🏼‍♀️","🤦🏽‍♀️","🤦🏾‍♀️","🤦🏿‍♀️","🤦‍♂️","🤦🏻‍♂️","🤦🏼‍♂️","🤦🏽‍♂️","🤦🏾‍♂️","🤦🏿‍♂️"].includes(str);
}
