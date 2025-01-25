console.log("JS class -2 :)");

/******
 * Arrays 
 * * array don't have a strict size 
 * -> add , remove elements from it 
 * 
 * 
 * ***/

let arr1 = [1, 2, 3, 4]
//  let arr2 = [];

// // print
// console.log(arr2);
// console.log("arr",arr);

// iterate
for (let i = 0; i < arr1.length; i++) {
    console.log("index", i, "value: ", arr1[i]);
}

/**************Important methods
 * 1. add last -> push
 * 2. remove last -> pop
 * 3. add first -> unshift
 * 4. remove first -> shift
 * ***************/
// 1. push() - add element at the end of the array

// arr.push(50);
//  console.log("after push", arr);
// // //2 .pop() - remove element from the end of the array
// arr.pop();
// console.log("after pop", arr);
// // // 3. unshift() - add element at the start of the array
// arr.unshift(5);
//  console.log("after unshift", arr);
// // // 4. shift() - remove element from the start of the array
//  arr.shift();
//  console.log("after shift", arr);
// console.log(arr);

//5. slice -  input->  start index  , end index 
// slice a copy the array from  sidx to edix - 1
let arr=[45,80,60,40]
let slicedArr = arr.slice(1, 3);
console.log("sliced Arr",slicedArr);
//  console.log("original arr", arr);



//6. splice-> input -> start index , delete count 
// splice original array me se element remove kr deta h 
// const spliedArray = arr.splice(1, 2);
// console.log("removed elements", spliedArray);
// console.log("after splice", arr);
 let arr3=[1,2,3,4,5,6,7]
let spliedArr=arr3.splice(2,3);
console.log("spliced array",spliedArr);
console.log("after array",arr3);

//7. indexOf - find the index of the element in the array
let arr4=[12,32,43,54,68,78]
console.log("index of 3", arr4.indexOf(3));
// console.log("index of 30", arr4.indexOf(30));
// //8. includes
// console.log("is element present", arr.includes(10));

//9. join - join the array elements with the specified separator
let fruits = ["apple", "oranges", "banana"];
let str = fruits.join("=");
console.log("string:", str);



// function advancedManipulation(words) {
// let firstWord = words.shift();
// words.unshift("new");
// words.unshift(firstWord);
// // remove
// words.splice(2, 1);

// // join
// let joinedStr = words.join(",");
// return joinedStr
// }

// let words = ["apple", "banana", "cherry", "date"];
// let result = advancedManipulation(words);
// console.log(result);




let name=["litu","chintu","miku","sai"]
function namechanger(name) {
 let firstName= name.shift();
//  console.log(firstName);
//  console.log(name);
  name.unshift("situ");
  name.unshift(firstName);
  name.splice(2,1)
  
  let joinedStr = name.join(",");
  return joinedStr;

}
let result = namechanger(name);
console.log(result);
