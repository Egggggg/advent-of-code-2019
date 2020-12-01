const linereader = require("./linereader.js");
const lines = linereader.read()
let total = 0;

lines.forEach(function(line) {
	line = parseInt(line);
	total += Math.floor(line / 3) - 2;
});

console.log(total);