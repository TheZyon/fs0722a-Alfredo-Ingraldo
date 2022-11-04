//#### USO JS PER COLORARE VELOCEMENTE I TASTI DELLA CALCOLATRICE ####
//coloro i tasti laterali per le operazioni non elementari

let arrayRighe = document.querySelectorAll("tr");
arrayRighe.forEach(function (riga) {
  riga.children[0].style = "background-color:#292F33";
  riga.children[1].style = "background-color:#292F33";
  riga.children[riga.children.length - 2].style = "background-color:#292F33";
  riga.children[riga.children.length - 1].style = "background-color:#292F33";
  //il metodo length è usato al posto di un numero fisso perchè l'ultima riga ha meno elementi delle altre
});

//coloro i tasti centrali della prima riga
for (let i = 2; i < 6; i++) {
  arrayRighe[0].children[i].style = "background-color:#E1E8ED; color: black";
}
//coloro il tasto di uguale
document.getElementById("equals").style = "background-color:#FF9900";

//metto la funzionalità per cui, quando si clicca su un tasto, il tasto si illumina

let btns = document.getElementsByClassName("btn");
for (let btn of btns) {
  btn.addEventListener("mousedown", function () {
    btn.style.filter = "brightness(200%)";
  });
  btn.addEventListener("mouseup", function () {
    btn.style.filter = "brightness(100%)";
  });
}


//facciamo dichiarare a Giorgia come si chiama, che lei ne ha bisogno

let giorgia = document.querySelector("button");
giorgia.addEventListener("mousedown", function () { 
  let g = new Audio("audio/giorgia.mp3");
  setTimeout(function () {
    g.play();
    giorgia.style.filter = "brightness(150%)";

    setTimeout(function(){
      g.pause();
      giorgia.style.filter = "brightness(100%)";
        g.currentTime = 1000;
    }, 1200);
}, 0);      
});
