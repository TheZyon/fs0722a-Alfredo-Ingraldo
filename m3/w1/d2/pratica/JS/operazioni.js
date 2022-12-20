var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount() {
        this.balanceInit = 0; //balanceInit inizializzato a 0
    }
    SonAccount.prototype.deposit = function (soddi) {
        this.balanceInit += soddi;
        return "depositati euro: " + "".concat(soddi);
    };
    SonAccount.prototype.withdraw = function (soddi) {
        if (this.balanceInit >= soddi) {
            this.balanceInit -= soddi;
            return "ritirati euro: " + "".concat(soddi);
        }
        else {
            return "errore nel procedimento dalla banca...vale a dire che sei povero";
        }
    };
    SonAccount.prototype.stampaSaldoAttuale = function () {
        return "Possiedi: " + this.balanceInit;
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(nome, pass, interessi) {
        var _this = _super.call(this) || this;
        _this.interessi = interessi * 0.01;
        _this.nome = nome;
        _this.pass = pass;
        return _this;
    }
    MotherAccount.prototype.calcolaInteressi = function () {
        var soldiDaUscire = this.balanceInit * this.interessi + this.balanceInit;
        this.balanceInit = 0;
        return "Hai raccattato: ".concat(soldiDaUscire, "\u20AC. Pomplimenti!");
    };
    return MotherAccount;
}(SonAccount));
var namee = "Carlino";
var pass = "CarlinoBellino";
var interessi = 5;
var btnPrelievo = document.getElementsByTagName("button")[1];
var inputPrelievo = document.getElementsByTagName("input")[1];
var inputDeposito = document.getElementsByTagName("input")[0];
var btnDeposito = document.getElementsByTagName("button")[0];
var btnEstrattoConto = document.getElementsByTagName("button")[2];
var btnInteressi = document.getElementsByTagName("button")[3];
var out = document.getElementById("outputAtm");
//inizializzo il conto
var contoCarlino = new MotherAccount(namee, pass, interessi);
console.log(contoCarlino.nome);
//funziuonamento della CTA per il prelievo
btnPrelievo.addEventListener("mousedown", function () {
    out.innerHTML = contoCarlino.withdraw(eval(inputPrelievo.value));
});
btnDeposito.addEventListener("mousedown", function () {
    out.innerHTML = contoCarlino.deposit(eval(inputDeposito.value));
});
btnEstrattoConto.addEventListener("mousedown", function () {
    out.innerHTML = contoCarlino.stampaSaldoAttuale();
});
btnInteressi.addEventListener("mousedown", function () {
    out.innerHTML = contoCarlino.calcolaInteressi();
});
