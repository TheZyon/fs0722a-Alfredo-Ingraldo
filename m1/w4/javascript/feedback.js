let arrayStelle = document.getElementById("stelle").children;

/*mouse hover | oggetto.onmouse out = function(){

} */

let indexStellaCliccata = -1


for (let i = 0; i<10; i++) {

    arrayStelle[i].children[0].setAttribute("fill","#CCCC")

}

arrayStelle[0].children[0].setAttribute("fill","#CCCC")

for (let i = 0; i<10; i++) {

    arrayStelle[i].onmouseover = function (e) {
        colora (i)
    }
    arrayStelle[i].onmouseout = function (e) {
        for (let j = indexStellaCliccata+1; j<10; j++ ) {
            arrayStelle[j].children[0].setAttribute("fill","#CCCC")


        }
    }
    arrayStelle[i].addEventListener("mousedown",function () {

        indexStellaCliccata = i
        colora (i)


    })
}

function colora (i) { 
    for (let j = 0; j<i+1; j++ ) {
    arrayStelle[j].children[0].setAttribute("fill","#00FFFF")
    }
}


var text = document.getElementById('mycheckbox');
var button = document.getElementById("infoButton");

/*button.addEventListener("click", function()
{
    if(checker.checked){
       window.location.href = "index2.html" 
    }
else{
    alert("Ricordati di lasciare un commento")
}


})*/


