//FUNZIONAMENTO
//prendo i dati inseriti dall'utente, 
// li metto in session storage e reindirizzo nella pagina associata al tipo di utente
// lì, creo variabile di tipo IUser usando l'interfaccia, e calcolo ciò che ci interessa usando 
// classe CalcoloTopeggi
let button = document.getElementsByTagName("button")[0];
button.addEventListener("mousedown", function () {
    //metto i valori degli input fields nel session storage e ridireziono l'utente nella pagina per fare i calcoli...
    //campi di input dati utente
    let fields = document.getElementById("IUtente").children;
    for (let i = 0; i < fields.length; i++) {
        sessionStorage.setItem(`${i}_fieldUtente`, fields[i].value);
    }
    //lavoro
    let e = document.getElementById("lavoro");
    sessionStorage.setItem("lavoro", e.options[e.selectedIndex].text);
    window.location.href = 'calcolo.html';
});
export {};
