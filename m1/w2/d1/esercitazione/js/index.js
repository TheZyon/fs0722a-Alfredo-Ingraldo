alert('Usa il pop up per dare dei messaggi');
window.alert('Sto studiando JS');


//agiungo una cosa

var anni = prompt("Il seguente contenuto può nuocere alla salute dei più piccoli. Quanti anni hai?");
if (anni<18) {
    location.href="https://www.youtube.com/watch?v=vJ2wcmfpcWo";
}


//tentativo di far cantare le Giorgia di cui avevamo parlato in chiamata

let btn=document.querySelector("button");
btn.addEventListener("click", function () {
    var giorgia=[];
    for (i = 0; i < 100; i++) { 
        
        //definisco l'oggetto "giorgia[i]"
        giorgia[i] = new Audio("../audio/giorgia.mp3");
        document.querySelector("body").appendChild(document.createElement("div"));
        document.querySelectorAll("div")[i + 1].innerHTML=`<button type="button" class="btn"> Giorgia n. ${i+1} </button>`;  
    }
    giorgia[0].play();
    


    //insertAdiacentElement
    //document.querySelector("body").insertAdjacentHTML("beforeend", document.createElement("div"));

    /*for (i = 0; i < 5; i++) {
        giorgia[i].audio.play();
        giorgia[i].addEventListener("timeupdate", function () {
            if (giorgia[i]._startTime - giorgia[i].audio.currentTime >= giorgia[i].duration) {
                player.pause();
            }
        }
        ); 
    }  */ 

});
