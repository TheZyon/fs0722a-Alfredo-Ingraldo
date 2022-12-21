//classe per calcoli su un user
export class CalcoloAbs {
    user;
    constructor(user) {
        this.user = user;
    }
}
export class CalcoloBasic extends CalcoloAbs {
    getUtileTasse() {
        if (typeof (this.user.tasseInps) === 'number' && typeof (this.user.tasseIrpef) === 'number') {
            return this.user.tasseInps + this.user.tasseIrpef;
        }
        else {
            return "errore";
        }
    }
    getTasseInps() { return this.user.tasseInps; }
    getTasseIrpef() { return this.user.tasseIrpef; }
    getRedditoAnnualeNetto() {
        let e = this.getUtileTasse();
        if (typeof (this.user.redditoAnnuoLordo) === 'number' && typeof (e) === 'number') {
            return this.user.redditoAnnuoLordo - e;
        }
        else {
            return "errore";
        }
    }
    message() { return "complimenti, sei una basic bitch!"; }
}
class CalcoloSexWorker extends CalcoloBasic {
    Message() { return "Pomplimenti!"; }
}
class CalcoloCocoBlueSky extends CalcoloBasic {
    message() {
        return "complimenti, il mondo ha bisogno di te!";
    }
}
