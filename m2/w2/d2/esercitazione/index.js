
let buttons = [document.getElementById("welcomeSummer").children[0].children[1],
               document.getElementById("saldi").children[0].children[1]];
let state = [0, 0];


for (let i = 0; i < state.length; i++)
buttons[i].addEventListener("mousedown", function () {
    if (state[i] == 0) {
        buttons[i].parentElement.parentElement.children[1].setAttribute("class", "d-none");
        state[i] = Math.abs(1 - state[i]);
    } else {
        buttons[i].parentElement.parentElement.children[1].setAttribute("class", "d-inline");
        state[i] = Math.abs(1 - state[i]);
    }
 });