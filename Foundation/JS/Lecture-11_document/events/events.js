const button = document.querySelector("button");
const box = document.querySelector(".box");


// button.onclick=function(){
//     alert("Button was clicked");
// }

const colors = ["lightblue", "lightgreen", "green", "gray", "red"]
let i = 0;
button.addEventListener("click", function () {
    i = i % colors.length;
    box.style.backgroundColor = colors[i]
    i++;
}
)



// const button=document.querySelector("button");
// const box=document.querySelector(".box");
// const colors=["red","green","yellow","gray","lightblue"]
// let i = 0;
// function cb() {
//     i = i % colors.length;
//     box.style.backgroundColor = colors[i];
//     i++;
// }


// button.addEventListener("click",cb);

