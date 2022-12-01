
function tree(n,j) {
    let divFond = document.querySelector("main").children[0];
    let divSon = document.createElement("div");
    divSon.setAttribute("class", `alberelloNatale_${j}`);
    divFond.appendChild(divSon);
    divSon.style = "white-space:pre"; //questo serve per preservare gli spazi nel testo che inserirò nel div
  
    for (let i = 0; i < n; i++) {
      let s = "";
      let t = "";
      for (k = 0; k < 2 * (n - i - 1); k++) {
        /*ci serve solo per fare 2*(n-i-1) iterazioni che servono a mettere gli spazi a sinistra
        si scopre che questo è il numero giusto per allineare graficamente gli asterischi 
        in modo da formare un albero, e non n-i-1 come uno potrebbe pensare inizialmente*/
        t += " ";
      }
      for (let j = 0; j < 2 * i + 1; j++) {
        //in questo modo si fanno (i-esimo numero dispari)-iterazioni
        s += "*";
      }
      divSon.innerHTML += t + s + "<br>";
    }
}
  
for (let i = 0; i < 33; i++) { //33 sono gli anni di Cristo
    tree(i + 1,i+1);
}