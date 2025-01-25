 console.log("stack and heap");
// //  value types -> ram (stack)
// let a = 10;
// let str = "sjfbadbfkfbkdbf";
// let flag = true;

// // reference type  -> hard disk(heap)
// // arrays 
// // function
// let arr = [10, 20, 30]

function fn() {
    console.log("I am fn");
}
fn();

// values change 
// let a = 10;
// a = 20;
// let str = "hello";
// str = "Hi";
// console.log(a, str);
// let arr=[10,20,30];
// let arr2=[30,40,50];
// arr=arr2;
// console.log(arr2);


let varName=20;
varName=100;
let str="hello";
str="hi";
let arr = [10, 20, 30];
let arr2 = [30, 40, 50];
arr = arr2;
console.log(arr);
console.log("varName",varName)

const arr1=[10,20,30];
arr.push(100);
console.log("arr",arr);


