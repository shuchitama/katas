/*
There is a string, s, of lowercase English letters that is repeated infinitely 
many times. Given an integer, n, find and print the number of letter a's in 
the first n letters of the infinite string.

Example

s = "abcac"

The substring we consider is "abcacabcac", the first 10 characters of 
the infinite string. There are 4 occurrences of a in the substring.
*/

function repeatedString(s, n) {
	// full string repetitions:
	const whole = Math.floor(n / s.length);

	// potential partial string at the end
	const partial = s.slice(0, n % s.length);

	//number of "a"s in whole string
	const numOfAInWhole = s.split("").filter((item) => item === "a").length;

	//number of "a"s in partial string
	const partialCount = partial.split("").filter((item) => item === "a").length;

	// total number of "a"s
	return numOfAInWhole * whole + partialCount;
}

console.log(repeatedString("a", 1000000000000));
console.log(repeatedString("abcd", 10));
console.log(repeatedString("aaca", 10));
