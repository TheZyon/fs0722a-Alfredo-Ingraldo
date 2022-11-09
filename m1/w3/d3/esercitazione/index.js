let inp = document.getElementById("input");
let btn = document.getElementById("btn");
let tasksDiv = document.getElementById("tasks");
let taskNames = []; //lista di stringhe con i nomi dei tasks

btn.addEventListener("mousedown", function () {
  createTask(inp.value);
  console.log("new task created");
  taskWork();
});


let i = 0;
function createTask(name) {
  taskNames[taskNames.length] = name;
  tasksDiv.appendChild(document.createElement("div"));
  tasksDiv.children[
    i
  ].innerHTML = `<input type="checkbox" id="checkbox${i}" class="checkbox"> <label for="checkbox${i}" id="text${i}">${name}</label> <span id="spanCanc${i}"><button id="canc${i}" class="cancBtn"> Canc </button></span>`; //inserisco l'HTML

  tasksDiv.children[i].style =
    "text-align:left;border-style:solid; border-color: #d9dad7; background-color:#e3f6f5; margin: 1rem;"; //metto lo stile
  //le tre parti dell'elemento creato:
  let completedCheckbox = document.getElementById(`checkbox${i}`);
  let taskText = document.getElementById(`text${i}`);
  let cancBtn = document.getElementById(`canc${i}`);

  //setto lo stile
  cancBtn.style = "background-color:#dc2f2f;"; //metto lo stile nel button di cancdellazione
  //document.getElementById(`spanCanc${i}`).style = "text-align:right;"; //tentativo di spostare il bottone a dx
  i++;
}

//metto la funzionalità: prendo l'indice del task e lo faccio lavorare
function taskWork() {
  let checkbox = document.getElementById(`checkbox${i - 1}`);
  let taskText = document.getElementById(`text${i - 1}`);
  let canc = document.getElementById(`canc${i - 1}`);

  //fai funzionare il checkbox
  checkbox.addEventListener("click", function () {
    if (checkbox.checked == true) {
      taskText.style = "text-decoration: line-through";
    } else {
      taskText.style.textDecoration = null;
    }
  });
  //fai funzionare il tasto canc
  canc.addEventListener("mousedown", function () {
    //let collTask=document.getElementById("tasks").children[i-1].children;
    let task = checkbox.parentElement;
    task.parentElement.removeChild(task);
    //cancello il nome dalla taskNames
    taskNames = taskNames.filter((e) => {
      return e != taskText.innerText;
    });
  });
}

//comparazione

let gList = [
  "ripeto ad alta voce e verifico se vero: sono Giorgia",
  "ripeto ad alta voce e verifico se vero: sono Cristiana",
  "ripeto ad alta voce e verifico se vero: sono una Donna",
  "ripeto ad alta voce e verifico se vero: sono una Madre",
  "ripeto ad alta voce senza verifica: non siamo fascisti",
  "convincersi che le cose che dico hanno senso",
  "aumentare il tetto del contante",
  "fare corsetta per superare le devianze",
  "fare il presepe",
  "cercare di capire come si dice LGBTQRSTUVZ",
  "assumere pervitin",
  "lisciare capelli e pelle viso con bava di lumaca",
  "assumere morfina",
  "chiamare Silvio per prossime direttive",
  "fare doccia",
  "lucidare il busto di Benito nello studio",
  "lavare i denti",
  "instituire polizia segreta contro devianze",
];


//comparazione liste
let somiglianza = 0;

document.getElementById("cmpbtn").addEventListener("mousedown", compara);
document.getElementById("cmpbtn").addEventListener("mousedown", canta);


function canta() { 
  let g = new Audio("audio/giorgia.mp3");
  setTimeout(function () {
    g.play();
    let giorgia = document.getElementById("cmpbtn");
    giorgia.style.filter = "brightness(150%)";

    setTimeout(function(){
      g.pause();
      giorgia.style.filter = "brightness(100%)";
        g.currentTime = 1000;
    }, 1200);
}, 0);      

}

function compara() {
  //con un for ottengo la somiglianza
  for (g of gList) {
    let contains = taskNames.find((e) => {
      return e == g;
    });
    if (contains != undefined) {
      somiglianza += 100 / 18;
    }
  }

  document.getElementById("somiglianza").
    innerHTML = `Tu e Giorgia avete una routine simile al ${somiglianza}%`;
  
  if (document.getElementById("mostra_lista").children.length==0) { document.getElementById("mostra_lista").appendChild(document.createElement("button"));}
  let gButton = document.getElementById("mostra_lista").firstChild;
  gButton.innerText = "Vedi la routine di G.";
  gButton.addEventListener("mousedown", function () { 
    for (let g of gList) {
      document.getElementById("mostra_lista").appendChild(document.createElement("p"));
      console.log(document.getElementById("mostra_lista"));
      document.getElementById("mostra_lista").children[document.getElementById("mostra_lista").children.length - 1].innerText = `N.${gList.indexOf(g)} `+ g;
    }
  });
  somiglianza = 0;
  
}




