// Write a JavaScript function called `advancedManipulation` that performs the following operations on an array of strings:

// 1. Insert the string `"new"` at the second position in the array.
// 2. Remove the third element from the array.
// 3. Join all elements of the array into a single string, separated by a comma.


let words = ["apple", "banana", "cherry", "date"];
function advancedManipulation(words) {
    let firstWord = words.pop();
    words.push("new");
    words.push(firstWord);

   // remove
    words.splice(0, 1);

    // join
    let joinedStr = words.join(",");
    return joinedStr



}

let result = advancedManipulation(words);
console.log(result); // Output: "apple,new,cherry,date"





let stdName=["litu","chiku","mantu","situ","lipu"]
function fullName(stdName) {
    let firstName=stdName.shift();
    stdName.unshift("liku");
    stdName.unshift(firstName);
    stdName.splice(2,1);
    let joinstr=stdName.join(",");
    return joinstr;
    
}
let output=fullName(stdName);
console.log(output)