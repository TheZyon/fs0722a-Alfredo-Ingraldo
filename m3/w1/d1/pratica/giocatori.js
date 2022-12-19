"use strict";
tombolinaCheapDiMariello();
function tombolinaCheapDiMariello() {
    let giocatore1 = 33;
    let giocatore2 = 44;
    let data = new Date();
    console.log("Signore e signori, io sono mr. Ken Di Barbie, benvenuti alla tombolina cheap di Mariello. I numeri sono, per Giocatore 1 e Giocatore 2, rispettivamente: ", giocatore1, giocatore2);
    atteseInutili();
    setTimeout(function () {
        console.log("vedremo chi vincerà 'hihihih'(cit)");
        atteseInutili();
        setTimeout(function () {
            console.log("Sono le " + data.getHours() + " e giochiamo per " + data.getHours() + " etti di lire..");
            let rnd = Math.floor(Math.random() * 99 + 1); //random integer number in the interval [1,100)
            atteseInutili();
            setTimeout(function () {
                console.log("ahi ahi il numero estratto è..." + rnd);
                atteseInutili();
                setTimeout(function () {
                    if (giocatore1 == rnd || giocatore2 == rnd) {
                        console.log("uno dei due ha indovinato...");
                        atteseInutili();
                        setTimeout(function () {
                            if (giocatore1 == rnd) {
                                console.log("giocatore 1 ha vinto sessione");
                            }
                            else {
                                console.log("giocatore 2 ha vinto sessione");
                            }
                        }, 1200);
                    }
                    else {
                        console.log("nessuno ha vinto, ma vediamo chi si è avvicinato di più, dato che non abbiamo nulla da fare...");
                        atteseInutili();
                        setTimeout(function () {
                            let diff1 = Math.abs(giocatore1 - rnd);
                            let diff2 = Math.abs(giocatore2 - rnd);
                            Math.min(diff1, diff2) == diff1 ? console.log("giocatore 1") : console.log("giocatore 2");
                        }, 1200);
                    }
                }, 1200);
            }, 1200);
        }, 1200);
    }, 1200);
}
function atteseInutili() {
    for (let i = 1; i < 4; i++) {
        setTimeout(function () { console.log("."); }, 300 * i);
    }
}
