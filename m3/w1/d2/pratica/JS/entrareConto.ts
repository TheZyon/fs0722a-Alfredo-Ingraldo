

var cta = document.querySelector("button");

var nome = document.querySelectorAll("input")[0].value;
var pass = document.querySelectorAll("input")[0].value;

document.getElementsByTagName("button")[0].addEventListener("mousedown", function () {
    var nome = document.querySelectorAll("input")[0].value;
    console.log(nome);
});