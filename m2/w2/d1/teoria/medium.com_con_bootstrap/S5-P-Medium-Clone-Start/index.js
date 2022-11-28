let nav = document.querySelector("header");
let btn = nav.children[1].children[1];

window.addEventListener("scroll", function (event) {
  let s = this.window.scrollY;
  console.log(s);
    if (s >= 390) {
        nav.style.background = "white";
        btn.style.background = "#1a8917";
    }
    else { 
        nav.style.background = "#ffc017";
        btn.style.background = "#191919";
    }
});

//facciamo l'animazione delle M

let svg = document.getElementsByTagName("svg")[0];
let g_array = svg.children[1].children[0].children;
let disp = [];

for (let i = 0; i< g_array.length/2; i++) { 
    disp[i]=2*i+1; //indici dispari di g2
} 

setInterval(function () {
    let rnd = Math.floor(Math.random() * disp.length);
    let m = g_array[disp[rnd]];
    if (m.getAttribute("opacity") == 0) {
        m.setAttribute("opacity", "1");
    }
    else { m.setAttribute("opacity", "0");}
}
    , 100);

setInterval(function () {
        let rnd = Math.floor(Math.random() * disp.length);
        let m = g_array[disp[rnd]];
        if (m.getAttribute("opacity") == 0) {
            m.setAttribute("opacity", "1");
        }
        else { m.setAttribute("opacity", "0");}
    }
    , 100);
     
setInterval(function () {
        let rnd = Math.floor(Math.random() * disp.length);
        let m = g_array[disp[rnd]];
        if (m.getAttribute("opacity") == 0) {
            m.setAttribute("opacity", "1");
        }
        else { m.setAttribute("opacity", "0");}
    }
        , 100);