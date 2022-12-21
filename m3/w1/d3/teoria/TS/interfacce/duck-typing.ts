/* filosofia secondo cui se un uccello ha le stesse propeirtà di un anatra allora è un'anatra 
due oggetti sono dello stesso tipo se hanno le stesse proprietà (verifica fatta solo sulle proprietà non opzionali)
*/

/*"si possono crare oggetti più velocemnete 
perché si tiene il tipo di dato indipendente dalla creazione" */

interface IPoint { 
    x: number;
    y: number;
}

function addPoints(p1: IPoint, p2: IPoint): IPoint { 
    var x = p1.x + p2.x; 
    var y = p2.x + p2.y;
    return { x: x, y: y };
}

var newPoint: IPoint = addPoints({ x: 1, y: 2 }, { x: 2, y: 3 });

/* una scrittura del tipo:
var newPoint: IPoint = addPoints({x:1}, {a:1,y:2}); 
da errore perchè il primo parametro non è di tipo IPoint
*/



