import { settaLoadbar } from './class1.js';


let albumImgsArray = document.getElementsByClassName("album");


const preferredAlbumsArray = [
    230935602, //la voce del padrone ---> Battiato
    723861, //immaculate ---> Madonna
    1075407, //born this way --->Lady Gaga
    1121401, //jazz--->Queen
    103636, //dresse4d to kill you --->Kiss
    86933072, //reise reise --->Rammstein
    111209, //volta la carta --->De André
    111211,
    328641,
    12047952
];

preferredAlbumsArray.forEach((e, i) => { 
    let url = `https://striveschool-api.herokuapp.com/api/deezer/album/${e}`;
    fetch(url).then(response => { if (response.ok) { return response.json(); } })
        .then(response => {
            console.log(response)
            albumImgsArray[i].children[0].children[0].setAttribute("src",`${response.cover_medium}`);
            let testi=document.getElementsByClassName("testo");
            testi[i].children[1].innerHTML = response.title;
        }).catch(error => console.log(error));
   
    albumImgsArray[i].addEventListener("mousedown", function () { 
        
        sessionStorage.setItem("selectedAlbum", url);
        window.location.href = "album.html";
    });

});

settaLoadbar(); //setto la loadbar con l'ultima track selezionata



