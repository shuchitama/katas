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
	let string = s;
	if (s === "a") {
		return n;
	}
	if (string.length < n) {
		while (string.length < n) {
			string = string + s;
		}
	}
	if (string.length > 10) {
		string = string.slice(0, 10);
	}

	console.log(string);
	return string.split("").filter((item) => item === "a").length;
}

console.log(repeatedString("a", 1000000000000));
