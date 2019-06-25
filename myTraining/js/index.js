let ret = document.getElementById("select")
let input  = document.getElementById("input_1")
let body = document.getElementById("body")
let label = document.getElementsByTagName("label")
let btn = document.getElementById("kimon")
let header = document.getElementById("header")


btn.addEventListener("click", reper);
function reper(){

if(input.value ==null  || input.value.length >1){
    alert ('this is not right')
}
}
function display (){
    input.value = "here we are"
}

function see(x){
body.style.background= x.value

document.getElementById("header").innerHTML = `This is a ${x.value} background`
header.style.textAlign = "center";

}


function showdate(x){
    x.innerHTML = Date()
}

function closedate(X){
    X.innerHTML = "submit"
}
 