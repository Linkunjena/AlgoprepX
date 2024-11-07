// Ques-1 
/**
 * Synchronous : the code that is executed line by line
 * 
 * ****/
// function fn() {
//     console.log("Before");
//     console.log("I am fn");
// }
// console.log("After");
// fn();

/***
 * Asynchronous code : a part of code is executed 
 * first and another a section of code is delayed  
 and that part is executed later one
 * **/ 
// Ques-2 
//1
// //2
console.log("Before");
setTimeout(fn, 2000);
function fn() {
    console.log("I am fn");
}
//3
console.log("After");