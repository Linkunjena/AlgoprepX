
let text = "Hello, World!";
console.log("length",text.length); // Output: 13

console.log(text.toUpperCase()); // Output: HELLO, WORLD!
 console.log(text.toLowerCase()); // Output: hello, world!
let output=text.indexOf("r");
console.log("the output is ",output);
 console.log(text.indexOf("W")); // Output: 7
 console.log(text.indexOf("world")); // Output: -1
let name = "linkun jena";
let output2=name.includes("linkun");
console.log(output2);

text.includes("Hello"); // Output: true
text.includes("hello"); // Output: false

let subText = text.substring(0, 9);
console.log(subText); // Output: Hello


// // there are some other funtions as well.

// // The`split()` method splits a string into an array of substrings based on a specified separator.

let words = text.split(" ");
console.log(words); // Output: ["Hello,", "World!"]

let joinedStrings = words.join("_");
console.log(joinedStrings); // Output: Hello,_World!

let text1 = "      Hello World!      ";
let text2 = text1.trim();
console.log(text2);
let message = "HELLO WORLD";

let char = message.charAt(3);
console.log(char); // Output: H
let ascii = message.charCodeAt(2);
console.log(ascii); // Output: 72

let newText = text.replace("World", "JavaScript");
console.log(newText); // Output: Hello, JavaScript!