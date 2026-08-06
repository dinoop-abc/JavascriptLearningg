// ===============================
// Searching & Checking in Strings
// ===============================

// Store a URL in a variable
let url = "https://staging.vwo.com/api/login?retry=true";

// -----------------------------------
// includes() Method
// Checks whether a string contains a specific word or text.
// Returns true or false.
// -----------------------------------

console.log(url.includes("staging"));      // true (because "staging" exists in the URL)

console.log(url.includes("production"));   // false (because "production" is not present)


// -----------------------------------
// startsWith() Method
// Checks whether the string starts with a specific text.
// Returns true or false.
// -----------------------------------

console.log(url.startsWith("https"));      // true (URL starts with "https")

console.log(url.startsWith("http://"));    // false (URL starts with "https://", not "http://")


// -----------------------------------
// endsWith() Method
// Checks whether the string ends with a specific text.
// Returns true or false.
// -----------------------------------

console.log(url.endsWith("true"));         // true (URL ends with "true")


// -----------------------------------
// indexOf() Method
// Finds the first occurrence of a character or word.
// Returns the index (position).
// If not found, returns -1.
// -----------------------------------

console.log(url.indexOf("a"));             // 10 (first 'a' is at index 10)


// -----------------------------------
// lastIndexOf() Method
// Finds the last occurrence of a character or word.
// -----------------------------------

console.log(url.lastIndexOf("a"));         // 26 (last 'a' is at index 26)


// -----------------------------------
// Search for text that doesn't exist
// -----------------------------------

console.log(url.indexOf("nothere"));       // -1 (text not found)


// -----------------------------------
// ASCII Value
// -----------------------------------

// ASCII value of uppercase A is 65
console.log("A".charCodeAt(0));            // 65

// ASCII value of lowercase a is 97
console.log("a".charCodeAt(0));            // 97