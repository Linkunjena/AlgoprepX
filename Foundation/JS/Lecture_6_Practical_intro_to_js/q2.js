/**
 * fizz buzz
 *  number -> 20
    1->20
    if number divisble by 3 -> fizz
    if number divisble by 5 -> buzz
    if number 3 & 5 both se divisble -> fizzBuzz
    other wise -> number
 *  */
// let target = 20;
// for (let num = 1; num <= target; num++) {
//     if (num % 5 == 0 && num % 3 == 0) {
//         console.log("Fizz buzz");
//         break;
//     }
//     else if (num % 3==0) {
//         console.log("fizz");
//     } else if (num % 5==0) {
//         console.log("buzz");
//     } else {
//         console.log(num);
//     }
// }


// let digit=50;
// for (let i = 0; i <=50; i++) {
// if (i%2==0) {
//    console.log(i,"this number is even.");
   
// }
// else{
//    console.log(i,"this number is odd.");
// }
   
// }


let chose = 25;
for (let i = 0; i <= chose; i++) {
   if (i%3==0 && i%5==0) {
      console.log(i,"this number is divisible by both");
   }else if (i%3==0) {
      console.log(i,"this number is divisible by 3")
   }else if (i%5==0) {
      console.log(i,"this number is divisible by 5.")
   }else{
      console.log(i,"this number not divisible by 3 and 5")
   }
   
}