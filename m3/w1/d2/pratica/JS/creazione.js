"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const conti_js_1 = require("./conti.js");
var cta = document.querySelector("button");
console.log(cta);
var nome = (_a = document.querySelector("form")) === null || _a === void 0 ? void 0 : _a.children[0].value;
var pass = (_b = document.querySelector("form")) === null || _b === void 0 ? void 0 : _b.children[1].value;
cta === null || cta === void 0 ? void 0 : cta.addEventListener("mousedown", function () {
    var mother = new conti_js_1.MotherAccount(nome, pass, 5);
    sessionStorage.setItem(nome, JSON.stringify(mother)); //metto i dati nel session storage
});
let conto = new conti_js_1.MotherAccount(nome, pass, 5);
