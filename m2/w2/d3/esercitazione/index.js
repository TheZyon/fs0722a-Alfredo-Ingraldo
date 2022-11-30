
      let pesci = document.getElementsByClassName("pescino");
      let len = pesci.length;

document.querySelector("button").addEventListener("mousedown", function(){
    let fart = new Audio("Fart01.mp3");
let giorgia = new Audio("giorgia.mp3");
      for (let i = 0; i < len; i++) {
        pesci[i].style = `z-index: ${i}`;

        setInterval(function setMovement() {
          let rnd1 = Math.round(Math.random() * 200);
          let rnd2 = Math.round(Math.random() * 200);
          if (rnd2 > 150) {
            
            setTimeout(function(){
              
              console.log(`fart-${i}`);
              if(pesci[i].style.opacity=="0"){
                  pesci[i].style.opacity = "1";
                  fart.play();}
                else {
                  pesci[i].style.opacity = "0";
                  giorgia.play();
                  setTimeout(function(){
                    giorgia.pause();
                      giorgia.currentTime = 1000;
                  }, 1200);
                }
            },
               i*250);
          }
          document.documentElement.style.setProperty(`--o${i}`, `${rnd1}px`);
          document.documentElement.style.setProperty(`--v${i}`, `${rnd2}px`);
        }, 2000);
      }
});

