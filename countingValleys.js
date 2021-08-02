steps = 12;
path = "DDUUDDUDUUUD";

/*  Count number of valleys traversed, given a string that represents a path 
    D is a step downwards
    U is a step upwards
*/

function countingValleys(steps, path) {
	let valleys = 0;
	let count = 0;
	for (const step of path) {
		if (step === "D") {
			count--;
		} else {
			count++;
			if (count === 0) {
				valleys++;
			}
		}
	}
	return valleys;
}

console.log(countingValleys(steps, path));
