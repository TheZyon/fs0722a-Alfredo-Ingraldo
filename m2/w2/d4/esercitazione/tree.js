
let divFond = document.querySelector("main").children[0];

function tree(n,j) {
    let divSon = document.createElement("div");
    divSon.setAttribute("class", `alberelloNatale_${j}`);
    divFond.appendChild(divSon);
    divSon.style = "white-space:pre"; 
    for (let i = 0; i < n; i++) {
      let s = "";
      let t = "";
      for (k = 0; k < 2 * (n - i - 1); k++) {
          t += " ";
      }
      for (let j = 0; j < 2 * i + 1; j++) {
          s += "*";
      }
      divSon.innerHTML += t + s + "<br>";
    }
}
  
for (let i = 0; i < 33; i++) { //33 sono gli anni di Cristo
    tree(i + 1,i+1);
}

let divSon = document.createElement("div");
divFond.appendChild(divSon);
divSon.innerText = "se sei arrivato qui sei bravo";