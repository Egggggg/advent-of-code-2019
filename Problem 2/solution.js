const linereader = require("./linereader.js");
const lines = linereader.read();

function reducer(accumulator, currentValue) {
	return accumulator + currentValue;
}

let total = []
let newFuel = []
let lastFuel = []

for (let i = 0; i < lines.length; i++) {
	newFuel.push(Math.floor(parseInt(lines[i]) / 3) - 2);
}

while (newFuel.length > 0) {
	lastFuel = newFuel
	newFuel = [];
	total = total.concat(lastFuel);

	lastFuel.forEach(function(mod) {
		let fuel = Math.floor(mod / 3) - 2

		if (fuel > 0) {
			newFuel.push(fuel);
		}
	});
}

total = total.concat(newFuel);

console.log(total.reduce(reducer));