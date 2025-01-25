let a = false;
console.log("Before");
function fn() {
     a = false;
    console.log("I broke the while loop",a);
}
setTimeout(fn, 2000);
console.log("After");
// while (a) {

// }

/****
 * Browser
 * * console.log-> browser
 * * setTimout -> browser
 * * document -> brwoser
 * * window -> browser
 * What is JS doing then 
 * Rule of thumb 
 *  JS : logic
 *  Enviornment : features
 * **/ 

/****
 * Mobile Application -> React Native -> JS
 * Frontend -> Browser -> JS
 * Backend -> Nodejs -> JS
 * Desktop App-> Electron -> JS
 * **/ 


