/**
 * variable declaration
 * how js run the code -> dynamically typed language
 * */

//console.log("Inside intro");
// varaible declaration -> varname is a varibale
// that currently holds undefined
let varName;
// // default value of a variable is undefined
 console.log("6",varName);
// // js -> numeric values
 varName=25;
console.log("The variable is:",varName);
varName=55.1;
console.log("The variable name is:",varName);


// // in js we have only strings
let newVar;
newVar="Hii my self linkun and your name please";
console.log("newVar",newVar) 
// // boolean 
// newVar=flase;
// console.log("18",newVar);

// // null[user-defined], undefined(non-existence)[js]
const NewElem=false;
console.log("this solution is true or not please some idea:", NewElem);

/*****
 * how to know the current type of a value that 
 * a  variable is having
 * There only numbers
 * There only strings
 * What types of values it can have
 *  * Primitive -> 
 *      ->number , strings, booleans, null ,undefined
 *      ->bigInt, symbols
 *  * Non-primitive-> 
 *          -> functions , arrays and objects
 * ***/

// varName=10;
// varName=false
// varName=10.1;
varName="Hello my self linkun :)"
// console.log(5/2);
console.log( "type of the string:" ,typeof varName);
varName='h'
 console.log("41", typeof varName);


/***********
 * 
 * conditional -> if else and switch cases 
 * **************/
let num=23;
if (num % 2 === 0) {
    console.log("I am even.");
    

}else{
    console.log("I am Odd.")
}

// if there are lot of if elses -> switch case 
// let day = "thursday"
// if (day == "mon") {
//     console.log("working");
// } else if (day == "tuesday" || day == "wednesday" ||
//     day == "thursday" || day == "friday"
// ) {
//     console.log("today is an off")
// } else if (day == "saturday" || day == "sunday") {
//     console.log("weekend");
// } else {
//     console.log("invalid day");
// }



// let day="sunday";
// if (day == "monday") {
//     console.log("this is working day:");
    
// }else if (day=="tuesday"||day=="wedsday"||day=="thusday") {
//     console.log("This is an office close.");
    
// }else if (day=="friday"||day=="satur day") {
//     console.log("This is an workl from Home.");
    
// }else if ("sunday") {
//     console.log("this is weekend.")
    
// }else{
// console.log("invalid day.")
// }



// switch case 
// let day="monday";
// switch (day) {
//     case "tuesday":
//         console.log("holiday");
//         break;
//     case "monday":
//     case "wednesday":
//     case "thursday":
//     case "friday":
//         console.log("Working");
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("weekend");
//         break;

//     default:
//         console.log("invalid day");
// }


let day="wednsday";
switch (day) {
    case "monday":
        console.log("This is an office.");
        break;
        case "Thusesday":
            case "wednsday":
                case "thusday":
                    console.log("this is work from home.");
                    break;
                    case "friday":
                        case "saturday":
                            console.log("This holyday.");
                            break;
                            case "sunday":
                                console.log("This day is special.");
                                break;


    default:
        console.log("value is invalid.");
        break;
}




/****
 * loops : -> while , for loop , do while, for each
 *
 * ****/

for(let num=1;num<=10;num++){
    console.log("number is ", num);
}




/***
 * functions -> resuable block of code create
 *
 * ***/

//  console.log("Hello");

 function fn() {
    console.log(" I am a function");
 }
 console.log("hello again");

 fn();


console.log("Hii hello i am fn1");
 function fn() {
    console.log("no, i am a fn2");
}
console.log("Never, gays i am fn3");
fn();


// function fn(a, b) {
//     console.log("a", a);
//     console.log("b", b);
//     let d = a + b;
//     return d;
// }

// fn("Hello ", "World");
// let result = fn(10, 20);
// console.log("result", result);


function fn( a, b){
    console.log("a",a);
    console.log("b",b);
    let c = a + b;
    return c;
}
let result = fn(5, 4);
console.log(result);

/**
 * strings : how strings work in js 
 * concatenation : appending a value to staring
 * */



let string1 = "I am string";
let string2 = 'I am string';
let templateString = `I am also string
 
but can be multiple line`

 console.log(string1);
 console.log(string2);
console.log(templateString);

function greet(firstNameVar) {
// console.log("Hi " + firstNameVar +"!")
console.log('Hi ' + firstNameVar +'!');

console.log(`Hi ${firstNameVar}!`);
}


let firstName = "Jasbir";
greet(firstName)


