/* 
Given a 6 x 6 2D Array, arr:

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0

An hourglass is a subset of values with indices falling in arr's graphical representation:

a b c
  d
e f g

There are 16 hourglasses in arr. An hourglass sum is the sum of an 
hourglass' values. Calculate the hourglass sum for every hourglass in arr, 
then print the maximum hourglass sum. The array will always be 6 x 6.
*/

const array1 = [
	[1, 1, 1, 0, 0, 0],
	[0, 1, 0, 0, 0, 0],
	[1, 1, 1, 0, 0, 0],
	[0, 0, 2, 4, 4, 0],
	[0, 0, 0, 2, 0, 0],
	[0, 0, 1, 2, 4, 0],
];

function hourglassSum(arr) {
	arr = arr.reduce((acc, val) => acc.concat(val), []); //flatten array
	let hourglassValues = [];
	let hourglassStarts = [
		0, 1, 2, 3, 6, 7, 8, 9, 12, 13, 14, 15, 18, 19, 20, 21,
	];
	for (const n of hourglassStarts) {
		hourglassValues.push(
			arr[n] +
				arr[n + 1] +
				arr[n + 2] +
				arr[n + 7] +
				arr[n + 12] +
				arr[n + 13] +
				arr[n + 14]
		);
	}
	return Math.max(...hourglassValues);
}

console.log(hourglassSum(array1));
