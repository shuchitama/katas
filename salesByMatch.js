const n = 9; //number of socks in array
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]; //array of socks

function sockMerchant(n, ar) {
	let socks = {};
	let pairs = 0;
	for (const item of ar) {
		if (socks[item]) {
			socks[item]++;
		} else {
			socks[item] = 1;
		}
	}

	for (const sock in socks) {
		pairs += Math.floor(socks[sock] / 2);
	}

	return pairs;
}

console.log(sockMerchant(n, ar));
