export type lavoro = "SexWorker" |"Guadagno con Onlyfans"| "Avvocato" | "Pusher di Rimoli" | "InsegnanteEpicode" | "PasseggiatoreCani" | "PasseggiatorePersone" | "Coco Blu Sky";

export interface IUser { 
    name: string|null;
    lavoro?: lavoro|null;
    codRedd: number|null;
    redditoAnnuoLordo: number|null;
    tasseInps: number|null;
    tasseIrpef: number|null;

}

//classe per calcoli su un user
export abstract class CalcoloAbs { 
    user: IUser;
    constructor(user: IUser) { 
        this.user = user;
    }
    abstract getUtileTasse(): number| string ;
    abstract getTasseInps(): number| null ;
    abstract getTasseIrpef(): number| null ;
    abstract getRedditoAnnualeNetto(): number| string;
}

export class CalcoloBasic extends CalcoloAbs { 
    getUtileTasse(): number|string {
        if (typeof (this.user.tasseInps) === 'number' && typeof (this.user.tasseIrpef) === 'number') {
            return this.user.tasseInps + this.user.tasseIrpef;
        } else { return "errore"; }
        }
    getTasseInps(): number| null { return this.user.tasseInps; }
    getTasseIrpef(): number| null { return this.user.tasseIrpef; }
    getRedditoAnnualeNetto(): number | string {
        let e = this.getUtileTasse();
        if (typeof (this.user.redditoAnnuoLordo) === 'number' && typeof (e) === 'number') {
            return this.user.redditoAnnuoLordo - e;
        }
        else { return "errore"; }
    }
    message(): string { return "complimenti, sei una basic bitch!"; }
}

class CalcoloSexWorker extends CalcoloBasic { 
    
    Message(): string { return "Pomplimenti!"; }
}

class CalcoloCocoBlueSky extends CalcoloBasic { 
    message(): string {
        return "complimenti, il mondo ha bisogno di te!"
    }
    
}
