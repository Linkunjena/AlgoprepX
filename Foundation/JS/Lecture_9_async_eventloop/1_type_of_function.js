console.log("Hi functions:)");


//function -> function statement
// function fn(a) {
//     console.log("i am a fn ", a);
//      return "myself linkun.";
// }
//  fn(14);

// // // -> fn please execute your code
// // const rVal=fn("hello");
// // console.log("rVal", rVal);

//  const anotherVar =fn;
// //const rVal=anotherVar("something");
// const rVal = fn("hello");
// console.log("rVal",rVal);
// console.log("anotherVar",anotherVar)
//  console.log("rVal", rVal);
//  anotherVar("something");



// function expression
 const refFunction=function (helloParam) {
    console.log("Hello i am function",helloParam);
};

 refFunction("hello");



// // function -> arrow function
const arrowFn = (helloParam) => {
    console.log("Hello I am arrow function",helloParam);
}
arrowFn("hello");


// //IIFE -> immediatley invoked function expression
(function(a){
    console.log("I am function expression",a);
})("hello");



const declaration = function fn(greet) {
    console.log("hii my self linkun:)",greet);
}
declaration("hii fn")

const expression= (helloParam)=>{
    console.log("my self linkun jena",helloParam);
}
expression("Gandhi engineering college");

(function fn(helloParam) {
    console.log("i am intersted in coding journey",helloParam)

})("linkunjena")



