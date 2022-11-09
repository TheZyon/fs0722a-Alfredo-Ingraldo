let inp = document.getElementById("input");
let btn = document.getElementById("btn");
let tasksDiv = document.getElementById("tasks");

btn.addEventListener("mousedown", function () {
  createTask(inp.value);
  console.log("new task created");
  taskWork();
});

let i = 0;

function createTask(name) {
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
      


        if (checkbox.checked == true) {taskText.style = "text-decoration: line-through"; }
        else { taskText.style.textDecoration = null;}
    
  });
  //fai funzionare il tasto canc
  canc.addEventListener("mousedown", function () {
    //let collTask=document.getElementById("tasks").children[i-1].children;
    let task = checkbox.parentElement;
    task.parentElement.removeChild(task);
  });
}
